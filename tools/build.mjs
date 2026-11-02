#!/usr/bin/env node
/**
 * Novus Ignis · generator strony.
 *
 * Czyta:   site.config.json, locales/<język>.json, tools/templates/home.html,
 *          content/<język>/*.md (dokumenty) i content/<język>/page/*.md (podstrony)
 * Tworzy:  index.html (język źródłowy) i <język>/index.html (strona główna z szablonu),
 *          <język>/<plik>.html (dokumenty), <język>/<slug>.html (podstrony), <język>/mapa-strony.html,
 *          <język>/slownik.html i js/slownik-<język>.js (ze słownika content/<język>/slownik.json, jeśli jest),
 *          <język>/<dokument>-zmiany.html i <język>/wersje/<dokument>-<data>.html (z content/<język>/wersje/),
 *          js/site-config.js, sitemap.xml, robots.txt, llms.txt, llms-full.txt, <język>/llms-full.txt.
 *
 * Uruchomienie (Node 18+, bez dodatkowych pakietów):  node tools/build.mjs
 * Szczegóły: TLUMACZENIA.md
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { stripComments, splitFrontMatter, normalizeNewlines, contentHash, diffSeq } from './lib/text.mjs';
import { checkTranslation } from './i18n-sync.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const LANGS = cfg.languages.map(l => l.code);
const SRC = cfg.sourceLang;
const BASE_URL = cfg.baseUrl || 'https://novusignis.org/';

// Wspólny nagłówek i stopka z js/layout.js (ten sam plik działa w przeglądarce).
const layoutCtx = { globalThis: {} };
layoutCtx.globalThis = layoutCtx;
vm.createContext(layoutCtx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/layout.js'), 'utf8'), layoutCtx);
const NILayout = layoutCtx.NILayout;

const locales = {};
for (const l of LANGS) {
  const p = path.join(ROOT, 'locales', l + '.json');
  locales[l] = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
}
// Brakujące klucze w danym języku uzupełniamy z języka źródłowego.
function deepFill(target, src) {
  for (const k of Object.keys(src)) {
    if (target[k] === undefined) target[k] = src[k];
    else if (typeof src[k] === 'object' && src[k] && typeof target[k] === 'object') deepFill(target[k], src[k]);
  }
  return target;
}
// Brakujące napisy: najpierw z angielskiego (zrozumiały dla większości czytelników przekładów), potem z oryginału.
for (const l of LANGS) if (l !== SRC && l !== 'en' && locales.en) deepFill(locales[l], locales.en);
for (const l of LANGS) if (l !== SRC) deepFill(locales[l], locales[SRC]);

const warnings = [];
const warn = m => { warnings.push(m); };

// ---------------------------------------------------------------- Markdown
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const LIST_RE = /^( *)([-*+]|\d{1,9}[.)])[ \t]+(.*)$/;
const HR_RE = /^ {0,3}([-*_])( *\1){2,} *$/;
const H_RE = /^ {0,3}(#{1,6})[ \t]+(.*?)[ \t]*#*[ \t]*$/;
const FN_RE = /^\[\^([^\]]+)\]:[ \t]?(.*)$/;
const TSEP_RE = /^ *\|? *:?-{3,}:? *(\| *:?-{3,}:? *)*\|? *$/;
const indentOf = l => l.match(/^ */)[0].length;
const isBlank = l => /^\s*$/.test(l);

function startsBlock(line, next) {
  if (H_RE.test(line) || HR_RE.test(line) || FN_RE.test(line) || /^ {0,3}>/.test(line)) return true;
  if (/^ *\|/.test(line) && next !== undefined && TSEP_RE.test(next)) return true;
  const m = line.match(LIST_RE);
  if (m && m[1].length <= 3 && (/[-*+]/.test(m[2]) || /^1[.)]$/.test(m[2]))) return true;
  return false;
}

function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|') && !s.endsWith('\\|')) s = s.slice(0, -1);
  const cells = []; let cur = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && s[i + 1] === '|') { cur += '|'; i++; continue; }
    if (s[i] === '|') { cells.push(cur.trim()); cur = ''; continue; }
    cur += s[i];
  }
  cells.push(cur.trim());
  return cells;
}

function parseBlocks(lines) {
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (isBlank(line)) { i++; continue; }
    let m;
    if ((m = line.match(H_RE))) { out.push({ t: 'h', level: m[1].length, text: m[2] }); i++; continue; }
    if (HR_RE.test(line)) { out.push({ t: 'hr' }); i++; continue; }
    if ((m = line.match(FN_RE))) {
      const buf = [m[2]]; i++;
      while (i < lines.length && !isBlank(lines[i]) && indentOf(lines[i]) >= 2 && !FN_RE.test(lines[i])) { buf.push(lines[i].trim()); i++; }
      out.push({ t: 'fn', id: m[1], text: buf.join('\n') });
      continue;
    }
    if (/^ {0,3}>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^ {0,3}>/.test(lines[i])) { buf.push(lines[i].replace(/^ {0,3}> ?/, '')); i++; }
      out.push({ t: 'quote', blocks: parseBlocks(buf) });
      continue;
    }
    if (/^ *\|/.test(line) && i + 1 < lines.length && TSEP_RE.test(lines[i + 1])) {
      const head = splitRow(line);
      const align = splitRow(lines[i + 1]).map(c => c.startsWith(':') && c.endsWith(':') ? 'center' : c.endsWith(':') ? 'right' : c.startsWith(':') ? 'left' : '');
      i += 2;
      const rows = [];
      while (i < lines.length && /^ *\|/.test(lines[i])) { rows.push(splitRow(lines[i])); i++; }
      out.push({ t: 'table', head, align, rows });
      continue;
    }
    if ((m = line.match(LIST_RE)) && m[1].length <= 3) {
      const baseIndent = m[1].length;
      const ordered = /\d/.test(m[2]);
      const start = ordered ? parseInt(m[2], 10) : 1;
      const items = [];
      let loose = false;
      while (i < lines.length) {
        const mm = lines[i].match(LIST_RE);
        if (!mm || mm[1].length !== baseIndent || /\d/.test(mm[2]) !== ordered) break;
        const afterMarker = lines[i].slice(baseIndent + mm[2].length).match(/^[ \t]*/)[0].length;
        const contentIndent = baseIndent + mm[2].length + Math.max(1, Math.min(afterMarker, 4));
        const buf = [mm[3]]; i++;
        while (i < lines.length) {
          const l = lines[i];
          if (isBlank(l)) {
            // pusta linia: element trwa, jeśli następna linia jest wcięta głębiej
            let j = i + 1; while (j < lines.length && isBlank(lines[j])) j++;
            if (j < lines.length && indentOf(lines[j]) > baseIndent && !(LIST_RE.test(lines[j]) && indentOf(lines[j]) === baseIndent)) {
              loose = true; for (let k = i; k < j; k++) buf.push(''); i = j; continue;
            }
            break;
          }
          const lm = l.match(LIST_RE);
          if (lm && lm[1].length <= baseIndent) break;
          if (indentOf(l) <= baseIndent && startsBlock(l, lines[i + 1])) break;
          buf.push(indentOf(l) >= contentIndent ? l.slice(contentIndent) : l.trimStart());
          i++;
        }
        items.push({ blocks: parseBlocks(buf) });
        // pusta linia między elementami
        let j = i; while (j < lines.length && isBlank(lines[j])) j++;
        if (j > i && j < lines.length) {
          const nm = lines[j].match(LIST_RE);
          if (nm && nm[1].length === baseIndent && /\d/.test(nm[2]) === ordered) { loose = true; i = j; continue; }
        }
      }
      out.push({ t: 'list', ordered, start, items, loose });
      continue;
    }
    // akapit
    const buf = [line]; i++;
    while (i < lines.length && !isBlank(lines[i]) && !startsBlock(lines[i], lines[i + 1])) { buf.push(lines[i]); i++; }
    out.push({ t: 'p', text: buf.join('\n') });
  }
  return out;
}

// ---------------------------------------------------------------- Inline
function findClose(s, i, open, close) {
  let depth = 0;
  for (let k = i; k < s.length; k++) {
    if (s[k] === '\\') { k++; continue; }
    if (s[k] === open) depth++;
    else if (s[k] === close) { depth--; if (depth === 0) return k; }
  }
  return -1;
}

function inline(src, ctx) {
  const store = [];
  const ph = html => { store.push(html); return '\u0000' + (store.length - 1) + '\u0001'; };
  let s = src;
  // kod
  s = s.replace(/`([^`]+)`/g, (_, c) => ph('<code>' + esc(c) + '</code>'));
  // przypisy i odnośniki
  let out = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && /[\\`*_{}\[\]()#+\-.!|]/.test(s[i + 1] || '')) { out += ph(esc(s[i + 1])); i++; continue; }
    if (s[i] === '[' && s[i + 1] === '^') {
      const end = s.indexOf(']', i);
      if (end > 0) { out += ph(ctx.fnRef(s.slice(i + 2, end))); i = end; continue; }
    }
    if (s[i] === '[') {
      const end = findClose(s, i, '[', ']');
      if (end > 0 && s[end + 1] === '(') {
        const pend = findClose(s, end + 1, '(', ')');
        if (pend > 0) {
          const text = s.slice(i + 1, end);
          let href = s.slice(end + 2, pend).trim();
          let title = '';
          const tm = href.match(/^(\S+)\s+"(.*)"$/); if (tm) { href = tm[1]; title = tm[2]; }
          if (href.startsWith('<') && href.endsWith('>')) href = href.slice(1, -1);
          out += ph(ctx.link(href, inline(text, ctx), title));
          i = pend; continue;
        }
      }
    }
    out += s[i];
  }
  s = esc(out);
  // adresy e-mail i gołe adresy WWW poza odnośnikami
  s = s.replace(/(^|[\s(])((?:https?:\/\/)[^\s<\u0000]+?)(?=[.,;:)]*(?:\s|$|\u0000))/g, (_, pre, url) => pre + ph(ctx.link(url.replace(/&amp;/g, '&'), esc(url.replace(/&amp;/g, '&')), '')));
  s = s.replace(/(^|[\s(])([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})(?![^\u0000]*\u0001)/g, (_, pre, mail) => pre + '<a href="mailto:' + mail + '">' + mail + '</a>');
  // wyróżnienia
  s = s.replace(/\*\*(?=\S)([\s\S]*?\S)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*(?=\S)([\s\S]*?\S)\*(?!\*)/g, '$1<em>$2</em>');
  // twarde łamanie linii: dwie spacje na końcu
  s = s.replace(/ {2,}\n/g, '<br>\n');
  // przywrócenie fragmentów
  for (let k = 0; k < 5 && /\u0000\d+\u0001/.test(s); k++) s = s.replace(/\u0000(\d+)\u0001/g, (_, n) => store[+n]);
  return s;
}

const plain = html => html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

const FOLD = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' };
function slugify(t) {
  return t.toLowerCase().replace(/[ąćęłńóśźż]/g, c => FOLD[c]).normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'sekcja';
}
// Stałe kotwice niezależne od języka: numery rozdziałów, paragrafy statutu, rozdziały rzymskie.
function headingId(text) {
  let m;
  if ((m = text.match(/^(\d+(?:\.\d+)*)\.?(\s|$)/))) return 's' + m[1].replace(/\./g, '-');
  if ((m = text.match(/^§\s*(\d+[a-z]?)/))) return 'par-' + m[1];
  if ((m = text.match(/^第\s*(\d+)\s*[条條]/))) return 'par-' + m[1]; // paragraf statutu po japońsku i chińsku („第5条”)
  if ((m = text.match(/^\S+\s+([IVXLC]+)\.(\s|$)/))) return 'r-' + m[1].toLowerCase();
  return slugify(text);
}

