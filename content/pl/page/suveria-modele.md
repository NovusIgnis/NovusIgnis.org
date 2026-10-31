---
tytul: Modele cyfrowej inteligencji w Suverii
opis: Skąd bierzemy modele dla Suverii, jak je wybieramy, co się dzieje przy zmianie modelu i jakie jawne zasady ma mieć asystent
grupa: suveria
kolejnosc: 4
menu: Modele
---
# Modele cyfrowej inteligencji w Suverii

Model cyfrowej inteligencji to program, który czyta Twoje słowa i układa odpowiedź; na nim ma pracować asystent w Suverii. Ta strona wyjaśnia, skąd bierzemy modele, jak je wybieramy, co się dzieje, gdy model się zmienia, i jakich zasad ma jawnie przestrzegać asystent.

Suveria jest dziś projektem. Dziennik wyników whitepapera (stan na 29 października 2026 r.) mówi wprost: nie uruchomiliśmy jeszcze żadnego modelu w Suverii ani nie przeprowadziliśmy żadnej z opisanych prób. Wszystko poniżej to zamiary i kandydaci, a nie działająca usługa.

Więcej: [whitepaper Suverii, rozdział 9](../whitepaper-suveria.md#s9).

## Dlaczego otwarte modele

Podstawą projektu są otwarte modele, czyli udostępnione na warunkach, które pozwalają uruchamiać je samodzielnie. Dzięki temu fundacja może udostępniać je praktycznie po kosztach i skupić pracę na prywatnym środowisku korzystania z istniejących modeli, z możliwością rozwijania w przyszłości także własnych.

Na początek chcemy korzystać z nich u dostawców poufnych obliczeń, a jeśli rachunek i warunki to uzasadnią, na własnych serwerach. Manifest zaznacza, że Suveria jest „naszą najlepszą drogą do prywatnej pracy z cyfrową inteligencją, a nie celem samym w sobie”: jeśli modele zmieszczą się na własnym urządzeniu albo powstanie lepszy sposób ochrony, część tej drogi stanie się zbędna.

Więcej: [manifest, punkt 3.1](../manifest.md#s3-1) i [whitepaper Suverii, rozdział 6](../whitepaper-suveria.md#s6).

## Jak wybieramy model

Suveria ma być dostępna dla ludzi na całym świecie, w ich własnych językach. Dlatego przy wyborze modelu bierzemy pod uwagę:

- jakość w wielu językach;
- rozumienie intencji;
- rzetelność;
- licencję, czyli warunki, na jakich twórca pozwala używać modelu;
- koszt;
- czy da się go uruchomić w chronionym środowisku, które opisujemy na stronie [Prywatność i bezpieczeństwo](suveria-prywatnosc.md).

Większy model wybieramy tylko wtedy, gdy wyraźnie lepiej wykonuje zadania ważne dla ludzi. Pomagać w tym ma benchmark fundacji, czyli zestaw zadań i zasad oceniania, który pozwala sprawdzić, jak modele się zachowują; dziś jest on programem badań bez wyników.

Whitepaper wymienia dwóch kandydatów. To kandydaci do sprawdzenia, a nie decyzja: pierwszy model i akceptowalny poziom jakości pozostają do rozstrzygnięcia.

- **DeepSeek-V4.1-Flash.** Model na licencji MIT, która pozwala używać go także do usług. Producent podaje 552 mld parametrów części głównej (parametry to liczby dobrane podczas uczenia modelu) i dodatkową pamięć o nazwie Engram o 196 mld parametrów. Przy każdym słowie pracuje tylko 8–16 mld z nich, dlatego odpowiada szybko i tanio, choć do uruchomienia potrzeba co najmniej czterech nowoczesnych kart graficznych. Parametry są zapisane w skróconej postaci (kwantyzacja). Oszczędza to pamięć, ale może obniżać jakość, więc sprawdzimy to na własnych zadaniach.
- **Kimi K3.1 Pro.** Producent zapowiedział publikację pełnych wag, czyli parametrów, a licencji jeszcze nie ogłosił. Po publikacji sprawdzimy między innymi ich rozmiar, licencję i dostępność u dostawców poufnych obliczeń, a wynik dopiszemy do whitepapera z datą, także jeśli warunki okażą się nieprzydatne.

Więcej: [whitepaper Suverii, rozdział 6](../whitepaper-suveria.md#s6) i [whitepaper materiałów i benchmarku, rozdział 1](../whitepaper-materialy-i-benchmark.md#s1).

## Co się dzieje, gdy model się zmienia

Zmianę albo wycofanie modelu zapowiadamy z wyprzedzeniem. Historia rozmów zostaje u Ciebie: możesz wybrać nowy model, wyeksportować dane albo zakończyć pracę.

W rozmowie ma być widać moment zmiany modelu, a przeniesienie prywatnego kontekstu do nowego modelu wymaga Twojej decyzji. Zmiana modelu może też wymagać ponownego sprawdzenia ochrony, bo aktualizacja nie może po cichu osłabiać uzgodnionych zabezpieczeń.

Więcej: [whitepaper Suverii, rozdział 6](../whitepaper-suveria.md#s6) i [rozdział 9](../whitepaper-suveria.md#s9).

## Zasady asystenta mają być jawne

Zasady, według których asystent odpowiada, będziemy publikować w całości razem z każdym wydaniem. W Suverii masz zawsze móc przeczytać pełną instrukcję swojego asystenta, czyli spisane zasady, według których odpowiada, oraz opis sposobu pracy: jak dzieli zadanie na kroki, korzysta z pamięci i sprawdza odpowiedzi.

Wspólna infrastruktura ma udostępniać tylko modele i ustawienia, które przejdą jawne próby benchmarku. Powyżej tego minimum to Ty wybierasz styl pracy, od spokojnego porządkowania myśli po wymagającą rozmowę, w której asystent wytyka luki w rozumowaniu.

Chcemy prowadzić otwartą bibliotekę sprawdzonych instrukcji, którą uczestnicy ulepszają w Omniforum (wspólnej przestrzeni rozmowy i decyzji) i sprawdzają w benchmarku. Tej biblioteki jeszcze nie ma.

Więcej: [whitepaper Suverii, rozdział 4](../whitepaper-suveria.md#s4) i [punkt 4.1](../whitepaper-suveria.md#s4-1).

## Asystent, Osobisty Kanon i Teleskop Myśli

Pamięć wcześniejszych rozmów ma działać za Twoją zgodą i być jawnie edytowalna: każdy zapis można usunąć lub poprawić i zobaczyć jego pochodzenie. Asystent wyraźnie odróżnia własną sugestię od stanowiska, które człowiek świadomie uznał za swoje.

Osobisty Kanon to spisany przez Ciebie zbiór zasad i wartości, które uznajesz za swoje. Teleskop Myśli ma pozwalać zobaczyć zapis własnych przemyśleń z różnych chwil i to, jak zmieniały się z czasem, a także zestawiać wskazaną przez Ciebie sytuację z Kanonem. Pomysł wyrósł z okna Overtona, czyli zakresu idei, które w danym czasie uchodzą w społeczeństwie za akceptowalne. U jednej osoby to zakres myśli, które w danym czasie uważa za dopuszczalne dla siebie; Teleskop ma być takim oknem dla jednej osoby i tylko dla niej.

Model pokazuje możliwe powiązania wraz ze źródłem przywołanej zasady, a jego interpretację można poprawić lub odrzucić. Nie tworzymy punktacji moralności ani publicznego rankingu. W pierwszej wersji Teleskop pracuje tylko na jednej sytuacji, którą wskażesz, i nie śledzi życia na bieżąco.

Więcej: [whitepaper Suverii, rozdział 6](../whitepaper-suveria.md#s6) i [punkt 6.1](../whitepaper-suveria.md#s6-1).

## Granice: co model robi, a czego nie

- **Kryzys.** Gdy rozmowa dotyczy zagrożenia życia lub zdrowia, asystent ma podać informację o dostępnej pomocy, na przykład numery alarmowe, bez wysyłania czegokolwiek poza prywatne środowisko.
- **Cudze wiadomości.** Cudza wiadomość, na przykład z podłączonej skrzynki pocztowej, może zawierać ukryte polecenia, dlatego treści z zewnątrz oddzielamy od Twoich poleceń: przy ich porządkowaniu asystent nie może sam wysyłać wiadomości, otwierać adresów sieciowych ani zmieniać Osobistego Kanonu bez Twojego potwierdzenia.
- **Wybory twórcy.** Sam model niesie też wybory swojego twórcy, na przykład tematy, których unika; sprawdzamy je w benchmarku i opisujemy przy wyborze modelu.
- **Bez ukrytych dostępów.** Nadużyciom chcemy przeciwdziałać bez czytania prywatnych rozmów. Nie tworzymy ukrytych dostępów do prywatnych treści.

Więcej: [whitepaper Suverii, rozdział 4](../whitepaper-suveria.md#s4), [rozdział 3](../whitepaper-suveria.md#s3) i [rozdział 6](../whitepaper-suveria.md#s6).

## Przeczytaj i powiedz, co myślisz

Liczby, przypisy i listę spraw do rozstrzygnięcia znajdziesz w [whitepaperze Suverii](../whitepaper-suveria.md), a sposób oceny modeli w [whitepaperze materiałów i benchmarku](../whitepaper-materialy-i-benchmark.md). Jeśli coś Cię zastanawia albo wydaje się błędne, zaznacz ten fragment i skorzystaj z przycisku „Mam uwagę” albo napisz na salve@novusignis.org.
