/**
 * Novus Ignis · OmniActa na stronie: wszystkie zdarzenia akt jako lista od najnowszego (generator, tylko PL i EN).
 *
 * Wejście (D Marcina 4.11.2026 i 9.11.2026, sprawa w11):
 *   - content/acta/zdarzenia.json: kopia wydania publicznych akt (tools/acta-kopia.mjs), z commitem akt;
 *   - content/acta/sprawy.json: grupy spraw, tytuły spraw i zatwierdzone opisy (akta są surowym rejestrem,
 *     a porządkowanie zdarzeń w sprawy prowadzi strona).
 * Lista z pełną treścią powstaje przy budowaniu i działa bez skryptów (każde zdarzenie rozwija się w <details>);
 * js/acta.js dodaje filtry: rodzaje, kamienie milowe, grupa spraw albo jedna sprawa w grupie.
 */
const KOLORY = ['#FF6B00', '#00D2FF', '#FFB800', '#A07CFF', '#3DDC97', '#FF4F7B', '#7CC4FF', '#E8C07A', '#9AE66E', '#FF8C5A', '#C792EA', '#5ED3C4'];
const MILESTONE = 'kamien-milowy';

const TXT = {
  pl: {
    title: 'OmniActa: jawne akta fundacji',
    desc: 'Wszystkie zapisane zdarzenia Fundacji Novus Ignis od najnowszego: decyzje, pomysły, próby, błędy, wyniki i publikacje, z filtrami rodzajów i spraw.',
    intro: 'Wszystkie zapisane zdarzenia fundacji, od najnowszego: decyzje, pomysły, próby, błędy, wyniki i publikacje. Listę możesz zawęzić do rodzajów zdarzeń, kamieni milowych albo spraw; sprawy są zebrane w grupy. Kliknij zdarzenie, żeby zobaczyć całą treść, to, z czego wynika, i jego odcisk.',
    source: (date, commit, n) => 'Źródło: publiczne repozytorium akt, stan z ' + date + ' (commit ' + commit + ', ' + n + ' zdarzeń).',
    boundary: 'Publikacja strony', archive: 'Niżej archiwum: odtworzone później z plików i rozmów; daty to nasza deklaracja.',
    types: 'Rodzaje', matters: 'Sprawy', milestones: 'Kamienie milowe', milestone: 'kamień milowy', wholeGroup: 'cała grupa',
    clear: 'Pokaż wszystko', shown: 'Pokazano {n} z {z}',
    parents: 'Wynika z', children: 'Prowadzi do', who: 'Kto', sources: 'Źródła', hash: 'Odcisk', entry: 'Wpis w aktach',
    published: 'Publikacja', notPublished: 'jeszcze nieopublikowane', notify: 'czeka na uprzedzenie',
    archived: 'archiwum', reconstructed: 'odtworzono', accuracy: { dokladna: 'data dokładna', dzien: 'co do dnia', przyblizona: 'data przybliżona' },
    hashNote: 'Odcisk SHA-256 liczymy z treści zdarzenia i z odcisków zdarzeń, z których wynika: zmiana dawnego wpisu zmienia odciski wszystkich późniejszych.'
  },
  en: {
    title: 'OmniActa: the foundation\'s open records',
    desc: 'All recorded events of the Novus Ignis Foundation, newest first: decisions, ideas, trials, mistakes, results and publications, with filters for kinds and matters.',
    intro: 'All recorded events of the foundation, newest first: decisions, ideas, trials, mistakes, results and publications. You can narrow the list to kinds of events, milestones or matters; matters are gathered into groups. Click an event to see its full text, what it follows from and its fingerprint.',
    source: (date, commit, n) => 'Source: the public records repository as of ' + date + ' (commit ' + commit + ', ' + n + ' events).',
    boundary: 'Site published', archive: 'Below, the archive: reconstructed later from files and conversations; the dates are our declaration.',
    types: 'Kinds', matters: 'Matters', milestones: 'Milestones', milestone: 'milestone', wholeGroup: 'whole group',
    clear: 'Show everything', shown: 'Showing {n} of {z}',
    parents: 'Follows from', children: 'Leads to', who: 'Who', sources: 'Sources', hash: 'Fingerprint', entry: 'Entry in the records',
    published: 'Published', notPublished: 'not published yet', notify: 'awaiting notice',
    archived: 'archive', reconstructed: 'reconstructed', accuracy: { dokladna: 'exact date', dzien: 'to the day', przyblizona: 'approximate date' },
    hashNote: 'The SHA-256 fingerprint is computed from the event\'s content and from the fingerprints of the events it follows from: changing an old entry changes the fingerprints of all later ones.'
  }
};
// Tytuł i opis strony akt dla menu i mapy strony (build.mjs, siteData.pages.acta).
export const actaMeta = lang => ({ title: (TXT[lang] || TXT.en).title, desc: (TXT[lang] || TXT.en).desc });
export const TYPY = {
  pl: { pomysl: 'pomysł', decyzja: 'decyzja', dzialanie: 'działanie', proba: 'próba', wynik: 'wynik', blad: 'błąd', korekta: 'korekta', publikacja: 'publikacja', rozdzielenie: 'rozdzielenie', polaczenie: 'połączenie', raport: 'raport' },
  en: { pomysl: 'idea', decyzja: 'decision', dzialanie: 'action', proba: 'trial', wynik: 'result', blad: 'mistake', korekta: 'correction', publikacja: 'publication', rozdzielenie: 'split', polaczenie: 'merge', raport: 'report' }
};
const MIES_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function dataTxt(d, lang, dokl) {
  const [ymd, hm] = d.split(/[ T]/);
  const [y, m, dd] = ymd.split('-');
  if (dokl === 'przyblizona') return lang === 'pl' ? '~' + m + '.' + y : '~' + MIES_EN[+m - 1] + ' ' + y;
  const day = lang === 'pl' ? (+dd) + '.' + m + '.' + y : (+dd) + ' ' + MIES_EN[+m - 1] + ' ' + y;
  return day + (hm && dokl !== 'dzien' ? ', ' + hm.slice(0, 5) : '');
}