// ---------------------------------------------------------------- Render dokumentu
function renderDoc(md, ctx) {
  const lines = stripComments(normalizeNewlines(md)).split('\n');
  const blocks = parseBlocks(lines);
  const usedIds = new Set(['top', 'przypisy-lista']);
  const uniq = id => { let u = id, n = 2; while (usedIds.has(u)) u = id + '-' + n++; usedIds.add(u); return u; };

  // numerowane rozdziały do łączenia spisu treści
  const chapters = {};
  for (const b of blocks) if (b.t === 'h' && b.level === 2) {
    const m = b.text.match(/^(\d+)\.\s+(.*)$/); if (m) chapters[m[1]] = { text: m[2] };
  }
  // przypisy
  const fnDefs = new Map(); const fnOrder = []; const fnRefCount = {};
  const fnKey = id => id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  (function collect(bs) { for (const b of bs) { if (b.t === 'fn') fnDefs.set(b.id, b.text); if (b.t === 'list') b.items.forEach(it => collect(it.blocks)); if (b.t === 'quote') collect(b.blocks); } })(blocks);
  ctx.fnRef = id => {
    if (!fnDefs.has(id)) { ctx.warn('brak definicji przypisu [^' + id + ']'); return '[^' + esc(id) + ']'; }
    if (!fnOrder.includes(id)) fnOrder.push(id);
    const n = fnOrder.indexOf(id) + 1;
    fnRefCount[id] = (fnRefCount[id] || 0) + 1;
    const k = fnKey(id);
    return '<sup class="fn-ref"><a href="#fn-' + k + '" id="fnref-' + k + '-' + fnRefCount[id] + '" aria-label="' + esc(ctx.t.doc.footnote) + ' ' + n + '">' + n + '</a></sup>';
  };

  const toc = [];
  let title = '', description = '', fnPlaced = false;
  const FN_PH = '\u0000FOOTNOTES\u0001';

  function renderList(b) {
    const tag = b.ordered ? 'ol' : 'ul';
    const startAttr = b.ordered && b.start !== 1 ? ' start="' + b.start + '"' : '';
    // spis treści: lista numerowana zgodna z tytułami rozdziałów
    let linkChapters = false;
    if (b.ordered && Object.keys(chapters).length >= 3 && b.items.length >= 3) {
      linkChapters = b.items.every((it, idx) => {
        const ch = chapters[String(b.start + idx)];
        return ch && it.blocks.length === 1 && it.blocks[0].t === 'p' && plain(it.blocks[0].text) === plain(ch.text);
      });
    }
    const items = b.items.map((it, idx) => {
      if (linkChapters) {
        const n = String(b.start + idx);
        return '<li><a href="#s' + n + '">' + inline(it.blocks[0].text, ctx) + '</a></li>';
      }
      const tight = !b.loose && it.blocks.length >= 1 && it.blocks[0].t === 'p';
      const inner = it.blocks.map((bb, k) => (tight && k === 0 && bb.t === 'p') ? inline(bb.text, ctx) : renderBlock(bb)).join('\n');
      return '<li>' + inner + '</li>';
    }).join('\n');
    return { html: '<' + tag + startAttr + (linkChapters ? ' class="doc-contents"' : '') + '>\n' + items + '\n</' + tag + '>', linkChapters };
  }

  function renderBlock(b) {
    switch (b.t) {
      case 'h': {
        const html = inline(b.text, ctx);
        const txt = plain(html);
        if (b.level === 1 && !title) { title = txt; return '<h1 id="top">' + html + '</h1>'; }
        const id = uniq(headingId(txt));
        if (b.level <= 3) toc.push({ level: b.level, id, text: txt });
        return '<h' + b.level + ' id="' + id + '">' + html + '<a class="doc-anchor" href="#' + id + '" aria-label="' + esc(ctx.t.doc.link_here) + '">#</a></h' + b.level + '>';
      }
      case 'hr': return '<hr>';
      case 'p': {
        const html = inline(b.text, ctx);
        if (!description && title) description = plain(html);
        return '<p>' + html + '</p>';
      }
      case 'quote': return '<blockquote>' + b.blocks.map(renderBlock).join('\n') + '</blockquote>';
      case 'table': {
        const al = k => b.align[k] ? ' style="text-align:' + b.align[k] + '"' : '';
        const head = '<tr>' + b.head.map((c, k) => '<th' + al(k) + '>' + inline(c, ctx) + '</th>').join('') + '</tr>';
        const rows = b.rows.map(r => '<tr>' + b.head.map((_, k) => '<td' + al(k) + '>' + inline(r[k] || '', ctx) + '</td>').join('') + '</tr>').join('\n');
        return '<div class="table-wrap" tabindex="0"><table>\n<thead>' + head + '</thead>\n<tbody>\n' + rows + '\n</tbody>\n</table></div>';
      }
      case 'list': return renderList(b).html;
      case 'fn': if (fnPlaced) return ''; fnPlaced = true; return FN_PH;
    }
    return '';
  }

  // Oznaczamy nagłówek „Spis treści” (nagłówek, po którym jest lista połączona z rozdziałami), by nie powtarzać go w panelu bocznym.
  const parts = [];
  for (let k = 0; k < blocks.length; k++) {
    const b = blocks[k];
    if (b.t === 'list') {
      const r = renderList(b);
      if (r.linkChapters && k > 0 && blocks[k - 1].t === 'h') {
        const last = toc[toc.length - 1]; if (last) last.skip = true;
      }
      parts.push(r.html);
    } else parts.push(renderBlock(b));
  }
  let body = parts.filter(Boolean).join('\n');

  // lista przypisów
  const fnIds = [...fnOrder, ...[...fnDefs.keys()].filter(id => !fnOrder.includes(id))];
  for (const id of fnDefs.keys()) if (!fnOrder.includes(id)) ctx.warn('przypis [^' + id + '] nie jest użyty w tekście');
  let fnHtml = '';
  if (fnIds.length) {
    fnHtml = '<ol class="footnotes" id="przypisy-lista">\n' + fnIds.map((id, idx) => {
      const k = fnKey(id);
      const backs = Array.from({ length: fnRefCount[id] || 0 }, (_, r) => '<a class="fn-back" href="#fnref-' + k + '-' + (r + 1) + '" aria-label="' + esc(ctx.t.doc.back) + '">↩</a>').join(' ');
      return '<li id="fn-' + k + '" value="' + (idx + 1) + '">' + inline(fnDefs.get(id), { ...ctx, fnRef: x => '[^' + esc(x) + ']' }) + (backs ? ' ' + backs : '') + '</li>';
    }).join('\n') + '\n</ol>';
  }
  body = fnPlaced ? body.replace(FN_PH, fnHtml) : body + (fnHtml ? '\n<h2 id="przypisy">' + esc(ctx.t.doc.footnotes) + '</h2>\n' + fnHtml : '');

  if (description.length > 180) description = description.slice(0, 177).replace(/\s+\S*$/, '') + '…';
  return { title, description, body, toc: toc.filter(x => !x.skip) };
}

// ---------------------------------------------------------------- Rejestr stron
function relPath(fromFile, toFile) {
  let r = path.posix.relative(path.posix.dirname(fromFile), toFile);
  return r || path.posix.basename(toFile);
}

const MAIL = cfg.contact || 'salve@novusignis.org';
const contentFile = (lang, file) => path.join(ROOT, 'content', lang, file);
const hasContent = (lang, file) => fs.existsSync(contentFile(lang, file));
// Numery rachunków (strona „Wesprzyj fundację”) wpisuje się w jednym miejscu: content/konta.json.
// W treści stoi {{konto:pln}}, {{konto:eur}} albo {{konto:usd}}; generator wstawia numer IBAN w grupach po 4 znaki.
const KONTA_FILE = path.join(ROOT, 'content', 'konta.json');
const KONTA = fs.existsSync(KONTA_FILE) ? JSON.parse(fs.readFileSync(KONTA_FILE, 'utf8')) : {};
function ibanValid(iban) {
  const r = (iban.slice(4) + iban.slice(0, 4)).replace(/[A-Z]/g, c => String(c.charCodeAt(0) - 55));
  let m = 0;
  for (const d of r) m = (m * 10 + Number(d)) % 97;
  return m === 1;
}
function kontoText(lang, key, file) {
  let v = String(KONTA[key] || '').replace(/\s+/g, '').toUpperCase();
  if (!v) { warn('content/konta.json: brak numeru „' + key + '” (' + lang + '/' + file + ')'); return lang === 'pl' ? '(numer podamy wkrótce)' : '(number coming soon)'; }
  if (/^\d{26}$/.test(v)) v = 'PL' + v;
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(v) || !ibanValid(v)) warn('content/konta.json: numer „' + key + '” nie przechodzi kontroli sumy IBAN, sprawdź go');
  return v.replace(/(.{4})(?=.)/g, '$1 ');
}
const readContent = (lang, file) => fs.readFileSync(contentFile(lang, file), 'utf8').replace(/\{\{konto:([a-z]+)\}\}/g, (m, k) => kontoText(lang, k, file));

// Grupy menu (kolejność jak w nagłówku; „skroty” trafia do kolumny „Na skróty” w stopce).
const GROUPS = ['dlaczego', 'suveria', 'omniforum', 'fundacja', 'dokumenty', 'dolacz', 'skroty'];
const NAV_DOCS = ['manifest', 'suveria', 'omniforum', 'fundacja', 'benchmark', 'statut'];
const FULL_IDS = ['manifest', 'suveria', 'omniforum', 'fundacja', 'benchmark'];
const RESERVED_SLUGS = new Set(['index', 'mapa-strony', 'slownik']);

const docs = cfg.documents.map(d => ({ ...d, kind: 'doc', html: d.file.replace(/\.md$/, '.html'), langs: LANGS.filter(l => hasContent(l, d.file)) }));
const docById = new Map(docs.map(d => [d.id, d]));

