/**
 * Novus Ignis · wspólny nagłówek i stopka.
 * Ten sam kod działa w przeglądarce (strona główna) i w generatorze
 * tools/build.mjs (strony dokumentów), więc menu i stopka mają jedno źródło.
 * Wszystkie napisy pochodzą z locales/<język>.json (klucze "nav").
 */
(function (root) {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Ścieżka do dokumentu w danym języku; gdy brak tłumaczenia, wersja w języku źródłowym.
  function docHref(site, id, lang, base) {
    const d = site && site.docs && site.docs[id];
    if (!d) return base + 'index.html';
    const l = d.langs.indexOf(lang) >= 0 ? lang : site.sourceLang;
    return base + l + '/' + d.path;
  }

  // Strona główna w danym języku: język źródłowy w katalogu głównym, pozostałe w <język>/.
  function homeHref(site, lang, base) {
    const src = (site && site.sourceLang) || 'pl';
    return (base || '') + (lang === src ? '' : lang + '/') || './';
  }

  // Podstrona (Markdown w content/<język>/strony/) w danym języku; gdy brak tłumaczenia, wersja źródłowa.
  function pageHref(site, slug, lang, base) {
    const p = site && site.pages && site.pages[slug];
    if (!p) return homeHref(site, lang, base);
    const l = p.langs.indexOf(lang) >= 0 ? lang : site.sourceLang;
    return (base || '') + l + '/' + p.path;
  }

  function docAvailable(site, id, lang) {
    const d = site && site.docs && site.docs[id];
    return !!(d && d.langs.indexOf(lang) >= 0);
  }

  // Grupy menu w kolejności z nagłówka. Dokumenty i „Dołącz” mają własne miejsca na stronie głównej.
  const GROUPS = ['dlaczego', 'suveria', 'omniforum', 'fundacja', 'dokumenty', 'dolacz'];
  const NAV_DOCS = ['manifest', 'suveria', 'omniforum', 'fundacja', 'benchmark', 'statut'];
  // Odnośniki stopki „Na skróty” (slug podstrony i klucz etykiety w locales: nav.shortcuts).
  const SHORTCUTS = [['w-skrocie', 'w_skrocie'], ['dziennik-zmian', 'dziennik_zmian'], ['slownik', 'slownik'], ['mapa-strony', 'mapa_strony']];

  function pageAvailable(site, slug, lang) {
    const p = site && site.pages && site.pages[slug];
    return !!(p && p.langs.indexOf(lang) >= 0);
  }
  // Czy podstrona istnieje w języku strony albo w języku źródłowym.
  function pageExists(site, slug, lang) {
    const p = site && site.pages && site.pages[slug];
    return !!(p && (p.langs.indexOf(lang) >= 0 || p.langs.indexOf(site.sourceLang) >= 0));
  }
  function pageLabel(site, slug, lang) {
    const p = site.pages[slug];
    return (p.menu && (p.menu[lang] || p.menu[site.sourceLang])) || (p.titles && (p.titles[lang] || p.titles[site.sourceLang])) || slug;
  }

  /**
   * Pozycje rozwijanej listy grupy: najpierw strona przeglądowa (slug równy kluczowi grupy), potem podstrony
   * posortowane według metadanych `kolejnosc`; w grupie „dokumenty” po stronie przeglądowej najpierw dokumenty.
   */
  function groupItems(site, group, lang, base, t) {
    const items = [];
    // Strona przeglądowa grupy też jest na liście (pierwsza), bo nie każdy zauważa, że pozycję główną można kliknąć.
    if (site && site.pages && site.pages[group]) {
      const label = ((t.overview || {})[group]) || pageLabel(site, group, lang);
      items.push({ key: 'page:' + group, label: label, href: pageHref(site, group, lang, base), mark: pageAvailable(site, group, lang) ? '' : site.sourceLang });
    }
    if (group === 'dokumenty') {
      NAV_DOCS.forEach(function (id) {
        if (!site || !site.docs || !site.docs[id]) return;
        items.push({ key: 'doc:' + id, label: ((t.docs || {})[id]) || id, href: docHref(site, id, lang, base), mark: docAvailable(site, id, lang) ? '' : site.sourceLang });
      });
    }
    const list = Object.keys((site && site.pages) || {}).filter(function (slug) { return slug !== group && site.pages[slug].group === group; });
    list.sort(function (a, b) { return (site.pages[a].order - site.pages[b].order) || (a < b ? -1 : 1); });
    list.forEach(function (slug) {
      items.push({ key: 'page:' + slug, label: pageLabel(site, slug, lang), href: pageHref(site, slug, lang, base), mark: pageAvailable(site, slug, lang) ? '' : site.sourceLang });
    });
    return items;
  }

  /**
   * Odnośnik pozycji głównej: strona przeglądowa grupy (podstrona o slugu = klucz grupy), a gdy jej nie ma,
   * dla „dokumentów” i „Dołącz” odpowiednia sekcja strony głównej, dla pozostałych grup pierwsza podstrona,
   * dokument (Suveria, Omniforum) albo początek strony głównej.
   */
  function groupHref(site, group, lang, base, home) {
    if (site && site.pages && site.pages[group]) return pageHref(site, group, lang, base);
    if (group === 'dokumenty') return home + '#dokumenty';
    if (group === 'dolacz') return home + '#dolacz';
    const first = groupItems(site, group, lang, base, {}).filter(function (i) { return i.key.indexOf('page:') === 0; })[0];
    if (first) return first.href;
    if (group === 'suveria' || group === 'omniforum') return docHref(site, group, lang, base);
    if (group === 'fundacja') return home + '#hubSection';
    return home + '#hero';
  }

  // Grupa, do której należy bieżąca strona (podświetlenie w menu).
  function activeGroup(site, opts) {
    if (opts.kind === 'doc') return 'dokumenty';
    if (opts.kind === 'page' && site && site.pages && site.pages[opts.page]) return site.pages[opts.page].group;
    return '';
  }

  /**
   * opts: { t (cały słownik języka), lang, base (ścieżka do katalogu głównego, np. '' lub '../'),
   *         site (NI_SITE), page ('home' | id dokumentu lub slug podstrony), kind ('home' | 'doc' | 'page'),
   *         hidden (bool),
   *         langItems: [{code, name, href|null, active}] (odnośniki do tej samej strony w innych językach) }
   */
  function header(opts) {
    const t = (opts.t && opts.t.nav) || {};
    const G = t.groups || {};
    const base = opts.base || '';
    const lang = opts.lang;
    const site = opts.site;
    const isHome = opts.page === 'home';
    const home = isHome ? '' : homeHref(site, lang, base);
    const current = activeGroup(site, opts);

    // Jedna pozycja menu; mobile = wersja w panelu rozwijanym (inne identyfikatory).
    function groupHtml(g, mobile) {
      const items = groupItems(site, g, lang, base, t);
      const cls = ['nav-group__link'];
      if (g === 'dolacz') cls.push('nav-link--highlight');
      if (current === g) cls.push('active');
      const label = G[g] || g;
      let html = '<div class="nav-group' + (mobile ? ' nav-group--mobile' : '') + '"><a class="' + cls.join(' ') + '" href="' + esc(groupHref(site, g, lang, base, home)) + '"' + (current === g ? ' aria-current="true"' : '') + '>' + esc(label) + '</a>';
      if (items.length) {
        const id = 'nav-sub-' + (mobile ? 'm-' : '') + g;
        html += '<button type="button" class="nav-group__toggle" aria-expanded="false" aria-controls="' + id + '" aria-label="' + esc(label + ': ' + (t.expand || '')) + '">' +
          '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></button>' +
          '<ul class="nav-group__menu" id="' + id + '">' + items.map(function (i) {
            const here = (opts.kind === 'doc' && i.key === 'doc:' + opts.page) || (opts.kind === 'page' && i.key === 'page:' + opts.page);
            return '<li><a href="' + esc(i.href) + '"' + (here ? ' aria-current="page" class="active"' : '') + (i.mark ? ' hreflang="' + esc(i.mark) + '"' : '') + '>' + esc(i.label) +
              (i.mark ? ' <span class="footer-lang">(' + esc(i.mark.toUpperCase()) + ')</span>' : '') + '</a></li>';
          }).join('') + '</ul>';
      }
      return html + '</div>';
    }
    const linksHtml = GROUPS.map(function (g) { return groupHtml(g, false); }).join('');
    const mobileHtml = GROUPS.map(function (g) { return groupHtml(g, true); }).join('');

    const languages = (site && site.languages) || [{ code: 'pl', name: 'Polski' }, { code: 'en', name: 'English' }];
    const cur = languages.filter(function (l) { return l.code === lang; })[0] || { code: lang, name: lang };
    const items = (opts.langItems || []).map(function (l) {
      if (!l.href) {
        return '<span class="lang-dropdown__item is-disabled" title="' + esc((opts.t.doc || {}).not_translated || '') + '">' +
          '<span class="lang-dropdown__code">' + esc(l.code.toUpperCase()) + '</span><span class="lang-dropdown__label">' + esc(l.name) + '</span></span>';
      }
      return '<a class="lang-dropdown__item' + (l.active ? ' active' : '') + '" href="' + esc(l.href) + '" data-lang="' + esc(l.code) + '" hreflang="' + esc(l.code) + '" lang="' + esc(l.code) + '">' +
        '<span class="lang-dropdown__code">' + esc(l.code.toUpperCase()) + '</span><span class="lang-dropdown__label">' + esc(l.name) + '</span></a>';
    }).join('');

    return '' +
      '<nav class="subpage-nav' + (isHome ? ' site-nav--home' : '') + (opts.hidden ? ' site-nav--hidden' : '') + '" aria-label="' + esc(t.menu || 'Menu') + '">' +
        '<div class="container subpage-nav__inner">' +
          '<a href="' + esc(isHome ? '#hero' : home + '#hero') + '" class="subpage-nav__brand">' +
            '<img src="' + base + 'IMG/Logo.webp" alt="" width="32" height="32"><span>' + esc(t.brand || 'NOVUS IGNIS') + '</span></a>' +
          '<div class="subpage-nav__right">' +
            '<div class="subpage-nav__links">' + linksHtml + '</div>' +
            '<div class="lang-dropdown">' +
              '<button type="button" class="lang-dropdown__trigger" aria-haspopup="true" aria-label="' + esc(t.language || 'Language') + '">' +
                '<span>' + esc(cur.code.toUpperCase()) + '</span>' +
                '<svg class="lang-dropdown__arrow" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
              '</button>' +
              '<div class="lang-dropdown__menu">' + items + '</div>' +
            '</div>' +
            '<details class="nav-mobile"><summary aria-label="' + esc(t.menu || 'Menu') + '"><span></span><span></span><span></span></summary>' +
              '<div class="nav-mobile__panel">' + mobileHtml + '</div></details>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  function footer(opts) {
    const t = (opts.t && opts.t.nav) || {};
    const F = t.footer || {};
    const D = t.docs || {};
    const S = t.shortcuts || {};
    const base = opts.base || '';
    const lang = opts.lang;
    const site = opts.site;
    const mark = function (available) { return available ? '' : ' <span class="footer-lang">(' + esc((site && site.sourceLang || 'pl').toUpperCase()) + ')</span>'; };
    const docsHtml = NAV_DOCS.map(function (id) {
      return '<a href="' + esc(docHref(site, id, lang, base)) + '">' + esc(D[id] || id) + mark(docAvailable(site, id, lang)) + '</a>';
    }).join('');
    // „Na skróty”: cztery stałe strony, jeśli istnieją, oraz inne podstrony z grupy „skroty”.
    const named = SHORTCUTS.filter(function (s) { return pageExists(site, s[0], lang); }).map(function (s) {
      return { slug: s[0], label: S[s[1]] || pageLabel(site, s[0], lang) };
    });
    const extra = Object.keys((site && site.pages) || {}).filter(function (slug) {
      return site.pages[slug].group === 'skroty' && !SHORTCUTS.some(function (s) { return s[0] === slug; }) && pageExists(site, slug, lang);
    }).sort(function (a, b) { return (site.pages[a].order - site.pages[b].order) || (a < b ? -1 : 1); }).map(function (slug) {
      return { slug: slug, label: pageLabel(site, slug, lang) };
    });
    const shortcuts = named.concat(extra).map(function (s) {
      return '<a href="' + esc(pageHref(site, s.slug, lang, base)) + '">' + esc(s.label) + mark(pageAvailable(site, s.slug, lang)) + '</a>';
    }).join('');
    const home = opts.page === 'home' ? '' : homeHref(site, lang, base);
    return '' +
      '<div class="container footer-container">' +
        '<div class="footer-brand">' +
          '<img src="' + base + 'IMG/Logo.webp" alt="" class="footer-logo" width="48" height="48">' +
          '<span class="footer-name">' + esc(t.brand || 'NOVUS IGNIS') + '</span>' +
          '<p class="footer-tagline">' + esc(t.tagline || '') + '</p>' +
        '</div>' +
        '<div class="footer-nav">' +
          '<div class="footer-col"><span class="footer-col__title">' + esc(F.documents || '') + '</span>' + docsHtml + '</div>' +
          (shortcuts ? '<div class="footer-col"><span class="footer-col__title">' + esc(F.shortcuts || '') + '</span>' + shortcuts + '</div>' : '') +
          '<div class="footer-col"><span class="footer-col__title">' + esc(F.contact || '') + '</span>' +
            '<a href="mailto:salve@novusignis.org">salve@novusignis.org</a>' +
            '<a href="' + esc(home + '#dolacz') + '">' + esc((t.links || {}).join || (t.groups || {}).dolacz || '') + '</a>' +
            '<a href="https://wyszukiwarka-krs.ms.gov.pl/dane-szczegolowe-podmiotu;numerKRS=u79b4pRjUNnvVRmT6DbRuQ%3D%3D;typ=S" rel="noopener">' + esc(F.krs || 'KRS') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="container footer-bottom">' +
        '<p>' + esc(F.legal || '') + '</p>' +
        '<p>' + (F.license_html || '') + ' ' + esc(F.privacy || '') + '</p>' +
      '</div>';
  }

  // Karty dokumentów na stronie głównej (statycznie wstawia je tools/build.mjs).
  function docCards(opts) {
    const t = opts.t || {};
    const lang = opts.lang;
    const site = opts.site;
    const base = opts.base || '';
    const cards = (t.hub && t.hub.cards) || {};
    return ['manifest', 'suveria', 'omniforum', 'fundacja', 'benchmark', 'statut'].map(function (id) {
      const d = site && site.docs[id];
      if (!d) return '';
      const c = cards[id] || {};
      const available = d.langs.indexOf(lang) >= 0;
      const title = d.titles[lang] || d.titles[site.sourceLang] || id;
      const mark = available ? '' : ' <span class="doc-lang-mark">(' + esc(site.sourceLang.toUpperCase()) + ')</span>';
      return '<a href="' + esc(docHref(site, id, lang, base)) + '" class="blueprint-card"' + (available ? '' : ' hreflang="' + esc(site.sourceLang) + '"') + '>' +
        '<div class="blueprint-card__badge">' + esc(c.badge || '') + '</div>' +
        '<h4 class="blueprint-card__title"' + (available ? '' : ' lang="' + esc(site.sourceLang) + '"') + '>' + esc(title) + '</h4>' +
        '<p class="blueprint-card__desc">' + esc(c.desc || '') + '</p>' +
        '<span class="blueprint-card__link">' + esc((t.hub && t.hub.docs_read) || '') + mark + '</span>' +
        '</a>';
    }).join('\n');
  }

  root.NILayout = { header: header, footer: footer, docCards: docCards, docHref: docHref, homeHref: homeHref, pageHref: pageHref, docAvailable: docAvailable, esc: esc };

  // Obsługa w przeglądarce: listy podstron w menu, lista języków, zapamiętanie wybranego języka, zamykanie menu.
  if (typeof document !== 'undefined' && !root.__niLayoutEvents) {
    root.__niLayoutEvents = true;

    // Rozwijana grupa menu: klasa is-open na .nav-group i aria-expanded na przycisku.
    const setGroup = function (group, open) {
      const btn = group.querySelector('.nav-group__toggle');
      if (!btn) return;
      group.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    const closeGroups = function (except) {
      document.querySelectorAll('.nav-group.is-open').forEach(function (g) { if (g !== except) setGroup(g, false); });
    };

    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('.nav-group__toggle');
      if (toggle) {
        const group = toggle.closest('.nav-group');
        const open = !group.classList.contains('is-open');
        closeGroups(group);
        setGroup(group, open);
        return;
      }
      if (!e.target.closest('.nav-group')) closeGroups(null);
      const trigger = e.target.closest('.lang-dropdown__trigger');
      if (trigger) { trigger.parentElement.classList.toggle('is-open'); return; }
      const docLang = e.target.closest('a[data-lang]');
      if (docLang) { try { localStorage.setItem('novus_lang', docLang.getAttribute('data-lang')); } catch (err) { /* bez zapisu */ } }
      if (!e.target.closest('.lang-dropdown')) {
        document.querySelectorAll('.lang-dropdown.is-open').forEach(function (el) { el.classList.remove('is-open'); });
      }
      const mobileLink = e.target.closest('.nav-mobile__panel a');
      if (mobileLink) { const d = mobileLink.closest('details'); if (d) d.open = false; }
    });

    // Myszka: lista otwiera się po najechaniu (dotyk i klawiatura używają przycisku).
    document.addEventListener('pointerover', function (e) {
      if (e.pointerType !== 'mouse') return;
      const group = e.target.closest('.nav-group:not(.nav-group--mobile)');
      if (group) { closeGroups(group); setGroup(group, true); }
      else closeGroups(null);
    });
    // Klawiatura: Escape zamyka listę i oddaje fokus przyciskowi; wyjście fokusem z grupy też ją zamyka.
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      const open = document.querySelector('.nav-group.is-open');
      if (open) {
        const had = open.contains(document.activeElement);
        closeGroups(null);
        if (had) { const btn = open.querySelector('.nav-group__toggle'); if (btn) btn.focus(); }
      }
      document.querySelectorAll('.lang-dropdown.is-open').forEach(function (el) { el.classList.remove('is-open'); });
    });
    document.addEventListener('focusout', function (e) {
      const group = e.target.closest && e.target.closest('.nav-group.is-open');
      if (group && e.relatedTarget && !group.contains(e.relatedTarget)) setGroup(group, false);
    });
  }
})(typeof window !== 'undefined' ? window : globalThis);
