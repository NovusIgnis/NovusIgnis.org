/**
 * Novus Ignis · porównanie z innym językiem.
 * Na stronie dokumentu albo podstrony można wybrać drugi język; pod każdym akapitem pokazujemy
 * jego odpowiednik z tej samej strony w wybranym języku. Akapity łączymy w obrębie części
 * o tym samym identyfikatorze nagłówka (identyfikatory są takie same we wszystkich językach).
 * Gdy liczba akapitów w części się nie zgadza, pokazujemy całą część w drugim języku na jej końcu.
 * Strona niczego nie zapisuje; wybór obowiązuje do przeładowania strony.
 */
(function () {
  'use strict';
  const site = window.NI_SITE;
  const box = document.getElementById('docCompare');
  const main = document.getElementById('tresc');
  if (!site || !box || !main) return;
  const body = document.body;
  const lang = body.getAttribute('data-lang') || site.sourceLang;
  const ui = Object.assign({}, (site.ui[site.sourceLang] || {}).compare || {}, (site.ui[lang] || {}).compare || {});
  if (!ui.label) return;
  const docId = body.getAttribute('data-doc');
  const pageId = body.getAttribute('data-page');
  const entry = docId ? (site.docs || {})[docId] : (pageId ? (site.pages || {})[pageId] : null);
  if (!entry || !entry.langs) return;
  const others = site.languages.filter(function (l) { return l.code !== lang && entry.langs.indexOf(l.code) >= 0; });
  if (!others.length) return;

  // Domyślny wybór: na stronie przetłumaczonej oryginał (wersja wiążąca), na oryginale angielski.
  const preferred = lang === site.sourceLang ? 'en' : site.sourceLang;
  const select = document.createElement('select');
  select.id = 'docCompareLang';
  others.forEach(function (l) {
    const o = document.createElement('option');
    o.value = l.code; o.textContent = l.name + (l.code === site.sourceLang ? ' · ' + (ui.original || '') : '');
    if (l.code === preferred) o.selected = true;
    select.appendChild(o);
  });
  const label = document.createElement('label');
  label.setAttribute('for', 'docCompareLang');
  label.textContent = ui.label;
  const go = document.createElement('button');
  go.type = 'button'; go.className = 'doc-compare__go'; go.textContent = ui.show;
  const status = document.createElement('span');
  status.className = 'doc-compare__status'; status.setAttribute('aria-live', 'polite');
  box.appendChild(label); box.appendChild(select); box.appendChild(go); box.appendChild(status);
  box.hidden = false;

  let shown = null;
  // Bloki treści: akapity, listy, tabele, cytaty, nagłówki części (bez dodatków strony).
  function blocks(root) {
    const out = [];
    Array.prototype.forEach.call(root.children, function (el) {
      if (el.matches('.doc-compare-block, .doc-remark-hint, .doc-meta, script')) return;
      out.push(el);
    });
    return out;
  }
  // Podział na części według nagłówków h2/h3 (przed pierwszym: „wstęp”), w kolejności.
  function sections(root) {
    const out = [{ key: '_wstep', list: [] }];
    blocks(root).forEach(function (el) {
      if (/^H[23]$/.test(el.tagName)) { out.push({ key: el.id || '', list: [] }); return; }
      if (/^H[1-6]$/.test(el.tagName)) return;
      out[out.length - 1].list.push(el);
    });
    return out;
  }
  function clear() {
    main.querySelectorAll('.doc-compare-block').forEach(function (x) { x.remove(); });
    shown = null;
  }
  function makeBlock(src, code, whole) {
    const d = document.createElement('div');
    d.className = 'doc-compare-block' + (whole ? ' doc-compare-block--whole' : '');
    d.setAttribute('lang', code);
    const tag = document.createElement('span');
    tag.className = 'doc-compare-block__lang'; tag.textContent = code.toUpperCase();
    d.appendChild(tag);
    (Array.isArray(src) ? src : [src]).forEach(function (el) {
      const c = el.cloneNode(true);
      c.querySelectorAll('[id]').forEach(function (x) { x.removeAttribute('id'); });
      c.removeAttribute('id');
      d.appendChild(c);
    });
    return d;
  }
  function show(code) {
    const href = location.pathname.replace(new RegExp('/' + lang + '/'), '/' + code + '/');
    status.textContent = ui.loading || '';
    fetch(href).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (html) {
      const other = new DOMParser().parseFromString(html, 'text/html').getElementById('tresc');
      if (!other) throw new Error('brak treści');
      clear();
      const mine = sections(main), theirs = sections(other);
      // Części łączymy po kolei, gdy jest ich tyle samo (podstrony mają nagłówki w danym języku);
      // inaczej po identyfikatorze nagłówka (dokumenty mają te same identyfikatory s1, s2-3…).
      const byKey = new Map(theirs.map(function (x) { return [x.key, x.list]; }));
      mine.forEach(function (sec, i) {
        const list = sec.list;
        const match = mine.length === theirs.length ? theirs[i].list : byKey.get(sec.key);
        if (!match || !match.length || !list.length) return;
        if (match.length === list.length) {
          list.forEach(function (el, i) { el.insertAdjacentElement('afterend', makeBlock(match[i], code, false)); });
        } else {
          list[list.length - 1].insertAdjacentElement('afterend', makeBlock(match, code, true));
        }
      });
      shown = code;
      go.textContent = ui.hide;
      status.textContent = '';
    }).catch(function () { status.textContent = ui.error || ''; });
  }
  go.addEventListener('click', function () {
    if (shown) { clear(); go.textContent = ui.show; return; }
    show(select.value);
  });
  select.addEventListener('change', function () { if (shown) show(select.value); });
})();
