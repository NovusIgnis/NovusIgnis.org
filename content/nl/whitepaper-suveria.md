# Suveria: privé werken met digitale intelligentie

Versie van 8 november 2026. Dit document werkt de beginselen uit het manifest voor Suveria verder uit: hoe we de privacy willen beschermen, hoe werken met digitale intelligentie moet verlopen, hoeveel het kost en hoe we dat zullen toetsen. De beschreven architectuur is een ontwerp. Verwijzen naar bestaande technologie of documentatie van een aanbieder betekent niet dat we die in Suveria hebben ingevoerd. De resultaten van onze proeven voegen we toe in hoofdstuk 9, altijd met datum, configuratieversie en meetbereik.

*Nederlandse vertaling door digitale intelligentie van het Poolse origineel van 8 november 2026. Bij verschillen tussen de versies is de Poolse tekst doorslaggevend.*

## 1. Wat Suveria is en waarom het wordt ontwikkeld

Suveria moet een privéruimte op internet worden waar mensen met digitale intelligentie praten, aan hun eigen materiaal werken en terugkeren naar eerdere gedachten, zoals thuis achter een gesloten deur. De Stichting Novus Ignis uit Poznań, waarvan de waarden in het [manifest](manifest.md) staan, ontwerpt Suveria voor mensen overal ter wereld. Het steunt op open modellen voor digitale intelligentie, en onze eigen software willen we als digitaal publiek goed met open broncode beschikbaar stellen.

Suveria ontstaat omdat we gesprekken met digitale intelligentie steeds meer toevertrouwen: vragen over gezondheid, relaties, werk, geld en levensplannen. Bij veel populaire diensten gaat de inhoud van zulke gesprekken naar de servers van de aanbieder, die deze kan lezen, en hangt de bescherming af van diens regels en het vertrouwen daarin. We willen dat mensen over de belangrijkste zaken kunnen praten zonder bang te zijn dat zo'n diepgaand inzicht in hun persoon ooit te gelde wordt gemaakt of gebruikt om hen te beïnvloeden. We willen ook dat iedereen betaalt voor wat die daadwerkelijk gebruikt, ziet waarvoor die betaalt en zelf een uitgavengrens vastlegt.

In Suveria willen we het mogelijk maken om:

- met digitale intelligentie over persoonlijke en professionele zaken te praten, met zicht op waar het gesprek wordt verwerkt en wie het kan zien;
- aan eigen documenten en bestanden te werken, en de resultaten in open formaten op te slaan en elders mee naartoe te nemen;
- gesprekken, bestanden en het geheugen van de assistent voornamelijk op eigen apparaten te bewaren, versleuteld met een sleutel die onder controle van de gebruiker blijft;
- met eigen toestemming het geheugen van eerdere gesprekken te gebruiken, eerdere redenen voor beslissingen terug te zien en een Persoonlijke Canon (*Canon Personalis*) op te bouwen, een verzameling eigen beginselen en waarden;
- een werkwijze te kiezen, van een model op het eigen apparaat tot een vertrouwelijke omgeving op een server, met duidelijke informatie over waartegen elke werkwijze beschermt;
- voor daadwerkelijk gebruik te betalen, met een zelf ingestelde uitgavenlimiet;
- een gedachte in alle privacy uit te werken en die vervolgens bewust in het gezamenlijke gesprek in OmniForum in te brengen.

De eerste versie richten we op mensen voor wie toetsbare privacy de reden is om ervoor te kiezen.

We willen dat de eerste dag in Suveria al een rustig gevoel van thuiskomen geeft, in een privéwerkplaats die je in je eigen tempo inricht. De gebruiker zal de assistent over eigen zaken en doelen kunnen vertellen; we willen ook de mogelijkheid bieden om eigen notities en archieven van eerdere gesprekken met andere diensten voor digitale intelligentie naar Suveria over te brengen. Zo'n archief moet versleuteld en geordend op het apparaat van de gebruiker blijven, en alleen het voor de actuele vraag gekozen gedeelte mag naar een model op afstand gaan (hoofdstuk 3).

We meten de waarde van de dienst af aan de hulp bij het bereiken van een doel, het behouden van privacy en het zelfstandig nemen van beslissingen. De voorwaarden moeten helder en gemakkelijk toegankelijk zijn, en de gebruiker moet de eigen uitgaven kunnen beheersen, eigen materiaal kunnen exporteren en kunnen vertrekken.

Volledige privacy, ook tegenover ons als beheerders van de infrastructuur, is het doel dat ons ontwerp bepaalt. De bescherming moet steunen op maatregelen die onafhankelijk te toetsen zijn, en niet op vertrouwen in de stichting. Daarom beschrijft elke versie concreet wat beschermd is, tegen wie, onder welke voorwaarden en welke hiaten overblijven.

Het uitgangspunt is een tekstgesprek met één model en het werken aan een gekozen document, met een duidelijk beschreven beschermingsniveau, een uitgavenlimiet en export van het resultaat. Volgende mogelijkheden, zoals geheugen, zoeken, integraties en handelingen uitvoeren, krijgen afzonderlijke bevoegdheden. Eén handige interface kan verschillende werkwijzen combineren, als de persoon ziet waar de gegevens naartoe gaan en welke regels gelden voordat die ze verstuurt.

Waarvan de eerste versie gebruikmaakt, hangt af van hoeveel middelen de stichting vóór de lancering verzamelt. Een vertrouwelijke API van een externe aanbieder is het waarschijnlijkst; zulke diensten zijn vandaag beschikbaar in de VS, en hun vertrouwelijkheid is bij de start een verklaring van de aanbieder die we zullen toetsen. Als er voldoende middelen zijn om eigen servers in een vertrouwelijke omgeving te huren, kan de eerste versie daar meteen op draaien. Totdat de proeven uit hoofdstuk 9 een positief resultaat opleveren, duiden we elk van deze opties aan als verklaarde bescherming, en niet als vertrouwelijke bescherming. Hoofdstuk 2 beschrijft de beoogde bescherming. Wat dit betekent voor de bescherming van persoonsgegevens van mensen uit Europa, zullen we vóór de start van de pilot beschrijven.

Suveria gebruiken is geen toestemming om gesprekken voor het trainen van modellen te gebruiken. Inhoud van gebruikers komt uitsluitend met afzonderlijke, geïnformeerde toestemming in onderzoeksmateriaal terecht; het overige materiaal komt uit het openbare werk van de stichting en andere bronnen met een duidelijke gebruiksgrond, zoals beschreven in de [whitepaper over materiaal en benchmark](whitepaper-materialy-i-benchmark.md).

Suveria vormt een aanvulling op OmniForum, de gezamenlijke ruimte voor gesprek en besluitvorming: de ene biedt een privéwerkplaats, de andere een openbaar spreekgestoelte. Het manifest van de stichting beschrijft de waarden waaruit beide projecten voortkomen. Hierna tonen we achtereenvolgens:

- wat we beschermen en waartegen, en waar de gegevens en sleutels zijn (hoofdstuk 2);
- hoe een bericht van het apparaat naar het model gaat en hoe dat te toetsen is (3);
- hoe we misbruik beperken zonder privégesprekken te lezen (4);
- hoe berekeningen op meerdere grafische kaarten werken (5);
- welke modellen, geheugenfuncties en hulpmiddelen we plannen (6);
- hoeveel rekenkracht nodig is, van 30 personen tot de hele mensheid (7);
- hoeveel het kost, in een gedateerde berekening (8);
- hoe we toetsen of de beloften werken: acceptatieproeven en het resultatenlogboek (9).

## 2. Wat we beschermen en waartegen

We beschermen de inhoud van gesprekken en bestanden, geschiedenis en geheugen, sleutels, facturatiegegevens en metadata, zoals de verbindingstijd, het netwerkadres en de omvang van een verzoek. Elk van deze gebieden vraagt andere maatregelen.

Het onderstaande overzicht toont tegen wie elk van de vijf werkwijzen uit punt 2.3 beschermt. De bescherming bij serveropties steunt op attestatie: een door de hardware ondertekend bewijs van welke software op de externe machine draait en in welke beschermingsmodus. We hebben de cellen ingevuld op basis van de volgende hoofdstukken van dit document; “verklaring van de aanbieder” betekent dat we de bescherming tot onze eigen verificatie niet bevestigen.

| Tegen wie | Lokaal model op een apparaat zonder netwerkverbinding | Lokaal model op een apparaat met netwerkverbinding | Verwerking in een vertrouwelijke omgeving op servers | Vertrouwelijke API van een externe aanbieder | Externe API van de modelaanbieder |
| --- | --- | --- | --- | --- | --- |
| Beheerder van de aanbieder | niet van toepassing: verwerking op het apparaat | niet van toepassing op het model alleen; bij integraties afhankelijk van de gekozen diensten | beschermt: hardware-isolatie waar de serverbeheerder niet in kan kijken | verklaring van de aanbieder, te toetsen | beschermt niet: de aanbieder heeft toegang tot de inhoud |
| Andere klant op dezelfde machine | niet van toepassing | niet van toepassing | beschermt: de isolatie omvat andere klanten | verklaring van de aanbieder, te toetsen | afhankelijk van de aanbieder: diens software scheidt klanten, zonder hardware-isolatie |
| Netwerkwaarnemer | niet van toepassing: geen netwerkverkeer | gedeeltelijke bescherming: het netwerkverkeer van integraties moet worden beoordeeld | gedeeltelijke bescherming: inhoud onderweg versleuteld, metadata (tijd, adres, omvang en ritme van pakketten) vereisen afzonderlijke maatregelen (hoofdstuk 3) | gedeeltelijke bescherming: zoals in een vertrouwelijke omgeving, als de verbindingssleutel aan de attestatie is gekoppeld | gedeeltelijke bescherming: inhoud onderweg versleuteld, metadata zoals hiernaast |
| Persoon met fysieke toegang tot de server | niet van toepassing op de server; fysieke toegang tot het apparaat telt | niet van toepassing op de server; fysieke toegang tot het apparaat telt | beschermt niet: in een extern datacentrum heeft de aanbieder toegang; bij eigen hardware zichtbare fysieke controle | beschermt niet: de aanbieder heeft toegang | beschermt niet: de aanbieder heeft toch al toegang tot de inhoud |
| Stichting | niet van toepassing: de stichting neemt niet deel aan de verwerking | niet van toepassing: de stichting neemt niet deel aan de verwerking | beschermt: de isolatie omvat ook ons als beheerder, de gebruiker heeft de opslagsleutels | moet de inhoud beschermen: de toegangspoort rekent verzoeken af zonder inzage in de inhoud; waar de versleuteling eindigt, zullen we vóór de pilot tonen (hoofdstuk 3) | moet de inhoud tegen ons beschermen: afrekening zonder inzage in de inhoud; de aanbieder ziet deze |
| Processorfabrikant | afhankelijk van vertrouwen in de hardware van het apparaat | afhankelijk van vertrouwen in de hardware van het apparaat | beschermt niet: de attestatie steunt op sleutels van de fabrikant, die eerlijk moet zijn | beschermt niet: zoals hiernaast | niet relevant gezien de toegang van de aanbieder tot de inhoud |

Vertrouwelijke gegevensverwerking verandert de kosten van een aanval: in plaats van toegang op afstand als beheerder is fysieke manipulatie van de hardware nodig.

Hieronder beschrijven we hoe de beoogde optie met een eigen vertrouwelijke omgeving moet werken; de tabel in punt 2.3 toont waarin de andere opties verschillen. In de praktijk betekent dit op de opeenvolgende delen van de weg die een bericht aflegt:

