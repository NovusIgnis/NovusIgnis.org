/**
 * Novus Ignis · pomoc przy odnośnikach mailowych.
 * Kliknięcie odnośnika mailto: otwiera małe okienko z adresem, tematem i przyciskami:
 * skopiuj adres (temat, treść), otwórz program pocztowy albo pocztę w przeglądarce (Gmail, Outlook).
 * Dla osób bez skonfigurowanego programu pocztowego. Strona niczego nie wysyła ani nie zapisuje.
 */
(function () {
  'use strict';
  const site = window.NI_SITE;
  if (!site) return;
  const lang = document.body.getAttribute('data-lang') || site.sourceLang;
  const ui = Object.assign({}, (site.ui[site.sourceLang] || {}).mail || {}, (site.ui[lang] || {}).mail || {});
  if (!ui.title) return;

  let dialog = null, current = null, lastFocus = null;

  function parse(href) {
    const raw = href.replace(/^mailto:/i, '');
    const q = raw.indexOf('?');
    const to = decodeURIComponent(q < 0 ? raw : raw.slice(0, q));
    const params = new URLSearchParams(q < 0 ? '' : raw.slice(q + 1));
    return { href: href, to: to, subject: params.get('subject') || '', body: params.get('body') || '' };
  }

  function copyText(text, btn) {
    const done = function () { btn.textContent = ui.copied; setTimeout(function () { btn.textContent = btn.getAttribute('data-label'); }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    } else { fallback(text); done(); }
  }
  function fallback(text) {
    const t = document.createElement('textarea');
    t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); } catch (e) { /* brak dostępu do schowka */ }
    t.remove();
  }

  function button(label, cls, onClick) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'mail-help__btn' + (cls ? ' ' + cls : '');
    b.textContent = label; b.setAttribute('data-label', label);
    b.addEventListener('click', onClick);
    return b;
  }
  function link(label, href, cls) {
    const a = document.createElement('a');
    a.className = 'mail-help__btn' + (cls ? ' ' + cls : '');
    a.href = href; a.textContent = label;
    a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('data-mail-help', 'skip');
    a.addEventListener('click', close);
    return a;
  }

  function build(m) {
    const box = document.createElement('div');
    box.className = 'mail-help';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-labelledby', 'mail-help-title');
    const panel = document.createElement('div');
    panel.className = 'mail-help__panel';
    const h = document.createElement('h2');
    h.id = 'mail-help-title'; h.className = 'mail-help__title'; h.textContent = ui.title;
    panel.appendChild(h);
    const rows = document.createElement('dl');
    rows.className = 'mail-help__rows';
    // shown: co widać w okienku; value: co trafia do schowka (przy treści widać tylko „treść jest gotowa”)
    const add = function (label, shown, copyLabel, value) {
      const dt = document.createElement('dt'); dt.textContent = label;
      const dd = document.createElement('dd');
      const v = document.createElement('span'); v.className = 'mail-help__value'; v.textContent = shown;
      dd.appendChild(v);
      dd.appendChild(button(copyLabel, 'mail-help__btn--small', function (e) { copyText(value, e.currentTarget); }));
      // Podgląd dłuższej treści po najechaniu albo przy fokusie na przycisku kopiowania
      if (shown !== value) {
        const pv = document.createElement('div');
        pv.className = 'mail-help__preview'; pv.textContent = value;
        dd.appendChild(pv);
      }
      rows.appendChild(dt); rows.appendChild(dd);
    };
    add(ui.address, m.to, ui.copy_address, m.to);
    if (m.subject) add(ui.subject, m.subject, ui.copy_subject, m.subject);
    if (m.body) add(ui.body, ui.body_ready, ui.copy_body, m.body);
    panel.appendChild(rows);
    const actions = document.createElement('div');
    actions.className = 'mail-help__actions';
    const openApp = document.createElement('a');
    openApp.className = 'mail-help__btn mail-help__btn--primary';
    openApp.href = m.href; openApp.textContent = ui.open_app;
    openApp.setAttribute('data-mail-help', 'skip');
    openApp.addEventListener('click', close);
    actions.appendChild(openApp);
    const e = encodeURIComponent;
    actions.appendChild(link(ui.open_gmail, 'https://mail.google.com/mail/?view=cm&fs=1&to=' + e(m.to) + '&su=' + e(m.subject) + '&body=' + e(m.body)));
    actions.appendChild(link(ui.open_outlook, 'https://outlook.live.com/mail/0/deeplink/compose?to=' + e(m.to) + '&subject=' + e(m.subject) + '&body=' + e(m.body)));
    actions.appendChild(button(ui.close, 'mail-help__btn--ghost', close));
    panel.appendChild(actions);
    box.appendChild(panel);
    box.addEventListener('click', function (ev) { if (ev.target === box) close(); });
    return box;
  }

  function open(a) {
    close();
    current = parse(a.getAttribute('href'));
    lastFocus = a;
    dialog = build(current);
    document.body.appendChild(dialog);
    const first = dialog.querySelector('.mail-help__btn');
    if (first) first.focus();
  }
  function close() {
    if (!dialog) return;
    dialog.remove(); dialog = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', function (ev) {
    const a = ev.target.closest && ev.target.closest('a[href^="mailto:"]');
    if (!a || a.getAttribute('data-mail-help') === 'skip') return;
    if (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return;
    ev.preventDefault();
    open(a);
  });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && dialog) close(); });
})();
