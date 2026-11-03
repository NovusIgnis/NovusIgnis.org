#!/usr/bin/env node
/**
 * Novus Ignis · wgranie tylko zmienionych plików.
 *
 *   node tools/wgranie-roznice.mjs <paczka> <stara_lista> <nowa_lista> <polecenia> [--usun]
 *       liczy odcisk SHA-256 każdego pliku paczki (dist/) i zapisuje nową listę („odcisk  ścieżka”);
 *       porównuje ją ze starą listą, pobraną z serwera po poprzednim wgraniu, i zapisuje polecenia lftp,
 *       które wysyłają tylko pliki nowe i zmienione (z --usun także usuwają pliki, których nie ma w paczce).
 *       Polecenia wykonuje się w folderze strony na serwerze. Zwraca na wyjściu jedno słowo:
 *         roznice  polecenia gotowe;
 *         pelne    brak starej listy albo zmienia się większość plików: wysłać całość (lftp mirror).
 *
 * Porównujemy treść, a nie datę ani rozmiar: każde budowanie daje plikom nowe daty, a zmiana „2” na „3”
 * nie zmienia rozmiaru. Lista na serwerze jest wysyłana na końcu, więc przerwane wgranie powtórzy się przy
 * następnym w zakresie wszystkiego, co zmieniło się od ostatniego udanego.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const [DIST, OLD, NEW, CMDS] = process.argv.slice(2);
const DELETE = process.argv.includes('--usun');
if (!CMDS) { console.error('Użycie: node tools/wgranie-roznice.mjs <paczka> <stara_lista> <nowa_lista> <polecenia> [--usun]'); process.exit(2); }

// Powyżej tej części zmienionych plików jedno „mirror” z równoległym wysyłaniem jest szybsze niż pojedyncze „put”.
const PELNE_OD = 0.4;

const files = [];
(function walk(d, rel) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) walk(path.join(d, e.name), r); else files.push(r);
  }
})(DIST, '');
files.sort();
const cur = new Map(files.map(f => [f, crypto.createHash('sha256').update(fs.readFileSync(path.join(DIST, f))).digest('hex')]));
fs.writeFileSync(NEW, [...cur].map(([f, h]) => h + '  ' + f).join('\n') + '\n');

const old = new Map();
if (fs.existsSync(OLD)) for (const line of fs.readFileSync(OLD, 'utf8').split('\n')) {
  const m = line.match(/^([0-9a-f]{64}) {2}(.+)$/);
  if (m) old.set(m[2], m[1]);
}
const changed = files.filter(f => old.get(f) !== cur.get(f));
const removed = [...old.keys()].filter(f => !cur.has(f));
const summary = 'plików w paczce: ' + files.length + ', do wysłania: ' + changed.length + ', ' + (DELETE ? 'do usunięcia: ' + removed.length : 'usuwanie wyłączone (' + removed.length + ' zbędnych zostaje)');

if (!old.size || changed.length > files.length * PELNE_OD) {
  fs.writeFileSync(CMDS, '');
  console.error((old.size ? 'Zmienia się większość plików' : 'Brak listy z poprzedniego wgrania') + ': wysyłam całość. ' + summary + '.');
  console.log('pelne');
  process.exit(0);
}

const q = s => '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
const dirs = [...new Set(changed.map(f => path.posix.dirname(f)).filter(d => d !== '.'))].sort();
const cmds = [
  ...dirs.map(d => 'mkdir -p -f ' + q(d)),
  ...changed.map(f => 'put -O ' + q(path.posix.dirname(f)) + ' ' + q(path.posix.join(DIST, f))),
  ...(DELETE ? removed.map(f => 'rm -f ' + q(f)) : [])
];
fs.writeFileSync(CMDS, cmds.join('\n') + '\n');
console.error('Wysyłam tylko zmiany: ' + summary + '.');
for (const f of changed.slice(0, 40)) console.error('  + ' + f);
if (changed.length > 40) console.error('  … i ' + (changed.length - 40) + ' kolejnych');
if (DELETE) for (const f of removed) console.error('  - ' + f);
console.log('roznice');