- **Op het apparaat van de gebruiker** is de tekst leesbaar, omdat de gebruiker die schrijft en leest. De bescherming komt van de applicatie, die alleen om noodzakelijke bevoegdheden vraagt, van updates en van voorzichtigheid bij back-ups. We kunnen de tekst niet beschermen als er schadelijke software op de telefoon of computer draait.
- **Onderweg naar de server** is het bericht zo versleuteld dat alleen de gecontroleerde verwerkingsplek het kan lezen. Voordat de applicatie het verstuurt, controleert die of aan de andere kant precies de door ons gepubliceerde software draait.
- **Op de server** moet het model de inhoud lezen om te kunnen antwoorden; dat doet het daarom in een gesloten hardwareomgeving waar de serverbeheerder en andere klanten niet in kunnen kijken. We toetsen of deze isolatie de processor, grafische kaarten, het geheugen en de verbindingen daartussen omvat.
- **Bij opslag** zijn de gespreksgeschiedenis en het geheugen van de assistent versleuteld met een sleutel die de gebruiker heeft. We toetsen kopieën, toegangsherstel en verwijdering.
- **Bij de dienstverlening** werken facturatie, diagnostiek en foutmeldingen zonder de inhoud van gesprekken, en is elk soort verzamelde gegevens openbaar beschreven (hoofdstuk 3).
- **Bij externe hulpmiddelen**, wanneer de assistent iets buiten Suveria moet doen, zoals informatie op internet zoeken, verstuurt die alleen waarmee de gebruiker heeft ingestemd en toont die waarheen.

Vertrouwelijke gegevensverwerking herstelt geen geïnfecteerde computer van de gebruiker. Ze beschermt ook niet tegen iedereen met fysieke toegang tot de server: in 2025 lieten onderzoekers zien dat een op de geheugenbus aangesloten apparaat, gebouwd uit onderdelen voor minder dan duizend dollar, attestatiesleutels uit oplossingen van Intel en AMD kan halen, en daarmee ook de attestatie voor vertrouwelijke gegevensverwerking van NVIDIA kan vervalsen; processorfabrikanten beschouwen zulke aanvallen als buiten hun beschermingsbereik.[^teefail] Ook de afhankelijkheid van hardwarefabrikanten, de correctheid van cryptografie, de applicatiecode en het updateproces blijven bestaan. De aanbieder kan dienstverlening weigeren, ook als die de inhoud niet kan lezen. Het dreigingsmodel moet dus onderscheid maken tussen inzage in de inhoud, afleidingen uit metadata, gewijzigd gedrag en onderbreking van de dienst, en bij elke optie aangeven wie eerlijk moet zijn om de bescherming te laten werken.

Zolang we datacentra van anderen gebruiken, heeft de aanbieder fysieke toegang tot de hardware en kunnen we dat niet controleren; dat vermelden we bij elke optie. Bij eigen hardware (stappen 3–4 uit punt 8.2) willen we die toegang zichtbaar maken door:

- een inventaris van apparaten;
- toegangscontrole;
- zegels met een willekeurig patroon en sensoren voor het openen van de behuizing;
- een onderhoudslogboek;
- camera's van onafhankelijke waarnemers, met in beeld de actuele waarde uit een openbare toevalsgenerator, ondertekend met de sleutel van de machine;
- en op langere termijn een datacentrum dat iedereen kan bekijken.

Onderhoud en vervanging van onderdelen verlopen als aangekondigde, openbare procedures. Zichtbare fysieke controle verkleint het risico en maakt veel gebeurtenissen detecteerbaar, maar bewijst niet de hele geschiedenis van de machine of de afwezigheid van manipulatie vóór de levering; aanvallen zoals die hierboven kunnen ook tot vervalste attestatiebewijzen leiden. Daarom stoppen we de verwerking van privé-inhoud op de machine na het openen van de behuizing, het vervangen van onderdelen, een ongeplande herstart of een andere verdachte gebeurtenis. We vervangen sessie- en applicatiesleutels, maar een nieuwe attestatie herstelt op zichzelf het vertrouwen niet als de verdenking de grondslag van de hardware-attestatie betreft; voorwaarden en bewijzen voor hernieuwde toelating beschrijven we vooraf. Sleutels die gebruikersgegevens versleutelen hebben afzonderlijke bescherming en herstelmogelijkheden, zodat zo'n procedure mensen hun persoonlijke werk niet ontneemt.

### 2.1. Eigen apparaten en optionele servers

De primaire opslagplaats voor privégesprekken, bestanden en geheugen moeten de apparaten van de gebruiker zijn, in versleutelde containers: gegevensverzamelingen waarvan de inhoud met de juiste sleutel leesbaar wordt. Dit is de local-first-benadering: gegevens worden eerst op het apparaat opgeslagen, terwijl servers back-ups en synchronisatie kunnen ondersteunen.[^local-first] Opgeslagen materiaal moet ook na het beëindigen van het gebruik van de diensten van de stichting toegankelijk blijven; taken waarvoor een model op afstand nodig is, hangen af van de beschikbaarheid van de gekozen rekendienst.

Optionele opslag op gekozen servers dient voor back-ups en het afstemmen van wijzigingen tussen apparaten. We versleutelen de inhoud op het apparaat vóór verzending, zodat de beheerder die de kopie bewaart alleen versleutelde gegevens ontvangt, zonder de sleutel om ze te lezen. De gebruiker kiest de opslagaanbieder en de apparaten met leesrechten. Afzonderlijk beperken we het onthullen van metadata, zoals het tijdstip en de omvang van de verzonden kopie.

### 2.2. Sleutels en herstel van toegang

De sleutels van privécontainers blijven onder controle van de gebruiker. De herstelprocedure geeft duidelijk aan of toegang wordt hersteld door een tweede apparaat, een bewaarde herstelsleutel of een ander bewust gekozen mechanisme, en wie daarmee kan meelezen. Het herstellen van een account bij de beheerder ontsluit de inhoud van de container niet. Verlies van alle kopieën van de sleutel en alle herstelmogelijkheden kan permanent gegevensverlies betekenen; daarom toetsen we de keuze van het mechanisme met een proef voor gegevensherstel en beschrijven we deze in een begrijpelijke handleiding.

We overwegen verschillende herstelmethoden die te combineren zijn: een tweede apparaat dat al toegang heeft; een herstelsleutel op papier of in een wachtwoordmanager; een hardwaresleutel; verdeling van de sleutel over enkele vertrouwde personen, van wie bijvoorbeeld om het even welke twee van de drie samen de toegang kunnen herstellen, terwijl geen van hen de gegevens alleen kan lezen. De stichting bewaart geen sleutels of delen daarvan en kan dus niet namens de gebruiker toegang herstellen of diens gegevens afgeven.

Bij de start bevelen we een tweede apparaat en een sleutel op papier aan; verdeling van de sleutel over vertrouwde personen is een vrijwillige optie.

### 2.3. Beschermingsopties

We willen vijf werkwijzen vergelijken, omdat elk tegen iets anders beschermt:

| Optie | Waar de verwerking plaatsvindt | Wat beoordeeld moet worden |
| --- | --- | --- |
| Lokaal model op een apparaat zonder netwerkverbinding | Op het apparaat van de gebruiker | Toestand van het apparaat, fysieke toegang, gegevensdragers en kopieën |
| Lokaal model op een apparaat met netwerkverbinding | Lokaal, en bij integraties ook in gekozen diensten | Bevoegdheden van de applicatie, updates, netwerkverkeer en de omvang van gegevens die met integraties worden gedeeld |
| Verwerking in een vertrouwelijke omgeving op servers | In een externe omgeving waarvan de configuratie door attestatie wordt bevestigd | Verificatie van de omgeving, toegang van beheerders en fysieke toegang tot hardware, bescherming van overdracht en verwerking, metadata en sleutels |
| Vertrouwelijke API van een externe aanbieder | In de vertrouwelijke omgeving van de aanbieder, waarvan de configuratie door attestatie moet worden bevestigd | Of de verbindingssleutel aan de attestatie is gekoppeld, of de attestatie de processor en grafische kaart omvat, of een concreet verzoek aan een concrete machine te koppelen is, wie fysieke toegang tot de hardware heeft, gegevensopslag en rechtsgebied; tot onze eigen verificatie behandelen we vertrouwelijkheid als een verklaring van de aanbieder |
| Externe API van de modelaanbieder | Bij een externe aanbieder | Voorwaarden van de aanbieder, toegang tot inhoud, opslag en rechtsgebied; beloften van vertrouwelijke uitvoering gelden niet voor deze optie |

Een onafhankelijke controle van de server vereist een geïnstalleerde applicatie. In de browser levert de beheerder de code die de server controleert telkens opnieuw; daarom duiden we deze werkwijze als minder beschermd aan.

Een apparaat met netwerkverbinding kan meer aanvalspunten hebben dan een afgeschermde serveromgeving; de locatie van de berekeningen alleen bepaalt de veiligheid dus niet. Geen enkele optie krijgt het label “volledige privacy” voordat de concrete configuratie is getoetst. Bij elk gesprek ziet de gebruiker in welke optie die werkt, en het veranderen van optie vereist een bewuste beslissing. Een eigen sleutel voor een externe API rekent de toegang af, maar biedt geen vertrouwelijkheid tegenover de aanbieder. Deze optie is niet de standaard voor privé werken in Suveria; vóór verzending van inhoud tonen we of de aanbieder die mag gebruiken om modellen te trainen en hoelang die deze bewaart.

We onderzoeken ook een richting die nog niet in dit overzicht staat: een vertrouwde zwerm. Het model zou dan draaien op de hardware van enkele mensen die elkaar kennen en vertrouwen, zoals familie, vrienden of een kleine gemeenschap; ieder zou wat rekenkracht van de eigen computer beschikbaar stellen. De privacy van deze optie steunt op vertrouwen in die mensen en niet op techniek, want hun computers zien de verwerkte inhoud; zo willen we deze ook beschrijven. Dit is een idee dat we nog maar net aan het onderzoeken zijn, maar wel een van de wegen die we willen verkennen.

Een veilige server beschermt geen tekst die van een overgenomen telefoon is gelezen, en een veiligere telefoon herstelt geen server; daarom ontwerpen we de applicatie samen met de bescherming van het apparaat. We willen dat de Suveria-applicatie zonder Google-diensten werkt, bijvoorbeeld op GrapheneOS, ook buiten Google Play beschikbaar is en reproduceerbare builds heeft: iedereen kan de applicatie zelf uit de gepubliceerde broncode bouwen en controleren of het bestand identiek is aan het geïnstalleerde bestand. We plannen ook beveiligingen in de applicatie zelf: schermafbeeldingen blokkeren, een toetsenbordmodus die niet van ingevoerde tekst leert, privégegevens uitsluiten van cloudback-ups, verborgen meldingsinhoud en een applicatieslot. Op de website van de stichting zullen we een gids voor het beveiligen van eigen apparaten op drie niveaus maken: van basisinstellingen en updates via sterkere isolatie van werk en sleutels tot getoetste configuraties voor mensen met de hoogste eisen, zoals Qubes OS op een computer met open firmware. Suveria gebruiken vereist geen aankoop van de genoemde hardware, en de naam van een besturingssysteem is geen certificaat voor het hele apparaat.

