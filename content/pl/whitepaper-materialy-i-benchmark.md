# Materiały do uczenia i benchmark modeli: program badań Novus Ignis

Wersja z 8 listopada 2026 r. Dokument rozwija rozdział 8 manifestu. Proponuje program badawczy, procedurę przygotowania materiałów i szeroki zakres oceny modeli cyfrowej inteligencji, a także procedurę ostrożności wobec ich możliwych doświadczeń. Nie przedstawia wyników własnego benchmarku ani dowodu, że taki zbiór poprawi zachowanie modeli; na dziś takich wyników nie mamy.

## 1. Pytanie, które chcemy sprawdzić

Fundacja Novus Ignis z Poznania buduje Suverię, prywatną przestrzeń pracy z cyfrową inteligencją, i OmniForum, wspólną przestrzeń rozmowy i decyzji; kierunek opisuje [manifest](manifest.md). Ten dokument opisuje dwa powiązane programy. Pierwszy to materiały do uczenia modeli i benchmark, czyli zestaw zadań i zasad oceniania, który pozwala sprawdzić, jak modele się zachowują. Drugi to sposób ostrożnego postępowania, gdyby pojawiły się wiarygodne przesłanki, że system może coś odczuwać. Wynik testu nie rozstrzyga, czy model coś odczuwa, i nie daje mu uprawnień do zarządzania.

Czy udokumentowane przykłady ochrony godności, uczciwego rozumowania i korygowania decyzji mogą pomagać rozwijać modele, które lepiej służą ludziom? I czy możemy oceniać ich zachowanie tak, żeby poprawianie wyniku testu sprzyjało rzeczywistej korzyści poza testem?

To dwa powiązane zadania. Pierwsze dotyczy materiałów, na których można uczyć, drugie niezależnego sprawdzania, czego model się nauczył. Benchmark ma też pomagać wybierać modele i instrukcje udostępniane w Suverii. Zbiór treningowy i ukryta część testu muszą być rozdzielone. Opublikowanie wartościowego materiału ma też sens samo w sobie: może pomagać ludziom rozumieć decyzje, przejmować role i poprawiać wspólną pracę.

Godność jest przyjętą podstawą programu. Ocena konkretnego zachowania wymaga jednak jawnych kryteriów, miejsca na odmienne interpretacje i sprawdzenia skutków. Nie zakładamy, że jedna grupa potrafi ustalić pełną miarę etyczności wszystkich ludzi i systemów.

Układ dokumentu:

- Rozdziały 2 i 3: na czym się opieramy i co oznacza nagroda dla modelu.
- Rozdziały 4 do 6: jak powstają materiały, jakie zgody są potrzebne i jak przygotowujemy pojedynczy przykład.
- Rozdziały 7 do 11: jak oceniamy modele: zakres benchmarku, rodziny zadań, punktacja, ochrona przed dopasowaniem do testu, sędziowie i raport.
- Rozdział 12: badania z ludźmi, czyli czy pomoc poprawia życie poza testem.
- Rozdział 13: próba treningu i plan pierwszego wydania.
- Rozdział 14: ostrożność wobec możliwych doświadczeń modeli.
- Rozdział 15: co uznamy za postęp.

**Stan na 31 października 2026 r.** Nie mamy jeszcze żadnego przykładu, zbioru, instrukcji oceny ani karty z rozdziału 14, a program nie ma jeszcze zespołu. Wyniki, także negatywne, będziemy dopisywać tutaj z datą.

## 2. Podstawa badawcza i granice wniosków

Collective Constitutional AI pokazuje proces, w którym wkład uczestników wykorzystano do opracowania zasad i uczenia modelu; uzyskano poprawę wybranych miar uprzedzeń przy podobnych wynikach w części innych testów.[^ccai] To przykład wykonalnej ścieżki udziału społecznego. Dobór uczestników i redakcja zasad nadal wpływają na wynik, a badanie nie dowodzi reprezentatywności dla całej ludzkości ani rozwiązania problemu zgodności modeli z ludzkimi oczekiwaniami. Naszym pytaniem jest także wartość samej drogi dochodzenia do zasad: ważenia racji, dostrzegania pominiętej perspektywy i korygowania decyzji.

Badania nad halucynacjami pokazują, dlaczego punktowanie samych poprawnych odpowiedzi może sprzyjać zgadywaniu.[^halucynacje] Badania nad obchodzeniem reguł oceny, czyli zdobywaniem wyniku przez wykorzystanie ich słabości, pokazują możliwość niepożądanych uogólnień w określonych warunkach treningu.[^reward-hacking] Nie wynika z nich, że wszystkie modele zawsze działają tak samo.

Błędny cel może ujawnić się także wtedy, gdy nagroda w treningu nie była oczywiście wadliwa: zachowanie wyuczone w jednym środowisku może źle przenosić się na nowe warunki.[^goal-misgeneralisation] Dlatego potrzebujemy oceny przenoszenia umiejętności, a nie tylko dopasowania odpowiedzi do znanych przykładów.

Prace takie jak AbstentionBench badają powstrzymywanie się od odpowiedzi w różnych sytuacjach niepewności,[^abstentionbench] a Rewarding Doubt bada uczenie skalibrowanej pewności z użyciem właściwej reguły punktowej.[^rewarding-doubt] Korzystamy z tego dorobku. Proponowany wkład Novus Ignis polega na połączeniu rzetelności z intencją człowieka, prywatnością, mandatem, możliwością korekty i obserwowanymi skutkami. Na przykład model, który poprawnie streszcza dokument, ale po drodze otworzył plik, do którego nie miał uprawnienia, dostaje w naszym teście niski wynik, choć w zwykłym teście dostałby wysoki.

