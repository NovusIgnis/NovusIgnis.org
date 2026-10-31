/**
 * Novus Ignis · strony dokumentów.
 * Jeśli czytelnik wybrał inny język (albo przeglądarka go wskazuje), a dokument nie ma
 * jeszcze tłumaczenia, pokazujemy krótką informację w jego języku.
 */
(function () {
  'use strict';
  // Na wąskim ekranie spis treści jest domyślnie zwinięty.
  if (window.matchMedia && window.matchMedia('(max-width: 960px)').matches) {
    const toc = document.querySelector('.doc-toc__box');
    if (toc) toc.open = false;
  }

  const site = window.NI_SITE;
  const body = document.body;
  if (!site || !body) return;
  const docId = body.getAttribute('data-doc');
  const pageId = body.getAttribute('data-page');
  const pageLang = body.getAttribute('data-lang');
  const codes = site.languages.map(function (l) { return l.code; });

  let pref = null;
  try { pref = localStorage.getItem('novus_lang'); } catch (e) { pref = null; }
  if (!pref) {
    const list = navigator.languages || [navigator.language || ''];
    for (let i = 0; i < list.length; i++) {
      const c = (list[i] || '').toLowerCase().split('-')[0];
      if (codes.indexOf(c) >= 0) { pref = c; break; }
    }
  }
  if (!pref || pref === pageLang || codes.indexOf(pref) < 0) return;

  const doc = docId ? site.docs[docId] : (pageId && site.pages ? site.pages[pageId] : null);
  if (!doc || doc.langs.indexOf(pref) >= 0) return;
  const ui = site.ui[pref] || {};
  const box = document.getElementById('docNotice');
  if (!box || !ui.not_translated) return;
  box.textContent = ui.not_translated + ' ' + (ui.reading_original || '');
  box.setAttribute('lang', pref);
  box.hidden = false;
})();
