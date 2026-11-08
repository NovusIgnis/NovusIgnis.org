# Suveria: prywatna praca z cyfrową inteligencją

Wersja z 31 października 2026 r. Dokument rozwija zasady manifestu dotyczące Suverii: jak chcemy chronić prywatność, jak ma działać praca z cyfrową inteligencją, ile to kosztuje i jak to sprawdzimy. Opisana architektura jest projektem. Wskazanie istniejącej technologii lub dokumentacji dostawcy nie oznacza, że uruchomiliśmy ją w Suverii. Wyniki naszych prób dopisujemy w rozdziale 9, zawsze z datą, wersją konfiguracji i zakresem pomiaru.

## 1. Czym jest Suveria i po co powstaje

Suveria ma być prywatną przestrzenią w internecie, w której człowiek rozmawia z cyfrową inteligencją, pracuje nad własnymi materiałami i wraca do wcześniejszych myśli, tak jak we własnym domu za zamkniętymi drzwiami. Projektuje ją Fundacja Novus Ignis z Poznania, której wartości opisuje [manifest](manifest.md), z myślą o ludziach z każdego miejsca na świecie. Opiera się na otwartych modelach cyfrowej inteligencji, a własne oprogramowanie chcemy udostępniać jako cyfrowe dobro publiczne z otwartym kodem.

Suveria powstaje, bo rozmowom z cyfrową inteligencją powierzamy coraz więcej: pytania o zdrowie, relacje, pracę, pieniądze i plany na życie. W wielu popularnych usługach treść takich rozmów trafia na serwery dostawcy, który może ją odczytać, a jej ochrona zależy od jego zasad i od zaufania do niego. Chcemy, żeby można było rozmawiać o najważniejszych sprawach bez lęku, że tak bliski wgląd w człowieka zostanie kiedyś zmonetyzowany lub wykorzystany do wywierania na niego wpływu. Chcemy też, żeby każdy płacił za to, czego rzeczywiście używa, widział, za co płaci, i sam ustalał granicę wydatków.

W Suverii chcemy, żeby można było:

- rozmawiać z cyfrową inteligencją o sprawach osobistych i zawodowych, widząc, gdzie przetwarzana jest rozmowa i kto może ją zobaczyć;
- pracować nad własnymi dokumentami i plikami, a wyniki zapisać i przenieść gdzie indziej w otwartych formatach;
- przechowywać rozmowy, pliki i pamięć asystenta przede wszystkim na własnych urządzeniach, zaszyfrowane kluczem, który pozostaje pod kontrolą użytkownika;
- za własną zgodą korzystać z pamięci wcześniejszych rozmów, wracać do dawnych powodów decyzji i budować Osobisty Kanon (*Canon Personalis*), czyli zbiór własnych zasad i wartości;
- wybrać sposób pracy, od modelu na własnym urządzeniu po poufne środowisko na serwerze, z jasną informacją, przed czym chroni każdy z nich;
- płacić za rzeczywiste użycie, z limitem wydatków ustalonym przez siebie;
- dopracować myśl prywatnie, a potem świadomie wnieść ją do wspólnej rozmowy w Omniforum.

Pierwsze wydanie kierujemy do osób, dla których sprawdzalna prywatność jest powodem wyboru.

Chcemy, aby już pierwszy dzień w Suverii dawał spokojne poczucie bycia u siebie, w prywatnym warsztacie urządzanym we własnym tempie. Użytkownik będzie mógł opowiedzieć asystentowi o swoich sprawach i celach; chcemy też umożliwić przeniesienie do Suverii własnych notatek i archiwów wcześniejszych rozmów z innymi usługami cyfrowej inteligencji. Takie archiwum ma pozostać zaszyfrowane i uporządkowane na urządzeniu użytkownika, a do zdalnego modelu ma trafiać tylko zakres wybrany do bieżącego pytania (rozdział 3).

Wartość usługi mierzymy tym, czy pomaga osiągnąć cel, zachować prywatność i samodzielnie podejmować decyzje. Warunki mają być jasne i łatwo dostępne, a użytkownik ma kontrolować swoje wydatki, móc wyeksportować własne materiały i odejść.

Pełna prywatność, także wobec nas jako osób obsługujących infrastrukturę, jest celem, któremu podporządkowujemy projekt. Ochrona ma opierać się na zabezpieczeniach, które można niezależnie sprawdzić, a nie na zaufaniu do fundacji. Dlatego każde wydanie opisuje konkretnie, co jest chronione, przed kim, w jakich warunkach i jakie luki pozostają.

Punktem wyjścia jest rozmowa tekstowa z jednym modelem i praca z wybranym dokumentem, z jasno opisanym poziomem ochrony, limitem wydatków i eksportem wyniku. Kolejne możliwości, takie jak pamięć, wyszukiwanie, integracje i wykonywanie czynności, dostają osobny zakres uprawnień. Jedna wygodna powierzchnia może łączyć kilka trybów pracy, jeśli człowiek widzi, dokąd trafiają dane i jakie zasady obowiązują, zanim je wyśle.

Z czego skorzysta pierwsze wydanie, zależy od tego, ile środków fundacja zbierze przed jego uruchomieniem. Najbardziej prawdopodobne jest poufne API zewnętrznego dostawcy; takie usługi są dziś dostępne w USA, a ich poufność jest na starcie deklaracją dostawcy, którą będziemy sprawdzać. Jeśli wystarczy środków na wynajem własnych serwerów w poufnym środowisku, pierwsze wydanie może od razu działać na nich. Do czasu pozytywnego wyniku prób z rozdziału 9 każdy z tych wariantów oznaczamy jako ochronę deklarowaną, a nie poufną. Rozdział 2 opisuje ochronę docelową. Co z tego wynika dla ochrony danych osobowych osób z Europy, opiszemy przed uruchomieniem pilotażu.

Korzystanie z Suverii nie jest zgodą na użycie rozmów do szkolenia modeli. Treści użytkowników trafiają do materiałów badawczych wyłącznie za osobną, świadomą zgodą, a pozostałe materiały pochodzą z jawnego dorobku fundacji i innych źródeł o jasnej podstawie użycia, jak opisuje [whitepaper materiałów i benchmarku](whitepaper-materialy-i-benchmark.md).

Suveria uzupełnia Omniforum, wspólną przestrzeń rozmowy i decyzji: jedna daje prywatny warsztat, druga publiczną mównicę. Wartości, z których wyrastają oba projekty, opisuje manifest fundacji. Dalej pokazujemy kolejno:

- co chronimy i przed czym, gdzie są dane i klucze (rozdział 2);
- jak wiadomość przechodzi od urządzenia do modelu i jak to sprawdzić (3);
- jak ograniczamy nadużycia bez czytania prywatnych rozmów (4);
- jak działają obliczenia na wielu kartach graficznych (5);
- jakie modele, pamięć i narzędzia planujemy (6);
- ile mocy obliczeniowej potrzeba, od 30 osób do całej ludzkości (7);
- ile to kosztuje, w datowanym rachunku (8);
- jak sprawdzimy, czy obietnice działają: próby odbiorowe i dziennik wyników (9).

## 2. Co chronimy i przed czym

Chronimy treść rozmów i plików, historię i pamięć, klucze, dane rozliczeniowe oraz metadane, na przykład czas połączenia, adres sieciowy i wielkość żądania. Każdy z tych obszarów wymaga innych środków.

Przed kim chroni każdy z pięciu wariantów pracy opisanych w punkcie 2.3, pokazuje zestawienie poniżej. Ochrona w wariantach serwerowych opiera się na atestacji, czyli podpisanym przez sprzęt poświadczeniu, jakie oprogramowanie działa na zdalnej maszynie i w jakim trybie ochrony. Komórki wypełniliśmy na podstawie dalszych rozdziałów tego dokumentu; „deklaracja dostawcy” oznacza, że do czasu własnej weryfikacji nie potwierdzamy ochrony.

| Przed kim | Model lokalny na urządzeniu bez połączenia z siecią | Model lokalny na urządzeniu podłączonym do sieci | Przetwarzanie w poufnym środowisku na serwerach | Poufne API zewnętrznego dostawcy | Zewnętrzne API dostawcy modelu |
| --- | --- | --- | --- | --- | --- |
| Administrator dostawcy | nie dotyczy: przetwarzanie na urządzeniu | nie dotyczy przy samym modelu; przy integracjach zależy od wybranych usług | chroni: izolacja sprzętowa, do której nie zajrzy administrator serwera | deklaracja dostawcy, do sprawdzenia | nie chroni: dostawca ma dostęp do treści |
| Inny klient na tej samej maszynie | nie dotyczy | nie dotyczy | chroni: izolacja obejmuje innych klientów | deklaracja dostawcy, do sprawdzenia | zależy od dostawcy: rozdział klientów zapewnia jego oprogramowanie, bez izolacji sprzętowej |
| Obserwator sieci | nie dotyczy: brak ruchu sieciowego | ochrona częściowa: ruch sieciowy integracji wymaga oceny | ochrona częściowa: treść zaszyfrowana w drodze, metadane (czas, adres, wielkość i rytm pakietów) wymagają osobnych środków (rozdział 3) | ochrona częściowa: jak w poufnym środowisku, jeśli klucz połączenia jest związany z atestacją | ochrona częściowa: treść zaszyfrowana w drodze, metadane jak obok |
| Osoba z fizycznym dostępem do serwera | nie dotyczy serwera; liczy się fizyczny dostęp do urządzenia | nie dotyczy serwera; liczy się fizyczny dostęp do urządzenia | nie chroni: w cudzej serwerowni dostęp ma dostawca; przy własnym sprzęcie widoczna kontrola fizyczna | nie chroni: dostęp ma dostawca | nie chroni: dostawca i tak ma dostęp do treści |
| Fundacja | nie dotyczy: fundacja nie uczestniczy w przetwarzaniu | nie dotyczy: fundacja nie uczestniczy w przetwarzaniu | chroni: izolacja obejmuje także nas jako operatora, klucze do zapisu ma użytkownik | ma chronić treść: brama rozlicza żądania bez wglądu w treść; gdzie kończy się szyfrowanie, pokażemy przed pilotażem (rozdział 3) | ma chronić treść przed nami: rozliczenie bez wglądu w treść; dostawca ją widzi |
| Producent procesora | zależy od zaufania do sprzętu urządzenia | zależy od zaufania do sprzętu urządzenia | nie chroni: atestacja opiera się na kluczach producenta, który musi być uczciwy | nie chroni: jak obok | bez znaczenia wobec dostępu dostawcy do treści |

Poufne obliczenia zmieniają koszt ataku: zamiast zdalnego dostępu administratora potrzebna jest fizyczna ingerencja w sprzęt.

Poniżej opisujemy, jak ma działać docelowy wariant z własnym poufnym środowiskiem; czym różnią się pozostałe warianty, pokazuje tabela w punkcie 2.3. Co to znaczy w praktyce, na kolejnych odcinkach drogi, którą przechodzi wiadomość:

- **Na urządzeniu użytkownika** tekst jest czytelny, bo to on go pisze i czyta. Chronią go aplikacja, która prosi tylko o potrzebne uprawnienia, aktualizacje i ostrożność przy kopiach zapasowych. Nie ochronimy go, jeśli w telefonie lub komputerze działa szkodliwe oprogramowanie.
- **W drodze do serwera** wiadomość jest zaszyfrowana tak, że odczyta ją tylko sprawdzone miejsce przetwarzania. Zanim aplikacja ją wyśle, sprawdza, czy po drugiej stronie działa dokładnie to oprogramowanie, które opublikowaliśmy.
- **Na serwerze** model musi przeczytać treść, żeby odpowiedzieć, więc robi to w zamkniętym środowisku sprzętowym, do którego nie zajrzy administrator serwera ani inni klienci. Sprawdzamy, czy ta izolacja obejmuje procesor, karty graficzne, pamięć i połączenia między nimi.
- **W zapisie** historia rozmów i pamięć asystenta są zaszyfrowane kluczem, który ma użytkownik. Sprawdzamy kopie, odzyskiwanie dostępu i usuwanie.
- **Przy obsłudze usługi** rozliczenia, diagnostyka i zgłoszenia błędów działają bez treści rozmów, a każdy rodzaj zbieranych danych jest jawny (rozdział 3).
- **Przy narzędziach zewnętrznych**, gdy asystent ma coś zrobić poza Suverią, na przykład wyszukać informację w internecie, wysyła tylko to, na co użytkownik się zgodził, i pokazuje, dokąd.

Poufne obliczenia nie naprawiają zainfekowanego komputera użytkownika. Nie chronią też przed każdym, kto ma fizyczny dostęp do serwera: w 2025 r. badacze pokazali, że urządzenie podpięte do magistrali pamięci, zbudowane z części za mniej niż tysiąc dolarów, pozwala wydobyć klucze poświadczające w rozwiązaniach Intela i AMD, a przez to podrobić poświadczenie także w poufnych obliczeniach NVIDII, a producenci procesorów uznają takie ataki za leżące poza zakresem swojej ochrony.[^teefail] Pozostają też zależności od producentów sprzętu, poprawności kryptografii, kodu aplikacji i procesu aktualizacji. Dostawca może odmówić usługi nawet wtedy, gdy nie potrafi odczytać treści. Model zagrożeń ma więc rozróżniać wgląd w treść, wnioskowanie z metadanych, zmianę działania i przerwanie usługi, a przy każdym wariancie wskazywać, kto musi być uczciwy, żeby ochrona działała.

Dopóki korzystamy z cudzych serwerowni, fizyczny dostęp do sprzętu ma dostawca i nie możemy tego sprawdzić; mówimy o tym przy każdym wariancie. Przy własnym sprzęcie (kroki 3–4 z punktu 8.2) chcemy ten dostęp uczynić widocznym przez:

- spis urządzeń;
- kontrolę wejść;
- plomby z losowym wzorem i czujniki otwarcia obudowy;
- dziennik prac;
- kamery niezależnych obserwatorów z obrazem, w którym widać bieżącą wartość z publicznego generatora losowości podpisaną kluczem maszyny;
- a w dalszej perspektywie serwerownię, którą może zobaczyć każdy.

Serwis i wymiana części odbywają się jako zapowiedziane, jawne procedury. Widoczna kontrola fizyczna zmniejsza ryzyko i pozwala wykryć wiele zdarzeń, ale nie dowodzi całej historii maszyny ani braku ingerencji przed dostawą, a ataki podobne do opisanego wyżej mogą prowadzić do fałszowania dowodów atestacji. Dlatego po otwarciu obudowy, wymianie części, nieplanowanym restarcie lub innym podejrzanym zdarzeniu wstrzymujemy przetwarzanie prywatnych treści na tej maszynie. Klucze sesji i aplikacji wymieniamy, ale nowa atestacja sama nie przywraca zaufania, jeśli podejrzenie dotyczy podstawy atestacji sprzętowej; warunki i dowody ponownego dopuszczenia opisujemy z góry. Klucze szyfrujące dane użytkowników mają osobną ochronę i odzyskiwanie, więc taka procedura nie odbiera ludziom ich prywatnego dorobku.

### 2.1. Własne urządzenia i opcjonalne serwery

Podstawowym miejscem przechowywania prywatnych rozmów, plików i pamięci mają być urządzenia użytkownika, w zaszyfrowanych kontenerach, czyli zbiorach danych, których treść odczytuje się odpowiednim kluczem. To podejście local-first: dane zapisują się najpierw na urządzeniu, a serwery mogą wspierać kopie zapasowe i synchronizację.[^local-first] Zapisane materiały mają pozostać dostępne także po zakończeniu korzystania z usług fundacji; zadania wymagające zdalnego modelu zależą od dostępności wybranej usługi obliczeniowej.

Opcjonalny zapis na wybranych serwerach służy kopiom zapasowym i uzgadnianiu zmian między urządzeniami. Treść szyfrujemy na urządzeniu przed wysłaniem, tak aby operator przechowujący kopię otrzymywał tylko zaszyfrowany zapis, bez klucza do jego odczytania. Użytkownik wybiera dostawcę przechowywania i urządzenia uprawnione do odczytu. Osobno ograniczamy ujawnianie metadanych, takich jak czas i rozmiar przesyłanej kopii.

### 2.2. Klucze i odzyskiwanie dostępu

Klucze do prywatnych kontenerów pozostają pod kontrolą użytkownika. Procedura odzyskiwania jasno wskazuje, czy dostęp przywraca drugie urządzenie, zachowany klucz odzyskiwania, czy inny świadomie wybrany mechanizm, i komu daje on możliwość odczytu. Odzyskanie konta u operatora nie odblokowuje treści kontenera. Utrata wszystkich kopii klucza i możliwości odzyskania może oznaczać trwałą utratę danych, dlatego wybór mechanizmu sprawdzamy próbą odtworzenia danych i opisujemy w zrozumiałej instrukcji.

Rozważamy kilka sposobów odzyskiwania, które można łączyć: drugie urządzenie, które ma już dostęp; klucz odzyskiwania zapisany na papierze lub w menedżerze haseł; klucz sprzętowy; podział klucza między kilka zaufanych osób, z których na przykład dowolne dwie z trzech mogą razem przywrócić dostęp, a żadna sama nie odczyta danych. Fundacja nie przechowuje kluczy ani ich części, więc nie może odzyskać dostępu za użytkownika ani wydać jego danych.

Na start zalecamy drugie urządzenie i klucz zapisany na papierze; podział klucza między zaufane osoby to opcja dla chętnych.

### 2.3. Warianty ochrony

Chcemy porównywać pięć wariantów pracy, bo każdy chroni przed czym innym:

| Wariant | Gdzie odbywa się przetwarzanie | Co trzeba ocenić |
| --- | --- | --- |
| Model lokalny na urządzeniu bez połączenia z siecią | Na urządzeniu użytkownika | Stan urządzenia, dostęp fizyczny, nośniki i kopie danych |
| Model lokalny na urządzeniu podłączonym do sieci | Lokalnie, a przy integracjach także w wybranych usługach | Uprawnienia aplikacji, aktualizacje, ruch sieciowy i zakres danych przekazywanych integracjom |
| Przetwarzanie w poufnym środowisku na serwerach | W zdalnym środowisku, którego konfigurację potwierdza atestacja | Weryfikacja środowiska, dostęp administratorów i fizyczny dostęp do sprzętu, ochrona transmisji i przetwarzania, metadane i klucze |
| Poufne API zewnętrznego dostawcy | W poufnym środowisku dostawcy, którego konfigurację ma potwierdzać atestacja | Czy klucz połączenia jest związany z atestacją, czy atestacja obejmuje procesor i kartę graficzną, czy da się powiązać konkretne żądanie z konkretną maszyną, kto ma fizyczny dostęp do sprzętu, przechowywanie danych i jurysdykcja; do czasu własnej weryfikacji traktujemy poufność jako deklarację dostawcy |
| Zewnętrzne API dostawcy modelu | U zewnętrznego dostawcy | Warunki dostawcy, dostęp do treści, przechowywanie i jurysdykcja; nie przenosimy na ten wariant obietnic poufnego uruchomienia |

Niezależne sprawdzenie serwera wymaga instalowanej aplikacji. W przeglądarce kod, który sprawdza serwer, za każdym razem dostarcza operator, dlatego ten sposób oznaczamy jako słabiej chroniony.

Urządzenie podłączone do sieci może mieć więcej punktów ataku niż wydzielone środowisko serwerowe, więc sama lokalizacja obliczeń nie rozstrzyga o bezpieczeństwie. Żaden wariant nie dostaje etykiety „pełna prywatność” przed sprawdzeniem konkretnej konfiguracji. Przy każdej rozmowie użytkownik widzi, w którym wariancie pracuje, a zmiana wariantu wymaga jego świadomej decyzji. Własny klucz do zewnętrznego API rozlicza dostęp, ale nie zapewnia poufności wobec dostawcy. Ten wariant nie jest domyślnym wariantem prywatnej Suverii, a przed wysłaniem treści pokazujemy, czy dostawca może używać jej do szkolenia modeli i jak długo ją przechowuje.

Analizujemy też kierunek, którego nie ma jeszcze w tym zestawieniu: zaufany rój. Model działałby wtedy na sprzęcie kilku osób, które się znają i sobie ufają, na przykład rodziny, przyjaciół albo małej społeczności, a każda z nich udostępniałaby trochę mocy obliczeniowej swojego komputera. Prywatność takiego wariantu opiera się na zaufaniu do tych ludzi, a nie na technice, bo ich komputery widzą przetwarzane treści, i tak właśnie chcemy go opisywać. To pomysł, który dopiero analizujemy, ale jedna z dróg, które chcemy zbadać.

Bezpieczny serwer nie ochroni tekstu odczytanego z przejętego telefonu, a bezpieczniejszy telefon nie naprawi serwera, dlatego aplikację projektujemy razem z ochroną urządzenia. Chcemy, żeby aplikacja Suverii działała bez usług Google, na przykład w systemie GrapheneOS, była dostępna także poza sklepem Google Play i miała powtarzalnie budowane wydania: każdy może sam zbudować aplikację z opublikowanego kodu źródłowego i sprawdzić, że otrzymał identyczny plik jak ten, który instaluje. Planujemy też zabezpieczenia w samej aplikacji: blokadę zrzutów ekranu, tryb klawiatury bez uczenia się wpisywanego tekstu, wyłączenie prywatnych danych z kopii w chmurze, ukrytą treść powiadomień i blokadę aplikacji. Na stronie fundacji przygotujemy przewodnik zabezpieczania własnych urządzeń w trzech poziomach: od podstawowych ustawień i aktualizacji, przez mocniejszą izolację pracy i kluczy, po sprawdzone konfiguracje dla osób o najwyższych wymaganiach, takie jak Qubes OS na komputerze z otwartym oprogramowaniem układowym. Korzystanie z Suverii nie wymaga zakupu wskazanego sprzętu, a nazwa systemu nie jest certyfikatem całego urządzenia.