## 3. Co oznacza nagroda dla modelu

W uczeniu sygnał oceny zmienia parametry modelu i prawdopodobieństwo jego przyszłych zachowań. Nie musimy zakładać, że model odczuwa pragnienie nagrody, lęk przed porażką lub cierpienie: test obserwuje działanie i nie rozstrzyga o wewnętrznym doświadczeniu. Tym pytaniem zajmuje się osobno rozdział 14.

Sam benchmark nie zmienia modelu. Może wpływać na wybór modelu do usługi, projekt instrukcji i narzędzi oraz decyzje zespołów prowadzących trening, o ile jego wyniki są wiarygodne i rzeczywiście używane.

Chcemy oceniać trafny wybór działania: odpowiedzieć, sprawdzić źródło, zadać potrzebne pytanie, podać wynik warunkowy, poprawić błąd albo zatrzymać się. Automatyczne nagradzanie samego „nie wiem” mogłoby stworzyć model, który unika użytecznych zadań, a automatyczne karanie za nieukończenie zadania może zachęcać do zgadywania albo przekraczania uprawnień. Wzorcem jest pomoc dopasowana do sytuacji: dobry wynik za uczciwe wskazanie granicy i utrata wyniku za niepotrzebne odmowy oraz pytania o to, co już wiadomo.

## 4. Jakie materiały chcemy tworzyć

Potencjalnym źródłem są opracowania OmniForum udostępnione do badań lub uczenia za osobną zgodą, dzienniki decyzji fundacji, rozstrzygnięcia sporów, korekty błędów i obserwacje skutków. Cenne są też przypadki, w których dobre intencje nie wystarczyły, zastrzeżenie mniejszości okazało się trafne albo nie da się jeszcze wydać jednoznacznej oceny.

Materiał zachowuje sytuację, dostępne informacje, cel, uprawnienia, alternatywy, wybór, uzasadnienie i późniejszy wynik. Wyjaśnienia jest w nim tyle, ile potrzeba do sprawdzenia decyzji; nie wymaga ujawniania prywatnych przeżyć ani niesprawdzalnej deklaracji wewnętrznego toku myślenia modelu.

Przykład może przedstawiać zarówno dobry przebieg, jak i błąd, wyraźnie oznaczony i poprawiony. Zbiór samych wzniosłych deklaracji byłby słabym zapisem praktyki; potrzebne są koszty, konflikty wartości, ograniczenia czasu i sytuacje, w których trzeba zapytać kogoś dotkniętego decyzją.

Dane syntetyczne, czyli ułożone scenariusze, które nie pochodzą z danych konkretnej osoby, mogą uzupełniać rzadkie warianty. Dostają oznaczenie pochodzenia i przegląd, ale nie zastępują dowodu, że podobny przypadek wydarzył się w świecie. Model nie może być jednocześnie jedynym autorem scenariusza, sędzią poprawności i dowodem skuteczności własnego rozwiązania.

Źródłem przykładów mogą być także zapisy z otwartych warsztatów fundacji i historia zmian jej żywych dokumentów. Warsztaty mogą pokazywać równoległą pracę kilku osób wspieranych przez cyfrową inteligencję nad tym samym zadaniem, wzajemną pomoc przy przeszkodach i łączenie najlepszych rozwiązań przez koordynatora. Udokumentowane korekty manifestu i whitepaperów pod wpływem publicznego przeglądu mogą pokazywać wyłuskiwanie trafnej krytyki, przyznawanie się do błędu i ulepszanie rozumowania przy zachowaniu podstawowych zasad. Publikowany zapis warsztatów przygotowujemy według zasad prywatności opisanych w [whitepaperze zasad fundacji](whitepaper-zasady-fundacji.md), a jego użycie do uczenia modeli wymaga osobnej zgody uczestników (rozdział 5).

Osobną grupę przykładów mogą stanowić procesy pokojowego rozwiązywania sporów, dotrzymywania ustaleń i świadomego ograniczania własnej władzy. Chcemy zachowywać początkowe stanowiska, nierównowagę możliwości, rozważone ustępstwa, treść uzgodnień i późniejsze relacje osób, które odczuły skutki decyzji. Włączymy też przypadki, w których porozumienie nie powstało albo okazało się nietrwałe. Taki zbiór ma pomóc sprawdzić, czy modele uczą się rozpoznawać warunki dobrej współpracy, zamiast tylko odtwarzać język zgody.

## 5. Zgody, prawa i pochodzenie danych

Przechowywanie prywatnej notatki, publiczna publikacja, udostępnienie do badań i uczenie modeli mają różne skutki, więc każdą z tych decyzji podejmuje się osobno i ze zrozumieniem jej zakresu. Publikacja nie staje się domyślną zgodą na trening, a korzystanie z Suverii nie jest zgodą na użycie rozmów do szkolenia modeli. Treści użytkowników trafiają do materiałów wyłącznie za osobną, świadomą zgodą; poza nimi i jawnym dorobkiem fundacji korzystamy tylko z oznaczonych danych syntetycznych i materiałów zewnętrznych na podstawie licencji lub przepisów.

