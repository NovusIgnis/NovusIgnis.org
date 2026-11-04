#!/usr/bin/env node
/**
 * Novus Ignis · paczka do wgrania na serwer.
 *
 *   node tools/paczka.mjs
 *       kopiuje do dist/ tylko to, czego strona potrzebuje na serwerze (bez content/, tools/, .git,
 *       notatek i plików źródłowych), sprawdza, czy każdy lokalny odnośnik i zasób z HTML i CSS
 *       istnieje w paczce, i podaje jej rozmiar. Uruchamiaj po node tools/build.mjs i tools/check.mjs.
 *
 * Folder dist/ nie trafia do gita (.gitignore); jego zawartość wgrywa się na serwer w całości.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const LANGS = cfg.languages.map(l => l.code);

// Co idzie na serwer: strony wygenerowane przez build.mjs, zasoby i pliki dla wyszukiwarek i modeli.
const INCLUDE = ['index.html', ...LANGS, 'IMG', 'fonts', 'js', 'vendor', 'style.css', 'docs.css', 'gloss.css', 'remark.css', 'script.js',
  'sitemap.xml', 'robots.txt', 'llms.txt', 'llms-full.txt', 'czytaj.txt', 'md', 'go', 'api'];

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);
for (const item of INCLUDE) {
  const src = path.join(ROOT, item);
  if (!fs.existsSync(src)) { console.log('Brak w folderze strony (pomijam): ' + item); continue; }
  fs.cpSync(src, path.join(DIST, item), { recursive: true });
}

// Wszystkie pliki paczki i ich rozmiar.
const all = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else all.push(p);
  }
})(DIST);
const bytes = all.reduce((a, f) => a + fs.statSync(f).size, 0);

// Każdy lokalny adres z HTML (src, href) i CSS (url(...)) musi istnieć w paczce.
const missing = new Set();
const local = u => u && !/^(?:[a-z]+:|\/\/|#|data:)/i.test(u);
for (const f of all) {
  const ext = path.extname(f);
  if (ext !== '.html' && ext !== '.css') continue;
  const text = fs.readFileSync(f, 'utf8');
  const urls = ext === '.html'
    ? [...text.matchAll(/\s(?:src|href)="([^"]*)"/g)].map(m => m[1])
    : [...text.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)].map(m => m[1]);
  for (const u of urls) {
    if (!local(u)) continue;
    const clean = decodeURI(u.split(/[?#]/)[0]);
    if (!clean) continue;
    let target = path.resolve(path.dirname(f), clean);
    if (clean.endsWith('/')) target = path.join(target, 'index.html');
    if (!target.startsWith(DIST) || !fs.existsSync(target)) missing.add(path.relative(DIST, f).split(path.sep).join('/') + ' → ' + u);
  }
}

console.log('Paczka: dist/ (' + all.length + ' plików, ' + (bytes / 1e6).toFixed(2) + ' MB).');
if (missing.size) {
  console.log('Brakujące pliki (' + missing.size + '):');
  [...missing].slice(0, 40).forEach(m => console.log('  - ' + m));
  process.exit(1);
}
console.log('Wszystkie lokalne odnośniki i zasoby są w paczce.');