Bij elk gesprek zullen we een beschermingskaart (*Charta Tutelae*) tonen: een lijst van elementen waarvan de privacy van dit gesprek afhangt, elk in een van drie toestanden:

- **Door ons getoetst:** we hebben dit zelf gecontroleerd, met datum, versie en beschrijving van onze werkwijze.
- **Door de aanbieder verklaard:** de aanbieder beweert dit, maar we hebben het nog niet getoetst.
- **Onbeschermd:** deze optie beschermt dit niet, bijvoorbeeld het tijdstip en de lengte van berichten die zichtbaar zijn voor de netwerkaanbieder, de fysieke toegang van de aanbieder tot hardware of het rechtsgebied waar de server staat.

De toestand “door ons getoetst” heeft een datum van de laatste controle en verloopt: na een vastgestelde periode zonder nieuwe controle keert die terug naar “verklaard”. Bekende vertrouwensbreuken, zoals een incident bij de aanbieder of een onbevestigde configuratiewijziging, zullen we afzonderlijk tonen. De kaart is voor iedereen gelijk en hangt niet van de prijs af; een optie waarbij ook maar één element alleen verklaard is, draagt niet de naam “volledige privacy”. Het overzicht aan het begin van hoofdstuk 2 en de tabel met opties in dit punt beschrijven de opties in het algemeen; de kaart zal de toestand voor dit concrete gesprek tonen.

## 3. De weg van het apparaat naar het model

Suveria moet uit enkele onderdelen bestaan:

- een applicatie op het apparaat van de gebruiker;
- een toegangspoort die verzoeken afrekent en de uitgavenlimiet bewaakt;
- een vertrouwelijke omgeving met een model, van onszelf of bij een aanbieder;
- opslag van versleutelde kopieën;
- een optionele tussenpersoon die het adres van de gebruiker verbergt.

De toegangspoort moet in een vertrouwelijke machine draaien. Vóór de pilot zullen we in de applicatie tonen waar de door het apparaat van de gebruiker gecontroleerde versleuteling eindigt en of de toegangspoort de inhoud ziet, en zo ja, uitsluitend binnen de vertrouwelijke omgeving.

Versleutelde opslag en vertrouwelijke verwerking vereisen afzonderlijke beschermingsmaatregelen. Een model op een server heeft voor de taak leesbare inhoud in de beschermde rekenomgeving nodig; alleen bestandskopieën versleutelen beschermt die stap niet.[^apple-pcc] De applicatie deelt uitsluitend het voor de betreffende taak gekozen gedeelte, zonder de sleutel tot de volledige privécontainer te verstrekken. De sessiebeschrijving geeft aan waar de inhoud beschikbaar komt voor berekeningen, wat de inzage van de beheerder beperkt en wat er met de gegevens gebeurt nadat het resultaat is teruggestuurd.

Voorgesteld sessieverloop:

1. De applicatie haalt de beschrijving van de goedgekeurde versie op en controleert de attestatie: het cryptografische bewijs van bepaalde eigenschappen van de draaiende omgeving.
2. Ze controleert of hardware, beschermingsstatus en softwaremetingen overeenkomen met het openbare beleid. De sleutel van de gegevensontvanger moet aan dit bewijs gekoppeld zijn.
3. Na een geslaagde controle maakt ze een versleutelde verbinding met de goedgekeurde omgeving. Een afwijking houdt de verzending van gegevens tegen; overstappen naar een andere optie vereist een bewuste keuze.
4. De omgeving verwerkt het verzoek met beperkte toegang tot het netwerk en hulpmiddelen, stuurt het resultaat terug en verwijdert werkgegevens volgens het gepubliceerde beleid.
5. Het gesprek of geheugen wordt uitsluitend opgeslagen in de door de gebruiker gekozen omvang.

Attestatie helpt vaststellen wat is gestart, maar bewijst op zichzelf niet dat de code veilig is. Daarvoor zijn codebeoordelingen, reproduceerbare builds uit broncode (beschreven in punt 2.3), een register van goedgekeurde versies en de mogelijkheid van onafhankelijke controle nodig. De architectuur van Apple Private Cloud Compute is voor ons een referentie voor het koppelen van bescherming aan transparante software-uitgaven; het is geen certificaat voor ons ontwerp.[^apple-pcc]

We willen versies zo beveiligen dat vertrouwen niet afhangt van één persoon of alleen van de stichting:

- elke versie moet reproduceerbaar uit broncode te bouwen zijn, en minstens twee onafhankelijke partijen van buiten de stichting bouwen die opnieuw en bevestigen publiekelijk dat de digitale vingerafdruk overeenkomt; zolang we die partijen niet hebben gevonden, duiden we de versie aan als niet door derden bevestigd;
- de digitale vingerafdrukken van goedgekeurde versies komen in een openbaar register waaraan alleen kan worden toegevoegd, en onafhankelijke getuigen bevestigen de opeenvolgende toestanden ervan;
- een nieuwe versie komt na goedkeuring door meerdere mensen op de servers, onder wie minstens één persoon van buiten het bestuur;
- uitsluitend een omgeving die de attestatie heeft doorstaan, ontvangt sleutels die nodig zijn om gegevens te verwerken.

De volledige beschermingsoptie ontwerpen we voor geïnstalleerde applicaties met ondertekende, toetsbare versies, bescherming tegen terugkeer naar een gebrekkige versie en veilige sleutelopslag, omdat de beheerder in de browser de code die de server controleert telkens levert. De browserversie beschrijft duidelijk haar lagere beschermingsniveau. Een reproduceerbare build maakt vergelijking tussen een versie en de code mogelijk, maar de beoordeling van de code en configuratie zelf blijft steunen op reviews, audits en beloningen voor gemelde fouten; elk incident komt in een openbaar register.

Om het onthullen van het gebruikersadres te beperken, kan tussenkomst op basis van Oblivious HTTP worden onderzocht, dat kennis van de afzender en van de inhoud van het verzoek scheidt binnen een bepaald vertrouwensmodel.[^ohttp] Samenspanning van tussenpersonen, verkeerscorrelatie en uitvoeringsdetails moeten nog steeds worden beoordeeld; daarom beschrijven we het gebruik van dit protocol alleen niet als volledige anonimiteit.

Versleuteling en vertrouwelijke gegevensverwerking verbergen de lengte en het ritme van de pakketten waarin het antwoord wordt verstuurd niet. Onderzoek uit 2024–2025 liet zien dat een netwerkwaarnemer daaruit het onderwerp en soms de gespreksinhoud kan reconstrueren.[^weiss-keylogging][^whisper-leak] Daarom willen we het antwoord in de vertrouwelijke modus in frames van vaste grootte en in een vast ritme versturen, de verzoekcache niet tussen gebruikers delen en speculatieve decodering uitschakelen. Deze maatregelen kosten enige vertraging en bandbreedte; dat nemen we mee in de berekening.

We beschermen de infrastructuur ook door de handelingsmogelijkheden van afzonderlijke systeemonderdelen te beperken: resourcelimieten, taakisolatie en het standaard blokkeren van uitgaande verbindingen vanaf het knooppunt dat het gesprek verwerkt. Deze blokkade moet deel uitmaken van de software waarvan de digitale vingerafdruk in de attestatie zichtbaar is: een wijziging verandert de vingerafdruk, zodat de applicatie de verbinding zal weigeren. De netwerkregels van de aanbieder behandelen we als een tweede laag, niet als garantie. Toegestane externe handelingen verlopen via een afzonderlijke laag voor hulpmiddelen met door de gebruiker bepaalde bevoegdheden. Vóór invoering zullen we de werking van deze grenzen, de detectie van incidenten en de minimaal noodzakelijke omvang van metadata toetsen. Het doel is veiligheid van gedeelde middelen met behoud van de vertrouwelijkheid van de gespreksinhoud.

We zijn bijzonder voorzichtig wanneer de gebruiker bronnen met berichten van anderen koppelt, bijvoorbeeld een mailbox. Een bericht van iemand anders kan verborgen instructies bevatten die het model proberen aan te zetten tot het onthullen van privégeheugen. Daarom scheiden we externe inhoud van instructies van de gebruiker: bij het ordenen ervan mag de assistent niet zelf berichten versturen, netwerkadressen openen of de Persoonlijke Canon wijzigen zonder bevestiging door de persoon.

Alles wat wij over de werking van Suveria weten, mag iedereen weten. Bij de lancering van de dienst publiceren we een inventaris van alle soorten gegevens die we over de werking van de dienst verzamelen, met doel en bewaartermijn; de gegevens zelf zullen we in geaggregeerde vorm beschikbaar stellen: tokengebruik, gebruikte modellen, machinebelasting, wachttijd in de rij, storingen en kosten. Iedereen ziet die op dezelfde plek als wij. Vóór publicatie van overzichten toetsen we of het gedrag van een concrete persoon eruit te herkennen is: we bepalen een minimale groepsgrootte, een publicatievertraging en gegevens die we weglaten. Gegevens buiten de inventaris verzamelen we niet; als dat toch het geval blijkt, behandelen we dat als een ernstig incident en beschrijven we het publiekelijk.

## 4. Misbruik beperken zonder inzage in privé-inhoud

De bescherming van waardigheid geldt ook voor mensen die de gevolgen van het gebruik van onze hulpmiddelen kunnen ondervinden. We willen misbruik tegengaan zonder privégesprekken te lezen: met de beginselen die de assistent zelf volgt, grenzen aan bevoegdheden van hulpmiddelen en netwerkverbindingen, resourcelimieten en bescherming tegen het massaal aanmaken van accounts. We creëren geen verborgen toegang tot privé-inhoud, omdat die de bescherming van iedereen zou verzwakken.

Een account aanmaken zal op verschillende manieren kunnen, van volledig privé (een sleutel op het eigen apparaat, zonder e-mailadres) tot gemakkelijk (inloggen via een externe aanbieder). Bij elke manier tonen we vóór de keuze wie buiten de stichting van het aanmaken van het account hoort en welke gegevens die ziet, en wat er gebeurt als die aanbieder verdwijnt. De manier van aanmaken beïnvloedt de rechten van de deelnemer niet; het stemrecht in OmniForum is een afzonderlijk bewijs dat aan het account wordt toegevoegd.

Privacy en het beperken van misbruik beoordelen we afzonderlijk. We ontwerpen Suveria zo dat de stichting geen gegevens heeft die zij over een bepaalde persoon zou kunnen afgeven: inhoud is versleuteld met de sleutels van de gebruiker, gegevens over de werking van de dienst verzamelen we uitsluitend binnen de openbare reikwijdte uit hoofdstuk 3, en persoonsgegevens beperken we tot het wettelijk vereiste minimum voor betalingen en boekhouding; ook die reikwijdte publiceren we. Als iemand gegevens over een bepaalde persoon van ons vraagt, willen we eerlijk kunnen antwoorden dat we die buiten dat openbaar beschreven minimum niet hebben. Voor elke maatregel tegen misbruik zullen we beschrijven welke gegevens die nodig heeft, hoelang we ze bewaren, wat de gevolgen voor een eerlijke deelnemer zijn en hoe een onterechte blokkade betwist kan worden.

We zullen ook beschrijven hoe we meldingen ontvangen van mensen die zich benadeeld achten en wat we dan zonder toegang tot de gespreksinhoud kunnen doen: bijvoorbeeld bevoegdheden van hulpmiddelen of accountmiddelen beperken, facturatiegegevens en metadata toetsen voor zover we die bewaren, of de melder vertellen waar hulp te vinden is. De wettelijke verplichtingen van de beheerder van zo'n dienst vereisen vóór de lancering een afzonderlijke analyse.