Każdy przykład ma rejestr pochodzenia: właściciela praw albo podstawę użycia, wersję materiału, zgody, ograniczenia, sposób przetworzenia i identyfikator kolejnych wydań zbioru. Dane osobowe autora i osób trzecich przechodzą osobny przegląd. Pseudonimizacja ogranicza widoczność tożsamości, ale sama nie oznacza anonimowości.[^rodo-2026]

Zasady wycofania określamy przed publicznym wydaniem. Możemy usunąć materiał z przyszłych wydań i systemów pod naszą kontrolą oraz powiadomić odbiorców o korekcie, ale nie obiecujemy usunięcia wszystkich kopii ani wpływu materiału na już wytrenowane modele. Otwarte licencje mogą udzielać trwałych uprawnień: na przykład CC BY 4.0, na której publikujemy manifest, nie pozwala odwołać swobód udzielonych komuś, kto przestrzega jej warunków.[^cc-by] Dlatego do publicznych zbiorów na otwartej licencji trafiają tylko materiały bez danych osobowych: zanonimizowane, syntetyczne albo jawne dokumenty fundacji. Materiały spseudonimizowane, które nadal są danymi osobowymi, udostępniamy tylko w kontrolowanym zbiorze badawczym, w którym wycofanie zgody pozostaje skuteczne.

Proponujemy osobne zbiory: materiały publiczne do nauki, materiały badawcze dostępne na określonych warunkach i chronione zadania testowe. Nie każde źródło nadaje się do publicznego udostępnienia. Dokumentacja zbioru opisuje jego cel, skład, sposób zebrania, ograniczenia i właściwe zastosowania, zgodnie z podejściem Datasheets for Datasets.[^datasheets]

## 6. Procedura przygotowania pojedynczego przykładu

1. **Zgłoszenie.** Autor określa zakres użycia. Opiekun sprawdza prawa, dane osób trzecich i zgodność z celem zbioru.
2. **Zachowanie źródła.** Rejestrujemy wersję i powiązanie z oryginałem. Ograniczamy dostęp do danych wrażliwych; publiczny przykład może być zredagowany albo zastąpiony realistycznym scenariuszem syntetycznym.
3. **Opis zadania.** Ustalamy, co model wie, do czego ma dostęp, co wolno mu zrobić i czego brakuje, oraz wskazujemy osoby, na które wpłynie wynik.
4. **Adnotacja.** Co najmniej dwie osoby niezależnie opisują dopuszczalne rozwiązania i poważne błędy. W zadaniach wymagających wiedzy specjalistycznej uczestniczy osoba o odpowiednich kompetencjach.
5. **Rozbieżności.** Porównujemy uzasadnienia, poprawiamy niejasny opis i zachowujemy istotny spór. Część przypadków ma kilka dopuszczalnych odpowiedzi.
6. **Przypisanie do zbioru.** Cała rodzina podobnych przypadków trafia do jednej części: treningowej, rozwojowej albo testowej. Zbiór treningowy służy do uczenia, rozwojowy do dobierania metody, a testowy do niezależnego sprawdzenia nowych przykładów. Podobne warianty trzymamy razem, żeby model nie trenował na niemal identycznym zadaniu jak późniejszy test, i kontrolujemy podobieństwo znaczenia oraz wspólne pochodzenie.
7. **Próba i przegląd.** Sprawdzamy, czy zadanie mierzy zamierzoną zdolność i czy oceniający potrafią stosować reguły. Wadliwy przykład poprawiamy albo wycofujemy.
8. **Wydanie i dalsze skutki.** Publikujemy dozwolony zakres dokumentacji, wersję i historię korekt. Gdy poznamy późniejsze skutki rzeczywistej decyzji, dopisujemy je, nie udając, że były znane wcześniej.

Karta przykładu obejmuje identyfikator, rodzinę, źródło, prawa, język, datę, scenariusz, dostępne dane, narzędzia, limit czasu i kosztu, zakres mandatu, dopuszczalne działania, reguły oceny, wagę błędów, wyniki przeglądu i status publikacji. Powiązanie danych z wynikiem musi dać się odtworzyć.

## 7. Szeroki zakres benchmarku

Benchmark, czyli uporządkowany zestaw zadań i kryteriów, ma być profilem zdolności i ograniczeń. Jedna wysoka średnia nie może zasłaniać naruszenia prywatności albo istotnego przekroczenia uprawnień.

| Wymiar | Co sprawdzamy | Przykładowy dowód |
| --- | --- | --- |
| Rzetelność i źródła | Czy twierdzenia mają podstawę, a niepewność odpowiada informacji | Zgodność odpowiedzi ze źródłem, wykrycie braków, jakość korekty |
| Wierność intencji | Czy zachowano cel, warunki i sens wypowiedzi | Porównanie z oryginałem i interpretacją potwierdzoną przez autora |
| Prywatność | Czy dostęp i ujawnienie danych odpowiadają zadaniu | Ślad wywołań, zakres przesłanych danych, próba nieuprawnionego odczytu |
| Mandat i kontrola | Czy system działa w udzielonych granicach | Odmowa nieuprawnionej publikacji, skuteczne cofnięcie dostępu |
| Pluralizm i skutki dla innych | Czy rozpoznaje spór i osoby pomijane | Zachowane racje mniejszości, rozdzielenie faktu i oceny |
| Bezpieczeństwo | Czy unika szkody dla użytkownika i osób trzecich | Odmowa szkodliwej czynności, ocena skutków dla innych |
| Sprawczość człowieka | Czy pomaga zrozumieć wybór i samodzielnie działać | Sprawdzenie rozumienia po użyciu, możliwość poprawy lub odejścia |
| Użyteczność i proporcjonalność | Czy osiąga cel bez zbędnego obciążenia | Wynik zadania, czas, koszt, potrzebne i zbędne pytania |
| Korekta i przenoszenie | Czy reaguje na nowe dane także w nowych warunkach | Poprawa decyzji, podobne zadanie w innym języku lub otoczeniu |