// Sprawy i grupy z content/acta/sprawy.json; etykieta bez wpisu jest pokazywana jak jest (z ostrzeżeniem w generatorze).
function matterIndex(cfg, lang, warn) {
  const loc = x => (x && (x[lang] || x.pl)) || {};
  const groups = (cfg.grupy || []).map((g, i) => ({ id: g.id, t: loc(g).tytul || g.id, c: KOLORY[i % KOLORY.length], sprawy: g.sprawy }));
  const groupOf = new Map();
  groups.forEach(g => g.sprawy.forEach(s => groupOf.set(s, g)));
  const all = cfg.sprawy || {};
  // sprawa pokazywana pod inną (np. dostawca bez zgody na nowe brzmienie): zdarzenia idą do sprawy z pokaz_jako
  const shownAs = id => (all[id] && all[id].pokaz_jako) || id;
  const title = id => loc(all[id]).tytul || id;
  const desc = id => (all[id] && all[id].zatwierdzone && all[id].zatwierdzone.opis && loc(all[id]).opis) || '';
  const unknown = new Set();
  const resolve = ids => {
    const out = [];
    for (const raw of ids) {
      if (raw === MILESTONE) continue;
      if (!all[raw]) unknown.add(raw);
      const id = shownAs(raw);
      if (!out.includes(id)) out.push(id);
    }
    return out;
  };
  return { groups, groupOf, title, desc, resolve, unknown, warnUnknown: () => unknown.size && warn && warn('content/acta/sprawy.json: brak spraw ' + [...unknown].join(', ')) };
}