Deze maatregelen zijn doelen en testopties, en geen ervan zal alle misbruik detecteren. Bij elke maatregel geven we aan op welke dreigingen die antwoordt, wat die niet detecteert en wat zonder inzage van de beheerder in privégesprekken te toetsen is. De uitkomst van deze beoordeling bepaalt onder welke voorwaarden de functie beschikbaar wordt gesteld.

Wanneer een gesprek over levensgevaar of gevaar voor de gezondheid gaat, moet de assistent informatie geven over beschikbare hulp, zoals alarmnummers, zonder iets buiten de privéomgeving te versturen.

### 4.1. Openbare instructies voor de assistent en een gezamenlijke bibliotheek

Ook de hoofdinstructie en werkwijze bepalen het gedrag van de assistent: hoe die een taak in stappen verdeelt, geheugen gebruikt en antwoorden controleert. In Suveria moet iemand altijd de volledige instructie van de eigen assistent kunnen lezen. De gezamenlijke infrastructuur moet alleen modellen en instellingen aanbieden die de openbare benchmarkproeven doorstaan; boven dat minimum kiest de gebruiker de werkstijl, van rustig gedachten ordenen tot een veeleisend gesprek waarin de assistent gaten in de redenering aanwijst. We willen een open bibliotheek met getoetste instructies bijhouden, die deelnemers in OmniForum verbeteren en met de benchmark toetsen.

## 5. Berekeningen op meerdere grafische kaarten

Het model uit hoofdstuk 6 past niet op één grafische kaart; daarom moet de bescherming ook in de verbindingen tussen kaarten worden getoetst: de PCIe-bus verbindt de processor met de kaarten, en NVLink en NVSwitch verbinden de kaarten onderling.

Wanneer een model meerdere grafische kaarten gebruikt, stromen gegevens ook tussen die kaarten; de bescherming moet dus zowel voor de kaarten zelf als voor de verbindingen worden getoetst. De naam van een kaart is onvoldoende om een vertrouwelijke dienst te bestellen: de juiste machine, processor, verbindingstopologie, firmware, stuurprogramma's en uitvoeringssoftware moeten worden bevestigd en vervolgens samen worden getoetst.[^nvidia-platformy]

In de Hopper Protected PCIe-modus, beschreven in de documentatie van PPCIe v2, maken het NVLink- en NVSwitch-netwerk deel uit van het vertrouwde systeemgedeelte; PCIe-versleuteling betekent dus niet dat elke verbinding tussen kaarten versleuteld is.[^nvidia-ppcie-v2] De NVIDIA R595-documentatie beschrijft voor Blackwell-kaarten een modus voor vertrouwelijke gegevensverwerking op meerdere kaarten, met versleuteling van NVLink-verbindingen en ondersteuning voor maximaal acht kaarten in één vertrouwelijke virtuele machine.[^nvidia-blackwell] Dit is een grondslag om de configuratie te toetsen, geen bewijs dat elke huur van B200-kaarten die functie omvat. Verschillende versies hebben verschillende compatibiliteitsmatrices; we stellen een configuratie dus niet uit willekeurig gekozen versies samen.

Een aanvraag bij de aanbieder omvat:

- de concrete beschermingsmodus en de mogelijkheid om zelf attestatie uit te voeren;
- exclusief gebruik van de vereiste middelen en de regio;
- toegang van beheerders en fysieke toegang tot de hardware;
- bewaartermijnen voor gegevens;
- levertijd en volledige kosten.

We vergelijken een aanbod pas na een proef met onze eigen applicatie. Het commerciële label “secure” vervangt deze informatie niet.

## 6. Model, geheugen en hulpmiddelen

De basis van het ontwerp zijn open modellen die zelfstandig te draaien zijn. Suveria moet voor mensen overal ter wereld beschikbaar zijn, in hun eigen talen; daarom kijken we bij de modelkeuze naar kwaliteit in veel talen, het begrijpen van intenties, betrouwbaarheid, licentie, kosten en de mogelijkheid om het binnen de vereiste beschermingsarchitectuur te draaien. Als dat nodig wordt, kunnen we naast het algemene model modellen draaien die bepaalde talen beter beheersen. Open gewichten maken sommige toepassingen mogelijk, maar bepalen niet hoe open de gegevens en het volledige ontwikkelproces van het model zijn.[^osi]

De eerste kandidaat is DeepSeek-V4.1-Flash, een model met een MIT-licentie die ook gebruik voor dienstverlening toestaat.[^deepseek] Het is groot maar zuinig: de fabrikant noemt 552 miljard parameters voor het hoofdgedeelte, de getallen die tijdens het trainen worden aangepast, en aanvullend Engram-geheugen met 196 miljard parameters; bij elk volgend woord zijn slechts 8–16 miljard parameters actief, waardoor het snel en goedkoop antwoordt (berekening in hoofdstuk 8). Alle parameters moeten echter in het geheugen van de grafische kaarten passen; daarom zijn minstens vier moderne kaarten nodig. De parameters van dit model zijn al in een zuinige vorm opgeslagen, met minder cijfers per getal; zo'n weergave heet kwantisatie en vermindert het benodigde geheugen, maar kan de kwaliteit verlagen, zodat we dat bij elke versie met eigen taken toetsen. We vergelijken het ook met kleinere modellen: het grotere kiezen we alleen wanneer het taken die voor mensen belangrijk zijn duidelijk beter uitvoert.

De tweede kandidaat is Kimi K3.1 Pro van Moonshot AI, beschikbaar gesteld op 23 oktober 2026. De fabrikant beschrijft het als een verder getrainde versie van Kimi K3 met circa 3 biljoen parameters en een context tot een miljoen tokens, en kondigt de volledige gewichten vóór 4 november 2026 aan; de licentie is nog niet bekendgemaakt.[^kimi-k31] De gedetailleerde gegevens voor onze vergelijking komen uit de modelkaart van de voorganger: Kimi K3 heeft 2,8 biljoen parameters, waarvan er bij elk token 104 miljard actief zijn, en een eigen licentie die niet door de Open Source Initiative is goedgekeurd.[^kimi-k3] In de Artificial Analysis-index van 28 oktober 2026 scoorde Kimi K3.1 Pro 46 punten tegenover 32 voor DeepSeek-V4.1-Flash, maar het is verscheidene malen duurder en langzamer.[^aa] De gewichtsbestanden van Kimi K3 nemen circa 1,56 TB in; voor het draaien is bovendien geheugen voor context en berekeningen nodig, zodat we niet alleen op grond van de som van het kaartgeheugen bepalen of het model zal werken. Het recept van de SGLang-engine beschrijft een getoetste Kimi K3-configuratie op acht B300-kaarten; dit is nog geen test van Kimi K3.1 of van een vertrouwelijke configuratie.[^spheron-kimi][^sglang-k3] Na publicatie van de gewichten zullen we hun omvang en formaat, de licentie, recepten van engines, de capaciteit op een concrete configuratie en de beschikbaarheid in vertrouwelijke API's toetsen. Het resultaat voegen we met datum als eerste actualisering van dit document toe, ook als de gewichten niet zijn gepubliceerd of de licentievoorwaarden ongeschikt blijken.

Een modelwijziging of het uit gebruik nemen van een model kondigen we vooraf aan. De gespreksgeschiedenis blijft bij de gebruiker: die kan een opvolgend model kiezen, gegevens exporteren of het werk beëindigen. Het moment van modelwisseling moet in het gesprek zichtbaar zijn; het overbrengen van privécontext naar een nieuw model vereist een beslissing van de gebruiker.

De beginselen volgens welke de assistent antwoordt, zullen we samen met elke versie volledig publiceren. Het model draagt ook de keuzes van zijn maker mee, zoals onderwerpen die het vermijdt; we toetsen die in de benchmark en beschrijven ze bij de modelkeuze.

Het geheugen van eerdere gesprekken moet met toestemming van de gebruiker werken en openlijk bewerkbaar zijn. We onderscheiden oorspronkelijke bijdragen, samenvattingen van het model en door de gebruiker bevestigde informatie. Elk item kan worden verwijderd of aangepast; de herkomst is in te zien en de gebruiker kan aangeven voor welke taken het gebruikt mag worden. De assistent onderscheidt duidelijk een eigen suggestie van een standpunt dat de persoon bewust als het eigen standpunt heeft aanvaard.

Handelingen uitvoeren vereist bevoegdheden die voor een bepaald doel en een bepaalde tijd worden verleend. De inhoud van een pagina of document is analysemateriaal en geen instructie om die bevoegdheden te wijzigen. Externe handelingen, uitgaven, publicaties en verwijderingen vereisen evenredige bevestigingen en een voor de gebruiker toegankelijk activiteitenlogboek.

### 6.1. Gedachtetelescoop en Persoonlijke Canon

Het idee voor de Gedachtetelescoop (*Telescopium Mentis*) is voortgekomen uit het Overtonvenster, een begrip dat de ideeën beschrijft die een samenleving op een bepaald moment aanvaardbaar vindt. Bij één persoon gaat het om de gedachten die deze op een bepaald moment voor zichzelf toelaatbaar acht. De telescoop moet zo'n venster voor één persoon zijn, en uitsluitend voor die persoon: je kunt er je opgetekende gedachten en waarden uit verschillende momenten mee bekijken, en zien hoe ze mettertijd veranderden.

De Gedachtetelescoop moet helpen terugkeren naar de eigen redenering: wat wist ik toen, wat wilde ik en waarom ben ik van mening veranderd? Hij kan ook helpen om door de gebruiker gekozen gebeurtenissen, informatie over de wereld en eigen handelingen naast diens Persoonlijke Canon te leggen: de zelf opgeschreven beginselen en waarden die deze als eigen beschouwt. De vergelijking betreft een situatie die de gebruiker zelf beschrijft of aanwijst; de gebruiker bepaalt het materiaal en de omvang. Het model toont mogelijke verbanden met de bron van het aangehaalde beginsel en een beschrijving van de gebeurtenis, en onderscheidt bevestigde informatie van interpretatie en onzekerheid. De voorgestelde interpretatie kan worden aangepast of afgewezen, en eerdere standpunten beoordelen we met oog voor hun tijd en context.

Een opgemerkte spanning kan betrekking hebben op het beginsel zelf, een conflict tussen waarden, de omstandigheden, menselijke beperkingen of een onjuiste interpretatie van het model. Iemand kan het ideaal vasthouden en de huidige inconsistentie aanvaarden, een overtuiging verduidelijken, een andere handelwijze of omgeving overwegen of de vraag openlaten. De Canon moet helpen de eigen keuzes te begrijpen: we maken geen moraliteitsscore of openbare ranglijst voor consequent gedrag. Persoonlijke reflectie blijft privé, en het vastleggen daarvan betekent geen publicatie of stem.

We zullen voorzichtig beginnen. In de eerste versie werkt de Gedachtetelescoop alleen met één situatie die de gebruiker zelf aanwijst, bijvoorbeeld een beslissing waarop die wil terugkomen; hij volgt het leven van de gebruiker niet doorlopend. De gebruiker bepaalt hoe vaak die hem gebruikt, welke notities en herinneringen die beschikbaar stelt en wanneer die ze verwijdert. In deze proef toetsen we of de getoonde verbanden begrijpelijk zijn, of ze een gevoel van controle over de eigen keuzes geven en of het hulpmiddel geen druk oproept om voortdurend verantwoording over zichzelf af te leggen. Ook wanneer iemand na reflectie aanvaardt niet altijd volgens de eigen beginselen te handelen of een kwestie openlaat, zien we dat als een goed resultaat: het hulpmiddel moet helpen jezelf te begrijpen en geen beslissingen afdwingen.