function listSlugs(lang) {
  const dir = path.join(ROOT, 'content', lang, 'page');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_') && !f.startsWith('.')).map(f => f.replace(/\.md$/, ''));
}
const firstH1 = body => { const m = stripComments(body).match(/^\s{0,3}#[ \t]+(.+?)[ \t]*#*[ \t]*$/m); return m ? m[1].trim() : ''; };

const slugSet = new Set();
for (const l of LANGS) listSlugs(l).forEach(s => slugSet.add(s));
const pages = [...slugSet].sort().filter(slug => {
  if (RESERVED_SLUGS.has(slug)) { warn('page/' + slug + '.md: nazwa zarezerwowana (strona generowana), plik pominięty'); return false; }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) { warn('page/' + slug + '.md: slug może mieć tylko małe litery bez polskich znaków, cyfry i myślniki, plik pominięty'); return false; }
  return true;
}).map(slug => {
  const file = 'page/' + slug + '.md';
  const langs = LANGS.filter(l => hasContent(l, file));
  const meta = {}, body = {}, title = {}, menu = {};
  for (const l of langs) {
    const fm = splitFrontMatter(readContent(l, file));
    meta[l] = fm.meta; body[l] = fm.body;
    title[l] = fm.meta.tytul || firstH1(fm.body) || slug;
    if (!fm.meta.tytul && !firstH1(fm.body)) warn('content/' + l + '/' + file + ': brak pola tytul w metadanych i nagłówka #');
    menu[l] = fm.meta.menu || title[l];
  }
  if (!langs.includes(SRC)) warn('content/' + SRC + '/' + file + ': brak wersji źródłowej (jest tylko ' + langs.join(', ') + ')');
  const ref = meta[SRC] || meta[langs[0]];
  let group = (ref.grupa || '').trim();
  if (!GROUPS.includes(group)) { warn('content/' + (meta[SRC] ? SRC : langs[0]) + '/' + file + ': ' + (group ? 'nieznana grupa „' + group + '”' : 'brak pola grupa') + ' (dozwolone: ' + GROUPS.join(', ') + '); strona trafi do „Inne” na mapie strony i nie pojawi się w menu'); group = ''; }
  const order = Number(ref.kolejnosc);
  return { kind: 'page', id: slug, slug, file, html: slug + '.html', langs, meta, body, title, menu, group, order: Number.isFinite(order) && ref.kolejnosc !== undefined ? order : 999 };
});
const mapaEntry = { kind: 'page', id: 'mapa-strony', slug: 'mapa-strony', generated: true, html: 'mapa-strony.html', langs: LANGS.slice(), group: 'skroty', order: 900 };
const homeEntry = { kind: 'home', id: 'home', html: '', langs: LANGS.slice() };

const byFile = new Map();
for (const e of [...docs, ...pages]) byFile.set(e.file, e);

// ---------------------------------------------------------------- Słownik pojęć
// content/<język>/slownik.json -> <język>/slownik.html, js/slownik-<język>.js i podpowiedzi przy pojęciach.
// Język bez słownika: bez strony słownika i bez podpowiedzi.
const GLOSS_SLUG = 'slownik';
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const normForm = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();

function loadGlossary(lang) {
  const file = 'content/' + lang + '/slownik.json';
  if (!hasContent(lang, 'slownik.json')) return null;
  let raw;
  try { raw = JSON.parse(readContent(lang, 'slownik.json')); } catch (e) { warn(file + ': nieprawidłowy JSON (' + e.message + '), słownik pominięty'); return null; }
  const entries = [], ids = new Set(), forms = new Map();
  for (const h of raw.hasla || []) {
    if (!h || !h.id || !h.termin || !h.definicja) { warn(file + ': hasło bez pola id, termin lub definicja pominięte'); continue; }
    if (ids.has(h.id)) { warn(file + ': powtórzone id „' + h.id + '”, drugie hasło pominięte'); continue; }
    ids.add(h.id);
    entries.push({ id: h.id, termin: h.termin, lacina: h.lacina || '', definicja: h.definicja, zrodlo: h.zrodlo || '', zrodlo_opis: h.zrodlo_opis || '', auto: h.oznaczaj !== false, forms: [...new Set([h.termin, ...(h.warianty || [])])] });
  }
  for (const e of entries) for (const f of e.forms) {
    const k = normForm(f);
    if (forms.has(k) && forms.get(k) !== e.id) { warn(file + ': forma „' + f + '” należy do dwóch haseł (' + forms.get(k) + ', ' + e.id + '), zostaje pierwsze'); continue; }
    forms.set(k, e.id);
  }
  if (!entries.length) return null;
  const alts = [...forms.keys()].sort((a, b) => b.length - a.length || a.localeCompare(b)).map(k => k.split(' ').map(reEsc).join('\\s+'));
  const re = new RegExp('(?<![\\p{L}\\p{N}_])(?:' + alts.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
  // Wyrażenie do oznaczania w treści stron: bez haseł z polem "oznaczaj": false (te zostają tylko w słowniku i w definicjach).
  const autoIds = new Set(entries.filter(e => e.auto).map(e => e.id));
  const pageAlts = [...forms.keys()].filter(k => autoIds.has(forms.get(k))).sort((a, b) => b.length - a.length || a.localeCompare(b)).map(k => k.split(' ').map(reEsc).join('\\s+'));
  const rePage = pageAlts.length ? new RegExp('(?<![\\p{L}\\p{N}_])(?:' + pageAlts.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu') : null;
  entries.sort((a, b) => a.termin.localeCompare(b.termin, lang));
  return { lang, entries, byId: new Map(entries.map(e => [e.id, e])), forms, re, rePage };
}
const glossaries = {};
for (const l of LANGS) { const g = loadGlossary(l); if (g) glossaries[l] = g; }
const glossLangs = LANGS.filter(l => glossaries[l]);

// Fragment tekstu (już z zamienionymi znakami specjalnymi): pierwsze wystąpienie każdego hasła zamieniamy przez mk(id, słowo).
function markText(G, text, used, mk, skipId, re) {
  if (re === null) return text;
  return text.replace(re || G.re, m => {
    const id = G.forms.get(normForm(m));
    if (!id || id === skipId || used.has(id)) return m;
    used.add(id);
    return mk(id, m);
  });
}
// HTML: oznaczamy tylko tekst w <p>, <li>, <td>, poza nagłówkami, odnośnikami, przyciskami, <code> i cytatami.
const GLOSS_SKIP = new Set(['a', 'button', 'code', 'pre', 'kbd', 'samp', 'script', 'style', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'th', 'summary', 'sup', 'sub', 'svg', 'select', 'textarea', 'label']);
const GLOSS_BLOCK = new Set(['p', 'li', 'td']);
const HTML_VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'wbr', 'source', 'col', 'area', 'base', 'embed', 'param', 'track']);
function glossifyHtml(G, html, used, mk) {
  const tagRe = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>/g;
  const stack = [];
  let skip = 0, block = 0, pos = 0, m, out = '';
  const text = s => (skip === 0 && block > 0) ? markText(G, s, used, mk, undefined, G.rePage) : s;
  while ((m = tagRe.exec(html))) {
    out += text(html.slice(pos, m.index)) + m[0];
    pos = tagRe.lastIndex;
    if (!m[2]) continue;
    const name = m[2].toLowerCase();
    if (m[1]) {
      const at = stack.lastIndexOf(name);
      if (at < 0) continue;
      while (stack.length > at) { const n = stack.pop(); if (GLOSS_SKIP.has(n)) skip--; if (GLOSS_BLOCK.has(n)) block--; }
    } else if (!HTML_VOID.has(name) && !/\/\s*$/.test(m[3])) {
      stack.push(name);
      if (GLOSS_SKIP.has(name)) skip++;
      if (GLOSS_BLOCK.has(name)) block++;
    }
  }
  return out + text(html.slice(pos));
}

// Miejsce, z którego pochodzi definicja: plik dokumentu w danym języku (albo źródłowym) z kotwicą.
function glossSource(e, lang) {
  if (!e.zrodlo) return null;
  const [f, hash] = e.zrodlo.split('#');
  const te = byFile.get(f);
  if (!te) { warn('content/' + lang + '/slownik.json: hasło „' + e.id + '”: źródło „' + e.zrodlo + '” nie jest znanym plikiem'); return null; }
  const tl = te.langs.includes(lang) ? lang : (te.langs.includes(SRC) ? SRC : te.langs[0]);
  return { url: tl + '/' + te.html + (hash ? '#' + hash : ''), lang: tl };
}

// js/slownik-<język>.js: definicje dla podpowiedzi (js/gloss.js); pojęcia w definicjach oznaczone jako <a class="gloss" data-gloss>.
function glossData(lang) {
  const G = glossaries[lang], t = locales[lang];
  const terms = {};
  for (const e of G.entries) {
    const src = glossSource(e, lang);
    terms[e.id] = {
      t: e.termin + (e.lacina ? ' (' + e.lacina + ')' : ''),
      d: markText(G, esc(e.definicja), new Set(), (id, w) => '<a class="gloss" data-gloss="' + id + '">' + w + '</a>', e.id),
      s: src ? src.url : '',
      l: e.zrodlo_opis,
      m: src && src.lang !== lang ? src.lang.toUpperCase() : ''
    };
  }
  const tip = (t.glossary && t.glossary.tip) || {};
  return { lang, page: lang + '/' + GLOSS_SLUG + '.html', ui: { label: tip.label || '', back: tip.back || '', close: tip.close || '', glossary: tip.glossary || '', source: (t.glossary && t.glossary.source) || '' }, terms };
}
fs.mkdirSync(path.join(ROOT, 'js'), { recursive: true });
for (const l of LANGS) {
  const f = path.join(ROOT, 'js', 'slownik-' + l + '.js');
  if (glossaries[l]) fs.writeFileSync(f, '/* Plik tworzony automatycznie przez tools/build.mjs z content/' + l + '/slownik.json. Nie edytuj ręcznie. */\nwindow.NI_GLOSS = ' + JSON.stringify(glossData(l)) + ';\n');
  else if (fs.existsSync(f)) fs.rmSync(f);
}

const slownikEntry = glossLangs.length ? { kind: 'page', id: GLOSS_SLUG, slug: GLOSS_SLUG, generated: true, noGloss: true, html: GLOSS_SLUG + '.html', langs: glossLangs, group: 'skroty', order: 800 } : null;
mapaEntry.noGloss = true;

// js/site-config.js: lista języków, dokumentów i podstron (dla menu, stopki i skryptów na stronach)
const siteData = {
  sourceLang: SRC,
  languages: cfg.languages,
  docs: {},
  pages: {},
  // Adres, na który czytelnik sam wysyła uwagę do tekstu (js/remark.js).
  mail: MAIL,
  ui: Object.fromEntries(LANGS.map(l => [l, { not_translated: locales[l].doc?.not_translated || '', reading_original: locales[l].doc?.reading_original || '', source_name: locales[l].doc?.source_name || '', remark: locales[l].doc?.remark || {}, mail: locales[l].mail || {}, ask: locales[l].ask || {}, compare: locales[l].doc?.compare || {} }]))
};
for (const d of docs) siteData.docs[d.id] = { path: d.html, langs: d.langs, titles: {} };
for (const p of pages) siteData.pages[p.slug] = { path: p.html, langs: p.langs, titles: p.title, menu: p.menu, desc: {}, group: p.group, order: p.order };
siteData.pages[mapaEntry.slug] = { path: mapaEntry.html, langs: mapaEntry.langs, titles: Object.fromEntries(LANGS.map(l => [l, locales[l].sitemap?.title || 'Mapa strony'])), menu: Object.fromEntries(LANGS.map(l => [l, locales[l].sitemap?.title || 'Mapa strony'])), desc: Object.fromEntries(LANGS.map(l => [l, locales[l].sitemap?.desc || ''])), group: mapaEntry.group, order: mapaEntry.order, generated: true };
if (slownikEntry) {
  const byLang = fn => Object.fromEntries(glossLangs.map(l => [l, fn(locales[l])]));
  siteData.pages[GLOSS_SLUG] = { path: slownikEntry.html, langs: glossLangs, titles: byLang(t => t.glossary.title), menu: byLang(t => (t.nav.shortcuts || {}).slownik || t.glossary.title), desc: byLang(t => t.glossary.intro), group: slownikEntry.group, order: slownikEntry.order, generated: true };
}

// ---------------------------------------------------------------- Renderowanie treści (dokumenty i podstrony)
function makeCtx(entry, lang, pagePath) {
  return {
    t: locales[lang],
    warn: m => warn(pagePath + ': ' + m),
    link(href, textHtml, title) {
      const t = title ? ' title="' + esc(title) + '"' : '';
      if (/^(mailto:|tel:)/i.test(href)) return '<a href="' + esc(href) + '"' + t + '>' + textHtml + '</a>';
      if (/^[a-z][a-z0-9+.-]*:|^\/\//i.test(href)) return '<a href="' + esc(href) + '"' + t + ' rel="noopener" target="_blank">' + textHtml + '</a>';
      if (href.startsWith('#')) return '<a href="' + esc(href) + '"' + t + '>' + textHtml + '</a>';
      const [p, hash] = href.split('#');
      if (/\.md$/i.test(p)) {
        const target = path.posix.normalize(path.posix.join(path.posix.dirname(entry.file), p));
        const te = byFile.get(target);
        if (!te) { this.warn('odnośnik do nieznanego pliku ' + href); return '<a href="' + esc(href) + '"' + t + '>' + textHtml + '</a>'; }
        const tl = te.langs.includes(lang) ? lang : (te.langs.includes(SRC) ? SRC : te.langs[0]);
        const url = relPath(pagePath, tl + '/' + te.html) + (hash ? '#' + hash : '');
        const mark = tl !== lang ? ' <span class="doc-lang-mark">(' + tl.toUpperCase() + ')</span>' : '';
        return '<a href="' + esc(url) + '"' + t + (tl !== lang ? ' hreflang="' + tl + '"' : '') + '>' + textHtml + '</a>' + mark;
      }
      return '<a href="' + esc(href) + '"' + t + '>' + textHtml + '</a>';
    }
  };
}

const rendered = [];
const syncNotes = [];
function checkSync(entry, lang) {
  if (lang === SRC) return false;
  const st = checkTranslation(lang, entry.file);
  const name = 'content/' + lang + '/' + entry.file;
  if (st.state === 'outdated') {
    syncNotes.push(name + ': tłumaczenie starsze od oryginału (akapity źródła do sprawdzenia: ' + st.changes.length + '; szczegóły: node tools/i18n-sync.mjs status)');
    return true;
  }
  if (st.state === 'unmarked') syncNotes.push(name + ': brak śladu synchronizacji (po sprawdzeniu tłumaczenia uruchom: node tools/i18n-sync.mjs mark ' + name + ')');
  return false;
}

// Strona „Nazwy w różnych językach”: {{terminologia:nazwy}} i {{terminologia:przeklady}} zamieniają się na tabele
// ze wspólnego słownika content/terminologia.json (nazwy łacińskie i stałe przekłady terminów).
const TERM_FILE = path.join(ROOT, 'content', 'terminologia.json');
const TERM_TXT = { pl: { latin: 'Nazwa łacińska', meaning: 'Co znaczy' }, en: { latin: 'Latin name', meaning: 'Meaning' } };
function terminologiaMd(lang, part) {
  const data = fs.existsSync(TERM_FILE) ? JSON.parse(fs.readFileSync(TERM_FILE, 'utf8')) : {};
  const T = TERM_TXT[lang] || TERM_TXT.en;
  const langs = (data.jezyki || []).filter(l => LANGS.includes(l));
  const name = l => (cfg.languages.find(x => x.code === l) || {}).name || l;
  const cell = v => String(v || '').replace(/\|/g, '/');
  const row = cells => '| ' + cells.map(cell).join(' | ') + ' |';
  const table = (cols, rows) => [row(cols), row(cols.map(() => '---')), ...rows.map(row)].join('\n');
  if (part === 'nazwy') {
    const rows = (data.nazwy || []).map(e => ['*' + e.lacina + '*', (e.znaczenie || {})[lang] || (e.znaczenie || {}).en || '', ...langs.map(l => e[l] || e.lacina)]);
    return table([T.latin, T.meaning, ...langs.map(name)], rows);
  }
  if (part === 'przeklady') {
    const rows = (data.przeklady || []).map(e => langs.map(l => e[l] || ''));
    return table(langs.map(name), rows);
  }
  return '';
}

// Strona „Statystyki strony”: {{statystyki}} w treści zamienia się na tabele z content/statystyki.json
// (zbiorcze liczby z tools/statystyki.mjs). Tytuły stron biorą się z siteData, więc działa po renderowaniu dokumentów.
const STAT_FILE = path.join(ROOT, 'content', 'statystyki.json');
const STAT_TXT = {
  pl: { empty: 'Pierwsze liczby pokażemy tutaj, gdy policzymy pierwszy pełny miesiąc.', people: 'Miesiąc po miesiącu: ludzie', bots: 'Miesiąc po miesiącu: roboty', top: 'Najczęściej czytane strony', files: 'Pobrania plików',
    peopleCols: ['Miesiąc', 'Odsłony stron', 'Pobrania plików', 'Przez model, na prośbę człowieka'],
    botCols: ['Miesiąc', 'Wyszukiwarki', 'Roboty firm od modeli', 'Inne roboty', 'Pobrania plików llms przez modele'],
    topCols: ['Strona', 'Odsłony', 'Po polsku', 'Po angielsku'], fileCols: ['Plik', 'Pobrania'], home: 'Strona główna', locale: 'pl-PL' },
  en: { empty: 'We will show the first numbers here once we have counted the first full month.', people: 'Month by month: people', bots: 'Month by month: bots', top: 'Most read pages', files: 'File downloads',
    peopleCols: ['Month', 'Page views', 'File downloads', 'Via a model, at a person\'s request'],
    botCols: ['Month', 'Search engines', 'Model company crawlers', 'Other bots', 'llms files fetched by models'],
    topCols: ['Page', 'Views', 'In Polish', 'In English'], fileCols: ['File', 'Downloads'], home: 'Home page', locale: 'en-US' },
};
function statystykiMd(lang) {
  const T = STAT_TXT[lang] || STAT_TXT.en;
  const data = fs.existsSync(STAT_FILE) ? JSON.parse(fs.readFileSync(STAT_FILE, 'utf8')) : {};
  const months = (data.miesiace || []).filter(m => m && m.miesiac);
  if (!months.length) return T.empty;
  const num = n => Number(n || 0).toLocaleString(T.locale);
  const sum = o => Object.values(o || {}).reduce((a, b) => a + b, 0);
  const label = m => { const [y, mo] = m.split('-').map(Number); const s = new Date(Date.UTC(y, mo - 1, 1)).toLocaleString(T.locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }); return s.charAt(0).toUpperCase() + s.slice(1); };
  const row = cells => '| ' + cells.join(' | ') + ' |';
  const table = (cols, rows) => [row(cols), row(cols.map(() => '---')), ...rows.map(row)].join('\n');
  const rev = months.slice().reverse();
  const out = ['### ' + T.people, '', table(T.peopleCols, rev.map(m => [label(m.miesiac), num(sum(m.odslony)), num(sum(m.pobrania)), num((m.roboty || {}).modele_na_prosbe)])),
    '', '### ' + T.bots, '', table(T.botCols, rev.map(m => [label(m.miesiac), num((m.roboty || {}).wyszukiwarki), num((m.roboty || {}).modele_indeks), num((m.roboty || {}).inne), num(m.modele_llms)]))];
  // najczęściej czytane strony w ostatnim miesiącu: adres → strona lub dokument (oba języki razem)
  const last = months[months.length - 1];
  const byPath = {};
  for (const [k, v] of Object.entries(siteData.docs)) byPath[v.path] = { key: 'doc:' + k, title: v.titles };
  for (const [k, v] of Object.entries(siteData.pages)) byPath[v.path] = { key: 'page:' + k, title: v.titles };
  const agg = new Map();
  for (const [p, n] of Object.entries(last.odslony || {})) {
    const m = /^\/(?:([a-z]{2})\/)?(.*)$/.exec(p) || [];
    const lg = m[1] || SRC, rest = m[2] || '';
    const hit = rest === '' ? { key: 'home', title: null } : byPath[rest];
    const key = hit ? hit.key : 'path:' + p;
    const name = hit ? (hit.title ? (hit.title[lang] || hit.title[SRC] || rest) : T.home) : p;
    const a = agg.get(key) || { name, total: 0, pl: 0, en: 0 };
    a.total += n; if (lg === 'en') a.en += n; else a.pl += n;
    agg.set(key, a);
  }
  const top = [...agg.values()].sort((a, b) => b.total - a.total).slice(0, 10);
  if (top.length) out.push('', '### ' + T.top + ' (' + label(last.miesiac).toLowerCase() + ')', '', table(T.topCols, top.map(a => [a.name, num(a.total), num(a.pl), num(a.en)])));
  const files = Object.entries(last.pobrania || {}).sort((a, b) => b[1] - a[1]);
  if (files.length) out.push('', '### ' + T.files + ' (' + label(last.miesiac).toLowerCase() + ')', '', table(T.fileCols, files.map(([f, n]) => ['`' + f + '`', num(n)])));
  return out.join('\n');
}

for (const d of docs) {
  for (const lang of d.langs) {
    const pagePath = lang + '/' + d.html;
    const r = renderDoc(readContent(lang, d.file), makeCtx(d, lang, pagePath));
    siteData.docs[d.id].titles[lang] = r.title;
    rendered.push({ entry: d, lang, pagePath, r, outdated: checkSync(d, lang) });
  }
}
for (const p of pages) {
  for (const lang of p.langs) {
    const pagePath = lang + '/' + p.html;
    let body = p.body[lang].replace('{{statystyki}}', () => statystykiMd(lang)).replace(/\{\{terminologia:(nazwy|przeklady)\}\}/g, (m, part) => terminologiaMd(lang, part));
    if (!/^\s{0,3}#[ \t]+\S/.test(stripComments(body).replace(/^\s+/, ''))) body = '# ' + p.title[lang] + '\n\n' + body;
    const r = renderDoc(body, makeCtx(p, lang, pagePath));
    r.title = p.title[lang];
    if (p.meta[lang].opis) r.description = p.meta[lang].opis;
    siteData.pages[p.slug].desc[lang] = r.description;
    rendered.push({ entry: p, lang, pagePath, r, outdated: checkSync(p, lang) });
  }
}
syncNotes.forEach(m => warn(m));

// ---------------------------------------------------------------- Wersje dokumentów
// content/<język>/wersje/<dokument>.json: rejestr wersji (data, poprzednia, opis zmiany; w oryginale przy najnowszej
// wersji także odcisk treści). content/<język>/wersje/<dokument>/<data>.md: zachowane poprzednie brzmienie.
// Powstają z nich: <dokument>-zmiany.html (tylko to, co przybyło i ubyło, z opisem zmiany) i wersje historyczne
// wersje/<dokument>-<data>.html. Różnice liczymy z plików, bez historii gita. Statut ma własny rejestr zmian.
const stemOf = file => file.replace(/\.md$/, '');
const registerPath = (lang, file) => 'content/' + lang + '/wersje/' + stemOf(file) + '.json';
function readRegister(lang, file) {
  const f = path.join(ROOT, registerPath(lang, file));
  if (!fs.existsSync(f)) return null;
  const list = (JSON.parse(fs.readFileSync(f, 'utf8')).wersje || []).slice().sort((a, b) => b.data.localeCompare(a.data));
  return list.length ? list : null;
}
const versionFile = (lang, file, date) => path.join(ROOT, 'content', lang, 'wersje', stemOf(file), date + '.md');
const changesHtml = file => stemOf(file) + '-zmiany.html';
const versionHtml = (file, date) => 'wersje/' + stemOf(file) + '-' + date + '.html';
// Bloki rozdzielone pustą linią (jak akapity w i18n-sync), z pełną treścią.
const blocksOf = md => stripComments(splitFrontMatter(md).body).split(/\n[ \t]*\n/).filter(s => s.trim())
  .map(s => ({ md: s.replace(/^\n+|\s+$/g, ''), key: s.replace(/\s+/g, ' ').trim() }));
const headingOf = b => (!b.md.includes('\n') && b.md.match(H_RE)) || null;
// Kotwice nagłówków tak jak w renderDoc: pierwszy nagłówek # to „top”, powtórzenia z kolejnym numerem.
function headingIds(blocks, ctx) {
  const used = new Set(['top', 'przypisy-lista']), ids = new Map();
  let titled = false;
  blocks.forEach((b, k) => {
    const m = headingOf(b); if (!m) return;
    if (m[1].length === 1 && !titled) { titled = true; ids.set(k, 'top'); return; }
    const id = headingId(plain(inline(m[2], ctx)));
    let u = id, n = 2; while (used.has(u)) u = id + '-' + n++;
    used.add(u); ids.set(k, u);
  });
  return ids;
}
// Zmiany w akapicie na poziomie słów (w piśmie chińskim i japońskim na poziomie znaków); znaki przestankowe osobno.
const TOKEN_RE = /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]|[\p{L}\p{N}\p{M}]+|\s+|\S/gu;
function wordDiff(a, b) {
  const ta = a.match(TOKEN_RE) || [], tb = b.match(TOKEN_RE) || [];
  const segs = [];
  for (const o of diffSeq(ta, tb)) {
    const kind = o.op === 'eq' ? 'eq' : 'ch';
    let s = segs[segs.length - 1];
    if (!s || s.kind !== kind) segs.push(s = { kind, eq: '', rem: '', add: '' });
    if (o.op === 'eq') s.eq += ta[o.i]; else if (o.op === 'rem') s.rem += ta[o.i]; else s.add += tb[o.j];
  }
  // sam odstęp między dwiema zmianami dołączamy do obu, żeby przekreślenie nie rozpadało się na pojedyncze słowa
  for (let k = segs.length - 2; k > 0; k--) {
    const s = segs[k], p = segs[k - 1], n = segs[k + 1];
    if (s.kind === 'eq' && !s.eq.trim() && p.kind === 'ch' && n.kind === 'ch') {
      p.rem += (p.rem && n.rem ? s.eq : '') + n.rem; p.add += (p.add && n.add ? s.eq : '') + n.add;
      segs.splice(k, 2);
    }
  }
  const words = t => t.filter(x => x.trim()).length;
  const same = segs.filter(s => s.kind === 'eq').reduce((n, s) => n + words(s.eq.match(TOKEN_RE) || []), 0);
  const mark = (tag, t) => { const m = t.match(/^(\s*)([\s\S]*?)(\s*)$/); return m[2] ? m[1] + '<' + tag + '>' + esc(m[2]) + '</' + tag + '>' + m[3] : esc(t); };
  const html = segs.map(s => s.kind === 'eq' ? esc(s.eq) : (s.rem ? mark('del', s.rem) : '') + (s.add ? mark('ins', s.add) : '')).join('');
  return { html, ratio: same / Math.max(words(ta), words(tb), 1) };
}
// Napis z dwukropkiem przed wartością; po pełnej szerokości dwukropku (chiński, japoński) bez spacji.
const label = s => esc(s) + (/：$/.test(s) ? '' : ' ');
// Tylko zmienione miejsca: każde pod nagłówkiem swojej części, reszta zwinięta do liczby akapitów bez zmian.
function changesBody(d, lang, pagePath, oldMd, newMd, q) {
  const T = locales[lang].versions;
  const A = blocksOf(oldMd), B = blocksOf(newMd);
  const ids = headingIds(B, q);
  const docHref = relPath(pagePath, lang + '/' + d.html);
  const blockHtml = b => { const m = headingOf(b); return m ? '<p class="ver-heading">' + inline(m[2], q) + '</p>' : renderDoc(b.md, q).body; };
  const out = [];
  let gap = 0, head = -1, hunk = null;
  const flushGap = () => { if (gap) out.push('<p class="ver-gap">' + label(T.unchanged) + gap + '</p>'); gap = 0; };
  const flushHunk = () => {
    if (!hunk) return;
    const { rem, add, at } = hunk; hunk = null;
    // wiersz wersji pod tytułem: obie daty są na górze strony zmian
    if (rem.length === 1 && add.length === 1 && rem[0] === 1 && add[0] === 1) return;
    flushGap();
    const parts = [];
    if (at >= 0) {
      const txt = esc(plain(inline(headingOf(B[at])[2], q)));
      parts.push('<p class="ver-where">' + (ids.has(at) ? '<a href="' + esc(docHref + '#' + ids.get(at)) + '">' + txt + '</a>' : txt) + '</p>');
    }
    // Akapit zmieniony = usunięty i dodany, które mają co najmniej 40% wspólnych słów; łączymy je w kolejności tekstu,
    // każdy usunięty z najbardziej podobnym dodanym, a resztę pokazujemy w całości jako usuniętą albo dodaną.
    const words = b => plain(inline(b.md, q));
    const pairOf = new Map(); // indeks dodanego -> { r: indeks usuniętego, w: porównanie słów }
    let from = 0;
    rem.forEach((ri, r) => {
      if (headingOf(A[ri])) return;
      let best = null;
      for (let k = from; k < add.length; k++) {
        if (headingOf(B[add[k]])) continue;
        const w = wordDiff(words(A[ri]), words(B[add[k]]));
        if (w.ratio >= 0.4 && (!best || w.ratio > best.w.ratio)) best = { k, w };
      }
      if (best) { pairOf.set(best.k, { r, w: best.w }); from = best.k + 1; }
    });
    const removed = r => parts.push('<del class="ver-block"><span class="ver-tag">' + esc(T.removed) + '</span>\n' + blockHtml(A[rem[r]]) + '</del>');
    let r = 0;
    add.forEach((bi, k) => {
      const p = pairOf.get(k);
      if (p) { for (; r < p.r; r++) removed(r); r = p.r + 1; parts.push('<p class="ver-changed">' + p.w.html + '</p>'); }
      else parts.push('<ins class="ver-block"><span class="ver-tag">' + esc(T.added) + '</span>\n' + blockHtml(B[bi]) + '</ins>');
    });
    for (; r < rem.length; r++) removed(r);
    out.push('<section class="ver-hunk">\n' + parts.join('\n') + '\n</section>');
  };
  for (const o of diffSeq(A, B, (x, y) => x.key === y.key)) {
    if (o.op === 'eq') { flushHunk(); gap++; if (headingOf(B[o.j])) head = o.j; continue; }
    if (!hunk) hunk = { rem: [], add: [], at: head };
    if (o.op === 'rem') hunk.rem.push(o.i); else hunk.add.push(o.j);
  }
  flushHunk(); flushGap();
  return out.join('\n');
}

for (const d of docs.filter(x => !x.file.startsWith('statut/'))) {
  const srcList = d.langs.includes(SRC) ? readRegister(SRC, d.file) : null;
  if (d.langs.includes(SRC)) {
    const hash = contentHash(readContent(SRC, d.file));
    if (!srcList) warn('content/' + SRC + '/' + d.file + ': brak rejestru wersji ' + registerPath(SRC, d.file));
    else if (srcList[0].skrot !== hash) warn('content/' + SRC + '/' + d.file + ': treść różni się od wersji ' + srcList[0].data + ' z rejestru ' + registerPath(SRC, d.file) +
      '. Każda zmiana treści to nowa wersja: zachowaj poprzednie brzmienie w wersje/, dopisz wersję z opisem zmiany i odciskiem ' + hash + '.');
  }
  const regs = new Map();
  for (const lang of d.langs) {
    const list = readRegister(lang, d.file);
    if (!list) continue;
    if (lang !== SRC && srcList && list[0].data < srcList[0].data) warn(registerPath(lang, d.file) + ': brak opisu wersji ' + srcList[0].data + ' (jest w oryginale)');
    for (const v of list) if (v.poprzednia && !fs.existsSync(versionFile(lang, d.file, v.poprzednia))) warn(registerPath(lang, d.file) + ': brak zachowanej wersji ' + v.poprzednia + ' (content/' + lang + '/wersje/' + stemOf(d.file) + '/' + v.poprzednia + '.md)');
    regs.set(lang, list.filter(v => !v.poprzednia || fs.existsSync(versionFile(lang, d.file, v.poprzednia))));
  }
  const withChanges = [...regs].filter(([, list]) => list[0] && list[0].poprzednia).map(([l]) => l);
  if (!withChanges.length) continue;
  const nav = { kind: 'version', navKind: 'doc', navPage: d.id, noGloss: true };
  const chEntry = { ...d, ...nav, id: d.id + '-zmiany', html: changesHtml(d.file), file: 'wersje/' + stemOf(d.file) + '.json', langs: withChanges };
  const dates = [...new Set([...regs.values()].flatMap(list => list.filter(v => v.poprzednia).map(v => v.poprzednia)))];
  const histEntries = new Map(dates.map(date => [date, { ...d, ...nav, id: d.id + '-' + date, html: versionHtml(d.file, date), file: 'wersje/' + stemOf(d.file) + '/' + date + '.md',
    langs: [...regs].filter(([, list]) => list.some(v => v.poprzednia === date)).map(([l]) => l) }]));

  for (const [lang, list] of regs) {
    const T = locales[lang].versions;
    const quiet = pagePath => ({ ...makeCtx(d, lang, pagePath), warn: () => {}, fnRef: () => '' });
    const versionLine = (md, q) => { const b = blocksOf(md)[1]; return b ? plain(inline(b.md, q)) : ''; };
    const title = siteData.docs[d.id].titles[lang];
    const hasChanges = withChanges.includes(lang);
    const chPath = lang + '/' + chEntry.html;

    // odnośnik pod wierszem wersji w dokumencie
    const doc = rendered.find(x => x.entry === d && x.lang === lang);
    if (doc && hasChanges) doc.r.body = doc.r.body.replace(/(<h1 id="top">[\s\S]*?<\/h1>\n<p>[\s\S]*?<\/p>)/, (m, s) => s + '\n<p class="doc-version-changes"><a href="' + esc(relPath(doc.pagePath, chPath)) + '">' + esc(T.changes_link) + '</a></p>');

    // wersje historyczne
    for (const v of list.filter(x => x.poprzednia)) {
      const e = histEntries.get(v.poprzednia), pagePath = lang + '/' + e.html;
      if (rendered.some(x => x.entry === e && x.lang === lang)) continue;
      const oldMd = fs.readFileSync(versionFile(lang, d.file, v.poprzednia), 'utf8');
      const r = renderDoc(oldMd, makeCtx(d, lang, pagePath));
      r.title += ' (' + versionLine(oldMd, quiet(pagePath)) + ')';
      const notice = '<p class="doc-notice container ver-historical" role="note">' + esc(T.historical_note) + ' <a href="' + esc(relPath(pagePath, lang + '/' + d.html)) + '">' + esc(T.go_current) + '</a>' +
        (hasChanges ? ' · <a href="' + esc(relPath(pagePath, chPath)) + '">' + esc(T.changes_link) + '</a>' : '') + '</p>\n';
      rendered.push({ entry: e, lang, pagePath, r, outdated: false, toc: true, notice });
    }
    if (!hasChanges) continue;

    // strona zmian najnowszej wersji
    const v = list[0], q = quiet(chPath);
    const newMd = readContent(lang, d.file), oldMd = fs.readFileSync(versionFile(lang, d.file, v.poprzednia), 'utf8');
    const docHref = esc(relPath(chPath, lang + '/' + d.html));
    const histHref = date => esc(relPath(chPath, lang + '/' + versionHtml(d.file, date)));
    const history = ['<li><a href="' + docHref + '">' + esc(versionLine(newMd, q)) + '</a> (' + esc(T.current_label) + ')</li>'];
    for (const date of [...new Set(list.filter(x => x.poprzednia).map(x => x.poprzednia))].sort().reverse()) {
      const own = list.find(x => x.data === date);
      history.push('<li><a href="' + histHref(date) + '">' + esc(versionLine(fs.readFileSync(versionFile(lang, d.file, date), 'utf8'), q)) + '</a>' + (own && own.opis ? ': ' + inline(own.opis, q) : '') + '</li>');
    }
    const body = '<h1 id="top">' + esc(T.title) + ': ' + esc(title) + '</h1>\n' +
      '<p class="ver-meta">' + label(T.current) + '<a href="' + docHref + '">' + esc(versionLine(newMd, q)) + '</a><br>' + label(T.previous) + '<a href="' + histHref(v.poprzednia) + '">' + esc(versionLine(oldMd, q)) + '</a></p>\n' +
      '<h2 id="opis">' + esc(T.description) + '</h2>\n<p>' + inline(v.opis, q) + '</p>\n' +
      '<h2 id="zmiany">' + esc(T.changes) + '</h2>\n<p class="ver-legend">' + esc(T.legend) + '</p>\n' + changesBody(d, lang, chPath, oldMd, newMd, q) + '\n' +
      '<h2 id="wersje">' + esc(T.history) + '</h2>\n<ul class="ver-list">\n' + history.join('\n') + '\n</ul>';
    let description = plain(inline(v.opis, q));
    if (description.length > 180) description = description.slice(0, 177).replace(/\s+\S*$/, '') + '…';
    rendered.push({ entry: chEntry, lang, pagePath: chPath, r: { title: T.title + ': ' + title, description, body, toc: [] }, outdated: false, toc: false });
  }
}

fs.mkdirSync(path.join(ROOT, 'js'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'js/site-config.js'), '/* Plik tworzony automatycznie przez tools/build.mjs. Nie edytuj ręcznie. */\nwindow.NI_SITE = ' + JSON.stringify(siteData, null, 1) + ';\n');

// usuwamy wcześniej wygenerowane strony, by nie zostały nieaktualne tłumaczenia
for (const l of LANGS) {
  const dir = path.join(ROOT, l);
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

// ---------------------------------------------------------------- Wspólne elementy stron
const hashCache = new Map();
// Ścieżka do pliku strony z krótkim skrótem zawartości, żeby przeglądarki nie trzymały starej wersji.
function asset(base, rel) {
  if (!hashCache.has(rel)) {
    const f = path.join(ROOT, rel);
    hashCache.set(rel, fs.existsSync(f) ? crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 8) : '');
  }
  const h = hashCache.get(rel);
  return base + rel + (h ? '?v=' + h : '');
}
const baseFor = pagePath => '../'.repeat(pagePath.split('/').length - 1);
const homeUrl = lang => BASE_URL + (lang === SRC ? '' : lang + '/');
const entryUrl = (e, lang) => e.kind === 'home' ? homeUrl(lang) : BASE_URL + lang + '/' + e.html;
function alternatesFor(e) {
  const def = e.langs.includes(SRC) ? SRC : e.langs[0];
  return e.langs.map(l => '<link rel="alternate" hreflang="' + l + '" href="' + entryUrl(e, l) + '">').join('\n  ') +
    '\n  <link rel="alternate" hreflang="x-default" href="' + entryUrl(e, def) + '">';
}
// Przełącznik języka: odpowiednik tej samej strony w każdym języku (brak tłumaczenia = pozycja nieaktywna).
function langItemsFor(e, lang, fromFile) {
  return cfg.languages.map(l => ({
    code: l.code, name: l.name, active: l.code === lang,
    href: e.langs.includes(l.code) ? (e.kind === 'home' ? NILayout.homeHref(siteData, l.code, baseFor(fromFile)) : relPath(fromFile, l.code + '/' + e.html)) : null
  }));
}
const getKey = (obj, key) => key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);

