/**
 * Novus Ignis · OmniActa: filtry listy zdarzeń (rodzaje, kamienie milowe, grupa spraw albo jedna sprawa).
 * Lista z pełną treścią powstaje w generatorze i działa bez tego skryptu; tu tylko ukrywamy to, czego nie wybrano,
 * i zapamiętujemy wybór w adresie (#grupa-…, #sprawa-…), żeby dało się go przesłać. #z-<id> otwiera zdarzenie.
 * Strona niczego nie zapisuje i nie wysyła.
 */
(function () {
  'use strict';
  const box = document.querySelector('.acta-filters');
  const items = Array.from(document.querySelectorAll('.acta-item'));
  if (!box || !items.length) return;
  box.hidden = false;
  const notes = Array.from(document.querySelectorAll('.acta-list .acta-note'));
  const shown = box.querySelector('.acta-shown span');
  const clearBtn = box.querySelector('.acta-clear');
  const types = new Set();
  let mile = false, sel = null; // sel: { k: 'g' | 's', id, g }

  const has = (list, id) => (list || '').split(' ').includes(id);
  function apply(updateHash) {
    let n = 0;
    items.forEach(li => {
      const ok = (!types.size || types.has(li.dataset.typ)) && (!mile || li.dataset.m === '1') &&
        (!sel || (sel.k === 'g' ? has(li.dataset.g, sel.id) : has(li.dataset.s, sel.id)));
      li.hidden = !ok;
      if (ok) n++;
    });
    const active = types.size || mile || sel;
    notes.forEach(x => { x.hidden = !!active; });
    box.querySelectorAll('[data-typ]').forEach(b => b.setAttribute('aria-pressed', String(types.has(b.dataset.typ))));
    box.querySelectorAll('[data-m]').forEach(b => b.setAttribute('aria-pressed', String(mile)));
    const openG = sel ? (sel.k === 'g' ? sel.id : sel.g) : null;
    box.querySelectorAll('.acta-gbtn').forEach(b => {
      b.setAttribute('aria-pressed', String(!!sel && sel.k === 'g' && sel.id === b.dataset.g));
      b.setAttribute('aria-expanded', String(b.dataset.g === openG));
      const sub = b.parentElement.querySelector('.acta-sub');
      if (sub) sub.hidden = b.dataset.g !== openG;
    });
    box.querySelectorAll('.acta-sbtn').forEach(b => {
      const on = !!sel && sel.k === 's' && sel.id === b.dataset.s;
      b.setAttribute('aria-pressed', String(on));
      const d = b.parentElement.querySelector('.acta-sdesc');
      if (d) d.hidden = !on;
    });
    shown.textContent = shown.dataset.tpl.replace('{n}', n).replace('{z}', shown.dataset.z);
    clearBtn.hidden = !active;
    if (updateHash) {
      const h = sel ? (sel.k === 'g' ? '#grupa-' : '#sprawa-') + sel.id : '';
      if (location.hash !== h && !(h === '' && !location.hash)) history.replaceState(null, '', h || location.pathname + location.search);
    }
  }

  function openEvent(id) {
    const li = document.getElementById('z-' + id);
    if (!li) return;
    if (li.hidden) { types.clear(); mile = false; sel = null; apply(false); }
    const d = li.querySelector('details');
    if (d) d.open = true;
    li.scrollIntoView({ block: 'start' });
  }

  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith('z-')) { openEvent(h.slice(2)); return; }
    sel = null;
    if (h.startsWith('grupa-') && box.querySelector('.acta-gbtn[data-g="' + CSS.escape(h.slice(6)) + '"]')) sel = { k: 'g', id: h.slice(6) };
    const sb = h.startsWith('sprawa-') && box.querySelector('.acta-sbtn[data-s="' + CSS.escape(h.slice(7)) + '"]');
    if (sb) sel = { k: 's', id: sb.dataset.s, g: sb.dataset.g };
    apply(false);
  }

  box.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.classList.contains('acta-clear')) { types.clear(); mile = false; sel = null; }
    else if (b.dataset.typ) { types.has(b.dataset.typ) ? types.delete(b.dataset.typ) : types.add(b.dataset.typ); }
    else if (b.dataset.m) { mile = !mile; }
    else if (b.classList.contains('acta-gbtn')) { sel = sel && sel.k === 'g' && sel.id === b.dataset.g ? null : { k: 'g', id: b.dataset.g }; }
    else if (b.classList.contains('acta-sbtn')) { sel = sel && sel.k === 's' && sel.id === b.dataset.s ? { k: 'g', id: b.dataset.g } : { k: 's', id: b.dataset.s, g: b.dataset.g }; }
    else return;
    apply(true);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && (types.size || mile || sel)) { types.clear(); mile = false; sel = null; apply(true); } });
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
