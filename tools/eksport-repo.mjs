#!/usr/bin/env node
/**
 * Novus Ignis · kopia do publicznego repozytorium.
 *
 *   node tools/eksport-repo.mjs <folder docelowy>
 *       kopiuje do wskazanego (pustego albo nowego) folderu tylko źródła strony: teksty (content/, locales/),
 *       szablony, generator i skrypty, style, obrazy, czcionki oraz pliki GitHuba. Pomija wszystko, co
 *       generator tworzy sam (strony HTML, md/, llms*.txt, czytaj.txt, sitemap.xml, robots.txt,
 *       js/site-config.js, js/slownik-*.js) i paczkę dist/. Z tekstów usuwa komentarze redakcyjne <!-- -->.
 *       Dopisuje .gitignore z listą plików generowanych, żeby nie trafiły do repozytorium później.
 *
 * Folder docelowy jest gotowy do `git init` i pierwszego commita; GitHub Actions zbuduje z niego stronę.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.resolve(process.argv[2] || '');
if (!process.argv[2]) { console.error('Podaj folder docelowy.'); process.exit(1); }
if (fs.existsSync(OUT) && fs.readdirSync(OUT).some(f => f !== '.git')) { console.error('Folder docelowy nie jest pusty: ' + OUT); process.exit(1); }

const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const LANGS = cfg.languages.map(l => l.code);
// Pliki tworzone przez tools/build.mjs (i paczka dist/): nie należą do źródeł.
const GENERATED = ['/dist/', '/index.html', ...LANGS.map(l => '/' + l + '/'), '/md/', '/sitemap.xml', '/robots.txt',
  '/llms.txt', '/llms-full.txt', '/czytaj.txt', '/go/', '/js/site-config.js', '/js/slownik-*.js'];
const isGenerated = rel => {
  const r = '/' + rel.split(path.sep).join('/');
  return GENERATED.some(g => g.endsWith('/') ? r.startsWith(g) : g.includes('*')
    ? new RegExp('^' + g.replace(/[.]/g, '\\.').replace('*', '[^/]*') + '$').test(r) : r === g);
};

// Źródłem są pliki śledzone przez git w roboczym folderze strony (bez plików nieśledzonych i ignorowanych).
const files = execFileSync('git', ['ls-files', '-z'], { cwd: ROOT, encoding: 'utf8' }).split('\0').filter(Boolean);
let n = 0, stripped = 0;
for (const rel of files) {
  if (isGenerated(rel)) continue;
  const src = path.join(ROOT, rel), dst = path.join(OUT, rel);
  if (!fs.existsSync(src)) continue;
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  if (rel.startsWith('content/') && rel.endsWith('.md')) {
    const t = fs.readFileSync(src, 'utf8');
    const clean = t.replace(/\r?\n?<!--[\s\S]*?-->/g, '');
    if (clean !== t) stripped++;
    fs.writeFileSync(dst, clean);
  } else {
    fs.copyFileSync(src, dst);
  }
  n++;
}
fs.writeFileSync(path.join(OUT, '.gitignore'), '# Tworzone przez node tools/build.mjs i tools/paczka.mjs\n' + GENERATED.join('\n') + '\nnode_modules/\n');
console.log('Skopiowano ' + n + ' plików źródłowych do ' + OUT + ' (komentarze usunięte z ' + stripped + ' tekstów).');