// ---------------------------------------------------------------- Strony dokumentów i podstron
// Pliki podpowiedzi (gloss.css, js/gloss.js, js/slownik-<język>.js) tylko w językach, które mają słownik.
const glossUrl = (lang, pagePath) => relPath(pagePath, lang + '/' + GLOSS_SLUG + '.html');
const glossMark = (href) => (id, w) => '<a href="' + esc(href) + '#' + id + '" class="gloss" data-gloss="' + id + '">' + w + '</a>';
let glossCount = 0;
function glossAssets(lang, base, withData) {
  if (!glossaries[lang]) return { head: '', scripts: '' };
  return {
    head: '<link rel="stylesheet" href="' + asset(base, 'gloss.css') + '">',
    scripts: (withData ? '<script src="' + asset(base, 'js/slownik-' + lang + '.js') + '"></script>\n' : '') + '<script src="' + asset(base, 'js/gloss.js') + '"></script>'
  };
}

// Nota na stronach w języku innym niż oryginał: przekład wykonany przez cyfrową inteligencję,
// a w językach oznaczonych jako eksperymentalne wyraźniejsza prośba o poprawki.
function translationNote(lang) {
  const st = (cfg.languages.find(x => x.code === lang) || {}).status || '';
  const d = locales[lang].doc || {};
  const text = st === 'eksperymentalny' ? d.experimental_note : (st === 'przeklad' ? d.translation_note : '');
  return text ? '<div class="doc-translation-note container' + (st === 'eksperymentalny' ? ' doc-translation-note--experimental' : '') + '" role="note">' + esc(text) + '</div>\n' : '';
}

