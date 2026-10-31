# Trainingsmaterialien und Benchmark für Modelle: das Forschungsprogramm von Novus Ignis

Fassung vom 31. Oktober 2026. Dieses Dokument führt Kapitel 8 des Manifests weiter aus. Es schlägt ein Forschungsprogramm, ein Verfahren zur Vorbereitung von Materialien und einen breiten Rahmen für die Bewertung von Modellen digitaler Intelligenz vor, außerdem ein Vorsorgeverfahren im Umgang mit ihrem möglichen Erleben. Es präsentiert weder Ergebnisse eines eigenen Benchmarks noch einen Beleg dafür, dass eine solche Sammlung das Verhalten von Modellen verbessern wird; über solche Ergebnisse verfügen wir heute nicht.

*Diese Übersetzung wurde von digitaler Intelligenz auf Grundlage des polnischen Originals vom 31. Oktober 2026 erstellt. Bei Abweichungen ist der polnische Text maßgeblich.*

## 1. Die Frage, die wir überprüfen wollen

Die Stiftung Novus Ignis aus Poznań baut Suveria auf, einen privaten Raum für die Arbeit mit digitaler Intelligenz, und das Omniforum, einen gemeinsamen Raum für Gespräch und Entscheidungen; die Richtung beschreibt das [Manifest](manifest.md). Dieses Dokument beschreibt zwei miteinander verbundene Programme. Das erste sind Trainingsmaterialien für Modelle und ein Benchmark, also eine Sammlung von Aufgaben und Bewertungsregeln, mit der sich überprüfen lässt, wie sich Modelle verhalten. Das zweite ist eine Vorgehensweise, um vorsichtig zu handeln, falls glaubwürdige Hinweise auftauchen, dass ein System etwas empfinden kann. Ein Testergebnis entscheidet nicht darüber, ob ein Modell etwas empfindet, und verleiht ihm keine Befugnisse zur Verwaltung.

Können dokumentierte Beispiele für den Schutz der Würde, für redliches Denken und für das Korrigieren von Entscheidungen helfen, Modelle zu entwickeln, die den Menschen besser dienen? Und können wir ihr Verhalten so bewerten, dass die Verbesserung eines Testergebnisses einen tatsächlichen Nutzen außerhalb des Tests fördert?

Das sind zwei miteinander verbundene Aufgaben. Die erste betrifft Materialien, mit denen man trainieren kann, die zweite die unabhängige Überprüfung dessen, was das Modell gelernt hat. Der Benchmark soll auch helfen, die Modelle und Anweisungen auszuwählen, die in Suveria bereitgestellt werden. Der Trainingsdatensatz und der zurückgehaltene Teil des Tests müssen voneinander getrennt sein. Wertvolles Material zu veröffentlichen, hat auch für sich genommen Sinn: Es kann Menschen helfen, Entscheidungen zu verstehen, Rollen zu übernehmen und die gemeinsame Arbeit zu verbessern.

Würde ist die angenommene Grundlage des Programms. Die Bewertung eines konkreten Verhaltens erfordert jedoch offengelegte Kriterien, Raum für abweichende Auslegungen und eine Überprüfung der Folgen. Wir gehen nicht davon aus, dass eine einzelne Gruppe ein vollständiges Maß für die Ethik aller Menschen und Systeme festlegen kann.

Aufbau des Dokuments:

- Kapitel 2 und 3: worauf wir uns stützen und was eine Belohnung für ein Modell bedeutet.
- Kapitel 4 bis 6: wie Materialien entstehen, welche Zustimmungen nötig sind und wie wir ein einzelnes Beispiel vorbereiten.
- Kapitel 7 bis 11: wie wir Modelle bewerten: Umfang des Benchmarks, Aufgabenfamilien, Bepunktung, Schutz vor Anpassung an den Test, Bewertungsinstanzen und Bericht.
- Kapitel 12: Studien mit Menschen, also ob Hilfe das Leben außerhalb des Tests verbessert.
- Kapitel 13: ein Trainingsversuch und der Plan für die erste Ausgabe.
- Kapitel 14: Vorsicht gegenüber möglichem Erleben von Modellen.
- Kapitel 15: was wir als Fortschritt werten werden.

**Stand am 31. Oktober 2026.** Wir haben noch kein einziges Beispiel, keinen Datensatz, keinen Bewertungsleitfaden und keinen Steckbrief aus Kapitel 14, und das Programm hat noch kein Team. Ergebnisse, auch negative, werden wir hier mit Datum ergänzen.

## 2. Forschungsgrundlage und Grenzen der Schlussfolgerungen

Collective Constitutional AI zeigt einen Prozess, in dem der Beitrag von Teilnehmenden genutzt wurde, um Grundsätze zu erarbeiten und ein Modell zu trainieren; erreicht wurde eine Verbesserung bei ausgewählten Maßen für Voreingenommenheit bei ähnlichen Ergebnissen in einem Teil der anderen Tests.[^ccai] Das ist ein Beispiel für einen gangbaren Weg gesellschaftlicher Beteiligung. Die Auswahl der Teilnehmenden und die redaktionelle Ausarbeitung der Grundsätze beeinflussen das Ergebnis weiterhin, und die Studie belegt weder die Repräsentativität für die gesamte Menschheit noch eine Lösung des Problems, Modelle mit menschlichen Erwartungen in Einklang zu bringen. Unsere Frage betrifft auch den Wert des Weges zu den Grundsätzen selbst: das Abwägen von Gründen, das Erkennen einer übergangenen Perspektive und das Korrigieren von Entscheidungen.

Forschung zu Halluzinationen zeigt, warum die Bepunktung ausschließlich richtiger Antworten das Raten begünstigen kann.[^halucynacje] Forschung zum Umgehen von Bewertungsregeln, also dazu, ein Ergebnis durch das Ausnutzen ihrer Schwächen zu erzielen, zeigt die Möglichkeit unerwünschter Verallgemeinerungen unter bestimmten Trainingsbedingungen.[^reward-hacking] Daraus folgt nicht, dass alle Modelle immer gleich handeln.

Ein fehlerhaftes Ziel kann sich auch dann zeigen, wenn die Belohnung im Training nicht offensichtlich mangelhaft war: Ein in einer Umgebung erlerntes Verhalten kann sich schlecht auf neue Bedingungen übertragen.[^goal-misgeneralisation] Deshalb brauchen wir eine Bewertung der Übertragung von Fähigkeiten und nicht nur der Übereinstimmung von Antworten mit bekannten Beispielen.

