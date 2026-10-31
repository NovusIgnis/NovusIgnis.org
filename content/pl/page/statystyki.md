---
tytul: Statystyki strony
opis: Ile razy czytane są nasza strona i dokumenty, policzone zbiorczo z dzienników serwera, bez skryptów analitycznych i bez plików cookie
grupa: skroty
kolejnosc: 11
menu: Statystyki strony
---
# Statystyki strony

Chcemy wiedzieć, jak zmienia się zainteresowanie fundacją i które teksty są czytane najczęściej, i chcemy to pokazywać otwarcie. Liczymy to w najprostszy sposób: z dzienników serwera, który i tak zapisuje każde pobranie strony. Na stronie nie ma skryptów analitycznych, plików cookie ani niczego, co rozpoznawałoby Cię przy kolejnej wizycie.

**Stan na 31 października 2026 r.** Strona przechodzi na pakiet hostingu, który udostępnia dzienniki serwera. Statystyki zaczynamy liczyć od listopada 2026 r.; zasady poniżej obowiązują od pierwszego policzonego miesiąca.

## Co liczymy

- **Odsłony stron:** ile razy pobrano każdą stronę i każdy dokument, osobno po polsku i po angielsku.
- **Pobrania plików:** na przykład `llms-full.txt`, czyli manifestu i whitepaperów w jednym pliku.
- **Wejścia robotów** w czterech grupach: wyszukiwarki; roboty firm, które budują modele cyfrowej inteligencji; modele czytające stronę na prośbę człowieka, na przykład gdy ktoś poprosi swój czat o przeczytanie manifestu; inne roboty.
- **Pliki dla modeli:** ile razy roboty modeli pobrały `llms.txt` i `llms-full.txt`.

## Czego nie zapisujemy

- Adresów IP, pełnych opisów przeglądarek ani niczego innego, co pozwala rozpoznać pojedynczą osobę.
- Historii wejść jednej osoby: nie łączymy odsłon w wizyty ani w profile.
- Danych z innych stron i usług.

Dlatego nie wiemy, ile osób nas odwiedziło, tylko ile razy pobrano strony. Jedna osoba może otworzyć stronę kilka razy, a część robotów podaje się za zwykłe przeglądarki, więc liczby są przybliżone.

## Jak liczymy

Co tydzień pobieramy dziennik serwera z panelu firmy Infomaniak, która utrzymuje stronę, bo dzienniki są tam przechowywane tylko przez kilka dni. Na koniec miesiąca skrypt `tools/statystyki.mjs` liczy z nich tylko sumy wymienione wyżej i zapisuje je bez adresów IP i opisów przeglądarek. Pobrane kopie dzienników trzymamy najwyżej do końca miesiąca i usuwamy zaraz po policzeniu. Zasady przetwarzania danych opisuje strona [Twoje dane](twoje-dane.md).

## Wyniki

{{statystyki}}
