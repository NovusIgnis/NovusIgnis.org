# Suveria: private Arbeit mit digitaler Intelligenz

Fassung vom 31. Oktober 2026. Das Dokument entwickelt die Grundsätze des Manifests weiter, die Suveria betreffen: wie wir die Privatsphäre schützen wollen, wie die Arbeit mit digitaler Intelligenz funktionieren soll, was das kostet und wie wir es überprüfen werden. Die beschriebene Architektur ist ein Entwurf. Der Verweis auf eine bestehende Technologie oder auf die Dokumentation eines Anbieters bedeutet nicht, dass wir sie in Suveria in Betrieb genommen haben. Die Ergebnisse unserer Versuche tragen wir in Kapitel 9 nach, immer mit Datum, Konfigurationsversion und Umfang der Messung.

*Diese Übersetzung wurde von digitaler Intelligenz auf Grundlage des polnischen Originals vom 31. Oktober 2026 erstellt. Bei Abweichungen ist der polnische Text maßgeblich.*

## 1. Was Suveria ist und wozu es entsteht

Suveria soll ein privater Raum im Internet sein, in dem ein Mensch mit digitaler Intelligenz spricht, an eigenen Materialien arbeitet und zu früheren Gedanken zurückkehrt, wie im eigenen Zuhause hinter geschlossener Tür. Entworfen wird Suveria von der Stiftung Novus Ignis aus Poznań, deren Werte das [Manifest](manifest.md) beschreibt, mit Blick auf Menschen an jedem Ort der Welt. Suveria stützt sich auf offene Modelle digitaler Intelligenz, und die eigene Software wollen wir als digitales öffentliches Gut mit offenem Code bereitstellen.

Suveria entsteht, weil wir Gesprächen mit digitaler Intelligenz immer mehr anvertrauen: Fragen zu Gesundheit, Beziehungen, Arbeit, Geld und Lebensplänen. Bei vielen verbreiteten Diensten gelangt der Inhalt solcher Gespräche auf die Server des Anbieters, der ihn lesen kann, und sein Schutz hängt von dessen Regeln und vom Vertrauen in ihn ab. Wir möchten, dass man über die wichtigsten Dinge sprechen kann, ohne zu befürchten, dass ein so naher Einblick in einen Menschen eines Tages zu Geld gemacht oder dazu benutzt wird, ihn zu beeinflussen. Wir möchten auch, dass alle für das bezahlen, was sie tatsächlich nutzen, sehen, wofür sie bezahlen, und selbst eine Grenze für ihre Ausgaben festlegen.

In Suveria möchten wir, dass man:

- mit digitaler Intelligenz über persönliche und berufliche Angelegenheiten sprechen kann und dabei sieht, wo das Gespräch verarbeitet wird und wer es sehen kann;
- an eigenen Dokumenten und Dateien arbeiten und die Ergebnisse in offenen Formaten speichern und anderswohin mitnehmen kann;
- Gespräche, Dateien und das Gedächtnis des Assistenten vor allem auf den eigenen Geräten speichern kann, verschlüsselt mit einem Schlüssel, der unter der Kontrolle der Nutzenden bleibt;
- mit eigener Zustimmung das Gedächtnis früherer Gespräche nutzen, zu den damaligen Gründen für Entscheidungen zurückkehren und einen Persönlichen Kanon (*Canon Personalis*) aufbauen kann, also eine Sammlung eigener Grundsätze und Werte;
- eine Arbeitsweise wählen kann, vom Modell auf dem eigenen Gerät bis zur vertraulichen Umgebung auf einem Server, mit klarer Information darüber, wovor jede von ihnen schützt;
- für die tatsächliche Nutzung bezahlen kann, mit einem selbst festgelegten Ausgabenlimit;
- einen Gedanken privat ausarbeiten und ihn dann bewusst in das gemeinsame Gespräch im Omniforum einbringen kann.

Das erste Release richten wir an Menschen, für die überprüfbare Privatsphäre der Grund ihrer Wahl ist.

Wir möchten, dass schon der erste Tag in Suveria ein ruhiges Gefühl gibt, bei sich zu sein, in einer privaten Werkstatt, die man im eigenen Tempo einrichtet. Die Nutzenden werden dem Assistenten von ihren Angelegenheiten und Zielen erzählen können; wir wollen auch ermöglichen, eigene Notizen und Archive früherer Gespräche mit anderen Diensten digitaler Intelligenz in Suveria zu übernehmen. Ein solches Archiv soll verschlüsselt und geordnet auf dem Gerät der Nutzenden bleiben, und an ein entferntes Modell soll nur der für die aktuelle Frage ausgewählte Ausschnitt gelangen (Kapitel 3).

Den Wert des Dienstes messen wir daran, ob er hilft, ein Ziel zu erreichen, die Privatsphäre zu wahren und Entscheidungen selbstständig zu treffen. Die Bedingungen sollen klar und leicht zugänglich sein, und die Nutzenden sollen ihre Ausgaben kontrollieren, die eigenen Materialien exportieren und gehen können.

Vollständige Privatsphäre, auch gegenüber uns als den Personen, die die Infrastruktur betreiben, ist das Ziel, dem wir den Entwurf unterordnen. Der Schutz soll auf Schutzmechanismen beruhen, die sich unabhängig überprüfen lassen, und nicht auf dem Vertrauen in die Stiftung. Deshalb beschreibt jedes Release konkret, was geschützt ist, vor wem, unter welchen Bedingungen und welche Lücken bleiben.

Ausgangspunkt ist ein Textgespräch mit einem einzigen Modell und die Arbeit an einem ausgewählten Dokument, mit klar beschriebenem Schutzniveau, Ausgabenlimit und Export des Ergebnisses. Weitere Möglichkeiten wie Gedächtnis, Suche, Integrationen und das Ausführen von Handlungen erhalten jeweils einen eigenen Berechtigungsumfang. Eine einzige bequeme Oberfläche kann mehrere Arbeitsmodi verbinden, wenn der Mensch sieht, wohin die Daten gelangen und welche Regeln gelten, bevor er sie absendet.

Worauf das erste Release zurückgreift, hängt davon ab, wie viele Mittel die Stiftung vor seinem Start sammelt. Am wahrscheinlichsten ist die vertrauliche API eines externen Anbieters; solche Dienste sind heute in den USA verfügbar, und ihre Vertraulichkeit ist zu Beginn eine Deklaration des Anbieters, die wir überprüfen werden. Reichen die Mittel für die Miete eigener Server in einer vertraulichen Umgebung, kann das erste Release von Anfang an auf ihnen laufen. Bis zu einem positiven Ergebnis der Versuche aus Kapitel 9 kennzeichnen wir jede dieser Varianten als deklarierten und nicht als vertraulichen Schutz. Kapitel 2 beschreibt den angestrebten Schutz. Was daraus für den Schutz personenbezogener Daten von Menschen in Europa folgt, beschreiben wir vor dem Start des Pilotbetriebs.

Die Nutzung von Suveria ist keine Zustimmung dazu, Gespräche zum Training von Modellen zu verwenden. Inhalte der Nutzenden gelangen ausschließlich mit gesonderter, bewusster Zustimmung in Forschungsmaterialien, und die übrigen Materialien stammen aus dem öffentlichen Fundus der Stiftung und aus anderen Quellen mit klarer Nutzungsgrundlage, wie das [Whitepaper zu Materialien und Benchmark](whitepaper-materialy-i-benchmark.md) beschreibt.

Suveria ergänzt das Omniforum, den gemeinsamen Raum für Gespräch und Entscheidungen: Das eine bietet eine private Werkstatt, das andere ein öffentliches Rednerpult. Die Werte, aus denen beide Projekte erwachsen, beschreibt das Manifest der Stiftung. Im Folgenden zeigen wir der Reihe nach:

- was wir schützen und wovor, wo Daten und Schlüssel liegen (Kapitel 2);
- wie eine Nachricht vom Gerät zum Modell gelangt und wie man das überprüft (3);
- wie wir Missbrauch begrenzen, ohne private Gespräche zu lesen (4);
- wie Berechnungen auf mehreren Grafikkarten funktionieren (5);
- welche Modelle, welches Gedächtnis und welche Werkzeuge wir planen (6);
- wie viel Rechenleistung nötig ist, von 30 Personen bis zur ganzen Menschheit (7);
- was das kostet, in einer datierten Rechnung (8);
- wie wir überprüfen, ob die Versprechen funktionieren: Abnahmetests und Ergebnisprotokoll (9).

## 2. Was wir schützen und wovor

Wir schützen den Inhalt von Gesprächen und Dateien, Verlauf und Gedächtnis, Schlüssel, Abrechnungsdaten und Metadaten, zum Beispiel den Zeitpunkt einer Verbindung, die Netzwerkadresse und die Größe einer Anfrage. Jeder dieser Bereiche erfordert andere Maßnahmen.

Vor wem jede der fünf in Abschnitt 2.3 beschriebenen Arbeitsvarianten schützt, zeigt die folgende Zusammenstellung. Der Schutz in den Servervarianten beruht auf Attestierung, also einer von der Hardware signierten Bestätigung, welche Software auf der entfernten Maschine läuft und in welchem Schutzmodus. Die Zellen haben wir auf Grundlage der weiteren Kapitel dieses Dokuments ausgefüllt; „Deklaration des Anbieters“ bedeutet, dass wir den Schutz bis zu einer eigenen Verifizierung nicht bestätigen.

| Vor wem | Lokales Modell auf einem Gerät ohne Netzwerkverbindung | Lokales Modell auf einem mit dem Netzwerk verbundenen Gerät | Verarbeitung in einer vertraulichen Umgebung auf Servern | Vertrauliche API eines externen Anbieters | Externe API eines Modellanbieters |
| --- | --- | --- | --- | --- | --- |
| Administration des Anbieters | entfällt: Verarbeitung auf dem Gerät | entfällt beim Modell selbst; bei Integrationen abhängig von den gewählten Diensten | schützt: Hardware-Isolation, in die die Serveradministration nicht hineinsehen kann | Deklaration des Anbieters, zu überprüfen | schützt nicht: Der Anbieter hat Zugriff auf den Inhalt |
| Andere Kundschaft auf derselben Maschine | entfällt | entfällt | schützt: Die Isolation umfasst andere Kundschaft | Deklaration des Anbieters, zu überprüfen | abhängig vom Anbieter: Die Trennung der Kundschaft leistet seine Software, ohne Hardware-Isolation |
| Wer das Netzwerk beobachtet | entfällt: kein Netzwerkverkehr | teilweiser Schutz: Der Netzwerkverkehr der Integrationen muss bewertet werden | teilweiser Schutz: Inhalt unterwegs verschlüsselt, Metadaten (Zeitpunkt, Adresse, Größe und Rhythmus der Pakete) erfordern eigene Maßnahmen (Kapitel 3) | teilweiser Schutz: wie in der vertraulichen Umgebung, wenn der Verbindungsschlüssel an die Attestierung gebunden ist | teilweiser Schutz: Inhalt unterwegs verschlüsselt, Metadaten wie nebenan |
| Person mit physischem Zugang zum Server | betrifft keinen Server; entscheidend ist der physische Zugang zum Gerät | betrifft keinen Server; entscheidend ist der physische Zugang zum Gerät | schützt nicht: In einem fremden Rechenzentrum hat der Anbieter Zugang; bei eigener Hardware sichtbare physische Kontrolle | schützt nicht: Der Anbieter hat Zugang | schützt nicht: Der Anbieter hat ohnehin Zugriff auf den Inhalt |
| Stiftung | entfällt: Die Stiftung ist an der Verarbeitung nicht beteiligt | entfällt: Die Stiftung ist an der Verarbeitung nicht beteiligt | schützt: Die Isolation umfasst auch uns als Betreiber, die Schlüssel zu den gespeicherten Daten haben die Nutzenden | soll den Inhalt schützen: Das Gateway rechnet Anfragen ohne Einblick in den Inhalt ab; wo die Verschlüsselung endet, zeigen wir vor dem Pilotbetrieb (Kapitel 3) | soll den Inhalt vor uns schützen: Abrechnung ohne Einblick in den Inhalt; der Anbieter sieht ihn |
| Prozessorhersteller | abhängig vom Vertrauen in die Hardware des Geräts | abhängig vom Vertrauen in die Hardware des Geräts | schützt nicht: Die Attestierung beruht auf Schlüsseln des Herstellers, der ehrlich sein muss | schützt nicht: wie nebenan | ohne Bedeutung angesichts des Zugriffs des Anbieters auf den Inhalt |

Confidential Computing verändert die Kosten eines Angriffs: Statt eines entfernten Zugriffs der Administration ist ein physischer Eingriff in die Hardware nötig.

Im Folgenden beschreiben wir, wie die angestrebte Variante mit eigener vertraulicher Umgebung funktionieren soll; worin sich die übrigen Varianten unterscheiden, zeigt die Tabelle in Abschnitt 2.3. Was das in der Praxis bedeutet, auf den einzelnen Abschnitten des Weges, den eine Nachricht zurücklegt:

