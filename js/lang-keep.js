/**
 * Novus Ignis · zmiana języka bez powrotu na górę strony.
 * Kliknięcie języka w przełączniku zapamiętuje miejsce czytania:
 *  - w dokumentach: najbliższy nagłówek nad górną krawędzią ekranu (kotwice rozdziałów są wspólne dla wszystkich języków),
 *  - na stronie głównej i podstronach: pozycję przewinięcia (na stronie głównej układ jest taki sam w każdym języku).
 * Po załadowaniu wersji w innym języku przewija w to samo miejsce. Nic nie trafia poza przeglądarkę.
 */
(function () {
  'use strict';
  const KEY = 'ni-lang-keep';
  const isHome = !!document.getElementById('heroContent');

  function store(v) { try { sessionStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* brak dostępu */ } }
  function take() {
    try { const v = JSON.parse(sessionStorage.getItem(KEY) || 'null'); sessionStorage.removeItem(KEY); return v; } catch (e) { return null; }
  }

  // Kotwica rozdziału: ostatni nagłówek z id, który jest już nad górną krawędzią ekranu.
  function currentAnchor() {
    const hs = document.querySelectorAll('main h2[id], main h3[id], main h4[id]');
    let id = null;
    for (const h of hs) { if (h.getBoundingClientRect().top <= 90) id = h.id; else break; }
    return id && /^(s\d|par-|r-)/.test(id) ? id : null;
  }

  document.addEventListener('click', ev => {
    const a = ev.target.closest && ev.target.closest('a[data-lang][hreflang]');
    if (!a || a.classList.contains('active') || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return;
    const anchor = isHome ? null : currentAnchor();
    if (anchor) { a.setAttribute('href', a.getAttribute('href').split('#')[0] + '#' + anchor); return; }
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    store({ y: scrollY, ratio: scrollY / max, home: isHome, t: Date.now() });
  }, true);

  // Strona jest ukryta (klasa ni-restoring z <head>), dopóki nie wróci na zapamiętane miejsce: bez mignięcia początku.
  const show = () => document.documentElement.classList.remove('ni-restoring');
  setTimeout(show, 1500);
  // Odświeżenie strony (F5): miejsce zapamiętane przy opuszczaniu strony, przywracane po przeładowaniu.
  const RKEY = 'ni-reload';
  addEventListener('pagehide', () => {
    try { sessionStorage.setItem(RKEY, JSON.stringify({ p: location.pathname, y: scrollY })); } catch (e) { /* brak dostępu */ }
  });
  const navType = ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || {}).type;
  let saved = take();
  if (!saved && navType === 'reload') {
    try {
      const r = JSON.parse(sessionStorage.getItem(RKEY) || 'null');
      if (r && r.p === location.pathname) saved = { y: r.y, exact: true, t: Date.now() };
    } catch (e) { /* brak dostępu */ }
  }
  if (!saved || Date.now() - saved.t > 15000 || (location.hash && !saved.exact)) { show(); return; }
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const go = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const y = saved.exact || (saved.home && isHome) ? saved.y : Math.round(saved.ratio * max);
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    window.scrollTo(0, y);
    requestAnimationFrame(() => requestAnimationFrame(show));
  };
  // Nie czekamy na wszystkie obrazy (load): wysokości sekcji są w CSS, więc wystarczy gotowy DOM.
  if (document.readyState !== 'loading') setTimeout(go, 30);
  else addEventListener('DOMContentLoaded', () => setTimeout(go, 30));
})();
