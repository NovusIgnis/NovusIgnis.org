# Biblioteki zewnętrzne

Strona główna używa biblioteki animacji **GSAP 3.12.5** z wtyczką **ScrollTrigger**.

Żeby odwiedzający nie łączyli się z cudzym serwerem, wgraj tu dwa pliki:

- `gsap.min.js`: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
- `ScrollTrigger.min.js`: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js

Wystarczy otworzyć oba adresy w przeglądarce i zapisać je w tym folderze pod tymi nazwami.

Dopóki plików tu nie ma, strona sama pobiera je z cdnjs (Cloudflare), więc działa tak jak wcześniej.

## Stan (31.10.2026)

Oba pliki są już w tym folderze. Pobrane 30.10.2026 z cdnjs i porównane z niezależną kopią z jsDelivr (paczka npm `gsap@3.12.5`): pliki są identyczne, a skróty zgadzają się z sumami SRI podawanymi przez cdnjs.

| Plik | Rozmiar | SHA-256 |
|---|---:|---|
| `gsap.min.js` | 72 214 B | `28033e449a31ebcc396e5be8b13b63152bf03094288fb5867034321927bce087` |
| `ScrollTrigger.min.js` | 43 380 B | `ad33c2df9ada8a663c2147357828f980d0b7ca731ef33eb3c6e4f327c3b2cda5` |

Licencja: GSAP Standard License (https://gsap.com/standard-license), nagłówek licencji w plikach zostaje bez zmian.