function pageDocument(o) {
  const { lang, pagePath, entry, r } = o;
  const t = locales[lang];
  const base = baseFor(pagePath);
  let bodyHtml = r.body;
  if (glossaries[lang] && !entry.noGloss) {
    const used = new Set();
    bodyHtml = glossifyHtml(glossaries[lang], r.body, used, glossMark(glossUrl(lang, pagePath)));
    glossCount += used.size;
  }
  const ga = glossAssets(lang, base, !entry.noGloss);
  // Strony wersji (zmiany, wersje historyczne) mają własny atrybut, żeby skrypty dokumentu nie traktowały ich jak obecnego tekstu.
  const kindAttr = entry.kind === 'doc' ? 'data-doc="' + entry.id + '"' : entry.kind === 'version' ? 'data-version="' + entry.id + '"' : 'data-page="' + entry.id + '"';
  const nav = { page: entry.navPage || entry.id, kind: entry.navKind || entry.kind };
  const header = NILayout.header({ t, lang, base, site: siteData, ...nav, langItems: langItemsFor(entry, lang, pagePath) });
  const footer = NILayout.footer({ t, lang, base, site: siteData, ...nav });
  const showToc = entry.kind === 'doc' ? true : (o.toc !== undefined ? o.toc : r.toc.filter(x => x.level === 2).length >= 3);
  const tocHtml = r.toc.length ? '<ol class="doc-toc__list">' + r.toc.map(x => '<li class="doc-toc__l' + x.level + '"><a href="#' + x.id + '">' + esc(x.text) + '</a></li>').join('') + '</ol>' : '';
  const aside = showToc ? `<aside class="doc-toc">
<details class="doc-toc__box" open>
<summary>${esc(t.doc.toc)}</summary>
<nav aria-label="${esc(t.doc.toc)}">${tocHtml}</nav>
</details>
</aside>
` : '';
  // Plik źródłowy z odnośnikami do repozytorium: podgląd, historia zmian, propozycja zmiany (pull request przez GitHub).
  const srcPath = 'content/' + lang + '/' + (entry.file || '');
  const repo = cfg.repo ? cfg.repo.replace(/\/$/, '') : '', br = cfg.repoBranch || 'main';
  const source = !entry.file ? '' : repo
    ? `\n<p class="doc-meta">${esc(t.doc.source_note)} <a href="${repo}/blob/${br}/${esc(srcPath)}" rel="noopener"><code>${esc(srcPath)}</code></a> · <a href="${repo}/commits/${br}/${esc(srcPath)}" rel="noopener">${esc(t.doc.source_history || '')}</a> · <a href="${repo}/edit/${br}/${esc(srcPath)}" rel="noopener">${esc(t.doc.source_edit || '')}</a></p>`
    : `\n<p class="doc-meta">${esc(t.doc.source_note)} <code>${esc(srcPath)}</code></p>`;
  const outdated = o.outdated ? `<p class="doc-notice container doc-notice--outdated" role="note">${esc(t.doc.outdated)}</p>\n` : '';
  return `<!DOCTYPE html>
<html lang="${lang}"${dirAttr(lang)}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(r.title)} · Novus Ignis</title>
<meta name="description" content="${esc(r.description)}">
<link rel="canonical" href="${entryUrl(entry, lang)}">
${alternatesFor(entry)}
${markdownAlternate(entry, lang)}<meta property="og:title" content="${esc(r.title)}">
<meta property="og:description" content="${esc(r.description)}">
<meta property="og:type" content="article">
<meta property="og:image" content="${BASE_URL}IMG/Logo.webp">
<link rel="icon" href="${base}IMG/Logo.webp" type="image/webp">
<link rel="stylesheet" href="${base}fonts/fonts.css">
<link rel="stylesheet" href="${asset(base, 'style.css')}">
<link rel="stylesheet" href="${asset(base, 'docs.css')}">
<link rel="stylesheet" href="${asset(base, 'remark.css')}">
${ga.head}
<style>html.ni-restoring body{opacity:0}body{transition:opacity .2s}</style><script>try{var n=((performance.getEntriesByType&&performance.getEntriesByType("navigation")[0])||{}).type;if(sessionStorage.getItem("ni-lang-keep")||(n==="reload"&&sessionStorage.getItem("ni-reload")))document.documentElement.classList.add("ni-restoring")}catch(e){}</script>
</head>
<body class="doc-body" ${kindAttr} data-lang="${lang}">
<a class="skip-link" href="#tresc">${esc(t.doc.skip)}</a>
<header id="site-header">${header}</header>
${outdated}${o.notice || ''}${translationNote(lang)}<div class="doc-notice container" id="docNotice" hidden></div>
<div class="doc-compare container" id="docCompare" hidden></div>
<div class="doc-layout container${showToc ? '' : ' doc-layout--single'}">
${aside}<main id="tresc" class="doc" lang="${lang}">
${bodyHtml}${source}
</main>
</div>
<footer id="site-footer" class="site-footer">${footer}</footer>
<script src="${asset(base, 'js/site-config.js')}"></script>
<script src="${asset(base, 'js/layout.js')}"></script>
<script src="${asset(base, 'js/doc.js')}"></script>
<script src="${asset(base, 'js/remark.js')}"></script>
<script src="${asset(base, 'js/mail.js')}"></script>
<script src="${asset(base, 'js/lang-keep.js')}"></script>
<script src="${asset(base, 'js/compare.js')}"></script>
${ga.scripts}
</body>
</html>
`;
}

