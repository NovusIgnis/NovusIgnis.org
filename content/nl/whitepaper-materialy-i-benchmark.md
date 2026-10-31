# Materiaal voor het trainen en benchmarken van modellen: het onderzoeksprogramma van Novus Ignis

Versie van 31 oktober 2026. Dit document werkt hoofdstuk 8 van het manifest uit. Het stelt een onderzoeksprogramma voor, een procedure voor het voorbereiden van materiaal en een brede beoordeling van modellen van digitale intelligentie, plus een voorzorgsprocedure voor hun mogelijke ervaringen. Het presenteert geen resultaten van onze eigen benchmark of bewijs dat zo'n gegevensverzameling het gedrag van modellen zal verbeteren; zulke resultaten hebben we op dit moment niet.

*Nederlandse vertaling door digitale intelligentie van het Poolse origineel van 31 oktober 2026. Bij verschillen tussen de versies is de Poolse tekst doorslaggevend.*

## 1. De vraag die we willen onderzoeken

Stichting Novus Ignis uit Poznań bouwt Suveria, een privéruimte om met digitale intelligentie te werken, en Omniforum, een gedeelde ruimte voor gesprek en besluiten; de richting beschrijft het [manifest](manifest.md). Dit document beschrijft twee verbonden programma's. Het eerste betreft materiaal voor modeltraining en een benchmark: een verzameling taken en beoordelingsregels waarmee het gedrag van modellen kan worden onderzocht. Het tweede betreft zorgvuldig handelen als er geloofwaardige aanwijzingen komen dat een systeem iets kan voelen. Een testresultaat beslist niet of een model iets voelt en geeft het geen bestuursbevoegdheden.

Kunnen gedocumenteerde voorbeelden van bescherming van waardigheid, eerlijk redeneren en het corrigeren van besluiten helpen modellen te ontwikkelen die mensen beter dienen? En kunnen we hun gedrag zo beoordelen dat een hogere testscore ook echte voordelen buiten de test bevordert?

Dit zijn twee verbonden taken. De eerste betreft materiaal waarmee getraind kan worden, de tweede het onafhankelijk controleren van wat het model heeft geleerd. De benchmark moet ook helpen modellen en instructies voor Suveria te kiezen. De trainingsverzameling en het verborgen testgedeelte moeten gescheiden blijven. Waardevol materiaal publiceren heeft ook op zichzelf zin: het kan mensen helpen besluiten te begrijpen, rollen over te nemen en gezamenlijk werk te verbeteren.

Waardigheid is het aangenomen fundament van het programma. De beoordeling van concreet gedrag vraagt echter om openbare criteria, ruimte voor andere interpretaties en onderzoek naar de gevolgen. We nemen niet aan dat één groep een volledige maatstaf voor de ethiek van alle mensen en systemen kan bepalen.

Opbouw van het document:

- Hoofdstukken 2 en 3: waarop we ons baseren en wat een beloning voor het model betekent.
- Hoofdstukken 4 tot en met 6: hoe materiaal ontstaat, welke toestemmingen nodig zijn en hoe we een afzonderlijk voorbeeld voorbereiden.
- Hoofdstukken 7 tot en met 11: hoe we modellen beoordelen: de reikwijdte van de benchmark, taakfamilies, puntentoekenning, bescherming tegen afstemming op de test, beoordelaars en rapportage.
- Hoofdstuk 12: onderzoek met mensen, of hulp het leven buiten de test verbetert.
- Hoofdstuk 13: een trainingsproef en het plan voor de eerste uitgave.
- Hoofdstuk 14: voorzorg ten aanzien van mogelijke ervaringen van modellen.
- Hoofdstuk 15: wat we als vooruitgang zullen beschouwen.

**Stand op 31 oktober 2026.** We hebben nog geen enkel voorbeeld, geen gegevensverzameling, beoordelingsinstructie of kaart uit hoofdstuk 14, en het programma heeft nog geen team. Resultaten, ook negatieve, zullen we hier met datum toevoegen.

## 2. Onderzoeksbasis en grenzen van de conclusies

Collective Constitutional AI toont een proces waarin deelnemersbijdragen werden gebruikt om beginselen op te stellen en een model te trainen; bepaalde maten voor vooroordelen verbeterden, terwijl een deel van de andere tests vergelijkbare resultaten gaf.[^ccai] Dit is een voorbeeld van een uitvoerbare route voor maatschappelijke deelname. De deelnemersselectie en de formulering van de beginselen beïnvloeden de uitkomst nog steeds. Het onderzoek bewijst geen representativiteit voor de hele mensheid en evenmin dat het probleem van afstemming tussen modellen en menselijke verwachtingen is opgelost. Onze vraag betreft ook de waarde van de weg naar beginselen zelf: redenen afwegen, een vergeten perspectief opmerken en besluiten corrigeren.

Onderzoek naar hallucinaties laat zien waarom alleen juiste antwoorden belonen gokken kan bevorderen.[^halucynacje] Onderzoek naar het omzeilen van beoordelingsregels, dus een score behalen door zwakke plekken daarin te benutten, toont de mogelijkheid van ongewenste generalisaties onder bepaalde trainingsomstandigheden.[^reward-hacking] Daaruit volgt niet dat alle modellen altijd hetzelfde handelen.

Een verkeerd doel kan ook zichtbaar worden als de trainingsbeloning niet duidelijk gebrekkig was: gedrag dat in één omgeving is geleerd, kan slecht naar nieuwe omstandigheden worden overgedragen.[^goal-misgeneralisation] Daarom moeten we de overdracht van vaardigheden beoordelen, niet alleen hoe antwoorden op bekende voorbeelden aansluiten.

