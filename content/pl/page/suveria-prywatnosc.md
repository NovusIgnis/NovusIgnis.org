---
tytul: Prywatność i bezpieczeństwo Suverii
opis: Przed kim Suveria ma chronić rozmowy, jak wiadomość przechodzi przez system, kto ma klucze i jak sprawdzimy, czy ochrona działa
grupa: suveria
kolejnosc: 2
menu: Prywatność i bezpieczeństwo
---
# Prywatność i bezpieczeństwo Suverii

Ta strona jest dla osób, które chcą wiedzieć, na czym ma polegać ochrona prywatności w Suverii, zanim powierzą jej swoje rozmowy. Pogłębia stronę [Czym jest Suveria](suveria.md) i przy każdej części prowadzi do whitepapera.

Jedna zasada porządkuje całość: prywatność nie może opierać się na zaufaniu do dobrych intencji fundacji ani administratorów serwerów, tylko na zabezpieczeniach, których działanie można niezależnie sprawdzić. Manifest ujmuje to tak: „Każda obietnica bezpieczeństwa musi mieć dowód w kodzie i krzemie, a nie tylko w naszych słowach”. Podstawowym miejscem przechowywania rozmów mają być Twoje własne urządzenia, a ukrytych dostępów do prywatnych treści nie tworzymy.

Suveria jest dziś projektem. Wszystko poniżej opisuje, jak ma działać; żadnej z prób, które mają to potwierdzić, jeszcze nie przeprowadziliśmy.