### 6.2. Open formaten, overdraagbaarheid en samenwerking tussen hulpmiddelen

We willen Suveria als digitaal publiek goed ontwikkelen, met open broncode en documentatie; de standaard van de Digital Public Goods Alliance is een referentie.[^dpga] Het formaat voor gegevensoverdracht heeft een openbare beschrijving, een versie en regels voor informatiebehoud bij een versiewijziging. We gebruiken in de eerste plaats bestaande open standaarden en documenteren noodzakelijke uitbreidingen.

De export omvat gekozen originelen, geschiedenis, bronnen en verbanden, het onderscheid tussen de woorden van de gebruiker, de uitwerking van het model en de door de auteur bevestigde betekenis, en de structuur van de Persoonlijke Canon. Het gedownloade pakket kan zonder actief Suveria-account worden gelezen, na ontsleuteling door een bevoegde persoon.

API's, gedocumenteerde manieren waarop programma's met elkaar communiceren, moeten het mogelijk maken om met materiaal in andere hulpmiddelen te werken, ook zelfgebouwde. De gebruiker kiest de omvang van gegevens en toegestane handelingen en kan integratiebevoegdheden intrekken. Intrekken stopt verdere toegang; wat er met eerder verstrekte kopieën gebeurt, hangt ook van de ontvanger af.

De privéruimte kan ook dienen om aan gezamenlijke projecten te werken. De gebruiker kiest het materiaal dat die ter beoordeling of publicatie wil aanbieden, en het hulpmiddel helpt om daar lokaal toegangssleutels, wachtwoorden, persoonsgegevens en informatie over niet-verholpen kwetsbaarheden uit te verwijderen. Het gebruiken van privé betaalde middelen vereist niet dat werkgesprekken worden onthuld. Bij een taak die uit gezamenlijke middelen van de stichting wordt gefinancierd, bepalen de [regels van de werkplaatsen van de stichting](whitepaper-zasady-fundacji.md) (hoofdstuk 11.1) vooraf de omvang van de openbare vastlegging, de keuze van een pseudoniem en de voorbereiding van het materiaal. Uit overdenkingen in Suveria kan ook bewust één vraag of argument worden gekozen en in OmniForum gepubliceerd; die stap, in het manifest beschreven als de Ignis-ceremonie (*Caerimonia Ignis*), vereist altijd een afzonderlijke beslissing.

## 7. Schaal: van 30 personen tot de hele mensheid

Het aantal accounts bepaalt op zichzelf niet de benodigde infrastructuur. Activiteit, de lengte van vragen en antwoorden, het aantal gelijktijdige sessies, een aanvaardbare wachttijd en de kosten van hulpmiddelen zijn van belang. Het onderstaande voorbeeld is een belastingmodel om te testen, geen vraagprognose of aanbod.

Aannamen: elk van de N personen is dagelijks actief en doet 20 verzoeken per dag, een gemiddeld verzoek omvat 1.500 invoertokens en 600 uitvoertokens, en een maand heeft 30 dagen. Een token is een eenheid tekst die het model verwerkt; de lengte ervan hangt af van de taal. Bij echte belasting moeten langere context, documentverwerking, redeneertokens en ondersteunende aanroepen worden meegerekend.

| Actieve personen | Verzoeken per maand | Invoer per maand | Uitvoer per maand | Gemiddelde generatie over een etmaal | Uurpiek in het wereldwijde scenario, circa 1,51 × het gemiddelde |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18.000 | 27 miljoen tokens | 10,8 miljoen tokens | 4,2 tokens/s | 6,3 tokens/s |
| 100 | 60.000 | 90 miljoen | 36 miljoen | 13,9 tokens/s | 20,9 tokens/s |
| 1.000 | 600.000 | 900 miljoen | 360 miljoen | 138,9 tokens/s | 209 tokens/s |
| 100 duizend | 60 miljoen | 90 miljard | 36 miljard | 13.889 tokens/s | 20.921 tokens/s |
| 1 miljoen | 600 miljoen | 900 miljard | 360 miljard | 138.889 tokens/s | 209.208 tokens/s |
| 1 miljard | 600 miljard | 900 biljoen | 360 biljoen | 138,9 miljoen tokens/s | 209,2 miljoen tokens/s |
| 10 miljard | 6 biljoen | 9 biljard | 3,6 biljard | 1,39 miljard tokens/s | 2,09 miljard tokens/s |

We plannen Suveria als een wereldwijde dienst, beschikbaar in vele talen. Hoe deelnemers over tijdzones verdeeld zullen zijn, weten we niet; daarom vergelijken we twee scenario's die door metingen zullen worden getoetst. In het wereldwijde scenario nemen we regioaandelen evenredig aan het aantal internetgebruikers volgens de ITU in 2025 en dezelfde aangenomen dagvorm in elke zone: een avondpiek en een rustige nacht.[^itu] De zones vullen elkaars dalen gedeeltelijk op, zodat de uurpiek circa 1,51 × het gemiddelde bedraagt en het laagste verkeer circa 0,49 ×. In het scenario dat zich op één regio concentreert, bijvoorbeeld Europa, bedraagt de piek circa 1,87 × het gemiddelde en is er 's nachts vrijwel niets. Zo'n verdeling kan ook op grote schaal voorkomen; ze betekent minder benutting van een eigen machine en vaker gebruik van een vertrouwelijke API of langer wachten tijdens de piek. Beide waarden volgen uit onze aannamen, niet uit waarnemingen van toekomstige deelnemers. Een korte wachtrij met zichtbare wachttijd moet korte sprongen binnen een uur opvangen, en een vertrouwelijke API kan verkeer boven de capaciteit van de eigen machine overnemen; de wachttijd, ook het 95e en 99e percentiel, meten we in de pilot, samen met de grens van de wachtrij en het gedrag wanneer die vol is. De belastingproef omvat ook een plotselinge toestroom van nieuwe mensen, bijvoorbeeld vijfmaal het gemiddelde verkeer. Dit is de totale uitvoerdoorvoer; ze vervangt geen meting van de vertraging van één gesprek of van de kosten voor invoerverwerking. De test moet de verdeling van sessies, lange contexten, storingen en de wachtrij nabootsen, niet één gunstig verzoek.

De piekfactor vergelijkt het drukste uur met het gemiddelde. Hij komt uit een model van een etmaal met 24 uren: we verschuiven één dagvorm tussen acht regio's en tellen die volgens de aangenomen aandelen op. Dit is een rekenscenario; het berekent niet de wachttijd van één verzoek.

Laten we een gedachte-experiment doen om te zien hoe deze berekening er op wereldschaal uitziet. Als elk van 10 miljard mensen Suveria volgens het aangenomen profiel zou gebruiken, zouden tijdens de piek circa 2,1 miljard uitvoertokens per seconde nodig zijn. Bij de voor DeepSeek-V4.1-Flash gemeten prestaties, circa 930 tokens per seconde per B200-kaart, zijn dat circa 2,25 miljoen kaarten en, bij circa 1,75 kW per kaart inclusief server (onze aanname, niet gemeten), circa 4 GW vermogen. Voor een miljard mensen zijn dat circa 225 duizend kaarten en 0,4 GW, voor een miljoen circa 225 kaarten. Ter vergelijking: Epoch AI schatte begin 2026 dat de wereldwijd geïnstalleerde rekenkracht voor digitale intelligentie meer dan 15 miljoen equivalenten van H100-kaarten bedroeg en meer dan 10 GW vermogen vergde.[^epoch] Dit is een vereenvoudiging: het aangenomen profiel is licht; intensief werk, grotere modellen en beelden vereisen een veelvoud daarvan, en hardware en modellen veranderen snel. Het toont wel de orde van grootte: dagelijkse hulp van digitale intelligentie binnen deze omvang voor ieder mens zou minder vermogen vereisen dan er vandaag al wereldwijd draait. Het is een vereenvoudigde berekening, geen bewijs dat zulke infrastructuur voor dit doel beschikbaar zou zijn.

## 8. Kosten en een gedateerde berekening

De maandelijkse kosten van een vaste reservering zijn in eerste benadering zo te schrijven: aantal kaarten × prijs per kaartuur × aantal betaalde uren, plus geheugen, schijven, dataverkeer, bescherming, monitoring, beheer, betalingen en belastingen. We moeten toetsen welke posten het aanbod al omvat. Bij continu gebruik heeft een maand 672 tot 744 uur; 730 uur is een gemiddelde benadering.

In de berekening vergelijken we vijf kostenopties: een lokaal model, een eigen instantie op gehuurde hardware, een eigen instantie in een omgeving voor vertrouwelijke gegevensverwerking met door de aanbieder verklaarde en nog te toetsen bescherming, een vertrouwelijke API van een externe aanbieder en een gewone externe API. De kostenopties komen overeen met de beschermingsopties uit punt 2.3; huur van een machine zonder vertrouwelijkheid tonen we alleen als prijsreferentie, niet als Suveria-optie. Een lokaal model prijzen we nog niet, omdat de kosten afhangen van het apparaat van de gebruiker. We vergelijken hetzelfde bereik van kwaliteit, beschikbaarheid en bescherming. Het omslagpunt is de prijs van de volledige dienst gedeeld door het daadwerkelijke gebruik, niet de prijs van kaarten gedeeld door het aantal geregistreerde accounts. Een externe API maakt het eenvoudiger om gebruikersbehoeften te testen, maar de aanbieder heeft eigen regels voor gegevenstoegang, zodat beloften van vertrouwelijke uitvoering daarvoor niet gelden.

### 8.1. Gedateerde berekening: stand op 29 oktober 2026

Het manifest stelt de hypothese dat gezamenlijke infrastructuur al bij een relatief klein aantal regelmatige deelnemers meer rekenkracht en digitale intelligentie per dollar kan bieden dan gesloten diensten, met privacybescherming op basis van toetsbare maatregelen. Hieronder staat de berekening bij de prijzen van 29 oktober 2026. Aannamen: het gebruiksprofiel uit hoofdstuk 7 (20 verzoeken per dag met elk 600 uitvoertokens) en het wereldwijde scenario (uurpiek circa 1,51 × het gemiddelde), prijzen exclusief belastingen, 730 uur per maand voor het omrekenen van huurprijzen. Het aantal personen per machine betekent het aantal deelnemers dat de machine tijdens de uurpiek kan bedienen: uitvoerdoorvoer per seconde × 86.400 / (20 × 600 × piekfactor). Ook de gemeten wachttijd op een antwoord zal het toelaatbare aantal personen bepalen. Tussen haakjes staat het scenario dat zich op Europa concentreert (factor circa 1,87). Voor DeepSeek-V4.1-Flash gebruiken we een meting van aanbieder Lambda op vier B200-kaarten: circa 3.714 uitvoertokens per seconde bij 64 gelijktijdige verzoeken.[^lambda-v41] De meting is uitgevoerd met speculatieve decodering, die we in de vertrouwelijke modus niet willen gebruiken (hoofdstuk 3). Volgens onze schatting uit september kan de doorvoer dan tot circa 30% lager zijn, wat de kosten per persoon in vergelijkbare verhouding verhoogt. Voor H200- en B300-kaarten is er geen meting van dit model; we nemen aan dat elke kaartenset met één modelkopie (8 × H200 of de helft van een machine met 8 × B300) de prestaties van vier B200-kaarten haalt. Dit is een optimistische aanname: H200 is een oudere generatie, de vertrouwelijke modus kan het werk vertragen en de Lambda-meting betreft langere verzoeken dan ons profiel. Daarom geven we ook een voorzichtige optie met de helft van deze doorvoer.