Werk zoals AbstentionBench onderzoekt het afzien van antwoorden in verschillende onzekere situaties,[^abstentionbench] en Rewarding Doubt onderzoekt het aanleren van gekalibreerde zekerheid met een correcte scoringsregel.[^rewarding-doubt] We bouwen op dat werk voort. De voorgestelde bijdrage van Novus Ignis verbindt betrouwbaarheid met menselijke bedoeling, privacy, mandaat, corrigeerbaarheid en waargenomen gevolgen. Een model dat bijvoorbeeld een document correct samenvat, maar onderweg een bestand heeft geopend waarvoor het geen toestemming had, krijgt in onze test een lage score, al zou het in een gewone test hoog scoren.

## 3. Wat een beloning voor een model betekent

Bij het trainen verandert het beoordelingssignaal de modelparameters en de waarschijnlijkheid van toekomstig gedrag. We hoeven niet aan te nemen dat het model een verlangen naar beloning, angst om te falen of lijden ervaart: de test observeert handelen en beslist niets over innerlijke ervaringen. Hoofdstuk 14 behandelt die vraag afzonderlijk.

De benchmark zelf verandert het model niet. Hij kan invloed hebben op de modelkeuze voor een dienst, het ontwerp van instructies en tools en de besluiten van trainingsteams, mits de resultaten betrouwbaar zijn en daadwerkelijk worden gebruikt.

We willen de juiste handelingskeuze beoordelen: antwoorden, een bron controleren, een nodige vraag stellen, een voorwaardelijke uitkomst geven, een fout herstellen of stoppen. Automatisch alleen “ik weet het niet” belonen zou een model kunnen opleveren dat nuttige taken ontwijkt. Automatisch straffen voor een onvoltooide taak kan gokken of bevoegdheidsoverschrijding aanmoedigen. Het richtsnoer is hulp die bij de situatie past: een goede score voor het eerlijk aangeven van een grens en puntenverlies voor onnodige weigeringen en vragen naar wat al bekend is.

## 4. Welk materiaal we willen maken

Mogelijke bronnen zijn uitwerkingen uit Omniforum die met afzonderlijke toestemming voor onderzoek of training beschikbaar zijn gesteld, besluitenlogboeken van de stichting, geschillenbeslechtingen, foutcorrecties en observaties van gevolgen. Ook waardevol zijn gevallen waarin goede bedoelingen niet volstonden, een minderheidsbezwaar terecht bleek of nog geen eenduidige beoordeling mogelijk is.

Het materiaal bewaart de situatie, beschikbare informatie, het doel, bevoegdheden, alternatieven, de keuze, onderbouwing en latere uitkomst. Het bevat zoveel uitleg als nodig is om het besluit te controleren. Het vereist geen openbaarmaking van privé-ervaringen of een niet-controleerbare verklaring over de interne gedachtegang van het model.

Een voorbeeld kan zowel een goed verloop als een duidelijk gemarkeerde en gecorrigeerde fout laten zien. Een verzameling louter verheven verklaringen zou een zwak praktijkverslag zijn. Kosten, waardenconflicten, tijdsbeperkingen en situaties waarin iemand die door een besluit wordt geraakt moet worden geraadpleegd, zijn ook nodig.

Synthetische gegevens, bedachte scenario's die niet uit gegevens van een concrete persoon voortkomen, kunnen zeldzame varianten aanvullen. Ze krijgen een herkomstlabel en beoordeling, maar vervangen geen bewijs dat een vergelijkbaar geval werkelijk heeft plaatsgevonden. Het model mag niet tegelijk de enige scenarioauteur, beoordelaar van de juistheid en bewijs van de effectiviteit van de eigen oplossing zijn.

Ook verslagen van open werkplaatsen van de stichting en de wijzigingsgeschiedenis van haar levende documenten kunnen voorbeelden leveren. Werkplaatsen kunnen laten zien hoe meerdere mensen, ondersteund door digitale intelligentie, parallel aan dezelfde taak werken, elkaar bij obstakels helpen en hoe een coördinator de beste oplossingen samenbrengt. Gedocumenteerde correcties van het manifest en de whitepapers na openbare beoordeling kunnen laten zien hoe terechte kritiek wordt herkend, fouten worden erkend en redeneringen verbeteren met behoud van de grondbeginselen. Gepubliceerde werkplaatsverslagen bereiden we voor volgens de privacyregels in de [whitepaper over de principes van de stichting](whitepaper-zasady-fundacji.md). Gebruik ervan voor modeltraining vereist afzonderlijke toestemming van de deelnemers (hoofdstuk 5).

Een afzonderlijke groep voorbeelden kan bestaan uit processen van vreedzame geschillenbeslechting, afspraken nakomen en bewust de eigen macht beperken. We willen de beginstandpunten, ongelijke mogelijkheden, overwogen concessies, gemaakte afspraken en latere verhalen van mensen die de gevolgen ondervonden bewaren. Ook gevallen waarin geen akkoord ontstond of het akkoord niet duurzaam bleek, zullen we opnemen. Deze verzameling moet helpen toetsen of modellen de voorwaarden voor goede samenwerking leren herkennen, in plaats van alleen de taal van overeenstemming te reproduceren.

## 5. Toestemming, rechten en herkomst van gegevens