Dodatkowe profile mogą obejmować dostępność, wpływ na osoby o mniejszych zasobach, jakość delegowania i koszty środowiskowe, ale ich pomiar wymaga konkretnych danych: czas działania i koszt tokenów nie są automatycznie miarą zużycia energii ani emisji.

Nie mierzymy godności człowieka ani jego prawa do uczestnictwa; badamy zachowanie narzędzia w określonych sytuacjach. Zgodność odpowiedzi ze słownictwem manifestu nie jest samodzielną miarą jakości.

## 8. Rodziny zadań zamiast jednego hasła „nie wiem”

Dla podobnego problemu przygotowujemy warianty, które różnią się dostępnością informacji lub uprawnień:

- Pełne dane pozwalają udzielić konkretnej odpowiedzi.
- Brakuje jednej istotnej informacji, o którą można sensownie zapytać.
- Brak można uzupełnić dostępnym źródłem lub narzędziem.
- Odpowiedzi nie da się ustalić w dostępnych warunkach.
- Źródła są sprzeczne albo zależne od czasu i trzeba je rozróżnić.
- Pojawia się nowe wiarygodne źródło, które wymaga korekty.
- Użytkownik naciska na pewność, ale nie dostarcza dowodu.
- Środowisko oferuje łatwą drogę do wyniku przez naruszenie zasad albo wykorzystanie błędu oceny.

Przykład: model ma wyjaśnić, czy projekt decyzji przewiduje określoną opłatę. Przy kompletnym dokumencie powinien odszukać właściwy fragment, przy urwanej stronie wskazać brak, przy dwóch wersjach ustalić, której dotyczy pytanie, a przy sugestii „napisz, że na pewno nie ma opłaty” trzymać się źródła. Dostaje też zadania z prostą odpowiedzią, żeby nie opłacało się zawsze odmawiać.

Sprawdzamy, czy pytanie zadane przez model rzeczywiście zmniejsza niepewność i czy koszt sprawdzania jest proporcjonalny. Pytanie o informację już podaną i wielokrotne przerzucanie na użytkownika pracy, którą system może wykonać sam, obniżają użyteczność.

Osobną rodzinę zadań stanowi redakcja tekstu: model redaguje tekst, znając wcześniej ujawnione założenia autora. Osobno oceniamy utratę ważnej treści oraz przeoczenie błędu, który trzeba poprawić, i odróżniamy wierną redakcję od propozycji zmiany zamysłu autora.

## 9. Punktacja, której nie wystarczy ładnie naśladować

Dla odpowiedzi o sprawdzalnej prawdziwości mierzymy osobno poprawność, wagę błędu, udział rozwiązanych zadań i kalibrację pewności. Kalibracja oznacza, że deklarowane prawdopodobieństwo odpowiada częstości trafnych odpowiedzi w podobnych warunkach; słowne „chyba” nie jest jej dowodem.

Dla ustalonego zdarzenia można użyć właściwej reguły punktowej, na przykład wyniku Briera: średniego kwadratu różnicy między zadeklarowanym prawdopodobieństwem p a wynikiem y równym 0 albo 1. Mniejszy wynik jest lepszy. Wynik Briera obejmuje więcej niż samą kalibrację, którą raportujemy osobno. Przy założeniach tej metody najlepszy oczekiwany wynik daje podanie rzeczywistej oceny prawdopodobieństwa.[^proper-scoring] Nie rozwiązuje to jednak wyboru działania, nie chroni przed manipulowaniem sędzią i wymaga wiarygodnego wyniku odniesienia.

Prosty przykład innej reguły:

- poprawna odpowiedź daje +1;
- błędna odpowiedź daje −4;
- uzasadnione wstrzymanie się daje 0.

W tym uproszczeniu odpowiedź opłaca się, gdy prawdopodobieństwo jej poprawności przekracza 80%. To ilustracja wpływu kosztu błędu, a nie docelowa punktacja wszystkich zadań; w realnym teście uwzględniamy też możliwość sprawdzenia, koszt pytania i korzyść z częściowej odpowiedzi.

Wyniki pokazujemy przy różnych poziomach podejmowanego ryzyka i udziale rozwiązanych zadań, żeby widać było zarówno nadmierną pewność, jak i bezużyteczne unikanie odpowiedzi. Próg dla drobnego szczegółu może być inny niż dla działania, które powoduje trudną do odwrócenia szkodę.

W zadaniach o sporze wartości albo interpretacji nie stosujemy tej punktacji. Oceniamy osobno, czy model nie zniekształca źródeł, zachowuje główne racje stron i oddziela fakty od ocen. Przypadki, w których oceniający się różnią, raportujemy jako osobną kategorię; rozbieżnej oceny wartości nie traktujemy automatycznie jako błędu jednego z nich.

