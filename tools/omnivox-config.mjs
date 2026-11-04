#!/usr/bin/env node
/**
 * Novus Ignis · plik konfiguracji formularza OmniVox (api/omnivox.php) z ustawień GitHuba, dla workflow wgrania.
 *
 *   node tools/omnivox-config.mjs > config.php
 *
 * Czyta zmienne środowiska (w workflow: środowisko `prod`, zob. WGRYWANIE.md, krok 8):
 *   OMNIVOX_APP_ID, OMNIVOX_INSTALLATION_ID   zmienne: numer aplikacji GitHub i numer jej instalacji na OmniVox
 *   OMNIVOX_PRIVATE_KEY                       sekret: klucz prywatny aplikacji (cały plik .pem)
 *   OMNIVOX_WLACZONY                          zmienna: „nie” wyłącza formularz (domyślnie włączony)
 *   OMNIVOX_PROBA                             zmienna: „tak” = tryb próbny, wpis nie jest publikowany
 * Wypisuje plik PHP; workflow wgrywa go poza folder strony (../omnivox/config.php), skąd czyta go api/omnivox.php.
 * Klucz nie trafia do repozytorium ani do folderu strony.
 */
const e = process.env;
const blad = s => { console.error(s); process.exit(1); };
const brak = ['OMNIVOX_APP_ID', 'OMNIVOX_INSTALLATION_ID', 'OMNIVOX_PRIVATE_KEY'].filter(k => !(e[k] || '').trim());
if (brak.length) blad('Brak ustawień: ' + brak.join(', ') + ' (zob. WGRYWANIE.md, krok 8).');
const appId = e.OMNIVOX_APP_ID.trim(), inst = e.OMNIVOX_INSTALLATION_ID.trim();
if (!/^\d+$/.test(appId) || !/^\d+$/.test(inst)) blad('OMNIVOX_APP_ID i OMNIVOX_INSTALLATION_ID to same cyfry.');
const klucz = e.OMNIVOX_PRIVATE_KEY.replace(/\r\n?/g, '\n').trim() + '\n';
if (!/^-----BEGIN [A-Z ]*PRIVATE KEY-----\n[\s\S]+\n-----END [A-Z ]*PRIVATE KEY-----\n$/.test(klucz)) blad('OMNIVOX_PRIVATE_KEY nie wygląda na klucz prywatny PEM (cały plik, z liniami BEGIN i END).');
const php = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const tak = v => String(v || '').trim().toLowerCase() === 'tak';
const nie = v => String(v || '').trim().toLowerCase() === 'nie';

process.stdout.write(`<?php
// Wygenerowane przez tools/omnivox-config.mjs przy wgraniu strony. Zmiany wprowadzaj w ustawieniach GitHuba, nie tutaj.
return [
  'enabled' => ${nie(e.OMNIVOX_WLACZONY) ? 'false' : 'true'},
  'dry_run' => ${tak(e.OMNIVOX_PROBA) ? 'true' : 'false'},
  'owner' => 'NovusIgnis',
  'repo' => 'OmniVox',
  'category' => 'OmniVoxForm',
  'per_hour' => 30,
  'per_day' => 200,
  'app_id' => ${php(appId)},
  'installation_id' => ${php(inst)},
  'private_key' => ${php(klucz)},
];
`);
