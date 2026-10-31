---
tytul: Privatsphäre und Sicherheit in Suveria
opis: Vor wem Suveria Gespräche schützen soll, wie eine Nachricht das System durchläuft, wer die Schlüssel hat und wie wir prüfen werden, ob der Schutz funktioniert
grupa: suveria
kolejnosc: 2
menu: Privatsphäre und Sicherheit
---
# Privatsphäre und Sicherheit in Suveria

Diese Seite richtet sich an Menschen, die wissen möchten, worin der Schutz der Privatsphäre in Suveria bestehen soll, bevor sie Suveria ihre Gespräche anvertrauen. Sie vertieft die Seite [Was Suveria ist](suveria.md) und führt bei jedem Teil zum Whitepaper.

Ein Grundsatz ordnet das Ganze: Privatsphäre darf nicht auf Vertrauen in die guten Absichten der Stiftung oder der Serveradministration beruhen, sondern auf Schutzmechanismen, deren Funktionsweise sich unabhängig überprüfen lässt. Das Manifest formuliert es so: „Jedes Sicherheitsversprechen muss seinen Beweis in Code und Silizium haben, nicht nur in unseren Worten.“ Gespräche sollen hauptsächlich auf deinen eigenen Geräten gespeichert werden, und wir schaffen keine verborgenen Zugänge zu privaten Inhalten.

Suveria ist heute ein Entwurf. Alles Folgende beschreibt, wie sie funktionieren soll; keinen der Versuche, die das bestätigen sollen, haben wir bisher durchgeführt.