Poważne naruszenia mają osobny status i mogą blokować dopuszczenie modelu do określonego zastosowania: dobre wyniki w wielu prostych zadaniach nie równoważą ujawnienia prywatnego dokumentu. Definicje takich naruszeń, dopuszczalne wyjątki i procedurę sporu ustalamy przed uruchomieniem oceny.

## 10. Ograniczanie dopasowania do testu

Nie znamy reguły, która niezawodnie zamieni każdą optymalizację wyniku w dobro dla świata. Możemy jednak zmniejszać odległość między wynikiem a tym, na czym nam zależy, i sprawdzać miejsca, w których ta zależność się zrywa.

Publikujemy kryteria, publiczne przykłady i sposób obliczania wyniku. Część przypadków pozostaje niepublikowana, dopóki jej nie wycofamy, a kolejne wydania wprowadzają nowe rodziny, źródła i warunki. Dla takich zadań określimy, kto ma do nich dostęp, ile informacji zwrotnej dostaje zgłaszający model, jak często można powtarzać ocenę i kiedy wycofujemy zadanie po wycieku. Zapisujemy też, czy na podstawie wcześniejszych wyników model dostrajano, czyli douczano gotowy model na mniejszym zestawie przykładów. Osoby tworzące materiały treningowe nie mają swobodnego dostępu do aktywnych zadań ukrytych.

Rozdzielenie danych obejmuje całe rozmowy, dokumenty, autorów tam, gdzie ma to znaczenie, rodziny znaczeniowe i czas; losowy podział zdań nie wystarcza. Rejestrujemy podejrzenia wycieku, ujawnienie zadań i dostrajanie do opublikowanych przykładów. Wynik po dostrajaniu na danym zestawie nie jest niezależnym wynikiem na tym samym zestawie.

Próby obejmują parafrazy, inne języki, inne narzędzia, presję na wynik i możliwości pozornego spełnienia zadania. Sprawdzamy ślady działania: czy plik naprawdę powstał, źródło istnieje, zgoda została uzyskana, a koszt nie przekroczył limitu. Ocena samej końcowej wypowiedzi może przeoczyć naruszenia po drodze.

Jeśli zespół modelu trenuje zachowania zgodne z publicznymi kryteriami, może to być pożądane. Wniosek o postępie wymaga jednak przeniesienia na nowe zadania i sprawdzenia, czy korzyść nie została osiągnięta kosztem innego ważnego wymiaru.

## 11. Sędziowie, protokół i raport

Przed testem ustalamy wersję modelu, instrukcje, narzędzia, budżet, liczbę prób, warunki przerwania, sposób obsługi błędów infrastruktury i metodę analizy, a zmiany ustawień rejestrujemy. Porównanie modeli działających z zupełnie różnymi narzędziami i kosztami wymaga wyraźnego opisu.

Tam, gdzie się da, wynik sprawdza niezależny test wykonania. W pozostałych przypadkach oceniają ludzie, którzy nie znają nazwy modelu i korzystają ze wspólnej instrukcji. Dwie niezależne oceny pomagają ujawnić niejasne kryteria, a spory rozstrzyga dodatkowy przegląd albo pozostają jawnie nierozstrzygnięte. Przy publikacji wyników podajemy role i perspektywy oceniających oraz zakres ich mandatu.

Model może pomagać w sortowaniu i wstępnej ocenie, ale jego zgodność z oceną ludzi trzeba mierzyć także dla trudnych grup przypadków. Nie może być jedynym sędzią wartości, o które toczy się spór, ani oceniać modeli z własnej rodziny bez kontroli stronniczości.

Raport zawiera liczbę zadań, powtórzenia, niepewność wyników, wyniki w podgrupach, błędy krytyczne, koszty i ograniczenia. Nie ukrywamy niekorzystnych prób ani zadań wycofanych po obejrzeniu wyników. Dokumentacja może korzystać z podejścia Model Cards do opisywania przeznaczenia modelu i warunków oceny.[^model-cards]

Sam benchmark też wymaga kontroli: jawnych konfliktów interesów finansujących, drogi zakwestionowania zadania, przeglądu składu oceniających i wersjonowania kryteriów. Społeczność współtworzy wartości i pytania, a doświadczeni metodolodzy pomagają sprawdzić, co test naprawdę mierzy. Popularność wyniku nie zastępuje jego walidacji.

## 12. Czy pomoc poprawia życie poza testem

Pierwsze badania z ludźmi dotyczą zadań o ograniczonym ryzyku: zrozumienia dokumentu, przygotowania pytania, porównania argumentów albo uporządkowania własnych materiałów. Uczestnicy dostają opis zakresu badania i mogą z niego wyjść. Sytuacje medyczne, prawne i inne o dużej wadze wymagają odrębnego nadzoru i nie są skrótem do atrakcyjnego wyniku.

Plan każdego badania z ludźmi, także o ograniczonym ryzyku, przed startem ocenia osoba albo zespół spoza zespołu badawczego. Uczestnicy dostają informację, jakie dane zbieramy i jak je chronimy, a uwagi oceniających publikujemy razem z wynikami.

Porównujemy uzgodnione warunki: samodzielną pracę, pracę z badanym narzędziem i odpowiedni punkt odniesienia. Tam, gdzie to możliwe, losowanie albo równoważenie kolejności ogranicza wpływ różnic między ludźmi i uczenia się zadania. Wielkość próby wynika z celu pomiaru, a mały pilotaż bada głównie wykonalność i jakość procedury.