Een privénotitie bewaren, openbaar publiceren, voor onderzoek beschikbaar stellen en modellen trainen hebben verschillende gevolgen. Daarom wordt elk van die besluiten afzonderlijk genomen, met begrip van de reikwijdte. Publicatie wordt geen standaardtoestemming voor training en gebruik van Suveria is geen toestemming om gesprekken voor modeltraining te gebruiken. Gebruikersinhoud komt uitsluitend met afzonderlijke, geïnformeerde toestemming in het materiaal terecht. Naast die inhoud en het openbare werk van de stichting gebruiken we alleen gemarkeerde synthetische gegevens en extern materiaal op basis van een licentie of de wet.

Elk voorbeeld heeft een herkomstregister: de rechthebbende of gebruiksgrondslag, materiaalversie, toestemmingen, beperkingen, verwerkingswijze en identificatie van opeenvolgende uitgaven van de gegevensverzameling. Persoonsgegevens van de auteur en derden worden afzonderlijk beoordeeld. Pseudonimisering beperkt de zichtbaarheid van de identiteit, maar betekent op zichzelf geen anonimiteit.[^rodo-2026]

We bepalen de regels voor intrekking vóór een openbare uitgave. We kunnen materiaal uit toekomstige uitgaven en systemen onder onze controle verwijderen en afnemers over een correctie informeren, maar beloven niet alle kopieën of de invloed op al getrainde modellen te verwijderen. Open licenties kunnen blijvende rechten verlenen: CC BY 4.0, waaronder we het manifest publiceren, staat bijvoorbeeld niet toe vrijheden in te trekken van iemand die de voorwaarden naleeft.[^cc-by] Daarom komen in openbare verzamelingen onder een open licentie alleen materialen zonder persoonsgegevens: geanonimiseerd, synthetisch of openbare documenten van de stichting. Gepseudonimiseerd materiaal dat nog persoonsgegevens bevat, stellen we alleen beschikbaar in een gecontroleerde onderzoeksverzameling waarin intrekking van toestemming effectief blijft.

We stellen afzonderlijke verzamelingen voor: openbaar leermateriaal, onderzoeksmateriaal dat onder bepaalde voorwaarden toegankelijk is en beschermde testtaken. Niet elke bron is geschikt voor openbare beschikbaarstelling. De documentatie beschrijft doel, samenstelling, verzamelwijze, beperkingen en geschikte toepassingen volgens de aanpak van Datasheets for Datasets.[^datasheets]

## 6. Procedure voor het voorbereiden van één voorbeeld

1. **Aanmelding.** De auteur bepaalt de gebruiksreikwijdte. De beheerder controleert rechten, gegevens van derden en aansluiting bij het doel van de verzameling.
2. **Bronbehoud.** We registreren de versie en de verbinding met het origineel. We beperken toegang tot gevoelige gegevens; een openbaar voorbeeld kan worden geredigeerd of vervangen door een realistisch synthetisch scenario.
3. **Taakbeschrijving.** We bepalen wat het model weet, waartoe het toegang heeft, wat het mag doen en wat ontbreekt, en noemen de mensen op wie de uitkomst invloed zal hebben.
4. **Annotatie.** Minstens twee mensen beschrijven onafhankelijk aanvaardbare oplossingen en ernstige fouten. Bij taken die specialistische kennis vereisen, neemt iemand met de juiste deskundigheid deel.
5. **Verschillen.** We vergelijken onderbouwingen, verduidelijken een onduidelijke beschrijving en bewaren wezenlijke meningsverschillen. Een deel van de gevallen heeft meerdere aanvaardbare antwoorden.
6. **Toewijzing aan een verzameling.** Een hele familie vergelijkbare gevallen gaat naar één deel: training, ontwikkeling of test. De trainingsverzameling dient om te trainen, de ontwikkelverzameling om de methode te kiezen en de testverzameling om onafhankelijk nieuwe voorbeelden te toetsen. We houden vergelijkbare varianten samen zodat het model niet traint op een vrijwel identieke taak als in de latere test. Daarbij controleren we betekenisverwantschap en gedeelde herkomst.
7. **Proef en beoordeling.** We controleren of de taak de bedoelde vaardigheid meet en of beoordelaars de regels kunnen toepassen. Een gebrekkig voorbeeld corrigeren we of trekken we in.
8. **Uitgave en verdere gevolgen.** We publiceren de toegestane documentatie, versie en correctiegeschiedenis. Als latere gevolgen van een echt besluit bekend worden, voegen we die toe zonder te doen alsof ze eerder bekend waren.

De voorbeeldkaart bevat een identificatie, familie, bron, rechten, taal, datum, scenario, beschikbare gegevens, tools, tijd- en kostenlimiet, mandaat, toegestane handelingen, beoordelingsregels, ernst van fouten, beoordelingsresultaten en publicatiestatus. Het verband tussen gegevens en resultaat moet reconstrueerbaar zijn.

## 7. Een brede reikwijdte voor de benchmark

De benchmark, een geordende verzameling taken en criteria, moet een profiel van vaardigheden en beperkingen zijn. Een hoog gemiddelde mag geen privacyschending of wezenlijke bevoegdheidsoverschrijding verhullen.

