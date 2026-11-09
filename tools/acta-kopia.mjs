#!/usr/bin/env node
/**
 * Novus Ignis · kopia publicznych akt dla strony (oś czasu OmniActa, D Marcina 9.11.2026, sprawa w11).
 *
 *   node tools/acta-kopia.mjs <czysty klon repozytorium akt>
 *
 * W klonie najpierw: node tools/acta.mjs wydanie (narzędzie akt zapisuje release/acta.json z opublikowanych wpisów).
 * Ten skrypt kopiuje release/acta.json do content/acta/zdarzenia.json i dopisuje, z jakiego stanu akt pochodzi
 * (commit, długość łańcucha), żeby strona mogła to pokazać. Serwer buduje stronę bez dostępu do repozytorium akt,
 * więc kopia jest w repozytorium strony i odświeżamy ją przy codziennej wysyłce strony, gdy akta się zmieniły.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = process.argv[2];
if (!repo) { console.error('Użycie: node tools/acta-kopia.mjs <klon repozytorium akt>'); process.exit(1); }
const rel = path.join(repo, 'release', 'acta.json');
if (!fs.existsSync(rel)) { console.error('Brak ' + rel + ': w klonie uruchom najpierw node tools/acta.mjs wydanie.'); process.exit(1); }
const git = (...a) => execFileSync('git', ['-C', repo, ...a], { encoding: 'utf8' }).trim();
if (git('status', '--porcelain', '--untracked-files=no')) { console.error('Klon akt ma zmiany w śledzonych plikach; kopia ma pochodzić z opublikowanego stanu.'); process.exit(1); }

const dane = JSON.parse(fs.readFileSync(rel, 'utf8'));
if (dane.podglad) { console.error('To wydanie podglądowe (--podglad); na stronę idzie tylko zwykłe wydanie.'); process.exit(1); }
const chain = fs.readFileSync(path.join(repo, 'chain.jsonl'), 'utf8').trim().split('\n');
const last = JSON.parse(chain[chain.length - 1]);
dane.zrodlo = {
  repozytorium: 'https://github.com/NovusIgnis/OmniActa',
  commit: git('rev-parse', 'HEAD'),
  data_commita: git('log', '-1', '--format=%cI'),
  lancuch: { n: last.n, ostatni_wpis: last.id || '' }
};
delete dane.sprawy; // opisy spraw prowadzi strona (content/acta/sprawy.json, D 4.11.2026)
const out = path.join(ROOT, 'content', 'acta', 'zdarzenia.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(dane, null, 1) + '\n');
console.log('content/acta/zdarzenia.json: ' + dane.zdarzenia.length + ' zdarzeń, akta ' + dane.zrodlo.commit.slice(0, 7) + ', łańcuch n=' + last.n);