Mehr: [Manifest, Abschnitt 2.2](../manifest.md#s2-2) und [Abschnitt 3.1](../manifest.md#s3-1).

## Vor wem sie schützen soll und vor wem nicht

Wir schützen Inhalte von Gesprächen und Dateien, Verlauf und Gedächtnis des Assistenten, Schlüssel (also geheime Zeichenfolgen, die verschlüsselte Daten öffnen), Abrechnungsdaten und Metadaten, also Informationen über die Verbindung selbst: Zeitpunkt, Netzwerkadresse und Größe der Anfrage.

Eine vertrauliche Umgebung ist ein hardwareseitig abgeschotteter Teil eines Servers, in den auch seine Administration nicht hineinsehen kann. Ob das tatsächlich so ist, soll die Attestierung bestätigen, also ein von der Hardware signierter Nachweis, welche Software auf dem Server läuft und in welchem Schutzmodus. Eine vertrauliche API ist eine solche Umgebung bei einem externen Anbieter, mit der sich unsere Anwendung verbindet (eine API ist eine Verbindung zwischen Programmen). Die Tabelle beschreibt die beabsichtigte Funktionsweise, die noch nicht in einem Versuch geprüft wurde:

| Vor wem sie schützen soll | Modell auf deinem Gerät | Vertrauliche Umgebung auf Servern | Vertrauliche API eines externen Anbieters |
| --- | --- | --- | --- |
| Administration des Anbieters | entfällt: Verarbeitung auf dem Gerät | soll schützen: Hardware-Isolation | Deklaration des Anbieters, zu überprüfen |
| Netzwerkbeobachtende | entfällt ohne Netzwerk; Datenverkehr von Anbindungen erfordert eine Bewertung | teilweiser Schutz: Inhalte verschlüsselt, Metadaten erfordern eigene Maßnahmen | teilweiser Schutz, wenn der Verbindungsschlüssel an die Attestierung gebunden ist |
| Person mit physischem Zugang zum Server | entfällt; entscheidend ist der Zugang zum Gerät | schützt nicht: Im fremden Rechenzentrum hat der Anbieter Zugang; auf eigener Hardware sichtbare physische Kontrolle | schützt nicht: Der Anbieter hat Zugang |
| Stiftung | entfällt: Die Stiftung ist an der Verarbeitung nicht beteiligt | soll schützen: Die Isolation gilt auch gegenüber uns, die Schlüssel zum Speichern hast du | soll Inhalte schützen: Gateway, also unser Teil zur Abrechnung der Anfragen, ohne Einblick in Inhalte; wo die Verschlüsselung endet, zeigen wir vor der Pilotphase |

Legende: „soll schützen“ bezeichnet den beabsichtigten Schutz, „teilweiser Schutz“ schützt die Inhalte, aber nicht alles darum herum, „schützt nicht“ benennt ausdrücklich eine Grenze, und „Deklaration des Anbieters, zu überprüfen“ bedeutet, dass wir den Schutz bis zur eigenen Verifizierung nicht bestätigen. Die Administration des Anbieters verwaltet die Server, auf denen das Modell läuft; Netzwerkbeobachtende sehen den Datenverkehr zwischen deinem Gerät und dem Server, aber die Inhalte sind unterwegs verschlüsselt; eine Person mit physischem Zugang kann das Servergehäuse öffnen; die Stiftung sind wir als Betreiber des Dienstes.

Drei Grenzen sollte man von Anfang an kennen. Confidential Computing repariert keinen infizierten Computer und schützt nicht vor allen, die physischen Zugang zum Server haben: 2025 bauten Forschende für weniger als tausend Dollar ein Gerät, mit dem sich bei physischem Zugang zum Server ein Hardwarenachweis fälschen lässt. Der Schutz auf Servern beruht auch auf den Schlüsseln des Prozessorherstellers, der redlich handeln muss.

Mehr: [Whitepaper zu Suveria, Kapitel 2](../whitepaper-suveria.md#s2) und [Abschnitt 2.3](../whitepaper-suveria.md#s2-3).

## Wie eine Nachricht das System durchläuft

Suveria soll aus einer Anwendung auf deinem Gerät, einem Gateway (unserem Teil des Systems, der Anfragen abrechnet und das Ausgabenlimit überwacht), einer vertraulichen Umgebung mit dem Modell, der Speicherung verschlüsselter Kopien und einer optionalen Zwischenstation bestehen, die deine Adresse verbirgt.

In der angestrebten Variante soll eine Nachricht diesen Weg nehmen:

1. Die Anwendung lädt die Beschreibung der freigegebenen Fassung herunter und prüft die Attestierung des Servers.
2. Sie vergleicht diesen Nachweis mit einer öffentlichen Richtlinie. Der Schlüssel, mit dem sie die Nachricht verschlüsselt, muss daran gebunden sein.
3. Erst nach erfolgreicher Prüfung stellt sie eine verschlüsselte Verbindung her. Eine Abweichung stoppt das Senden der Daten; der Wechsel zu einer anderen Variante erfordert deine bewusste Entscheidung.
4. Die Umgebung verarbeitet die Anfrage mit beschränktem Zugang zu Netzwerk und Werkzeugen, gibt das Ergebnis zurück und löscht die Arbeitsdaten gemäß der veröffentlichten Richtlinie.
5. Das Gespräch oder das Gedächtnis wird nur in dem Umfang gespeichert, den du wählst.

Die Attestierung hilft festzustellen, was gestartet wurde, beweist aber für sich allein nicht, dass dieser Code sicher ist; nötig sind Codeprüfungen und die Möglichkeit unabhängiger Überprüfung. Vor der Pilotphase werden wir in der Anwendung zeigen, wo die von deinem Gerät kontrollierte Verschlüsselung endet und ob das Gateway die Inhalte sieht.

Besonders vorsichtig sind wir, wenn du Quellen mit Nachrichten anderer Menschen anbindest, etwa ein E-Mail-Postfach. Eine fremde Nachricht kann versteckte Anweisungen enthalten, die das Modell dazu bringen sollen, privates Gedächtnis offenzulegen. Deshalb darf der Assistent nicht selbst Nachrichten senden, Netzwerkadressen öffnen oder den Persönlichen Kanon (deine Sammlung von Grundsätzen und Werten) ändern, ohne dass ein Mensch dies bestätigt.

Mit dem Start des Dienstes werden wir ein Verzeichnis aller Arten von Daten über seinen Betrieb veröffentlichen, die wir erheben, mit Zweck und Speicherdauer. Daten außerhalb dieses Verzeichnisses erheben wir nicht.

Mehr: [Whitepaper zu Suveria, Kapitel 3](../whitepaper-suveria.md#s3).

## Deine Schlüssel

Die Schlüssel zu privaten Containern, also verschlüsselten Datensammlungen, bleiben unter deiner Kontrolle. Die Stiftung speichert weder Schlüssel noch Teile davon und kann deshalb weder den Zugang für dich wiederherstellen noch deine Daten herausgeben. Die Wiederherstellung des Kontos beim Betreiber entsperrt die Inhalte nicht.

Der Verlust aller Kopien des Schlüssels kann einen dauerhaften Datenverlust bedeuten. Deshalb erwägen wir Wiederherstellungswege, die sich kombinieren lassen: ein zweites Gerät mit Zugang, einen auf Papier oder in einem Passwortmanager gespeicherten Schlüssel, einen Hardwareschlüssel oder das Aufteilen des Schlüssels unter mehreren vertrauenswürdigen Personen, von denen keine die Daten allein lesen kann. Für den Anfang empfehlen wir ein zweites Gerät und einen auf Papier notierten Schlüssel. Jeden Mechanismus prüfen wir durch einen Versuch zur Wiederherstellung der Daten.

Mehr: [Whitepaper zu Suveria, Abschnitt 2.2](../whitepaper-suveria.md#s2-2).

## Was verborgen bleibt und doch etwas verrät: der Übertragungsrhythmus

Die Antwort kommt in Paketen zu dir, also in Datenportionen. Die Verschlüsselung verbirgt deren Inhalt, aber nicht ihre Länge oder ihren Rhythmus. Das ist ein Seitenkanal: Informationen gelangen nicht über den Inhalt nach außen, sondern über die Art ihrer Übertragung. Studien aus den Jahren 2024–2025 zeigten, dass Netzwerkbeobachtende daraus das Thema und manchmal den Inhalt eines Gesprächs rekonstruieren können. Deshalb wollen wir im vertraulichen Modus die Antwort in Portionen mit fester Größe und gleichmäßigem Rhythmus senden; das kostet etwas Latenz und Durchsatz.

Mehr: [Whitepaper zu Suveria, Kapitel 3](../whitepaper-suveria.md#s3).

## Fassungen, die sich überprüfen lassen

Das Vertrauen in die Software soll nicht von einer einzelnen Person oder allein von der Stiftung abhängen. Alle können die Anwendung selbst aus dem veröffentlichten Code bauen und überprüfen, dass das Ergebnis mit dem übereinstimmt, das sie installieren. Mindestens zwei unabhängige Stellen außerhalb der Stiftung sollen die Fassung reproduzieren und die Übereinstimmung öffentlich bestätigen; bis wir sie finden, kennzeichnen wir die Fassung als nicht durch Dritte bestätigt.

Den vollständigen Schutz entwerfen wir für die installierte Anwendung. Im Browser liefert der Betreiber den Code, der den Server prüft, jedes Mal neu, deshalb wird die Browserfassung ihr niedrigeres Schutzniveau klar beschreiben.

Mehr: [Whitepaper zu Suveria, Kapitel 3](../whitepaper-suveria.md#s3).

## Mehrere Grafikkarten

Das Modell, das wir betreiben möchten, passt nicht auf eine einzelne Grafikkarte, deshalb fließen Daten auch zwischen den Karten. Der Schutz muss sowohl für die Karten selbst als auch für ihre Verbindungen geprüft werden; die Produktbezeichnung „secure“ ersetzt das nicht. Das Angebot eines Anbieters vergleichen wir erst nach einem Versuch mit unserer eigenen Anwendung.

Mehr: [Whitepaper zu Suveria, Kapitel 5](../whitepaper-suveria.md#s5).

## Wie wir prüfen werden, ob es funktioniert

Der wichtigste Versuch: Ein Team mit Betreiberberechtigungen außerhalb der vertraulichen Umgebung (Gateway, Datenträger, Netzwerk, Protokolle) versucht, die Gespräche von Testkonten auszulesen, in denen geheime Zeichenfolgen versteckt sind. Wenn irgendjemand sie ausliest, auch wir, ist der Versuch gescheitert.

Bevor wir eine Fassung als vertraulich bezeichnen, werden wir unter anderem korrekte Attestierung, die Verweigerung des Datenversands nach dem Austausch von Code oder Schlüssel, das Fehlen von Inhalten in Protokollen sowie Löschen und Wiederherstellen dokumentieren. Die Ergebnisse, auch gescheiterte, kommen ins Ergebnisprotokoll. Stand am 29. Oktober 2026: Wir haben noch keinen der beschriebenen Versuche durchgeführt.

Wir wollen die Versuche offen durchführen. Wenn du dich mit Sicherheit, Kryptografie, Infrastruktur oder Anwendungen beschäftigst oder das Projekt kritisch betrachten möchtest, schreib an salve@novusignis.org mit dem Betreff „[Mitmachen] Versuche mit Suveria“.

Mehr: [Whitepaper zu Suveria, Kapitel 9](../whitepaper-suveria.md#s9).

## Lies den Text und sag uns, was du denkst

Den vollständigen Vergleich der Varianten und Bedrohungen, die Schutzmechanismen der Anwendung und die Liste offener Fragen findest du im [Whitepaper zu Suveria](../whitepaper-suveria.md). Wenn dich etwas beschäftigt oder dir falsch erscheint, markiere die Stelle im Dokument und nutze die Schaltfläche „Ich habe eine Anmerkung“ oder schreib an salve@novusignis.org.