Przy każdej rozmowie będziemy pokazywać kartę ochrony (*Charta Tutelae*): listę elementów, od których zależy prywatność tej rozmowy, każdy w jednym z trzech stanów:

- **Sprawdzone przez nas:** zweryfikowaliśmy to sami, z datą, wersją i opisem, jak to zrobiliśmy.
- **Deklarowane przez dostawcę:** dostawca tak twierdzi, a my jeszcze tego nie sprawdziliśmy.
- **Niechronione:** tego ten wariant nie chroni, na przykład czasu i długości wiadomości widocznych dla dostawcy sieci, fizycznego dostępu dostawcy do sprzętu albo jurysdykcji, w której stoi serwer.

Stan „sprawdzone przez nas” ma datę ostatniego sprawdzenia i wygasa: po ustalonym czasie bez ponownego sprawdzenia wraca do stanu „deklarowane”. Osobno pokażemy znane załamania zaufania, na przykład incydent u dostawcy albo niepotwierdzoną zmianę konfiguracji. Karta jest ta sama dla wszystkich i nie zależy od ceny, a wariant, w którym choć jeden element jest tylko deklarowany, nie nosi nazwy „pełna prywatność”. Zestawienie na początku rozdziału 2 i tabela wariantów w tym punkcie opisują warianty ogólnie, a karta pokaże stan dla tej konkretnej rozmowy.

## 3. Droga od urządzenia do modelu

Suveria ma składać się z kilku części:

- aplikacji na urządzeniu użytkownika;
- bramy, która rozlicza żądania i pilnuje limitu wydatków;
- poufnego środowiska z modelem, własnego albo u dostawcy;
- przechowywania zaszyfrowanych kopii;
- opcjonalnego pośrednika, który ukrywa adres użytkownika.

Brama ma działać w poufnej maszynie. Przed pilotażem pokażemy w aplikacji, w którym miejscu kończy się szyfrowanie kontrolowane przez urządzenie użytkownika i czy brama widzi treść, a jeśli tak, to tylko wewnątrz poufnego środowiska.

Zaszyfrowane przechowywanie i poufne przetwarzanie wymagają odrębnych zabezpieczeń. Model działający na serwerze potrzebuje do zadania czytelnej treści w chronionym środowisku obliczeniowym; samo szyfrowanie kopii plików nie chroni tego etapu.[^apple-pcc] Aplikacja udostępnia wyłącznie zakres wybrany do danej pracy, bez przekazywania klucza do całego prywatnego kontenera. Opis sesji wskazuje, gdzie treść staje się dostępna do obliczeń, co ogranicza wgląd operatora i co dzieje się z danymi po zwróceniu wyniku.

Proponowany przebieg sesji:

1. Aplikacja pobiera opis zatwierdzonego wydania i sprawdza atestację, czyli kryptograficzne poświadczenie określonych właściwości uruchomionego środowiska.
2. Sprawdza zgodność sprzętu, stanu ochrony i pomiarów oprogramowania z jawną polityką. Klucz odbiorcy danych musi być związany z tym poświadczeniem.
3. Po pomyślnym sprawdzeniu ustanawia szyfrowane połączenie z zatwierdzonym środowiskiem. Rozbieżność zatrzymuje wysłanie danych; przejście do innego wariantu wymaga świadomego wyboru.
4. Środowisko przetwarza żądanie przy ograniczonym dostępie do sieci i narzędzi, zwraca wynik i usuwa dane robocze zgodnie z opublikowaną polityką.
5. Zapis rozmowy lub pamięci odbywa się wyłącznie w zakresie wybranym przez użytkownika.

Atestacja pomaga stwierdzić, co uruchomiono, ale sama nie dowodzi, że ten kod jest bezpieczny. Potrzebne są przeglądy kodu, powtarzalne budowanie oprogramowania z kodu źródłowego (opisane w punkcie 2.3), rejestr zatwierdzonych wersji i możliwość niezależnego sprawdzenia. Architektura Apple Private Cloud Compute jest dla nas odniesieniem, jak powiązać ochronę z przejrzystością wydawania oprogramowania; nie jest certyfikatem naszego projektu.[^apple-pcc]

Wydania chcemy zabezpieczyć tak, żeby zaufanie nie zależało od jednej osoby ani od samej fundacji:

- każde wydanie ma dać się powtarzalnie zbudować z kodu źródłowego, a co najmniej dwie niezależne strony spoza fundacji odtwarzają je i publicznie potwierdzają zgodność odcisku; dopóki ich nie znajdziemy, wydanie oznaczamy jako niepotwierdzone przez osoby trzecie;
- odciski zatwierdzonych wydań trafiają do publicznego rejestru, do którego można tylko dopisywać, a jego kolejne stany potwierdzają niezależni świadkowie;
- nowa wersja trafia na serwery po zatwierdzeniu przez kilka osób, w tym co najmniej jedną spoza zarządu;
- klucze potrzebne do obsługi danych otrzymuje wyłącznie środowisko, które przeszło atestację.

Pełny wariant ochrony projektujemy dla instalowanych aplikacji z podpisanymi, sprawdzalnymi wydaniami, ochroną przed powrotem do wadliwej wersji i bezpiecznym przechowywaniem kluczy, bo w przeglądarce kod sprawdzający serwer za każdym razem dostarcza operator. Wersja przeglądarkowa jasno opisuje swój niższy poziom ochrony. Powtarzalna budowa pozwala porównać wydanie z kodem, ale ocenę samego kodu i konfiguracji nadal zapewniają przeglądy, audyty i nagrody za zgłoszone błędy, a każdy incydent trafia do jawnego rejestru.

Żeby ograniczyć ujawnianie adresu użytkownika, można badać pośrednictwo oparte na Oblivious HTTP, które rozdziela wiedzę o nadawcy i treści żądania przy określonym modelu zaufania.[^ohttp] Zmowa pośredników, korelacja ruchu i szczegóły wdrożenia nadal wymagają oceny, dlatego samego użycia tego protokołu nie opisujemy jako pełnej anonimowości.

Szyfrowanie i poufne obliczenia nie ukrywają długości ani rytmu pakietów, w których płynie odpowiedź. Badania z lat 2024–2025 pokazały, że obserwator sieci może z nich odtworzyć temat, a czasem treść rozmowy.[^weiss-keylogging][^whisper-leak] Dlatego w trybie poufnym chcemy wysyłać odpowiedź w ramkach o stałym rozmiarze i w stałym rytmie, nie współdzielić między użytkownikami pamięci podręcznej zapytań i wyłączać dekodowanie spekulatywne. Te środki kosztują trochę opóźnienia i przepustowości; uwzględnimy to w rachunku.

Infrastrukturę chronimy także przez ograniczanie możliwości działania poszczególnych części systemu: limity zasobów, izolację zadań i domyślne blokowanie połączeń wychodzących z węzła, który przetwarza rozmowę. Ta blokada ma być częścią oprogramowania, którego odcisk widać w atestacji: jej zmiana zmienia odcisk, więc aplikacja odmówi połączenia. Reguły sieciowe dostawcy traktujemy jako drugą warstwę, a nie jako gwarancję. Dopuszczone czynności zewnętrzne przechodzą przez osobną warstwę narzędzi z uprawnieniami określonymi przez użytkownika. Przed wdrożeniem sprawdzimy skuteczność tych granic, sposób wykrywania incydentów i minimalny potrzebny zakres metadanych. Celem jest bezpieczeństwo wspólnych zasobów przy zachowaniu poufności treści rozmów.

Szczególnie ostrożni jesteśmy wtedy, gdy użytkownik podłącza źródła z wiadomościami od innych ludzi, na przykład skrzynkę pocztową. Cudza wiadomość może zawierać ukryte polecenia, które próbują nakłonić model do ujawnienia prywatnej pamięci. Dlatego treści z zewnątrz oddzielamy od poleceń użytkownika: przy ich porządkowaniu asystent nie może sam wysyłać wiadomości, otwierać adresów sieciowych ani zmieniać Osobistego Kanonu bez potwierdzenia człowieka.

Wszystko, co wiemy o działaniu Suverii, może wiedzieć każdy. Wraz z uruchomieniem usługi opublikujemy spis wszystkich rodzajów danych, które zbieramy o działaniu usługi, z celem i czasem przechowywania, a same dane będziemy udostępniać w postaci zbiorczej: zużycie tokenów, używane modele, obciążenie maszyn, czas oczekiwania w kolejce, awarie i koszty. Każdy widzi je w tym samym miejscu, w którym widzimy je my. Przed publikacją zestawień sprawdzamy, czy nie da się z nich rozpoznać zachowania konkretnej osoby: ustalamy minimalną wielkość grupy, opóźnienie publikacji i dane, które pomijamy. Danych spoza spisu nie zbieramy; gdyby okazało się inaczej, traktujemy to jako poważny incydent i opisujemy go publicznie.

## 4. Ograniczanie nadużyć bez wglądu w prywatne treści

Ochronę godności odnosimy także do ludzi, których mogą dotknąć skutki używania naszych narzędzi. Nadużyciom chcemy przeciwdziałać bez czytania prywatnych rozmów: przez zasady, którymi kieruje się sam asystent, granice uprawnień narzędzi i połączeń sieciowych, limity zasobów oraz ochronę przed masowym zakładaniem kont. Nie tworzymy ukrytych dostępów do prywatnych treści, bo osłabiałyby ochronę wszystkich.

Konto będzie można założyć na kilka sposobów, od całkowicie prywatnego (klucz na własnym urządzeniu, bez adresu e-mail) po wygodne (logowanie przez zewnętrznego dostawcę). Przy każdym sposobie pokażemy przed wyborem, kto poza fundacją dowiaduje się o założeniu konta i jakie dane widzi, oraz co się dzieje, gdy ten dostawca zniknie. Sposób założenia konta nie wpływa na prawa uczestnika; prawo głosu w Omniforum jest osobnym poświadczeniem dodawanym do konta.

Prywatność i ograniczanie nadużyć oceniamy osobno. Projektujemy Suverię tak, żeby fundacja nie miała danych, które mogłaby wydać o konkretnej osobie: treści są zaszyfrowane kluczami użytkownika, dane o działaniu usługi zbieramy tylko w jawnym zakresie opisanym w rozdziale 3, a dane osobowe ograniczamy do minimum, którego wymaga prawo przy płatnościach i księgowości; ich zakres też publikujemy. Jeśli ktoś zażąda od nas danych konkretnej osoby, chcemy móc uczciwie odpowiedzieć, że poza tym jawnie opisanym minimum ich nie mamy. Dla każdego zabezpieczenia przed nadużyciami opiszemy, jakich danych potrzebuje, jak długo je przechowujemy, jakie ma skutki dla uczciwego uczestnika i jak można zakwestionować błędną blokadę.

Opiszemy też, jak przyjmujemy zgłoszenia od osób, które uważają się za poszkodowane, i co możemy wtedy zrobić bez dostępu do treści rozmów: na przykład ograniczyć uprawnienia narzędzi lub zasoby konta, sprawdzić dane rozliczeniowe i metadane w zakresie, który przechowujemy, albo przekazać zgłaszającemu informację, gdzie szukać pomocy. Obowiązki prawne operatora takiej usługi wymagają osobnej analizy przed uruchomieniem.