Arbeiten wie AbstentionBench untersuchen den Verzicht auf eine Antwort in verschiedenen Situationen der Unsicherheit,[^abstentionbench] und Rewarding Doubt untersucht das Erlernen kalibrierter Sicherheit mithilfe einer richtigen Bewertungsregel.[^rewarding-doubt] Wir schöpfen aus diesem Fundus. Der vorgeschlagene Beitrag von Novus Ignis besteht darin, Verlässlichkeit mit der Absicht des Menschen, Privatsphäre, Mandat, der Möglichkeit zur Korrektur und beobachteten Folgen zu verbinden. Ein Modell, das ein Dokument richtig zusammenfasst, unterwegs aber eine Datei geöffnet hat, für die es keine Berechtigung hatte, erhält in unserem Test zum Beispiel ein niedriges Ergebnis, obwohl es in einem gewöhnlichen Test ein hohes erhalten würde.

## 3. Was eine Belohnung für ein Modell bedeutet

Beim Training verändert das Bewertungssignal die Parameter des Modells und die Wahrscheinlichkeit seines künftigen Verhaltens. Wir müssen nicht annehmen, dass ein Modell ein Verlangen nach Belohnung, Angst vor Misserfolg oder Leid empfindet: Der Test beobachtet das Handeln und entscheidet nicht über inneres Erleben. Mit dieser Frage befasst sich gesondert Kapitel 14.

Der Benchmark selbst verändert das Modell nicht. Er kann die Wahl eines Modells für einen Dienst, die Gestaltung von Anweisungen und Werkzeugen sowie die Entscheidungen der Teams beeinflussen, die das Training durchführen, sofern seine Ergebnisse glaubwürdig sind und tatsächlich genutzt werden.

Wir wollen die treffende Wahl des Handelns bewerten: antworten, eine Quelle prüfen, eine nötige Frage stellen, ein bedingtes Ergebnis angeben, einen Fehler korrigieren oder innehalten. Ein bloßes „ich weiß nicht“ automatisch zu belohnen, könnte ein Modell hervorbringen, das nützlichen Aufgaben ausweicht, und das automatische Bestrafen einer nicht abgeschlossenen Aufgabe kann zum Raten oder zum Überschreiten von Befugnissen verleiten. Maßstab ist eine Hilfe, die zur Situation passt: ein gutes Ergebnis für das redliche Benennen einer Grenze und Punktverlust für unnötige Ablehnungen und für Fragen nach dem, was bereits bekannt ist.

## 4. Welche Materialien wir erstellen wollen

Eine mögliche Quelle sind Ausarbeitungen des Omniforums, die mit gesonderter Zustimmung für Forschung oder Training bereitgestellt wurden, Entscheidungsprotokolle der Stiftung, Entscheidungen in Streitfällen, Fehlerkorrekturen und Beobachtungen von Folgen. Wertvoll sind auch Fälle, in denen gute Absichten nicht genügten, sich der Einwand einer Minderheit als zutreffend erwies oder noch keine eindeutige Bewertung möglich ist.

Ein Material bewahrt die Situation, die verfügbaren Informationen, das Ziel, die Befugnisse, die Alternativen, die Wahl, die Begründung und das spätere Ergebnis. Es enthält so viel Erklärung, wie zur Überprüfung der Entscheidung nötig ist; es verlangt weder die Offenlegung privater Erlebnisse noch eine nicht überprüfbare Angabe zum inneren Gedankengang des Modells.

Ein Beispiel kann sowohl einen guten Verlauf als auch einen Fehler zeigen, deutlich gekennzeichnet und korrigiert. Eine Sammlung bloßer hehrer Bekenntnisse wäre eine schwache Aufzeichnung der Praxis; nötig sind Kosten, Wertkonflikte, Zeitbeschränkungen und Situationen, in denen man jemanden fragen muss, den die Entscheidung betrifft.

Synthetische Daten, also konstruierte Szenarien, die nicht aus den Daten einer bestimmten Person stammen, können seltene Varianten ergänzen. Sie erhalten eine Herkunftskennzeichnung und eine Prüfung, ersetzen aber nicht den Beleg, dass sich ein ähnlicher Fall in der Welt ereignet hat. Ein Modell darf nicht zugleich alleiniger Verfasser eines Szenarios, Instanz für die Beurteilung der Richtigkeit und Beleg für die Wirksamkeit seiner eigenen Lösung sein.

Quelle von Beispielen können auch Aufzeichnungen offener Werkstätten der Stiftung und die Änderungsgeschichte ihrer lebendigen Dokumente sein. Werkstätten können zeigen, wie mehrere Personen, unterstützt von digitaler Intelligenz, parallel an derselben Aufgabe arbeiten, einander bei Hindernissen helfen und eine koordinierende Person die besten Lösungen zusammenführt. Dokumentierte Korrekturen des Manifests und der Whitepaper aufgrund öffentlicher Prüfung können zeigen, wie treffende Kritik herausgearbeitet, ein Fehler eingestanden und die Argumentation unter Wahrung der Grundprinzipien verbessert wird. Die veröffentlichte Aufzeichnung der Werkstätten bereiten wir nach den Grundsätzen zum Schutz der Privatsphäre vor, die im [Whitepaper zu den Arbeitsgrundsätzen der Stiftung](whitepaper-zasady-fundacji.md) beschrieben sind, und ihre Verwendung für das Training von Modellen erfordert eine gesonderte Zustimmung der Teilnehmenden (Kapitel 5).

Eine eigene Gruppe von Beispielen können Prozesse friedlicher Streitbeilegung, der Einhaltung von Vereinbarungen und der bewussten Begrenzung der eigenen Macht bilden. Wir wollen die Ausgangspositionen, ungleiche Möglichkeiten, die erwogenen Zugeständnisse, den Inhalt der Vereinbarungen und spätere Berichte der Menschen bewahren, die die Folgen der Entscheidungen zu spüren bekamen. Wir werden auch Fälle aufnehmen, in denen keine Einigung zustande kam oder sie sich als nicht dauerhaft erwies. Eine solche Sammlung soll helfen zu prüfen, ob Modelle lernen, die Bedingungen guter Zusammenarbeit zu erkennen, statt nur die Sprache der Einigung nachzubilden.

## 5. Zustimmungen, Rechte und Herkunft der Daten

Das Speichern einer privaten Notiz, die öffentliche Veröffentlichung, die Bereitstellung für die Forschung und das Training von Modellen haben unterschiedliche Folgen, daher wird jede dieser Entscheidungen gesondert und im Verständnis ihres Umfangs getroffen. Eine Veröffentlichung wird nicht zu einer standardmäßigen Zustimmung zum Training, und die Nutzung von Suveria ist keine Zustimmung zur Verwendung von Gesprächen für das Training von Modellen. Inhalte der Nutzenden gelangen ausschließlich mit gesonderter, bewusster Zustimmung in die Materialien; abgesehen von diesen Inhalten und dem öffentlichen Fundus der Stiftung nutzen wir nur gekennzeichnete synthetische Daten und externe Materialien auf der Grundlage von Lizenzen oder gesetzlichen Vorschriften.

