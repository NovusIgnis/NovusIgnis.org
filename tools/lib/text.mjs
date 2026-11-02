/**
 * Novus Ignis · wspólne funkcje na tekstach Markdown (generator i narzędzie i18n-sync).
 */
import crypto from 'node:crypto';

export const normalizeNewlines = md => String(md).replace(/\r\n?/g, '\n').replace(/​/g, '');

// Komentarze HTML <!-- ... --> nie trafiają do strony ani do porównań tłumaczeń.
export function stripComments(md) {
  return md.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * Blok metadanych na początku pliku:
 *   ---
 *   klucz: wartość   # komentarz (po spacji i znaku #)
 *   ---
 * Zwraca { meta, body }. Bez bloku meta jest pustym obiektem.
 */
export function splitFrontMatter(md) {
  const text = normalizeNewlines(md).replace(/^﻿/, '');
  const lines = text.split('\n');
  if (lines[0].trim() !== '---') return { meta: {}, body: text };
  let end = -1;
  for (let i = 1; i < lines.length && i < 40; i++) { if (lines[i].trim() === '---') { end = i; break; } }
  if (end < 0) return { meta: {}, body: text };
  const meta = {};
  for (const line of lines.slice(1, end)) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const m = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!m) return { meta: {}, body: text };
    let v = m[2].replace(/\s+#(\s.*)?$/, '').trim();
    if (/^(".*"|'.*')$/.test(v)) v = v.slice(1, -1);
    meta[m[1]] = v;
  }
  return { meta, body: lines.slice(end + 1).join('\n') };
}

const clean = s => s.replace(/\s+/g, ' ').trim();

// Akapity (bloki rozdzielone pustą linią) z odciskiem SHA-1 i początkiem tekstu.
export function paragraphs(md) {
  const { body } = splitFrontMatter(md);
  return stripComments(body).split(/\n[ \t]*\n/).map(clean).filter(Boolean).map(t => ({
    h: crypto.createHash('sha1').update(t, 'utf8').digest('hex'),
    t: t.slice(0, 80)
  }));
}

// Odcisk całej treści (bez metadanych i komentarzy): rejestr wersji zapisuje go przy ostatniej wersji,
// a generator ostrzega, gdy treść zmieniła się bez nowej wersji.
export function contentHash(md) {
  return crypto.createHash('sha1').update(paragraphs(md).map(p => p.h).join('\n'), 'utf8').digest('hex');
}

/**
 * Najdłuższy wspólny podciąg dwóch list (eq porównuje elementy). Zwraca kroki w kolejności tekstu:
 * { op: 'eq', i, j } (element w obu), { op: 'rem', i } (tylko w a), { op: 'add', j } (tylko w b).
 */
export function diffSeq(a, b, eq = (x, y) => x === y) {
  const n = a.length, m = b.length;
  const L = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    L[i][j] = eq(a[i], b[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = [];
  let i = 0, j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && eq(a[i], b[j])) { out.push({ op: 'eq', i, j }); i++; j++; }
    else if (j < m && (i >= n || L[i][j + 1] >= L[i + 1][j])) { out.push({ op: 'add', j }); j++; }
    else { out.push({ op: 'rem', i }); i++; }
  }
  return out;
}

/**
 * Porównanie zapisanych akapitów (oldP) z obecnymi (curP) przez najdłuższy wspólny podciąg.
 * Zwraca listę { kind: 'changed' | 'added' | 'removed', n (numer akapitu), t (początek) }.
 * Numery: dla changed i added w obecnym źródle, dla removed w zapisanym.
 */
export function diffParagraphs(oldP, curP) {
  const a = oldP.length, b = curP.length;
  const L = Array.from({ length: a + 1 }, () => new Int32Array(b + 1));
  for (let i = a - 1; i >= 0; i--) for (let j = b - 1; j >= 0; j--)
    L[i][j] = oldP[i].h === curP[j].h ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = [];
  let i = 0, j = 0, rem = [], add = [];
  const flush = () => {
    const pairs = Math.min(rem.length, add.length);
    for (let k = 0; k < pairs; k++) out.push({ kind: 'changed', n: add[k] + 1, t: curP[add[k]].t });
    for (let k = pairs; k < add.length; k++) out.push({ kind: 'added', n: add[k] + 1, t: curP[add[k]].t });
    for (let k = pairs; k < rem.length; k++) out.push({ kind: 'removed', n: rem[k] + 1, t: oldP[rem[k]].t });
    rem = []; add = [];
  };
  while (i < a || j < b) {
    if (i < a && j < b && oldP[i].h === curP[j].h) { flush(); i++; j++; }
    else if (j < b && (i >= a || L[i][j + 1] >= L[i + 1][j])) { add.push(j); j++; }
    else { rem.push(i); i++; }
  }
  flush();
  return out;
}