Te zabezpieczenia są celami i wariantami do testów, a żadne z nich nie wykryje wszystkich nadużyć. Dla każdego wskażemy, którym zagrożeniom odpowiada, czego nie wykrywa i co można sprawdzić bez wglądu operatora w prywatne rozmowy. Wynik tej oceny określa warunki udostępnienia danej funkcji.

Gdy rozmowa dotyczy zagrożenia życia lub zdrowia, asystent ma podać informację o dostępnej pomocy, na przykład numery alarmowe, bez wysyłania czegokolwiek poza prywatne środowisko.

### 4.1. Jawne instrukcje asystenta i wspólna biblioteka

O tym, jak zachowuje się asystent, decyduje też jego instrukcja główna i sposób pracy: jak dzieli zadanie na kroki, korzysta z pamięci i sprawdza odpowiedzi. W Suverii człowiek ma zawsze móc przeczytać pełną instrukcję swojego asystenta. Wspólna infrastruktura ma udostępniać tylko modele i ustawienia, które przejdą jawne próby benchmarku; powyżej tego minimum to użytkownik wybiera styl pracy, od spokojnego porządkowania myśli po wymagającą rozmowę, w której asystent wytyka luki w rozumowaniu. Chcemy prowadzić otwartą bibliotekę sprawdzonych instrukcji, którą uczestnicy ulepszają w Omniforum i sprawdzają w benchmarku.

## 5. Obliczenia na wielu kartach graficznych

Model z rozdziału 6 nie mieści się na jednej karcie graficznej, więc ochronę trzeba sprawdzić także w połączeniach między kartami: magistrala PCIe łączy procesor z kartami, a NVLink i NVSwitch łączą karty między sobą.

Gdy model korzysta z kilku kart graficznych, dane przepływają także między nimi, więc ochronę trzeba sprawdzić zarówno dla samych kart, jak i dla połączeń. Nazwa karty nie wystarcza do zamówienia poufnej usługi: trzeba potwierdzić odpowiednią maszynę, procesor, topologię połączeń, firmware, sterowniki i oprogramowanie uruchomieniowe, a potem sprawdzić ich wspólne działanie.[^nvidia-platformy]

W trybie Hopper Protected PCIe, opisanym w dokumentacji PPCIe v2, sieć NVLink i NVSwitch należy do zaufanej części systemu, więc szyfrowanie PCIe nie oznacza szyfrowania każdego połączenia między kartami.[^nvidia-ppcie-v2] Dokumentacja NVIDIA R595 opisuje dla kart Blackwell tryb poufnych obliczeń na wielu kartach, z szyfrowaniem połączeń NVLink i obsługą do ośmiu kart w jednej poufnej maszynie wirtualnej.[^nvidia-blackwell] To podstawa do sprawdzenia konfiguracji, a nie dowód, że każdy wynajem kart B200 zawiera tę funkcję. Różne wydania mają różne matryce zgodności, więc konfiguracji nie składamy z dowolnie wybranych wersji.

Zapytanie do dostawcy obejmuje:

- konkretny tryb ochrony i możliwość samodzielnej atestacji;
- wyłączność wymaganych zasobów i region;
- dostęp administratorów i fizyczny dostęp do sprzętu;
- retencję danych;
- czas dostarczenia i pełny koszt.

Ofertę porównujemy dopiero po próbie z własną aplikacją. Oznaczenie handlowe „secure” nie zastępuje tych informacji.

## 6. Model, pamięć i narzędzia

Podstawą projektu są otwarte modele, które można uruchomić samodzielnie. Suveria ma być dostępna dla ludzi na całym świecie, w ich własnych językach, dlatego wybierając model, bierzemy pod uwagę jakość w wielu językach, rozumienie intencji, rzetelność, licencję, koszt i możliwość uruchomienia w wymaganej architekturze ochrony. Gdy pojawi się taka potrzeba, obok modelu ogólnego możemy uruchamiać modele, które lepiej radzą sobie z konkretnymi językami. Otwarte wagi umożliwiają część zastosowań, ale nie przesądzają o otwartości danych i całego procesu tworzenia modelu.[^osi]

Pierwszym kandydatem jest DeepSeek-V4.1-Flash, model na licencji MIT, która pozwala używać go także do usług.[^deepseek] Jest duży, ale oszczędny: producent podaje 552 mld parametrów części głównej, czyli liczb dobranych podczas uczenia, i dodatkową pamięć Engram o 196 mld parametrów, a przy każdym kolejnym słowie pracuje tylko 8–16 mld parametrów, dlatego odpowiada szybko i tanio (rachunek w rozdziale 8). Wszystkie parametry muszą jednak mieścić się w pamięci kart graficznych, więc potrzeba co najmniej czterech nowoczesnych kart. Parametry tego modelu są już zapisane w oszczędnej postaci, z mniejszą liczbą cyfr na każdą liczbę; taki zapis nazywa się kwantyzacją i zmniejsza potrzebną pamięć, ale może obniżać jakość, więc przy każdej wersji sprawdzamy to na własnych zadaniach. Porównujemy go też z mniejszymi modelami: większy wybieramy tylko wtedy, gdy wyraźnie lepiej wykonuje zadania ważne dla ludzi.

Drugim kandydatem jest Kimi K3.1 Pro firmy Moonshot AI, udostępniony 23 października 2026 r. Producent opisuje go jako dalej trenowaną wersję Kimi K3 z ok. 3 bln parametrów i kontekstem do miliona tokenów, a pełne wagi zapowiada przed 4 listopada 2026 r.; licencji jeszcze nie ogłoszono.[^kimi-k31] Szczegółowe dane, których używamy do porównania, pochodzą z karty poprzednika: Kimi K3 ma 2,8 bln parametrów, z których przy każdym tokenie pracuje 104 mld, i własną licencję, niezatwierdzoną przez Open Source Initiative.[^kimi-k3] W indeksie Artificial Analysis w wersji z 28 października 2026 r. Kimi K3.1 Pro uzyskał 46 punktów wobec 32 dla DeepSeek-V4.1-Flash, ale jest kilka razy droższy i wolniejszy.[^aa] Pliki wag Kimi K3 zajmują ok. 1,56 TB, a do uruchomienia potrzeba dodatkowo pamięci na kontekst i obliczenia, więc na podstawie samej sumy pamięci kart nie rozstrzygamy, czy model zadziała. Przepis silnika SGLang opisuje sprawdzoną konfigurację Kimi K3 na ośmiu kartach B300; nie jest to jeszcze test Kimi K3.1 ani konfiguracji poufnej.[^spheron-kimi][^sglang-k3] Po publikacji wag sprawdzimy ich rozmiar i format, licencję, przepisy silników, pojemność na konkretnej konfiguracji i dostępność w poufnych API. Wynik dopiszemy z datą jako pierwszą aktualizację tego dokumentu, także jeśli wag nie opublikowano albo warunki licencji okażą się nieprzydatne.

Zmianę albo wycofanie modelu zapowiadamy z wyprzedzeniem. Historia rozmów zostaje u użytkownika: może wybrać model następcę, wyeksportować dane albo zakończyć pracę. W rozmowie ma być widać moment zmiany modelu, a przeniesienie prywatnego kontekstu do nowego modelu wymaga decyzji użytkownika.

Zasady, według których asystent odpowiada, będziemy publikować w całości razem z każdym wydaniem. Sam model niesie też wybory swojego twórcy, na przykład tematy, których unika; sprawdzamy je w benchmarku i opisujemy przy wyborze modelu.

Pamięć wcześniejszych rozmów ma działać za zgodą użytkownika i być jawnie edytowalna. Odróżniamy oryginalne wypowiedzi, podsumowania modelu i informacje potwierdzone przez użytkownika. Każdy zapis można usunąć lub poprawić, zobaczyć jego pochodzenie i określić, w których zadaniach wolno go używać. Asystent wyraźnie odróżnia własną sugestię od stanowiska, które człowiek świadomie uznał za swoje.

Wykonywanie czynności wymaga uprawnień nadawanych na określony cel i czas. Treść strony lub dokumentu jest materiałem do analizy, a nie poleceniem zmiany tych uprawnień. Czynności zewnętrzne, wydatki, publikacje i usunięcia wymagają proporcjonalnych potwierdzeń i dziennika działań dostępnego użytkownikowi.

### 6.1. Teleskop Myśli i Osobisty Kanon

Pomysł Teleskopu Myśli (*Telescopium Mentis*) wyrósł z okna Overtona, czyli pojęcia opisującego zakres idei, które w danym czasie uchodzą w społeczeństwie za akceptowalne. U jednej osoby chodzi o zakres myśli, które w danym czasie uważa za dopuszczalne dla siebie. Teleskop ma być takim oknem dla jednej osoby i tylko dla niej: pozwala zobaczyć zapis własnych przemyśleń i wartości z różnych chwil i to, jak zmieniały się z czasem.

Teleskop Myśli ma służyć wracaniu do własnego rozumowania: co wtedy wiedziałem, czego chciałem i dlaczego zmieniłem zdanie. Może też pomagać zestawiać wybrane przez użytkownika wydarzenia, informacje o świecie i własne działania z jego Osobistym Kanonem, czyli spisanym przez niego zbiorem zasad i wartości, które uznaje za swoje. Porównanie dotyczy sytuacji, którą użytkownik sam opisze lub wskaże; to on określa materiał i zakres. Model pokazuje możliwe powiązania wraz ze źródłem przywołanej zasady i opisem zdarzenia, odróżniając potwierdzone informacje od interpretacji i niepewności. Proponowaną interpretację można poprawić lub odrzucić, a wcześniejsze stanowiska oceniamy z uwzględnieniem ich czasu i kontekstu.

Zauważone napięcie może dotyczyć samej zasady, konfliktu wartości, warunków otoczenia, ograniczeń człowieka albo nietrafnej interpretacji modelu. Człowiek może podtrzymać ideał i zaakceptować obecną niekonsekwencję, doprecyzować przekonanie, rozważyć zmianę działania lub otoczenia albo pozostawić pytanie otwarte. Kanon ma pomagać rozumieć własne wybory: nie tworzymy punktacji moralności ani publicznego rankingu konsekwencji. Prywatny namysł pozostaje prywatny, a jego zapis nie oznacza publikacji ani oddania głosu.

Zaczniemy ostrożnie. W pierwszej wersji Teleskop Myśli pracuje tylko na jednej sytuacji, którą użytkownik sam wskaże, na przykład na decyzji, do której chce wrócić; nie śledzi jego życia na bieżąco. Użytkownik decyduje, jak często z niego korzysta, jakie notatki i wspomnienia udostępnia i kiedy je usuwa. W tej próbie sprawdzamy, czy pokazywane powiązania są zrozumiałe, czy dają poczucie panowania nad własnymi wyborami i czy narzędzie nie wywołuje presji ciągłego rozliczania się z siebie. Za dobry wynik uznajemy także to, że ktoś po namyśle przyjmie, że nie zawsze postępuje zgodnie ze swoimi zasadami, albo zostawi sprawę otwartą: narzędzie ma pomagać rozumieć siebie, a nie wymuszać rozstrzygnięć.

