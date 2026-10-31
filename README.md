# novusignis.org · wersja na 31.10.2026

Przygotowana 30.10.2026 na podstawie wersji z 4.09.2026 i tekstów z folderu `Treści`.

## Co jest w środku

| Ścieżka | Co to jest |
|---|---|
| `index.html`, `en/index.html`, `script.js`, `style.css` | strona główna z opowieścią o Prometeuszu (**wygenerowana** z `tools/templates/home.html` i `locales/`) |
| `locales/pl.json`, `locales/en.json` | wszystkie napisy strony głównej, menu i stopki |
| `content/pl/` | manifest, cztery whitepapery i statut: kopie plików z `Treści` (źródło stron dokumentów); podstrony w `content/<język>/strony/` |
| `pl/` | strony dokumentów **wygenerowane** z `content/pl/` (nie poprawiaj ręcznie) |
| `js/layout.js` | wspólny nagłówek i stopka dla wszystkich stron |
| `js/site-config.js` | lista języków i dokumentów (**wygenerowana**) |
| `js/doc.js`, `js/remark.js` | informacja o języku i przycisk „Mam uwagę” (`components.js` i `i18n.js` nie są już ładowane) |
| `docs.css` | wygląd stron dokumentów |
| `gloss.css`, `js/gloss.js`, `js/slownik-<język>.js` | słownik pojęć: wygląd, podpowiedzi przy pojęciach i definicje (plik `slownik-*.js` jest **wygenerowany** z `content/<język>/slownik.json`) |
| `fonts/` | czcionki Inter i Poppins na naszym serwerze, licencja w `fonts/OFL.txt` |
| `vendor/` | miejsce na bibliotekę GSAP (instrukcja w `vendor/README.md`) |
| `tools/build.mjs` | generator: strona główna, dokumenty, podstrony, mapa strony, `sitemap.xml`, `robots.txt`, `llms*.txt` |
| `tools/i18n-sync.mjs`, `tools/check.mjs` | aktualność tłumaczeń; kontrola odnośników i `hreflang` |
| `tools/serve.mjs` | podgląd strony na komputerze |
| `site.config.json` | języki i lista dokumentów |
| `TLUMACZENIA.md` | jak dodać język i przetłumaczyć dokument |

## Menu i stopka

Menu (Dlaczego · Suveria · Omniforum · Fundacja · Dokumenty · Dołącz) tworzy `js/layout.js` z metadanych podstron (`grupa`, `kolejnosc`, `menu` w nagłówku pliku w `content/<język>/strony/`). Pozycja główna prowadzi do podstrony o slugu równym kluczowi grupy (np. `suveria.md`), a rozwijana lista pokazuje pozostałe podstrony grupy. Stopka ma kolumnę „Na skróty” (W skrócie, Dziennik zmian, Słownik, Mapa strony) z podstronami o slugach `w-skrocie`, `dziennik-zmian`, `slownik`; pokazuje je tylko wtedy, gdy istnieją.

## Po zmianie tekstu w Treści

1. Skopiuj zmieniony plik z `Treści` do `content/pl/` (statut do `content/pl/statut/`).
2. Uruchom `node tools/build.mjs` w tym folderze.
3. Wgraj na serwer cały folder (zmieniają się `pl/`, `en/`, `index.html`, `js/site-config.js`, `sitemap.xml`, `llms*.txt`).

## Podgląd na komputerze

Odnośniki między stronami są adresami katalogów (np. `/en/`), więc strona nie zadziała po dwukrotnym kliknięciu w `index.html`. W tym folderze uruchom `node tools/serve.mjs` i otwórz http://localhost:8000 (Ctrl+C kończy podgląd).

## Co wgrać na hosting

Cały folder. Foldery `content/` i `tools/` nie są potrzebne do działania strony, ale nie szkodzą: to jawne źródła tekstów.

## Co zmieniło się względem wersji z 4.09

- Opowieść o Prometeuszu i wszystkie grafiki zostały. Poprawione napisy:
  - cytat „Historia się nie powtarza…” jest teraz przypisywany Twainowi, a nie podpisany jego nazwiskiem;
  - „era korporacji” zamieniona na „Potem przyszły platformy, które zarabiają na naszym czasie”;
  - „Potrzebujemy liczb” zamienione na „Potrzeba nas wielu”;
  - bez długich myślników.
- Część po opowieści jest napisana na podstawie manifestu:
  - godność w prawie bez niesprawdzonej liczby konstytucji;
  - trzy filary zgodne z manifestem (Filar I zaczynamy, II i III to kierunek po trzech warunkach z §6.3);
  - Suveria słowami manifestu, bez obietnicy „1 USD” i „gwarantowanej amnezji”.
- Nowa sekcja z kartami dokumentów: manifest, cztery whitepapery i statut, z własnymi stronami, spisem treści i przypisami.
- Uwagi do dokumentów (`js/remark.js`, dodane 30.10 po południu): po zaznaczeniu fragmentu pojawia się przycisk „Mam uwagę”, który otwiera wiadomość do salve@novusignis.org z cytatem i odnośnikiem do tego miejsca, oraz „Kopiuj treść”, gdy nie ma programu pocztowego. Przy tytułach części jest odnośnik „uwaga” (widoczny po najechaniu, na telefonie zawsze). Strona niczego nie zapisuje ani nie wysyła. Napisy w `locales/*.json` (`doc.remark`), adres w `js/site-config.js` (`mail`).
- „Dołącz”: obszary współpracy z manifestu (§9). Kliknięcie otwiera wiadomość do salve@novusignis.org z tematem `[Dołącz] …`. Usunięty formularz listy oczekujących: nie wysyłał adresu, a pokazywał losowy „dowód”.
- Menu: Historia, Manifest, Whitepapery, Statut, Dołącz. Na telefonie przycisk menu (wcześniej linki znikały).
- Stopka z danymi fundacji (KRS, NIP), licencją manifestu i informacją o braku plików cookie. Bez „non-profit”.
- Czcionki z naszego serwera zamiast Google Fonts:
  - Inter jak wcześniej;
  - Poppins zamiast Outfit w nagłówkach;
  - zamiast JetBrains Mono systemowa czcionka o stałej szerokości.
- Poprawione drobne błędy stylów: brakujące zmienne kolorów, brak marginesów bocznych sekcji.
- Stare podstrony nie są częścią tej wersji: Dlaczego, Bezpieczeństwo, Ekonomia, Zarządzanie, Rynek danych, Omniforum, Dołącz. Zostały w folderze `novusignis.org` do przepisania na podstawie whitepaperów.