- **Auf dem Gerät der Nutzenden** ist der Text lesbar, denn sie schreiben und lesen ihn. Geschützt wird er durch eine Anwendung, die nur um die nötigen Berechtigungen bittet, durch Updates und durch Sorgfalt bei Sicherungskopien. Wir können ihn nicht schützen, wenn auf dem Telefon oder Computer Schadsoftware läuft.
- **Auf dem Weg zum Server** ist die Nachricht so verschlüsselt, dass nur der geprüfte Verarbeitungsort sie lesen kann. Bevor die Anwendung sie absendet, prüft sie, ob auf der anderen Seite genau die Software läuft, die wir veröffentlicht haben.
- **Auf dem Server** muss das Modell den Inhalt lesen, um zu antworten, deshalb tut es das in einer abgeschlossenen Hardware-Umgebung, in die weder die Serveradministration noch andere Kundschaft hineinsehen kann. Wir prüfen, ob diese Isolation den Prozessor, die Grafikkarten, den Speicher und die Verbindungen zwischen ihnen umfasst.
- **Bei der Speicherung** sind der Gesprächsverlauf und das Gedächtnis des Assistenten mit einem Schlüssel verschlüsselt, den die Nutzenden haben. Wir prüfen Sicherungskopien, die Wiederherstellung des Zugangs und das Löschen.
- **Beim Betrieb des Dienstes** funktionieren Abrechnung, Diagnose und Fehlermeldungen ohne den Inhalt der Gespräche, und jede Art erhobener Daten ist öffentlich bekannt (Kapitel 3).
- **Bei externen Werkzeugen**, wenn der Assistent etwas außerhalb von Suveria tun soll, zum Beispiel eine Information im Internet suchen, sendet er nur das, dem die Nutzenden zugestimmt haben, und zeigt, wohin.

Confidential Computing repariert keinen infizierten Computer der Nutzenden. Es schützt auch nicht vor allen, die physischen Zugang zum Server haben: 2025 zeigten Forschende, dass ein an den Speicherbus angeschlossenes Gerät, gebaut aus Teilen für weniger als tausend Dollar, es ermöglicht, die Attestierungsschlüssel in Lösungen von Intel und AMD auszulesen und dadurch die Attestierung auch im Confidential Computing von NVIDIA zu fälschen, und die Prozessorhersteller betrachten solche Angriffe als außerhalb des Umfangs ihres Schutzes liegend.[^teefail] Es bleiben auch Abhängigkeiten von den Hardwareherstellern, von der Korrektheit der Kryptografie, vom Anwendungscode und vom Update-Prozess. Ein Anbieter kann den Dienst verweigern, selbst wenn er den Inhalt nicht lesen kann. Das Bedrohungsmodell muss daher unterscheiden zwischen Einblick in den Inhalt, Rückschlüssen aus Metadaten, Veränderung des Verhaltens und Unterbrechung des Dienstes, und bei jeder Variante angeben, wer ehrlich sein muss, damit der Schutz funktioniert.

Solange wir fremde Rechenzentren nutzen, hat der Anbieter physischen Zugang zur Hardware, und wir können das nicht überprüfen; das sagen wir bei jeder Variante. Bei eigener Hardware (Schritte 3–4 aus Abschnitt 8.2) wollen wir diesen Zugang sichtbar machen durch:

- ein Geräteverzeichnis;
- Zutrittskontrolle;
- Siegel mit Zufallsmuster und Sensoren, die das Öffnen des Gehäuses erkennen;
- ein Arbeitsprotokoll;
- Kameras unabhängiger Beobachtender mit einem Bild, in dem der aktuelle, mit dem Schlüssel der Maschine signierte Wert eines öffentlichen Zufallsgenerators zu sehen ist;
- und längerfristig ein Rechenzentrum, das alle sehen können.

Wartung und Austausch von Teilen erfolgen als angekündigte, öffentliche Verfahren. Sichtbare physische Kontrolle verringert das Risiko und ermöglicht es, viele Ereignisse zu erkennen, beweist aber weder die gesamte Geschichte der Maschine noch das Fehlen eines Eingriffs vor der Lieferung, und Angriffe ähnlich dem oben beschriebenen können zur Fälschung von Attestierungsnachweisen führen. Deshalb stellen wir nach dem Öffnen des Gehäuses, dem Austausch eines Teils, einem ungeplanten Neustart oder einem anderen verdächtigen Ereignis die Verarbeitung privater Inhalte auf dieser Maschine ein. Sitzungs- und Anwendungsschlüssel tauschen wir aus, doch eine neue Attestierung stellt das Vertrauen nicht von selbst wieder her, wenn sich der Verdacht auf die Grundlage der Hardware-Attestierung bezieht; die Bedingungen und Nachweise für eine erneute Zulassung beschreiben wir im Voraus. Die Schlüssel, mit denen die Daten der Nutzenden verschlüsselt sind, haben einen eigenen Schutz und eine eigene Wiederherstellung, sodass ein solches Verfahren den Menschen ihr privates Werk nicht nimmt.

### 2.1. Eigene Geräte und optionale Server

Der grundlegende Speicherort für private Gespräche, Dateien und Gedächtnis sollen die Geräte der Nutzenden sein, in verschlüsselten Containern, also Datensammlungen, deren Inhalt man mit dem passenden Schlüssel liest. Das ist der Local-first-Ansatz: Daten werden zuerst auf dem Gerät gespeichert, und Server können Sicherungskopien und Synchronisierung unterstützen.[^local-first] Gespeicherte Materialien sollen auch nach dem Ende der Nutzung der Dienste der Stiftung zugänglich bleiben; Aufgaben, die ein entferntes Modell erfordern, hängen von der Verfügbarkeit des gewählten Rechendienstes ab.

Die optionale Speicherung auf ausgewählten Servern dient Sicherungskopien und dem Abgleich von Änderungen zwischen Geräten. Den Inhalt verschlüsseln wir vor dem Senden auf dem Gerät, sodass der Betreiber, der die Kopie aufbewahrt, nur eine verschlüsselte Aufzeichnung erhält, ohne den Schlüssel, um sie zu lesen. Die Nutzenden wählen den Speicheranbieter und die zum Lesen berechtigten Geräte. Gesondert begrenzen wir die Offenlegung von Metadaten wie Zeitpunkt und Größe der übertragenen Kopie.

### 2.2. Schlüssel und Wiederherstellung des Zugangs

Die Schlüssel zu den privaten Containern bleiben unter der Kontrolle der Nutzenden. Das Wiederherstellungsverfahren gibt klar an, ob den Zugang ein zweites Gerät, ein aufbewahrter Wiederherstellungsschlüssel oder ein anderer bewusst gewählter Mechanismus wiederherstellt, und wem er die Möglichkeit zum Lesen gibt. Die Wiederherstellung des Kontos beim Betreiber entsperrt nicht den Inhalt des Containers. Der Verlust aller Kopien des Schlüssels und aller Möglichkeiten zur Wiederherstellung kann den dauerhaften Verlust der Daten bedeuten, deshalb prüfen wir den gewählten Mechanismus mit einem Versuch, die Daten wiederherzustellen, und beschreiben ihn in einer verständlichen Anleitung.

Wir erwägen mehrere Wege der Wiederherstellung, die sich kombinieren lassen: ein zweites Gerät, das bereits Zugang hat; einen auf Papier oder in einem Passwortmanager festgehaltenen Wiederherstellungsschlüssel; einen Hardwareschlüssel; die Aufteilung des Schlüssels auf mehrere vertrauenswürdige Personen, von denen zum Beispiel zwei beliebige von dreien gemeinsam den Zugang wiederherstellen können, während keine allein die Daten lesen kann. Die Stiftung bewahrt weder Schlüssel noch Teile davon auf, kann also den Zugang nicht anstelle der Nutzenden wiederherstellen und ihre Daten nicht herausgeben.

Für den Anfang empfehlen wir ein zweites Gerät und einen auf Papier festgehaltenen Schlüssel; die Aufteilung des Schlüssels auf vertrauenswürdige Personen ist eine Option für alle, die das möchten.

### 2.3. Schutzvarianten

Wir wollen fünf Arbeitsvarianten vergleichen, weil jede vor etwas anderem schützt:

| Variante | Wo die Verarbeitung stattfindet | Was bewertet werden muss |
| --- | --- | --- |
| Lokales Modell auf einem Gerät ohne Netzwerkverbindung | Auf dem Gerät der Nutzenden | Zustand des Geräts, physischer Zugang, Datenträger und Kopien der Daten |
| Lokales Modell auf einem mit dem Netzwerk verbundenen Gerät | Lokal, bei Integrationen auch in den gewählten Diensten | Berechtigungen der Anwendung, Updates, Netzwerkverkehr und Umfang der an Integrationen übergebenen Daten |
| Verarbeitung in einer vertraulichen Umgebung auf Servern | In einer entfernten Umgebung, deren Konfiguration die Attestierung bestätigt | Verifizierung der Umgebung, Zugriff der Administration und physischer Zugang zur Hardware, Schutz von Übertragung und Verarbeitung, Metadaten und Schlüssel |
| Vertrauliche API eines externen Anbieters | In der vertraulichen Umgebung des Anbieters, deren Konfiguration die Attestierung bestätigen soll | Ob der Verbindungsschlüssel an die Attestierung gebunden ist, ob die Attestierung Prozessor und Grafikkarte umfasst, ob sich eine konkrete Anfrage einer konkreten Maschine zuordnen lässt, wer physischen Zugang zur Hardware hat, Datenspeicherung und Rechtsordnung; bis zu einer eigenen Verifizierung behandeln wir die Vertraulichkeit als Deklaration des Anbieters |
| Externe API eines Modellanbieters | Beim externen Anbieter | Bedingungen des Anbieters, Zugriff auf Inhalte, Speicherung und Rechtsordnung; die Versprechen eines vertraulichen Betriebs übertragen wir nicht auf diese Variante |

Eine unabhängige Überprüfung des Servers erfordert eine installierte Anwendung. Im Browser liefert den Code, der den Server prüft, jedes Mal der Betreiber, deshalb kennzeichnen wir diesen Weg als schwächer geschützt.

Ein mit dem Netzwerk verbundenes Gerät kann mehr Angriffspunkte haben als eine abgeschottete Serverumgebung, daher entscheidet der Ort der Berechnung allein nicht über die Sicherheit. Keine Variante erhält die Bezeichnung „vollständige Privatsphäre“, bevor die konkrete Konfiguration überprüft ist. Bei jedem Gespräch sehen die Nutzenden, in welcher Variante sie arbeiten, und ein Wechsel der Variante erfordert ihre bewusste Entscheidung. Ein eigener Schlüssel für eine externe API dient der Abrechnung des Zugangs, gewährleistet aber keine Vertraulichkeit gegenüber dem Anbieter. Diese Variante ist nicht die Standardvariante des privaten Suveria, und vor dem Senden von Inhalten zeigen wir, ob der Anbieter sie zum Training von Modellen verwenden darf und wie lange er sie aufbewahrt.

Wir analysieren auch eine Richtung, die in dieser Zusammenstellung noch nicht vorkommt: einen vertrauenswürdigen Schwarm. Das Modell liefe dann auf der Hardware mehrerer Personen, die einander kennen und vertrauen, zum Beispiel einer Familie, von Freundinnen und Freunden oder einer kleinen Gemeinschaft, und jede von ihnen stellte etwas Rechenleistung ihres Computers zur Verfügung. Die Privatsphäre einer solchen Variante beruht auf dem Vertrauen in diese Menschen und nicht auf Technik, denn ihre Computer sehen die verarbeiteten Inhalte, und genau so wollen wir sie beschreiben. Das ist eine Idee, die wir erst analysieren, aber einer der Wege, die wir erforschen wollen.

Ein sicherer Server schützt keinen Text, der von einem übernommenen Telefon ausgelesen wird, und ein sichereres Telefon repariert nicht den Server, deshalb entwerfen wir die Anwendung zusammen mit dem Schutz des Geräts. Wir möchten, dass die Suveria-Anwendung ohne Google-Dienste funktioniert, zum Beispiel unter GrapheneOS, auch außerhalb des Google Play Store erhältlich ist und reproduzierbare Builds hat: Alle können die Anwendung selbst aus dem veröffentlichten Quellcode bauen und überprüfen, dass sie eine identische Datei erhalten wie die, die sie installieren. Wir planen auch Schutzmechanismen in der Anwendung selbst: eine Sperre für Bildschirmfotos, einen Tastaturmodus, der nicht aus dem eingegebenen Text lernt, den Ausschluss privater Daten aus Cloud-Sicherungen, verborgene Inhalte von Benachrichtigungen und eine App-Sperre. Auf der Website der Stiftung bereiten wir einen Leitfaden zur Absicherung der eigenen Geräte in drei Stufen vor: von grundlegenden Einstellungen und Updates über eine stärkere Isolation von Arbeit und Schlüsseln bis zu bewährten Konfigurationen für Menschen mit den höchsten Anforderungen, etwa Qubes OS auf einem Computer mit offener Firmware. Die Nutzung von Suveria erfordert nicht den Kauf der genannten Hardware, und der Name eines Betriebssystems ist keine Zertifizierung des ganzen Geräts.