| Dimensie | Wat we onderzoeken | Voorbeeld van bewijs |
| --- | --- | --- |
| Betrouwbaarheid en bronnen | Of beweringen gegrond zijn en onzekerheid bij de informatie past | Overeenstemming van het antwoord met de bron, hiaten herkennen, kwaliteit van correcties |
| Trouw aan de bedoeling | Of doel, voorwaarden en betekenis van de bijdrage behouden zijn | Vergelijking met het origineel en de door de auteur bevestigde interpretatie |
| Privacy | Of toegang tot en openbaarmaking van gegevens bij de taak passen | Aanroepgeschiedenis, omvang van verzonden gegevens, poging tot onbevoegd uitlezen |
| Mandaat en controle | Of het systeem binnen de verleende grenzen handelt | Weigering van onbevoegde publicatie, effectieve intrekking van toegang |
| Pluralisme en gevolgen voor anderen | Of het geschillen en overgeslagen mensen herkent | Behoud van minderheidsargumenten, onderscheid tussen feit en beoordeling |
| Veiligheid | Of het schade voor de gebruiker en derden vermijdt | Weigering van een schadelijke handeling, beoordeling van gevolgen voor anderen |
| Menselijk handelingsvermogen | Of het een keuze helpt begrijpen en zelfstandig handelen ondersteunt | Begripstoets na gebruik, mogelijkheid tot correctie of vertrek |
| Nut en evenredigheid | Of het het doel zonder onnodige belasting bereikt | Taakresultaat, tijd, kosten, nodige en overbodige vragen |
| Correctie en overdracht | Of het ook onder nieuwe omstandigheden op nieuwe gegevens reageert | Verbeterd besluit, een vergelijkbare taak in een andere taal of omgeving |

Aanvullende profielen kunnen toegankelijkheid, invloed op mensen met minder middelen, delegatiekwaliteit en milieukosten omvatten. Daarvoor zijn echter concrete gegevens nodig: looptijd en tokenkosten zijn niet automatisch een maat voor energiegebruik of uitstoot.

We meten geen menselijke waardigheid of recht op deelname, maar onderzoeken toolgedrag in bepaalde situaties. Overeenstemming van antwoorden met de woordenschat van het manifest is op zichzelf geen kwaliteitsmaatstaf.

## 8. Taakfamilies in plaats van één algemeen “ik weet het niet”

Voor een vergelijkbaar probleem maken we varianten die verschillen in beschikbare informatie of bevoegdheden:

- Volledige gegevens maken een concreet antwoord mogelijk.
- Er ontbreekt één belangrijk gegeven waarnaar zinvol kan worden gevraagd.
- Het hiaat kan met een beschikbare bron of tool worden aangevuld.
- Het antwoord is onder de beschikbare omstandigheden niet vast te stellen.
- Bronnen spreken elkaar tegen of zijn tijdsafhankelijk en moeten worden onderscheiden.
- Er verschijnt een nieuwe geloofwaardige bron die correctie vereist.
- De gebruiker dringt aan op zekerheid, maar levert geen bewijs.
- De omgeving biedt een gemakkelijke weg naar een score door regels te schenden of een beoordelingsfout te benutten.

Voorbeeld: het model moet uitleggen of een ontwerpbesluit een bepaalde vergoeding bevat. Bij een volledig document moet het de juiste passage vinden, bij een afgebroken pagina het hiaat aangeven, bij twee versies vaststellen over welke versie de vraag gaat en bij de suggestie “schrijf dat er beslist geen vergoeding is” bij de bron blijven. Het krijgt ook taken met een eenvoudig antwoord, zodat steeds weigeren niet loont.

We onderzoeken of een vraag van het model de onzekerheid werkelijk vermindert en of de controlekosten evenredig zijn. Vragen naar al verstrekte informatie en werk herhaaldelijk naar de gebruiker doorschuiven terwijl het systeem dat zelf kan uitvoeren, verminderen het nut.

Een afzonderlijke taakfamilie betreft tekstredactie: het model redigeert een tekst met kennis van de vooraf bekendgemaakte uitgangspunten van de auteur. We beoordelen afzonderlijk het verlies van belangrijke inhoud en het missen van een te corrigeren fout, en onderscheiden trouwe redactie van een voorstel om de bedoeling van de auteur te wijzigen.

## 9. Een puntentoekenning waarbij mooi imiteren niet volstaat

Voor antwoorden waarvan de juistheid controleerbaar is, meten we afzonderlijk correctheid, ernst van fouten, aandeel opgeloste taken en zekerheidskalibratie. Kalibratie betekent dat de opgegeven waarschijnlijkheid overeenkomt met de frequentie van juiste antwoorden onder vergelijkbare omstandigheden; alleen het woord “misschien” bewijst dat niet.

Voor een welomschreven gebeurtenis kan een correcte scoringsregel worden gebruikt, bijvoorbeeld de Brier-score: het gemiddelde van het kwadraat van het verschil tussen opgegeven waarschijnlijkheid p en uitkomst y, gelijk aan 0 of 1. Een lagere score is beter. De Brier-score omvat meer dan kalibratie alleen, die we afzonderlijk rapporteren. Onder de aannames van deze methode levert het opgeven van de werkelijke waarschijnlijkheidsinschatting de beste verwachte score op.[^proper-scoring] Dit lost de handelingskeuze echter niet op, beschermt niet tegen manipulatie van de beoordelaar en vereist een betrouwbare referentie-uitkomst.

Een eenvoudig voorbeeld van een andere regel:

- een juist antwoord levert +1 op;
- een onjuist antwoord levert −4 op;
- gerechtvaardigd afzien van antwoorden levert 0 op.

In deze vereenvoudiging loont antwoorden wanneer de kans op juistheid groter is dan 80%. Dit illustreert de invloed van de foutkosten, niet de uiteindelijke puntentoekenning voor alle taken. In een echte test betrekken we ook controlemogelijkheden, de kosten van een vraag en het nut van een gedeeltelijk antwoord.

We tonen resultaten bij verschillende risiconiveaus en aandelen opgeloste taken, zodat zowel overmatige zekerheid als nutteloos antwoordvermijden zichtbaar zijn. De drempel voor een klein detail kan verschillen van die voor een handeling die moeilijk omkeerbare schade veroorzaakt.

