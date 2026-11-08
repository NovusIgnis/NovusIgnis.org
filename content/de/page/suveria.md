---
tytul: Was Suveria ist
opis: Ein privater Raum für die Arbeit mit digitaler Intelligenz, den die Stiftung entwirft: was möglich sein soll, wovor er schützen soll und wie weit die Arbeit heute ist
grupa: suveria
kolejnosc: 1
menu: Was Suveria ist
---
# Was Suveria ist

Diese Seite erklärt kurz, was Suveria sein soll, für wen sie entsteht und wie weit die Arbeit ist. Bei jedem Teil findest du einen Link zum Whitepaper zu Suveria, wenn du mehr wissen möchtest.

Suveria soll ein privater Raum im Internet sein, in dem ein Mensch mit digitaler Intelligenz spricht, an eigenen Materialien arbeitet und zu früheren Gedanken zurückkehrt, wie im eigenen Zuhause hinter geschlossener Tür. Die Stiftung Novus Ignis entwirft sie für Menschen aus allen Teilen der Welt.

Suveria ist heute ein Entwurf. Sie entsteht, damit man mit digitaler Intelligenz über Gesundheit, Beziehungen, Arbeit, Geld und Lebenspläne sprechen kann, ohne befürchten zu müssen, dass ein so tiefer Einblick in einen Menschen irgendwann zu Geld gemacht oder genutzt wird, um auf diese Person Einfluss zu nehmen. Die erste Fassung richtet sich an Menschen, für die überprüfbare Privatsphäre ein Grund ist, sich für Suveria zu entscheiden.