// Odnośnik do czystego Markdown dokumentu (md/<język>/<plik>) dla modeli, które dostaną link do strony.
function markdownAlternate(entry, lang) {
  if (entry.kind !== 'doc' || !entry.langs.includes(lang)) return '';
  return '<link rel="alternate" type="text/markdown" href="' + BASE_URL + 'md/' + lang + '/' + entry.file + '">' + String.fromCharCode(10);
}

// Języki pisane od prawej do lewej: atrybut dir na <html>, resztę układu odwraca przeglądarka i CSS (logiczne właściwości).
const RTL = new Set(['ar', 'he', 'fa', 'ur']);
function dirAttr(lang) { return RTL.has(lang) ? ' dir="rtl"' : ''; }

function writeFile(rel, content) {
  const out = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
}

for (const o of rendered) writeFile(o.pagePath, pageDocument(o));

// ---------------------------------------------------------------- Mapa strony (generowana)
function sitemapBody(lang) {
  const t = locales[lang];
  const S = t.sitemap || {};
  const base = '../';
  const mark = (l) => l !== lang ? ' <span class="doc-lang-mark">(' + l.toUpperCase() + ')</span>' : '';
  const li = (href, title, l, desc) => '<li><a href="' + esc(href) + '"' + (l !== lang ? ' hreflang="' + l + '"' : '') + '>' + esc(title) + '</a>' + mark(l) + (desc ? '<span class="sitemap-desc">' + esc(desc) + '</span>' : '') + '</li>';
  const section = (id, label, items) => '<h2 id="' + id + '">' + esc(label) + '</h2>\n' + (items.length ? '<ul class="sitemap-list">\n' + items.join('\n') + '\n</ul>' : '<p>' + esc(S.empty || '') + '</p>');
  const pageItems = list => list.slice().sort((a, b) => a.order - b.order || String(a.slug).localeCompare(String(b.slug))).map(p => {
    const d = siteData.pages[p.slug];
    const l = p.langs.includes(lang) ? lang : (p.langs.includes(SRC) ? SRC : p.langs[0]);
    return li(NILayout.pageHref(siteData, p.slug, lang, base), d.titles[l] || p.slug, l, d.desc[l] || '');
  });
  const out = ['<h1 id="top">' + esc(S.title || '') + '</h1>', '<p class="doc-lead">' + esc(S.desc || '') + '</p>'];
  out.push(section('strona-glowna', S.home || '', [li(NILayout.homeHref(siteData, lang, base), t.meta.title, lang, '')]));
  const all = [...pages, ...(slownikEntry ? [slownikEntry] : []), mapaEntry];
  for (const g of GROUPS) {
    const items = [];
    if (g === 'dokumenty') for (const id of NAV_DOCS) {
      const d = docById.get(id); if (!d) continue;
      const l = d.langs.includes(lang) ? lang : SRC;
      items.push(li(NILayout.docHref(siteData, id, lang, base), siteData.docs[id].titles[l] || id, l, (t.hub.cards[id] || {}).desc));
    }
    items.push(...pageItems(all.filter(p => p.group === g)));
    out.push(section('g-' + g, (t.nav.groups || {})[g] || g, items));
  }
  const other = all.filter(p => !GROUPS.includes(p.group));
  if (other.length) out.push(section('g-inne', S.other || '', pageItems(other)));
  return out.join('\n');
}
for (const lang of LANGS) {
  const t = locales[lang];
  const pagePath = lang + '/' + mapaEntry.html;
  const r = { title: t.sitemap?.title || 'Mapa strony', description: t.sitemap?.desc || '', body: sitemapBody(lang), toc: [] };
  writeFile(pagePath, pageDocument({ lang, pagePath, entry: mapaEntry, r, outdated: false, toc: false }));
}