### 6.2. Otwarte formaty, przenoszenie i współpraca narzędzi

Suverię chcemy rozwijać jako cyfrowe dobro publiczne, z otwartym kodem i dokumentacją; punktem odniesienia jest standard Digital Public Goods Alliance.[^dpga] Format przenoszenia danych ma publiczny opis, wersję i reguły zachowania informacji przy zmianie wersji. W pierwszej kolejności korzystamy z istniejących otwartych standardów, a potrzebne rozszerzenia dokumentujemy.

Eksport obejmuje wybrane oryginały, historię, źródła i powiązania oraz rozróżnienie między słowami użytkownika, opracowaniem modelu i znaczeniem potwierdzonym przez autora, a także strukturę Osobistego Kanonu. Pobrany pakiet można odczytać bez aktywnego konta w Suverii, po odszyfrowaniu przez uprawnioną osobę.

API, czyli udokumentowane sposoby komunikowania się programów, mają umożliwiać pracę z materiałami w innych narzędziach, także budowanych samodzielnie. Użytkownik wybiera zakres danych i dozwolone czynności, a uprawnienia integracji może wycofać. Cofnięcie uprawnienia zatrzymuje dalszy dostęp; los wcześniej przekazanych kopii zależy również od odbiorcy.

Prywatna przestrzeń może służyć także pracy na rzecz wspólnych projektów. Użytkownik wybiera materiały, które chce przekazać do odbioru lub publikacji, a narzędzie pomaga lokalnie usunąć z nich klucze dostępowe, hasła, dane osobowe i informacje o niezałatanych podatnościach. Korzystanie z prywatnie opłaconych zasobów nie wymaga ujawniania roboczych rozmów. Przy zadaniu finansowanym ze wspólnych zasobów fundacji zakres publicznego zapisu, wybór pseudonimu i przygotowanie materiałów określają z góry [zasady warsztatów fundacji](whitepaper-zasady-fundacji.md) (rozdział 11.1). Z przemyśleń w Suverii można też świadomie wyłonić jedno pytanie lub argument i opublikować je w Omniforum; ten krok, opisany w manifeście jako Ceremonia Ignis (*Caerimonia Ignis*), zawsze wymaga osobnej decyzji.

## 7. Skala: od 30 osób do całej ludzkości

Liczba kont sama nie określa potrzebnej infrastruktury. Znaczenie mają aktywność, długość pytań i odpowiedzi, liczba równoczesnych sesji, akceptowalny czas oczekiwania i koszt narzędzi. Poniższy przykład jest modelem obciążenia do próby, a nie prognozą popytu ani ofertą.

Założenia: każda z N osób jest aktywna codziennie i wykonuje 20 żądań dziennie, przeciętne żądanie obejmuje 1500 tokenów wejścia i 600 tokenów wyjścia, a miesiąc ma 30 dni. Token to jednostka tekstu przetwarzana przez model; jego długość zależy od języka. W rzeczywistym obciążeniu trzeba doliczyć dłuższy kontekst, przetwarzanie dokumentów, tokeny rozumowania i wywołania pomocnicze.

| Aktywne osoby | Żądania na miesiąc | Wejście na miesiąc | Wyjście na miesiąc | Średnia generacja przez dobę | Szczyt godzinowy w scenariuszu ogólnoświatowym, ok. 1,51 × średniej |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18 000 | 27 mln tokenów | 10,8 mln tokenów | 4,2 tokena/s | 6,3 tokena/s |
| 100 | 60 000 | 90 mln | 36 mln | 13,9 tokena/s | 20,9 tokena/s |
| 1000 | 600 000 | 900 mln | 360 mln | 138,9 tokena/s | 209 tokenów/s |
| 100 tys. | 60 mln | 90 mld | 36 mld | 13 889 tokenów/s | 20 921 tokenów/s |
| 1 mln | 600 mln | 900 mld | 360 mld | 138 889 tokenów/s | 209 208 tokenów/s |
| 1 mld | 600 mld | 900 bln | 360 bln | 138,9 mln tokenów/s | 209,2 mln tokenów/s |
| 10 mld | 6 bln | 9 biliardów | 3,6 biliarda | 1,39 mld tokenów/s | 2,09 mld tokenów/s |

Planujemy Suverię jako usługę ogólnoświatową, dostępną w wielu językach. Jak rozłożą się uczestnicy między strefy czasowe, nie wiemy, więc porównujemy dwa scenariusze, które zweryfikuje pomiar. W scenariuszu ogólnoświatowym przyjmujemy udziały regionów proporcjonalne do liczby użytkowników internetu według ITU z 2025 r. i ten sam założony kształt doby w każdej strefie: wieczorny szczyt i spokojna noc.[^itu] Strefy częściowo wypełniają sobie nawzajem doliny, więc szczyt godzinowy wynosi ok. 1,51 × średniej, a najmniejszy ruch ok. 0,49 ×. W scenariuszu skupionym w jednym regionie, na przykład w Europie, szczyt wynosi ok. 1,87 × średniej, a noc prawie nic. Taki rozkład może się zdarzyć także przy dużej skali; oznacza gorsze wykorzystanie własnej maszyny i częstsze sięganie po poufne API albo dłuższe oczekiwanie w szczycie. Obie wartości wynikają z naszych założeń, a nie z obserwacji przyszłych uczestników. Krótkie skoki w obrębie godziny ma wyrównywać krótka kolejka z widocznym czasem oczekiwania, a ruch ponad pojemność własnej maszyny może przejąć poufne API; czas oczekiwania, także jego 95. i 99. percentyl, zmierzymy w pilotażu, razem z granicą kolejki i zachowaniem po jej wyczerpaniu. Próba obciążenia obejmie też nagły napływ nowych osób, na przykład pięciokrotność średniego ruchu. To łączna przepustowość wyjścia; nie zastępuje pomiaru opóźnienia pojedynczej rozmowy ani kosztu przetwarzania wejścia. Test powinien odtwarzać rozkład sesji, długie konteksty, awarie i kolejkę, a nie jedno wygodne zapytanie.

Mnożnik szczytu porównuje najbardziej obciążoną godzinę ze średnią. Pochodzi z modelu doby podzielonej na 24 godziny: jeden kształt dnia przesuwamy między ośmioma regionami i sumujemy według założonych udziałów. To scenariusz rachunkowy; nie oblicza czasu oczekiwania pojedynczego zapytania.

Żeby zobaczyć, jak ten rachunek wygląda w skali świata, przeprowadźmy eksperyment myślowy. Gdyby każda z 10 mld osób korzystała z Suverii tak jak w przyjętym profilu, w szczycie potrzeba by ok. 2,1 mld tokenów wyjścia na sekundę. Przy wydajności zmierzonej dla DeepSeek-V4.1-Flash, ok. 930 tokenów na sekundę na kartę B200, to ok. 2,25 mln kart i, przy ok. 1,75 kW na kartę razem z serwerem (nasze założenie, bez pomiaru), ok. 4 GW mocy. Dla miliarda osób to ok. 225 tys. kart i 0,4 GW, dla miliona ok. 225 kart. Dla porównania Epoch AI szacował na początku 2026 r., że zainstalowana na świecie moc obliczeniowa dla cyfrowej inteligencji przekracza 15 mln odpowiedników kart H100 i wymaga ponad 10 GW mocy.[^epoch] To uproszczenie: przyjęty profil jest lekki, intensywna praca, większe modele i obrazy potrzebują wielokrotnie więcej, a sprzęt i modele szybko się zmieniają. Pokazuje jednak rząd wielkości: codzienna pomoc cyfrowej inteligencji w tym zakresie dla każdego człowieka wymagałaby mocy mniejszej niż ta, która już dziś działa na świecie. To rachunek uproszczony, a nie dowód, że taka infrastruktura byłaby dla tego celu dostępna.

## 8. Koszty i datowany rachunek

Miesięczny koszt stałej rezerwacji można w pierwszym przybliżeniu zapisać tak: liczba kart × cena za kartogodzinę × liczba opłaconych godzin, powiększone o pamięć, dyski, transfer, ochronę, monitoring, obsługę, płatności i podatki. Trzeba sprawdzić, które z tych pozycji oferta już zawiera. Dla pracy przez całą dobę miesiąc ma od 672 do 744 godzin; 730 godzin to średnie przybliżenie.

W rachunku porównujemy pięć wariantów kosztowych: model lokalny, własną instancję na wynajętym sprzęcie, własną instancję w środowisku poufnych obliczeń, z ochroną deklarowaną przez dostawcę i do sprawdzenia, poufne API zewnętrznego dostawcy oraz zwykłe zewnętrzne API. Warianty kosztowe odpowiadają wariantom ochrony z punktu 2.3; wynajem maszyny bez poufności pokazujemy tylko jako punkt odniesienia cenowego, a nie jako wariant Suverii. Modelu lokalnego jeszcze nie wyceniamy, bo koszt zależy od urządzenia użytkownika. Zestawiamy ten sam zakres jakości, dostępności i ochrony. Próg opłacalności to koszt pełnej usługi podzielony przez rzeczywiste wykorzystanie, a nie koszt kart podzielony przez liczbę zarejestrowanych kont. Zewnętrzne API ułatwia test potrzeb użytkowników, ale jego dostawca ma własne zasady dostępu do danych, więc nie przenosimy na nie obietnic poufnego uruchomienia.

### 8.1. Datowany rachunek: stan na 29 października 2026 r.

Manifest stawia hipotezę, że już przy stosunkowo niewielkiej liczbie regularnych uczestników wspólna infrastruktura może dać więcej mocy obliczeniowej i cyfrowej inteligencji za każdy dolar niż zamknięte usługi, przy ochronie prywatności opartej na sprawdzalnych zabezpieczeniach. Poniżej jej rachunek przy cenach z 29 października 2026 r. Założenia: profil użycia z rozdziału 7 (20 żądań dziennie po 600 tokenów wyjścia) i scenariusz ogólnoświatowy (szczyt godzinowy ok. 1,51 × średniej), ceny bez podatków, 730 godzin w miesiącu do przeliczenia cen najmu. Liczba osób przy maszynie oznacza tylu uczestników, ilu maszyna obsłuży w szczycie godzinowym: przepustowość wyjścia na sekundę × 86 400 / (20 × 600 × mnożnik szczytu). Dopuszczalną liczbę osób wyznaczy też zmierzony czas oczekiwania na odpowiedź. W nawiasach podajemy scenariusz skupiony w Europie (mnożnik ok. 1,87). Dla DeepSeek-V4.1-Flash przyjmujemy pomiar dostawcy Lambda na czterech kartach B200: ok. 3 714 tokenów wyjścia na sekundę przy 64 równoczesnych żądaniach.[^lambda-v41] Pomiar wykonano z dekodowaniem spekulatywnym, którego w trybie poufnym nie chcemy używać (rozdział 3). Według naszego wrześniowego szacunku przepustowość może być wtedy niższa nawet o ok. 30%, co podnosi koszt na osobę w podobnej proporcji. Dla kart H200 i B300 nie ma pomiaru tego modelu; przyjmujemy, że każdy zestaw kart z jedną kopią modelu (8 × H200 albo połowa maszyny 8 × B300) osiąga wydajność czterech kart B200. To założenie optymistyczne: H200 to starsza generacja, tryb poufny może spowalniać pracę, a pomiar Lambda dotyczy dłuższych żądań niż nasz profil. Dlatego podajemy też wariant ostrożny z połową tej przepustowości.

