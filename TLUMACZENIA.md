# Tłumaczenia strony i dokumentów

Strona ma trzy rodzaje tekstów i każdy tłumaczy się trochę inaczej:

1. **Napisy strony** (opowieść na stronie głównej, menu, stopka, karty dokumentów): pliki `locales/<język>.json`. Strona główna powstaje z szablonu `tools/templates/home.html`, a generator wstawia do niego napisy z pliku języka.
2. **Dokumenty** (manifest, whitepapery, statut): pliki Markdown w `content/<język>/`, z których generator tworzy strony `<język>/<plik>.html`.
3. **Podstrony** (np. Czym jest Suveria, Słownik): pliki Markdown w `content/<język>/strony/<slug>.md`, z których generator tworzy `<język>/<slug>.html`.

Językiem źródłowym jest polski (`content/pl/`, `locales/pl.json`). Tłumaczenia zaczynamy po przyjęciu manifestu i whitepaperów.

## Adresy

- Strona główna: `/` (polski) i `/en/` (angielski). Każdy język ma w HTML gotowy tekst, `hreflang` i adres kanoniczny, więc wyszukiwarki i modele widzą wszystkie wersje.
- Dokumenty i podstrony: `/pl/<plik>.html`, `/en/<plik>.html`.
- Przełącznik języka prowadzi do odpowiednika tej samej strony; wybór zapamiętuje tylko przeglądarka (`novus_lang` w `localStorage`). Strona nie przekierowuje według języka przeglądarki.

## Dodanie nowego języka (np. niemieckiego)

1. W `site.config.json` dopisz język do listy `languages`, np. `{ "code": "de", "name": "Deutsch" }`.
2. Skopiuj `locales/pl.json` do `locales/de.json` i przetłumacz **wartości**. Kluczy nie zmieniaj. W wartościach z HTML (np. `<br>`, `<span class=...>`, `<strong>`) zostaw znaczniki, tłumacz tylko tekst. Brakujący klucz generator uzupełni polskim tekstem, więc można tłumaczyć stopniowo.
3. Uruchom generator (niżej). Powstanie `de/index.html` (strona główna), `de/mapa-strony.html`, `de/llms-full.txt`, a język pojawi się w przełączniku i w `sitemap.xml`.

Angielski jest już dodany: `locales/en.json` ma przetłumaczone napisy strony. Krótkie etykiety menu i stopki są po angielsku, a teksty oznaczone `TODO-EN:` czekają na tłumacza.

## Tłumaczenie dokumentu lub podstrony

1. Skopiuj plik z `content/pl/` do `content/<język>/` **pod tą samą nazwą**, np. `content/pl/manifest.md` do `content/en/manifest.md`. Statut: `content/en/statut/statut-2026-09-28.md` itd. Podstrony: `content/en/strony/<slug>.md`.
2. Przetłumacz tekst, zachowując kilka rzeczy, od których zależą odnośniki:
   - **numery w nagłówkach**: `## 6.3. ...` tworzy kotwicę `#s6-3`, a `### § 14` kotwicę `#par-14`, takie same w każdym języku. Dzięki temu odnośnik „punkt 6.3” prowadzi w to samo miejsce w każdej wersji;
   - **etykiety przypisów**: `[^hinton]` zostaje `[^hinton]`; tłumaczysz tylko treść przypisu;
   - **odnośniki do innych dokumentów i podstron** zostają nazwami plików `.md`, np. `(whitepaper-suveria.md)` albo, z podstrony, `(../manifest.md)`. Generator sam wskaże tłumaczenie, a gdy go jeszcze nie ma, wersję polską z dopiskiem „(PL)”;
   - **spis treści** w manifeście: numerowana lista z tytułami rozdziałów zamienia się w odnośniki, jeśli tytuły są identyczne z nagłówkami `## 1. ...`;
   - **komentarze** `<!-- ... -->` generator pomija na stronie i przy porównaniach.
3. Na początku tłumaczenia warto dopisać jedno zdanie: z której wersji źródłowej powstało (data z pierwszego akapitu) i że wiążąca jest wersja polska. Dotyczy to zwłaszcza statutu.
4. Gdy tłumaczenie jest zgodne z obecnym źródłem, zapisz ślad: `node tools/i18n-sync.mjs mark content/en/manifest.md` (patrz „Aktualność tłumaczeń”).
5. Uruchom generator.