Mehr: [Whitepaper zu Suveria, Kapitel 1](../whitepaper-suveria.md#s1).

## Was wir ermöglichen wollen

In Suveria wollen wir es ermöglichen:

- über persönliche und berufliche Angelegenheiten zu sprechen und dabei zu sehen, wo das Gespräch verarbeitet wird und wer es sehen kann;
- an eigenen Dokumenten und Dateien zu arbeiten, die Ergebnisse zu speichern und in offenen Formaten an einen anderen Ort mitzunehmen;
- Gespräche, Dateien und das Gedächtnis des Assistenten vor allem auf den eigenen Geräten zu speichern, verschlüsselt mit einem Schlüssel unter deiner Kontrolle;
- mit eigener Zustimmung das Gedächtnis früherer Gespräche zu nutzen und einen Persönlichen Kanon aufzubauen, also eine Sammlung eigener Grundsätze und Werte;
- eine Arbeitsweise zu wählen, vom Modell auf dem eigenen Gerät bis zur vertraulichen Umgebung auf einem Server, und zu wissen, wovor jede davon schützt;
- für die tatsächliche Nutzung zu zahlen, mit einem selbst festgelegten Ausgabenlimit;
- einen Gedanken privat auszuarbeiten und ihn dann bewusst in das gemeinsame Gespräch im OmniForum einzubringen, also in den öffentlichen Raum für Gespräch und Entscheidungen.

Schon der erste Tag soll das ruhige Gefühl vermitteln, zu Hause zu sein. Wir wollen auch ermöglichen, eigene Notizen und Gesprächsarchive aus anderen Diensten digitaler Intelligenz zu übernehmen. Die Nutzung von Suveria ist keine Zustimmung zur Verwendung von Gesprächen für das Training von Modellen.

Mehr: [Whitepaper zu Suveria, Kapitel 1](../whitepaper-suveria.md#s1).

## Wovor sie schützt und was es noch nicht gibt

Der Schutz soll auf Schutzmechanismen beruhen, die sich unabhängig überprüfen lassen, und nicht auf dem Vertrauen in die Stiftung, auch nicht in uns als die Personen, die die Infrastruktur betreiben. Bis heute hat noch keine solche Überprüfung stattgefunden.

Wir vergleichen mehrere Arbeitsweisen, weil jede vor etwas anderem schützt:

- **Ein Modell auf deinem Gerät.** Das Gespräch verlässt weder das Telefon noch den Computer, sofern der Assistent keine Anbindungen an Dienste im Netz nutzt; entscheidend sind der Zustand des Geräts, die Berechtigungen der Anwendung und wer physischen Zugang dazu hat.
- **Eine vertrauliche Umgebung auf Servern.** Der Server hat einen hardwareseitig abgeschotteten Bereich, in den auch seine Administration nicht hineinsehen kann; dort liest das Modell die Inhalte. Die Hardware soll dies mit einer digitalen Signatur bestätigen (das ist Attestierung: ein Nachweis, welche Software auf einer entfernten Maschine läuft und in welchem Schutzmodus). Dabei muss man dem Prozessorhersteller vertrauen. Das ist die angestrebte Variante.
- **Eine vertrauliche API eines externen Anbieters.** Eine API ist die Verbindung, über die unsere Anwendung das Gespräch an ein Modell bei einem anderen Anbieter sendet. Die erste Fassung wird höchstwahrscheinlich eine vertrauliche API nutzen; wenn wir vor ihrem Start genug Mittel für die Miete eigener Server in einer vertraulichen Umgebung aufbringen, kann sie von Anfang an darauf laufen. Vertraulichkeit ist hier zunächst eine Deklaration des Anbieters, die wir überprüfen werden; bis die Versuche positiv ausfallen, kennzeichnen wir diese Variante als deklarierten und nicht als vertraulichen Schutz.
- **Eine gewöhnliche API des Modellanbieters.** Der Anbieter hat Zugang zu den Inhalten; das ist nicht die Standardvariante der privaten Suveria.

Confidential Computing repariert keinen infizierten Computer und schützt nicht vor allen, die physischen Zugang zum Server haben. Keine Variante erhält die Bezeichnung „vollständige Privatsphäre“, bevor die konkrete Konfiguration überprüft wurde. Bei jedem Gespräch soll sichtbar sein, mit welcher Variante du arbeitest, und ein Wechsel der Variante erfordert deine bewusste Entscheidung.

Mehr: [Whitepaper zu Suveria, Kapitel 2](../whitepaper-suveria.md#s2) und [Abschnitt 2.3](../whitepaper-suveria.md#s2-3). Siehe auch: [Privatsphäre und Sicherheit](suveria-prywatnosc.md).

## Modelle

Die Grundlage des Projekts sind offene Modelle, die sich eigenständig betreiben lassen. Bei der Wahl eines Modells berücksichtigen wir unter anderem die Qualität in vielen Sprachen, Verlässlichkeit, Lizenz, Kosten und die Möglichkeit, es in der erforderlichen Schutzarchitektur zu betreiben.

Den Wechsel oder die Außerbetriebnahme eines Modells kündigen wir im Voraus an, und der Gesprächsverlauf bleibt bei dir: Du kannst ein Nachfolgemodell wählen, die Daten exportieren oder die Arbeit beenden. Der Zeitpunkt des Modellwechsels soll im Gespräch sichtbar sein.

Mehr: [Whitepaper zu Suveria, Kapitel 6](../whitepaper-suveria.md#s6).

## Was es kostet

Das Manifest stellt die Hypothese auf, dass gemeinsame Infrastruktur pro Dollar mehr Rechenleistung und digitale Intelligenz bieten kann als geschlossene Dienste. Das Whitepaper berechnet dies mit Stand vom 29. Oktober 2026: Beim angenommenen Nutzungsprofil kostet eine vertrauliche API mit deklarierter Vertraulichkeit ca. 0,70–1,25 USD pro Person und Monat allein für die Berechnungen. Dazu kommen die Fixkosten der privaten Umgebung, die bei einer kleinen Gruppe am stärksten ins Gewicht fallen: bei 30 Teilnehmenden ca. 6–11 USD pro Person und Monat.

Das ist eine Schätzung auf dem Papier und keine Preisliste für Suveria: Die Rechnung enthält weder die Arbeit von Menschen noch Sicherheitsüberprüfungen, Zahlungen oder eine Reserve für Ausfälle. Stand der Hypothese an diesem Tag: Die Rechnung bringt uns ihr näher, bestätigt sie aber nicht.

Mehr: [Whitepaper zu Suveria, Kapitel 8](../whitepaper-suveria.md#s8). Siehe auch: [Was es kostet](suveria-koszty.md).

## Stand der Arbeit

Das Whitepaper führt ein Ergebnisprotokoll. Sein Stand am 29. Oktober 2026: Wir haben noch keinen der beschriebenen Versuche durchgeführt, keine Grafikkarten gemietet und kein Modell in Suveria gestartet. Die erste Messung planen wir auf einer einzelnen vertraulichen Grafikkarte mit einem kleineren Modell.

Der wichtigste Versuch: Ein Team mit den Berechtigungen des Betreibers versucht, die Gespräche von Testkonten auszulesen, in denen geheime Zeichenfolgen versteckt sind. Wenn irgendjemand sie ausliest, auch wir, ist der Versuch gescheitert.

Wir wollen die Versuche offen durchführen. Wenn du dich mit Sicherheit, Kryptografie, Infrastruktur oder Anwendungen beschäftigst oder das Projekt kritisch betrachten möchtest, schreib an salve@novusignis.org mit dem Betreff „[Mitmachen] Versuche mit Suveria“.

Mehr: [Whitepaper zu Suveria, Kapitel 9](../whitepaper-suveria.md#s9) und [Abschnitt 8.2](../whitepaper-suveria.md#s8-2).

## Warum Suveria ein Weg und kein Selbstzweck ist

Das Manifest sagt es ausdrücklich:

> Suveria ist heute unser bester Weg zu privater Arbeit mit digitaler Intelligenz und kein Selbstzweck. Wenn Modelle auf das eigene Gerät passen oder ein besserer Weg des Schutzes entsteht, wird ein Teil dieses Weges überflüssig, und das werden wir als gute Nachricht betrachten.

Mehr: [Manifest, Abschnitt 3.1](../manifest.md#s3-1).

## Lies den Text und sag uns, was du denkst

Die vollständige Beschreibung mit einer Tabelle der Schutzvarianten, einer Kostenrechnung und einer Liste noch offener Fragen findest du im [Whitepaper zu Suveria](../whitepaper-suveria.md). Wenn dich etwas beschäftigt oder dir falsch erscheint, markiere diese Stelle im Dokument und nutze die Schaltfläche „Ich habe eine Anmerkung“ oder schreib an salve@novusignis.org.