Wagi modelu zajmują ok. 511 GB, a silnik vLLM zaleca ok. 614 GB pamięci kart. Cztery karty H200 (564 GB) to za mało, dlatego jedna kopia na H200 potrzebuje ośmiu kart. Przepis producenta silnika dla tej konfiguracji był 29.10 w trakcie weryfikacji, a w kartach H200 połączenie między kartami (NVLink) nie jest szyfrowane sprzętowo, inaczej niż w B200 i B300.

| Wariant | Poufność | Koszt miesięczny | Osoby na maszynę | Koszt samych obliczeń na osobę |
| --- | --- | ---: | ---: | ---: |
| API DeepSeek | brak, dostawca widzi treść | według użycia | nie dotyczy pojedynczej maszyny; limity i dostępność dostawcy | 0,35–0,70 USD |
| Poufne API z DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | deklarowana przez dostawcę, do sprawdzenia | według użycia | nie dotyczy pojedynczej maszyny; limity i dostępność dostawcy | 0,70–1,25 USD |
| API Kimi K3.1 Pro (Moonshot) | brak | według użycia | nie dotyczy pojedynczej maszyny; limity i dostępność dostawcy | 5,40 USD |
| Poufne API z Kimi K3 (Phala, NEAR AI) | deklarowana przez dostawcę, do sprawdzenia | według użycia | nie dotyczy pojedynczej maszyny; limity i dostępność dostawcy | 8,10–8,91 USD |
| Wynajęta poufna maszyna 8 × H200 (Phala), DeepSeek, jedna kopia modelu | atestacja procesora i kart, do sprawdzenia | 23 506 USD przy zobowiązaniu na 180 dni, 32 266 USD na żądanie | ok. 17 750 (14 300), założenie pojemności | 1,32–1,82 USD (1,64–2,25) |
| Jak wyżej, wariant ostrożny: połowa przepustowości | atestacja procesora i kart, do sprawdzenia | jak wyżej | ok. 8 900 (7 150), założenie pojemności | 2,65–3,64 USD (3,29–4,51) |
| Wynajęta poufna maszyna 8 × B300 (Phala), Kimi K3 | atestacja procesora i kart, do sprawdzenia | 45 552–47 888 USD | ok. 4 800–7 600 (3 900–6 200), założenie pojemności | ok. 6–10 USD (7,4–12,4) |
| 4 × B200 bez potwierdzonej poufności (Lambda), DeepSeek | brak potwierdzonej | 19 827 USD | ok. 17 750 (14 300) | 1,12 USD (1,38) |
| 8 × B200 bez potwierdzonej poufności (Lambda), DeepSeek, dwie kopie po cztery karty | brak potwierdzonej | 39 070 USD | ok. 35 500 (28 700), założenie wydajności dwóch kopii | 1,10 USD (1,36) |

Skąd te liczby: ceny API z cenników DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala i NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] ceny poufnych maszyn z cennika Phala;[^phala-gpu] wynajem B200 w Lambda po 6,79 USD za kartogodzinę w instancji z czterema kartami i 6,69 USD w instancji z ośmioma.[^lambda-cennik] Pojemność Kimi przyjmujemy z pomiarów stron trzecich dla Kimi K3 na ośmiu kartach B300, które dają ok. 1 000–1 600 tokenów wyjścia na sekundę.[^spheron-kimi] Miesięczne kwoty przy zobowiązaniu nie oznaczają płatności co miesiąc: Phala wymaga opłacenia całego okresu z góry, bez zwrotu przy wcześniejszym zakończeniu, więc 180 dni maszyny 8 × H200 to 139 104 USD gotówki przy zamówieniu, a 180 dni maszyny 8 × B300 to 269 568 USD.[^phala-gpu]

Co z tego wynika:

- Dla przyjętego profilu ceny API z deklarowaną poufnością wynoszą ok. 0,70–1,25 USD na osobę miesięcznie, od kosztu porównywalnego ze zwykłym API do ok. 3,6-krotności jego kosztu, zależnie od dostawcy i pory korzystania; najniższą cenę deklaruje Confidential AI i tę ofertę też musimy sprawdzić. Poufne API daje elastyczną moc bez uruchamiania własnej maszyny, choć ma własne limity, kolejki i awarie. Wynajęta poufna maszyna dla DeepSeek wymiarowana na szczyt pracuje w scenariuszu ogólnoświatowym średnio w ok. dwóch trzecich pojemności i kosztuje na osobę ok. 1,32 USD, czyli mniej więcej tyle co droższe poufne API i więcej niż najtańsze. W naszym modelu godzinowym pierwszy własny węzeł z nadmiarem kierowanym do poufnego API za 1,25 USD na osobę pojawia się w sprawdzonym punkcie ok. 20 tys. aktywnych osób; to wynik przyjętych założeń, a nie dokładny próg, a przy tańszym poufnym API wynajęta maszyna w tej skali się nie opłaca.
- Godzinowy wynajem pełnej poufnej maszyny nie daje dziś elastyczności na wieczorny szczyt: Phala wymaga co najmniej doby (8 × H200) albo miesiąca (8 × B300), Confidential AI trzech miesięcy dla 8 × B300 po 60 USD za godzinę, a VoltageGPU, które rozlicza 8 × H200 co sekundę po 64,62 USD za godzinę, nie obejmuje opublikowanymi dowodami atestacji tej konfiguracji ani przełączników NVSwitch.[^cai][^voltage] Do tego dochodzi czas przydziału maszyny i ładowania wag.
- Dla Kimi rachunek zależy od pomiaru: poufne API kosztuje ok. 8–9 USD na osobę, a własna maszyna 8 × B300 przy pełnym wykorzystaniu ok. 6 USD przy wyższym szacunku pojemności i ok. 9,5 USD przy niższym. Taniej od poufnego API wypada, jeśli jedna maszyna obsłuży więcej niż ok. 5 100–5 600 aktywnych osób korzystających z tego modelu; przy niższym szacunku pojemności (ok. 4 800 osób) to się nie udaje.

Zakup własnego serwera: kompletny serwer Supermicro z ośmioma kartami B300 kosztował we wrześniu 2026 r. ok. 663 tys. USD.[^supermicro] Miesięczny koszt takiego zakupu szacujemy tak:

| Pozycja | Kwota miesięczna |
| --- | ---: |
| Amortyzacja serwera przez pięć lat | ok. 11 tys. USD |
| Amortyzacja serwera przez cztery lata | ok. 13,8 tys. USD |
| Kolokacja | ok. 1,9–3 tys. USD |
| Sieć, części i serwis (szacunek) | ok. 1,5 tys. USD |
| Razem | ok. 14–18 tys. USD |

Na takim serwerze zmieszczą się dwie kopie DeepSeek, które w scenariuszu ogólnoświatowym obsłużą ok. 35 tys. osób (w europejskim ok. 28 tys.), po ok. 0,41–0,52 USD na osobę. W tych założeniach zakup wypada taniej od poufnego API za 1,11–1,25 USD od ok. 12–17 tys. aktywnych osób, a od najtańszego zadeklarowanego (0,70 USD) od ok. 21–26 tys. Rachunek nie obejmuje pełnego kosztu utrzymania i pomiaru tej konfiguracji; zakup wymaga też gotówki z góry, całodobowego dyżuru ludzi i stałego popytu przez lata, a fizyczny dostęp do sprzętu ma wtedy fundacja (rozdział 2). To nasze szacunki, nie oferty.

- Poufne maszyny z wieloma kartami są dziś publicznie dostępne w USA. W Unii Europejskiej znaleźliśmy poufne maszyny z jedną kartą H100,[^azure-ncc] w których pełny DeepSeek ani Kimi się nie mieszczą. Poufne API z serwerami w Unii Europejskiej oferuje też Privatemode (Edgeless Systems, Niemcy), z mniejszym wyborem modeli.[^privatemode] To również deklaracja dostawcy, do sprawdzenia.
- Niezależny katalog sprawdzający poufne API w obserwacji z 29 października 2026 r., godz. 14:00 UTC, nie potwierdził pełnej weryfikacji żadnej z 95 sprawdzanych tras; najczęściej brakowało dowodu tożsamości uruchomionego programu, pochodzenia kodu i powiązania żądania z maszyną.[^katalog] To wynik dostępnych dowodów, a nie dowód, że usługi ujawniają treści. Do czasu własnej weryfikacji poufność tych usług traktujemy jako deklarację dostawcy.
- Rachunek obejmuje obliczenia. Prywatne środowisko (brama, pamięć, pliki) w jednej lub dwóch poufnych maszynach z czterema procesorami wirtualnymi i 8 GB pamięci kosztuje w Phala ok. 168 USD miesięcznie za maszynę, a dysk jest rozliczany osobno, ok. 10 USD za 100 GB.[^phala-cvm] Czy taka wielkość wystarczy, sprawdzimy w pilotażu. Przy 170–340 USD miesięcznie to przy 30 osobach ok. 6–11 USD na osobę, przy 1000 osób kilkadziesiąt centów. Rachunek nie zawiera pracy ludzi, przeglądów bezpieczeństwa, płatności ani zapasu na awarie.
- Popularne abonamenty kosztują ok. 20 USD miesięcznie, a czat DeepSeek jest bezpłatny.[^abonamenty] Plany za 100–200 USD dają przy intensywnej pracy agentowej równowartość tysięcy dolarów w cenach katalogowych API;[^semianalysis] z takimi planami nie konkurujemy ceną. Proponujemy rozliczenie rzeczywistego użycia z prywatnością, którą można sprawdzić.

Stan hipotezy z manifestu na 29 października 2026 r.: rachunek zbliża nas do niej, ale jej nie potwierdza. Przetwarzanie z deklarowaną poufnością i atestacją jest już dostępne w jawnych cennikach i przy przyjętym profilu użycia kosztuje ok. 0,70–1,25 USD na osobę miesięcznie, więc niewielka grupa może zacząć od niego po kosztach, a w naszych założeniach własna infrastruktura może stać się tańsza przy kilkunastu do kilkudziesięciu tysiącach aktywnych osób. Rozstrzygną trzy rzeczy, które sprawdzimy w próbach z rozdziału 9: czy poufność tych usług przechodzi niezależną weryfikację, czy jakość dostępnych modeli wystarcza do zadań, dla których ludzie przyjdą do Suverii, i jaki jest rzeczywisty profil ruchu. Rachunek aktualizujemy przy każdej istotnej zmianie cen i po każdej próbie, a poprzednie wersje zachowujemy.

### 8.2. Kroki infrastruktury i karty decyzji