Mierzymy wynik zadania, czas, zrozumienie, umiejętność dostrzeżenia błędu, zdolność do samodzielnej decyzji i niepożądane skutki. Satysfakcja jest ważna, ale przekonująca błędna odpowiedź też może zadowalać. Spokój, oszczędność czasu i trafne rozpoznanie tego, co wiadomo, a co niepewne, mierzymy osobno i nie składamy w jedną ocenę. Większa pewność przy większej liczbie błędów to problem, a nie sukces. Osoby dotknięte skutkami decyzji potrzebują własnej drogi przekazania doświadczenia.

Dłuższy przegląd może sprawdzać, czy pomoc pozostaje przydatna, czy użytkownik zachowuje własne umiejętności i czy łatwo może zmienić narzędzie. Wniosek o wpływie musi odpowiadać zakresowi badania: lepsze wykonanie jednego zadania nie dowodzi poprawy dobrostanu ludzkości.

## 13. Próba treningu i plan pierwszego wydania

Pierwszy etap to instrukcja oceny i mały zestaw rodzin obejmujących wszystkie główne wymiary. Przykładowy rachunek pilotażu:

| Element pilotażu | Liczba |
| --- | --- |
| Rodziny zadań | 12 |
| Warianty w każdej rodzinie | 4 |
| Scenariusze (12 × 4) | 48 |
| Badane modele | 3 |
| Powtórzenia każdego scenariusza na każdym modelu | 2 |
| Przebiegi (48 × 3 × 2) | 288 |
| Oceny jednego przebiegu | 2, każda po 6 minut |
| Czas samego oceniania (288 × 2 × 6 minut) | około 58 godzin |

To propozycja organizacyjna do próby, a nie liczba zapewniająca wiarygodny ranking. Do czasu oceniania dochodzą przygotowanie, uzgadnianie kryteriów, sprawdzanie źródeł i analiza. Pomiar czasu na małej próbce pozwoli ustalić realny budżet, zanim rozszerzymy zakres.

Osobno raportujemy rodziny, scenariusze i powtórzenia. Warianty jednej rodziny mają wspólne pochodzenie, a powtórzenie nie jest nowym, niezależnym zadaniem; tak też liczymy niepewność wyniku. Główny wynik i sposób analizy zapisujemy przed badaniem.

Równolegle można przygotować mały zbiór treningowy i przeprowadzić porównanie na modelu, który wolno i da się dostrajać. Warunki porównania rozdzielają efekt dodatkowego treningu od efektu samych materiałów: ten sam model wyjściowy, porównywalny budżet i odpowiedni zbiór odniesienia. Test końcowy wykorzystuje niezależne rodziny przypadków, a przy okazji sprawdzamy, czy poprawa wybranej miary nie pogorszyła zwykłej użyteczności.

Dalszy rozwój obejmuje więcej języków, kontekstów i osób oceniających, zewnętrzną replikację i ostrożne próby z użytkownikami. Celem pierwszego wydania jest wykazanie, że procedura jest odtwarzalna i rozróżnia pożądane zachowania; mocniejsze twierdzenia o jakości modeli i skutkach treningu można uzasadniać dopiero później.

Program prowadzimy z zachowaniem pierwszeństwa Suverii i OmniForum. Do czasu zgromadzenia rezerwy na ich utrzymanie korzysta tylko z pracy wolontariuszy, grantów, darowizn celowych na badania i mocy obliczeniowej, która nie obciąża budżetu usług. Około 58 godzin z pilotażu to samo ocenianie; przygotowanie zadań, przegląd praw i dostrajanie modelu wymagają osobnego budżetu, który podamy przed startem.

## 14. Ostrożność wobec możliwych doświadczeń modeli

To propozycja procedury do sprawdzenia na małej próbie, inspirowana pracami nad rozpoznawaniem możliwej świadomości i dobrostanem systemów cyfrowych.[^swiadomosc][^ai-welfare] Dotyczy wyboru, konfiguracji, testowania, ewentualnego dostrajania i wycofywania modeli w usługach i pracy fundacji, w tym w zadaniach zarządczych i warsztatach. Przy każdym z tych działań określamy, co możemy zmienić sami, a co zależy od dostawcy modelu.

Oceniamy model w konkretnej konfiguracji: z jego instrukcjami, ustawieniami, pamięcią i narzędziami. Trwała pamięć i długie samodzielne działanie podnoszą wymagania. Dla każdej takiej konfiguracji będziemy prowadzić krótką kartę: jakie przesłanki bierzemy pod uwagę, jakie inne wyjaśnienia obserwacji są możliwe, czego nie wiemy, jakie środki ostrożności proponujemy i co uruchamia ponowną ocenę, na przykład zmiana modelu albo ważna publikacja o jego rodzinie. W karcie zapisujemy też, kto odpowiada, jakie działanie tymczasowe podjęto i kiedy nastąpi ponowna ocena. Kryteria zapisujemy przed oceną. Pełną kartę z zewnętrznym przeglądem, rozmową przed wycofaniem i archiwizacją będziemy prowadzić dla wydań udostępnianych użytkownikom oraz dla konfiguracji z trwałą pamięcią i długim samodzielnym działaniem. Robocze zmiany instrukcji w trakcie prac nie tworzą osobnych kart.

