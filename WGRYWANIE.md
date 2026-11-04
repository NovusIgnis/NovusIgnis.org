# Automatyczne wgrywanie strony (GitHub → Infomaniak)

Po każdej zmianie zaakceptowanej w gałęzi `main` GitHub sam buduje stronę, sprawdza ją i wysyła na hosting. Plik automatu: `.github/workflows/wgraj.yml`. Jeśli kontrola znajdzie błąd, nic nie zostaje wysłane.

Wszystkie hasła i klucze wpisujesz sam w Managerze Infomaniaka i w ustawieniach GitHuba. Do repozytorium nie trafia żaden sekret.

## 1. Infomaniak: konto SFTP i folder strony

1. Manager → Hosting → Twój hosting → **FTP / SSH** → utwórz konto **FTP + SSH** tylko do wgrywania strony (np. `wgranie`). Zapisz:
   - **serwer** (np. `xxxx.ftp.infomaniak.com`),
   - **nazwę użytkownika**.
2. Manager → Strony → novusignis.org → sprawdź **folder strony** na serwerze (np. `/sites/novusignis.org`). To będzie `SFTP_DIR`. Nie może to być sam korzeń hostingu `/`.

## 2. Klucz SSH (na Twoim komputerze, PowerShell)

```powershell
ssh-keygen -t ed25519 -C "github-wgranie-novusignis" -f "$HOME\wgranie-novusignis" -N '""'
```

Powstają dwa pliki: `wgranie-novusignis` (prywatny, dla GitHuba) i `wgranie-novusignis.pub` (publiczny, dla Infomaniaka). Infomaniak odrzuca klucze RSA, dlatego ed25519.

## 3. Klucz publiczny na serwerze

Przez **Web SSH** w Managerze (albo program FTP) w katalogu głównym hostingu:

```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
```

Wklej całą zawartość `wgranie-novusignis.pub` jako jedną linię do pliku `~/.ssh/authorized_keys`, potem:

```bash
chmod 600 ~/.ssh/authorized_keys
```

## 4. Odcisk serwera i próba połączenia (PowerShell)

```powershell
ssh-keyscan -t ed25519 xxxx.ftp.infomaniak.com
```

Skopiuj cały wynik (to będzie `SFTP_KNOWN_HOSTS`). Sprawdź połączenie:

```powershell
sftp -i "$HOME\wgranie-novusignis" wgranie@xxxx.ftp.infomaniak.com
```

Jeśli widzisz `sftp>`, wpisz `ls` (powinien być widoczny folder strony) i `exit`.

## 5. GitHub: środowisko i sekrety

W repozytorium: **Settings → Environments → New environment** → nazwa `prod`.

- Opcjonalnie zaznacz **Required reviewers** i wybierz siebie: wtedy każde wgranie czeka na Twoje kliknięcie „Approve”. Na start polecam.
- W tym środowisku (`prod`) dodaj **Environment secrets**:

| Nazwa | Wartość |
| --- | --- |
| `SFTP_HOST` | serwer z kroku 1 |
| `SFTP_USER` | użytkownik z kroku 1 |
| `SFTP_KEY` | cała zawartość pliku `wgranie-novusignis` (prywatnego), razem z liniami BEGIN/END |
| `SFTP_KNOWN_HOSTS` | wynik `ssh-keyscan` z kroku 4 |

- i **Environment variables**:

| Nazwa | Wartość |
| --- | --- |
| `SFTP_DIR` | folder strony z kroku 1 |
| `SFTP_DELETE` | na start **puste**; później `tak` (patrz krok 7) |

Po wklejeniu klucza prywatnego do GitHuba możesz go przenieść do menedżera haseł i usunąć z dysku.

## 6. Ochrona gałęzi main

**Settings → Rules → Rulesets → New branch ruleset**: cel `main`, zaznacz **Require a pull request before merging** (i ewentualnie wymagane zatwierdzenie). Wtedy zmiany, także poprawki tłumaczeń od innych osób, wchodzą tylko przez pull request, który akceptujesz.

## 7. Pierwsze wgranie

1. Zakładka **Actions → Wgranie strony → Run workflow** (gałąź `main`).
2. Kroki „Budowa strony”, „Kontrola stron”, „Paczka…” muszą być zielone; potem „Wysłanie na Infomaniak”.
3. Sprawdź novusignis.org w przeglądarce (także `/en/`, `/czytaj.txt`).
4. Przy `SFTP_DELETE` pustym automat tylko dodaje i nadpisuje pliki: stare pliki starej strony zostają na serwerze. Gdy upewnisz się, że `SFTP_DIR` wskazuje właściwy folder, ustaw `SFTP_DELETE` = `tak`: wtedy usuwa z serwera pliki, których nie ma w paczce (folder `.ssh`, `.well-known` i plik `.htaccess` są zawsze pomijane).

## 8. Formularz OmniVox (od 4.11.2026, test)