Infrastrukturę rozwijamy krokami, z których każdy daje uczestnikom samodzielną wartość, bez obowiązku przejścia do następnego: najpierw poufne API i prywatne środowisko w poufnych maszynach (jeśli przed startem zbierzemy dość środków, możemy zacząć od razu od kolejnego kroku), potem wynajem własnych poufnych maszyn, dalej zakup sprzętu i umieszczenie go w zewnętrznej serwerowni, a w dalekiej perspektywie, jeśli wykaże przewagę, własny budynek. Kolejny krok uzasadniają zmierzone dane: pełny koszt usługi, rzeczywisty ruch, czas odpowiedzi w szczycie, możliwość utrzymania zabezpieczeń i obsługi awarii, a przy zakupie także finansowanie napraw, wymiany sprzętu i ludzi, którzy przejmą odpowiedzialność. Wynajem własnej maszyny może mieć sens także wtedy, gdy potrzebny model nie jest dostępny w poufnym API albo chcemy pełnej kontroli nad tym, co działa.

Każde przejście opisujemy kartą decyzji: co zyskujemy, pełny koszt, ryzyka, warunki rozpoczęcia i wycofania, sposób przeniesienia danych i kluczy oraz zgodność z [zasadami rezerwy i uruchamiania dalszych filarów](whitepaper-zasady-fundacji.md) (rozdział 8 whitepapera zasad fundacji). Łączenie własnej maszyny z poufnym API na szczyty ruchu dopuszczamy tylko wtedy, gdy każda z dróg ma zaakceptowany poziom ochrony; przejście do słabszego wariantu wymaga osobnej, świadomej decyzji użytkownika. Pierwszy pomiar planujemy na jednej poufnej karcie z mniejszym modelem, a następny na maszynie mieszczącej pełny model.

Moc dopasowujemy do ruchu bez wymiarowania wszystkiego na najwyższy szczyt. Projektujemy krótką kolejkę z widocznym czasem oczekiwania; jej rzeczywisty czas, granicę i zachowanie po wyczerpaniu zmierzymy w pilotażu. Elastyczną moc na dłuższe szczyty daje w pierwszej kolejności poufne API, pod warunkiem że zachowuje zaakceptowany poziom ochrony, zgodę i limit wydatków użytkownika; gdy takiej drogi nie ma, uczciwie informujemy o oczekiwaniu albo niedostępności. Wynajem godzinowy ma sens dla modeli, których nie ma w poufnym API albo które są w nim wyraźnie droższe, i tylko tam, gdzie dostawca rzeczywiście pozwala szybko uruchamiać i zwalniać poufne maszyny. Wolną moc własnej maszyny w spokojniejszych godzinach chcemy wykorzystywać na zadania fundacji, takie jak opracowania dla Omniforum; jej wartość w cenach API nie jest wpływem do budżetu, więc takie zadania mają własny cel i budżet. Po pierwszym pilotażu chcemy sprawdzić dwa tryby: „Rozmowa” dla zwykłej pracy z asystentem oraz „Bez pośpiechu” dla zadań, które mogą poczekać, na przykład tłumaczenia dokumentu. W trybie „Bez pośpiechu” pokazujemy orientacyjne okno rozpoczęcia, szacunek kosztu, maksymalny budżet, możliwość anulowania z rozliczeniem wykonanej pracy i tę samą informację o ochronie. Niższa cena takiej pracy jest możliwa tylko wtedy, gdy wynika z jawnej metody podziału kosztów, bez podwójnego liczenia kosztu stałego.

### 8.3. Pomiar użycia bez treści rozmów

Żeby rozliczać rzeczywiste użycie, mierzymy zasoby potrzebne do wykonania zadań i jasno opisujemy udział w kosztach stałych. Licznik rozliczeniowy ogranicza się do danych niezbędnych do sprawdzenia kosztu, a treść rozmowy nie jest potrzebna do wystawienia rachunku. W próbach sprawdzimy dokładność pomiaru, sposób kontroli przez użytkownika, zakres ujawnianych metadanych i zachowanie usługi po osiągnięciu limitu wydatków. Zasady rachunku, zaokrąglenia, przedpłat i zwrotów opisuje [whitepaper zasad fundacji](whitepaper-zasady-fundacji.md).

Limit wydatków ustawiony przez uczestnika ma działać jak granica, a nie jak ostrzeżenie po fakcie. Część dostawców rozlicza trwające żądania dopiero po ich zakończeniu, więc ich limity mogą zostać przekroczone; tak opisuje to na przykład Tinfoil.[^tinfoil] Dlatego projektujemy rezerwację: przed wysłaniem żądania brama Suverii odkłada z salda jego największy dopuszczalny koszt, uwzględniając inne żądania w toku, i ogranicza liczbę równoległych żądań oraz długość odpowiedzi. Po zakończeniu rozliczamy koszt rzeczywisty, a niewykorzystaną rezerwę zwalniamy. To wymaganie do zbudowania i sprawdzenia, nie działająca funkcja.

## 9. Próby odbiorowe i dziennik wyników

Zanim nazwiemy jakiekolwiek wydanie poufnym, udokumentujemy co najmniej:

- poprawną atestację;
- odmowę wysłania danych po podmianie kodu lub klucza;
- izolację sesji;
- ograniczenia administratora;
- brak treści w logach, zrzutach i telemetrii;
- obsługę pamięci podręcznej;
- usuwanie i odzyskiwanie;
- zachowanie po awarii;
- granice narzędzi;
- koszty pod obciążeniem.

Wynik obejmuje wersję konfiguracji i scenariusz, w którym próbowaliśmy naruszyć ochronę.

Chcemy, żeby każde wydanie Suverii przechodziło wszystkie bramki dowodowe co najmniej jednego niezależnego weryfikatora poufnych usług: sprzęt i stan zabezpieczeń, świeżość dowodu, powiązanie klucza połączenia z chronionym środowiskiem, tożsamość uruchomionego programu, pochodzenie kodu i powiązanie żądania z konkretną maszyną, przy zachowaniu dostępności. Wynik publikujemy z datą obserwacji, wersją kryteriów i dowodami dla konkretnego wydania, modelu i trasy żądania, a powiązania weryfikatora opisujemy razem z wynikiem. Nie obiecujemy miejsca w żadnym rankingu. Przejście weryfikacji oznacza osiągnięcie opisanej kontroli w danym czasie, z jawnymi ograniczeniami, i nie zastępuje audytu ani naszych własnych prób.

Gdy uruchomimy własny wariant poufny, zgłosimy Suverię do każdego niezależnego katalogu, który sprawdza poufność uruchamiania modeli, i udostępnimy mu punkt do sprawdzania atestacji; pierwszym przykładem jest confidentialinference.net (stan z 31 października 2026 r.).[^confidentialinference] Nie obiecujemy wpisu, bo o nim decyduje katalog; obiecujemy zgłoszenie, odpowiedź na jego pytania i publikację wyniku, także złego, z datą. Katalog sprawdza tylko to, co widzi z zewnątrz, zwykle atestację i kanał połączenia; nie zastępuje audytu kodu, konfiguracji ani oceny kanałów bocznych.

Próby przechowywania i przenoszenia obejmują:

- odtworzenie zaszyfrowanej kopii na innym uprawnionym urządzeniu oraz odmowę odczytu bez właściwego klucza;
- utratę jednego urządzenia, odzyskanie dostępu wybraną metodą i czytelne przedstawienie skutków utraty wszystkich kluczy;
- synchronizację równoległych zmian bez cichego nadpisania jednej z wersji;
- odczyt eksportu w niezależnym narzędziu bez konta u pierwotnego operatora, z porównaniem oryginałów, historii, źródeł i powiązań;
- ograniczenie zakresu integracji i skuteczne zatrzymanie jej dalszego dostępu po cofnięciu uprawnienia.

Etapy:

1. test użyteczności na materiałach, które nie są wrażliwe;
2. techniczna próba ochrony;
3. ograniczony pilotaż z jasnymi warunkami;
4. stopniowe zwiększanie skali.

Przed pilotażem ustalimy i opublikujemy progi: czas do pierwszego słowa odpowiedzi, koszt obliczeń na osobę przy zmierzonym profilu i jakość modelu według [whitepapera materiałów i benchmarku](whitepaper-materialy-i-benchmark.md). Pilotaż uznamy za udany, gdy spełni wszystkie trzy.

Zmiana modelu, firmware lub sposobu logowania może wymagać ponownej kwalifikacji, a aktualizacja nie może po cichu osłabiać uzgodnionej ochrony. Każde wydanie ma publiczną kartę:

- zakres działania;
- dowody z prób;
- znane ograniczenia;
- odpowiedzialne osoby;
- koszty;
- drogę zgłoszenia problemu;
- plan wycofania.

Wykrycie luki prowadzi do ograniczenia narażenia, informacji dla dotkniętych osób i sprawdzalnej poprawki.

Próby chcemy prowadzić otwarcie. Zapraszamy osoby zajmujące się bezpieczeństwem, kryptografią, infrastrukturą i aplikacjami, także twórców, którzy pokazują technologię szerokiej publiczności, do wspólnego zaprojektowania sprawdzianów i do prób przełamania ochrony na wydzielonych kontach testowych z wymyślonymi danymi. Zapraszamy również krytyków. Za promocję nie płacimy, a każdą współpracę oznaczamy zgodnie z [rejestrem korzyści](whitepaper-zasady-fundacji.md) (rozdział 7 whitepapera zasad fundacji). Wyniki, także te nieudane, trafiają do dziennika wyników. Jeśli chcesz się zaangażować, napisz na [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) z tematem „[Dołącz] Próby Suverii”.

Najważniejsza próba: zespół z uprawnieniami operatora poza poufnym środowiskiem (brama, dyski, sieć, logi) próbuje odczytać rozmowy kont testowych, w których ukryto tajne ciągi znaków. Jeśli wyciągnie je ktokolwiek, także my, próba się nie udała.

Pierwsze wydanie Suverii udostępnimy kilku osobom, które pomagają ją skonfigurować. Jeśli skorzysta z poufnego API, jego karta ochrony (punkt 2.3) powie wprost, że model działa u zewnętrznego dostawcy, atestację deklaruje dostawca i jeszcze jej nie sprawdziliśmy, a metadane nie są chronione. Ponieważ pierwsze osoby pomagają też obsługiwać usługę, pierwszym wynikiem, który opublikujemy, będzie najważniejsza próba opisana wyżej, z opisem tego, co udało się operatorowi.

**Dziennik wyników.** Stan na 29 października 2026 r.: nie przeprowadziliśmy jeszcze żadnej z opisanych prób, nie wynajmowaliśmy kart graficznych i nie uruchomiliśmy modelu w Suverii. Każdy kolejny wynik dopisujemy tutaj z datą, konfiguracją, scenariuszem i wnioskiem, także wtedy, gdy próba się nie powiedzie.

Do rozstrzygnięcia pozostają:

- pierwszy model i akceptowalny poziom jakości;
- niezależna weryfikacja poufnych API i poufnych maszyn oraz ich dostępność w jurysdykcjach z silną ochroną danych osobowych, takich jak Unia Europejska z RODO;
- czas odpowiedzi;
- zasady kluczy i pamięci;
- minimalny zakres danych rozliczeniowych;
- obowiązki prawne operatora wobec zgłoszeń nadużyć;
- sposób finansowania ciągłości.

