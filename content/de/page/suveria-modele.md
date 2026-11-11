---
tytul: Modelle digitaler Intelligenz in Suveria
opis: Woher wir die Modelle für Suveria nehmen, wie wir sie auswählen, was bei einem Modellwechsel geschieht und welche öffentlichen Regeln der Assistent haben soll
grupa: suveria
kolejnosc: 4
menu: Modelle
---
# Modelle digitaler Intelligenz in Suveria

Ein Modell digitaler Intelligenz ist ein Programm, das deine Worte liest und eine Antwort formuliert; darauf soll der Assistent in Suveria arbeiten. Diese Seite erklärt, woher wir Modelle nehmen, wie wir sie auswählen, was bei einem Modellwechsel geschieht und nach welchen öffentlich bekannten Regeln sich der Assistent richten soll.

Suveria ist heute ein Entwurf. Das Ergebnisprotokoll des Whitepapers (Stand am 29. Oktober 2026) sagt ausdrücklich: Wir haben in Suveria noch kein Modell gestartet und keinen der beschriebenen Versuche durchgeführt. Alles Folgende beschreibt Absichten und Kandidaten, keinen funktionierenden Dienst.

Mehr: [Whitepaper zu Suveria, Kapitel 9](../whitepaper-suveria.md#s9).

## Warum offene Modelle

Offene Modelle bilden die Grundlage des Projekts, also solche, die unter Bedingungen veröffentlicht wurden, die ihren eigenständigen Betrieb erlauben. Dadurch kann die Stiftung sie praktisch zum Selbstkostenpreis bereitstellen und ihre Arbeit auf eine private Umgebung zur Nutzung bestehender Modelle konzentrieren, mit der Möglichkeit, künftig auch eigene zu entwickeln.

Zunächst wollen wir sie bei Anbietern von Confidential Computing nutzen und, wenn Rechnung und Bedingungen es rechtfertigen, auf eigenen Servern. Das Manifest betont, dass Suveria „unser bester Weg zu privater Arbeit mit digitaler Intelligenz und kein Selbstzweck“ ist: Wenn Modelle auf das eigene Gerät passen oder ein besserer Weg des Schutzes entsteht, wird ein Teil dieses Weges überflüssig.

Mehr: [Manifest, Abschnitt 3.1](../manifest.md#s3-1) und [Whitepaper zu Suveria, Kapitel 6](../whitepaper-suveria.md#s6).

## Wie wir ein Modell auswählen

Suveria soll Menschen auf der ganzen Welt in ihren eigenen Sprachen zur Verfügung stehen. Deshalb berücksichtigen wir bei der Modellwahl:

- die Qualität in vielen Sprachen;
- das Verständnis der Absicht;
- Verlässlichkeit;
- die Lizenz, also die Bedingungen, zu denen die entwickelnde Stelle die Nutzung des Modells erlaubt;
- die Kosten;
- ob sich das Modell in der geschützten Umgebung betreiben lässt, die wir auf der Seite [Privatsphäre und Sicherheit](suveria-prywatnosc.md) beschreiben.

Ein größeres Modell wählen wir nur, wenn es Aufgaben, die für Menschen wichtig sind, deutlich besser erfüllt. Dabei soll der Benchmark der Stiftung helfen, also eine Sammlung von Aufgaben und Bewertungsregeln, mit der sich das Verhalten der Modelle prüfen lässt; heute ist er ein Forschungsprogramm ohne Ergebnisse.

Das Whitepaper nennt zwei Kandidaten. Es sind Kandidaten zur Prüfung und keine Entscheidung: Das erste Modell und das akzeptable Qualitätsniveau müssen noch festgelegt werden.

- **DeepSeek-V4.1-Flash.** Ein Modell unter der MIT-Lizenz, die auch die Nutzung für Dienste erlaubt. Der Hersteller nennt 552 Mrd. Parameter des Hauptteils (Parameter sind Zahlen, die beim Training des Modells bestimmt werden) und einen zusätzlichen Speicher namens Engram mit 196 Mrd. Parametern. Für jedes Wort werden nur 8–16 Mrd. dieser Parameter genutzt, weshalb es schnell und kostengünstig antwortet, obwohl für den Betrieb mindestens vier moderne Grafikkarten nötig sind. Die Parameter sind in verkürzter Form gespeichert (Quantisierung). Das spart Speicher, kann aber die Qualität senken, deshalb werden wir es an eigenen Aufgaben prüfen.
- **Kimi K3.1 Pro.** Ein Modell von Moonshot AI. Stand 9. November 2026 sind seine vollständigen Gewichte, also die Parameter, öffentlich. Die Lizenz erlaubt die Nutzung auch für Dienste; zusätzliche Bedingungen gelten erst für Dienste mit sehr hohem Umsatz oder sehr vielen Nutzenden, bei der jetzigen Größe der Stiftung betreffen sie uns also nicht (das ist unsere Lesart, kein Rechtsgutachten). Für den Betrieb braucht es mindestens acht Grafikkarten der neuesten Generation. Kosten und Geschwindigkeit in der geschützten Umgebung sind noch zu messen; erster Kandidat bleibt DeepSeek-V4.1-Flash.

Mehr: [Whitepaper zu Suveria, Kapitel 6](../whitepaper-suveria.md#s6) und [Whitepaper zu Trainingsmaterialien und Benchmark, Kapitel 1](../whitepaper-materialy-i-benchmark.md#s1).

## Was bei einem Modellwechsel geschieht

Den Wechsel oder die Außerbetriebnahme eines Modells kündigen wir im Voraus an. Der Gesprächsverlauf bleibt bei dir: Du kannst ein neues Modell wählen, Daten exportieren oder die Arbeit beenden.

Der Zeitpunkt des Modellwechsels soll im Gespräch sichtbar sein, und die Übertragung des privaten Kontexts an ein neues Modell erfordert deine Entscheidung. Ein Modellwechsel kann auch eine erneute Überprüfung des Schutzes erfordern, denn eine Aktualisierung darf die vereinbarten Schutzmechanismen nicht unbemerkt schwächen.

Mehr: [Whitepaper zu Suveria, Kapitel 6](../whitepaper-suveria.md#s6) und [Kapitel 9](../whitepaper-suveria.md#s9).

## Die Regeln des Assistenten sollen öffentlich sein

Die Regeln, nach denen der Assistent antwortet, werden wir mit jeder Fassung vollständig veröffentlichen. In Suveria sollst du jederzeit die vollständigen Anweisungen deines Assistenten lesen können, also die schriftlichen Regeln, nach denen er antwortet, sowie die Beschreibung seiner Arbeitsweise: wie er eine Aufgabe in Schritte teilt, das Gedächtnis nutzt und Antworten prüft.

Die gemeinsame Infrastruktur soll nur Modelle und Einstellungen bereitstellen, die die öffentlichen Versuche des Benchmarks bestehen. Über dieses Mindestmaß hinaus wählst du selbst den Arbeitsstil, vom ruhigen Ordnen von Gedanken bis zu einem anspruchsvollen Gespräch, in dem der Assistent Lücken im Denken aufzeigt.

Wir wollen eine offene Bibliothek geprüfter Anweisungen führen, die Teilnehmende im OmniForum (dem gemeinsamen Raum für Gespräch und Entscheidungen) verbessern und im Benchmark prüfen. Diese Bibliothek gibt es noch nicht.

Mehr: [Whitepaper zu Suveria, Kapitel 4](../whitepaper-suveria.md#s4) und [Abschnitt 4.1](../whitepaper-suveria.md#s4-1).

## Assistent, Persönlicher Kanon und Gedankenteleskop

Das Gedächtnis früherer Gespräche soll mit deiner Zustimmung funktionieren und offen bearbeitbar sein: Jeder Eintrag lässt sich löschen oder korrigieren, und seine Herkunft lässt sich sehen. Der Assistent unterscheidet klar zwischen einem eigenen Vorschlag und einem Standpunkt, den ein Mensch bewusst als seinen eigenen angenommen hat.

Der Persönliche Kanon ist die von dir aufgeschriebene Sammlung von Grundsätzen und Werten, die du als deine eigenen ansiehst. Das Gedankenteleskop soll erlauben, Aufzeichnungen eigener Überlegungen aus verschiedenen Zeiten und ihre Entwicklung zu betrachten sowie eine von dir benannte Situation mit dem Kanon zu vergleichen. Die Idee ist aus dem Overton-Fenster entstanden, also dem Bereich von Ideen, die zu einer bestimmten Zeit in einer Gesellschaft als akzeptabel gelten. Bei einer einzelnen Person ist es der Bereich von Gedanken, die sie zu einer bestimmten Zeit für sich selbst für zulässig hält; das Teleskop soll ein solches Fenster für eine einzelne Person sein und nur für sie.

Das Modell zeigt mögliche Verbindungen zusammen mit der Quelle des angeführten Grundsatzes, und seine Auslegung lässt sich korrigieren oder verwerfen. Wir erstellen weder eine Punkteskala für Moral noch eine öffentliche Rangliste. In der ersten Fassung arbeitet das Teleskop nur an einer einzigen Situation, die du benennst, und verfolgt das Leben nicht laufend.

Mehr: [Whitepaper zu Suveria, Kapitel 6](../whitepaper-suveria.md#s6) und [Abschnitt 6.1](../whitepaper-suveria.md#s6-1).

## Grenzen: was das Modell tut und was nicht

- **Krise.** Wenn es im Gespräch um eine Gefahr für Leben oder Gesundheit geht, soll der Assistent über verfügbare Hilfe informieren, etwa über Notrufnummern, ohne etwas außerhalb der privaten Umgebung zu senden.
- **Nachrichten anderer Menschen.** Eine fremde Nachricht, etwa aus einem angebundenen Postfach, kann versteckte Anweisungen enthalten, deshalb trennen wir Inhalte von außen von deinen Anweisungen: Beim Ordnen solcher Inhalte darf der Assistent nicht selbst Nachrichten senden, Netzwerkadressen öffnen oder den Persönlichen Kanon ändern, ohne dass du dies bestätigst.
- **Entscheidungen der entwickelnden Stelle.** Das Modell selbst trägt auch die Entscheidungen der Stelle in sich, die es entwickelt hat, etwa Themen, denen es ausweicht; wir prüfen sie im Benchmark und beschreiben sie bei der Modellwahl.
- **Keine verborgenen Zugänge.** Missbrauch wollen wir entgegenwirken, ohne private Gespräche zu lesen. Wir schaffen keine verborgenen Zugänge zu privaten Inhalten.

Mehr: [Whitepaper zu Suveria, Kapitel 4](../whitepaper-suveria.md#s4), [Kapitel 3](../whitepaper-suveria.md#s3) und [Kapitel 6](../whitepaper-suveria.md#s6).

## Lies den Text und sag uns, was du denkst

Zahlen, Fußnoten und die Liste offener Fragen findest du im [Whitepaper zu Suveria](../whitepaper-suveria.md), das Verfahren zur Bewertung der Modelle im [Whitepaper zu Trainingsmaterialien und Benchmark](../whitepaper-materialy-i-benchmark.md). Wenn dich etwas beschäftigt oder dir falsch erscheint, markiere diese Stelle und nutze die Schaltfläche „Ich habe eine Anmerkung“ oder schreib an salve@novusignis.org.