Strona `omnivox.html` wysyła wpis do `api/omnivox.php`, a skrypt dodaje go do dyskusji w repozytorium NovusIgnis/OmniVox jako aplikacja GitHub fundacji. Klucz aplikacji trafia na serwer przy wgraniu, do pliku `../omnivox/config.php` obok folderu strony (nie do niego), więc nie da się go pobrać przez przeglądarkę.

1. W OmniVox, w dyskusjach, kategoria **Z formularza** (format „Open-ended discussion”).
2. Aplikacja GitHub organizacji: https://github.com/organizations/NovusIgnis/settings/apps/new
   - nazwa np. `Novus Ignis OmniVox`, Homepage URL `https://novusignis.org/pl/omnivox.html`;
   - **Webhook**: odznacz „Active”;
   - **Repository permissions → Discussions: Read and write** (Metadata: Read-only ustawia się samo); nic więcej;
   - „Where can this GitHub App be installed?”: **Only on this account**; Create GitHub App;
   - zapisz **App ID** (na górze strony aplikacji); niżej **Generate a private key** pobiera plik `.pem`.
3. Instalacja: na stronie aplikacji **Install App** → NovusIgnis → **Only select repositories** → OmniVox → Install. Numer instalacji jest na końcu adresu strony, na którą trafisz (`…/settings/installations/<numer>`).
4. W repozytorium strony, w środowisku `prod` (https://github.com/NovusIgnis/NovusIgnis.org/settings/environments):

| Nazwa | Rodzaj | Wartość |
| --- | --- | --- |
| `OMNIVOX_PRIVATE_KEY` | secret | cała zawartość pliku `.pem`, z liniami BEGIN i END |
| `OMNIVOX_APP_ID` | variable | App ID |
| `OMNIVOX_INSTALLATION_ID` | variable | numer instalacji |
| `OMNIVOX_PROBA` | variable | na start `tak` (tryb próbny: skrypt pokazuje wpis, ale go nie publikuje); potem usuń |
| `OMNIVOX_WLACZONY` | variable | `nie` wyłącza formularz (po zmianie: Actions → „Wgranie strony” → Run workflow) |

5. Plik `.pem` po wklejeniu przenieś do menedżera haseł i usuń z dysku.

**Wyłącznik natychmiastowy:** https://github.com/organizations/NovusIgnis/settings/installations → aplikacja → **Suspend**. Formularz przestaje publikować od razu, bez wgrywania strony.

## Wysyłane są tylko zmiany

Po każdym udanym wgraniu automat zapisuje na serwerze listę `.wgranie-sumy.txt`: odcisk SHA-256 każdego pliku strony. Przy następnym wgraniu pobiera ją, porównuje z nową paczką (`tools/wgranie-roznice.mjs`) i wysyła tylko pliki nowe i zmienione; przy `SFTP_DELETE` = `tak` usuwa te, które zniknęły z paczki, i tylko te (nie rusza plików, których nie wgrał). Porównuje treść, a nie datę ani rozmiar, bo każde budowanie daje plikom nowe daty, a zmiana jednej cyfry nie zmienia rozmiaru.

Całość idzie jak dawniej (`lftp mirror`), gdy listy na serwerze nie ma (pierwsze wgranie po tej zmianie), gdy zmienia się ponad 40% plików (np. po zmianie pliku stylów, który ma znacznik wersji w każdej stronie) albo gdy uruchomisz automat ręcznie z opcją **pełne**. Opcja przydaje się, gdy ktoś zmienił pliki na serwerze poza automatem. Nowa lista trafia na serwer na końcu, więc przerwane wgranie przy następnym powtórzy wszystko, co zmieniło się od ostatniego udanego.

## Jak wygląda poprawka tłumaczenia

1. Ktoś proponuje zmianę pliku (np. `content/de/manifest.md` albo `locales/de.json`) przez pull request albo przysyła ją mailem i wprowadza ją Claude lub Codex.
2. Ty przeglądasz zmianę i klikasz **Merge**.
3. Automat buduje, sprawdza i wgrywa stronę (z Twoim „Approve”, jeśli włączyłeś wymagane zatwierdzenie). Po 1–2 minutach zmiana jest na stronie.

## Gdy coś nie działa

- Czerwony krok „Kontrola stron” albo „Paczka”: strona ma błąd (np. zły odnośnik; na serwerze GitHuba wielkość liter w nazwach plików ma znaczenie). Nic nie zostało wysłane; treść błędu jest w logu kroku.
- Czerwony krok „Wysłanie”: zwykle zły klucz, odcisk serwera albo folder. Sprawdź krok 4 i sekrety.
- Kilka zmian zaakceptowanych tuż po sobie: wgrania idą po kolei, następne czeka na poprzednie (`concurrency`).
- rsync nie jest używany (nie wiadomo, czy jest na serwerze Infomaniaka); automat wysyła przez SFTP.