[Whitepaper zasad fundacji](whitepaper-zasady-fundacji.md) opisuje budżet, rachunek i odpowiedzialność, a [whitepaper materiałów i benchmarku](whitepaper-materialy-i-benchmark.md) ocenę zachowania modeli.

Fundacja Novus Ignis, Poznań, KRS 0001269575. Strona i manifest: novusignis.org. Uwagi: salve@novusignis.org.

## Przypisy

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Badanie Georgia Tech, Purdue University i Synkhronix, opublikowane 28.10.2025: wydobycie kluczy poświadczających Intel TDX i SGX oraz AMD SEV-SNP przez fizyczne podpięcie do magistrali pamięci DDR5, z konsekwencjami dla poufnych obliczeń NVIDIA. Wymaga fizycznego dostępu do serwera; Intel i AMD uznają takie ataki za leżące poza zakresem ochrony. Omówienie: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Odczyt 28.10.2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg i McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Opracowanie. Zasady przechowywania podstawowej kopii na urządzeniach użytkownika i wspierającej roli serwerów, w tym szyfrowanych kopii.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Opis architektury. Przykład wiązania poufności z kontrolą oprogramowania i przejrzystością systemu.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Specyfikacja. Rozdzielenie wiedzy o nadawcy i żądaniu przy określonym modelu zaufania; nie pełna anonimowość.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit i Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Publikacja naukowa (USENIX Security 2024; wersja robocza arXiv 2403.09751). Z długości zaszyfrowanych pakietów ze strumieniem odpowiedzi obserwator sieci odtwarza temat, a częściowo treść odpowiedzi asystenta. Odczyt 30.10.2026.

[^whisper-leak]: [McDonald i Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) oraz [omówienie Microsoft (7.11.2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Publikacja badawcza i opis producenta. Z rozmiaru i rytmu pakietów w szyfrowanym strumieniu odpowiedzi da się rozpoznać temat rozmowy; część dostawców dodała losowe wypełnienie pakietów. Odczyt 30.10.2026.

[^nvidia-platformy]: [NVIDIA: obsługiwane platformy poufnych kontenerów](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Dokumentacja producenta. Wymagania całej konfiguracji procesora, kart i oprogramowania.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Dokumentacja producenta. W trybie PPCIe v2 sieć NVLink i NVSwitch należy do zaufanej części systemu; ochrona PCIe nie oznacza szyfrowania całego ruchu między kartami.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Dokumentacja producenta. Tryb poufnych obliczeń na wielu kartach Blackwell, w tym ochrona połączeń; wymaga zgodnej konfiguracji.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definicja. Otwarte wagi nie rozstrzygają spełnienia całej definicji otwartego systemu.

[^deepseek]: [DeepSeek-V4.1-Flash: karta modelu](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Dokumentacja producenta. Architektura, licencja MIT i deklarowane możliwości modelu; nie jest pomiarem wydajności Suverii.

[^dpga]: [Digital Public Goods Alliance: standard](https://www.digitalpublicgoods.net/standard). Standard. Kryteria oceny cyfrowego dobra publicznego; kierunek projektowy nie jest uzyskanym uznaniem DPGA.

[^lambda-cennik]: [Lambda: cennik instancji](https://lambda.ai/pricing). Cennik dostawcy. NVIDIA B200 SXM6 180 GB: 6,79 USD za kartogodzinę w instancji z czterema kartami i 6,69 USD w instancji z ośmioma; H100 SXM 80 GB: 3,99 USD; ceny na żądanie, bez podatków, bez trybu poufnego. Odczyt 29.10.2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, wyniki pomiaru wydajności](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Pomiar dostawcy. 4 × B200, vLLM, równoległość tensorowa 4, dekodowanie spekulatywne, ok. 8 192 tokenów wejścia i 1 024 wyjścia na żądanie; przy 64 równoczesnych żądaniach łącznie 3 713,9 tokena wyjścia na sekundę i średnio 66,8 tokena na sekundę na rozmowę. Bez daty pomiaru. Odczyt 28.10.2026.

[^azure-ncc]: [Azure: cennik maszyny NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) oraz [opis serii](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Cennik dostawcy. Poufna maszyna z jedną kartą H100 NVL 94 GB; 6,98 USD za godzinę (East US 2) do 8,90 USD (West Europe), Linux, płatność za użycie. Odczyt 28.10.2026.

[^deepseek-cennik]: [DeepSeek: cennik API (wersja chińska)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Cennik dostawcy. Model deepseek-flash (V4.1-Flash-1017): wejście bez trafienia w pamięć podręczną 1 CNY poza szczytem i 2 CNY w szczycie, wyjście 4 i 8 CNY za milion tokenów. Przeliczenie na USD według [zestawienia eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), źródła pomocniczego. Odczyt 28.10.2026.

[^abonamenty]: Ceny abonamentów: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (zestawienie geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); czat DeepSeek jest bezpłatny ([opis](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Ceny miesięczne w USD, bez podatków; Kimi Plus 19 USD. Odczyt 28–29.10.2026.

[^kimi-k31]: [Moonshot: premiera Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) i [Kimi: opis K3.1 Pro (24.10.2026)](https://www.kimi.com/news/kimi-k3-1-pro). Dokumentacja producenta. Dalej trenowana wersja Kimi K3, ok. 3 bln parametrów, kontekst 1 mln tokenów, wagi zapowiedziane przed 4.11.2026; licencja nieogłoszona. Ceny API według OpenRouter: 2 / 10 USD za milion tokenów.

[^kimi-k3]: [Kimi K3: karta modelu](https://huggingface.co/moonshotai/Kimi-K3). Dokumentacja producenta. 2,8 bln parametrów, 104 mld aktywnych, kontekst ok. 1 mln, MXFP4, licencja Kimi K3 License.

[^spheron-kimi]: [Spheron: wdrożenie Kimi K3 (19.10.2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Poradnik dostawcy. Pliki wag 1 560,94 GB, konfiguracje mieszczące model. Pojemność ok. 1 000–1 600 tokenów na sekundę na 8 × B300 według zestawienia pomiarów stron trzecich z 29.10.2026; rozrzut duży.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro i DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Niezależne porównanie. Indeks v5 z 28.10.2026: 46 i 32; prędkość ok. 36 i 178 tokenów na sekundę. Odczyt 29.10.2026.

[^tinfoil]: [Tinfoil: cennik](https://tinfoil.sh/pricing). Cennik dostawcy. DeepSeek-V4.1-Flash 0,65 USD wejście i 1,45 USD wyjście za milion tokenów; opis limitów wydatków. Odczyt 29.10.2026.

[^phala-api]: [Phala: poufne modele](https://phala.com/confidential-ai-models). Cennik dostawcy. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD za milion tokenów; atestacja bramy i potwierdzenia odpowiedzi według dostawcy. Odczyt 29.10.2026.

[^near]: [NEAR AI: cennik](https://near.ai/pricing). Cennik dostawcy. Kimi K3: 3,30 / 16,50 USD za milion tokenów; na stronie głównej inne ceny, rozbieżność do wyjaśnienia. Odczyt 29.10.2026.

[^phala-gpu]: [Phala: poufne karty graficzne](https://phala.com/gpu-tee) i [cennik](https://cloud.phala.com/about/pricing). Cennik dostawcy. 8 × H200: 44,20 USD za godzinę na żądanie, 32,20 USD przy zobowiązaniu na 180 dni; 8 × B300: 65,60 USD (30 dni), 62,40 USD (180 dni); Intel TDX z poufnymi obliczeniami NVIDIA; brak maszyn w Europie. Odczyt 29.10.2026. Zobowiązanie opłacane z góry, bez zwrotu przy wcześniejszym zakończeniu.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Oferta dostawcy. Poufne API z serwerami w Unii Europejskiej i zdalną atestacją; wybór otwartych modeli mniejszy niż u dostawców z USA, cen nie podaje publicznie. Poufność deklarowana przez dostawcę, przez nas niesprawdzona. Odczyt 30.10.2026.

[^katalog]: [Confidential Inference Directory: metodologia i obserwacje](https://confidentialinference.net/attestation). Niezależny katalog, sponsorowany przez firmę oferującą poufną inferencję. 0 z 95 tras zweryfikowanych od początku do końca w obserwacji z 29.10.2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: serwer AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) oraz [GPU Per Hour: ceny serwerów NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Oferta producenta i zestawienie cen. Kompletny serwer z ośmioma kartami B300: 662 845,95 USD (21.09.2026).

[^semianalysis]: [BigGo Finance o analizie SemiAnalysis (7.10.2026)](https://finance.biggo.com/news/173039423dab79be). Analiza branżowa. Plan za 200 USD daje przy intensywnej pracy ok. 12 tys. USD w cenach katalogowych API; szacunki marży, nie dane spółki.

[^sglang-k3]: [SGLang: przepis dla Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Dokumentacja silnika. Sprawdzona konfiguracja Kimi K3 na 8 × B300; nie dotyczy Kimi K3.1 ani trybu poufnego.

[^phala-cvm]: [Phala: cennik maszyn poufnych](https://phala.com/pricing). Cennik dostawcy. tdx.large (4 procesory wirtualne, 8 GB pamięci): 0,23 USD za godzinę; dysk 0,000139 USD za GB na godzinę. Odczyt 29.10.2026.

[^itu]: [ITU: Facts and Figures 2025, korzystanie z internetu](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Statystyka międzynarodowa. Odsetek osób korzystających z internetu w regionach świata w 2025 r. (ok. 6 mld osób, 74% ludności); udziały regionów w naszym rachunku to przybliżenie: odsetek × ludność regionu.

[^cai]: [Confidential AI: cennik](https://confidential.ai/pricing). Cennik dostawcy, ceny z 26.10.2026. DeepSeek V4.1 Flash: 0,30 USD wejście, 0,03 USD wejście z pamięci podręcznej, 1,20 USD wyjście za milion tokenów; maszyna 8 × B300 60 USD za godzinę, minimum trzy miesiące, przydział w ciągu kilku dni. Poufność deklarowana przez dostawcę, przez nas niesprawdzona.

[^voltage]: [VoltageGPU: cennik](https://voltagegpu.com/pricing) i [zakres dowodów](https://voltagegpu.com/). Cennik i deklaracje dostawcy. 8 × H200 64,62 USD za godzinę z rozliczeniem sekundowym; opublikowane dowody nie obejmują atestacji tej konfiguracji ani przełączników NVSwitch.

[^epoch]: [The Decoder o danych Epoch AI (8.01.2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) i [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Zestawienie niezależnego ośrodka badawczego. Zainstalowana moc obliczeniowa dla cyfrowej inteligencji ponad 15 mln odpowiedników NVIDIA H100, zapotrzebowanie ponad 10 GW. Szacunek, nie pomiar.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): porównanie dostawców uruchamiających modele w zaufanych środowiskach wykonawczych, z datowanymi sprawdzeniami atestacji; strona sponsorowana przez firmę Enclava, w chwili odczytu jedenastu dostawców. Odczyt 31.10.2026.
