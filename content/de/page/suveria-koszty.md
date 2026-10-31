---
tytul: Was Suveria kostet
opis: Wofür man in Suveria bezahlen soll, was eine datierte Rechnung ergibt und warum sie eine Schätzung und keine Preisliste ist
grupa: suveria
kolejnosc: 3
menu: Was es kostet
---
# Was Suveria kostet

Auf dieser Seite geht es um dein Geld: wofür man in Suveria bezahlen soll, wie die Rechnung entsteht und was unsere Berechnungen ergeben. Suveria ist heute ein Entwurf. Den Dienst gibt es noch nicht, deshalb gibt es auch noch keinen Preis. Die folgenden Zahlen stammen aus einer Rechnung vom 29. Oktober 2026 (außer der Zeile „Gesamt“, die wir selbst addiert haben). Das ist eine Kostenberechnung auf dem Papier, keine Preisliste.

Mehr: [Whitepaper zu Suveria, Kapitel 8](../whitepaper-suveria.md#s8).

## Wofür du bezahlst

Der Grundsatz ist einfach: Du bezahlst für das, was du tatsächlich nutzt, zusammen mit einem fair berechneten Anteil an den gemeinsamen Kosten (denen, die sich keiner einzelnen Person zuordnen lassen, etwa Sicherheit oder Buchhaltung), siehst, wofür du bezahlst, und legst selbst die Grenze deiner Ausgaben fest. Die Gebühr deckt die Kosten und nichts darüber hinaus. Alles Weitere ist eine freiwillige Spende, die gesondert ausgewiesen wird.

Die Rechnung hat zwei Teile:

- **tatsächliche Nutzung** im jeweiligen Zyklus: Berechnungen, Speicher, Datenübertragung;
- **ein offen zugewiesener Anteil an den Fixkosten**, die die Infrastruktur betriebsbereit halten: Sicherheit, Zahlungen, Buchhaltung, Betreuung, Verschleiß und Ersatz der Hardware.

Die gemeinsamen Kosten wollen wir nach einer öffentlichen Regel aufteilen, die wir in der Pilotphase wählen: proportional zur Nutzung oder zu gleichen Teilen unter den aktiven Konten. Die geschätzten Kosten einer Aufgabe sollen jederzeit überprüfbar sein, und deinen Anteil an den gemeinsamen Kosten werden wir vor dem Abrechnungszyklus bekannt geben; er bleibt stets innerhalb deines Limits. Jede Preisänderung werden wir mit ihrer Ursache und ihren Auswirkungen auf die Nutzenden ankündigen.

Mehr: [Whitepaper zu den Arbeitsgrundsätzen der Stiftung, Kapitel 3](../whitepaper-zasady-fundacji.md#s3) und [Abschnitt 3.1](../whitepaper-zasady-fundacji.md#s3-1); [Manifest, Abschnitt 6.1](../manifest.md#s6-1).

## Was die Rechnung ergibt

Für die Berechnung haben wir eine beispielhafte Nutzung angenommen: 20 Fragen täglich, jede Antwort ca. 600 Token lang (ein Token ist ein Textstück, ungefähr ein kurzes Wort), jeden Tag über 30 Tage. Das ist ein Lastmodell für einen Versuch und keine Prognose. Die Preise stammen aus öffentlichen Preislisten, ohne Steuern.

Die erste Fassung wird höchstwahrscheinlich eine vertrauliche API nutzen (wenn wir genug Mittel aufbringen, kann sie von Anfang an auf eigenen gemieteten Servern laufen): Das Modell digitaler Intelligenz läuft bei einem externen Anbieter, der erklärt, die Gesprächsinhalte nicht zu lesen, und wir werden diese Deklaration überprüfen. Hinzu kommt eine private Umgebung: eine oder zwei vertrauliche Maschinen mit Gateway, Gedächtnis und Dateien der Nutzenden. Diese Kosten sind fix, deshalb fallen sie bei einer kleinen Gruppe am stärksten ins Gewicht.

| Pro Person und Monat, wenn Suveria genutzt würde von (Rechnung vom 29.10.2026) | 30 Personen | 100 Personen | 1.000 Personen |
| --- | --- | --- | --- |
| Nur Berechnungen in einer vertraulichen API | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Fixkosten der privaten Umgebung (170–340 USD monatlich) | ca. 6–11 USD | ca. 1,70–3,40 USD | einige Dutzend Cent |

Das ist eine Schätzung auf dem Papier: Sie enthält weder die Arbeit von Menschen noch Sicherheitsüberprüfungen, Zahlungen oder eine Reserve für Ausfälle; ob Maschinen dieser Größe ausreichen, werden wir in der Pilotphase prüfen. Die Fixkosten wollen wir gesondert zeigen und aus dem Unterstützungsbudget für die Pilotphase decken, etwa aus Spenden für Suveria. Wir gehen nicht davon aus, dass wir solche Mittel bereits haben.

Mehr: [Whitepaper zu Suveria, Kapitel 7](../whitepaper-suveria.md#s7) und [Abschnitt 8.1](../whitepaper-suveria.md#s8-1); [Whitepaper zu den Arbeitsgrundsätzen der Stiftung, Abschnitt 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Von 30 Menschen zur ganzen Menschheit

Mit derselben beispielhaften Nutzung lässt sich berechnen, wie viel Arbeit das Modell bei verschiedenen Personenzahlen hätte. In der Tabelle bezeichnet „Spitze“ die am stärksten ausgelastete Stunde des Tages, wenn Menschen aus verschiedenen Zeitzonen Suveria nutzen (ca. das 1,51-Fache des Durchschnitts).

| Aktive Personen | Fragen im Monat | Antworttext zur Spitzenzeit |
| --- | ---: | ---: |
| 30 | 18.000 | 6,3 Token pro Sekunde |
| 100 | 60.000 | 20,9 Token pro Sekunde |
| 1.000 | 600.000 | 209 Token pro Sekunde |
| 100.000 | 60 Mio. | 20.921 Token pro Sekunde |
| 1 Mio. | 600 Mio. | 209.208 Token pro Sekunde |
| 1 Mrd. | 600 Mrd. | 209,2 Mio. Token pro Sekunde |
| 10 Mrd. | 6 Bio. | 2,09 Mrd. Token pro Sekunde |

Wie viel Hardware ist das? Das Whitepaper führt ein Gedankenexperiment durch. Wenn jede der 10 Mrd. Personen Suveria auf diese Weise nutzen würde, bräuchte man bei der für DeepSeek-V4.1-Flash gemessenen Leistung ca. 2,25 Mio. B200-Grafikkarten und ca. 4 GW Leistung. Für eine Milliarde Personen wären es ca. 225.000 Grafikkarten und 0,4 GW, für eine Million ca. 225 Grafikkarten. Zum Vergleich schätzte Epoch AI Anfang 2026, dass weltweit mehr als 15 Mio. H100-Äquivalente für digitale Intelligenz arbeiten und über 10 GW Leistung benötigen. Das ist eine Vereinfachung: Die beispielhafte Nutzung ist sparsam, und intensive Arbeit, größere Modelle und Bilder erfordern ein Vielfaches mehr.

Kosten pro Person für Millionen Menschen nennen wir nicht: Bei dieser Größenordnung würden sich Hardware, Preise und der Betrieb des Dienstes ändern, sodass eine solche Zahl geraten wäre. Die Rechnung vom 29.10.2026 sagt nur, dass unter unseren Annahmen eigene Infrastruktur bei etwas mehr als zehntausend bis zu mehreren zehntausend aktiven Personen günstiger werden kann als eine vertrauliche API.

Mehr: [Whitepaper zu Suveria, Kapitel 7](../whitepaper-suveria.md#s7).

## Warum wir in Dollar rechnen

Die Preise der Dienste werden wir in Dollar angeben, denn in dieser Währung wird Rechenleistung gekauft. Einzahlungen wollen wir auch in anderen Währungen annehmen, zum auf der Rechnung angegebenen Wechselkurs. Die Bücher der Stiftung führen wir in Złoty.

Mehr: [Whitepaper zu den Arbeitsgrundsätzen der Stiftung, Abschnitt 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Vorauszahlung, Erstattung, Aufrundung

- **Vorauszahlung.** Du gibst einen Betrag ein, und genau dieser Betrag wird deinem Guthaben gutgeschrieben, unabhängig von der Zahlungsart. Vorauszahlungen sollen auf einem gesonderten Bankkonto liegen; wir decken daraus keine Kosten der Stiftung, bevor der Dienst erbracht wurde.
- **Limit.** Bei der Einzahlung legst du fest, wie viel du höchstens ausgeben möchtest. Das Limit soll als Grenze wirken und nicht als nachträgliche Warnung. Das ist eine Anforderung, die erst umgesetzt und überprüft werden muss, keine bereits verfügbare Funktion.
- **Erstattung.** Nicht verbrauchtes Guthaben soll sich jederzeit zurückerhalten lassen, künftig mit einer einzigen Schaltfläche; Erstattungsfrist, mögliche Kosten, Mindesteinzahlung und weitere Einzelheiten wird die Ordnung festlegen. Nach Aufgabe des Kontos oder Schließung des Dienstes wird das Guthaben automatisch auf demselben Weg zurückgegeben. Nicht abgeholtes Guthaben fließt nicht in das Budget der Stiftung.
- **Aufrundung.** Beim Anlegen eines Kontos fragen wir, ob du jede Rechnung auf den nächsten vollen Dollar oder einen ähnlichen Gegenwert in der lokalen Währung aufrunden möchtest; die Differenz fließt als Spende in das gemeinsame Budget. Wir fragen, statt für jemanden das Kästchen anzukreuzen, und die Entscheidung lässt sich jederzeit mit einer einzigen Einstellung ändern.

Die Rechnung zeigt die Gebühr für den Dienst und den Spendenbetrag gesondert. Erstattungsfrist, Mindesteinzahlung und weitere Einzelheiten wird die Ordnung festlegen, die vor Annahme der ersten Vorauszahlung vorbereitet wird.

Mehr: [Whitepaper zu den Arbeitsgrundsätzen der Stiftung, Abschnitt 3.2](../whitepaper-zasady-fundacji.md#s3-2) und [Abschnitt 3.3](../whitepaper-zasady-fundacji.md#s3-3); [Whitepaper zu Suveria, Abschnitt 8.3](../whitepaper-suveria.md#s8-3).

## Wie das zu Abonnements passt

Bei kommerziellen Plattformen bündelt der Abonnementpreis meist die Nutzungskosten mit dem Unterhalt kostenloser Konten, Marketing, Leitung und Gewinnen der Investoren, und die Nutzenden sehen die Anteile dieser Bestandteile nicht. Das Manifest stellt die Hypothese auf, dass gemeinsame Infrastruktur ohne diesen verborgenen Aufschlag schon bei einer vergleichsweise kleinen Zahl regelmäßiger Teilnehmender pro ausgegebenem Dollar mehr Rechenleistung und digitale Intelligenz liefern kann als geschlossene Dienste, mit Privatsphäre auf Grundlage überprüfbarer Schutzmechanismen.

Stand der Hypothese am 29. Oktober 2026: Die Rechnung bringt uns ihr näher, bestätigt sie aber nicht. Verarbeitung mit deklarierter Vertraulichkeit ist bereits in öffentlichen Preislisten verfügbar, sodass eine kleine Gruppe damit zum Selbstkostenpreis beginnen kann; unter unseren Annahmen kann eigene Infrastruktur bei etwas mehr als zehntausend bis zu mehreren zehntausend aktiven Personen günstiger werden. Mit Tarifen für 100–200 USD, die bei intensiver agentischer Arbeit den Gegenwert von Tausenden Dollar zu API-Listenpreisen liefern, konkurrieren wir nicht über den Preis. Wir schlagen eine Abrechnung der tatsächlichen Nutzung mit überprüfbarer Privatsphäre vor.

Mehr: [Manifest, Abschnitt 2.4](../manifest.md#s2-4); [Whitepaper zu Suveria, Abschnitt 8.1](../whitepaper-suveria.md#s8-1).

## Was die Rechnung verändern wird

Wir aktualisieren die Rechnung bei jeder wesentlichen Preisänderung und nach jedem Versuch und bewahren frühere Fassungen auf. Entscheidend sind drei Dinge, die wir in Versuchen prüfen werden:

- ob die Vertraulichkeit dieser Dienste einer unabhängigen Verifizierung standhält;
- ob die Qualität der verfügbaren Modelle für die Aufgaben ausreicht, für die Menschen zu Suveria kommen werden;
- wie das tatsächliche Nutzungsprofil aussieht.

Die Infrastruktur wollen wir schrittweise entwickeln: zuerst eine vertrauliche API und eine private Umgebung auf vertraulichen Maschinen, dann die Miete eigener vertraulicher Maschinen, danach der Kauf von Hardware für ein externes Rechenzentrum und in ferner Zukunft, falls es Vorteile zeigt, ein eigenes Gebäude. Jeden Schritt begründen Messdaten und eine Entscheidungsvorlage mit den vollständigen Kosten, Risiken und Rückzugsbedingungen. Den Kauf eines Servers berechnen wir heute nur als Schätzung, nicht als Angebot.

Mehr: [Whitepaper zu Suveria, Abschnitt 8.1](../whitepaper-suveria.md#s8-1) und [Abschnitt 8.2](../whitepaper-suveria.md#s8-2).

## Lies den Text und sag uns, was du denkst

Die vollständige Rechnung mit einer Tabelle der Varianten und den Preisquellen findest du im [Whitepaper zu Suveria](../whitepaper-suveria.md#s8), die Regeln für Rechnung, Vorauszahlungen und Erstattungen im [Whitepaper zu den Arbeitsgrundsätzen der Stiftung](../whitepaper-zasady-fundacji.md#s3). Wenn dir bei den Zahlen oder Annahmen etwas nicht stimmig erscheint, markiere diese Stelle im Dokument und nutze die Schaltfläche „Ich habe eine Anmerkung“ oder schreib an salve@novusignis.org.