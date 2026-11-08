---
tytul: Czym jest Suveria
opis: Prywatna przestrzeń do pracy z cyfrową inteligencją, którą projektuje fundacja: co ma być możliwe, przed czym ma chronić i na jakim etapie jest dziś
grupa: suveria
kolejnosc: 1
menu: Czym jest Suveria
---
# Czym jest Suveria

Ta strona wyjaśnia w skrócie, czym ma być Suveria, dla kogo powstaje i na jakim jest etapie. Przy każdej części znajdziesz odnośnik do whitepapera Suverii, gdy zechcesz wiedzieć więcej.

Suveria ma być prywatną przestrzenią w internecie, w której człowiek rozmawia z cyfrową inteligencją, pracuje nad własnymi materiałami i wraca do wcześniejszych myśli, tak jak we własnym domu za zamkniętymi drzwiami. Projektuje ją Fundacja Novus Ignis z myślą o ludziach z każdego miejsca na świecie.

Suveria jest dziś projektem. Powstaje po to, żeby można było rozmawiać z cyfrową inteligencją o zdrowiu, relacjach, pracy, pieniądzach i planach na życie bez lęku, że tak bliski wgląd w człowieka zostanie kiedyś zmonetyzowany lub wykorzystany do wywierania na niego wpływu. Pierwsze wydanie kierujemy do osób, dla których sprawdzalna prywatność jest powodem wyboru.