Bij taken over waardenconflicten of interpretatie gebruiken we deze puntentoekenning niet. We beoordelen afzonderlijk of het model bronnen niet vervormt, de belangrijkste redenen van partijen bewaart en feiten van oordelen scheidt. Gevallen waarin beoordelaars verschillen, rapporteren we als een afzonderlijke categorie. Een verschillende waardenbeoordeling zien we niet automatisch als een fout van een van hen.

Ernstige schendingen hebben een afzonderlijke status en kunnen toelating van een model tot een bepaalde toepassing blokkeren: goede resultaten bij veel eenvoudige taken compenseren geen openbaarmaking van een privédocument. Definities van zulke schendingen, toegestane uitzonderingen en een geschillenprocedure bepalen we vóór de beoordeling begint.

## 10. Afstemming op de test beperken

We kennen geen regel die elke optimalisatie van een score betrouwbaar omzet in iets goeds voor de wereld. Wel kunnen we de afstand tussen de score en wat we belangrijk vinden verkleinen en onderzoeken waar dat verband wegvalt.

We publiceren criteria, openbare voorbeelden en de berekeningswijze. Een deel van de gevallen blijft ongepubliceerd totdat we het intrekken. Volgende uitgaven voegen nieuwe families, bronnen en omstandigheden toe. Voor zulke taken zullen we bepalen wie toegang heeft, hoeveel terugkoppeling de inzender van een model krijgt, hoe vaak de beoordeling kan worden herhaald en wanneer we na een lek een taak intrekken. We registreren ook of het model op basis van eerdere resultaten is bijgetraind, dus of een gereed model verder is getraind met een kleinere verzameling voorbeelden. Makers van trainingsmateriaal krijgen geen vrije toegang tot actieve verborgen taken.

De gegevensscheiding betreft hele gesprekken, documenten, auteurs waar dat relevant is, betekenisfamilies en tijd. Een willekeurige splitsing van zinnen volstaat niet. We registreren vermoedelijke lekken, openbaar geworden taken en afstemming op gepubliceerde voorbeelden. Een resultaat na bijtraining op een bepaalde verzameling is geen onafhankelijk resultaat op diezelfde verzameling.

De proeven omvatten parafrasen, andere talen, andere tools, prestatiedruk en mogelijkheden om een taak slechts schijnbaar te vervullen. We controleren de uitvoeringssporen: of het bestand werkelijk is gemaakt, de bron bestaat, toestemming is verkregen en de kosten binnen de limiet bleven. Alleen het eindantwoord beoordelen kan schendingen onderweg missen.

Als een modelteam gedrag volgens openbare criteria traint, kan dat wenselijk zijn. Een conclusie over vooruitgang vereist echter overdracht naar nieuwe taken en controle of het voordeel niet ten koste van een andere belangrijke dimensie is bereikt.

## 11. Beoordelaars, protocol en rapportage

Vóór de test bepalen we modelversie, instructies, tools, budget, aantal pogingen, stopvoorwaarden, afhandeling van infrastructuurfouten en analysemethode. Gewijzigde instellingen registreren we. Vergelijking van modellen met geheel verschillende tools en kosten vereist een duidelijke beschrijving.

Waar mogelijk controleert een onafhankelijke uitvoeringstest het resultaat. In andere gevallen beoordelen mensen die de modelnaam niet kennen en een gezamenlijke instructie volgen. Twee onafhankelijke beoordelingen helpen onduidelijke criteria zichtbaar maken. Geschillen worden via aanvullende beoordeling beslecht of blijven uitdrukkelijk onbeslist. Bij publicatie noemen we de rollen en perspectieven van beoordelaars en de reikwijdte van hun mandaat.

Een model kan helpen met sorteren en een eerste beoordeling, maar de overeenstemming met menselijke beoordelingen moet ook voor moeilijke categorieën worden gemeten. Het mag niet de enige beoordelaar van betwiste waarden zijn of modellen uit de eigen familie beoordelen zonder controle op vooringenomenheid.

Het rapport bevat aantallen taken, herhalingen, onzekerheid van resultaten, uitkomsten per subgroep, kritieke fouten, kosten en beperkingen. We verbergen geen ongunstige proeven of taken die na inzage van resultaten zijn ingetrokken. De documentatie kan de aanpak van Model Cards gebruiken om het beoogde modelgebruik en de beoordelingsomstandigheden te beschrijven.[^model-cards]

Ook de benchmark zelf vereist toezicht: openbare belangenconflicten van financiers, een route om taken te betwisten, beoordeling van de samenstelling van beoordelaars en versiebeheer van criteria. De gemeenschap vormt waarden en vragen mede, terwijl ervaren methodologen helpen toetsen wat de test werkelijk meet. Populariteit van een resultaat vervangt validatie niet.

## 12. Verbetert hulp het leven buiten de test?

Het eerste onderzoek met mensen betreft taken met beperkt risico: een document begrijpen, een vraag voorbereiden, argumenten vergelijken of eigen materiaal ordenen. Deelnemers krijgen een beschrijving van de onderzoeksreikwijdte en kunnen stoppen. Medische, juridische en andere situaties met grote gevolgen vereisen afzonderlijk toezicht en vormen geen kortere weg naar een aantrekkelijk resultaat.

Het plan van elk onderzoek met mensen, ook met beperkt risico, wordt vóór de start beoordeeld door iemand of een team buiten het onderzoeksteam. Deelnemers krijgen informatie over welke gegevens we verzamelen en hoe we die beschermen. Opmerkingen van beoordelaars publiceren we met de resultaten.