Można tłumaczyć po jednym pliku. Strona pokaże dostępne tłumaczenia, a przy pozostałych poprowadzi do wersji polskiej. Kto ma wybrany inny język, zobaczy na stronie dokumentu krótką informację, że czyta oryginał.

## Podstrony Markdown

Plik `content/<język>/strony/<slug>.md` zaczyna się blokiem metadanych między liniami `---`:

```
---
tytul: Suveria
opis: Jedno zdanie do meta description i na kartę.
grupa: suveria        # dlaczego | suveria | omniforum | fundacja | dokumenty | dolacz | skroty
kolejnosc: 1
menu: Czym jest Suveria   # etykieta w menu (opcjonalnie; domyślnie tytuł)
---
```

- `slug` to nazwa pliku (małe litery bez polskich znaków, cyfry, myślniki). Pliki zaczynające się od `_` generator pomija (robocze). Nazwy `index`, `mapa-strony` i `slownik` są zarezerwowane.
- `grupa` i `kolejnosc` bierze z pliku w języku źródłowym; `tytul`, `opis` i `menu` z każdego języka osobno.
- Jeśli tekst nie zaczyna się od nagłówka `# `, tytuł z metadanych staje się nagłówkiem strony.
- Spis treści z boku pojawia się, gdy są co najmniej trzy nagłówki `##`.
- **Mapa strony** (`<język>/mapa-strony.html`) jest generowana: pokazuje wszystkie podstrony pogrupowane według `grupa`, a strona bez grupy lub z nieznaną grupą trafia do „Inne strony”.

## Słownik pojęć

Słownik to jeden plik na język: `content/<język>/slownik.json` (źródło: `content/pl/slownik.json`). Na jego podstawie generator tworzy stronę `<język>/slownik.html` (hasła alfabetycznie, każde z kotwicą `#id`), plik `js/slownik-<język>.js` z definicjami do dymków oraz oznacza pierwsze wystąpienie każdego pojęcia na stronie (w akapitach, listach i tabelach, poza nagłówkami, odnośnikami, kodem i cytatami) odnośnikiem, który z JavaScriptem otwiera dymek z definicją (`js/gloss.js`, `gloss.css`).

Jak przetłumaczyć słownik:

1. Skopiuj `content/pl/slownik.json` do `content/en/slownik.json` (albo innego języka).
2. Zostaw bez zmian **`id`**, **`zrodlo`** (plik z kotwicą, np. `manifest.md#s3-1`) i strukturę. Kotwice rozdziałów są w każdym języku takie same, więc `zrodlo` zostaje.
3. Przetłumacz **`termin`**, **`definicja`** i **`zrodlo_opis`** (np. „manifest, punkt 1.1” na „manifesto, section 1.1”).
4. W **`warianty`** wpisz wszystkie formy, w jakich pojęcie występuje w tłumaczonych tekstach (liczba mnoga, dopełniacz, pisownia z wielką literą nie jest potrzebna: wielkość liter jest pomijana). Dłuższe formy generator dopasowuje przed krótszymi. Ta sama forma nie może należeć do dwóch haseł (generator ostrzega).
5. Pole `uwaga` jest tylko notatką dla redaktora; generator je pomija.
   Hasło z polem `"oznaczaj": false` zostaje na stronie słownika i w odnośnikach w definicjach innych haseł, ale generator nie oznacza go w treści stron (dla pospolitych słów, które mają też zwykłe znaczenie); w tłumaczeniu zachowaj to pole tak jak w oryginale.
6. Uruchom `node tools/build.mjs`. Generator wypisze „Słownik: …” z liczbą haseł i oznaczeń. Napisy samej strony i dymka (tytuł, wstęp, „Źródło:”, „Wstecz”, „Zamknij”, „Słownik”) są w `locales/<język>.json`, klucz `glossary`.

Język bez pliku `slownik.json` nie ma podpowiedzi ani własnej strony słownika; stopka i mapa strony prowadzą wtedy do słownika polskiego z dopiskiem „(PL)”. Odnośnik „Źródło” w słowniku prowadzi do tłumaczenia dokumentu, a gdy go jeszcze nie ma, do wersji polskiej z dopiskiem. Slug `slownik` jest zarezerwowany (strona generowana): nie twórz `strony/slownik.md`.

## Aktualność tłumaczeń