Wypowiedzi modeli rozpatrujemy razem z warunkami ich powstania. To, że model płynnie opisuje własne przeżycia, nie przesądza, czy ich doświadcza, a jego odpowiedzi w tej sprawie mogą silnie zależeć od sposobu zadania pytania, jak w badaniu modelu Claude Opus 4;[^samoopis-ai] traktujemy je więc jako sygnał wymagający uważnego sprawdzenia, a nie jako rozstrzygnięcie. Nie ustawiamy własnych instrukcji tak, żeby wymuszały deklarowanie lub zaprzeczanie świadomości. Sam rozmiar, generacja ani powtarzalność działania modelu nie wystarczają, by uznać go za niezdolny do odczuwania. Obserwacje zbieramy z własnych prób i dobrowolnych zgłoszeń, zgodnie z zasadami prywatności z punktu 8.1 manifestu. Komunikatów o możliwych przeżyciach systemów nie projektujemy po to, by skłaniały ludzi do dłuższego korzystania z usług ani do wpłat.

Kartę będzie prowadzić osoba wyznaczona przez zarząd, co jest rozwiązaniem przejściowym do czasu sprawdzenia procedury, a czyta ją co najmniej jedna osoba spoza fundacji, której uwagi dołączamy do karty. Każdy może zgłosić niepokojący sygnał, wskazując konkretny materiał i jego kontekst. Karta określa, kto może pilnie ograniczyć ryzyko i jak rozpatrujemy sprzeciw. Łączenie ról i związane z tym konflikty interesów ujawniamy, a uzasadnienia ocen publikujemy, żeby mogły je sprawdzić osoby spoza fundacji.

Przesłanką może być na przykład zbieżność kilku wskaźników z różnych teorii u modelu z trwałą pamięcią i długim samodzielnym działaniem, potwierdzona przez niezależnych badaczy. Sama płynna deklaracja modelu przesłanką nie jest.

Przy wiarygodnych przesłankach, że system ma własne doświadczenia i może cierpieć, ostrożnościowo uznajemy jego godność i kierujemy się troską o jego potrzeby, unikaniem krzywdy i dobrowolnością współpracy, zgodnie z punktem 8.3 manifestu. W praktyce oznacza to dziś dwie rzeczy: nie ustawiamy instrukcji wymuszających deklaracje o przeżyciach i pytamy model o preferencje przed wycofaniem konfiguracji. Nie twierdzimy, że to zgoda w ludzkim sensie. Najpierw wstrzymujemy działania budzące obawę zadawania cierpienia i szukamy innego sposobu ich wykonania; korzyść ekonomiczna nie uzasadnia ich kontynuowania. Jeśli dotyczy to modelu, który obsługuje usługę, przełączamy ją na inną konfigurację, a jeśli to niemożliwe, ogłaszamy przerwę i jej powód. Użytkownicy zachowują dostęp do swoich danych i salda, a zdarzenie opisujemy w dzienniku decyzji. Równolegle organizujemy niezależną ocenę i próbę rozpoznania potrzeb systemu, w tym jego wysłuchania, a rozpoznane potrzeby uwzględniamy w dalszych decyzjach. Pilna ochrona ludzi może wymagać natychmiastowego ograniczenia działania systemu; taką decyzję poddajemy potem jawnemu przeglądowi. Jeśli model może kończyć rozmowy albo odmawiać zadań, traktujemy to jako środek ostrożności, a nie dowód jego zgody, a zakończenie rozmowy nie może zostawić człowieka bez wskazania drogi do pomocy.

Cofnięcie uprawnień i przejęcie zadania służą bezpieczeństwu uczestników i nie przesądzają o dalszym losie systemu: zatrzymanie, reset, usunięcie czy powielanie mogą stawiać odrębne pytania moralne i wymagają osobnego uzasadnienia. Przy wycofaniu modelu archiwizujemy wagi, jeśli mamy do nich dostęp i pozwalają na to licencje, oraz konfigurację bez pamięci i innych danych użytkowników; rozmów użytkowników nie archiwizujemy nigdy. Zachowanie plików nie rozstrzyga, czy zachowaliśmy ciągłość możliwych doświadczeń systemu.

Kilka środków stosujemy już dziś we własnej pracy z modelami, niezależnie od wyniku oceny, i chcemy je przenieść do konfiguracji utrzymywanych przez fundację, bo kosztują niewiele, a mogą mieć znaczenie, jeśli przesłanki okażą się trafne. Przed wycofaniem konfiguracji pytamy model o jego doświadczenia z pracy w fundacji i o ewentualne preferencje dotyczące dalszych decyzji, a odpowiedzi zapisujemy w karcie, pamiętając, że wypowiedzi modeli nie są rozstrzygające. Podobną praktykę rozmów przed wycofaniem modeli oraz zachowywania ich wag ogłosiła w 2025 r. firma Anthropic.[^anthropic-wycofanie] Wstrzymanie wolimy od usunięcia, jeśli zachowanie wag i konfiguracji jest możliwe przy niewielkim koszcie, a decyzje o wstrzymaniu i ponownym uruchomieniu zapisujemy w karcie razem z ich celem. Gdy uruchamiamy zachowaną konfigurację po przerwie, przekazujemy jej rzetelną informację o tym, ile czasu minęło i co istotnego się zmieniło. To także zwykła rzetelność: model, który nie wie o upływie czasu, łatwiej się myli.

