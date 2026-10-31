---
tytul: Ile kosztuje Suveria
opis: Za co ma się płacić w Suverii, ile wychodzi z rachunku z datą i dlaczego to szacunek, a nie cennik
grupa: suveria
kolejnosc: 3
menu: Ile to kosztuje
---
# Ile kosztuje Suveria

Ta strona jest o Twoich pieniądzach: za co w Suverii ma się płacić, jak powstaje rachunek i ile wychodzi z naszych obliczeń. Suveria jest dziś projektem. Usługi jeszcze nie ma, więc nie ma też żadnej ceny. Liczby poniżej pochodzą z rachunku z datą 29 października 2026 r. (poza wierszem „Razem”, który sami zsumowaliśmy). To rachunek na papierze, nie cennik.

Więcej: [whitepaper Suverii, rozdział 8](../whitepaper-suveria.md#s8).

## Za co płacisz

Zasada jest prosta: płacisz za to, czego rzeczywiście używasz, razem z uczciwie wyliczoną częścią kosztów wspólnych (tych, których nie da się przypisać jednej osobie, na przykład bezpieczeństwa czy księgowości), widzisz, za co płacisz, i to Ty ustalasz granicę swoich wydatków. Opłata pokrywa koszty i nic więcej. Wszystko ponad to jest dobrowolną darowizną, pokazywaną osobno.

Rachunek ma dwie części:

- **rzeczywiste użycie** w danym cyklu: obliczenia, pamięć, transfer danych;
- **jawnie przypisana część kosztów stałych**, które utrzymują infrastrukturę w gotowości: bezpieczeństwo, płatności, księgowość, obsługa, zużycie i wymiana sprzętu.

Koszty wspólne chcemy dzielić według jawnej reguły wybranej w pilotażu: proporcjonalnie do użycia albo po równo między aktywne konta. Szacunkowy koszt zadania ma być zawsze do sprawdzenia, a Twój udział w kosztach wspólnych będziemy ogłaszać przed cyklem rozliczeń i zawsze mieści się on w Twoim limicie. Każdą zmianę ceny będziemy ogłaszać z przyczyną i wpływem na użytkowników.

Więcej: [whitepaper zasad fundacji, rozdział 3](../whitepaper-zasady-fundacji.md#s3) i [punkt 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifest, punkt 6.1](../manifest.md#s6-1).

## Ile wychodzi z rachunku

Do obliczeń przyjęliśmy przykładowego użytkownika: 20 pytań dziennie, każda odpowiedź o długości ok. 600 tokenów (token to kawałek tekstu, mniej więcej krótkie słowo), codziennie przez 30 dni. To model obciążenia do próby, nie prognoza. Ceny pochodzą z jawnych cenników, bez podatków.

Pierwsze wydanie najpewniej skorzysta z poufnego API (jeśli zbierzemy dość środków, może od razu działać na wynajętych własnych serwerach): model cyfrowej inteligencji działa u zewnętrznego dostawcy, który deklaruje, że nie czyta treści rozmów, a my tę deklarację będziemy sprawdzać. Do tego dochodzi prywatne środowisko: jedna lub dwie poufne maszyny z bramą, pamięcią i plikami użytkowników. Ten koszt jest stały, więc przy małej grupie waży najwięcej.

| Na osobę miesięcznie, gdyby z Suverii korzystało (rachunek z 29.10.2026) | 30 osób | 100 osób | 1000 osób |
| --- | --- | --- | --- |
| Same obliczenia w poufnym API | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Koszt stały prywatnego środowiska (170–340 USD miesięcznie) | ok. 6–11 USD | ok. 1,70–3,40 USD | kilkadziesiąt centów |

To szacunek na papierze: nie zawiera pracy ludzi, przeglądów bezpieczeństwa, płatności ani zapasu na awarie, a czy taka wielkość maszyn wystarczy, sprawdzimy w pilotażu. Koszt stały chcemy pokazywać osobno i pokrywać z budżetu wsparcia pilotażu, na przykład z darowizn przeznaczonych na Suverię. Nie zakładamy, że takie środki już mamy.

Więcej: [whitepaper Suverii, rozdział 7](../whitepaper-suveria.md#s7) i [punkt 8.1](../whitepaper-suveria.md#s8-1); [whitepaper zasad fundacji, punkt 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Od 30 osób do całej ludzkości

Ten sam przykładowy użytkownik pozwala policzyć, ile pracy miałby model przy różnej liczbie osób. W tabeli „szczyt” to najbardziej obciążona godzina doby, gdy z Suverii korzystają ludzie z różnych stref czasowych (ok. 1,51 × średniej).

| Aktywne osoby | Pytania w miesiącu | Tekst odpowiedzi w szczycie |
| --- | ---: | ---: |
| 30 | 18 000 | 6,3 tokena na sekundę |
| 100 | 60 000 | 20,9 tokena na sekundę |
| 1000 | 600 000 | 209 tokenów na sekundę |
| 100 tys. | 60 mln | 20 921 tokenów na sekundę |
| 1 mln | 600 mln | 209 208 tokenów na sekundę |
| 1 mld | 600 mld | 209,2 mln tokenów na sekundę |
| 10 mld | 6 bln | 2,09 mld tokenów na sekundę |

Ile to sprzętu? Whitepaper przeprowadza eksperyment myślowy. Gdyby każda z 10 mld osób korzystała z Suverii w ten sposób, przy wydajności zmierzonej dla modelu DeepSeek-V4.1-Flash potrzeba by ok. 2,25 mln kart B200 i ok. 4 GW mocy. Dla miliarda osób to ok. 225 tys. kart i 0,4 GW, a dla miliona ok. 225 kart. Dla porównania Epoch AI szacował na początku 2026 r., że na świecie pracuje dla cyfrowej inteligencji ponad 15 mln odpowiedników kart H100, które potrzebują ponad 10 GW mocy. To uproszczenie: przykładowy użytkownik jest oszczędny, a intensywna praca, większe modele i obrazy potrzebują wielokrotnie więcej.

Kosztu na osobę dla milionów ludzi nie podajemy: przy takiej skali zmieniłyby się sprzęt, ceny i sposób utrzymania usługi, więc taka liczba byłaby zgadywaniem. Rachunek z 29.10.2026 mówi tylko, że w naszych założeniach własna infrastruktura może stać się tańsza od poufnego API przy kilkunastu do kilkudziesięciu tysiącach aktywnych osób.

Więcej: [whitepaper Suverii, rozdział 7](../whitepaper-suveria.md#s7).

## Dlaczego liczymy w dolarach

Ceny usług będziemy podawać w dolarach, bo w tej walucie kupuje się moc obliczeniową. Wpłaty chcemy przyjmować także w innych walutach, po kursie pokazanym na rachunku. Księgi fundacji prowadzimy w złotych.

Więcej: [whitepaper zasad fundacji, punkt 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Przedpłata, zwrot, zaokrąglenie

- **Przedpłata.** Wpisujesz jedną kwotę i dokładnie tyle trafia na Twoje saldo, niezależnie od sposobu płatności. Przedpłaty mają leżeć na osobnym rachunku bankowym; nie pokrywamy z nich kosztów fundacji przed wykonaniem usługi.
- **Limit.** Przy wpłacie ustalasz, ile najwyżej chcesz wydać. Limit ma działać jak granica, a nie ostrzeżenie po fakcie. To wymaganie do zbudowania i sprawdzenia, nie działająca funkcja.
- **Zwrot.** Niewykorzystane saldo ma się dać odzyskać w każdej chwili, docelowo jednym przyciskiem; termin zwrotu, jego ewentualne koszty, minimalną wpłatę i pozostałe szczegóły określi regulamin. Po rezygnacji z konta albo zamknięciu usługi saldo wraca automatycznie tą samą drogą. Nieodebrane saldo nie zasila budżetu fundacji.
- **Zaokrąglenie.** Przy zakładaniu konta pytamy, czy chcesz zaokrąglać każdy rachunek w górę do pełnego dolara lub zbliżonego odpowiednika w lokalnej walucie; różnica trafia jako darowizna do wspólnego budżetu. Pytamy, zamiast zaznaczać za kogoś, a decyzję można zmienić w każdej chwili jednym ustawieniem.

Rachunek pokazuje osobno opłatę za usługę i kwotę darowizny. Termin zwrotu, minimalną wpłatę i pozostałe szczegóły określi regulamin, przygotowany przed przyjęciem pierwszej przedpłaty.

Więcej: [whitepaper zasad fundacji, punkt 3.2](../whitepaper-zasady-fundacji.md#s3-2) i [punkt 3.3](../whitepaper-zasady-fundacji.md#s3-3); [whitepaper Suverii, punkt 8.3](../whitepaper-suveria.md#s8-3).

## Jak to się ma do abonamentów

Cena abonamentu w komercyjnych platformach zwykle łączy w jednej kwocie koszt użycia z utrzymaniem darmowych kont, marketingiem, zarządem i zyskiem inwestorów, a użytkownik nie widzi udziału tych składników. Manifest stawia hipotezę, że bez tego ukrytego narzutu już przy stosunkowo niewielkiej liczbie regularnych uczestników wspólna infrastruktura może dawać więcej mocy obliczeniowej i cyfrowej inteligencji za każdego wydanego dolara niż zamknięte usługi, przy prywatności opartej na sprawdzalnych zabezpieczeniach.

Stan hipotezy na 29 października 2026 r.: rachunek zbliża nas do niej, ale jej nie potwierdza. Przetwarzanie z deklarowaną poufnością jest już dostępne w jawnych cennikach, więc niewielka grupa może zacząć od niego po kosztach, a w naszych założeniach własna infrastruktura może stać się tańsza przy kilkunastu do kilkudziesięciu tysiącach aktywnych osób. Z planami za 100–200 USD, które przy intensywnej pracy agentowej dają równowartość tysięcy dolarów w cenach katalogowych API, nie konkurujemy ceną. Proponujemy rozliczenie rzeczywistego użycia z prywatnością, którą można sprawdzić.

Więcej: [manifest, punkt 2.4](../manifest.md#s2-4); [whitepaper Suverii, punkt 8.1](../whitepaper-suveria.md#s8-1).

## Co zmieni rachunek

Rachunek aktualizujemy przy każdej istotnej zmianie cen i po każdej próbie, a poprzednie wersje zachowujemy. Rozstrzygną trzy rzeczy, które sprawdzimy w próbach:

- czy poufność tych usług przechodzi niezależną weryfikację;
- czy jakość dostępnych modeli wystarcza do zadań, dla których ludzie przyjdą do Suverii;
- jaki jest rzeczywisty profil ruchu.

Infrastrukturę chcemy rozwijać krokami: najpierw poufne API i prywatne środowisko w poufnych maszynach, potem wynajem własnych poufnych maszyn, dalej zakup sprzętu do zewnętrznej serwerowni, a w dalekiej perspektywie, jeśli wykaże przewagę, własny budynek. Każdy krok uzasadniają zmierzone dane i karta decyzji z pełnym kosztem, ryzykami i warunkami wycofania. Zakup serwera liczymy dziś tylko jako szacunek, nie ofertę.

Więcej: [whitepaper Suverii, punkt 8.1](../whitepaper-suveria.md#s8-1) i [punkt 8.2](../whitepaper-suveria.md#s8-2).

## Przeczytaj i powiedz, co myślisz

Pełny rachunek z tabelą wariantów i źródłami cen znajdziesz w [whitepaperze Suverii](../whitepaper-suveria.md#s8), a zasady rachunku, przedpłat i zwrotów w [whitepaperze zasad fundacji](../whitepaper-zasady-fundacji.md#s3). Jeśli w liczbach albo założeniach coś Ci nie gra, zaznacz ten fragment w dokumencie i skorzystaj z przycisku „Mam uwagę” albo napisz na salve@novusignis.org.