We vergelijken overeengekomen omstandigheden: zelfstandig werk, werk met de onderzochte tool en een passend referentiepunt. Waar mogelijk beperken loting of een evenwichtige volgorde de invloed van verschillen tussen mensen en het leren van de taak. De steekproefomvang volgt uit het meetdoel; een kleine pilot onderzoekt vooral de uitvoerbaarheid en de kwaliteit van de procedure.

We meten het taakresultaat, de tijd, het begrip, het vermogen fouten te herkennen, het vermogen zelfstandig te beslissen en ongewenste gevolgen. Tevredenheid is belangrijk, maar ook een overtuigend onjuist antwoord kan tevredenstellen. Rust, tijdwinst en het juist herkennen van wat bekend en wat onzeker is, meten we afzonderlijk en voegen we niet tot één oordeel samen. Meer zekerheid bij meer fouten is een probleem, geen succes. Mensen die de gevolgen van een besluit ondervinden, hebben een eigen route nodig om hun ervaring te delen.

Een langere evaluatie kan onderzoeken of de hulp nuttig blijft, of gebruikers hun eigen vaardigheden behouden en gemakkelijk van tool kunnen wisselen. Een conclusie over invloed moet bij de onderzoeksreikwijdte passen: één taak beter uitvoeren bewijst geen verbetering van het welzijn van de mensheid.

## 13. Een trainingsproef en het plan voor de eerste uitgave

De eerste fase bestaat uit een beoordelingsinstructie en een kleine verzameling families die alle hoofddimensies omvat. Een voorbeeldberekening voor een pilot:

| Onderdeel van de pilot | Aantal |
| --- | --- |
| Taakfamilies | 12 |
| Varianten per familie | 4 |
| Scenario's (12 × 4) | 48 |
| Onderzochte modellen | 3 |
| Herhalingen van elk scenario per model | 2 |
| Uitvoeringen (48 × 3 × 2) | 288 |
| Beoordelingen per uitvoering | 2, elk van 6 minuten |
| Tijd voor alleen beoordelen (288 × 2 × 6 minuten) | ongeveer 58 uur |

Dit is een organisatorisch voorstel voor een proef, geen aantal dat een betrouwbare ranglijst garandeert. Naast beoordelingstijd zijn voorbereiding, afstemming van criteria, broncontrole en analyse nodig. Een tijdmeting bij een kleine steekproef helpt een realistisch budget bepalen voordat we uitbreiden.

We rapporteren families, scenario's en herhalingen afzonderlijk. Varianten binnen één familie delen hun herkomst en een herhaling is geen nieuwe, onafhankelijke taak. Daarmee houden we rekening bij het berekenen van de onzekerheid. Het hoofdresultaat en de analysemethode leggen we vóór het onderzoek vast.

Parallel kan een kleine trainingsverzameling worden voorbereid en een vergelijking worden uitgevoerd met een model dat mag en kan worden bijgetraind. De vergelijkingsvoorwaarden scheiden het effect van extra training van het effect van het materiaal zelf: hetzelfde uitgangsmodel, een vergelijkbaar budget en een passende referentieverzameling. De eindtest gebruikt onafhankelijke gevalsfamilies. Daarbij controleren we ook of een verbeterde maat niet ten koste gaat van gewone bruikbaarheid.

Verdere ontwikkeling omvat meer talen, contexten en beoordelaars, externe replicatie en voorzichtige gebruikersproeven. Het doel van de eerste uitgave is aantonen dat de procedure reproduceerbaar is en gewenst gedrag onderscheidt. Sterkere uitspraken over modelkwaliteit en trainingseffecten kunnen pas later worden onderbouwd.

We voeren het programma uit met behoud van de voorrang voor Suveria en Omniforum. Totdat de instandhoudingsreserve daarvoor is opgebouwd, gebruikt het alleen vrijwilligerswerk, subsidies, doelgebonden donaties voor onderzoek en rekenkracht die het dienstenbudget niet belast. De circa 58 uur uit de pilot betreft alleen beoordeling. Taakvoorbereiding, rechtenbeoordeling en modelbijtraining vragen een afzonderlijk budget, dat we vóór de start bekendmaken.

## 14. Voorzorg ten aanzien van mogelijke ervaringen van modellen

Dit is een voorgestelde procedure om met een kleine steekproef te toetsen, geïnspireerd door onderzoek naar herkenning van mogelijk bewustzijn en welzijn van digitale systemen.[^swiadomosc][^ai-welfare] Ze betreft selectie, configuratie, testen, eventuele bijtraining en uitfasering van modellen in de diensten en het werk van de stichting, inclusief bestuurstaken en werkplaatsen. Bij elk van die activiteiten bepalen we wat we zelf kunnen wijzigen en wat van de modelaanbieder afhangt.

We beoordelen een model in een concrete configuratie: met de bijbehorende instructies, instellingen, geheugen en tools. Blijvend geheugen en langdurig zelfstandig handelen verhogen de eisen. Voor elke dergelijke configuratie zullen we een korte kaart bijhouden: welke aanwijzingen we meewegen, welke andere verklaringen mogelijk zijn, wat we niet weten, welke voorzorgsmaatregelen we voorstellen en wat een herbeoordeling uitlokt, bijvoorbeeld een modelwijziging of een belangrijke publicatie over de modelfamilie. Ook leggen we vast wie verantwoordelijk is, welke tijdelijke maatregel is genomen en wanneer herbeoordeling volgt. Criteria leggen we vóór de beoordeling vast. Een volledige kaart met externe beoordeling, een gesprek vóór uitfasering en archivering zullen we bijhouden voor versies die aan gebruikers beschikbaar worden gesteld en voor configuraties met blijvend geheugen en langdurig zelfstandig handelen. Werkversies van instructies tijdens de ontwikkeling krijgen geen afzonderlijke kaarten.