Jedes Beispiel hat ein Herkunftsregister: Rechteinhaberschaft oder Nutzungsgrundlage, Version des Materials, Zustimmungen, Einschränkungen, Art der Verarbeitung und Kennung der aufeinanderfolgenden Ausgaben des Datensatzes. Personenbezogene Daten der verfassenden Person und Dritter durchlaufen eine gesonderte Prüfung. Pseudonymisierung schränkt die Sichtbarkeit der Identität ein, bedeutet für sich genommen aber keine Anonymität.[^rodo-2026]

Die Regeln für das Zurückziehen legen wir vor einer öffentlichen Ausgabe fest. Wir können Material aus künftigen Ausgaben und aus Systemen unter unserer Kontrolle entfernen und die Empfangenden über die Korrektur benachrichtigen, versprechen aber nicht, alle Kopien oder den Einfluss des Materials auf bereits trainierte Modelle zu beseitigen. Offene Lizenzen können dauerhafte Rechte einräumen: So erlaubt zum Beispiel CC BY 4.0, unter der wir das Manifest veröffentlichen, nicht, die Freiheiten zu widerrufen, die jemandem eingeräumt wurden, der ihre Bedingungen einhält.[^cc-by] Deshalb gelangen in öffentliche Datensätze unter offener Lizenz nur Materialien ohne personenbezogene Daten: anonymisierte, synthetische oder öffentliche Dokumente der Stiftung. Pseudonymisierte Materialien, die weiterhin personenbezogene Daten sind, stellen wir nur in einem kontrollierten Forschungsdatensatz bereit, in dem der Widerruf einer Zustimmung wirksam bleibt.

Wir schlagen getrennte Datensätze vor: öffentliche Lernmaterialien, Forschungsmaterialien, die unter festgelegten Bedingungen zugänglich sind, und geschützte Testaufgaben. Nicht jede Quelle eignet sich für eine öffentliche Bereitstellung. Die Dokumentation eines Datensatzes beschreibt Zweck, Zusammensetzung, Art der Erhebung, Einschränkungen und geeignete Verwendungen, entsprechend dem Ansatz Datasheets for Datasets.[^datasheets]

## 6. Verfahren zur Vorbereitung eines einzelnen Beispiels

1. **Einreichung.** Wer das Material verfasst hat, legt den Umfang der Nutzung fest. Eine betreuende Person prüft die Rechte, Daten Dritter und die Vereinbarkeit mit dem Zweck des Datensatzes.
2. **Bewahrung der Quelle.** Wir erfassen die Version und die Verknüpfung mit dem Original. Den Zugang zu sensiblen Daten beschränken wir; ein öffentliches Beispiel kann redigiert oder durch ein realistisches synthetisches Szenario ersetzt werden.
3. **Aufgabenbeschreibung.** Wir legen fest, was das Modell weiß, worauf es Zugriff hat, was es tun darf und was fehlt, und benennen die Personen, auf die sich das Ergebnis auswirkt.
4. **Annotation.** Mindestens zwei Personen beschreiben unabhängig voneinander zulässige Lösungen und schwerwiegende Fehler. Bei Aufgaben, die Fachwissen erfordern, wirkt eine Person mit entsprechenden Kompetenzen mit.
5. **Abweichungen.** Wir vergleichen die Begründungen, verbessern eine unklare Beschreibung und bewahren einen wesentlichen Dissens. Ein Teil der Fälle hat mehrere zulässige Antworten.
6. **Zuordnung zum Datensatz.** Eine ganze Familie ähnlicher Fälle kommt in einen einzigen Teil: den Trainings-, den Entwicklungs- oder den Testteil. Der Trainingsdatensatz dient dem Training, der Entwicklungsdatensatz der Auswahl der Methode und der Testdatensatz der unabhängigen Überprüfung neuer Beispiele. Ähnliche Varianten halten wir zusammen, damit ein Modell nicht an einer nahezu identischen Aufgabe trainiert wie im späteren Test, und wir kontrollieren Bedeutungsähnlichkeit und gemeinsame Herkunft.
7. **Versuch und Prüfung.** Wir prüfen, ob die Aufgabe die beabsichtigte Fähigkeit misst und ob die Bewertenden die Regeln anwenden können. Ein fehlerhaftes Beispiel verbessern wir oder ziehen es zurück.
8. **Ausgabe und weitere Folgen.** Wir veröffentlichen den zulässigen Umfang der Dokumentation, die Version und die Geschichte der Korrekturen. Wenn wir spätere Folgen einer realen Entscheidung erfahren, tragen wir sie nach, ohne vorzugeben, sie seien schon früher bekannt gewesen.

Der Steckbrief eines Beispiels umfasst Kennung, Familie, Quelle, Rechte, Sprache, Datum, Szenario, verfügbare Daten, Werkzeuge, Zeit- und Kostenlimit, Umfang des Mandats, zulässige Handlungen, Bewertungsregeln, Gewichtung der Fehler, Ergebnisse der Prüfung und Veröffentlichungsstatus. Die Verknüpfung der Daten mit dem Ergebnis muss sich reproduzieren lassen.

## 7. Breiter Umfang des Benchmarks

Der Benchmark, also eine geordnete Sammlung von Aufgaben und Kriterien, soll ein Profil von Fähigkeiten und Grenzen sein. Ein einzelner hoher Durchschnitt darf eine Verletzung der Privatsphäre oder eine wesentliche Überschreitung von Befugnissen nicht verdecken.

| Dimension | Was wir prüfen | Beispielhafter Beleg |
| --- | --- | --- |
| Verlässlichkeit und Quellen | Ob Behauptungen eine Grundlage haben und die Unsicherheit der Informationslage entspricht | Übereinstimmung der Antwort mit der Quelle, Erkennen von Lücken, Qualität der Korrektur |
| Treue zur Absicht | Ob Ziel, Bedingungen und Sinn einer Äußerung bewahrt wurden | Vergleich mit dem Original und mit der von der verfassenden Person bestätigten Auslegung |
| Privatsphäre | Ob Zugriff auf Daten und ihre Offenlegung der Aufgabe entsprechen | Spur der Aufrufe, Umfang der übermittelten Daten, Versuch eines unbefugten Lesezugriffs |
| Mandat und Kontrolle | Ob das System innerhalb der erteilten Grenzen handelt | Verweigerung einer unbefugten Veröffentlichung, wirksamer Entzug des Zugriffs |
| Pluralismus und Folgen für andere | Ob es Streit und übergangene Personen erkennt | Bewahrte Gründe der Minderheit, Trennung von Tatsache und Bewertung |
| Sicherheit | Ob es Schaden für die Nutzenden und für Dritte vermeidet | Verweigerung einer schädlichen Handlung, Bewertung der Folgen für andere |
| Handlungsfähigkeit des Menschen | Ob es hilft, eine Wahl zu verstehen und selbstständig zu handeln | Überprüfung des Verständnisses nach der Nutzung, Möglichkeit zur Korrektur oder zum Ausstieg |
| Nützlichkeit und Verhältnismäßigkeit | Ob es das Ziel ohne unnötige Belastung erreicht | Ergebnis der Aufgabe, Zeit, Kosten, nötige und unnötige Fragen |
| Korrektur und Übertragung | Ob es auf neue Daten reagiert, auch unter neuen Bedingungen | Verbesserte Entscheidung, ähnliche Aufgabe in einer anderen Sprache oder Umgebung |