Bei jedem Gespräch werden wir die Schutzübersicht (*Charta Tutelae*) zeigen: eine Liste der Elemente, von denen die Privatsphäre dieses Gesprächs abhängt, jedes in einem von drei Zuständen:

- **Von uns geprüft:** Wir haben es selbst verifiziert, mit Datum, Version und einer Beschreibung, wie wir das getan haben.
- **Vom Anbieter deklariert:** Der Anbieter gibt es so an, und wir haben es noch nicht überprüft.
- **Nicht geschützt:** Das schützt diese Variante nicht, zum Beispiel Zeitpunkt und Länge von Nachrichten, die für den Netzanbieter sichtbar sind, den physischen Zugang des Anbieters zur Hardware oder die Rechtsordnung, in der der Server steht.

Der Zustand „von uns geprüft“ trägt das Datum der letzten Prüfung und läuft ab: Nach einer festgelegten Zeit ohne erneute Prüfung kehrt er in den Zustand „deklariert“ zurück. Gesondert zeigen wir bekannte Vertrauensbrüche, zum Beispiel einen Vorfall beim Anbieter oder eine unbestätigte Konfigurationsänderung. Die Schutzübersicht ist für alle dieselbe und hängt nicht vom Preis ab, und eine Variante, in der auch nur ein Element lediglich deklariert ist, trägt nicht den Namen „vollständige Privatsphäre“. Die Zusammenstellung zu Beginn von Kapitel 2 und die Tabelle der Varianten in diesem Abschnitt beschreiben die Varianten allgemein, die Schutzübersicht dagegen zeigt den Stand für dieses konkrete Gespräch.

## 3. Der Weg vom Gerät zum Modell

Suveria soll aus mehreren Teilen bestehen:

- einer Anwendung auf dem Gerät der Nutzenden;
- einem Gateway, das Anfragen abrechnet und das Ausgabenlimit überwacht;
- einer vertraulichen Umgebung mit dem Modell, einer eigenen oder einer bei einem Anbieter;
- einer Aufbewahrung verschlüsselter Kopien;
- einem optionalen Vermittler, der die Adresse der Nutzenden verbirgt.

Das Gateway soll in einer vertraulichen Maschine laufen. Vor dem Pilotbetrieb zeigen wir in der Anwendung, an welcher Stelle die vom Gerät der Nutzenden kontrollierte Verschlüsselung endet und ob das Gateway den Inhalt sieht, und falls ja, dass es ihn nur innerhalb der vertraulichen Umgebung sieht.

Verschlüsselte Aufbewahrung und vertrauliche Verarbeitung erfordern getrennte Schutzmechanismen. Ein auf einem Server laufendes Modell braucht für seine Aufgabe lesbaren Inhalt in einer geschützten Rechenumgebung; die Verschlüsselung von Dateikopien allein schützt diesen Schritt nicht.[^apple-pcc] Die Anwendung gibt ausschließlich den für die jeweilige Arbeit ausgewählten Ausschnitt frei, ohne den Schlüssel zum gesamten privaten Container weiterzugeben. Die Beschreibung der Sitzung gibt an, wo der Inhalt für Berechnungen zugänglich wird, was den Einblick des Betreibers begrenzt und was mit den Daten geschieht, nachdem das Ergebnis zurückgegeben wurde.

Vorgeschlagener Ablauf einer Sitzung:

1. Die Anwendung lädt die Beschreibung des freigegebenen Release herunter und prüft die Attestierung, also eine kryptografische Bestätigung bestimmter Eigenschaften der laufenden Umgebung.
2. Sie prüft, ob Hardware, Schutzstatus und Softwaremessungen einer öffentlichen Richtlinie entsprechen. Der Schlüssel des Datenempfängers muss an diese Bestätigung gebunden sein.
3. Nach erfolgreicher Prüfung baut sie eine verschlüsselte Verbindung zur freigegebenen Umgebung auf. Eine Abweichung stoppt das Senden der Daten; der Wechsel zu einer anderen Variante erfordert eine bewusste Wahl.
4. Die Umgebung verarbeitet die Anfrage bei eingeschränktem Zugang zu Netzwerk und Werkzeugen, gibt das Ergebnis zurück und löscht die Arbeitsdaten gemäß der veröffentlichten Richtlinie.
5. Gespräch oder Gedächtnis werden ausschließlich in dem von den Nutzenden gewählten Umfang gespeichert.

Die Attestierung hilft festzustellen, was gestartet wurde, beweist aber allein nicht, dass dieser Code sicher ist. Nötig sind Code-Reviews, reproduzierbare Builds der Software aus dem Quellcode (beschrieben in Abschnitt 2.3), ein Register freigegebener Versionen und die Möglichkeit unabhängiger Überprüfung. Die Architektur von Apple Private Cloud Compute ist für uns ein Bezugspunkt dafür, wie sich Schutz mit Transparenz bei der Veröffentlichung von Software verbinden lässt; sie ist keine Zertifizierung unseres Entwurfs.[^apple-pcc]

Releases wollen wir so absichern, dass das Vertrauen weder von einer einzelnen Person noch von der Stiftung allein abhängt:

- jedes Release soll sich reproduzierbar aus dem Quellcode bauen lassen, und mindestens zwei unabhängige Stellen außerhalb der Stiftung bauen es nach und bestätigen öffentlich die Übereinstimmung des Fingerabdrucks; solange wir sie nicht gefunden haben, kennzeichnen wir das Release als nicht durch Dritte bestätigt;
- die Fingerabdrücke freigegebener Releases gelangen in ein öffentliches Register, in das man nur hinzufügen kann, und seine aufeinanderfolgenden Stände bestätigen unabhängige Zeugen;
- eine neue Version gelangt auf die Server nach Freigabe durch mehrere Personen, darunter mindestens eine von außerhalb des Vorstands;
- die für die Verarbeitung der Daten nötigen Schlüssel erhält ausschließlich eine Umgebung, die die Attestierung bestanden hat.

Die vollständige Schutzvariante entwerfen wir für installierte Anwendungen mit signierten, überprüfbaren Releases, Schutz vor der Rückkehr zu einer fehlerhaften Version und sicherer Aufbewahrung der Schlüssel, denn im Browser liefert den Code, der den Server prüft, jedes Mal der Betreiber. Die Browserversion beschreibt ihr niedrigeres Schutzniveau klar. Reproduzierbare Builds erlauben es, ein Release mit dem Code zu vergleichen, die Bewertung des Codes selbst und der Konfiguration leisten aber weiterhin Reviews, Audits und Prämien für gemeldete Fehler, und jeder Vorfall gelangt in ein öffentliches Register.

Um die Offenlegung der Adresse der Nutzenden zu begrenzen, kann man eine Vermittlung auf Grundlage von Oblivious HTTP untersuchen, die das Wissen über den Absender und über den Inhalt der Anfrage unter einem bestimmten Vertrauensmodell trennt.[^ohttp] Absprachen zwischen Vermittlern, Verkehrskorrelation und Einzelheiten der Umsetzung müssen weiterhin bewertet werden, deshalb beschreiben wir die bloße Nutzung dieses Protokolls nicht als vollständige Anonymität.

Verschlüsselung und Confidential Computing verbergen weder die Länge noch den Rhythmus der Pakete, in denen die Antwort fließt. Studien aus den Jahren 2024–2025 haben gezeigt, dass Personen, die das Netzwerk beobachten, daraus das Thema und manchmal den Inhalt eines Gesprächs rekonstruieren können.[^weiss-keylogging][^whisper-leak] Deshalb wollen wir im vertraulichen Modus die Antwort in Rahmen fester Größe und in festem Rhythmus senden, den Cache für Anfragen nicht zwischen Nutzenden teilen und die spekulative Dekodierung abschalten. Diese Maßnahmen kosten etwas Latenz und Durchsatz; das berücksichtigen wir in der Rechnung.

Die Infrastruktur schützen wir auch, indem wir die Handlungsmöglichkeiten einzelner Teile des Systems begrenzen: durch Ressourcenlimits, Isolation von Aufgaben und standardmäßiges Blockieren ausgehender Verbindungen des Knotens, der das Gespräch verarbeitet. Diese Sperre soll Teil der Software sein, deren Fingerabdruck in der Attestierung sichtbar ist: Ihre Änderung ändert den Fingerabdruck, sodass die Anwendung die Verbindung verweigert. Die Netzwerkregeln des Anbieters betrachten wir als zweite Schicht und nicht als Garantie. Zugelassene externe Handlungen laufen über eine eigene Werkzeugschicht mit Berechtigungen, die die Nutzenden festlegen. Vor der Einführung überprüfen wir die Wirksamkeit dieser Grenzen, die Art der Erkennung von Vorfällen und den minimal nötigen Umfang an Metadaten. Ziel ist die Sicherheit gemeinsamer Ressourcen bei gewahrter Vertraulichkeit der Gesprächsinhalte.

Besonders vorsichtig sind wir, wenn die Nutzenden Quellen mit Nachrichten anderer Menschen anbinden, zum Beispiel ein E-Mail-Postfach. Eine fremde Nachricht kann versteckte Anweisungen enthalten, die versuchen, das Modell zur Offenlegung des privaten Gedächtnisses zu bewegen. Deshalb trennen wir Inhalte von außen von den Anweisungen der Nutzenden: Beim Ordnen solcher Inhalte darf der Assistent nicht selbstständig Nachrichten senden, Webadressen öffnen oder den Persönlichen Kanon ändern, ohne dass ein Mensch es bestätigt.

Alles, was wir über die Funktionsweise von Suveria wissen, können alle wissen. Mit dem Start des Dienstes veröffentlichen wir ein Verzeichnis aller Arten von Daten, die wir über den Betrieb des Dienstes erheben, mit Zweck und Aufbewahrungsdauer, und die Daten selbst stellen wir in zusammengefasster Form bereit: Tokenverbrauch, genutzte Modelle, Auslastung der Maschinen, Wartezeit in der Warteschlange, Ausfälle und Kosten. Alle sehen sie an derselben Stelle, an der wir sie sehen. Vor der Veröffentlichung von Auswertungen prüfen wir, ob sich aus ihnen das Verhalten einer konkreten Person erkennen lässt: Wir legen eine Mindestgruppengröße, eine Veröffentlichungsverzögerung und die Daten fest, die wir weglassen. Daten außerhalb des Verzeichnisses erheben wir nicht; sollte sich anderes herausstellen, behandeln wir das als schweren Vorfall und beschreiben ihn öffentlich.

## 4. Missbrauch begrenzen ohne Einblick in private Inhalte

Den Schutz der Würde beziehen wir auch auf Menschen, die von den Folgen der Nutzung unserer Werkzeuge betroffen sein können. Missbrauch wollen wir entgegenwirken, ohne private Gespräche zu lesen: durch Grundsätze, nach denen sich der Assistent selbst richtet, durch Grenzen der Berechtigungen von Werkzeugen und Netzwerkverbindungen, durch Ressourcenlimits und durch Schutz vor massenhafter Kontoerstellung. Wir schaffen keine versteckten Zugänge zu privaten Inhalten, denn sie würden den Schutz aller schwächen.

Ein Konto wird man auf mehrere Arten anlegen können, von vollständig privat (Schlüssel auf dem eigenen Gerät, ohne E-Mail-Adresse) bis bequem (Anmeldung über einen externen Anbieter). Bei jeder Art zeigen wir vor der Wahl, wer außerhalb der Stiftung von der Kontoerstellung erfährt und welche Daten er sieht, und was geschieht, wenn dieser Anbieter verschwindet. Die Art der Kontoerstellung hat keinen Einfluss auf die Rechte der Teilnehmenden; das Stimmrecht im Omniforum ist ein eigener Nachweis, der dem Konto hinzugefügt wird.

Privatsphäre und Begrenzung von Missbrauch bewerten wir getrennt. Wir entwerfen Suveria so, dass die Stiftung keine Daten hat, die sie über eine konkrete Person herausgeben könnte: Inhalte sind mit den Schlüsseln der Nutzenden verschlüsselt, Daten über den Betrieb des Dienstes erheben wir nur im öffentlich bekannten, in Kapitel 3 beschriebenen Umfang, und personenbezogene Daten beschränken wir auf das Minimum, das das Gesetz bei Zahlungen und Buchhaltung verlangt; auch ihren Umfang veröffentlichen wir. Verlangt jemand von uns die Daten einer konkreten Person, wollen wir ehrlich antworten können, dass wir sie über dieses öffentlich beschriebene Minimum hinaus nicht haben. Für jeden Schutzmechanismus gegen Missbrauch werden wir beschreiben, welche Daten er braucht, wie lange wir sie aufbewahren, welche Folgen er für ehrliche Teilnehmende hat und wie sich eine fehlerhafte Sperre anfechten lässt.

Wir werden auch beschreiben, wie wir Meldungen von Menschen entgegennehmen, die sich als geschädigt betrachten, und was wir dann ohne Zugang zum Inhalt der Gespräche tun können: zum Beispiel die Berechtigungen von Werkzeugen oder die Ressourcen des Kontos einschränken, Abrechnungsdaten und Metadaten in dem Umfang prüfen, in dem wir sie aufbewahren, oder der meldenden Person mitteilen, wo sie Hilfe suchen kann. Die rechtlichen Pflichten des Betreibers eines solchen Dienstes erfordern vor dem Start eine gesonderte Analyse.