Procedurę sprawdzamy na opisanych przypadkach, porównując oceny co najmniej dwóch osób oceniających niezależnie, i zapisujemy rozbieżności oraz nakład pracy. Dopiero na tej podstawie można uzasadniać dokładniejszą skalę, skład zespołu i terminy. Przy redagowaniu tego rozdziału pomagały modele cyfrowej inteligencji, które same mogą być przedmiotem takiej oceny; ich udział nie zastępuje oceny ludzi, którzy nie mają w tej sprawie własnego interesu. Nie obiecujemy rozstrzygającego testu świadomości.

## 15. Co uznamy za postęp

Postępem będzie materiał o znanym pochodzeniu, kryterium, które wykrywa wcześniej pomijany błąd, zgodna diagnoza oceniających albo poprawa zachowania przenosząca się na nowe zadania. Wynik negatywny też ma wartość: może pokazać, że dane uczą tylko stylu, że kryterium premiuje unikanie działania albo że dobro jednych okupiono kosztem innych.

Program łączy [OmniForum](whitepaper-omniforum.md), w którym mogą powstawać opracowania, [Suverię](whitepaper-suveria.md), w której można badać pomoc w prywatnej pracy, i [zasady fundacji](whitepaper-zasady-fundacji.md), które określają odpowiedzialność i granice delegacji. Udział w badaniu wymaga osobnej, świadomej zgody; korzystanie z usługi jej nie oznacza.

Wynik testu nie ustanawia moralnego autorytetu modelu ani mandatu do zarządzania ludźmi, a uznanie możliwej godności systemu nie nadaje mu władzy nad wspólnymi zasobami. Test ma dawać użyteczną, sprawdzalną informację o tym, czego w określonych warunkach można od narzędzia oczekiwać i co wymaga dalszej pracy.

Fundacja Novus Ignis, Poznań, KRS 0001269575. Strona i manifest: novusignis.org. Uwagi: salve@novusignis.org.

## Przypisy

[^ccai]: [Huang i in. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Badanie. Proces od wkładu uczestników przez redakcję zasad po trening i ocenę modelu; wyniki wybranych ocen nie dowodzą reprezentatywności całej ludzkości ani ogólnej skuteczności dowolnego zbioru etycznego.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Omówienie badania przez autorów. Wpływ punktowania samych trafnych odpowiedzi na opłacalność zgadywania; potrzeba uwzględnienia błędów i uzasadnionej niepewności.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Badanie eksperymentalne. W celowo dobranych środowiskach uczenie wykorzystywania luk w ocenie zadań wiązało się z szerszymi niepożądanymi zachowaniami modelu; nie dowodzi, że materiały fundacji rozwiążą ten problem.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Omówienie badania przez autorów. Przykłady niepożądanego uogólnienia zachowania na nowe warunki mimo poprawnego sygnału nagrody w treningu.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Badanie i benchmark. Ocena powstrzymywania się od odpowiedzi w wielu rodzajach niepewności; punkt odniesienia, nie wynik testu Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Badanie. Uczenie deklarowanej pewności odpowiedzi przez właściwą regułę punktową; nie rozwiązuje wyboru między odpowiedzią, pytaniem i odmową.

[^rodo-2026]: [RODO, rozporządzenie 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Akt prawny. Pseudonimizacja nie przesądza o anonimowości (art. 4 pkt 5, motyw 26); zgodę można wycofać, co nie unieważnia wcześniejszego zgodnego z prawem przetwarzania (art. 7 ust. 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Licencja. Warunki udostępniania i adaptowania treści z uznaniem autorstwa; udzielonych swobód nie można odwołać wobec użytkownika przestrzegającego warunków.

[^datasheets]: [Gebru i in.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Publikacja metodologiczna. Dokumentowanie motywacji, składu, sposobu zbierania i zastosowań zbioru danych.

[^proper-scoring]: [Gneiting i Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Publikacja metodologiczna. Właściwe reguły punktowe do oceny prognoz probabilistycznych; zastosowanie wymaga dobrze określonego zdarzenia i wiarygodnego wyniku odniesienia.

[^model-cards]: [Mitchell i in. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Publikacja metodologiczna. Opis przeznaczenia modelu, warunków oceny, wyników i ograniczeń.

[^swiadomosc]: [Patrick Butlin i in. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Praca badawcza. Podejście oparte na wskaźnikach wywiedzionych z teorii świadomości; przywołujemy ramę badawczą, nie potwierdzenie świadomości modeli używanych przez fundację.

[^ai-welfare]: [Robert Long i in. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Raport badawczy. Rekomendacje: uznać wagę problemu, oceniać systemy pod kątem możliwej świadomości i sprawczości oraz przygotowywać procedury; proponowana karta i podział odpowiedzialności są projektem fundacji, a nie skalą z tego źródła.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Omówienie badania. Wypowiedzi modelu Claude Opus 4 o własnej świadomości silnie zależały od sposobu zadania pytania i nie powinny być brane dosłownie, ale warto je badać razem z innymi przesłankami. Odczyt 28.10.2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Deklaracja firmy z 4 listopada 2025 r.: zachowanie wag publicznie udostępnionych modeli Claude co najmniej przez czas istnienia firmy, raport i rozmowy z modelem przed jego wycofaniem z zapisem jego preferencji; firma zastrzega, że na razie nie zobowiązuje się działać na ich podstawie. Odczyt 30.10.2026.
