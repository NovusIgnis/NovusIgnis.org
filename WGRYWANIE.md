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

## Jak wygląda poprawka tłumaczenia

1. Ktoś proponuje zmianę pliku (np. `content/de/manifest.md` albo `locales/de.json`) przez pull request albo przysyła ją mailem i wprowadza ją Claude lub Codex.
2. Ty przeglądasz zmianę i klikasz **Merge**.
3. Automat buduje, sprawdza i wgrywa stronę (z Twoim „Approve”, jeśli włączyłeś wymagane zatwierdzenie). Po 1–2 minutach zmiana jest na stronie.

## Gdy coś nie działa

- Czerwony krok „Kontrola stron” albo „Paczka”: strona ma błąd (np. zły odnośnik; na serwerze GitHuba wielkość liter w nazwach plików ma znaczenie). Nic nie zostało wysłane; treść błędu jest w logu kroku.
- Czerwony krok „Wysłanie”: zwykle zły klucz, odcisk serwera albo folder. Sprawdź krok 4 i sekrety.
- Kilka zmian zaakceptowanych tuż po sobie: wgrania idą po kolei, następne czeka na poprzednie (`concurrency`).
- rsync nie jest używany (nie wiadomo, czy jest na serwerze Infomaniaka); automat wysyła przez SFTP.