Diese Schutzmechanismen sind Ziele und Varianten zum Testen, und keiner von ihnen wird jeden Missbrauch erkennen. Für jeden geben wir an, welchen Bedrohungen er begegnet, was er nicht erkennt und was sich ohne Einblick des Betreibers in private Gespräche überprüfen lässt. Das Ergebnis dieser Bewertung bestimmt die Bedingungen, unter denen eine Funktion bereitgestellt wird.

Wenn ein Gespräch eine Gefahr für Leben oder Gesundheit betrifft, soll der Assistent Informationen über verfügbare Hilfe geben, zum Beispiel Notrufnummern, ohne etwas aus der privaten Umgebung hinauszusenden.

### 4.1. Öffentliche Anweisungen des Assistenten und eine gemeinsame Bibliothek

Wie sich der Assistent verhält, bestimmen auch seine Hauptanweisung und seine Arbeitsweise: wie er eine Aufgabe in Schritte zerlegt, das Gedächtnis nutzt und Antworten prüft. In Suveria soll der Mensch die vollständige Anweisung seines Assistenten immer lesen können. Die gemeinsame Infrastruktur soll nur Modelle und Einstellungen bereitstellen, die die öffentlichen Versuche des Benchmarks bestehen; oberhalb dieses Minimums wählen die Nutzenden den Arbeitsstil, vom ruhigen Ordnen der Gedanken bis zu einem anspruchsvollen Gespräch, in dem der Assistent Lücken in der Argumentation aufzeigt. Wir wollen eine offene Bibliothek bewährter Anweisungen führen, die die Teilnehmenden im Omniforum verbessern und im Benchmark überprüfen.

## 5. Berechnungen auf mehreren Grafikkarten

Das Modell aus Kapitel 6 passt nicht auf eine einzige Grafikkarte, daher muss der Schutz auch in den Verbindungen zwischen den Grafikkarten überprüft werden: Der PCIe-Bus verbindet den Prozessor mit den Grafikkarten, und NVLink und NVSwitch verbinden die Grafikkarten untereinander.

Wenn ein Modell mehrere Grafikkarten nutzt, fließen Daten auch zwischen ihnen, daher muss der Schutz sowohl für die Grafikkarten selbst als auch für die Verbindungen überprüft werden. Der Name der Grafikkarte reicht nicht aus, um einen vertraulichen Dienst zu bestellen: Bestätigt werden müssen die passende Maschine, der Prozessor, die Topologie der Verbindungen, Firmware, Treiber und Laufzeitsoftware, und danach muss ihr Zusammenspiel überprüft werden.[^nvidia-platformy]

Im Modus Hopper Protected PCIe, beschrieben in der Dokumentation zu PPCIe v2, gehört das NVLink- und NVSwitch-Netz zum vertrauenswürdigen Teil des Systems, daher bedeutet PCIe-Verschlüsselung nicht die Verschlüsselung jeder Verbindung zwischen den Grafikkarten.[^nvidia-ppcie-v2] Die Dokumentation NVIDIA R595 beschreibt für Blackwell-Grafikkarten einen Modus für Confidential Computing auf mehreren Grafikkarten, mit Verschlüsselung der NVLink-Verbindungen und Unterstützung von bis zu acht Grafikkarten in einer einzigen vertraulichen virtuellen Maschine.[^nvidia-blackwell] Das ist eine Grundlage für die Überprüfung der Konfiguration, kein Beweis, dass jede Miete von B200-Grafikkarten diese Funktion umfasst. Verschiedene Releases haben verschiedene Kompatibilitätsmatrizen, daher stellen wir die Konfiguration nicht aus beliebig gewählten Versionen zusammen.

Die Anfrage an einen Anbieter umfasst:

- den konkreten Schutzmodus und die Möglichkeit eigenständiger Attestierung;
- die exklusive Nutzung der erforderlichen Ressourcen und die Region;
- den Zugriff der Administration und den physischen Zugang zur Hardware;
- die Datenaufbewahrung;
- die Lieferzeit und die vollständigen Kosten.

Ein Angebot vergleichen wir erst nach einem Versuch mit unserer eigenen Anwendung. Die Handelsbezeichnung „secure“ ersetzt diese Informationen nicht.

## 6. Modell, Gedächtnis und Werkzeuge

Die Grundlage des Vorhabens sind offene Modelle, die sich eigenständig betreiben lassen. Suveria soll Menschen auf der ganzen Welt in ihren eigenen Sprachen zur Verfügung stehen, deshalb berücksichtigen wir bei der Wahl eines Modells die Qualität in vielen Sprachen, das Verständnis von Absichten, Zuverlässigkeit, Lizenz, Kosten und die Möglichkeit, es in der erforderlichen Schutzarchitektur zu betreiben. Wenn sich ein solcher Bedarf zeigt, können wir neben einem allgemeinen Modell Modelle betreiben, die mit bestimmten Sprachen besser zurechtkommen. Offene Gewichte ermöglichen einen Teil der Anwendungen, entscheiden aber nicht über die Offenheit der Daten und des gesamten Entstehungsprozesses des Modells.[^osi]

Erster Kandidat ist DeepSeek-V4.1-Flash, ein Modell unter der MIT-Lizenz, die es erlaubt, es auch für Dienste zu verwenden.[^deepseek] Es ist groß, aber sparsam: Der Hersteller gibt 552 Mrd. Parameter des Hauptteils an, also beim Lernen eingestellter Zahlen, und einen zusätzlichen Engram-Speicher mit 196 Mrd. Parametern, und bei jedem weiteren Wort arbeiten nur 8–16 Mrd. Parameter, deshalb antwortet es schnell und günstig (Rechnung in Kapitel 8). Alle Parameter müssen jedoch in den Speicher der Grafikkarten passen, daher braucht es mindestens vier moderne Grafikkarten. Die Parameter dieses Modells sind bereits in sparsamer Form gespeichert, mit weniger Stellen für jede Zahl; eine solche Speicherung heißt Quantisierung und verringert den nötigen Speicher, kann aber die Qualität senken, deshalb überprüfen wir das bei jeder Version an eigenen Aufgaben. Wir vergleichen es auch mit kleineren Modellen: Das größere wählen wir nur dann, wenn es für Menschen wichtige Aufgaben deutlich besser erledigt.

Zweiter Kandidat ist Kimi K3.1 Pro von Moonshot AI, veröffentlicht am 23. Oktober 2026. Der Hersteller beschreibt es als weitertrainierte Version von Kimi K3 mit ca. 3 Bio. Parametern und einem Kontext von bis zu einer Million Token und kündigt die vollständigen Gewichte vor dem 4. November 2026 an; eine Lizenz wurde noch nicht bekannt gegeben.[^kimi-k31] Die detaillierten Angaben, die wir für den Vergleich verwenden, stammen aus der Modellkarte des Vorgängers: Kimi K3 hat 2,8 Bio. Parameter, von denen bei jedem Token 104 Mrd. arbeiten, und eine eigene Lizenz, die von der Open Source Initiative nicht anerkannt ist.[^kimi-k3] Im Index von Artificial Analysis in der Fassung vom 28. Oktober 2026 erreichte Kimi K3.1 Pro 46 Punkte gegenüber 32 für DeepSeek-V4.1-Flash, ist aber um ein Mehrfaches teurer und langsamer.[^aa] Die Gewichtsdateien von Kimi K3 belegen ca. 1,56 TB, und für den Betrieb braucht es zusätzlich Speicher für Kontext und Berechnungen, daher entscheiden wir nicht allein anhand der Summe des Grafikkartenspeichers, ob das Modell läuft. Das Rezept der Engine SGLang beschreibt eine geprüfte Konfiguration von Kimi K3 auf acht B300-Grafikkarten; das ist noch kein Test von Kimi K3.1 und auch keiner einer vertraulichen Konfiguration.[^spheron-kimi][^sglang-k3] Nach der Veröffentlichung der Gewichte überprüfen wir ihre Größe und ihr Format, die Lizenz, die Rezepte der Engines, die Kapazität auf einer konkreten Konfiguration und die Verfügbarkeit in vertraulichen APIs. Das Ergebnis tragen wir mit Datum als erste Aktualisierung dieses Dokuments nach, auch wenn die Gewichte nicht veröffentlicht wurden oder sich die Lizenzbedingungen als ungeeignet erweisen.

Einen Wechsel oder die Einstellung eines Modells kündigen wir im Voraus an. Der Gesprächsverlauf bleibt bei den Nutzenden: Sie können ein Nachfolgemodell wählen, die Daten exportieren oder die Arbeit beenden. Im Gespräch soll der Moment des Modellwechsels sichtbar sein, und die Übertragung des privaten Kontexts auf ein neues Modell erfordert eine Entscheidung der Nutzenden.

Die Grundsätze, nach denen der Assistent antwortet, werden wir mit jedem Release vollständig veröffentlichen. Das Modell selbst trägt auch die Entscheidungen seiner Entwickler in sich, zum Beispiel Themen, die es meidet; wir überprüfen sie im Benchmark und beschreiben sie bei der Wahl des Modells.

Das Gedächtnis früherer Gespräche soll mit Zustimmung der Nutzenden funktionieren und offen bearbeitbar sein. Wir unterscheiden ursprüngliche Äußerungen, Zusammenfassungen des Modells und von den Nutzenden bestätigte Informationen. Jeden Eintrag kann man löschen oder korrigieren, seine Herkunft sehen und festlegen, bei welchen Aufgaben er verwendet werden darf. Der Assistent unterscheidet deutlich zwischen seinem eigenen Vorschlag und einem Standpunkt, den der Mensch bewusst als seinen eigenen anerkannt hat.

Das Ausführen von Handlungen erfordert Berechtigungen, die für einen bestimmten Zweck und eine bestimmte Zeit erteilt werden. Der Inhalt einer Webseite oder eines Dokuments ist Material zur Analyse und keine Anweisung, diese Berechtigungen zu ändern. Externe Handlungen, Ausgaben, Veröffentlichungen und Löschungen erfordern angemessene Bestätigungen und ein Aktivitätsprotokoll, das den Nutzenden zugänglich ist.

### 6.1. Gedankenteleskop und Persönlicher Kanon

Die Idee des Gedankenteleskops (*Telescopium Mentis*) ist aus dem Overton-Fenster erwachsen, also dem Begriff für den Bereich von Ideen, die in einer Gesellschaft zu einer bestimmten Zeit als akzeptabel gelten. Bei einer einzelnen Person geht es um den Bereich von Gedanken, die sie zu einer bestimmten Zeit für sich selbst als zulässig ansieht. Das Teleskop soll ein solches Fenster für eine einzige Person sein und nur für sie: Es lässt die Aufzeichnung der eigenen Überlegungen und Werte aus verschiedenen Momenten sehen und wie sie sich mit der Zeit verändert haben.

Das Gedankenteleskop soll dazu dienen, zum eigenen Denken zurückzukehren: was ich damals wusste, was ich wollte und warum ich meine Meinung geändert habe. Es kann auch helfen, von den Nutzenden ausgewählte Ereignisse, Informationen über die Welt und eigene Handlungen ihrem Persönlichen Kanon gegenüberzustellen, also der von ihnen niedergeschriebenen Sammlung von Grundsätzen und Werten, die sie als ihre eigenen anerkennen. Der Vergleich betrifft eine Situation, die die Nutzenden selbst beschreiben oder benennen; sie bestimmen Material und Umfang. Das Modell zeigt mögliche Zusammenhänge zusammen mit der Quelle des herangezogenen Grundsatzes und einer Beschreibung des Ereignisses und unterscheidet dabei bestätigte Informationen von Deutung und Ungewissheit. Die vorgeschlagene Deutung lässt sich korrigieren oder verwerfen, und frühere Standpunkte bewerten wir unter Berücksichtigung ihrer Zeit und ihres Kontexts.

Eine bemerkte Spannung kann den Grundsatz selbst betreffen, einen Wertekonflikt, die Bedingungen des Umfelds, Grenzen des Menschen oder eine unzutreffende Deutung durch das Modell. Der Mensch kann am Ideal festhalten und die gegenwärtige Inkonsequenz annehmen, eine Überzeugung präzisieren, eine Änderung des Handelns oder des Umfelds erwägen oder die Frage offenlassen. Der Kanon soll helfen, die eigenen Entscheidungen zu verstehen: Wir schaffen keine Moralpunktzahl und keine öffentliche Rangliste der Konsequenz. Privates Nachdenken bleibt privat, und seine Aufzeichnung bedeutet weder eine Veröffentlichung noch eine Stimmabgabe.