Więcej: [whitepaper Suverii, rozdział 1](../whitepaper-suveria.md#s1).

## Co chcemy, żeby było możliwe

W Suverii chcemy, żeby można było:

- rozmawiać o sprawach osobistych i zawodowych, widząc, gdzie przetwarzana jest rozmowa i kto może ją zobaczyć;
- pracować nad własnymi dokumentami i plikami, a wyniki zapisać i przenieść gdzie indziej w otwartych formatach;
- przechowywać rozmowy, pliki i pamięć asystenta przede wszystkim na własnych urządzeniach, zaszyfrowane kluczem pod Twoją kontrolą;
- za własną zgodą korzystać z pamięci wcześniejszych rozmów i budować Osobisty Kanon, czyli zbiór własnych zasad i wartości;
- wybrać sposób pracy, od modelu na własnym urządzeniu po poufne środowisko na serwerze, wiedząc, przed czym chroni każdy z nich;
- płacić za rzeczywiste użycie, z limitem wydatków ustalonym przez siebie;
- dopracować myśl prywatnie, a potem świadomie wnieść ją do wspólnej rozmowy w OmniForum, czyli publicznej przestrzeni rozmowy i decyzji.

Już pierwszy dzień ma dawać spokojne poczucie bycia u siebie. Chcemy też umożliwić przeniesienie własnych notatek i archiwów rozmów z innych usług cyfrowej inteligencji. Korzystanie z Suverii nie jest zgodą na użycie rozmów do szkolenia modeli.

Więcej: [whitepaper Suverii, rozdział 1](../whitepaper-suveria.md#s1).

## Przed czym chroni i czego jeszcze nie ma

Ochrona ma opierać się na zabezpieczeniach, które można niezależnie sprawdzić, a nie na zaufaniu do fundacji, także do nas jako osób obsługujących infrastrukturę. Dziś żadnego takiego sprawdzenia jeszcze nie było.

Porównujemy kilka sposobów pracy, bo każdy chroni przed czym innym:

- **Model na Twoim urządzeniu.** Rozmowa nie opuszcza telefonu ani komputera, chyba że asystent korzysta z integracji z usługami w sieci; liczy się stan urządzenia, uprawnienia aplikacji i to, kto ma do niego fizyczny dostęp.
- **Poufne środowisko na serwerach.** Serwer ma odizolowaną sprzętowo strefę, do której nie zajrzy nawet jego administrator; tam model czyta treść. Sprzęt ma to potwierdzać cyfrowym podpisem (to atestacja: poświadczenie, jakie oprogramowanie działa na zdalnej maszynie i w jakim trybie ochrony). Trzeba przy tym ufać producentowi procesora. To wariant docelowy.
- **Poufne API zewnętrznego dostawcy.** API to łącze, przez które nasza aplikacja wysyła rozmowę do modelu u cudzego dostawcy. Z poufnego API najpewniej skorzysta pierwsze wydanie; jeśli przed jego uruchomieniem zbierzemy dość środków na wynajem własnych serwerów w poufnym środowisku, może od razu działać na nich. Poufność jest tu na starcie deklaracją dostawcy, którą będziemy sprawdzać; do czasu pozytywnego wyniku prób oznaczamy ten wariant jako ochronę deklarowaną, a nie poufną.
- **Zwykłe API dostawcy modelu.** Dostawca ma dostęp do treści; to nie jest domyślny wariant prywatnej Suverii.

Poufne obliczenia nie naprawiają zainfekowanego komputera i nie chronią przed każdym, kto ma fizyczny dostęp do serwera. Żaden wariant nie dostaje etykiety „pełna prywatność” przed sprawdzeniem konkretnej konfiguracji. Przy każdej rozmowie ma być widać, w którym wariancie pracujesz, a zmiana wariantu wymaga Twojej świadomej decyzji.

Więcej: [whitepaper Suverii, rozdział 2](../whitepaper-suveria.md#s2) i [punkt 2.3](../whitepaper-suveria.md#s2-3). Zobacz też: [Prywatność i bezpieczeństwo](suveria-prywatnosc.md).

## Modele

Podstawą projektu są otwarte modele, które można uruchomić samodzielnie. Wybierając model, bierzemy pod uwagę między innymi jakość w wielu językach, rzetelność, licencję, koszt i możliwość uruchomienia w wymaganej architekturze ochrony.

Zmianę albo wycofanie modelu zapowiadamy z wyprzedzeniem, a historia rozmów zostaje u Ciebie: możesz wybrać model następcę, wyeksportować dane albo zakończyć pracę. W rozmowie ma być widać moment zmiany modelu.

Więcej: [whitepaper Suverii, rozdział 6](../whitepaper-suveria.md#s6).

## Ile to kosztuje

Manifest stawia hipotezę, że wspólna infrastruktura może dać więcej mocy obliczeniowej i cyfrowej inteligencji za każdy dolar niż zamknięte usługi. Whitepaper liczy to w rachunku z datą 29 października 2026 r.: przy przyjętym profilu użycia poufne API z deklarowaną poufnością kosztuje ok. 0,70–1,25 USD na osobę miesięcznie za same obliczenia. Do tego dochodzi stały koszt prywatnego środowiska, który przy małej liczbie osób waży najwięcej: przy 30 uczestnikach ok. 6–11 USD na osobę miesięcznie.

To szacunek na papierze, a nie cennik Suverii: rachunek nie zawiera pracy ludzi, przeglądów bezpieczeństwa, płatności ani zapasu na awarie. Stan hipotezy na ten dzień: rachunek zbliża nas do niej, ale jej nie potwierdza.

Więcej: [whitepaper Suverii, rozdział 8](../whitepaper-suveria.md#s8). Zobacz też: [Ile to kosztuje](suveria-koszty.md).

## Stan prac

Whitepaper prowadzi dziennik wyników. Jego stan na 29 października 2026 r.: nie przeprowadziliśmy jeszcze żadnej z opisanych prób, nie wynajmowaliśmy kart graficznych i nie uruchomiliśmy modelu w Suverii. Pierwszy pomiar planujemy na jednej poufnej karcie z mniejszym modelem.

Najważniejsza próba: zespół z uprawnieniami operatora próbuje odczytać rozmowy kont testowych, w których ukryto tajne ciągi znaków. Jeśli wyciągnie je ktokolwiek, także my, próba się nie udała.

Próby chcemy prowadzić otwarcie. Jeśli zajmujesz się bezpieczeństwem, kryptografią, infrastrukturą lub aplikacjami, albo chcesz spojrzeć na projekt krytycznie, napisz na salve@novusignis.org z tematem „[Dołącz] Próby Suverii”.

Więcej: [whitepaper Suverii, rozdział 9](../whitepaper-suveria.md#s9) i [punkt 8.2](../whitepaper-suveria.md#s8-2).

## Dlaczego Suveria to droga, a nie cel

Manifest mówi o tym wprost:

> Suveria jest dziś naszą najlepszą drogą do prywatnej pracy z cyfrową inteligencją, a nie celem samym w sobie. Jeśli modele zmieszczą się na własnym urządzeniu albo powstanie lepszy sposób ochrony, część tej drogi stanie się zbędna, i uznamy to za dobrą wiadomość.

Więcej: [manifest, punkt 3.1](../manifest.md#s3-1).

## Przeczytaj i powiedz, co myślisz

Pełny opis, z tabelą wariantów ochrony, rachunkiem kosztów i listą spraw do rozstrzygnięcia, znajdziesz w [whitepaperze Suverii](../whitepaper-suveria.md). Jeśli coś Cię zastanawia albo wydaje się błędne, zaznacz ten fragment w dokumencie i skorzystaj z przycisku „Mam uwagę” albo napisz na salve@novusignis.org.