// ---------------------------------------------------------------- Strona „Słownik” (generowana ze slownik.json)
function glossaryBody(lang) {
  const G = glossaries[lang], t = locales[lang], S = t.glossary || {};
  const pagePath = lang + '/' + slownikEntry.html;
  const out = ['<h1 id="top">' + esc(S.title || '') + '</h1>', '<p class="doc-lead">' + esc(S.intro || '') + '</p>', '<dl class="glossary">'];
  for (const e of G.entries) {
    const def = markText(G, esc(e.definicja), new Set(), (id, w) => '<a href="#' + id + '">' + w + '</a>', e.id);
    const src = glossSource(e, lang);
    let srcHtml = '';
    if (src) {
      const other = src.lang !== lang;
      srcHtml = '<dd class="glossary-src">' + esc(S.source || '') + ' <a href="' + esc(relPath(pagePath, src.url)) + '"' + (other ? ' hreflang="' + src.lang + '"' : '') + '>' + esc(e.zrodlo_opis) + '</a>' + (other ? ' <span class="doc-lang-mark">(' + src.lang.toUpperCase() + ')</span>' : '') + '</dd>';
    }
    out.push('<div class="glossary-entry" id="' + esc(e.id) + '"><dt>' + esc(e.termin) + (e.lacina ? ' <span class="glossary-latin" lang="la">' + esc(e.lacina) + '</span>' : '') + '</dt><dd>' + def + '</dd>' + srcHtml + '</div>');
  }
  out.push('</dl>');
  return out.join('\n');
}
if (slownikEntry) for (const lang of glossLangs) {
  const t = locales[lang];
  const pagePath = lang + '/' + slownikEntry.html;
  const r = { title: t.glossary.title, description: t.glossary.intro, body: glossaryBody(lang), toc: [] };
  writeFile(pagePath, pageDocument({ lang, pagePath, entry: slownikEntry, r, outdated: false, toc: false }));
}

// ---------------------------------------------------------------- Strona główna z szablonu
const homeTemplate = fs.readFileSync(path.join(ROOT, 'tools/templates/home.html'), 'utf8');
const escText = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Wypełnia elementy data-i18n (tekst), data-i18n-html (HTML), data-i18n-content, data-i18n-alt i data-i18n-title (atrybuty).
function fillI18n(html, t, where) {
  const RE = /<([a-zA-Z][\w-]*)((?:\s+[^\s>=]+(?:="[^"]*")?)*)\s*>/g;
  let out = '', pos = 0, m;
  const look = key => { const v = getKey(t, key); if (typeof v !== 'string') { warn(where + ': brak klucza „' + key + '” w locales'); return null; } return v; };
  const setAttr = (tag, name, val) => {
    const re = new RegExp('\\s' + name + '="[^"]*"');
    return re.test(tag) ? tag.replace(re, () => ' ' + name + '="' + esc(val) + '"') : tag.replace(/\s*>$/, () => ' ' + name + '="' + esc(val) + '">');
  };
  while ((m = RE.exec(html))) {
    const attrs = m[2];
    if (!/\sdata-i18n/.test(attrs)) continue;
    const get = suffix => { const mm = attrs.match(new RegExp('\\sdata-i18n' + suffix + '="([^"]*)"')); return mm ? mm[1] : null; };
    const kText = get(''), kHtml = get('-html'), kContent = get('-content'), kAlt = get('-alt'), kTitle = get('-title');
    let tag = m[0].replace(/\sdata-i18n(?:-html|-content|-alt|-title)?="[^"]*"/g, '');
    if (kContent) { const v = look(kContent); if (v !== null) tag = setAttr(tag, 'content', v); }
    if (kAlt) { const v = look(kAlt); if (v !== null) tag = setAttr(tag, 'alt', v); }
    if (kTitle) { const v = look(kTitle); if (v !== null) tag = setAttr(tag, 'title', v); }
    out += html.slice(pos, m.index) + tag;
    pos = RE.lastIndex;
    if (kText || kHtml) {
      const closeRe = new RegExp('<(/?)' + m[1] + '\\b[^>]*>', 'gi');
      closeRe.lastIndex = pos;
      let depth = 1, cm, closeAt = -1;
      while ((cm = closeRe.exec(html))) { depth += cm[1] ? -1 : 1; if (depth === 0) { closeAt = cm.index; break; } }
      if (closeAt < 0) { warn(where + ': brak zamknięcia elementu <' + m[1] + '> dla ' + (kText || kHtml)); continue; }
      const v = look(kText || kHtml);
      if (v !== null) { out += kHtml ? v : escText(v); pos = closeAt; }
      RE.lastIndex = closeAt;
    }
  }
  return out + html.slice(pos);
}

function renderHome(lang) {
  const t = locales[lang];
  const pagePath = lang === SRC ? 'index.html' : lang + '/index.html';
  const base = baseFor(pagePath);
  const where = pagePath;
  let h = fillI18n(homeTemplate, t, where);
  // ścieżki do plików strony (szablon ma je względem katalogu głównego)
  h = h.replace(/(\b(?:href|src)=")((?:IMG|fonts|vendor|js)\/[^"?]*|style\.css|remark\.css|script\.js)(")/g, (_, a, f, c) => {
    const versioned = /\.(css|js)$/.test(f) && !f.startsWith('vendor/') && !f.startsWith('fonts/');
    return a + (versioned ? asset(base, f) : base + f) + c;
  });
  // odnośniki do podstron (data-page-link) i dokumentów (data-doc-link) zależne od języka
  const setHref = (tag, href) => /\shref="[^"]*"/.test(tag) ? tag.replace(/\shref="[^"]*"/, () => ' href="' + esc(href) + '"') : tag.replace(/\s*>$/, () => ' href="' + esc(href) + '">');
  const markOf = (target, label) => (target && !target.langs.includes(lang) && !label.includes('(' + SRC.toUpperCase() + ')'))
    ? ' <span class="doc-lang-mark">(' + SRC.toUpperCase() + ')</span>' : '';
  const hreflangOf = target => (target && !target.langs.includes(lang)) ? ' hreflang="' + SRC + '"' : '';
  // Podstrona: ścieżka w danym języku, a bez tłumaczenia wersja źródłowa z oznaczeniem (PL). Gdy podstrony nie ma w żadnym
  // języku: dokument z data-page-fallback, a bez niego (data-page-optional) ukrycie elementu albo zwykły tekst bez odnośnika.
  h = h.replace(/<a\b([^>]*?)\sdata-page-link="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (_, a1, slug, a2, inner) => {
    const clean = (a1 + a2).replace(/\sdata-page-(?:fallback|optional)(?:="[^"]*")?/g, '');
    const fb = ((a1 + a2).match(/\sdata-page-fallback="([^"]+)"/) || [])[1];
    const pg = siteData.pages[slug];
    const exists = pg && (pg.langs.includes(lang) || pg.langs.includes(SRC));
    if (exists) {
      const target = { langs: pg.langs };
      return setHref('<a' + clean + hreflangOf(target) + '>', NILayout.pageHref(siteData, slug, lang, base)) + inner + markOf(target, inner) + '</a>';
    }
    if (fb && siteData.docs[fb]) {
      const d = siteData.docs[fb];
      return setHref('<a' + clean + hreflangOf(d) + '>', NILayout.docHref(siteData, fb, lang, base)) + inner + markOf(d, inner) + '</a>';
    }
    if (/\sdata-page-optional\b/.test(a1 + a2)) return '<a' + clean.replace(/\shref="[^"]*"/, '') + ' hidden>' + inner + '</a>';
    return inner;
  });
  h = h.replace(/<a\b([^>]*?)\sdata-doc-link="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (_, a1, id, a2, inner) => {
    const d = siteData.docs[id];
    return setHref('<a' + a1 + a2 + hreflangOf(d) + '>', NILayout.docHref(siteData, id, lang, base)) + inner + markOf(d, inner) + '</a>';
  });
  // Podpowiedzi pojęć w sekcjach po opowieści (data-remark-root).
  if (glossaries[lang]) {
    const from = h.search(/<section\b[^>]*\sdata-remark-root\b[^>]*>/);
    const to = from >= 0 ? h.indexOf('</section>', from) : -1;
    if (to > from) {
      const used = new Set();
      h = h.slice(0, from) + glossifyHtml(glossaries[lang], h.slice(from, to), used, glossMark(glossUrl(lang, pagePath))) + h.slice(to);
      glossCount += used.size;
    }
  }
  const ga = glossAssets(lang, base, true);
  const subject = (t.hub && t.hub.mail_subject) || '';
  h = h.replace(/(<a\b[^>]*?)\sdata-mail-subject="[^"]*"([^>]*>)/g, (_, a, c) => (a + c).replace(/\shref="[^"]*"/, ' href="mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '"'));
  h = h.replace(/<a\b[^>]*\sdata-role="([^"]+)"[^>]*>/g, (tag, role) => {
    const title = (t.hub && t.hub[role + '_title']) || '';
    return tag.replace(/\shref="[^"]*"/, ' href="mailto:' + MAIL + '?subject=' + encodeURIComponent((subject + ' ' + title).trim()) + '"');
  });
  const header = NILayout.header({ t, lang, base, site: siteData, page: 'home', kind: 'home', langItems: langItemsFor(homeEntry, lang, pagePath) });
  const footer = NILayout.footer({ t, lang, base, site: siteData, page: 'home', kind: 'home' });
  const cards = NILayout.docCards({ t, lang, site: siteData, base });
  const headLinks = '<link rel="canonical" href="' + homeUrl(lang) + '">\n  ' + alternatesFor(homeEntry);
  h = h.split('{{DIR}}').join(dirAttr(lang)).split('{{LANG}}').join(lang).split('{{BASE_URL}}').join(BASE_URL)
    .replace('{{GLOSS_HEAD}}', () => ga.head).replace('{{GLOSS_SCRIPTS}}', () => ga.scripts).replace('{{HEAD_LINKS}}', () => headLinks).replace('{{HEADER}}', () => header).replace('{{FOOTER}}', () => footer).replace('{{CARDS}}', () => cards);
  const left = h.match(/\{\{[A-Z_]+\}\}/); if (left) warn(where + ': nieuzupełniony znacznik ' + left[0]);
  writeFile(pagePath, h);
}
for (const lang of LANGS) renderHome(lang);