Więcej: [manifest, punkt 2.2](../manifest.md#s2-2) i [punkt 3.1](../manifest.md#s3-1).

## Przed kim ma chronić, a przed kim nie

Chronimy treść rozmów i plików, historię i pamięć asystenta, klucze (czyli tajne ciągi znaków, które otwierają zaszyfrowane dane), dane rozliczeniowe oraz metadane, czyli informacje o samym połączeniu: jego czas, adres sieciowy i wielkość żądania.

Poufne środowisko to odizolowana sprzętowo część serwera, do której nie zajrzy nawet jego administrator. Czy tak jest naprawdę, ma potwierdzać atestacja, czyli podpisane przez sprzęt poświadczenie, jakie oprogramowanie działa na serwerze i w jakim trybie ochrony. Poufne API to takie środowisko u zewnętrznego dostawcy, z którym łączy się nasza aplikacja (API to łącze między programami). Tabela opisuje zamierzone działanie, jeszcze niesprawdzone w próbie:

| Przed kim ma chronić | Model na Twoim urządzeniu | Poufne środowisko na serwerach | Poufne API zewnętrznego dostawcy |
| --- | --- | --- | --- |
| Administrator dostawcy | nie dotyczy: przetwarzanie na urządzeniu | ma chronić: izolacja sprzętowa | deklaracja dostawcy, do sprawdzenia |
| Obserwator sieci | nie dotyczy bez sieci; ruch integracji wymaga oceny | ochrona częściowa: treść zaszyfrowana, metadane wymagają osobnych środków | ochrona częściowa, jeśli klucz połączenia jest związany z atestacją |
| Osoba z fizycznym dostępem do serwera | nie dotyczy; liczy się dostęp do urządzenia | nie chroni: w cudzej serwerowni dostęp ma dostawca; na własnym sprzęcie widoczna kontrola fizyczna | nie chroni: dostęp ma dostawca |
| Fundacja | nie dotyczy: fundacja nie uczestniczy w przetwarzaniu | ma chronić: izolacja obejmuje także nas, klucze do zapisu masz Ty | ma chronić treść: brama, czyli nasza część rozliczająca żądania, bez wglądu w treść; gdzie kończy się szyfrowanie, pokażemy przed pilotażem |

Legenda: „ma chronić” to zamierzona ochrona, „ochrona częściowa” chroni treść, ale nie wszystko wokół niej, „nie chroni” mówi wprost o granicy, a „deklaracja dostawcy, do sprawdzenia” oznacza, że do czasu własnej weryfikacji ochrony nie potwierdzamy. Administrator dostawcy to ten, kto zarządza serwerami, na których działa model; obserwator sieci widzi ruch między Twoim urządzeniem a serwerem, ale treść jest w drodze zaszyfrowana; osoba z fizycznym dostępem może otworzyć obudowę serwera; fundacja to my jako operator usługi.

Trzy granice warto znać od razu. Poufne obliczenia nie naprawiają zainfekowanego telefonu ani komputera. Nie chronią przed każdym, kto ma fizyczny dostęp do serwera: w 2025 r. badacze zbudowali za mniej niż tysiąc dolarów urządzenie, które przy fizycznym dostępie do serwera pozwala podrobić poświadczenie sprzętu. Ochrona na serwerach opiera się też na kluczach producenta procesora, który musi być uczciwy.

Więcej: [whitepaper Suverii, rozdział 2](../whitepaper-suveria.md#s2) i [punkt 2.3](../whitepaper-suveria.md#s2-3).

## Jak wiadomość przechodzi przez system

Suveria ma składać się z aplikacji na Twoim urządzeniu, bramy (naszej części systemu, która rozlicza żądania i pilnuje limitu wydatków), poufnego środowiska z modelem, przechowywania zaszyfrowanych kopii i opcjonalnego pośrednika, który ukrywa Twój adres.

W wariancie docelowym jedna wiadomość ma przechodzić taką drogę:

1. Aplikacja pobiera opis zatwierdzonego wydania i sprawdza atestację serwera.
2. Porównuje to poświadczenie z jawną polityką. Klucz, którym szyfruje wiadomość, musi być z nim związany.
3. Dopiero po pomyślnym sprawdzeniu nawiązuje szyfrowane połączenie. Rozbieżność zatrzymuje wysłanie danych; przejście do innego wariantu wymaga Twojego świadomego wyboru.
4. Środowisko przetwarza żądanie przy ograniczonym dostępie do sieci i narzędzi, zwraca wynik i usuwa dane robocze zgodnie z opublikowaną polityką.
5. Rozmowa lub pamięć zapisuje się wyłącznie w zakresie, który wybierzesz.

Atestacja pomaga stwierdzić, co uruchomiono, ale sama nie dowodzi, że ten kod jest bezpieczny; potrzebne są przeglądy kodu i możliwość niezależnego sprawdzenia. Przed pilotażem pokażemy w aplikacji, gdzie kończy się szyfrowanie kontrolowane przez Twoje urządzenie i czy brama widzi treść.

Szczególnie ostrożni jesteśmy, gdy podłączasz źródła z wiadomościami od innych ludzi, na przykład skrzynkę pocztową. Cudza wiadomość może zawierać ukryte polecenia, które próbują nakłonić model do ujawnienia prywatnej pamięci. Dlatego asystent nie może sam wysyłać wiadomości, otwierać adresów sieciowych ani zmieniać Osobistego Kanonu (Twojego zbioru zasad i wartości) bez potwierdzenia człowieka.

Wraz z uruchomieniem usługi opublikujemy spis wszystkich rodzajów danych o działaniu usługi, które zbieramy, z celem i czasem przechowywania. Danych spoza spisu nie zbieramy.

Więcej: [whitepaper Suverii, rozdział 3](../whitepaper-suveria.md#s3).

## Twoje klucze

Klucze do prywatnych kontenerów, czyli zaszyfrowanych zbiorów danych, pozostają pod Twoją kontrolą. Fundacja nie przechowuje kluczy ani ich części, więc nie może odzyskać dostępu za Ciebie ani wydać Twoich danych. Odzyskanie konta u operatora nie odblokowuje treści.

Utrata wszystkich kopii klucza może oznaczać trwałą utratę danych. Dlatego rozważamy sposoby odzyskiwania, które można łączyć: drugie urządzenie z dostępem, klucz zapisany na papierze lub w menedżerze haseł, klucz sprzętowy albo podział klucza między kilka zaufanych osób, z których żadna sama nie odczyta danych. Na start zalecamy drugie urządzenie i klucz zapisany na papierze. Każdy mechanizm sprawdzamy próbą odtworzenia danych.

Więcej: [whitepaper Suverii, punkt 2.2](../whitepaper-suveria.md#s2-2).

## Czego nie widać, a co zdradza: rytm przesyłu

Odpowiedź płynie do Ciebie w pakietach, czyli porcjach danych. Szyfrowanie ukrywa ich treść, ale nie ich długość ani rytm. To kanał boczny: informacja wycieka nie z treści, lecz ze sposobu jej przesyłania. Badania z lat 2024–2025 pokazały, że obserwator sieci może z tego odtworzyć temat, a czasem treść rozmowy. Dlatego w trybie poufnym chcemy wysyłać odpowiedź w porcjach o stałym rozmiarze i w stałym rytmie; kosztuje to trochę opóźnienia i przepustowości.

Więcej: [whitepaper Suverii, rozdział 3](../whitepaper-suveria.md#s3).

## Wydania, które można sprawdzić

Zaufanie do oprogramowania nie ma zależeć od jednej osoby ani od samej fundacji. Każdy może zbudować aplikację samodzielnie z opublikowanego kodu i sprawdzić, że wynik jest identyczny z tym, który instaluje. Co najmniej dwie niezależne strony spoza fundacji mają odtworzyć wydanie i publicznie potwierdzić zgodność; dopóki ich nie znajdziemy, wydanie oznaczamy jako niepotwierdzone przez osoby trzecie.

Pełną ochronę projektujemy dla instalowanej aplikacji. W przeglądarce kod, który sprawdza serwer, za każdym razem dostarcza operator, więc wersja przeglądarkowa jasno opisze swój niższy poziom ochrony.

Więcej: [whitepaper Suverii, rozdział 3](../whitepaper-suveria.md#s3).

## Wiele kart graficznych

Model, który chcemy uruchomić, nie mieści się na jednej karcie graficznej, więc dane przepływają także między kartami. Ochronę trzeba sprawdzić zarówno dla samych kart, jak i dla połączeń między nimi; oznaczenie handlowe „secure” tego nie zastępuje. Ofertę dostawcy porównujemy dopiero po próbie z własną aplikacją.

Więcej: [whitepaper Suverii, rozdział 5](../whitepaper-suveria.md#s5).

## Jak sprawdzimy, czy to działa

Najważniejsza próba: zespół z uprawnieniami operatora poza poufnym środowiskiem (brama, dyski, sieć, logi) próbuje odczytać rozmowy kont testowych, w których ukryto tajne ciągi znaków. Jeśli wyciągnie je ktokolwiek, także my, próba się nie udała.

Zanim nazwiemy jakiekolwiek wydanie poufnym, udokumentujemy między innymi poprawną atestację, odmowę wysłania danych po podmianie kodu lub klucza, brak treści w logach oraz usuwanie i odzyskiwanie. Wyniki, także nieudane, trafiają do dziennika wyników. Stan na 29 października 2026 r.: nie przeprowadziliśmy jeszcze żadnej z opisanych prób.

Próby chcemy prowadzić otwarcie. Jeśli zajmujesz się bezpieczeństwem, kryptografią, infrastrukturą lub aplikacjami, albo chcesz spojrzeć na projekt krytycznie, napisz na salve@novusignis.org z tematem „[Dołącz] Próby Suverii”.

Więcej: [whitepaper Suverii, rozdział 9](../whitepaper-suveria.md#s9).

## Przeczytaj i powiedz, co myślisz

Pełne zestawienie wariantów i zagrożeń, zabezpieczenia aplikacji i listę spraw do rozstrzygnięcia znajdziesz w [whitepaperze Suverii](../whitepaper-suveria.md). Jeśli coś Cię zastanawia albo wydaje się błędne, zaznacz fragment w dokumencie i skorzystaj z przycisku „Mam uwagę” albo napisz na salve@novusignis.org.