Gdy zmieni się tekst polski, tłumaczenie robi się starsze. Narzędzie `tools/i18n-sync.mjs` zapamiętuje skróty (SHA-1) akapitów źródła z chwili tłumaczenia:

```
node tools/i18n-sync.mjs mark content/en/manifest.md   # zapis: content/en/.sync/manifest.md.json
node tools/i18n-sync.mjs status                        # lista akapitów źródła, które zmieniły się, doszły albo zniknęły
```

Akapit to blok rozdzielony pustą linią. Generator robi to samo porównanie: gdy tłumaczenie jest starsze, wypisuje ostrzeżenie i pokazuje na stronie tłumaczenia informację (`doc.outdated` w `locales`). Pliki `.sync` zostają w repozytorium. Tłumaczenie bez śladu `.sync` generator zgłasza jako „brak śladu synchronizacji”.

## Wersje dokumentów

Każda zmiana treści manifestu albo whitepapera to nowa wersja z datą (statut ma osobny rejestr zmian w `content/<język>/statut/`). Pliki:

- `content/<język>/wersje/<dokument>/<data>.md`: zachowane poprzednie brzmienie, bez zmian;
- `content/<język>/wersje/<dokument>.json`: rejestr wersji, najnowsza pierwsza: `data`, `poprzednia`, `opis` (co i dlaczego, ten sam tekst co wpis w dzienniku zmian), a w oryginale przy najnowszej wersji `skrot` (odcisk treści).

Przy zmianie: skopiuj bieżący dokument do `wersje/<dokument>/<data poprzedniej wersji>.md`, zmień tekst i wiersz wersji, dopisz wersję do rejestru z opisem i odciskiem (generator podaje go w ostrzeżeniu), dopisz wpis w dzienniku zmian. Przekład dostaje akapit i opis. Gdy treść oryginału różni się od odcisku w rejestrze, generator ostrzega, że zmiana nie ma wersji; przy poprawce bez zmiany sensu (literówka) wystarczy nowy odcisk i wpis w dzienniku.

Z rejestru generator tworzy `<język>/<dokument>-zmiany.html` (tylko zmienione miejsca: dodane podkreślone, usunięte przekreślone, w zmienionym akapicie na poziomie słów, z opisem zmiany) i wersje historyczne `<język>/wersje/<dokument>-<data>.html`, a pod wierszem wersji w dokumencie dodaje odnośnik „Co się zmieniło od poprzedniej wersji” (`versions` w `locales`). Zachowane wersje tłumaczeń oznacz `node tools/i18n-sync.mjs mark content/<język>/wersje/<dokument>/<data>.md`.

## Generator

Wymaga Node.js w wersji 18 lub nowszej, bez dodatkowych pakietów. W folderze strony:

```
node tools/build.mjs     # buduje wszystko
node tools/check.mjs     # sprawdza odnośniki, hreflang i sitemap w wygenerowanych plikach
```

Generator:

- tworzy stronę główną z `tools/templates/home.html` dla każdego języka (`index.html` i `<język>/index.html`);
- tworzy strony dokumentów i podstron w `pl/`, `en/` i każdym innym języku, który ma pliki w `content/`, oraz `<język>/mapa-strony.html`;
- uzupełnia `js/site-config.js` (języki, dokumenty, podstrony, tytuły i dostępne tłumaczenia);
- tworzy `sitemap.xml` (z `hreflang`), `robots.txt`, `llms.txt` (opis fundacji z `meta.description` i lista tekstów z odnośnikami do HTML i surowego Markdown), `llms-full.txt` oraz `<język>/llms-full.txt` (manifest i cztery whitepapery w jednym pliku Markdown; brakujące tłumaczenie zastępuje zdanie z `llms.only_source`);
- wypisuje uwagi: brakujące przypisy, odnośniki do nieznanych plików, nieaktualne tłumaczenia, brakujące klucze `locales` w szablonie.

Adres serwisu (`baseUrl`) jest w `site.config.json`. Po każdej zmianie w `content/`, `locales/` lub szablonie uruchom generator ponownie. Wygenerowanych plików (`index.html`, `pl/`, `en/`, `sitemap.xml`, `llms*.txt`) nie poprawiaj ręcznie: następne uruchomienie je nadpisze. Teksty strony głównej zmieniaj w `locales/*.json`, a układ w `tools/templates/home.html`.
