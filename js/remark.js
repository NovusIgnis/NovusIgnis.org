/**
 * Novus Ignis · uwagi do dokumentów.
 * Po zaznaczeniu fragmentu tekstu pokazujemy przycisk, który przygotowuje wiadomość e-mail
 * z cytatem i odnośnikiem do miejsca w dokumencie. Przy tytule każdej części jest też
 * odnośnik „uwaga” (dla klawiatury i czytników ekranu). Strona niczego nie zapisuje
 * ani nie wysyła: wiadomość wysyła czytelnik ze swojego programu pocztowego.
 */
(function () {
  'use strict';
  const site = window.NI_SITE;
  // Dokumenty i podstrony: <main id="tresc">. Strona główna: sekcje po opowieści oznaczone data-remark-root.
  const article = document.getElementById('tresc');
  const main = article || document.querySelector('[data-remark-root]');
  if (!site || !main || !site.mail) return;
  const lang = document.body.getAttribute('data-lang') || site.sourceLang;
  const src = (site.ui[site.sourceLang] || {}).remark || {};
  const own = (site.ui[lang] || {}).remark || {};
  const ui = Object.assign({}, src, own);
  if (!ui.button) return;
  // Strona w języku innym niż oryginał: osobno uwaga do treści i uwaga do tłumaczenia.
  const translated = lang !== site.sourceLang;

  const MAX_QUOTE = 300;     // dłuższy cytat skracamy, żeby adres mailto zmieścił się w programach pocztowych
  const MAX_MAILTO = 1900;

  const canonical = document.querySelector('link[rel="canonical"]');
  const pageUrl = canonical ? canonical.href.split('#')[0] : location.origin + location.pathname;

  function headingText(h) {
    if (!/^H[1-6]$/.test(h.tagName)) { const inner = h.querySelector('h1, h2, h3, h4'); if (!inner) return ''; h = inner; }
    const c = h.cloneNode(true);
    c.querySelectorAll('.doc-anchor, .doc-remark-section').forEach(function (x) { x.remove(); });
    return c.textContent.replace(/\s+/g, ' ').trim();
  }
  const h1 = main.querySelector('h1');
  const docTitle = h1 ? headingText(h1) : document.title;
  const heads = article
    ? Array.prototype.slice.call(main.querySelectorAll('h2[id], h3[id], h4[id]'))
    : [main].concat(Array.prototype.slice.call(main.querySelectorAll('[data-remark-section]')));

  // Część dokumentu, w której leży węzeł: ostatni nagłówek przed nim.
  function sectionFor(node) {
    let found = null;
    for (let i = 0; i < heads.length; i++) {
      const h = heads[i];
      if (h === node || h.contains(node) || (h.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING)) found = h;
      else break;
    }
    return found;
  }

  function compose(quote, section, maxQuote, kind) {
    const where = section ? headingText(section) : '';
    const tl = kind === 'tlumaczenie';
    const subject = (tl ? ui.translation_subject + ' [' + lang + ']' : ui.subject) + ' ' + docTitle + (where ? ' · ' + where : '');
    let q = (quote || '').replace(/\s+/g, ' ').trim();
    if (q.length > maxQuote) q = q.slice(0, maxQuote).replace(/\s+\S*$/, '') + '…';
    const parts = [];
    if (q) parts.push(ui.quote + '\n„' + q + '”');
    parts.push(ui.place + ' ' + pageUrl + (section ? '#' + section.id : ''));
    if (tl) parts.push(ui.original + ' ' + pageUrl.replace('/' + lang + '/', '/' + site.sourceLang + '/') + (section ? '#' + section.id : ''));
    parts.push(ui.prompt + '\n');
    return { subject: subject, body: parts.join('\n\n') };
  }
  function mailto(m) {
    return 'mailto:' + site.mail + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body);
  }
  // Polskie znaki rozrastają się w adresie kilkukrotnie, więc w razie potrzeby skracamy cytat dalej.
  function fit(quote, section, kind) {
    let n = MAX_QUOTE, m = compose(quote, section, n, kind);
    while (mailto(m).length > MAX_MAILTO && n > 40) { n -= 40; m = compose(quote, section, n, kind); }
    return m;
  }

  // Podpowiedź pod tytułem dokumentu.
  if (h1 && ui.hint) {
    const hint = document.createElement('p');
    hint.className = 'doc-remark-hint';
    hint.appendChild(document.createTextNode(ui.hint + ' '));
    const a = document.createElement('a');
    a.href = 'mailto:' + site.mail;
    a.textContent = site.mail;
    hint.appendChild(a);
    hint.appendChild(document.createTextNode('.'));
    h1.insertAdjacentElement('afterend', hint);
  }

  // Odnośnik „uwaga” przy tytułach części.
  if (article) heads.forEach(function (h) {
    if (h.tagName === 'H4') return;
    const a = document.createElement('a');
    a.className = 'doc-remark-section';
    a.href = mailto(compose('', h, 0));
    a.textContent = ui.section;
    a.setAttribute('aria-label', ui.section_label + ' ' + headingText(h));
    h.appendChild(a);
  });

  // Przycisk przy zaznaczonym fragmencie.
  const pop = document.createElement('div');
  pop.className = 'doc-remark-pop';
  pop.hidden = true;
  const send = document.createElement('a');
  send.className = 'doc-remark-pop__send';
  send.textContent = translated ? (ui.content_button || ui.button) : ui.button;
  const sendTl = document.createElement('a');
  sendTl.className = 'doc-remark-pop__send doc-remark-pop__send--tl';
  sendTl.textContent = ui.translation_button || '';
  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = 'doc-remark-pop__copy';
  copy.textContent = ui.copy;
  pop.appendChild(send);
  if (translated && ui.translation_button) pop.appendChild(sendTl);
  pop.appendChild(copy);
  document.body.appendChild(pop);
  // Kliknięcie w przycisk nie może zgubić zaznaczenia.
  pop.addEventListener('mousedown', function (e) { e.preventDefault(); });

  let current = null, lastText = '';
  function hide() { pop.hidden = true; current = null; lastText = ''; }
  function update() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { hide(); return; }
    const range = sel.getRangeAt(0);
    if (!main.contains(range.commonAncestorContainer)) { hide(); return; }
    const text = sel.toString();
    if (text.replace(/\s+/g, '').length < 3) { hide(); return; }
    current = fit(text, sectionFor(range.startContainer));
    send.href = mailto(current);
    if (translated) sendTl.href = mailto(fit(text, sectionFor(range.startContainer), 'tlumaczenie'));
    if (text !== lastText) copy.textContent = ui.copy;
    lastText = text;
    const rect = range.getBoundingClientRect();
    pop.hidden = false;
    const w = pop.offsetWidth;
    const left = Math.max(8, Math.min(window.innerWidth - w - 8, rect.left + rect.width / 2 - w / 2));
    pop.style.left = (left + window.scrollX) + 'px';
    pop.style.top = (rect.bottom + window.scrollY + 10) + 'px';
  }
  let timer = null;
  document.addEventListener('selectionchange', function () {
    clearTimeout(timer);
    timer = setTimeout(update, 250);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });

  copy.addEventListener('click', function () {
    if (!current) return;
    const text = site.mail + '\n' + current.subject + '\n\n' + current.body;
    function done() { copy.textContent = ui.copied; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  });
  // Zapasowe kopiowanie przez ukryte pole; potem przywracamy zaznaczenie czytelnika.
  function fallbackCopy(text) {
    const sel = window.getSelection();
    const saved = sel && sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* brak dostępu do schowka */ }
    ta.remove();
    if (saved) { sel.removeAllRanges(); sel.addRange(saved); }
  }
})();
