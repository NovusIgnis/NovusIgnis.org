#!/usr/bin/env node
/**
 * Novus Ignis · śledzenie aktualności tłumaczeń.
 *
 *   node tools/i18n-sync.mjs mark content/en/manifest.md
 *       zapisuje skróty akapitów źródła (content/pl/manifest.md) w content/en/.sync/manifest.md.json
 *       (robisz to, gdy tłumaczenie jest zgodne z obecnym źródłem)
 *   node tools/i18n-sync.mjs status
 *       dla każdego tłumaczenia pokazuje akapity źródła, które zmieniły się od ostatniego „mark”
 *
 * Akapit to blok tekstu rozdzielony pustą linią; komentarze HTML i blok metadanych są pomijane.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { paragraphs, diffParagraphs } from './lib/text.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
export const SRC = cfg.sourceLang;
const LANGS = cfg.languages.map(l => l.code).filter(l => l !== SRC);

function walk(dir, rel = '') {
  if (!fs.existsSync(dir)) return [];
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name.startsWith('_')) continue;
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) out = out.concat(walk(path.join(dir, e.name), r));
    else if (e.name.endsWith('.md')) out.push(r);
  }
  return out;
}

const syncFile = (lang, rel) => path.join(ROOT, 'content', lang, '.sync', rel + '.json');

/** Wynik porównania dla jednego tłumaczenia: { state: 'ok' | 'outdated' | 'unmarked' | 'nosource', changes: [...] } */
export function checkTranslation(lang, rel) {
  const srcFile = path.join(ROOT, 'content', SRC, rel);
  if (!fs.existsSync(srcFile)) return { state: 'nosource', changes: [] };
  const sf = syncFile(lang, rel);
  if (!fs.existsSync(sf)) return { state: 'unmarked', changes: [] };
  const saved = JSON.parse(fs.readFileSync(sf, 'utf8')).paragraphs || [];
  const changes = diffParagraphs(saved, paragraphs(fs.readFileSync(srcFile, 'utf8')));
  return { state: changes.length ? 'outdated' : 'ok', changes };
}

export function listTranslations() {
  const out = [];
  for (const lang of LANGS) for (const rel of walk(path.join(ROOT, 'content', lang))) out.push({ lang, rel });
  return out;
}

const LABEL = { changed: 'zmieniony', added: 'dodany', removed: 'usunięty' };

function main() {
  const [cmd, arg] = process.argv.slice(2);
  if (cmd === 'mark') {
    if (!arg) { console.error('Podaj ścieżkę tłumaczenia, np. node tools/i18n-sync.mjs mark content/en/manifest.md'); process.exit(1); }
    const abs = path.resolve(process.cwd(), arg);
    const rel0 = path.relative(path.join(ROOT, 'content'), abs).split(path.sep).join('/');
    const m = rel0.match(/^([^/]+)\/(.+\.md)$/);
    if (rel0.startsWith('..') || !m || !LANGS.includes(m[1])) { console.error('Ścieżka musi wskazywać plik tłumaczenia w content/<język>/ (język inny niż ' + SRC + ').'); process.exit(1); }
    const lang = m[1], rel = m[2];
    const srcFile = path.join(ROOT, 'content', SRC, rel);
    if (!fs.existsSync(abs)) { console.error('Brak pliku tłumaczenia: ' + arg); process.exit(1); }
    if (!fs.existsSync(srcFile)) { console.error('Brak pliku źródłowego: content/' + SRC + '/' + rel); process.exit(1); }
    const p = paragraphs(fs.readFileSync(srcFile, 'utf8'));
    const sf = syncFile(lang, rel);
    fs.mkdirSync(path.dirname(sf), { recursive: true });
    fs.writeFileSync(sf, JSON.stringify({ source: 'content/' + SRC + '/' + rel, paragraphs: p }, null, 1) + '\n');
    console.log('Zapisano ' + path.relative(ROOT, sf).split(path.sep).join('/') + ' (' + p.length + ' akapitów).');
  } else if (cmd === 'status') {
    const list = listTranslations();
    if (!list.length) { console.log('Brak tłumaczeń w content/<język>/.'); return; }
    for (const { lang, rel } of list) {
      const r = checkTranslation(lang, rel);
      const name = 'content/' + lang + '/' + rel;
      if (r.state === 'ok') console.log('OK          ' + name);
      else if (r.state === 'unmarked') console.log('BEZ ŚLADU   ' + name + ' (uruchom: node tools/i18n-sync.mjs mark ' + name + ')');
      else if (r.state === 'nosource') console.log('BEZ ŹRÓDŁA  ' + name);
      else {
        console.log('STARSZE     ' + name + ' (akapity źródła do sprawdzenia: ' + r.changes.length + ')');
        for (const c of r.changes) console.log('  ' + LABEL[c.kind] + ' nr ' + c.n + ': ' + c.t);
      }
    }
  } else {
    console.log('Użycie:\n  node tools/i18n-sync.mjs mark <content/en/plik.md>\n  node tools/i18n-sync.mjs status');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