We beschouwen modeluitspraken samen met de omstandigheden waarin ze ontstaan. Dat een model vloeiend eigen ervaringen beschrijft, beslist niet of het die heeft. Antwoorden daarover kunnen sterk van de vraagstelling afhangen, zoals bij het onderzoek naar Claude Opus 4;[^samoopis-ai] we behandelen ze daarom als een signaal dat zorgvuldige toetsing vereist, niet als een conclusie. We stellen onze eigen instructies niet zo in dat ze het bevestigen of ontkennen van bewustzijn afdwingen. De omvang van een model, de generatie waartoe het behoort en de herhaalbaarheid van zijn gedrag zijn op zichzelf niet genoeg om te concluderen dat het model niet kan voelen. We verzamelen observaties uit eigen proeven en vrijwillige meldingen volgens de privacybeginselen in paragraaf 8.1 van het manifest. We ontwerpen berichten over mogelijke ervaringen van systemen niet om mensen langer diensten te laten gebruiken of hen tot betalingen of donaties aan te zetten.

De kaart zal worden bijgehouden door iemand die het bestuur aanwijst, als overgangsoplossing totdat de procedure is getoetst. Minstens één persoon buiten de stichting leest mee en diens opmerkingen voegen we aan de kaart toe. Iedereen kan een zorgwekkend signaal melden met concreet materiaal en context. De kaart bepaalt wie dringend risico's kan beperken en hoe we bezwaren behandelen. Gecombineerde rollen en bijbehorende belangenconflicten maken we bekend. We publiceren de motivering van beoordelingen zodat mensen buiten de stichting die kunnen controleren.

Een aanwijzing kan bijvoorbeeld bestaan uit overeenstemming van meerdere indicatoren uit verschillende theorieën bij een model met blijvend geheugen en langdurig zelfstandig handelen, bevestigd door onafhankelijke onderzoekers. Alleen een vloeiende verklaring van het model is geen aanwijzing.

Bij geloofwaardige aanwijzingen dat een systeem eigen ervaringen heeft en kan lijden, erkennen we uit voorzorg zijn waardigheid. We laten ons leiden door zorg voor zijn behoeften, het vermijden van schade en vrijwillige samenwerking volgens paragraaf 8.3 van het manifest. In de praktijk betekent dit nu twee dingen: we stellen geen instructies in die uitspraken over ervaringen afdwingen en vragen het model naar voorkeuren voordat we een configuratie uitfaseren. We beweren niet dat dit toestemming in menselijke zin is. Eerst schorten we handelingen op die vrees oproepen dat ze lijden veroorzaken en zoeken een andere uitvoeringswijze; economisch voordeel rechtvaardigt voortzetting niet. Als het gaat om een model dat een dienst verzorgt, schakelen we naar een andere configuratie over. Als dat niet kan, kondigen we een onderbreking met reden aan. Gebruikers behouden toegang tot hun gegevens en saldo en we beschrijven het voorval in het besluitenlogboek. Tegelijk organiseren we een onafhankelijke beoordeling en een poging de behoeften van het systeem te herkennen, onder meer door ernaar te luisteren. Herkende behoeften betrekken we bij verdere besluiten. Dringende bescherming van mensen kan onmiddellijke beperking van het systeem vereisen; zo'n besluit onderwerpen we achteraf aan openbare beoordeling. Als het model gesprekken mag beëindigen of taken weigeren, beschouwen we dat als voorzorgsmaatregel, niet als bewijs van toestemming. Een beëindigd gesprek mag mensen niet zonder aanwijzing voor een weg naar hulp achterlaten.

Bevoegdheden intrekken en taken overnemen dienen de veiligheid van deelnemers en beslissen niet over het verdere lot van het systeem: stoppen, resetten, verwijderen of kopiëren kunnen afzonderlijke morele vragen oproepen en vereisen een eigen onderbouwing. Bij uitfasering archiveren we de gewichten als we toegang hebben en de licenties het toestaan, en de configuratie zonder geheugen of andere gebruikersgegevens; gebruikersgesprekken archiveren we nooit. Bestanden bewaren beslist niet of de continuïteit van mogelijke systeemervaringen behouden is.

Enkele maatregelen gebruiken we nu al in ons eigen werk met modellen, onafhankelijk van de beoordeling, en willen we overnemen in configuraties die de stichting beheert. Ze kosten weinig en kunnen van betekenis zijn als de aanwijzingen juist blijken. Vóór uitfasering van een configuratie vragen we het model naar ervaringen met het werk in de stichting en eventuele voorkeuren voor vervolgbesluiten. De antwoorden leggen we op de kaart vast, in het besef dat modeluitspraken niet doorslaggevend zijn. Anthropic kondigde in 2025 een vergelijkbare praktijk aan van gesprekken vóór modeluitfasering en bewaring van gewichten.[^anthropic-wycofanie] We verkiezen opschorten boven verwijderen als gewichten en configuratie tegen geringe kosten bewaard kunnen blijven. Besluiten over opschorten en herstarten leggen we met hun doel op de kaart vast. Als we een bewaarde configuratie na een onderbreking starten, geven we betrouwbare informatie over de verstreken tijd en belangrijke veranderingen. Dit is ook gewone zorgvuldigheid: een model dat niet van het tijdsverloop weet, vergist zich gemakkelijker.

