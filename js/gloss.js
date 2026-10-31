/**
 * Novus Ignis · podpowiedzi do pojęć ze słownika.
 * Pojęcia w tekście to zwykłe odnośniki do strony słownika (a.gloss[data-gloss]). Gdy działa ten skrypt,
 * po najechaniu myszą, dotknięciu albo naciśnięciu Enter lub Spacji otwiera się dymek z definicją.
 * Pojęcia w definicji otwierają kolejną definicję w tym samym dymku (przycisk „Wstecz” wraca).
 * Definicje są w js/slownik-<język>.js (window.NI_GLOSS, tworzy je tools/build.mjs).
 * Skrypt niczego nie zapisuje i nie wysyła.
 */
(function () {
  'use strict';
  const data = window.NI_GLOSS;
  if (!data || !data.terms) return;
  const triggers = document.querySelectorAll('a.gloss[data-gloss]');
  if (!triggers.length) return;

  // Katalog główny strony: jeden poziom nad js/ (odnośniki do dokumentów i słownika w danych są względem niego).
  const me = document.currentScript || document.querySelector('script[src*="gloss.js"]');
  const root = me && me.src ? new URL('../', me.src).href : location.href;
  const ui = data.ui || {};
  const HOVER_OPEN = 220, HOVER_CLOSE = 320;
  const mobileQuery = window.matchMedia('(max-width: 640px)');

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  const glossUrl = function (id) { return new URL(data.page, root).href + '#' + id; };

  // Dymek (jeden na stronę)
  const pop = el('div', 'gloss-pop');
  pop.id = 'gloss-pop';
  pop.setAttribute('role', 'dialog');
  pop.setAttribute('aria-labelledby', 'gloss-pop-title');
  if (ui.label) pop.setAttribute('aria-roledescription', ui.label);
  pop.tabIndex = -1;
  pop.hidden = true;
  if (data.lang) pop.lang = data.lang;
  const head = el('div', 'gloss-pop__head');
  const back = el('button', 'gloss-pop__btn gloss-pop__back', '← ' + (ui.back || ''));
  back.type = 'button';
  back.hidden = true;
  const title = el('h2', 'gloss-pop__title');
  title.id = 'gloss-pop-title';
  title.tabIndex = -1;
  const close = el('button', 'gloss-pop__btn gloss-pop__close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', ui.close || '');
  head.appendChild(back); head.appendChild(title); head.appendChild(close);
  const def = el('p', 'gloss-pop__def');
  def.setAttribute('aria-live', 'polite');
  def.setAttribute('aria-atomic', 'true');
  const foot = el('p', 'gloss-pop__foot');
  const srcBox = el('span', 'gloss-pop__src');
  const full = el('a', 'gloss-pop__full');
  foot.appendChild(srcBox); foot.appendChild(full);
  pop.appendChild(head); pop.appendChild(def); pop.appendChild(foot);
  document.body.appendChild(pop);

  let current = null;       // odnośnik w tekście, z którego otwarto dymek
  let stack = [];           // identyfikatory pojęć: ostatni jest widoczny
  let pinned = false;       // otwarty kliknięciem/klawiszem (nie zamyka się po zjechaniu myszą)
  let hoverTimer = 0, closeTimer = 0;

  function setExpanded(a, on) {
    if (!a) return;
    a.setAttribute('aria-expanded', on ? 'true' : 'false');
  }

  function render() {
    const id = stack[stack.length - 1];
    const term = data.terms[id];
    title.textContent = term.t;
    def.innerHTML = term.d; // dane z własnego pliku strony, tworzone przez generator
    def.querySelectorAll('a[data-gloss]').forEach(function (a) {
      a.href = glossUrl(a.getAttribute('data-gloss'));
      a.setAttribute('aria-haspopup', 'dialog');
    });
    srcBox.textContent = '';
    if (term.s) {
      srcBox.appendChild(document.createTextNode((ui.source || '') + ' '));
      const a = el('a', '', term.l || term.s);
      a.href = new URL(term.s, root).href;
      if (term.m) a.setAttribute('hreflang', term.m.toLowerCase());
      srcBox.appendChild(a);
      if (term.m) srcBox.appendChild(document.createTextNode(' (' + term.m + ')'));
    }
    full.textContent = ui.glossary || '';
    full.href = glossUrl(id);
    back.hidden = stack.length < 2;
  }

  function place() {
    if (!current || pop.hidden) return;
    if (mobileQuery.matches) { pop.style.left = ''; pop.style.top = ''; return; } // panel przy dolnej krawędzi (CSS)
    const rects = current.getClientRects();
    const r = rects.length ? rects[0] : current.getBoundingClientRect();
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    pop.style.left = '0px'; pop.style.top = '0px';
    const w = pop.offsetWidth, h = pop.offsetHeight;
    const left = Math.max(8, Math.min(r.left, vw - w - 8));
    let top = r.bottom + 8;
    if (top + h > vh - 8) top = (r.top - 8 - h >= 8) ? r.top - 8 - h : Math.max(8, vh - h - 8);
    pop.style.left = (left + window.pageXOffset) + 'px';
    pop.style.top = (top + window.pageYOffset) + 'px';
  }

  function open(a, opts) {
    const id = a.getAttribute('data-gloss');
    if (!data.terms[id]) return;
    clearTimeout(hoverTimer); clearTimeout(closeTimer);
    if (current && current !== a) setExpanded(current, false);
    current = a;
    stack = [id];
    pinned = !!(opts && opts.pinned);
    pop.hidden = false;
    render();
    setExpanded(a, true);
    place();
    if (opts && opts.focus) pop.focus({ preventScroll: true });
  }

  function hide(restoreFocus) {
    if (!current) return;
    clearTimeout(hoverTimer); clearTimeout(closeTimer);
    const a = current;
    const had = pop.contains(document.activeElement);
    pop.hidden = true;
    setExpanded(a, false);
    current = null; stack = []; pinned = false;
    if (restoreFocus || had) a.focus({ preventScroll: true });
  }

  function push(id) {
    if (!data.terms[id]) return;
    stack.push(id);
    render();
    place();
    title.focus({ preventScroll: true });
  }
  back.addEventListener('click', function () {
    if (stack.length < 2) return;
    stack.pop();
    render();
    place();
    title.focus({ preventScroll: true });
  });
  close.addEventListener('click', function () { hide(true); });

  // Wspólna obsługa kliknięcia i klawisza: odnośnik w tekście, pojęcie w dymku, kliknięcie poza dymkiem.
  document.addEventListener('click', function (e) {
    const a = e.target.closest ? e.target.closest('a.gloss[data-gloss]') : null;
    if (a) {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return; // nowa karta: zwykły odnośnik
      e.preventDefault();
      if (pop.contains(a)) { push(a.getAttribute('data-gloss')); return; }
      if (current === a && !pop.hidden) {
        if (pinned) hide(false); else pinned = true;
        return;
      }
      open(a, { pinned: true, focus: e.detail === 0 }); // detail 0: Enter lub Spacja, więc fokus do dymka
      return;
    }
    if (!pop.hidden && !pop.contains(e.target)) hide(false);
  });

  document.addEventListener('keydown', function (e) {
    const a = e.target.closest ? e.target.closest('a.gloss[data-gloss]') : null;
    if (a && e.key === ' ' && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); a.click(); return; }
    if (pop.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); hide(pop.contains(document.activeElement) || document.activeElement === current); return; }
    if (e.key === 'Tab' && pop.contains(document.activeElement)) {
      // fokus krąży w dymku, dopóki go nie zamkniemy (Escape albo „Zamknij”)
      const items = Array.prototype.filter.call(pop.querySelectorAll('button, a[href]'), function (x) { return !x.hidden && x.offsetParent !== null; });
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === pop || document.activeElement === title)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Mysz: podgląd po najechaniu (dotyk i klawiatura korzystają z kliknięcia).
  document.addEventListener('pointerover', function (e) {
    if (e.pointerType !== 'mouse') return;
    const t = e.target;
    if (pop.contains(t)) { clearTimeout(closeTimer); return; }
    const a = t.closest ? t.closest('a.gloss[data-gloss]') : null;
    if (a) {
      clearTimeout(closeTimer);
      if (pinned || (current === a && !pop.hidden)) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(function () { open(a, { pinned: false }); }, HOVER_OPEN);
      return;
    }
    clearTimeout(hoverTimer);
    if (!pop.hidden && !pinned) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () { if (!pinned) hide(false); }, HOVER_CLOSE);
    }
  });

  // Fokus wychodzi z dymka klawiszem Tab (np. po zmianie okna): zamykamy bez przenoszenia fokusu.
  pop.addEventListener('focusout', function (e) {
    const to = e.relatedTarget;
    if (to && !pop.contains(to) && to !== current) hide(false);
  });

  window.addEventListener('resize', place);
  window.addEventListener('orientationchange', place);
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', place);

  // Odnośniki w tekście informują o dymku.
  triggers.forEach(function (a) {
    a.setAttribute('aria-haspopup', 'dialog');
    a.setAttribute('aria-controls', 'gloss-pop');
    a.setAttribute('aria-expanded', 'false');
  });
})();
