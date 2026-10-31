#!/usr/bin/env node
/**
 * Novus Ignis · zbiorcze statystyki strony z dzienników serwera.
 *
 *   node tools/statystyki.mjs <dziennik> [<dziennik> ...]
 *       czyta dzienniki w formacie „combined” (także .gz), liczy miesiące, które w nich są,
 *       i zapisuje wynik do content/statystyki.json (miesiące z dziennika zastępują dawne wpisy).
 *
 * Infomaniak trzyma dzienniki co najmniej 7 dni, więc pobiera się je co tydzień, a na koniec miesiąca
 * podaje skryptowi wszystkie naraz. Wiersze powtórzone w zachodzących na siebie plikach liczą się raz.
 *
 * Do pliku trafiają tylko liczby: odsłony stron według adresu, pobrania plików i wejścia robotów
 * według rodzaju. Adresów IP, pełnych opisów przeglądarek ani pojedynczych wejść nie zapisujemy.
 * Pobrane kopie dzienników usuń po policzeniu (zasada ze strony „Statystyki strony”).
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const outAt = args.indexOf('--out');
const OUT = outAt >= 0 ? path.resolve(args.splice(outAt, 2)[1]) : path.join(ROOT, 'content', 'statystyki.json');
const files = args;
if (!files.length) { console.error('Użycie: node tools/statystyki.mjs [--out <plik.json>] <dziennik> [<dziennik> ...]'); process.exit(1); }

// Rodzaje robotów po fragmencie opisu przeglądarki (User-Agent). Kolejność ma znaczenie.
const BOTS = [
  ['modele_na_prosbe', /ChatGPT-User|Claude-User|Perplexity-User|MistralAI-User|DuckAssistBot|Gemini-Deep-Research/i],
  ['modele_indeks', /GPTBot|OAI-SearchBot|ClaudeBot|Claude-SearchBot|anthropic-ai|PerplexityBot|CCBot|Bytespider|meta-externalagent|Amazonbot|cohere-ai|YouBot|Diffbot|Google-CloudVertexBot/i],
  ['wyszukiwarki', /Googlebot|Google-InspectionTool|bingbot|YandexBot|DuckDuckBot|Baiduspider|Applebot|Qwantbot|SeznamBot|PetalBot|Ecosia/i],
  ['inne', /bot\b|bot\/|crawl|spider|slurp|curl|wget|python|httpclient|headless|scrapy|go-http-client|java\/|libwww|okhttp|axios|node-fetch|^-?$/i],
];
const MONTHS = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
const LINE = /^\S+ \S+ \S+ \[(\d{2})\/(\w{3})\/(\d{4}):[^\]]*\] "(\S+) (\S+)[^"]*" (\d{3}) \S+(?: "[^"]*" "([^"]*)")?/;

function kind(p) {
  if (p === '/' || p.endsWith('/') || p.endsWith('.html')) return 'strona';
  if (/\.(txt|md|pdf)$/i.test(p) && p !== '/robots.txt') return 'plik';
  return '';
}
function normalize(p) {
  p = p.split(/[?#]/)[0];
  try { p = decodeURI(p); } catch (e) { /* zostaje zakodowany */ }
  return p.replace(/\/index\.html$/, '/').replace(/\/{2,}/g, '/');
}

const months = new Map();
const month = m => {
  if (!months.has(m)) months.set(m, { miesiac: m, odslony: {}, pobrania: {}, roboty: { wyszukiwarki: 0, modele_indeks: 0, modele_na_prosbe: 0, inne: 0 }, modele_llms: 0 });
  return months.get(m);
};
const add = (o, k) => { o[k] = (o[k] || 0) + 1; };

let lines = 0, used = 0, skipped = 0, dupes = 0;
const seen = new Set();
for (const f of files) {
  let buf = fs.readFileSync(f);
  if (f.endsWith('.gz')) buf = zlib.gunzipSync(buf);
  for (const line of buf.toString('utf8').split('\n')) {
    if (!line.trim()) continue;
    if (seen.has(line)) { dupes++; continue; }
    seen.add(line);
    lines++;
    const m = LINE.exec(line);
    if (!m) { skipped++; continue; }
    const [, , mon, year, method, rawPath, status, ua = ''] = m;
    if (method !== 'GET' || !(status === '200' || status === '304') || !MONTHS[mon]) continue;
    const p = normalize(rawPath);
    const k = kind(p);
    if (!k) continue;
    const rec = month(year + '-' + MONTHS[mon]);
    const bot = BOTS.find(([, re]) => re.test(ua));
    used++;
    if (bot) {
      rec.roboty[bot[0]]++;
      if (bot[0].startsWith('modele') && /^\/(?:[a-z]{2}\/)?llms(-full)?\.txt$/.test(p)) rec.modele_llms++;
    } else if (k === 'strona') add(rec.odslony, p);
    else add(rec.pobrania, p);
  }
}

const data = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const all = new Map((data.miesiace || []).map(x => [x.miesiac, x]));
for (const [k, v] of months) all.set(k, v);
const out = {
  _opis: data._opis || 'Zbiorcze statystyki strony, liczone przez tools/statystyki.mjs z dzienników serwera. Same liczby, bez adresów IP i opisów przeglądarek.',
  miesiace: [...all.values()].sort((a, b) => a.miesiac.localeCompare(b.miesiac)),
};
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
console.log('Wiersze: ' + lines + ', policzone: ' + used + ', nierozpoznane: ' + skipped + ', powtórzone w kilku plikach: ' + dupes + '. Miesiące: ' + [...months.keys()].sort().join(', ') + '.');
console.log('Zapisano ' + path.relative(ROOT, OUT).split(path.sep).join('/') + '. Usuń teraz pobraną kopię dziennika.');