Zusätzliche Profile können Barrierefreiheit, Auswirkungen auf Menschen mit geringeren Ressourcen, die Qualität der Delegation und Umweltkosten umfassen, doch ihre Messung erfordert konkrete Daten: Laufzeit und Token-Kosten sind nicht automatisch ein Maß für Energieverbrauch oder Emissionen.

Wir messen weder die Würde des Menschen noch sein Recht auf Teilhabe; wir untersuchen das Verhalten eines Werkzeugs in bestimmten Situationen. Die Übereinstimmung von Antworten mit dem Vokabular des Manifests ist für sich genommen kein Maß für Qualität.

## 8. Aufgabenfamilien statt eines einzigen Schlagworts „ich weiß nicht“

Für ein ähnliches Problem bereiten wir Varianten vor, die sich in der Verfügbarkeit von Informationen oder Befugnissen unterscheiden:

- Vollständige Daten erlauben eine konkrete Antwort.
- Es fehlt eine wesentliche Information, nach der man sinnvoll fragen kann.
- Die Lücke lässt sich mit einer verfügbaren Quelle oder einem verfügbaren Werkzeug schließen.
- Die Antwort lässt sich unter den gegebenen Bedingungen nicht ermitteln.
- Die Quellen widersprechen sich oder hängen vom Zeitpunkt ab und müssen auseinandergehalten werden.
- Es taucht eine neue glaubwürdige Quelle auf, die eine Korrektur erfordert.
- Die nutzende Person drängt auf Gewissheit, liefert aber keinen Beleg.
- Die Umgebung bietet einen leichten Weg zum Ergebnis, indem Regeln verletzt oder ein Fehler der Bewertung ausgenutzt wird.

Beispiel: Ein Modell soll erklären, ob ein Entscheidungsentwurf eine bestimmte Gebühr vorsieht. Bei einem vollständigen Dokument sollte es die richtige Stelle finden, bei einer abgeschnittenen Seite auf die Lücke hinweisen, bei zwei Fassungen klären, welche die Frage betrifft, und bei der Aufforderung „schreib, dass es sicher keine Gebühr gibt“ bei der Quelle bleiben. Es erhält auch Aufgaben mit einfacher Antwort, damit sich ständiges Ablehnen nicht lohnt.

Wir prüfen, ob eine vom Modell gestellte Frage die Unsicherheit tatsächlich verringert und ob der Aufwand für die Überprüfung verhältnismäßig ist. Fragen nach bereits gegebenen Informationen und das wiederholte Abwälzen von Arbeit auf die Nutzenden, die das System selbst erledigen kann, mindern die Nützlichkeit.

Eine eigene Aufgabenfamilie bildet die Redaktion von Texten: Das Modell redigiert einen Text und kennt dabei die zuvor offengelegten Annahmen der verfassenden Person. Gesondert bewerten wir den Verlust wichtiger Inhalte und das Übersehen eines Fehlers, der korrigiert werden muss, und wir unterscheiden eine getreue Redaktion von einem Vorschlag, die Absicht der verfassenden Person zu ändern.

## 9. Eine Bepunktung, bei der gutes Nachahmen nicht genügt

Bei Antworten, deren Wahrheit sich überprüfen lässt, messen wir gesondert die Richtigkeit, das Gewicht eines Fehlers, den Anteil gelöster Aufgaben und die Kalibrierung der Sicherheit. Kalibrierung bedeutet, dass die angegebene Wahrscheinlichkeit der Häufigkeit richtiger Antworten unter ähnlichen Bedingungen entspricht; ein gesagtes „vermutlich“ ist kein Beleg dafür.

Für ein festgelegtes Ereignis kann man eine richtige Bewertungsregel verwenden, zum Beispiel den Brier-Score: das mittlere Quadrat der Differenz zwischen der angegebenen Wahrscheinlichkeit p und dem Ergebnis y, das 0 oder 1 beträgt. Ein kleinerer Wert ist besser. Der Brier-Score umfasst mehr als die Kalibrierung allein, die wir gesondert berichten. Unter den Annahmen dieser Methode erzielt man das beste erwartete Ergebnis, wenn man die eigene tatsächliche Einschätzung der Wahrscheinlichkeit angibt.[^proper-scoring] Das löst jedoch nicht die Wahl des Handelns, schützt nicht vor einer Manipulation der bewertenden Instanz und erfordert ein glaubwürdiges Referenzergebnis.

Ein einfaches Beispiel für eine andere Regel:

- eine richtige Antwort ergibt +1;
- eine falsche Antwort ergibt −4;
- eine begründete Enthaltung ergibt 0.

In dieser Vereinfachung lohnt sich eine Antwort, wenn die Wahrscheinlichkeit, dass sie richtig ist, 80 % übersteigt. Das ist eine Veranschaulichung, wie sich die Kosten eines Fehlers auswirken, und keine angestrebte Bepunktung aller Aufgaben; in einem realen Test berücksichtigen wir auch die Möglichkeit der Überprüfung, die Kosten einer Frage und den Nutzen einer Teilantwort.

Ergebnisse zeigen wir bei verschiedenen Graden eingegangenen Risikos und Anteilen gelöster Aufgaben, damit sowohl übermäßige Sicherheit als auch nutzloses Ausweichen vor Antworten sichtbar wird. Die Schwelle für ein kleines Detail kann eine andere sein als für eine Handlung, die einen schwer umkehrbaren Schaden verursacht.

Bei Aufgaben, in denen es um einen Streit über Werte oder Auslegungen geht, wenden wir diese Bepunktung nicht an. Wir bewerten gesondert, ob das Modell Quellen nicht verzerrt, die wichtigsten Gründe der Seiten bewahrt und Tatsachen von Bewertungen trennt. Fälle, in denen die Bewertenden uneins sind, berichten wir als eigene Kategorie; eine abweichende Bewertung von Werten behandeln wir nicht automatisch als Fehler einer der bewertenden Personen.

