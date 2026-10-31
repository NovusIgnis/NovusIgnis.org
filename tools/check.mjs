#!/usr/bin/env node
/**
 * Novus Ignis · kontrola wygenerowanych stron (po node tools/build.mjs).
 * Sprawdza: odnośniki i pliki wewnętrzne (także kotwice #id), hreflang i canonical,
 * pozostałości znaczników szablonu, adresy z sitemap.xml. Kończy się kodem 1, gdy coś jest nie tak.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const BASE = cfg.baseUrl || 'https://novusignis.org/';
const LANGS = cfg.languages.map(l => l.code);
const problems = [];
const bad = m => problems.push(m);

function htmlFiles() {
  const out = ['index.html'];
  for (const l of LANGS) {
    const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith('.html')) out.push(path.relative(ROOT, p).split(path.sep).join('/')); } };
    if (fs.existsSync(path.join(ROOT, l))) walk(path.join(ROOT, l));
  }
  return [...new Set(out)];
}

const cache = new Map();
const load = rel => { if (!cache.has(rel)) cache.set(rel, fs.readFileSync(path.join(ROOT, rel), 'utf8')); return cache.get(rel); };
const ids = rel => new Set([...load(rel).matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));

function resolveTarget(fromRel, href) {
  const [p0, hash] = href.split('#');
  const p = p0.split('?')[0];
  let abs = p ? path.resolve(path.join(ROOT, path.dirname(fromRel)), decodeURI(p)) : path.join(ROOT, fromRel);
  if (p.endsWith('/') || (fs.existsSync(abs) && fs.statSync(abs).isDirectory())) abs = path.join(abs, 'index.html');
  return { abs, rel: path.relative(ROOT, abs).split(path.sep).join('/'), hash };
}

const files = htmlFiles();
for (const f of files) {
  const html = load(f);
  for (const m of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|\/\/)/i.test(href)) {
      if (href.startsWith(BASE) && !/\.(webp|png|css|js)$/.test(href)) {
        const u = href.slice(BASE.length).split('#')[0];
        const rel = u === '' || u.endsWith('/') ? u + 'index.html' : u;
        if (!fs.existsSync(path.join(ROOT, rel))) bad(f + ': adres ' + href + ' nie ma pliku');
      }
      continue;
    }
    if (href === '' ) continue;
    const t = resolveTarget(f, href);
    if (!fs.existsSync(t.abs)) { bad(f + ': brak pliku dla odnośnika ' + href); continue; }
    if (t.hash && t.rel.endsWith('.html') && !ids(t.rel).has(t.hash)) bad(f + ': brak kotwicy #' + t.hash + ' w ' + t.rel);
  }
  const alt = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)].map(m => m[1]);
  if (!alt.includes('x-default') || alt.length < 2) bad(f + ': brak hreflang (x-default lub wersji językowych)');
  if (!/<link rel="canonical" href="https?:\/\/[^"]+">/.test(html)) bad(f + ': brak canonical');
  if (/\{\{[A-Z_]+\}\}/.test(html)) bad(f + ': nieuzupełniony znacznik szablonu');
  if (/\sdata-i18n/.test(html)) bad(f + ': pozostały atrybuty data-i18n');
  if (!new RegExp('<html lang="(' + LANGS.join('|') + ')"').test(html)) bad(f + ': brak <html lang>');
  const hl = html.match(/<html lang="([^"]+)"/);
  if (hl && f !== 'index.html' && !f.startsWith(hl[1] + '/')) bad(f + ': lang=' + hl[1] + ' nie zgadza się ze ścieżką');
  if (html.includes(String.fromCharCode(0x2014))) bad(f + ': zawiera długi myślnik');
  if (/https?:\/\/(?!novusignis\.org|creativecommons\.org|wyszukiwarka-krs\.ms\.gov\.pl|www\.w3\.org)/.test(html.replace(/<[^>]*\bhref="https?:\/\/[^"]*"[^>]*>[^<]*<\/a>/g, ''))) {
    // zewnętrzne odnośniki w tekście są dozwolone, zasoby nie
  }
  if (/<(?:script|link|img)\b[^>]*(?:src|href)="https?:\/\/(?!novusignis\.org)/.test(html.replace(/<link rel="(?:canonical|alternate)"[^>]*>/g, ''))) bad(f + ': zewnętrzny zasób');
}

if (fs.existsSync(path.join(ROOT, 'sitemap.xml'))) {
  const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  for (const u of locs) {
    const rel = u.slice(BASE.length); const file = rel === '' || rel.endsWith('/') ? rel + 'index.html' : rel;
    if (!fs.existsSync(path.join(ROOT, file))) bad('sitemap.xml: ' + u + ' nie ma pliku');
  }
  console.log('sitemap.xml: ' + locs.length + ' adresów');
} else bad('brak sitemap.xml');
for (const f of ['robots.txt', 'llms.txt', 'llms-full.txt']) if (!fs.existsSync(path.join(ROOT, f))) bad('brak ' + f);

console.log('Sprawdzono ' + files.length + ' stron HTML.');
if (problems.length) { console.log('Problemy (' + problems.length + '):'); problems.forEach(p => console.log('  - ' + p)); process.exit(1); }
console.log('Bez problemów.');