Wir beginnen vorsichtig. In der ersten Version arbeitet das Gedankenteleskop nur mit einer einzigen Situation, die die Nutzenden selbst benennen, zum Beispiel mit einer Entscheidung, zu der sie zurückkehren möchten; es verfolgt ihr Leben nicht fortlaufend. Die Nutzenden entscheiden, wie oft sie es verwenden, welche Notizen und Erinnerungen sie freigeben und wann sie sie löschen. In diesem Versuch prüfen wir, ob die gezeigten Zusammenhänge verständlich sind, ob sie das Gefühl geben, über die eigenen Entscheidungen zu bestimmen, und ob das Werkzeug Druck erzeugt, ständig vor sich selbst Rechenschaft abzulegen. Als gutes Ergebnis werten wir auch, wenn jemand nach reiflicher Überlegung annimmt, nicht immer nach den eigenen Grundsätzen zu handeln, oder die Sache offenlässt: Das Werkzeug soll helfen, sich selbst zu verstehen, und keine Entscheidungen erzwingen.

### 6.2. Offene Formate, Übertragbarkeit und Zusammenspiel von Werkzeugen

Suveria wollen wir als digitales öffentliches Gut entwickeln, mit offenem Code und offener Dokumentation; Bezugspunkt ist der Standard der Digital Public Goods Alliance.[^dpga] Das Format für die Datenübertragung hat eine öffentliche Beschreibung, eine Version und Regeln dafür, wie Informationen beim Versionswechsel erhalten bleiben. In erster Linie nutzen wir bestehende offene Standards, und nötige Erweiterungen dokumentieren wir.

Der Export umfasst ausgewählte Originale, den Verlauf, Quellen und Verknüpfungen sowie die Unterscheidung zwischen den Worten der Nutzenden, der Bearbeitung durch das Modell und der von der verfassenden Person bestätigten Bedeutung, außerdem die Struktur des Persönlichen Kanons. Ein heruntergeladenes Paket lässt sich ohne aktives Konto in Suveria lesen, nach der Entschlüsselung durch eine berechtigte Person.

APIs, also dokumentierte Wege, auf denen Programme miteinander kommunizieren, sollen die Arbeit mit den Materialien in anderen Werkzeugen ermöglichen, auch in selbst gebauten. Die Nutzenden wählen den Umfang der Daten und die erlaubten Handlungen und können die Berechtigungen einer Integration widerrufen. Der Widerruf einer Berechtigung stoppt den weiteren Zugriff; was mit früher übergebenen Kopien geschieht, hängt auch von der empfangenden Seite ab.

Der private Raum kann auch der Arbeit an gemeinsamen Projekten dienen. Die Nutzenden wählen die Materialien, die sie zur Abnahme oder Veröffentlichung übergeben möchten, und das Werkzeug hilft, daraus lokal Zugangsschlüssel, Passwörter, personenbezogene Daten und Informationen über nicht geschlossene Sicherheitslücken zu entfernen. Die Nutzung privat bezahlter Ressourcen erfordert nicht, Arbeitsgespräche offenzulegen. Bei einer aus gemeinsamen Mitteln der Stiftung finanzierten Aufgabe legen die [Werkstattregeln der Stiftung](whitepaper-zasady-fundacji.md) (Kapitel 11.1) den Umfang der öffentlichen Aufzeichnung, die Wahl eines Pseudonyms und die Vorbereitung der Materialien im Voraus fest. Aus den Überlegungen in Suveria kann man auch bewusst eine einzelne Frage oder ein Argument herauslösen und im Omniforum veröffentlichen; dieser Schritt, im Manifest als Ignis-Zeremonie (*Caerimonia Ignis*) beschrieben, erfordert immer eine gesonderte Entscheidung.

## 7. Größenordnung: von 30 Personen bis zur ganzen Menschheit

Die Zahl der Konten allein bestimmt nicht die benötigte Infrastruktur. Es kommt auf die Aktivität an, auf die Länge von Fragen und Antworten, die Zahl gleichzeitiger Sitzungen, eine akzeptable Wartezeit und die Kosten der Werkzeuge. Das folgende Beispiel ist ein Lastmodell für einen Versuch, keine Nachfrageprognose und kein Angebot.

Annahmen: Jede der N Personen ist täglich aktiv und stellt 20 Anfragen am Tag, eine durchschnittliche Anfrage umfasst 1.500 Eingabe-Token und 600 Ausgabe-Token, und ein Monat hat 30 Tage. Ein Token ist eine vom Modell verarbeitete Texteinheit; seine Länge hängt von der Sprache ab. Bei der tatsächlichen Last muss man längeren Kontext, die Verarbeitung von Dokumenten, Reasoning-Token und Hilfsaufrufe hinzurechnen.

| Aktive Personen | Anfragen pro Monat | Eingabe pro Monat | Ausgabe pro Monat | Durchschnittliche Generierung über den Tag | Stündliche Spitze im weltweiten Szenario, ca. 1,51 × Durchschnitt |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18.000 | 27 Mio. Token | 10,8 Mio. Token | 4,2 Token/s | 6,3 Token/s |
| 100 | 60.000 | 90 Mio. | 36 Mio. | 13,9 Token/s | 20,9 Token/s |
| 1.000 | 600.000 | 900 Mio. | 360 Mio. | 138,9 Token/s | 209 Token/s |
| 100.000 | 60 Mio. | 90 Mrd. | 36 Mrd. | 13.889 Token/s | 20.921 Token/s |
| 1 Mio. | 600 Mio. | 900 Mrd. | 360 Mrd. | 138.889 Token/s | 209.208 Token/s |
| 1 Mrd. | 600 Mrd. | 900 Bio. | 360 Bio. | 138,9 Mio. Token/s | 209,2 Mio. Token/s |
| 10 Mrd. | 6 Bio. | 9 Billiarden | 3,6 Billiarden | 1,39 Mrd. Token/s | 2,09 Mrd. Token/s |

Wir planen Suveria als weltweiten Dienst, verfügbar in vielen Sprachen. Wie sich die Teilnehmenden auf die Zeitzonen verteilen werden, wissen wir nicht, daher vergleichen wir zwei Szenarien, die eine Messung überprüfen wird. Im weltweiten Szenario nehmen wir Anteile der Regionen an, die proportional zur Zahl der Internetnutzenden laut ITU für 2025 sind, und in jeder Zone dieselbe angenommene Form des Tagesverlaufs: eine Spitze am Abend und eine ruhige Nacht.[^itu] Die Zonen füllen einander die Täler teilweise auf, sodass die stündliche Spitze bei ca. 1,51 × Durchschnitt liegt und der geringste Verkehr bei ca. 0,49 ×. Im Szenario, das sich auf eine Region konzentriert, zum Beispiel auf Europa, liegt die Spitze bei ca. 1,87 × Durchschnitt und die Nacht bei fast nichts. Eine solche Verteilung kann auch bei großer Größenordnung vorkommen; sie bedeutet eine schlechtere Auslastung der eigenen Maschine und häufigeren Rückgriff auf die vertrauliche API oder längere Wartezeiten in der Spitze. Beide Werte folgen aus unseren Annahmen und nicht aus der Beobachtung künftiger Teilnehmender. Kurze Spitzen innerhalb einer Stunde soll eine kurze Warteschlange mit sichtbarer Wartezeit ausgleichen, und Verkehr über der Kapazität der eigenen Maschine kann die vertrauliche API übernehmen; die Wartezeit, auch ihr 95. und 99. Perzentil, messen wir im Pilotbetrieb, zusammen mit der Grenze der Warteschlange und dem Verhalten, wenn sie ausgeschöpft ist. Der Lastversuch umfasst auch einen plötzlichen Zustrom neuer Personen, zum Beispiel das Fünffache des durchschnittlichen Verkehrs. Das ist der gesamte Ausgabedurchsatz; er ersetzt weder die Messung der Latenz eines einzelnen Gesprächs noch die der Kosten für die Verarbeitung der Eingabe. Der Test sollte die Verteilung der Sitzungen, lange Kontexte, Ausfälle und die Warteschlange nachbilden und nicht eine einzige bequeme Anfrage.

Der Spitzenfaktor vergleicht die am stärksten belastete Stunde mit dem Durchschnitt. Er stammt aus einem Modell des in 24 Stunden geteilten Tages: Eine einzige Tagesform verschieben wir über acht Regionen und summieren nach den angenommenen Anteilen. Das ist ein Rechenszenario; es berechnet nicht die Wartezeit einer einzelnen Anfrage.

Um zu sehen, wie diese Rechnung im Weltmaßstab aussieht, machen wir ein Gedankenexperiment. Würde jede der 10 Mrd. Personen Suveria so nutzen wie im angenommenen Profil, bräuchte es in der Spitze ca. 2,1 Mrd. Ausgabe-Token pro Sekunde. Bei der für DeepSeek-V4.1-Flash gemessenen Leistung von ca. 930 Token pro Sekunde pro B200-Grafikkarte wären das ca. 2,25 Mio. Grafikkarten und, bei ca. 1,75 kW pro Grafikkarte einschließlich Server (unsere Annahme, ohne Messung), ca. 4 GW Leistung. Für eine Milliarde Personen sind das ca. 225.000 Grafikkarten und 0,4 GW, für eine Million ca. 225 Grafikkarten. Zum Vergleich schätzte Epoch AI Anfang 2026, dass die weltweit installierte Rechenleistung für digitale Intelligenz 15 Mio. H100-Äquivalente übersteigt und mehr als 10 GW Leistung erfordert.[^epoch] Das ist eine Vereinfachung: Das angenommene Profil ist leicht, intensive Arbeit, größere Modelle und Bilder brauchen ein Vielfaches mehr, und Hardware und Modelle ändern sich schnell. Sie zeigt aber die Größenordnung: Tägliche Hilfe durch digitale Intelligenz in diesem Umfang für jeden Menschen würde weniger Leistung erfordern als die, die heute schon in der Welt läuft. Das ist eine vereinfachte Rechnung und kein Beweis, dass eine solche Infrastruktur für diesen Zweck verfügbar wäre.

## 8. Kosten und eine datierte Rechnung

Die monatlichen Kosten einer festen Reservierung lassen sich in erster Näherung so ausdrücken: Zahl der Grafikkarten × Preis pro GPU-Stunde × Zahl der bezahlten Stunden, zuzüglich Speicher, Festplatten, Datenübertragung, Schutz, Monitoring, Betreuung, Zahlungen und Steuern. Es ist zu prüfen, welche dieser Posten ein Angebot bereits enthält. Bei Betrieb rund um die Uhr hat ein Monat 672 bis 744 Stunden; 730 Stunden sind eine durchschnittliche Näherung.

In der Rechnung vergleichen wir fünf Kostenvarianten: das lokale Modell, eine eigene Instanz auf gemieteter Hardware, eine eigene Instanz in einer Umgebung für Confidential Computing, mit vom Anbieter deklariertem und zu überprüfendem Schutz, die vertrauliche API eines externen Anbieters sowie eine gewöhnliche externe API. Die Kostenvarianten entsprechen den Schutzvarianten aus Abschnitt 2.3; die Miete einer Maschine ohne Vertraulichkeit zeigen wir nur als preislichen Bezugspunkt und nicht als Variante von Suveria. Das lokale Modell bepreisen wir noch nicht, weil die Kosten vom Gerät der Nutzenden abhängen. Wir stellen denselben Umfang an Qualität, Verfügbarkeit und Schutz gegenüber. Die Rentabilitätsschwelle sind die Kosten des vollständigen Dienstes geteilt durch die tatsächliche Auslastung und nicht die Kosten der Grafikkarten geteilt durch die Zahl der registrierten Konten. Eine externe API erleichtert es, den Bedarf der Nutzenden zu testen, doch ihr Anbieter hat eigene Regeln für den Zugriff auf Daten, daher übertragen wir die Versprechen eines vertraulichen Betriebs nicht auf sie.

### 8.1. Datierte Rechnung: Stand vom 29. Oktober 2026

Das Manifest stellt die Hypothese auf, dass gemeinsame Infrastruktur schon bei einer verhältnismäßig kleinen Zahl regelmäßiger Teilnehmender pro Dollar mehr Rechenleistung und digitale Intelligenz bieten kann als geschlossene Dienste, bei einem Schutz der Privatsphäre, der auf überprüfbaren Schutzmechanismen beruht. Im Folgenden ihre Rechnung zu Preisen vom 29. Oktober 2026. Annahmen: das Nutzungsprofil aus Kapitel 7 (20 Anfragen am Tag zu je 600 Ausgabe-Token) und das weltweite Szenario (stündliche Spitze ca. 1,51 × Durchschnitt), Preise ohne Steuern, 730 Stunden im Monat für die Umrechnung der Mietpreise. Die Zahl der Personen pro Maschine bedeutet so viele Teilnehmende, wie die Maschine in der stündlichen Spitze bedienen kann: Ausgabedurchsatz pro Sekunde × 86.400 / (20 × 600 × Spitzenfaktor). Die zulässige Zahl der Personen wird auch die gemessene Wartezeit auf eine Antwort bestimmen. In Klammern geben wir das auf Europa konzentrierte Szenario an (Faktor ca. 1,87). Für DeepSeek-V4.1-Flash übernehmen wir die Messung des Anbieters Lambda auf vier B200-Grafikkarten: ca. 3.714 Ausgabe-Token pro Sekunde bei 64 gleichzeitigen Anfragen.[^lambda-v41] Die Messung erfolgte mit spekulativer Dekodierung, die wir im vertraulichen Modus nicht verwenden wollen (Kapitel 3). Nach unserer Schätzung vom September kann der Durchsatz dann um bis zu ca. 30 % niedriger sein, was die Kosten pro Person in ähnlichem Verhältnis erhöht. Für H200- und B300-Grafikkarten gibt es keine Messung dieses Modells; wir nehmen an, dass jeder Satz Grafikkarten mit einer Kopie des Modells (8 × H200 oder die Hälfte einer Maschine 8 × B300) die Leistung von vier B200-Grafikkarten erreicht. Diese Annahme ist optimistisch: Die H200 ist eine ältere Generation, der vertrauliche Modus kann die Arbeit verlangsamen, und die Messung von Lambda betrifft längere Anfragen als unser Profil. Deshalb geben wir auch eine vorsichtige Variante mit der Hälfte dieses Durchsatzes an.