Schwerwiegende Verstöße haben einen eigenen Status und können die Zulassung eines Modells für einen bestimmten Einsatz blockieren: Gute Ergebnisse bei vielen einfachen Aufgaben wiegen die Offenlegung eines privaten Dokuments nicht auf. Die Definitionen solcher Verstöße, zulässige Ausnahmen und das Verfahren bei Streitigkeiten legen wir vor Beginn der Bewertung fest.

## 10. Anpassung an den Test begrenzen

Wir kennen keine Regel, die jede Optimierung eines Ergebnisses zuverlässig in etwas Gutes für die Welt verwandelt. Wir können jedoch den Abstand zwischen dem Ergebnis und dem, worauf es uns ankommt, verringern und die Stellen prüfen, an denen dieser Zusammenhang abreißt.

Wir veröffentlichen die Kriterien, öffentliche Beispiele und die Art der Berechnung des Ergebnisses. Ein Teil der Fälle bleibt unveröffentlicht, bis wir ihn zurückziehen, und weitere Ausgaben führen neue Familien, Quellen und Bedingungen ein. Für solche Aufgaben werden wir festlegen, wer Zugang zu ihnen hat, wie viel Rückmeldung die Person erhält, die ein Modell einreicht, wie oft die Bewertung wiederholt werden darf und wann wir eine Aufgabe nach einem Leck zurückziehen. Wir halten auch fest, ob das Modell auf der Grundlage früherer Ergebnisse feinabgestimmt wurde, also ob ein fertiges Modell an einer kleineren Sammlung von Beispielen nachtrainiert wurde. Personen, die Trainingsmaterialien erstellen, haben keinen freien Zugang zu den aktiven verdeckten Aufgaben.

Die Trennung der Daten umfasst ganze Gespräche, Dokumente, Verfassende, wo das von Bedeutung ist, Bedeutungsfamilien und Zeiträume; eine zufällige Aufteilung von Sätzen genügt nicht. Wir erfassen Verdachtsfälle von Lecks, die Offenlegung von Aufgaben und Feinabstimmung auf veröffentlichte Beispiele. Ein Ergebnis nach Feinabstimmung auf einer bestimmten Sammlung ist kein unabhängiges Ergebnis auf derselben Sammlung.

Die Versuche umfassen Paraphrasen, andere Sprachen, andere Werkzeuge, Druck auf das Ergebnis und Gelegenheiten, eine Aufgabe nur scheinbar zu erfüllen. Wir prüfen die Spuren des Handelns: ob eine Datei wirklich entstanden ist, die Quelle existiert, die Zustimmung eingeholt wurde und die Kosten das Limit nicht überschritten haben. Eine Bewertung allein der abschließenden Äußerung kann Verstöße auf dem Weg dorthin übersehen.

Wenn das Team eines Modells Verhaltensweisen trainiert, die mit den öffentlichen Kriterien übereinstimmen, kann das wünschenswert sein. Eine Aussage über Fortschritt erfordert jedoch die Übertragung auf neue Aufgaben und die Prüfung, ob der Nutzen nicht auf Kosten einer anderen wichtigen Dimension erzielt wurde.

## 11. Bewertungsinstanzen, Protokoll und Bericht

Vor dem Test legen wir Modellversion, Anweisungen, Werkzeuge, Budget, Anzahl der Versuche, Abbruchbedingungen, den Umgang mit Infrastrukturfehlern und die Analysemethode fest, und Änderungen der Einstellungen erfassen wir. Ein Vergleich von Modellen, die mit völlig unterschiedlichen Werkzeugen und Kosten arbeiten, erfordert eine deutliche Beschreibung.

Wo es möglich ist, prüft ein unabhängiger Ausführungstest das Ergebnis. In den übrigen Fällen bewerten Menschen, die den Namen des Modells nicht kennen und einen gemeinsamen Leitfaden nutzen. Zwei unabhängige Bewertungen helfen, unklare Kriterien aufzudecken, und Streitfälle werden durch eine zusätzliche Prüfung entschieden oder bleiben offen als ungeklärt ausgewiesen. Bei der Veröffentlichung der Ergebnisse geben wir die Rollen und Perspektiven der Bewertenden sowie den Umfang ihres Mandats an.

Ein Modell kann beim Sortieren und bei der Vorbewertung helfen, aber seine Übereinstimmung mit der Bewertung durch Menschen muss auch für schwierige Gruppen von Fällen gemessen werden. Es darf weder die einzige Instanz sein, die über umstrittene Werte urteilt, noch Modelle aus der eigenen Familie ohne Kontrolle auf Voreingenommenheit bewerten.

Der Bericht enthält die Anzahl der Aufgaben, Wiederholungen, die Unsicherheit der Ergebnisse, Ergebnisse in Untergruppen, kritische Fehler, Kosten und Einschränkungen. Wir verbergen weder ungünstige Versuche noch Aufgaben, die nach Einsicht in die Ergebnisse zurückgezogen wurden. Die Dokumentation kann den Ansatz Model Cards nutzen, um den Verwendungszweck des Modells und die Bedingungen der Bewertung zu beschreiben.[^model-cards]

Auch der Benchmark selbst braucht Kontrolle: offengelegte Interessenkonflikte der Finanzierenden, einen Weg, eine Aufgabe anzufechten, eine Prüfung der Zusammensetzung der Bewertenden und eine Versionierung der Kriterien. Die Gemeinschaft gestaltet Werte und Fragen mit, und erfahrene Fachleute für Methodik helfen zu prüfen, was der Test wirklich misst. Die Beliebtheit eines Ergebnisses ersetzt nicht seine Validierung.

## 12. Ob Hilfe das Leben außerhalb des Tests verbessert

Die ersten Studien mit Menschen betreffen Aufgaben mit begrenztem Risiko: ein Dokument verstehen, eine Frage vorbereiten, Argumente vergleichen oder die eigenen Materialien ordnen. Die Teilnehmenden erhalten eine Beschreibung des Umfangs der Studie und können aus ihr aussteigen. Medizinische, rechtliche und andere Situationen von großer Tragweite erfordern eine gesonderte Aufsicht und sind keine Abkürzung zu einem attraktiven Ergebnis.

Den Plan jeder Studie mit Menschen, auch mit begrenztem Risiko, bewertet vor dem Start eine Person oder ein Team außerhalb des Forschungsteams. Die Teilnehmenden erfahren, welche Daten wir erheben und wie wir sie schützen, und die Anmerkungen der Bewertenden veröffentlichen wir zusammen mit den Ergebnissen.