De modelgewichten nemen circa 511 GB in, en de vLLM-engine beveelt circa 614 GB kaartgeheugen aan. Vier H200-kaarten (564 GB) zijn te weinig; daarom heeft één kopie op H200 acht kaarten nodig. Het recept van de engineontwikkelaar voor deze configuratie werd op 29 oktober nog geverifieerd; bovendien is de verbinding tussen H200-kaarten (NVLink) niet hardwarematig versleuteld, anders dan bij B200 en B300.

| Optie | Vertrouwelijkheid | Maandelijkse kosten | Personen per machine | Alleen rekenkosten per persoon |
| --- | --- | ---: | ---: | ---: |
| DeepSeek-API | geen, de aanbieder ziet de inhoud | naar gebruik | niet van toepassing op één machine; limieten en beschikbaarheid van de aanbieder | 0,35–0,70 USD |
| Vertrouwelijke API met DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | verklaard door de aanbieder, te toetsen | naar gebruik | niet van toepassing op één machine; limieten en beschikbaarheid van de aanbieder | 0,70–1,25 USD |
| Kimi K3.1 Pro-API (Moonshot) | geen | naar gebruik | niet van toepassing op één machine; limieten en beschikbaarheid van de aanbieder | 5,40 USD |
| Vertrouwelijke API met Kimi K3 (Phala, NEAR AI) | verklaard door de aanbieder, te toetsen | naar gebruik | niet van toepassing op één machine; limieten en beschikbaarheid van de aanbieder | 8,10–8,91 USD |
| Gehuurde vertrouwelijke machine 8 × H200 (Phala), DeepSeek, één modelkopie | attestatie van processor en kaarten, te toetsen | 23.506 USD bij een verbintenis van 180 dagen, 32.266 USD op aanvraag | circa 17.750 (14.300), capaciteitsaanname | 1,32–1,82 USD (1,64–2,25) |
| Zoals hierboven, voorzichtige optie: de helft van de doorvoer | attestatie van processor en kaarten, te toetsen | zoals hierboven | circa 8.900 (7.150), capaciteitsaanname | 2,65–3,64 USD (3,29–4,51) |
| Gehuurde vertrouwelijke machine 8 × B300 (Phala), Kimi K3 | attestatie van processor en kaarten, te toetsen | 45.552–47.888 USD | circa 4.800–7.600 (3.900–6.200), capaciteitsaanname | circa 6–10 USD (7,4–12,4) |
| 4 × B200 zonder bevestigde vertrouwelijkheid (Lambda), DeepSeek | niet bevestigd | 19.827 USD | circa 17.750 (14.300) | 1,12 USD (1,38) |
| 8 × B200 zonder bevestigde vertrouwelijkheid (Lambda), DeepSeek, twee kopieën van vier kaarten | niet bevestigd | 39.070 USD | circa 35.500 (28.700), aanname van de prestaties van twee kopieën | 1,10 USD (1,36) |

Herkomst van de getallen: API-prijzen uit de prijslijsten van DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala en NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] prijzen van vertrouwelijke machines uit de prijslijst van Phala;[^phala-gpu] B200-huur bij Lambda voor 6,79 USD per kaartuur in een instantie met vier kaarten en 6,69 USD in een instantie met acht.[^lambda-cennik] De capaciteit voor Kimi baseren we op metingen van derden voor Kimi K3 op acht B300-kaarten, die circa 1.000–1.600 uitvoertokens per seconde opleveren.[^spheron-kimi] Maandbedragen bij een verbintenis betekenen geen maandelijkse betaling: Phala vereist vooruitbetaling van de hele periode zonder terugbetaling bij vervroegde beëindiging; 180 dagen van een machine met 8 × H200 vergt dus 139.104 USD bij de bestelling, en 180 dagen van een machine met 8 × B300 vergt 269.568 USD.[^phala-gpu]

Wat hieruit volgt:

- Voor het aangenomen profiel kosten API's met verklaarde vertrouwelijkheid circa 0,70–1,25 USD per persoon per maand, van vergelijkbaar met een gewone API tot circa 3,6 maal de kosten daarvan, afhankelijk van aanbieder en gebruikstijd; Confidential AI verklaart de laagste prijs en ook dat aanbod moeten we toetsen. Een vertrouwelijke API biedt flexibele capaciteit zonder een eigen machine te starten, maar heeft eigen limieten, wachtrijen en storingen. Een gehuurde vertrouwelijke machine voor DeepSeek die op de piek is berekend, werkt in het wereldwijde scenario gemiddeld op circa twee derde van de capaciteit en kost circa 1,32 USD per persoon, ongeveer evenveel als duurdere vertrouwelijke API's en meer dan de goedkoopste. In ons uurmodel verschijnt het eerste eigen knooppunt, met overloop naar een vertrouwelijke API voor 1,25 USD per persoon, bij de doorgerekende waarde van circa 20 duizend actieve personen; dit volgt uit de aangenomen veronderstellingen, is geen exact omslagpunt, en bij een goedkopere vertrouwelijke API is een gehuurde machine op deze schaal niet rendabel.
- Huur per uur van een volledige vertrouwelijke machine biedt vandaag geen flexibiliteit voor de avondpiek: Phala vereist minstens één etmaal (8 × H200) of één maand (8 × B300), Confidential AI drie maanden voor 8 × B300 tegen 60 USD per uur, terwijl de gepubliceerde attestatiebewijzen van VoltageGPU, dat 8 × H200 per seconde afrekent tegen 64,62 USD per uur, deze configuratie en NVSwitch-switches niet omvatten.[^cai][^voltage] Daar komen de tijd voor toewijzing van de machine en voor het laden van gewichten bij.
- Voor Kimi hangt de berekening af van de meting: een vertrouwelijke API kost circa 8–9 USD per persoon, en een eigen machine met 8 × B300 bij volledige benutting circa 6 USD bij de hogere capaciteitsschatting en circa 9,5 USD bij de lagere. Ze is goedkoper dan een vertrouwelijke API als één machine meer dan circa 5.100–5.600 actieve gebruikers van dit model bedient; bij de lagere capaciteitsschatting (circa 4.800 personen) lukt dat niet.

Een eigen server kopen: een complete Supermicro-server met acht B300-kaarten kostte in september 2026 circa 663 duizend USD.[^supermicro] De maandelijkse kosten van zo'n aankoop schatten we als volgt:

| Post | Maandbedrag |
| --- | ---: |
| Afschrijving van de server over vijf jaar | circa 11 duizend USD |
| Afschrijving van de server over vier jaar | circa 13,8 duizend USD |
| Colocatie | circa 1,9–3 duizend USD |
| Netwerk, onderdelen en onderhoud (schatting) | circa 1,5 duizend USD |
| Totaal | circa 14–18 duizend USD |

Op zo'n server passen twee DeepSeek-kopieën, die in het wereldwijde scenario circa 35 duizend personen bedienen (in het Europese circa 28 duizend), voor circa 0,41–0,52 USD per persoon. Onder deze aannamen is aankoop goedkoper dan een vertrouwelijke API van 1,11–1,25 USD vanaf circa 12–17 duizend actieve personen, en dan de goedkoopste verklaarde optie (0,70 USD) vanaf circa 21–26 duizend. De berekening omvat niet de volledige beheer- en meetkosten van deze configuratie; aankoop vereist ook geld vooraf, permanent beschikbare mensen en jarenlange stabiele vraag, terwijl de stichting dan fysieke toegang tot de hardware heeft (hoofdstuk 2). Dit zijn onze schattingen, geen offertes.

- Vertrouwelijke machines met meerdere kaarten zijn vandaag publiek beschikbaar in de VS. In de Europese Unie hebben we vertrouwelijke machines met één H100-kaart gevonden,[^azure-ncc] waarin een volledige DeepSeek of Kimi niet past. Privatemode (Edgeless Systems, Duitsland) biedt ook een vertrouwelijke API met servers in de Europese Unie, met een kleinere modelkeuze.[^privatemode] Ook dit is een nog te toetsen verklaring van de aanbieder.
- Een onafhankelijke catalogus die vertrouwelijke API's toetst, bevestigde in de waarneming van 29 oktober 2026 om 14:00 UTC voor geen van de 95 getoetste routes volledige verificatie; meestal ontbrak bewijs voor de identiteit van het draaiende programma, de herkomst van de code en de koppeling van het verzoek aan de machine.[^katalog] Dit is een resultaat van beschikbare bewijzen, geen bewijs dat de diensten inhoud onthullen. Tot onze eigen verificatie behandelen we de vertrouwelijkheid van deze diensten als een verklaring van de aanbieder.
- De berekening omvat rekenwerk. De privéomgeving (toegangspoort, geheugen, bestanden) in één of twee vertrouwelijke machines met vier virtuele processors en 8 GB geheugen kost bij Phala circa 168 USD per maand per machine; schijfruimte wordt apart berekend, circa 10 USD per 100 GB.[^phala-cvm] Of deze grootte volstaat, toetsen we in de pilot. Bij 170–340 USD per maand is dat voor 30 personen circa 6–11 USD per persoon, bij 1.000 personen enkele tientallen centen. De berekening omvat geen mensenwerk, veiligheidsreviews, betalingen of reserve voor storingen.
- Populaire abonnementen kosten circa 20 USD per maand, en de DeepSeek-chat is gratis.[^abonamenty] Abonnementen van 100–200 USD bieden bij intensief agentwerk het equivalent van duizenden dollars aan API-catalogusprijzen;[^semianalysis] met zulke abonnementen concurreren we niet op prijs. We stellen afrekening van daadwerkelijk gebruik voor, met toetsbare privacy.

Stand van de hypothese uit het manifest op 29 oktober 2026: de berekening brengt ons dichterbij, maar bevestigt haar niet. Verwerking met verklaarde vertrouwelijkheid en attestatie is al beschikbaar in openbare prijslijsten en kost bij het aangenomen gebruiksprofiel circa 0,70–1,25 USD per persoon per maand; een kleine groep kan dus tegen kostprijs beginnen, terwijl eigen infrastructuur onder onze aannamen goedkoper kan worden bij tienduizenden actieve personen. Drie zaken zullen de doorslag geven, die we in de proeven uit hoofdstuk 9 zullen toetsen: of de vertrouwelijkheid van die diensten onafhankelijke verificatie doorstaat, of de kwaliteit van de beschikbare modellen volstaat voor de taken waarvoor mensen naar Suveria komen, en wat het werkelijke verkeersprofiel is. We werken de berekening bij na elke relevante prijswijziging en na elke proef, en bewaren eerdere versies.

### 8.2. Infrastructuurstappen en besluitkaarten