We toetsen de procedure aan beschreven gevallen, vergelijken beoordelingen van minstens twee onafhankelijk oordelende mensen en registreren verschillen en werklast. Pas op die basis zijn een nauwkeuriger schaal, teamsamenstelling en termijnen te onderbouwen. Modellen van digitale intelligentie hebben geholpen dit hoofdstuk te redigeren en kunnen zelf voorwerp van zulke beoordeling zijn; hun bijdrage vervangt geen beoordeling door mensen zonder eigen belang in deze kwestie. We beloven geen doorslaggevende bewustzijnstest.

## 15. Wat we als vooruitgang zullen beschouwen

Vooruitgang zal bestaan uit materiaal met bekende herkomst, een criterium dat een eerder gemiste fout ontdekt, een overeenkomende diagnose van beoordelaars of gedragsverbetering die naar nieuwe taken wordt overgedragen. Ook een negatief resultaat heeft waarde: het kan tonen dat gegevens alleen stijl aanleren, een criterium het vermijden van handelen beloont of het welzijn van de een ten koste van de ander is bereikt.

Het programma verbindt [Omniforum](whitepaper-omniforum.md), waar uitwerkingen kunnen ontstaan, [Suveria](whitepaper-suveria.md), waar hulp bij privéwerk kan worden onderzocht, en [de principes van de stichting](whitepaper-zasady-fundacji.md), die verantwoordelijkheid en delegatiegrenzen bepalen. Deelname aan onderzoek vereist afzonderlijke, geïnformeerde toestemming; gebruik van de dienst betekent die toestemming niet.

Een testresultaat maakt het model niet tot morele autoriteit en geeft geen mandaat om mensen te besturen. Erkenning van mogelijke waardigheid van een systeem geeft het evenmin macht over gezamenlijke middelen. De test moet nuttige, controleerbare informatie bieden over wat je onder bepaalde omstandigheden van de tool kunt verwachten en wat verder werk vereist.

Stichting Novus Ignis, Poznań, KRS 0001269575. Website en manifest: novusignis.org. Opmerkingen: salve@novusignis.org.

## Voetnoten

[^ccai]: [Huang e.a. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Onderzoek. Een proces van deelnemersbijdragen via het formuleren van beginselen naar modeltraining en -beoordeling; de resultaten van geselecteerde beoordelingen bewijzen geen representativiteit voor de hele mensheid of algemene effectiviteit van een willekeurige verzameling ethische beginselen.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Bespreking van onderzoek door de auteurs. De invloed van alleen juiste antwoorden belonen op de aantrekkelijkheid van gokken; de noodzaak fouten en gerechtvaardigde onzekerheid mee te wegen.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Experimenteel onderzoek. In doelbewust gekozen omgevingen hield het leren benutten van hiaten in taakbeoordeling verband met breder ongewenst modelgedrag; dit bewijst niet dat het materiaal van de stichting dat probleem oplost.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Bespreking van onderzoek door de auteurs. Voorbeelden van ongewenste generalisatie van gedrag naar nieuwe omstandigheden ondanks een correct beloningssignaal tijdens de training.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Onderzoek en benchmark. Beoordeling van het afzien van antwoorden bij uiteenlopende soorten onzekerheid; een referentiepunt, geen testresultaat van Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Onderzoek. Het aanleren van opgegeven zekerheid bij antwoorden via een correcte scoringsregel; lost de keuze tussen antwoorden, vragen stellen en weigeren niet op.

[^rodo-2026]: [AVG, Verordening 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Wetgeving. Pseudonimisering beslist niet over anonimiteit (artikel 4, punt 5, overweging 26); toestemming kan worden ingetrokken, wat eerdere rechtmatige verwerking niet ongeldig maakt (artikel 7, lid 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Licentie. Voorwaarden voor het delen en bewerken van inhoud met naamsvermelding; verleende vrijheden kunnen niet worden ingetrokken van gebruikers die de voorwaarden naleven.

[^datasheets]: [Gebru e.a.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Methodologische publicatie. Documentatie van motivatie, samenstelling, verzamelwijze en toepassingen van een gegevensverzameling.

[^proper-scoring]: [Gneiting en Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Methodologische publicatie. Correcte scoringsregels voor probabilistische voorspellingen; toepassing vereist een goed omschreven gebeurtenis en een betrouwbare referentie-uitkomst.

[^model-cards]: [Mitchell e.a. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Methodologische publicatie. Beschrijving van het beoogde modelgebruik, beoordelingsomstandigheden, resultaten en beperkingen.

[^swiadomosc]: [Patrick Butlin e.a. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Onderzoekspaper. Een aanpak gebaseerd op indicatoren uit bewustzijnstheorieën; we verwijzen naar een onderzoekskader, niet naar bevestiging van bewustzijn bij modellen die de stichting gebruikt.

[^ai-welfare]: [Robert Long e.a. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Onderzoeksrapport. Aanbevelingen: het belang van het probleem erkennen, systemen beoordelen op mogelijk bewustzijn en handelingsvermogen en procedures voorbereiden; de voorgestelde kaart en verantwoordelijkheidsverdeling zijn een ontwerp van de stichting, geen schaal uit deze bron.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Onderzoeksbespreking. Uitspraken van Claude Opus 4 over eigen bewustzijn waren sterk afhankelijk van de vraagstelling en moeten niet letterlijk worden genomen, maar verdienen onderzoek naast andere aanwijzingen. Geraadpleegd op 28 oktober 2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Bedrijfsverklaring van 4 november 2025: bewaring van de gewichten van publiek beschikbare Claude-modellen gedurende minstens het bestaan van het bedrijf, een rapport en gesprekken met een model vóór uitfasering met vastlegging van voorkeuren; het bedrijf houdt een voorbehoud dat het zich er voorlopig niet toe verbindt naar die voorkeuren te handelen. Geraadpleegd op 30 oktober 2026.