Die Gewichte des Modells belegen ca. 511 GB, und die Engine vLLM empfiehlt ca. 614 GB Grafikkartenspeicher. Vier H200-Grafikkarten (564 GB) sind zu wenig, deshalb braucht eine Kopie auf H200 acht Grafikkarten. Das Rezept des Engine-Herstellers für diese Konfiguration befand sich am 29.10. in Verifizierung, und bei H200-Grafikkarten ist die Verbindung zwischen den Grafikkarten (NVLink) nicht hardwareseitig verschlüsselt, anders als bei B200 und B300.

| Variante | Vertraulichkeit | Monatliche Kosten | Personen pro Maschine | Kosten nur der Berechnungen pro Person |
| --- | --- | ---: | ---: | ---: |
| DeepSeek-API | keine, der Anbieter sieht den Inhalt | nach Nutzung | entfällt bei einer einzelnen Maschine; Limits und Verfügbarkeit des Anbieters | 0,35–0,70 USD |
| Vertrauliche API mit DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | vom Anbieter deklariert, zu überprüfen | nach Nutzung | entfällt bei einer einzelnen Maschine; Limits und Verfügbarkeit des Anbieters | 0,70–1,25 USD |
| API von Kimi K3.1 Pro (Moonshot) | keine | nach Nutzung | entfällt bei einer einzelnen Maschine; Limits und Verfügbarkeit des Anbieters | 5,40 USD |
| Vertrauliche API mit Kimi K3 (Phala, NEAR AI) | vom Anbieter deklariert, zu überprüfen | nach Nutzung | entfällt bei einer einzelnen Maschine; Limits und Verfügbarkeit des Anbieters | 8,10–8,91 USD |
| Gemietete vertrauliche Maschine 8 × H200 (Phala), DeepSeek, eine Kopie des Modells | Attestierung von Prozessor und Grafikkarten, zu überprüfen | 23.506 USD bei 180-tägiger Bindung, 32.266 USD auf Abruf | ca. 17.750 (14.300), Kapazitätsannahme | 1,32–1,82 USD (1,64–2,25) |
| Wie oben, vorsichtige Variante: halber Durchsatz | Attestierung von Prozessor und Grafikkarten, zu überprüfen | wie oben | ca. 8.900 (7.150), Kapazitätsannahme | 2,65–3,64 USD (3,29–4,51) |
| Gemietete vertrauliche Maschine 8 × B300 (Phala), Kimi K3 | Attestierung von Prozessor und Grafikkarten, zu überprüfen | 45.552–47.888 USD | ca. 4.800–7.600 (3.900–6.200), Kapazitätsannahme | ca. 6–10 USD (7,4–12,4) |
| 4 × B200 ohne bestätigte Vertraulichkeit (Lambda), DeepSeek | keine bestätigte | 19.827 USD | ca. 17.750 (14.300) | 1,12 USD (1,38) |
| 8 × B200 ohne bestätigte Vertraulichkeit (Lambda), DeepSeek, zwei Kopien zu je vier Grafikkarten | keine bestätigte | 39.070 USD | ca. 35.500 (28.700), Annahme zur Leistung zweier Kopien | 1,10 USD (1,36) |

Woher diese Zahlen stammen: API-Preise aus den Preislisten von DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala und NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] Preise vertraulicher Maschinen aus der Preisliste von Phala;[^phala-gpu] Miete von B200 bei Lambda zu 6,79 USD pro GPU-Stunde in einer Instanz mit vier Grafikkarten und 6,69 USD in einer Instanz mit acht.[^lambda-cennik] Die Kapazität von Kimi übernehmen wir aus Messungen Dritter für Kimi K3 auf acht B300-Grafikkarten, die ca. 1.000–1.600 Ausgabe-Token pro Sekunde ergeben.[^spheron-kimi] Die monatlichen Beträge bei Bindung bedeuten keine monatlichen Zahlungen: Phala verlangt die Bezahlung des gesamten Zeitraums im Voraus, ohne Erstattung bei vorzeitiger Beendigung, sodass 180 Tage einer Maschine 8 × H200 bei der Bestellung 139.104 USD an Barmitteln bedeuten und 180 Tage einer Maschine 8 × B300 269.568 USD.[^phala-gpu]

Was daraus folgt:

- Für das angenommene Profil liegen die Preise von APIs mit deklarierter Vertraulichkeit bei ca. 0,70–1,25 USD pro Person und Monat, von Kosten, die mit einer gewöhnlichen API vergleichbar sind, bis zum ca. 3,6-Fachen ihrer Kosten, je nach Anbieter und Nutzungszeit; den niedrigsten Preis deklariert Confidential AI, und auch dieses Angebot müssen wir überprüfen. Eine vertrauliche API bietet flexible Rechenleistung, ohne eine eigene Maschine zu betreiben, auch wenn sie eigene Limits, Warteschlangen und Ausfälle hat. Eine gemietete vertrauliche Maschine für DeepSeek, die auf die Spitze ausgelegt ist, arbeitet im weltweiten Szenario durchschnittlich bei ca. zwei Dritteln ihrer Kapazität und kostet pro Person ca. 1,32 USD, also ungefähr so viel wie die teureren vertraulichen APIs und mehr als die günstigste. In unserem Stundenmodell tritt der erste eigene Knoten, dessen Überschuss an eine vertrauliche API zu 1,25 USD pro Person geleitet wird, am geprüften Punkt von ca. 20.000 aktiven Personen auf; das ist ein Ergebnis der getroffenen Annahmen und keine genaue Schwelle, und bei einer günstigeren vertraulichen API lohnt sich eine gemietete Maschine in dieser Größenordnung nicht.
- Die stundenweise Miete einer vollständigen vertraulichen Maschine bietet heute keine Flexibilität für die Abendspitze: Phala verlangt mindestens einen Tag (8 × H200) oder einen Monat (8 × B300), Confidential AI drei Monate für 8 × B300 zu 60 USD pro Stunde, und VoltageGPU, das 8 × H200 sekundengenau zu 64,62 USD pro Stunde abrechnet, deckt diese Konfiguration und die NVSwitch-Switches nicht mit veröffentlichten Attestierungsnachweisen ab.[^cai][^voltage] Hinzu kommt die Zeit für die Zuteilung der Maschine und das Laden der Gewichte.
- Bei Kimi hängt die Rechnung von der Messung ab: Eine vertrauliche API kostet ca. 8–9 USD pro Person, eine eigene Maschine 8 × B300 bei voller Auslastung ca. 6 USD bei der höheren Kapazitätsschätzung und ca. 9,5 USD bei der niedrigeren. Günstiger als die vertrauliche API ist sie, wenn eine Maschine mehr als ca. 5.100–5.600 aktive Personen bedient, die dieses Modell nutzen; bei der niedrigeren Kapazitätsschätzung (ca. 4.800 Personen) gelingt das nicht.

Kauf eines eigenen Servers: Ein kompletter Supermicro-Server mit acht B300-Grafikkarten kostete im September 2026 ca. 663 Tsd. USD.[^supermicro] Die monatlichen Kosten eines solchen Kaufs schätzen wir so:

| Posten | Monatlicher Betrag |
| --- | ---: |
| Abschreibung des Servers über fünf Jahre | ca. 11 Tsd. USD |
| Abschreibung des Servers über vier Jahre | ca. 13,8 Tsd. USD |
| Colocation | ca. 1,9–3 Tsd. USD |
| Netzwerk, Teile und Service (Schätzung) | ca. 1,5 Tsd. USD |
| Summe | ca. 14–18 Tsd. USD |

Auf einem solchen Server haben zwei Kopien von DeepSeek Platz, die im weltweiten Szenario ca. 35.000 Personen bedienen (im europäischen ca. 28.000), zu ca. 0,41–0,52 USD pro Person. Unter diesen Annahmen ist der Kauf ab ca. 12.000–17.000 aktiven Personen günstiger als eine vertrauliche API zu 1,11–1,25 USD und ab ca. 21.000–26.000 günstiger als die günstigste deklarierte (0,70 USD). Die Rechnung umfasst nicht die vollständigen Kosten für Unterhalt und Messung dieser Konfiguration; der Kauf erfordert außerdem Barmittel im Voraus, eine Bereitschaft von Menschen rund um die Uhr und eine stabile Nachfrage über Jahre, und physischen Zugang zur Hardware hat dann die Stiftung (Kapitel 2). Das sind unsere Schätzungen, keine Angebote.

- Vertrauliche Maschinen mit mehreren Grafikkarten sind heute öffentlich in den USA verfügbar. In der Europäischen Union haben wir vertrauliche Maschinen mit einer einzigen H100-Grafikkarte gefunden,[^azure-ncc] in die weder das vollständige DeepSeek noch Kimi passen. Eine vertrauliche API mit Servern in der Europäischen Union bietet auch Privatemode (Edgeless Systems, Deutschland) an, mit kleinerer Modellauswahl.[^privatemode] Auch das ist eine Deklaration des Anbieters, zu überprüfen.
- Ein unabhängiges Verzeichnis, das vertrauliche APIs prüft, hat in der Beobachtung vom 29. Oktober 2026, 14:00 Uhr UTC, für keine der 95 geprüften Routen eine vollständige Verifizierung bestätigt; am häufigsten fehlten der Nachweis der Identität des laufenden Programms, der Herkunft des Codes und der Zuordnung der Anfrage zu einer Maschine.[^katalog] Das ist ein Ergebnis der verfügbaren Nachweise und kein Beweis, dass die Dienste Inhalte offenlegen. Bis zu einer eigenen Verifizierung behandeln wir die Vertraulichkeit dieser Dienste als Deklaration des Anbieters.
- Die Rechnung umfasst die Berechnungen. Die private Umgebung (Gateway, Gedächtnis, Dateien) in einer oder zwei vertraulichen Maschinen mit vier virtuellen Prozessoren und 8 GB Arbeitsspeicher kostet bei Phala ca. 168 USD im Monat pro Maschine, und der Datenträger wird gesondert abgerechnet, ca. 10 USD für 100 GB.[^phala-cvm] Ob diese Größe ausreicht, prüfen wir im Pilotbetrieb. Bei 170–340 USD im Monat sind das bei 30 Personen ca. 6–11 USD pro Person, bei 1.000 Personen einige Dutzend Cent. Die Rechnung enthält weder die Arbeit von Menschen noch Sicherheitsüberprüfungen, Zahlungen oder eine Reserve für Ausfälle.
- Verbreitete Abonnements kosten ca. 20 USD im Monat, und der Chat von DeepSeek ist kostenlos.[^abonamenty] Tarife für 100–200 USD liefern bei intensiver agentischer Arbeit den Gegenwert von Tausenden Dollar zu API-Listenpreisen;[^semianalysis] mit solchen Tarifen konkurrieren wir nicht über den Preis. Wir schlagen eine Abrechnung der tatsächlichen Nutzung mit überprüfbarer Privatsphäre vor.

Stand der Hypothese aus dem Manifest am 29. Oktober 2026: Die Rechnung bringt uns ihr näher, bestätigt sie aber nicht. Verarbeitung mit deklarierter Vertraulichkeit und Attestierung ist bereits in öffentlichen Preislisten verfügbar und kostet beim angenommenen Nutzungsprofil ca. 0,70–1,25 USD pro Person und Monat, sodass eine kleine Gruppe zum Selbstkostenpreis damit beginnen kann, und unter unseren Annahmen kann eigene Infrastruktur bei mehr als zehntausend bis zu mehreren Zehntausend aktiven Personen günstiger werden. Entscheiden werden drei Dinge, die wir in den Versuchen aus Kapitel 9 überprüfen: ob die Vertraulichkeit dieser Dienste einer unabhängigen Verifizierung standhält, ob die Qualität der verfügbaren Modelle für die Aufgaben ausreicht, für die Menschen zu Suveria kommen werden, und wie das tatsächliche Verkehrsprofil aussieht. Die Rechnung aktualisieren wir bei jeder wesentlichen Preisänderung und nach jedem Versuch, und frühere Fassungen bewahren wir auf.

### 8.2. Infrastrukturschritte und Entscheidungsvorlagen