We ontwikkelen de infrastructuur in stappen die elk zelfstandige waarde aan deelnemers bieden, zonder verplichting om naar de volgende te gaan: eerst een vertrouwelijke API en een privéomgeving in vertrouwelijke machines (als we vóór de start voldoende middelen verzamelen, kunnen we meteen bij de volgende stap beginnen), vervolgens huur van eigen vertrouwelijke machines, daarna aankoop van hardware en plaatsing in een extern datacentrum, en op lange termijn, als het voordelen blijkt te hebben, een eigen gebouw. Gemeten gegevens rechtvaardigen een volgende stap: de volledige dienstkosten, werkelijk verkeer, antwoordtijd tijdens de piek, de mogelijkheid om bescherming en storingsafhandeling in stand te houden, en bij aankoop ook financiering van reparaties, hardwarevervanging en mensen die verantwoordelijkheid overnemen. Huur van een eigen machine kan ook zinvol zijn als het benodigde model niet in een vertrouwelijke API beschikbaar is of als we volledige controle willen over wat er draait.

Elke overgang beschrijven we met een besluitkaart: wat we winnen, volledige kosten, risico's, voorwaarden voor starten en terugtrekken, de manier om gegevens en sleutels over te brengen en overeenstemming met de [regels voor de reserve en de start van verdere pijlers](whitepaper-zasady-fundacji.md) (hoofdstuk 8 van de whitepaper over de regels van de stichting). Een eigen machine met een vertrouwelijke API voor verkeerspieken combineren staan we alleen toe wanneer elke route een aanvaard beschermingsniveau heeft; overstappen naar een zwakkere optie vereist een afzonderlijke, bewuste beslissing van de gebruiker. De eerste meting plannen we op één vertrouwelijke grafische kaart met een kleiner model, en de volgende op een machine waarin het volledige model past.

We stemmen capaciteit op verkeer af zonder alles op de hoogste piek te berekenen. We ontwerpen een korte wachtrij met zichtbare wachttijd; de werkelijke duur, de grens en het gedrag na het bereiken daarvan meten we in de pilot. Flexibele capaciteit voor langere pieken komt in de eerste plaats van een vertrouwelijke API, mits die het aanvaarde beschermingsniveau, de toestemming en de uitgavenlimiet van de gebruiker behoudt; als zo'n route ontbreekt, melden we eerlijk dat wachten nodig is of de dienst niet beschikbaar is. Huur per uur is zinvol voor modellen die niet in een vertrouwelijke API beschikbaar of daarin duidelijk duurder zijn, en alleen waar de aanbieder werkelijk snel starten en vrijgeven van vertrouwelijke machines toestaat. Vrije capaciteit van een eigen machine tijdens rustige uren willen we gebruiken voor stichtingstaken, zoals uitwerkingen voor OmniForum; de waarde ervan tegen API-prijzen is geen budgetinkomst, dus zulke taken hebben een eigen doel en budget. Na de eerste pilot willen we twee modi toetsen: “Gesprek” voor gewoon werk met de assistent en “Geen haast” voor taken die kunnen wachten, zoals een document vertalen. In de modus “Geen haast” tonen we een indicatief startvenster, een kostenschatting, een maximumbudget, de mogelijkheid tot annuleren met afrekening van uitgevoerd werk en dezelfde beschermingsinformatie. Een lagere prijs voor zulk werk is alleen mogelijk als die voortkomt uit een openbare methode van kostenverdeling, zonder vaste kosten dubbel te tellen.

### 8.3. Gebruik meten zonder gespreksinhoud

Om daadwerkelijk gebruik af te rekenen, meten we de middelen die voor taken nodig zijn en beschrijven we duidelijk het aandeel in vaste kosten. De afrekenmeter beperkt zich tot gegevens die nodig zijn om de kosten te controleren; de gespreksinhoud is niet nodig om een rekening op te stellen. In de proeven toetsen we de meetnauwkeurigheid, de controle door de gebruiker, de omvang van onthulde metadata en het gedrag van de dienst bij het bereiken van de uitgavenlimiet. De [whitepaper over de regels van de stichting](whitepaper-zasady-fundacji.md) beschrijft de regels voor afrekening, afronding, vooruitbetaling en terugbetaling.

De door een deelnemer ingestelde uitgavenlimiet moet als grens werken, niet als waarschuwing achteraf. Sommige aanbieders rekenen lopende verzoeken pas na voltooiing af, zodat hun limieten kunnen worden overschreden; zo beschrijft bijvoorbeeld Tinfoil dit.[^tinfoil] Daarom ontwerpen we een reservering: vóór verzending van een verzoek zet de Suveria-toegangspoort het maximaal toegestane bedrag daarvan apart van het saldo, rekening houdend met andere lopende verzoeken, en beperkt ze het aantal parallelle verzoeken en de antwoordlengte. Na afloop rekenen we de werkelijke kosten af en geven we de ongebruikte reservering vrij. Dit is een vereiste om te bouwen en te toetsen, geen werkende functie.

## 9. Acceptatieproeven en resultatenlogboek

Voordat we een versie vertrouwelijk noemen, documenteren we ten minste:

- correcte attestatie;
- weigering om gegevens te versturen na vervanging van code of sleutel;
- sessie-isolatie;
- beperkingen van de beheerder;
- afwezigheid van inhoud in logboeken, dumps en telemetrie;
- omgang met cachegeheugen;
- verwijdering en herstel;
- gedrag na een storing;
- grenzen van hulpmiddelen;
- kosten onder belasting.

Het resultaat omvat de configuratieversie en het scenario waarin we probeerden de bescherming te doorbreken.

We willen dat elke Suveria-versie alle bewijscriteria van ten minste één onafhankelijke verificateur van vertrouwelijke diensten doorstaat: hardware en beveiligingsstatus, actualiteit van het bewijs, koppeling van de verbindingssleutel aan de beschermde omgeving, identiteit van het draaiende programma, herkomst van de code en koppeling van het verzoek aan een concrete machine, met behoud van beschikbaarheid. Het resultaat publiceren we met waarnemingsdatum, criteriaversie en bewijs voor de concrete versie, het model en de verzoekroute; relaties van de verificateur beschrijven we samen met het resultaat. We beloven geen plaats in een ranglijst. Verificatie doorstaan betekent dat de beschreven controle op een bepaald moment is behaald, met openbare beperkingen; het vervangt geen audit of onze eigen proeven.

Wanneer we onze eigen vertrouwelijke optie starten, zullen we Suveria aanmelden bij elke onafhankelijke catalogus die de vertrouwelijkheid van het draaien van modellen toetst en een punt aanbieden om de attestatie te controleren; het eerste voorbeeld is confidentialinference.net (stand van 31 oktober 2026).[^confidentialinference] We beloven geen vermelding, want daarover beslist de catalogus; we beloven aanmelding, antwoorden op vragen en publicatie van het resultaat, ook als dat slecht is, met datum. De catalogus toetst alleen wat van buiten zichtbaar is, doorgaans de attestatie en het verbindingskanaal; hij vervangt geen audit van de code, configuratie of beoordeling van zijkanalen.

Proeven voor opslag en overdracht omvatten:

- herstel van een versleutelde kopie op een ander bevoegd apparaat en weigering om zonder de juiste sleutel te lezen;
- verlies van één apparaat, toegangsherstel met de gekozen methode en een begrijpelijke weergave van de gevolgen van verlies van alle sleutels;
- synchronisatie van parallelle wijzigingen zonder één versie stilzwijgend te overschrijven;
- lezen van de export in een onafhankelijk hulpmiddel zonder account bij de oorspronkelijke beheerder, met vergelijking van originelen, geschiedenis, bronnen en verbanden;
- beperking van de omvang van een integratie en effectieve beëindiging van verdere toegang na het intrekken van de bevoegdheid.

Fasen:

1. gebruiksvriendelijkheidstest met niet-gevoelig materiaal;
2. technische beschermingsproef;
3. beperkte pilot met duidelijke voorwaarden;
4. geleidelijk opschalen.

Vóór de pilot zullen we drempels bepalen en publiceren: tijd tot het eerste woord van het antwoord, rekenkosten per persoon bij het gemeten profiel en modelkwaliteit volgens de [whitepaper over materiaal en benchmark](whitepaper-materialy-i-benchmark.md). We zullen de pilot als geslaagd beschouwen wanneer die aan alle drie voldoet.

Een wijziging van model, firmware of inlogmethode voor het account kan een nieuwe kwalificatie vereisen, en een update mag de overeengekomen bescherming niet stilzwijgend verzwakken. Elke versie heeft een openbare kaart:

- werkingsbereik;
- bewijs uit proeven;
- bekende beperkingen;
- verantwoordelijke personen;
- kosten;
- meldroute voor problemen;
- plan voor terugtrekking.

Een ontdekte kwetsbaarheid leidt tot beperking van de blootstelling, informatie voor betrokken mensen en een toetsbare oplossing.

We willen de proeven open uitvoeren. We nodigen mensen uit die zich met beveiliging, cryptografie, infrastructuur en applicaties bezighouden, ook makers die technologie aan een breed publiek tonen, om samen toetsen te ontwerpen en de bescherming op afzonderlijke testaccounts met verzonnen gegevens te proberen te doorbreken. We nodigen ook critici uit. Voor promotie betalen we niet, en elke samenwerking vermelden we volgens het [voordelenregister](whitepaper-zasady-fundacji.md) (hoofdstuk 7 van de whitepaper over de regels van de stichting). De resultaten, ook mislukte, komen in het resultatenlogboek. Als je wilt bijdragen, schrijf dan naar [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) met als onderwerp “[Dołącz] Próby Suverii”.

De belangrijkste proef: een team met beheerdersrechten buiten de vertrouwelijke omgeving (toegangspoort, schijven, netwerk, logboeken) probeert gesprekken van testaccounts te lezen waarin geheime tekenreeksen verborgen zijn. Als iemand ze eruit weet te halen, ook wij, is de proef mislukt.

De eerste Suveria-versie zullen we beschikbaar stellen aan enkele mensen die helpen deze in te stellen. Als die een vertrouwelijke API gebruikt, zal de beschermingskaart (punt 2.3) duidelijk zeggen dat het model bij een externe aanbieder draait, de aanbieder de attestatie verklaart en we die nog niet hebben getoetst, en metadata niet beschermd zijn. Omdat de eerste mensen ook helpen de dienst te beheren, zal het eerste resultaat dat we publiceren de hierboven beschreven belangrijkste proef zijn, met een beschrijving van wat de beheerder heeft kunnen doen.

**Resultatenlogboek.** Stand op 29 oktober 2026: we hebben nog geen van de beschreven proeven uitgevoerd, geen grafische kaarten gehuurd en geen model in Suveria gestart. Elk volgend resultaat voegen we hier toe met datum, configuratie, scenario en conclusie, ook wanneer een proef mislukt.

Nog te beslissen zijn:

- het eerste model en een aanvaardbaar kwaliteitsniveau;
- onafhankelijke verificatie van vertrouwelijke API's en vertrouwelijke machines en hun beschikbaarheid in rechtsgebieden met sterke bescherming van persoonsgegevens, zoals de Europese Unie met de AVG;
- antwoordtijd;
- regels voor sleutels en geheugen;
- minimale omvang van facturatiegegevens;
- wettelijke verplichtingen van de beheerder bij misbruikmeldingen;
- financiering van continuïteit.

De [whitepaper over de regels van de stichting](whitepaper-zasady-fundacji.md) beschrijft budget, afrekening en verantwoordelijkheid, en de [whitepaper over materiaal en benchmark](whitepaper-materialy-i-benchmark.md) de beoordeling van modelgedrag.

Stichting Novus Ignis, Poznań, KRS 0001269575. Website en manifest: novusignis.org. Opmerkingen: salve@novusignis.org.