// ---------------------------------------------------------------- Mapa dla wyszukiwarek i modeli
{
  const entries = [homeEntry, ...docs.filter(d => d.langs.length), ...pages.filter(p => p.langs.length), ...(slownikEntry ? [slownikEntry] : []), mapaEntry];
  const urls = [];
  for (const e of entries) for (const l of e.langs) {
    const def = e.langs.includes(SRC) ? SRC : e.langs[0];
    urls.push('  <url>\n    <loc>' + entryUrl(e, l) + '</loc>\n' +
      e.langs.map(x => '    <xhtml:link rel="alternate" hreflang="' + x + '" href="' + entryUrl(e, x) + '"/>\n').join('') +
      '    <xhtml:link rel="alternate" hreflang="x-default" href="' + entryUrl(e, def) + '"/>\n  </url>');
  }
  writeFile('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + urls.join('\n') + '\n</urlset>\n');
  writeFile('robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: ' + BASE_URL + 'sitemap.xml\n');

  // llms.txt: opis fundacji (locales: meta.description) i lista tekstów z odnośnikami do HTML i do surowego Markdown
  const L = ['# Novus Ignis', '', '> ' + locales[SRC].meta.description, ''];
  for (const l of cfg.languages) {
    const code = l.code, t = locales[code];
    L.push('## ' + l.name, '', t.meta.description, '');
    L.push('- [' + t.meta.title + '](' + homeUrl(code) + ')');
    const item = (title, e, desc) => {
      const lg = e.langs.includes(code) ? code : (e.langs.includes(SRC) ? SRC : e.langs[0]);
      let line = '- [' + title + '](' + entryUrl(e, lg) + ')' + (lg !== code ? ' (' + lg.toUpperCase() + ')' : '');
      if (desc) line += ': ' + desc;
      if (e.kind === 'doc') line += ' ([Markdown](' + BASE_URL + 'md/' + lg + '/' + e.file + '))';
      L.push(line);
    };
    for (const d of docs) if (d.langs.length) item(siteData.docs[d.id].titles[d.langs.includes(code) ? code : d.langs[0]], d, (t.hub.cards[d.id] || {}).desc);
    for (const p of pages) if (p.langs.length) { const lg = p.langs.includes(code) ? code : p.langs[0]; item(p.title[lg], p, siteData.pages[p.slug].desc[lg]); }
    if (slownikEntry) { const lg = slownikEntry.langs.includes(code) ? code : (slownikEntry.langs.includes(SRC) ? SRC : slownikEntry.langs[0]); item(siteData.pages[GLOSS_SLUG].titles[lg], slownikEntry, siteData.pages[GLOSS_SLUG].desc[lg]); }
    item(siteData.pages['mapa-strony'].titles[code], mapaEntry, '');
    L.push('- [llms-full.txt](' + BASE_URL + (code === SRC ? '' : code + '/') + 'llms-full.txt)', '');
  }
  writeFile('llms.txt', L.join('\n'));

  // llms-full.txt: manifest i whitepapery w jednym pliku Markdown (po jednym pliku na język)
  for (const l of cfg.languages) {
    const code = l.code, t = locales[code];
    const parts = [];
    for (const id of FULL_IDS) {
      const d = docById.get(id);
      if (!d || !d.langs.length) continue;
      const has = d.langs.includes(code);
      const lg = has ? code : (d.langs.includes(SRC) ? SRC : d.langs[0]);
      const title = siteData.docs[id].titles[lg];
      const head = '# ' + title + ' (' + entryUrl(d, lg) + ')';
      const text = has ? stripComments(normalizeNewlines(readContent(code, d.file))).trim() : String((t.llms && t.llms.only_source) || '').replace('{url}', entryUrl(d, lg));
      parts.push(head + '\n\n' + text);
    }
    writeFile((code === SRC ? '' : code + '/') + 'llms-full.txt', parts.join('\n\n---\n\n') + '\n');
    // czytaj.txt: ta sama całość pod krótkim adresem do podania człowiekowi albo modelowi
    writeFile((code === SRC ? '' : code + '/') + 'czytaj.txt', parts.join('\n\n---\n\n') + '\n');
  }
  // md/<język>/<plik>: czysty Markdown dokumentów (content/ nie trafia na serwer)
  for (const d of docs) for (const lg of d.langs) writeFile('md/' + lg + '/' + d.file, stripComments(normalizeNewlines(readContent(lg, d.file))).trim() + '\n');
}

// ---------------------------------------------------------------- Rozdzielacz języka dla domen projektów
// go/<slug>.html: przenosi na podstronę w języku przeglądarki (domyślnie angielski). Na ten adres kierują
// przekierowania 302 z suveria.org i omniforum.org, dopóki projekty nie mają własnych stron.
for (const slug of ['suveria', 'omniforum']) {
  const p = pages.find(x => x.slug === slug);
  if (!p) continue;
  const avail = p.langs;
  const fallback = avail.includes('en') ? 'en' : SRC;
  const links = avail.map(l => '<li><a href="../' + l + '/' + slug + '.html" hreflang="' + l + '" lang="' + l + '">' + esc(cfg.languages.find(x => x.code === l).name) + '</a></li>').join('');
  writeFile('go/' + slug + '.html', `<!DOCTYPE html>
<html lang="${fallback}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>${esc(p.title[fallback] || slug)} · Novus Ignis</title>
<link rel="canonical" href="${BASE_URL}${fallback}/${slug}.html">
<noscript><meta http-equiv="refresh" content="0; url=../${fallback}/${slug}.html"></noscript>
<script>
(function () {
  var avail = ${JSON.stringify(avail)}, pick = ${JSON.stringify(fallback)};
  var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
  for (var i = 0; i < prefs.length; i++) { var c = String(prefs[i]).toLowerCase().split('-')[0]; if (avail.indexOf(c) >= 0) { pick = c; break; } }
  location.replace('/' + pick + '/${slug}.html' + location.search + location.hash);
})();
</script>
<style>body{background:#0a0a10;color:#ddd;font-family:system-ui,sans-serif;padding:2rem}a{color:#ff8c28}</style>
</head>
<body>
<p>Novus Ignis · ${esc(slug.charAt(0).toUpperCase() + slug.slice(1))}</p>
<ul>${links}</ul>
</body>
</html>
`);
}

// ---------------------------------------------------------------- Podsumowanie
const built = rendered.length + LANGS.length * 2;
console.log('Zbudowano ' + built + ' stron (' + LANGS.length + ' x strona główna i mapa strony, ' + rendered.filter(x => x.entry.kind === 'doc').length + ' dokumentów, ' + rendered.filter(x => x.entry.kind === 'page').length + ' podstron, ' + rendered.filter(x => x.entry.kind === 'version').length + ' stron wersji) w językach: ' + LANGS.join(', ') + '.');
console.log('Pliki dla wyszukiwarek i modeli: sitemap.xml, robots.txt, llms.txt, llms-full.txt' + LANGS.filter(l => l !== SRC).map(l => ', ' + l + '/llms-full.txt').join('') + '.');
console.log('Słownik: ' + (glossLangs.length ? glossLangs.map(l => l + ' (' + glossaries[l].entries.length + ' haseł)').join(', ') + ', oznaczeń pojęć na stronach: ' + glossCount : 'brak (żaden język nie ma content/<język>/slownik.json)') + '.');
if (glossLangs.length) for (const l of LANGS.filter(l => !glossaries[l])) console.log('  slownik.json: brak tłumaczenia (' + l + '), bez podpowiedzi i strony słownika w tym języku.');
for (const d of docs) {
  const missing = LANGS.filter(l => !d.langs.includes(l));
  if (missing.length) console.log('  ' + d.file + ': brak tłumaczenia (' + missing.join(', ') + '), odnośniki prowadzą do wersji ' + SRC.toUpperCase() + '.');
}
for (const p of pages) {
  const missing = LANGS.filter(l => !p.langs.includes(l));
  if (missing.length) console.log('  ' + p.file + ': brak tłumaczenia (' + missing.join(', ') + ').');
}
if (warnings.length) { console.log('\nUwagi:'); warnings.forEach(w => console.log('  - ' + w)); }