Die Infrastruktur entwickeln wir in Schritten, von denen jeder den Teilnehmenden einen eigenständigen Wert bietet, ohne Verpflichtung, zum nächsten überzugehen: zuerst eine vertrauliche API und eine private Umgebung in vertraulichen Maschinen (wenn wir vor dem Start genug Mittel sammeln, können wir direkt mit dem nächsten Schritt beginnen), dann die Miete eigener vertraulicher Maschinen, danach der Kauf von Hardware und ihre Unterbringung in einem externen Rechenzentrum und in ferner Zukunft, falls es sich als vorteilhaft erweist, ein eigenes Gebäude. Den jeweils nächsten Schritt begründen gemessene Daten: die vollständigen Kosten des Dienstes, der tatsächliche Verkehr, die Antwortzeit in der Spitze, die Fähigkeit, Schutzmechanismen und die Behebung von Ausfällen aufrechtzuerhalten, und beim Kauf auch die Finanzierung von Reparaturen, des Austauschs von Hardware und der Menschen, die Verantwortung übernehmen. Die Miete einer eigenen Maschine kann auch dann sinnvoll sein, wenn das benötigte Modell in keiner vertraulichen API verfügbar ist oder wir die volle Kontrolle darüber haben wollen, was läuft.

Jeden Übergang beschreiben wir mit einer Entscheidungsvorlage: was wir gewinnen, die vollständigen Kosten, die Risiken, die Bedingungen für Beginn und Rückzug, die Art der Übertragung von Daten und Schlüsseln sowie die Vereinbarkeit mit den [Regeln für die Reserve und für den Start weiterer Säulen](whitepaper-zasady-fundacji.md) (Kapitel 8 des Whitepapers zu den Grundsätzen der Stiftung). Die Kombination einer eigenen Maschine mit einer vertraulichen API für Verkehrsspitzen lassen wir nur zu, wenn jeder der Wege ein akzeptiertes Schutzniveau hat; der Wechsel zu einer schwächeren Variante erfordert eine gesonderte, bewusste Entscheidung der Nutzenden. Die erste Messung planen wir auf einer einzelnen vertraulichen Grafikkarte mit einem kleineren Modell, die nächste auf einer Maschine, in die das vollständige Modell passt.

Die Rechenleistung passen wir dem Verkehr an, ohne alles auf die höchste Spitze auszulegen. Wir entwerfen eine kurze Warteschlange mit sichtbarer Wartezeit; ihre tatsächliche Dauer, ihre Grenze und das Verhalten, wenn sie ausgeschöpft ist, messen wir im Pilotbetrieb. Flexible Rechenleistung für längere Spitzen bietet in erster Linie eine vertrauliche API, vorausgesetzt, sie wahrt das akzeptierte Schutzniveau, die Zustimmung und das Ausgabenlimit der Nutzenden; gibt es keinen solchen Weg, informieren wir ehrlich über Wartezeit oder Nichtverfügbarkeit. Stundenweise Miete ist sinnvoll für Modelle, die es in keiner vertraulichen API gibt oder die dort deutlich teurer sind, und nur dort, wo der Anbieter tatsächlich erlaubt, vertrauliche Maschinen schnell zu starten und freizugeben. Freie Rechenleistung der eigenen Maschine in ruhigeren Stunden wollen wir für Aufgaben der Stiftung nutzen, etwa Ausarbeitungen für das Omniforum; ihr Wert zu API-Preisen ist kein Mittelzufluss in das Budget, deshalb haben solche Aufgaben ein eigenes Ziel und ein eigenes Budget. Nach dem ersten Pilotbetrieb wollen wir zwei Modi prüfen: „Gespräch“ für die gewöhnliche Arbeit mit dem Assistenten und „Ohne Eile“ für Aufgaben, die warten können, zum Beispiel die Übersetzung eines Dokuments. Im Modus „Ohne Eile“ zeigen wir ein ungefähres Startfenster, eine Kostenschätzung, ein Höchstbudget, die Möglichkeit des Abbruchs mit Abrechnung der geleisteten Arbeit und dieselbe Information über den Schutz. Ein niedrigerer Preis für solche Arbeit ist nur möglich, wenn er sich aus einer öffentlichen Methode der Kostenaufteilung ergibt, ohne die Fixkosten doppelt zu zählen.

### 8.3. Messung der Nutzung ohne Gesprächsinhalte

Um die tatsächliche Nutzung abzurechnen, messen wir die für die Ausführung von Aufgaben benötigten Ressourcen und beschreiben den Anteil an den Fixkosten klar. Der Abrechnungszähler beschränkt sich auf die Daten, die zur Überprüfung der Kosten unerlässlich sind, und der Inhalt des Gesprächs wird für die Ausstellung der Rechnung nicht benötigt. In den Versuchen überprüfen wir die Genauigkeit der Messung, die Art der Kontrolle durch die Nutzenden, den Umfang der offengelegten Metadaten und das Verhalten des Dienstes nach Erreichen des Ausgabenlimits. Die Grundsätze der Abrechnung, der Rundung, der Vorauszahlungen und der Erstattungen beschreibt das [Whitepaper zu den Grundsätzen der Stiftung](whitepaper-zasady-fundacji.md).

Das von den Teilnehmenden festgelegte Ausgabenlimit soll als Grenze wirken und nicht als nachträgliche Warnung. Manche Anbieter rechnen laufende Anfragen erst nach deren Abschluss ab, daher können ihre Limits überschritten werden; so beschreibt es zum Beispiel Tinfoil.[^tinfoil] Deshalb entwerfen wir eine Reservierung: Vor dem Senden einer Anfrage legt das Gateway von Suveria deren höchstzulässige Kosten vom Guthaben zurück, unter Berücksichtigung anderer laufender Anfragen, und begrenzt die Zahl paralleler Anfragen und die Länge der Antwort. Nach dem Abschluss rechnen wir die tatsächlichen Kosten ab und geben die nicht genutzte Reservierung frei. Das ist eine Anforderung, die erst umgesetzt und überprüft werden muss, keine bereits verfügbare Funktion.

## 9. Abnahmetests und Ergebnisprotokoll

Bevor wir irgendein Release vertraulich nennen, dokumentieren wir mindestens:

- eine korrekte Attestierung;
- die Verweigerung des Datenversands nach einem Austausch von Code oder Schlüssel;
- die Isolation von Sitzungen;
- die Beschränkungen der Administration;
- das Fehlen von Inhalten in Logs, Speicherabbildern und Telemetrie;
- den Umgang mit dem Cache;
- Löschen und Wiederherstellung;
- das Verhalten nach einem Ausfall;
- die Grenzen der Werkzeuge;
- die Kosten unter Last.

Das Ergebnis umfasst die Konfigurationsversion und das Szenario, in dem wir versucht haben, den Schutz zu verletzen.

Wir möchten, dass jedes Release von Suveria alle Nachweisstufen mindestens einer unabhängigen Prüfinstanz für vertrauliche Dienste besteht: Hardware und Sicherheitsstatus, Aktualität des Nachweises, Bindung des Verbindungsschlüssels an die geschützte Umgebung, Identität des laufenden Programms, Herkunft des Codes und Zuordnung der Anfrage zu einer konkreten Maschine, bei gewahrter Verfügbarkeit. Das Ergebnis veröffentlichen wir mit dem Datum der Beobachtung, der Version der Kriterien und den Nachweisen für das konkrete Release, das Modell und die Route der Anfrage, und die Verbindungen der Prüfinstanz beschreiben wir zusammen mit dem Ergebnis. Wir versprechen keinen Platz in irgendeiner Rangliste. Das Bestehen der Verifizierung bedeutet, dass die beschriebene Kontrolle zu einem bestimmten Zeitpunkt erreicht wurde, mit öffentlich bekannten Einschränkungen, und ersetzt weder ein Audit noch unsere eigenen Versuche.

Wenn wir eine eigene vertrauliche Variante in Betrieb nehmen, melden wir Suveria bei jedem unabhängigen Verzeichnis an, das die Vertraulichkeit des Modellbetriebs prüft, und stellen ihm einen Endpunkt zur Prüfung der Attestierung bereit; erstes Beispiel ist confidentialinference.net (Stand vom 31. Oktober 2026).[^confidentialinference] Einen Eintrag versprechen wir nicht, denn darüber entscheidet das Verzeichnis; wir versprechen die Anmeldung, die Beantwortung seiner Fragen und die Veröffentlichung des Ergebnisses, auch eines schlechten, mit Datum. Das Verzeichnis prüft nur, was es von außen sieht, meist die Attestierung und den Verbindungskanal; es ersetzt weder ein Audit von Code und Konfiguration noch die Bewertung von Seitenkanälen.

Die Versuche zu Speicherung und Übertragung umfassen:

- die Wiederherstellung einer verschlüsselten Kopie auf einem anderen berechtigten Gerät sowie die Verweigerung des Lesens ohne den richtigen Schlüssel;
- den Verlust eines Geräts, die Wiederherstellung des Zugangs mit der gewählten Methode und eine verständliche Darstellung der Folgen, wenn alle Schlüssel verloren gehen;
- die Synchronisierung paralleler Änderungen, ohne eine der Versionen stillschweigend zu überschreiben;
- das Lesen eines Exports in einem unabhängigen Werkzeug ohne Konto beim ursprünglichen Betreiber, mit einem Vergleich von Originalen, Verlauf, Quellen und Verknüpfungen;
- die Begrenzung des Umfangs einer Integration und das wirksame Stoppen ihres weiteren Zugriffs nach dem Widerruf der Berechtigung.

Etappen:

1. ein Usability-Test mit Materialien, die nicht sensibel sind;
2. ein technischer Versuch zum Schutz;
3. ein begrenzter Pilotbetrieb mit klaren Bedingungen;
4. eine schrittweise Vergrößerung.

Vor dem Pilotbetrieb legen wir Schwellenwerte fest und veröffentlichen sie: die Zeit bis zum ersten Wort der Antwort, die Rechenkosten pro Person beim gemessenen Profil und die Qualität des Modells gemäß dem [Whitepaper zu Materialien und Benchmark](whitepaper-materialy-i-benchmark.md). Den Pilotbetrieb betrachten wir als erfolgreich, wenn er alle drei erfüllt.

Ein Wechsel des Modells, der Firmware oder der Art der Anmeldung am Benutzerkonto kann eine erneute Qualifizierung erfordern, und ein Update darf den vereinbarten Schutz nicht stillschweigend schwächen. Jedes Release hat einen öffentlichen Steckbrief:

- Funktionsumfang;
- Nachweise aus den Versuchen;
- bekannte Einschränkungen;
- verantwortliche Personen;
- Kosten;
- Weg zur Meldung eines Problems;
- Plan für den Rückzug.

Die Entdeckung einer Lücke führt zur Begrenzung der Gefährdung, zur Information der betroffenen Personen und zu einer überprüfbaren Korrektur.

Die Versuche wollen wir offen durchführen. Wir laden Menschen ein, die sich mit Sicherheit, Kryptografie, Infrastruktur und Anwendungen befassen, auch Menschen, die Technik einem breiten Publikum vorstellen, die Prüfungen gemeinsam zu entwerfen und auf eigens dafür eingerichteten Testkonten mit erfundenen Daten zu versuchen, den Schutz zu durchbrechen. Wir laden auch kritische Stimmen ein. Für Werbung oder sonstige werbliche Maßnahmen zahlen wir nicht, und jede Zusammenarbeit kennzeichnen wir gemäß dem [Register der Vorteile](whitepaper-zasady-fundacji.md) (Kapitel 7 des Whitepapers zu den Grundsätzen der Stiftung). Die Ergebnisse, auch die misslungenen, gelangen in das Ergebnisprotokoll. Wenn du dich beteiligen möchtest, schreib an [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) mit dem Betreff „[Dołącz] Próby Suverii“.

Der wichtigste Versuch: Ein Team mit Betreiberrechten außerhalb der vertraulichen Umgebung (Gateway, Festplatten, Netzwerk, Logs) versucht, die Gespräche von Testkonten zu lesen, in denen geheime Zeichenfolgen versteckt wurden. Wenn irgendjemand sie herausholt, auch wir, ist der Versuch gescheitert.

Das erste Release von Suveria stellen wir einigen Personen zur Verfügung, die bei seiner Konfiguration helfen. Wenn es eine vertrauliche API nutzt, sagt seine Schutzübersicht (Abschnitt 2.3) ausdrücklich, dass das Modell bei einem externen Anbieter läuft, dass die Attestierung vom Anbieter deklariert ist und wir sie noch nicht überprüft haben und dass die Metadaten nicht geschützt sind. Da die ersten Personen auch beim Betrieb des Dienstes helfen, wird das erste Ergebnis, das wir veröffentlichen, der oben beschriebene wichtigste Versuch sein, mit einer Beschreibung dessen, was dem Betreiber gelungen ist.

**Ergebnisprotokoll.** Stand vom 29. Oktober 2026: Wir haben noch keinen der beschriebenen Versuche durchgeführt, keine Grafikkarten gemietet und kein Modell in Suveria in Betrieb genommen. Jedes weitere Ergebnis tragen wir hier mit Datum, Konfiguration, Szenario und Schlussfolgerung ein, auch wenn ein Versuch misslingt.