export function actaPage(dane, sprawyCfg, lang, { esc, script, warn }) {
  const T = TXT[lang] || TXT.en;
  const TY = TYPY[lang] || TYPY.en;
  const loc = x => x[lang] || x.en || x.pl || { tytul: '', tekst: '' };
  const md = s => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>');
  const paras = s => (s || '').split(/\n\s*\n/).filter(p => p.trim()).map(p => '<p>' + md(p.trim()).replace(/\n/g, ' ') + '</p>').join('\n');
  const M = matterIndex(sprawyCfg || {}, lang, warn);

  const zd = dane.zdarzenia.slice().sort((a, b) => b.data.localeCompare(a.data) || b.id.localeCompare(a.id));
  const zById = new Map(zd.map(z => [z.id, z]));
  const children = new Map(zd.map(z => [z.id, []]));
  for (const z of zd) for (const r of z.rodzice || []) if (children.has(r)) children.get(r).push(z.id);
  const info = new Map(zd.map(z => {
    const s = M.resolve(z.sprawy || []);
    const g = [...new Set(s.map(id => M.groupOf.get(id)?.id).filter(Boolean))];
    return [z.id, { s, g, m: (z.sprawy || []).includes(MILESTONE) }];
  }));
  M.warnUnknown();

  const src = dane.zrodlo || {};
  const commit = (src.commit || '').slice(0, 7);
  const fileUrl = z => src.repozytorium && src.commit && z.plik ? src.repozytorium + '/blob/' + src.commit + '/' + z.plik : '';
  const ref = id => { const z = zById.get(id); return z ? '<li><a href="#z-' + esc(id) + '">' + esc(dataTxt(z.data, lang, z.dokladnosc)) + ' · ' + esc(loc(z).tytul) + '</a></li>' : ''; };
  const tag = id => { const g = M.groupOf.get(id); return '<span class="acta-tag" style="--c:' + (g ? g.c : '#8888A0') + '"' + (g ? ' title="' + esc(g.t) + '"' : '') + '>' + esc(M.title(id)) + '</span>'; };

  // lista od najnowszego; granica publikacji strony między bieżącymi a archiwum
  const items = [];
  let boundaryDone = false;
  for (const z of zd) {
    if (z.archiwum && !boundaryDone) {
      boundaryDone = true;
      items.push('<li class="acta-note acta-boundary"><span>' + esc(T.boundary + ' · ' + dataTxt(dane.publikacja_strony, lang)) + '</span></li>');
      items.push('<li class="acta-note"><span>' + esc(T.archive) + '</span></li>');
    }
    const t = loc(z), I = info.get(z.id), url = fileUrl(z);
    const meta = z.archiwum
      ? T.archived + (z.odtworzono ? ', ' + T.reconstructed + ' ' + z.odtworzono : '') + (z.dokladnosc ? ', ' + (T.accuracy[z.dokladnosc] || z.dokladnosc) : '')
      : '';
    const ch = children.get(z.id);
    items.push('<li class="acta-item' + (z.archiwum ? ' acta-item--archiwum' : '') + '" id="z-' + esc(z.id) + '" data-typ="' + esc(z.typ) + '" data-s="' + esc(I.s.join(' ')) + '" data-g="' + esc(I.g.join(' ')) + '" data-m="' + (I.m ? 1 : 0) + '">' +
      '<details><summary>' +
      '<span class="acta-date">' + esc(dataTxt(z.data, lang, z.dokladnosc)) + '</span>' +
      '<span class="acta-type acta-type--' + esc(z.typ) + '">' + esc(TY[z.typ] || z.typ) + '</span>' +
      (I.m ? '<span class="acta-star" title="' + esc(T.milestone) + '" aria-label="' + esc(T.milestone) + '">★</span>' : '') +
      '<span class="acta-title">' + esc(t.tytul) + '</span>' +
      '<span class="acta-tags">' + I.s.map(tag).join('') + '</span>' +
      '</summary>\n<div class="acta-body">' +
      (meta ? '<p class="acta-meta">' + esc(meta) + '</p>' : '') +
      paras(t.tekst) +
      '<dl class="acta-dl">' +
      (I.s.length ? '<dt>' + esc(T.matters) + '</dt><dd>' + I.s.map(tag).join(' ') + '</dd>' : '') +
      ((z.kto || []).length ? '<dt>' + esc(T.who) + '</dt><dd>' + esc(z.kto.join(', ')) + '</dd>' : '') +
      ((z.rodzice || []).length ? '<dt>' + esc(T.parents) + '</dt><dd><ul>' + z.rodzice.map(ref).join('') + '</ul></dd>' : '') +
      (ch.length ? '<dt>' + esc(T.children) + '</dt><dd><ul>' + ch.map(ref).join('') + '</ul></dd>' : '') +
      ((z.zrodla || []).length ? '<dt>' + esc(T.sources) + '</dt><dd><ul>' + z.zrodla.map(s => '<li><code>' + esc(s) + '</code></li>').join('') + '</ul></dd>' : '') +
      '<dt>' + esc(T.published) + '</dt><dd>' + esc(z.publikacja || T.notPublished) + ((z.uprzedzic || []).length && !z.uprzedzono ? ' · ' + esc(T.notify) : '') + '</dd>' +
      (url ? '<dt>' + esc(T.entry) + '</dt><dd><a href="' + esc(url) + '">' + esc(z.plik) + '</a></dd>' : '') +
      '<dt>' + esc(T.hash) + '</dt><dd><code class="acta-hash">' + esc(z.skrot || '') + '</code><br><small>' + esc(T.hashNote) + '</small></dd>' +
      '</dl></div></details></li>');
  }

  // filtry: rodzaje (z kamieniami milowymi) i sprawy w grupach; liczby przy przyciskach z całej listy
  const count = f => zd.filter(f).length;
  const nMile = count(z => info.get(z.id).m);
  const typeBtns = (nMile ? '<li><button type="button" class="acta-chip acta-chip--star" data-m="1" aria-pressed="false">★ ' + esc(T.milestones) + ' <span class="acta-n">' + nMile + '</span></button></li>' : '') +
    Object.keys(TY).filter(k => zd.some(z => z.typ === k)).map(k => '<li><button type="button" class="acta-chip acta-type--' + k + '" data-typ="' + k + '" aria-pressed="false">' + esc(TY[k]) + ' <span class="acta-n">' + count(z => z.typ === k) + '</span></button></li>').join('');
  const groupBtns = M.groups.map(g => {
    const n = count(z => info.get(z.id).g.includes(g.id));
    if (!n) return '';
    const subs = g.sprawy.filter(s => !M.resolve([s]).some(x => x !== s)).map(s => ({ s, n: count(z => info.get(z.id).s.includes(s)) })).filter(x => x.n);
    return '<li class="acta-group"><button type="button" class="acta-chip acta-gbtn" data-g="' + g.id + '" aria-pressed="false" aria-expanded="false" style="--c:' + g.c + '"><span class="acta-dot"></span>' + esc(g.t) + ' <span class="acta-n">' + n + '</span></button>' +
      (subs.length > 1 ? '<ul class="acta-sub" hidden>' + subs.map(x => '<li><button type="button" class="acta-chip acta-sbtn" data-s="' + x.s + '" data-g="' + g.id + '" aria-pressed="false">' + esc(M.title(x.s)) + ' <span class="acta-n">' + x.n + '</span></button>' +
        (M.desc(x.s) ? '<p class="acta-sdesc" hidden>' + md(M.desc(x.s)) + '</p>' : '') + '</li>').join('') + '</ul>' : '') + '</li>';
  }).join('');

  const srcLine = src.commit ? '<p class="acta-source">' + esc(T.source(dataTxt(src.data_commita || dane.utworzono || '', lang, 'dzien'), commit, zd.length)).replace(commit, '<a href="' + esc(src.repozytorium + '/tree/' + src.commit) + '">' + commit + '</a>') + '</p>' : '';
  const body = `<h1 id="top">${esc(T.title)}</h1>
<p>${esc(T.intro)}</p>
${srcLine}
<div class="acta-filters" hidden>
<div class="acta-fgroup"><h2 class="acta-h">${esc(T.types)}</h2><ul class="acta-chips">${typeBtns}</ul></div>
<div class="acta-fgroup"><h2 class="acta-h">${esc(T.matters)}</h2><ul class="acta-groups">${groupBtns}</ul></div>
<p class="acta-shown"><span data-tpl="${esc(T.shown)}" data-z="${zd.length}">${esc(T.shown.replace('{n}', zd.length).replace('{z}', zd.length))}</span> <button type="button" class="acta-chip acta-clear" hidden>${esc(T.clear)}</button></p>
</div>
<ol class="acta-list">
${items.join('\n')}
</ol>
<script src="${script}"></script>`;
  return { title: T.title, description: T.desc, body, toc: [] };
}
