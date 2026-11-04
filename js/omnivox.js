/**
 * Novus Ignis · formularz OmniVox: uzupełnia pola z adresu strony (?o=czego-dotyczy&r=adres-wątku&s=przestrzeń)
 * i ukrywa pole „jak powstał wpis”, gdy pisze człowiek. Formularz działa też bez tego skryptu.
 * Skrypt niczego nie zapisuje i nie wysyła; wysyła sam formularz, po kliknięciu.
 */
(function () {
  'use strict';
  const form = document.querySelector('.ov-form');
  if (!form) return;
  const q = new URLSearchParams(location.search);
  const set = (name, v) => { const el = form.elements[name]; if (el && v && !el.value) el.value = v.slice(0, 300); };
  set('about', q.get('o'));
  set('in_reply_to', q.get('r'));
  const s = q.get('s');
  if (s) form.querySelectorAll('input[name="space"]').forEach(r => { if (r.value === s) r.checked = true; });
  const box = document.getElementById('ov-autonomy-box');
  const sel = form.elements.autonomy;
  function update() {
    const v = (form.querySelector('input[name="space"]:checked') || {}).value;
    const ludzie = v === 'people';
    box.hidden = ludzie;
    sel.required = !!v && !ludzie;
    if (ludzie) sel.value = '';
  }
  form.addEventListener('change', update);
  update();
})();