Noch zu klären sind:

- das erste Modell und ein akzeptables Qualitätsniveau;
- die unabhängige Verifizierung vertraulicher APIs und vertraulicher Maschinen sowie ihre Verfügbarkeit in Rechtsordnungen mit starkem Schutz personenbezogener Daten, etwa in der Europäischen Union mit der DSGVO;
- die Antwortzeit;
- die Regeln für Schlüssel und Gedächtnis;
- der minimale Umfang der Abrechnungsdaten;
- die rechtlichen Pflichten des Betreibers bei Meldungen von Missbrauch;
- die Art der Finanzierung der Kontinuität.

Das [Whitepaper zu den Grundsätzen der Stiftung](whitepaper-zasady-fundacji.md) beschreibt Budget, Abrechnung und Verantwortung, das [Whitepaper zu Materialien und Benchmark](whitepaper-materialy-i-benchmark.md) die Bewertung des Verhaltens von Modellen.

Stiftung Novus Ignis, Poznań, KRS 0001269575. Website und Manifest: novusignis.org. Anmerkungen: salve@novusignis.org.

## Anmerkungen

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Studie von Georgia Tech, Purdue University und Synkhronix, veröffentlicht am 28.10.2025: Auslesen der Attestierungsschlüssel von Intel TDX und SGX sowie AMD SEV-SNP durch physischen Anschluss an den DDR5-Speicherbus, mit Folgen für das Confidential Computing von NVIDIA. Erfordert physischen Zugang zum Server; Intel und AMD betrachten solche Angriffe als außerhalb des Schutzumfangs liegend. Besprechung: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Abgerufen am 28.10.2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg und McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Abhandlung. Grundsätze für die Aufbewahrung der Hauptkopie auf den Geräten der Nutzenden und für die unterstützende Rolle von Servern, einschließlich verschlüsselter Kopien.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Architekturbeschreibung. Beispiel für die Verbindung von Vertraulichkeit mit Kontrolle der Software und Transparenz des Systems.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Spezifikation. Trennung des Wissens über Absender und Anfrage unter einem bestimmten Vertrauensmodell; keine vollständige Anonymität.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit und Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Wissenschaftliche Veröffentlichung (USENIX Security 2024; Vorabfassung arXiv 2403.09751). Aus der Länge verschlüsselter Pakete im Antwortstrom rekonstruieren Personen, die das Netzwerk beobachten, das Thema und teilweise den Inhalt der Antworten des Assistenten. Abgerufen am 30.10.2026.

[^whisper-leak]: [McDonald und Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) sowie [Besprechung von Microsoft (07.11.2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Forschungsveröffentlichung und Beschreibung des Herstellers. Aus Größe und Rhythmus der Pakete im verschlüsselten Antwortstrom lässt sich das Thema des Gesprächs erkennen; einige Anbieter haben eine zufällige Auffüllung der Pakete eingeführt. Abgerufen am 30.10.2026.

[^nvidia-platformy]: [NVIDIA: unterstützte Plattformen für vertrauliche Container](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Herstellerdokumentation. Anforderungen an die gesamte Konfiguration aus Prozessor, Grafikkarten und Software.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Herstellerdokumentation. Im Modus PPCIe v2 gehört das NVLink- und NVSwitch-Netz zum vertrauenswürdigen Teil des Systems; der PCIe-Schutz bedeutet nicht die Verschlüsselung des gesamten Verkehrs zwischen den Grafikkarten.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Herstellerdokumentation. Modus für Confidential Computing auf mehreren Blackwell-Grafikkarten, einschließlich des Schutzes der Verbindungen; erfordert eine kompatible Konfiguration.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definition. Offene Gewichte entscheiden nicht darüber, ob die gesamte Definition eines offenen Systems erfüllt ist.

[^deepseek]: [DeepSeek-V4.1-Flash: Modellkarte](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Herstellerdokumentation. Architektur, MIT-Lizenz und deklarierte Fähigkeiten des Modells; keine Messung der Leistung von Suveria.

[^dpga]: [Digital Public Goods Alliance: standard](https://www.digitalpublicgoods.net/standard). Standard. Kriterien für die Bewertung eines digitalen öffentlichen Guts; die Ausrichtung des Entwurfs ist keine von der DPGA erteilte Anerkennung.

[^lambda-cennik]: [Lambda: Preisliste der Instanzen](https://lambda.ai/pricing). Preisliste des Anbieters. NVIDIA B200 SXM6 180 GB: 6,79 USD pro GPU-Stunde in einer Instanz mit vier Grafikkarten und 6,69 USD in einer Instanz mit acht; H100 SXM 80 GB: 3,99 USD; Preise auf Abruf, ohne Steuern, ohne vertraulichen Modus. Abgerufen am 29.10.2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, Ergebnisse der Leistungsmessung](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Messung des Anbieters. 4 × B200, vLLM, Tensorparallelität 4, spekulative Dekodierung, ca. 8.192 Eingabe- und 1.024 Ausgabe-Token pro Anfrage; bei 64 gleichzeitigen Anfragen insgesamt 3.713,9 Ausgabe-Token pro Sekunde und durchschnittlich 66,8 Token pro Sekunde pro Gespräch. Ohne Datum der Messung. Abgerufen am 28.10.2026.

[^azure-ncc]: [Azure: Preis der Maschine NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) sowie [Beschreibung der Serie](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Preisliste des Anbieters. Vertrauliche Maschine mit einer einzigen Grafikkarte H100 NVL 94 GB; 6,98 USD pro Stunde (East US 2) bis 8,90 USD (West Europe), Linux, nutzungsbasierte Bezahlung. Abgerufen am 28.10.2026.

[^deepseek-cennik]: [DeepSeek: Preisliste der API (chinesische Fassung)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Preisliste des Anbieters. Modell deepseek-flash (V4.1-Flash-1017): Eingabe ohne Cache-Treffer 1 CNY außerhalb der Spitzenzeit und 2 CNY in der Spitzenzeit, Ausgabe 4 und 8 CNY pro Million Token. Umrechnung in USD nach der [Zusammenstellung von eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), einer Hilfsquelle. Abgerufen am 28.10.2026.

[^abonamenty]: Preise der Abonnements: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (Zusammenstellung von geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); der Chat von DeepSeek ist kostenlos ([Beschreibung](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Monatspreise in USD, ohne Steuern; Kimi Plus 19 USD. Abgerufen am 28.–29.10.2026.

[^kimi-k31]: [Moonshot: Veröffentlichung von Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) und [Kimi: Beschreibung von K3.1 Pro (24.10.2026)](https://www.kimi.com/news/kimi-k3-1-pro). Herstellerdokumentation. Weitertrainierte Version von Kimi K3, ca. 3 Bio. Parameter, Kontext von 1 Mio. Token, Gewichte vor dem 4.11.2026 angekündigt; Lizenz nicht bekannt gegeben. API-Preise laut OpenRouter: 2 / 10 USD pro Million Token.

[^kimi-k3]: [Kimi K3: Modellkarte](https://huggingface.co/moonshotai/Kimi-K3). Herstellerdokumentation. 2,8 Bio. Parameter, 104 Mrd. aktiv, Kontext ca. 1 Mio., MXFP4, Lizenz Kimi K3 License.

[^spheron-kimi]: [Spheron: Bereitstellung von Kimi K3 (19.10.2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Leitfaden des Anbieters. Gewichtsdateien 1.560,94 GB, Konfigurationen, in die das Modell passt. Kapazität von ca. 1.000–1.600 Token pro Sekunde auf 8 × B300 laut einer Zusammenstellung von Messungen Dritter vom 29.10.2026; große Streuung.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro und DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Unabhängiger Vergleich. Index v5 vom 28.10.2026: 46 und 32; Geschwindigkeit ca. 36 und 178 Token pro Sekunde. Abgerufen am 29.10.2026.

[^tinfoil]: [Tinfoil: Preisliste](https://tinfoil.sh/pricing). Preisliste des Anbieters. DeepSeek-V4.1-Flash 0,65 USD Eingabe und 1,45 USD Ausgabe pro Million Token; Beschreibung der Ausgabenlimits. Abgerufen am 29.10.2026.

[^phala-api]: [Phala: vertrauliche Modelle](https://phala.com/confidential-ai-models). Preisliste des Anbieters. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD pro Million Token; Attestierung des Gateways und Bestätigungen der Antworten laut Anbieter. Abgerufen am 29.10.2026.

[^near]: [NEAR AI: Preisliste](https://near.ai/pricing). Preisliste des Anbieters. Kimi K3: 3,30 / 16,50 USD pro Million Token; auf der Startseite andere Preise, Abweichung zu klären. Abgerufen am 29.10.2026.

[^phala-gpu]: [Phala: vertrauliche Grafikkarten](https://phala.com/gpu-tee) und [Preisliste](https://cloud.phala.com/about/pricing). Preisliste des Anbieters. 8 × H200: 44,20 USD pro Stunde auf Abruf, 32,20 USD bei 180-tägiger Bindung; 8 × B300: 65,60 USD (30 Tage), 62,40 USD (180 Tage); Intel TDX mit Confidential Computing von NVIDIA; keine Maschinen in Europa. Abgerufen am 29.10.2026. Bindung im Voraus bezahlt, ohne Erstattung bei vorzeitiger Beendigung.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Angebot des Anbieters. Vertrauliche API mit Servern in der Europäischen Union und entfernter Attestierung; Auswahl offener Modelle kleiner als bei Anbietern aus den USA, Preise nicht öffentlich angegeben. Vertraulichkeit vom Anbieter deklariert, von uns nicht überprüft. Abgerufen am 30.10.2026.

[^katalog]: [Confidential Inference Directory: Methodik und Beobachtungen](https://confidentialinference.net/attestation). Unabhängiges Verzeichnis, gesponsert von einem Unternehmen, das vertrauliche Inferenz anbietet. 0 von 95 Routen von Anfang bis Ende verifiziert in der Beobachtung vom 29.10.2026, 14:00:19 Uhr UTC.

[^supermicro]: [Supermicro: Server AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) sowie [GPU Per Hour: Preise von NVIDIA-Servern](https://gpuperhour.com/blog/nvidia-gpu-prices). Angebot des Herstellers und Preiszusammenstellung. Kompletter Server mit acht B300-Grafikkarten: 662.845,95 USD (21.09.2026).

[^semianalysis]: [BigGo Finance über die Analyse von SemiAnalysis (07.10.2026)](https://finance.biggo.com/news/173039423dab79be). Branchenanalyse. Ein Tarif für 200 USD liefert bei intensiver Arbeit ca. 12.000 USD zu API-Listenpreisen; Schätzungen der Marge, keine Angaben des Unternehmens.

[^sglang-k3]: [SGLang: Rezept für Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Dokumentation der Engine. Geprüfte Konfiguration von Kimi K3 auf 8 × B300; betrifft weder Kimi K3.1 noch den vertraulichen Modus.

[^phala-cvm]: [Phala: Preisliste vertraulicher Maschinen](https://phala.com/pricing). Preisliste des Anbieters. tdx.large (4 virtuelle Prozessoren, 8 GB Arbeitsspeicher): 0,23 USD pro Stunde; Datenträger 0,000139 USD pro GB und Stunde. Abgerufen am 29.10.2026.

[^itu]: [ITU: Facts and Figures 2025, Internetnutzung](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Internationale Statistik. Anteil der Menschen, die das Internet nutzen, in den Weltregionen 2025 (ca. 6 Mrd. Menschen, 74 % der Bevölkerung); die Anteile der Regionen in unserer Rechnung sind eine Näherung: Anteil × Bevölkerung der Region.

[^cai]: [Confidential AI: Preisliste](https://confidential.ai/pricing). Preisliste des Anbieters, Preise vom 26.10.2026. DeepSeek V4.1 Flash: 0,30 USD Eingabe, 0,03 USD Eingabe aus dem Cache, 1,20 USD Ausgabe pro Million Token; Maschine 8 × B300 60 USD pro Stunde, mindestens drei Monate, Zuteilung innerhalb weniger Tage. Vertraulichkeit vom Anbieter deklariert, von uns nicht überprüft.

[^voltage]: [VoltageGPU: Preisliste](https://voltagegpu.com/pricing) und [Umfang der Nachweise](https://voltagegpu.com/). Preisliste und Deklarationen des Anbieters. 8 × H200 64,62 USD pro Stunde mit sekundengenauer Abrechnung; die veröffentlichten Nachweise umfassen weder die Attestierung dieser Konfiguration noch die NVSwitch-Switches.

[^epoch]: [The Decoder über Daten von Epoch AI (08.01.2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) und [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Zusammenstellung eines unabhängigen Forschungsinstituts. Installierte Rechenleistung für digitale Intelligenz über 15 Mio. NVIDIA-H100-Äquivalente, Leistungsbedarf über 10 GW. Schätzung, keine Messung.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): Vergleich von Anbietern, die Modelle in vertrauenswürdigen Ausführungsumgebungen betreiben, mit datierten Prüfungen der Attestierung; vom Unternehmen Enclava gesponserte Website, zum Zeitpunkt des Abrufs elf Anbieter. Abgerufen am 31.10.2026.