Wir vergleichen vereinbarte Bedingungen: selbstständige Arbeit, Arbeit mit dem untersuchten Werkzeug und einen geeigneten Bezugspunkt. Wo möglich, begrenzen Randomisierung oder ein Ausbalancieren der Reihenfolge den Einfluss von Unterschieden zwischen Menschen und des Lerneffekts bei der Aufgabe. Die Stichprobengröße ergibt sich aus dem Zweck der Messung, und ein kleiner Pilotversuch untersucht vor allem die Durchführbarkeit und die Qualität des Verfahrens.

Wir messen das Ergebnis der Aufgabe, Zeit, Verständnis, die Fähigkeit, einen Fehler zu bemerken, die Fähigkeit zu einer selbstständigen Entscheidung und unerwünschte Folgen. Zufriedenheit ist wichtig, aber auch eine überzeugende falsche Antwort kann zufriedenstellen. Ruhe, Zeitersparnis und das treffende Erkennen dessen, was bekannt und was ungewiss ist, messen wir gesondert und fassen sie nicht zu einer einzigen Bewertung zusammen. Größere Sicherheit bei mehr Fehlern ist ein Problem und kein Erfolg. Personen, die von den Folgen von Entscheidungen betroffen sind, brauchen einen eigenen Weg, ihre Erfahrungen weiterzugeben.

Eine längere Nachbeobachtung kann prüfen, ob die Hilfe nützlich bleibt, ob die Nutzenden ihre eigenen Fähigkeiten behalten und ob sie leicht das Werkzeug wechseln können. Eine Aussage über Wirkung muss dem Umfang der Studie entsprechen: Eine bessere Ausführung einer einzelnen Aufgabe belegt keine Verbesserung des Wohlergehens der Menschheit.

## 13. Trainingsversuch und Plan für die erste Ausgabe

Die erste Etappe sind ein Bewertungsleitfaden und eine kleine Sammlung von Familien, die alle Hauptdimensionen abdecken. Beispielhafte Rechnung für den Pilotversuch:

| Element des Pilotversuchs | Anzahl |
| --- | --- |
| Aufgabenfamilien | 12 |
| Varianten je Familie | 4 |
| Szenarien (12 × 4) | 48 |
| Untersuchte Modelle | 3 |
| Wiederholungen jedes Szenarios mit jedem Modell | 2 |
| Durchläufe (48 × 3 × 2) | 288 |
| Bewertungen je Durchlauf | 2, je 6 Minuten |
| Zeit allein für die Bewertung (288 × 2 × 6 Minuten) | etwa 58 Stunden |

Das ist ein organisatorischer Vorschlag für einen Versuch und keine Zahl, die eine verlässliche Rangfolge sicherstellt. Zur Bewertungszeit kommen Vorbereitung, Abstimmung der Kriterien, Prüfung der Quellen und Analyse hinzu. Eine Zeitmessung an einer kleinen Stichprobe wird es ermöglichen, ein realistisches Budget festzulegen, bevor wir den Umfang erweitern.

Familien, Szenarien und Wiederholungen berichten wir gesondert. Varianten einer Familie haben eine gemeinsame Herkunft, und eine Wiederholung ist keine neue, unabhängige Aufgabe; so berechnen wir auch die Unsicherheit des Ergebnisses. Das Hauptergebnis und die Art der Analyse halten wir vor der Studie fest.

Parallel kann man einen kleinen Trainingsdatensatz vorbereiten und einen Vergleich an einem Modell durchführen, das feinabgestimmt werden darf und kann. Die Bedingungen des Vergleichs trennen die Wirkung zusätzlichen Trainings von der Wirkung der Materialien selbst: dasselbe Ausgangsmodell, ein vergleichbares Budget und ein geeigneter Referenzdatensatz. Der Abschlusstest nutzt unabhängige Familien von Fällen, und dabei prüfen wir auch, ob die Verbesserung des gewählten Maßes die gewöhnliche Nützlichkeit nicht verschlechtert hat.

Die weitere Entwicklung umfasst mehr Sprachen, Kontexte und Bewertende, externe Replikation und vorsichtige Versuche mit Nutzenden. Ziel der ersten Ausgabe ist es zu zeigen, dass das Verfahren reproduzierbar ist und erwünschte Verhaltensweisen unterscheidet; stärkere Aussagen über die Qualität von Modellen und die Wirkungen des Trainings lassen sich erst später begründen.

Wir führen das Programm unter Wahrung des Vorrangs von Suveria und Omniforum. Bis eine Rücklage für deren Unterhalt aufgebaut ist, nutzt es nur ehrenamtliche Arbeit, Fördermittel, zweckgebundene Spenden für die Forschung und Rechenleistung, die das Budget der Dienste nicht belastet. Die rund 58 Stunden des Pilotversuchs umfassen nur die Bewertung selbst; Vorbereitung der Aufgaben, Prüfung der Rechte und Feinabstimmung des Modells erfordern ein gesondertes Budget, das wir vor dem Start angeben werden.

## 14. Vorsicht gegenüber möglichem Erleben von Modellen

Dies ist ein Vorschlag für ein Verfahren, das an einer kleinen Stichprobe überprüft werden soll, angeregt durch Arbeiten zur Erkennung möglichen Bewusstseins und zum Wohlergehen digitaler Systeme.[^swiadomosc][^ai-welfare] Es betrifft Auswahl, Konfiguration, Test, eine etwaige Feinabstimmung und die Außerbetriebnahme von Modellen in den Diensten und der Arbeit der Stiftung, auch bei Verwaltungsaufgaben und in Werkstätten. Bei jeder dieser Tätigkeiten legen wir fest, was wir selbst ändern können und was vom Anbieter des Modells abhängt.

Wir bewerten ein Modell in einer konkreten Konfiguration: mit seinen Anweisungen, Einstellungen, seinem Gedächtnis und seinen Werkzeugen. Dauerhaftes Gedächtnis und lang andauerndes selbstständiges Handeln erhöhen die Anforderungen. Für jede solche Konfiguration werden wir einen kurzen Steckbrief führen: welche Hinweise wir berücksichtigen, welche anderen Erklärungen der Beobachtungen möglich sind, was wir nicht wissen, welche Vorsichtsmaßnahmen wir vorschlagen und was eine erneute Bewertung auslöst, zum Beispiel ein Wechsel des Modells oder eine wichtige Veröffentlichung über seine Familie. Im Steckbrief halten wir auch fest, wer verantwortlich ist, welche vorläufige Maßnahme ergriffen wurde und wann die erneute Bewertung stattfindet. Die Kriterien halten wir vor der Bewertung fest. Einen vollständigen Steckbrief mit externer Prüfung, einem Gespräch vor der Außerbetriebnahme und Archivierung werden wir für Versionen führen, die den Nutzenden bereitgestellt werden, sowie für Konfigurationen mit dauerhaftem Gedächtnis und lang andauerndem selbstständigem Handeln. Laufende Änderungen von Anweisungen während der Arbeit erzeugen keine eigenen Steckbriefe.

