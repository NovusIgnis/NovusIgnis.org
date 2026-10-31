---
tytul: Statistiken der Website
opis: Wie oft unsere Website und Dokumente gelesen werden, zusammengefasst aus Serverprotokollen gezählt, ohne Analyseskripte und ohne Cookies
grupa: skroty
kolejnosc: 11
menu: Statistiken der Website
---
# Statistiken der Website

Wir möchten wissen, wie sich das Interesse an der Stiftung verändert und welche Texte am häufigsten gelesen werden, und wollen das offen zeigen. Wir zählen auf die einfachste Weise: aus den Protokollen des Servers, der ohnehin jeden Abruf einer Seite aufzeichnet. Auf der Website gibt es weder Analyseskripte noch Cookies oder etwas, das dich bei einem späteren Besuch wiedererkennen würde.

**Stand am 31. Oktober 2026.** Die Website wechselt zu einem Hosting-Paket, das Serverprotokolle bereitstellt. Wir beginnen mit der Statistik im November 2026; die folgenden Regeln gelten ab dem ersten gezählten Monat.

## Was wir zählen

- **Seitenaufrufe:** wie oft jede Seite und jedes Dokument abgerufen wurden, gesondert auf Polnisch und auf Englisch.
- **Dateidownloads:** etwa `llms-full.txt`, also Manifest und Whitepaper in einer Datei.
- **Bot-Zugriffe** in vier Gruppen: Suchmaschinen; Bots von Unternehmen, die Modelle digitaler Intelligenz entwickeln; Modelle, die die Website auf Wunsch eines Menschen lesen, etwa wenn jemand den eigenen Chat bittet, das Manifest zu lesen; andere Bots.
- **Dateien für Modelle:** wie oft Modell-Bots `llms.txt` und `llms-full.txt` abgerufen haben.

## Was wir nicht speichern

- IP-Adressen, vollständige Browserbeschreibungen oder anderes, mit dem sich eine einzelne Person erkennen lässt.
- Die Zugriffsgeschichte einer Person: Wir verbinden Seitenaufrufe weder zu Besuchen noch zu Profilen.
- Daten von anderen Websites und Diensten.

Deshalb wissen wir nicht, wie viele Personen uns besucht haben, sondern nur, wie oft Seiten abgerufen wurden. Eine Person kann eine Seite mehrmals öffnen, und manche Bots geben sich als gewöhnliche Browser aus; deshalb sind die Zahlen Näherungswerte.

## Wie wir zählen

Jede Woche laden wir das Serverprotokoll aus dem Verwaltungsbereich von Infomaniak herunter, dem Unternehmen, das die Website betreibt, denn dort werden Protokolle nur einige Tage aufbewahrt. Am Monatsende zählt das Skript `tools/statystyki.mjs` daraus nur die oben genannten Summen und speichert sie ohne IP-Adressen und Browserbeschreibungen. Heruntergeladene Protokollkopien bewahren wir höchstens bis zum Monatsende auf und löschen sie sofort nach der Zählung. Die Regeln zur Datenverarbeitung beschreibt die Seite [Deine Daten](twoje-dane.md).

## Ergebnisse

{{statystyki}}