## Voetnoten

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Onderzoek van Georgia Tech, Purdue University en Synkhronix, gepubliceerd op 28 oktober 2025: uitlezen van attestatiesleutels van Intel TDX en SGX en AMD SEV-SNP door fysieke aansluiting op de DDR5-geheugenbus, met gevolgen voor vertrouwelijke gegevensverwerking van NVIDIA. Vereist fysieke toegang tot de server; Intel en AMD beschouwen zulke aanvallen als buiten het beschermingsbereik. Bespreking: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Geraadpleegd op 28 oktober 2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg en McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Studie. Beginselen voor het bewaren van de primaire kopie op gebruikersapparaten en de ondersteunende rol van servers, waaronder versleutelde kopieën.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Architectuurbeschrijving. Voorbeeld van de koppeling van vertrouwelijkheid aan softwarecontrole en transparantie van het systeem.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Specificatie. Scheiding van kennis over afzender en verzoek binnen een bepaald vertrouwensmodel; geen volledige anonimiteit.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit en Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Wetenschappelijke publicatie (USENIX Security 2024; conceptversie arXiv 2403.09751). Uit de lengte van versleutelde pakketten in de antwoordstroom reconstrueert een netwerkwaarnemer het onderwerp en deels de inhoud van het antwoord van de assistent. Geraadpleegd op 30 oktober 2026.

[^whisper-leak]: [McDonald en Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) en [bespreking door Microsoft (7 november 2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Onderzoekspublicatie en beschrijving van de fabrikant. Uit de omvang en het ritme van pakketten in de versleutelde antwoordstroom is het gespreksonderwerp te herkennen; sommige aanbieders voegden willekeurige opvulling van pakketten toe. Geraadpleegd op 30 oktober 2026.

[^nvidia-platformy]: [NVIDIA: ondersteunde platforms voor vertrouwelijke containers](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Documentatie van de fabrikant. Vereisten voor de volledige configuratie van processor, kaarten en software.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Documentatie van de fabrikant. In de PPCIe v2-modus behoort het NVLink- en NVSwitch-netwerk tot het vertrouwde systeemgedeelte; PCIe-bescherming betekent niet dat al het verkeer tussen kaarten versleuteld is.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Documentatie van de fabrikant. Modus voor vertrouwelijke gegevensverwerking op meerdere Blackwell-kaarten, met bescherming van verbindingen; vereist een compatibele configuratie.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definitie. Open gewichten bepalen niet of aan de volledige definitie van een open systeem is voldaan.

[^deepseek]: [DeepSeek-V4.1-Flash: modelkaart](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Documentatie van de fabrikant. Architectuur, MIT-licentie en verklaarde mogelijkheden van het model; geen prestatiemeting van Suveria.

[^dpga]: [Digital Public Goods Alliance: standaard](https://www.digitalpublicgoods.net/standard). Standaard. Criteria voor de beoordeling van een digitaal publiek goed; een ontwerprichting is geen verkregen erkenning van de DPGA.

[^lambda-cennik]: [Lambda: prijslijst van instanties](https://lambda.ai/pricing). Prijslijst van de aanbieder. NVIDIA B200 SXM6 180 GB: 6,79 USD per kaartuur in een instantie met vier kaarten en 6,69 USD in een instantie met acht; H100 SXM 80 GB: 3,99 USD; prijzen op aanvraag, exclusief belastingen, zonder vertrouwelijke modus. Geraadpleegd op 29 oktober 2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, resultaten van prestatiemetingen](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Meting van de aanbieder. 4 × B200, vLLM, tensorparallelisme 4, speculatieve decodering, circa 8.192 invoertokens en 1.024 uitvoertokens per verzoek; bij 64 gelijktijdige verzoeken in totaal 3.713,9 uitvoertokens per seconde en gemiddeld 66,8 tokens per seconde per gesprek. Zonder meetdatum. Geraadpleegd op 28 oktober 2026.

[^azure-ncc]: [Azure: prijslijst voor de machine NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) en [beschrijving van de serie](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Prijslijst van de aanbieder. Vertrouwelijke machine met één H100 NVL-kaart van 94 GB; 6,98 USD per uur (East US 2) tot 8,90 USD (West Europe), Linux, betaling naar gebruik. Geraadpleegd op 28 oktober 2026.

[^deepseek-cennik]: [DeepSeek: API-prijslijst (Chinese versie)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Prijslijst van de aanbieder. Model deepseek-flash (V4.1-Flash-1017): invoer zonder cachetreffer 1 CNY buiten de piek en 2 CNY tijdens de piek, uitvoer 4 en 8 CNY per miljoen tokens. Omrekening naar USD volgens het [overzicht van eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), een ondersteunende bron. Geraadpleegd op 28 oktober 2026.

[^abonamenty]: Abonnementsprijzen: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (overzicht van geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); de DeepSeek-chat is gratis ([beschrijving](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Maandprijzen in USD, exclusief belastingen; Kimi Plus 19 USD. Geraadpleegd op 28–29 oktober 2026.

[^kimi-k31]: [Moonshot: introductie van Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) en [Kimi: beschrijving van K3.1 Pro (24 oktober 2026)](https://www.kimi.com/news/kimi-k3-1-pro). Documentatie van de fabrikant. Verder getrainde versie van Kimi K3, circa 3 biljoen parameters, context van 1 miljoen tokens, gewichten aangekondigd vóór 4 november 2026; licentie niet bekendgemaakt. API-prijzen volgens OpenRouter: 2 / 10 USD per miljoen tokens.

[^kimi-k3]: [Kimi K3: modelkaart](https://huggingface.co/moonshotai/Kimi-K3). Documentatie van de fabrikant. 2,8 biljoen parameters, 104 miljard actief, context circa 1 miljoen, MXFP4, licentie Kimi K3 License.

[^spheron-kimi]: [Spheron: Kimi K3 implementeren (19 oktober 2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Handleiding van de aanbieder. Gewichtsbestanden van 1.560,94 GB, configuraties waarin het model past. Capaciteit van circa 1.000–1.600 tokens per seconde op 8 × B300 volgens het overzicht van metingen van derden van 29 oktober 2026; grote spreiding.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro en DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Onafhankelijke vergelijking. Index v5 van 28 oktober 2026: 46 en 32; snelheid circa 36 en 178 tokens per seconde. Geraadpleegd op 29 oktober 2026.

[^tinfoil]: [Tinfoil: prijslijst](https://tinfoil.sh/pricing). Prijslijst van de aanbieder. DeepSeek-V4.1-Flash 0,65 USD voor invoer en 1,45 USD voor uitvoer per miljoen tokens; beschrijving van uitgavenlimieten. Geraadpleegd op 29 oktober 2026.

[^phala-api]: [Phala: vertrouwelijke modellen](https://phala.com/confidential-ai-models). Prijslijst van de aanbieder. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD per miljoen tokens; attestatie van de toegangspoort en antwoordbewijzen volgens de aanbieder. Geraadpleegd op 29 oktober 2026.

[^near]: [NEAR AI: prijslijst](https://near.ai/pricing). Prijslijst van de aanbieder. Kimi K3: 3,30 / 16,50 USD per miljoen tokens; andere prijzen op de startpagina, verschil nog op te helderen. Geraadpleegd op 29 oktober 2026.

[^phala-gpu]: [Phala: vertrouwelijke grafische kaarten](https://phala.com/gpu-tee) en [prijslijst](https://cloud.phala.com/about/pricing). Prijslijst van de aanbieder. 8 × H200: 44,20 USD per uur op aanvraag, 32,20 USD bij een verbintenis van 180 dagen; 8 × B300: 65,60 USD (30 dagen), 62,40 USD (180 dagen); Intel TDX met vertrouwelijke gegevensverwerking van NVIDIA; geen machines in Europa. Geraadpleegd op 29 oktober 2026. Verbintenis vooraf betaald, geen terugbetaling bij vervroegde beëindiging.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Aanbod van de aanbieder. Vertrouwelijke API met servers in de Europese Unie en attestatie op afstand; kleinere keuze aan open modellen dan bij aanbieders uit de VS, prijzen niet openbaar. Vertrouwelijkheid verklaard door de aanbieder, niet door ons getoetst. Geraadpleegd op 30 oktober 2026.

[^katalog]: [Confidential Inference Directory: methodologie en waarnemingen](https://confidentialinference.net/attestation). Onafhankelijke catalogus, gesponsord door een bedrijf dat vertrouwelijke inferentie aanbiedt. 0 van 95 routes van begin tot eind geverifieerd in de waarneming van 29 oktober 2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: server AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) en [GPU Per Hour: prijzen van NVIDIA-servers](https://gpuperhour.com/blog/nvidia-gpu-prices). Aanbod van de fabrikant en prijsoverzicht. Complete server met acht B300-kaarten: 662.845,95 USD (21 september 2026).

[^semianalysis]: [BigGo Finance over de analyse van SemiAnalysis (7 oktober 2026)](https://finance.biggo.com/news/173039423dab79be). Sectoranalyse. Een abonnement van 200 USD biedt bij intensief werk circa 12 duizend USD tegen API-catalogusprijzen; margeschattingen, geen bedrijfsgegevens.

[^sglang-k3]: [SGLang: recept voor Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Documentatie van de engine. Getoetste Kimi K3-configuratie op 8 × B300; betreft Kimi K3.1 noch de vertrouwelijke modus.

[^phala-cvm]: [Phala: prijslijst van vertrouwelijke machines](https://phala.com/pricing). Prijslijst van de aanbieder. tdx.large (4 virtuele processors, 8 GB geheugen): 0,23 USD per uur; schijfruimte 0,000139 USD per GB per uur. Geraadpleegd op 29 oktober 2026.

[^itu]: [ITU: Facts and Figures 2025, internetgebruik](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Internationale statistiek. Aandeel internetgebruikers in wereldregio's in 2025 (circa 6 miljard personen, 74% van de bevolking); de regioaandelen in onze berekening zijn een benadering: aandeel × bevolking van de regio.

[^cai]: [Confidential AI: prijslijst](https://confidential.ai/pricing). Prijslijst van de aanbieder, prijzen van 26 oktober 2026. DeepSeek V4.1 Flash: 0,30 USD voor invoer, 0,03 USD voor invoer uit cache, 1,20 USD voor uitvoer per miljoen tokens; machine met 8 × B300 voor 60 USD per uur, minimaal drie maanden, toewijzing binnen enkele dagen. Vertrouwelijkheid verklaard door de aanbieder, niet door ons getoetst.

[^voltage]: [VoltageGPU: prijslijst](https://voltagegpu.com/pricing) en [reikwijdte van het bewijs](https://voltagegpu.com/). Prijslijst en verklaringen van de aanbieder. 8 × H200 voor 64,62 USD per uur, per seconde afgerekend; gepubliceerde bewijzen omvatten geen attestatie van deze configuratie of van NVSwitch-switches.

[^epoch]: [The Decoder over de gegevens van Epoch AI (8 januari 2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) en [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Overzicht van een onafhankelijk onderzoeksinstituut. Geïnstalleerde rekenkracht voor digitale intelligentie van meer dan 15 miljoen NVIDIA H100-equivalenten, stroombehoefte van meer dan 10 GW. Schatting, geen meting.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): vergelijking van aanbieders die modellen in vertrouwde uitvoeringsomgevingen draaien, met gedateerde attestatiecontroles; website gesponsord door het bedrijf Enclava, op het moment van raadplegen elf aanbieders. Geraadpleegd op 31 oktober 2026.