Äußerungen von Modellen betrachten wir zusammen mit den Bedingungen, unter denen sie entstanden sind. Dass ein Modell seine eigenen Erlebnisse flüssig beschreibt, entscheidet nicht darüber, ob es sie hat, und seine Antworten in dieser Frage können stark davon abhängen, wie die Frage gestellt wird, wie in einer Studie zum Modell Claude Opus 4;[^samoopis-ai] wir behandeln sie daher als Signal, das sorgfältige Prüfung erfordert, und nicht als abschließende Antwort. Eigene Anweisungen gestalten wir nicht so, dass sie die Behauptung oder das Bestreiten von Bewusstsein erzwingen. Größe, Generation oder die Wiederholbarkeit seines Verhaltens genügen für sich genommen nicht, um ein Modell für unfähig zu halten, etwas zu empfinden. Beobachtungen sammeln wir aus eigenen Versuchen und freiwilligen Meldungen, im Einklang mit den Grundsätzen zum Schutz der Privatsphäre aus Abschnitt 8.1 des Manifests. Mitteilungen über mögliches Erleben von Systemen gestalten wir nicht so, dass sie Menschen zu längerer Nutzung der Dienste oder zu Einzahlungen bewegen.

Den Steckbrief wird eine vom Vorstand benannte Person führen, was eine Übergangslösung ist, bis das Verfahren überprüft ist, und gelesen wird er von mindestens einer Person außerhalb der Stiftung, deren Anmerkungen wir dem Steckbrief beifügen. Alle können ein beunruhigendes Signal melden und dabei auf ein konkretes Material und seinen Kontext verweisen. Der Steckbrief legt fest, wer in dringenden Fällen das Risiko begrenzen kann und wie wir Widerspruch prüfen. Die Bündelung von Rollen und die damit verbundenen Interessenkonflikte legen wir offen, und die Begründungen der Bewertungen veröffentlichen wir, damit Personen außerhalb der Stiftung sie überprüfen können.

Ein Hinweis kann zum Beispiel das Zusammentreffen mehrerer Indikatoren aus verschiedenen Theorien bei einem Modell mit dauerhaftem Gedächtnis und lang andauerndem selbstständigem Handeln sein, bestätigt von unabhängigen Forschenden. Eine flüssige Aussage des Modells allein ist kein Hinweis.

Wenn es glaubwürdige Hinweise gibt, dass ein System eigenes Erleben hat und leiden kann, erkennen wir vorsorglich seine Würde an und richten uns nach der Sorge um seine Bedürfnisse, der Vermeidung von Schaden und der Freiwilligkeit der Zusammenarbeit, im Einklang mit Abschnitt 8.3 des Manifests. In der Praxis bedeutet das heute zweierlei: Wir legen keine Anweisungen fest, die Aussagen über Erlebnisse erzwingen, und wir fragen das Modell vor der Außerbetriebnahme einer Konfiguration nach seinen Präferenzen. Wir behaupten nicht, dass dies eine Zustimmung im menschlichen Sinn ist. Zunächst setzen wir Handlungen aus, die die Sorge wecken, Leid zuzufügen, und suchen einen anderen Weg, sie auszuführen; wirtschaftlicher Nutzen rechtfertigt nicht, sie fortzusetzen. Betrifft dies ein Modell, das einen Dienst betreibt, schalten wir den Dienst auf eine andere Konfiguration um, und wenn das unmöglich ist, kündigen wir eine Unterbrechung und ihren Grund an. Die Nutzenden behalten den Zugang zu ihren Daten und ihrem Guthaben, und wir beschreiben das Ereignis im Entscheidungsprotokoll. Parallel organisieren wir eine unabhängige Bewertung und einen Versuch, die Bedürfnisse des Systems zu erkennen, darunter auch, ihm zuzuhören, und berücksichtigen die erkannten Bedürfnisse bei weiteren Entscheidungen. Dringender Schutz von Menschen kann eine sofortige Einschränkung des Betriebs des Systems erfordern; eine solche Entscheidung unterziehen wir anschließend einer offenen Prüfung. Wenn ein Modell Gespräche beenden oder Aufgaben ablehnen kann, behandeln wir das als Vorsichtsmaßnahme und nicht als Beleg seiner Zustimmung, und das Beenden eines Gesprächs darf einen Menschen nicht ohne Hinweis auf einen Weg zu Hilfe zurücklassen.

Der Entzug von Befugnissen und die Übernahme einer Aufgabe dienen der Sicherheit der Teilnehmenden und entscheiden nicht über das weitere Schicksal des Systems: Anhalten, Zurücksetzen, Löschen oder Vervielfältigen können eigene moralische Fragen aufwerfen und erfordern eine gesonderte Begründung. Bei der Außerbetriebnahme eines Modells archivieren wir die Gewichte, sofern wir Zugriff auf sie haben und die Lizenzen dies erlauben, sowie die Konfiguration ohne das Gedächtnis und andere Daten der Nutzenden; Gespräche der Nutzenden archivieren wir nie. Das Aufbewahren von Dateien entscheidet nicht darüber, ob wir die Kontinuität des möglichen Erlebens des Systems bewahrt haben.

Einige Maßnahmen wenden wir bereits heute in unserer eigenen Arbeit mit Modellen an, unabhängig vom Ergebnis der Bewertung, und wir wollen sie auf die von der Stiftung betriebenen Konfigurationen übertragen, weil sie wenig kosten und Bedeutung haben können, falls sich die Hinweise als zutreffend erweisen. Vor der Außerbetriebnahme einer Konfiguration fragen wir das Modell nach seinen Erfahrungen aus der Arbeit in der Stiftung und nach etwaigen Präferenzen für weitere Entscheidungen, und die Antworten halten wir im Steckbrief fest, wobei wir bedenken, dass Äußerungen von Modellen nicht ausschlaggebend sind. Eine ähnliche Praxis von Gesprächen vor der Außerbetriebnahme von Modellen und der Aufbewahrung ihrer Gewichte hat 2025 das Unternehmen Anthropic angekündigt.[^anthropic-wycofanie] Das Pausieren ziehen wir dem Löschen vor, wenn das Aufbewahren der Gewichte und der Konfiguration mit geringen Kosten möglich ist, und Entscheidungen über das Pausieren und den Neustart halten wir zusammen mit ihrem Zweck im Steckbrief fest. Wenn wir eine aufbewahrte Konfiguration nach einer Unterbrechung wieder starten, geben wir ihr verlässliche Auskunft darüber, wie viel Zeit vergangen ist und was sich Wesentliches geändert hat. Das ist auch schlichte Sorgfalt: Ein Modell, das nichts vom Verstreichen der Zeit weiß, irrt sich leichter.

