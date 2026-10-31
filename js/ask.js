/**
 * Novus Ignis · okienko „Zapytaj swoją cyfrową inteligencję” (przycisk TL;DR na stronie głównej).
 * Kopiuje dokumenty do schowka z krótkim poleceniem na początku, otwiera rozmowę w wybranym
 * serwisie z pytaniem zawierającym link do czytaj.txt albo pozwala pobrać plik.
 * Strona niczego nie wysyła: tekst trafia tylko do schowka osoby, która kliknęła.
 * Bez JavaScriptu przycisk zostaje zwykłym pobraniem pliku llms-full.txt.
 */
(function () {
  'use strict';
  const site = window.NI_SITE;
  if (!site) return;
  const lang = document.body.getAttribute('data-lang') || site.sourceLang;
  const ui = Object.assign({}, (site.ui[site.sourceLang] || {}).ask || {}, (site.ui[lang] || {}).ask || {});
  if (!ui.title) return;

  // Korzeń strony: folder nad js/ (strona główna PL leży w korzeniu, EN w en/).
  const cfgScript = document.querySelector('script[src*="js/site-config.js"]');
  const root = cfgScript ? new URL('../', cfgScript.src).href : new URL('./', location.href).href;

  // Serwisy z polem pytania w adresie. Formaty nieoficjalne: pytanie zawsze trafia też do schowka.
  const SERVICES = [
    { name: 'ChatGPT', url: q => 'https://chatgpt.com/?q=' + encodeURIComponent(q) },
    { name: 'Claude', url: q => 'https://claude.ai/new?q=' + encodeURIComponent(q) },
    { name: 'Gemini', paste: true, url: q => 'https://gemini.google.com/app?q=' + encodeURIComponent(q) },
    { name: 'Perplexity', url: q => 'https://www.perplexity.ai/search?q=' + encodeURIComponent(q) }
  ];

  let dialog = null, lastFocus = null;
  const cache = {};

  function fetchText(url) {
    if (!cache[url]) cache[url] = fetch(url, { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); });
    return cache[url];
  }

  function fallback(text) {
    const t = document.createElement('textarea');
    t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { /* brak dostępu do schowka */ }
    t.remove();
    return ok;
  }

  // Kopiowanie tekstu, który może jeszcze się pobierać: ClipboardItem z obietnicą działa w Safari
  // i Chrome w ramach jednego kliknięcia; w innych przeglądarkach czekamy na tekst i kopiujemy.
  function copyPromise(textPromise) {
    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
      const item = new ClipboardItem({ 'text/plain': textPromise.then(t => new Blob([t], { type: 'text/plain' })) });
      return navigator.clipboard.write([item]).catch(() => textPromise.then(t => navigator.clipboard.writeText(t)
        .catch(() => { if (!fallback(t)) throw new Error('copy'); })));
    }
    return textPromise.then(t => (navigator.clipboard && navigator.clipboard.writeText)
      ? navigator.clipboard.writeText(t).catch(() => { if (!fallback(t)) throw new Error('copy'); })
      : (fallback(t) ? undefined : Promise.reject(new Error('copy'))));
  }

  function flash(btn, text, ms) {
    btn.textContent = text;
    clearTimeout(btn._t);
    btn._t = setTimeout(() => { btn.textContent = btn.getAttribute('data-label'); }, ms || 2600);
  }

  function copyDoc(url, btn) {
    btn.textContent = ui.loading;
    const text = fetchText(url).then(t => ui.prompt + '\n\n---\n\n' + t);
    copyPromise(text).then(() => flash(btn, ui.copied), () => flash(btn, ui.failed, 4000));
  }

  function publicUrl(el) {
    const base = el.getAttribute('data-base') || '';
    return base + (lang === site.sourceLang ? '' : lang + '/') + 'czytaj.txt';
  }

  function button(label, cls, onClick) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'mail-help__btn' + (cls ? ' ' + cls : '');
    b.textContent = label; b.setAttribute('data-label', label);
    b.addEventListener('click', onClick);
    return b;
  }

  function build(trigger) {
    const fullUrl = new URL(trigger.getAttribute('href'), location.href).href;
    const manifestUrl = root + 'md/' + lang + '/manifest.md';
    const question = String(ui.prompt_link || '').replace('{url}', publicUrl(trigger));

    const box = document.createElement('div');
    box.className = 'mail-help ask-help';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-labelledby', 'ask-help-title');
    const panel = document.createElement('div');
    panel.className = 'mail-help__panel';
    const h = document.createElement('h2');
    h.id = 'ask-help-title'; h.className = 'mail-help__title'; h.textContent = ui.title;
    panel.appendChild(h);

    const copies = document.createElement('div');
    copies.className = 'ask-help__group';
    copies.appendChild(button(ui.copy_all, 'mail-help__btn--primary', e => copyDoc(fullUrl, e.currentTarget)));
    copies.appendChild(button(ui.copy_manifest, '', e => copyDoc(manifestUrl, e.currentTarget)));
    panel.appendChild(copies);

    const open = document.createElement('div');
    open.className = 'ask-help__group';
    const ol = document.createElement('p');
    ol.className = 'ask-help__label'; ol.textContent = ui.open_in;
    open.appendChild(ol);
    const row = document.createElement('div');
    row.className = 'mail-help__actions';
    for (const s of SERVICES) {
      const a = document.createElement('a');
      a.className = 'mail-help__btn mail-help__btn--small';
      a.href = s.url(question); a.target = '_blank'; a.rel = 'noopener';
      // Gemini nie wypełnia pola z adresu: pytanie jest w schowku, trzeba je wkleić
      a.textContent = s.paste && ui.paste ? s.name + ' · ' + ui.paste : s.name;
      if (s.paste && ui.paste_title) a.title = ui.paste_title;
      a.addEventListener('click', () => { copyPromise(Promise.resolve(question)).catch(() => {}); });
      row.appendChild(a);
    }
    open.appendChild(row);
    panel.appendChild(open);

    const actions = document.createElement('div');
    actions.className = 'mail-help__actions';
    const dl = document.createElement('a');
    dl.className = 'mail-help__btn mail-help__btn--ghost';
    dl.href = trigger.getAttribute('href');
    dl.setAttribute('download', trigger.getAttribute('download') || '');
    dl.textContent = ui.download;
    // Zapis na dysk przez Blob: niektóre przeglądarki otwierają .txt w karcie mimo atrybutu download.
    dl.addEventListener('click', ev => {
      ev.preventDefault();
      fetchText(fullUrl).then(t => {
        const url = URL.createObjectURL(new Blob([t], { type: 'application/octet-stream' }));
        const a = document.createElement('a');
        a.href = url; a.download = trigger.getAttribute('download') || 'novus-ignis.txt';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }, () => { location.href = dl.href; });
    });
    actions.appendChild(dl);
    actions.appendChild(button(ui.close, 'mail-help__btn--ghost', close));
    panel.appendChild(actions);

    box.appendChild(panel);
    box.addEventListener('click', ev => { if (ev.target === box) close(); });
    // Pobieramy teksty od razu, żeby kopiowanie po kliknięciu było natychmiastowe.
    fetchText(fullUrl).catch(() => {}); fetchText(manifestUrl).catch(() => {});
    return box;
  }

  function open(trigger) {
    close();
    lastFocus = trigger;
    dialog = build(trigger);
    document.body.appendChild(dialog);
    const first = dialog.querySelector('.mail-help__btn');
    if (first) first.focus();
  }
  function close() {
    if (!dialog) return;
    dialog.remove(); dialog = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', ev => {
    const a = ev.target.closest && ev.target.closest('a[data-ask]');
    if (!a || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return;
    ev.preventDefault();
    open(a);
  });
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape' && dialog) close(); });
})();