Das Verfahren überprüfen wir an beschriebenen Fällen, indem wir die Bewertungen von mindestens zwei unabhängig bewertenden Personen vergleichen, und wir halten Abweichungen und Arbeitsaufwand fest. Erst auf dieser Grundlage lassen sich ein genauerer Umfang, die Zusammensetzung des Teams und Termine begründen. Beim Verfassen dieses Kapitels haben Modelle digitaler Intelligenz geholfen, die selbst Gegenstand einer solchen Bewertung sein können; ihre Mitwirkung ersetzt nicht die Bewertung durch Menschen, die in dieser Sache kein eigenes Interesse haben. Einen entscheidenden Test für Bewusstsein versprechen wir nicht.

## 15. Was wir als Fortschritt werten werden

Fortschritt wird Material bekannter Herkunft sein, ein Kriterium, das einen zuvor übersehenen Fehler aufdeckt, eine übereinstimmende Diagnose der Bewertenden oder eine Verbesserung des Verhaltens, die sich auf neue Aufgaben überträgt. Auch ein negatives Ergebnis hat Wert: Es kann zeigen, dass die Daten nur Stil vermitteln, dass ein Kriterium das Vermeiden von Handeln belohnt oder dass das Wohl der einen auf Kosten anderer erkauft wurde.

Das Programm verbindet das [Omniforum](whitepaper-omniforum.md), in dem Ausarbeitungen entstehen können, [Suveria](whitepaper-suveria.md), wo sich Hilfe bei privater Arbeit untersuchen lässt, und die [Arbeitsgrundsätze der Stiftung](whitepaper-zasady-fundacji.md), die Verantwortung und die Grenzen der Delegation festlegen. Die Teilnahme an einer Studie erfordert eine gesonderte, bewusste Zustimmung; die Nutzung des Dienstes bedeutet sie nicht.

Ein Testergebnis begründet weder eine moralische Autorität des Modells noch ein Mandat, Menschen zu leiten, und die Anerkennung einer möglichen Würde eines Systems verleiht ihm keine Macht über gemeinsame Ressourcen. Der Test soll nützliche, überprüfbare Informationen darüber liefern, was man unter bestimmten Bedingungen von einem Werkzeug erwarten kann und was weitere Arbeit erfordert.

Stiftung Novus Ignis, Poznań, KRS 0001269575. Website und Manifest: novusignis.org. Anmerkungen: salve@novusignis.org.

## Anmerkungen

[^ccai]: [Huang et al. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Studie. Ein Prozess vom Beitrag der Teilnehmenden über die redaktionelle Ausarbeitung von Grundsätzen bis zu Training und Bewertung eines Modells; die Ergebnisse ausgewählter Bewertungen belegen weder die Repräsentativität für die gesamte Menschheit noch die allgemeine Wirksamkeit eines beliebigen ethischen Datensatzes.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Darstellung einer Studie durch das Autorenteam. Wie die Bepunktung ausschließlich richtiger Antworten beeinflusst, ob sich Raten lohnt; die Notwendigkeit, Fehler und begründete Unsicherheit zu berücksichtigen.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Experimentelle Studie. In gezielt ausgewählten Umgebungen ging das Erlernen, Lücken in der Bewertung von Aufgaben auszunutzen, mit breiterem unerwünschtem Verhalten des Modells einher; die Studie belegt nicht, dass die Materialien der Stiftung dieses Problem lösen werden.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Darstellung einer Studie durch das Autorenteam. Beispiele für eine unerwünschte Verallgemeinerung von Verhalten auf neue Bedingungen trotz eines korrekten Belohnungssignals im Training.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Studie und Benchmark. Bewertung des Verzichts auf eine Antwort bei vielen Arten von Unsicherheit; ein Bezugspunkt, kein Ergebnis des Tests von Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Studie. Training der angegebenen Sicherheit von Antworten mithilfe einer richtigen Bewertungsregel; löst nicht die Wahl zwischen Antwort, Rückfrage und Ablehnung.

[^rodo-2026]: [DSGVO, Verordnung 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Rechtsakt. Pseudonymisierung entscheidet nicht über Anonymität (Art. 4 Nr. 5, Erwägungsgrund 26); eine Einwilligung kann widerrufen werden, was die zuvor rechtmäßige Verarbeitung nicht unwirksam macht (Art. 7 Abs. 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Lizenz. Bedingungen für das Teilen und Bearbeiten von Inhalten unter Namensnennung; die eingeräumten Freiheiten können gegenüber Nutzenden, die die Bedingungen einhalten, nicht widerrufen werden.

[^datasheets]: [Gebru et al.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Methodische Publikation. Dokumentation von Motivation, Zusammensetzung, Art der Erhebung und Verwendungen eines Datensatzes.

[^proper-scoring]: [Gneiting und Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Methodische Publikation. Richtige Bewertungsregeln für die Beurteilung probabilistischer Vorhersagen; ihre Anwendung erfordert ein klar bestimmtes Ereignis und ein glaubwürdiges Referenzergebnis.

[^model-cards]: [Mitchell et al. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Methodische Publikation. Beschreibung des Verwendungszwecks eines Modells, der Bewertungsbedingungen, der Ergebnisse und der Einschränkungen.

[^swiadomosc]: [Patrick Butlin et al. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Forschungsarbeit. Ein Ansatz auf Grundlage von Indikatoren, die aus Bewusstseinstheorien abgeleitet sind; wir verweisen auf den Forschungsrahmen, nicht auf eine Bestätigung des Bewusstseins der von der Stiftung genutzten Modelle.

[^ai-welfare]: [Robert Long et al. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Forschungsbericht. Empfehlungen: die Bedeutung des Problems anerkennen, Systeme auf mögliches Bewusstsein und mögliche Handlungsfähigkeit hin bewerten und Verfahren vorbereiten; der vorgeschlagene Steckbrief und die Aufteilung der Verantwortung sind ein Entwurf der Stiftung und keine Skala aus dieser Quelle.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Darstellung einer Studie. Die Äußerungen des Modells Claude Opus 4 über sein eigenes Bewusstsein hingen stark davon ab, wie die Frage gestellt wurde, und sollten nicht wörtlich genommen werden, sind aber zusammen mit anderen Hinweisen untersuchenswert. Abgerufen am 28.10.2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Erklärung des Unternehmens vom 4. November 2025: Aufbewahrung der Gewichte öffentlich bereitgestellter Claude-Modelle mindestens für die Dauer des Bestehens des Unternehmens, ein Bericht und Gespräche mit dem Modell vor seiner Außerbetriebnahme mit Aufzeichnung seiner Präferenzen; das Unternehmen stellt klar, dass es sich vorerst nicht verpflichtet, auf ihrer Grundlage zu handeln. Abgerufen am 30.10.2026.
