---
tytul: Modellen van digitale intelligentie in Suveria
opis: Waar de modellen voor Suveria vandaan komen, hoe we ze kiezen, wat er bij een modelwissel gebeurt en welke openbare beginselen de assistent moet volgen
grupa: suveria
kolejnosc: 4
menu: Modellen
---
# Modellen van digitale intelligentie in Suveria

Een model van digitale intelligentie is een programma dat je woorden leest en een antwoord opstelt; daarop moet de assistent in Suveria werken. Deze pagina legt uit waar we modellen vandaan halen, hoe we ze kiezen, wat er gebeurt als het model verandert en welke beginselen de assistent openlijk moet volgen.

Suveria is nu een ontwerp. Het resultatenlogboek in de whitepaper (stand op 29 oktober 2026) zegt het rechtstreeks: we hebben nog geen model in Suveria laten draaien en geen van de beschreven proeven uitgevoerd. Alles hieronder betreft voornemens en kandidaten, geen werkende dienst.

Meer: [whitepaper Suveria, hoofdstuk 9](../whitepaper-suveria.md#s9).

## Waarom open modellen

Het ontwerp berust op open modellen, die beschikbaar zijn onder voorwaarden waarmee ze zelfstandig kunnen worden gedraaid. Zo kan de stichting ze vrijwel tegen kostprijs aanbieden en het werk richten op een privéomgeving voor het gebruik van bestaande modellen, met de mogelijkheid in de toekomst ook eigen modellen te ontwikkelen.

Aanvankelijk willen we ze gebruiken bij aanbieders van vertrouwelijke gegevensverwerking en, als de kostenberekening en voorwaarden dat rechtvaardigen, op eigen servers. Het manifest benadrukt dat Suveria “onze beste weg naar privéwerk met digitale intelligentie, geen doel op zich” is: als modellen op je eigen apparaat passen of er een betere beschermingsmethode ontstaat, wordt een deel van die weg overbodig.

Meer: [manifest, paragraaf 3.1](../manifest.md#s3-1) en [whitepaper Suveria, hoofdstuk 6](../whitepaper-suveria.md#s6).

## Hoe we een model kiezen

Suveria moet beschikbaar zijn voor mensen overal ter wereld, in hun eigen taal. Daarom houden we bij de modelkeuze rekening met:

- kwaliteit in veel talen;
- het begrijpen van bedoelingen;
- betrouwbaarheid;
- de licentie, de voorwaarden waaronder de maker het gebruik van het model toestaat;
- kosten;
- de mogelijkheid het te draaien in de beschermde omgeving die we op de pagina [Privacy en beveiliging](suveria-prywatnosc.md) beschrijven.

We kiezen alleen een groter model als het taken die voor mensen belangrijk zijn duidelijk beter uitvoert. Daarbij moet de benchmark van de stichting helpen, een geheel van taken en beoordelingsregels waarmee het gedrag van modellen kan worden getoetst; nu is dat een onderzoeksprogramma zonder resultaten.

De whitepaper noemt twee kandidaten. Het zijn te toetsen kandidaten, geen besluit: het eerste model en het aanvaardbare kwaliteitsniveau moeten nog worden bepaald.

- **DeepSeek-V4.1-Flash.** Een model onder de MIT-licentie, die ook gebruik voor diensten toestaat. De fabrikant vermeldt 552 miljard parameters in het hoofddeel (parameters zijn getallen die tijdens de training van het model zijn bepaald) en aanvullend geheugen met de naam Engram met 196 miljard parameters. Bij elk woord zijn slechts 8–16 miljard daarvan actief; daarom antwoordt het snel en goedkoop, al zijn er minstens vier moderne grafische kaarten nodig om het te draaien. De parameters zijn in verkorte vorm opgeslagen (kwantisatie). Dat bespaart geheugen, maar kan de kwaliteit verminderen; daarom zullen we dit op onze eigen taken toetsen.
- **Kimi K3.1 Pro.** De fabrikant heeft de publicatie van de volledige gewichten, de parameters, aangekondigd maar de licentie nog niet bekendgemaakt. Na publicatie toetsen we onder meer hun omvang, de licentie en beschikbaarheid bij aanbieders van vertrouwelijke gegevensverwerking en voegen we het resultaat met datum aan de whitepaper toe, ook als de voorwaarden onbruikbaar blijken.

Meer: [whitepaper Suveria, hoofdstuk 6](../whitepaper-suveria.md#s6) en [whitepaper over materiaal en benchmark, hoofdstuk 1](../whitepaper-materialy-i-benchmark.md#s1).

## Wat er gebeurt wanneer een model verandert

We kondigen een wijziging of het terugtrekken van een model vooraf aan. Je gespreksgeschiedenis blijft bij jou: je kunt een nieuw model kiezen, gegevens exporteren of je werk afsluiten.

In het gesprek moet het moment van de modelwissel zichtbaar zijn en het overbrengen van privécontext naar een nieuw model vereist jouw besluit. Een modelwissel kan ook een nieuwe toetsing van de bescherming vereisen, omdat een update de afgesproken beveiliging niet ongemerkt mag verzwakken.

Meer: [whitepaper Suveria, hoofdstuk 6](../whitepaper-suveria.md#s6) en [hoofdstuk 9](../whitepaper-suveria.md#s9).

## De beginselen van de assistent moeten openbaar zijn

We zullen de beginselen volgens welke de assistent antwoordt volledig publiceren bij elke softwareversie. In Suveria moet je altijd de volledige instructie van je assistent kunnen lezen: de vastgelegde beginselen volgens welke de assistent antwoordt. Ook de beschrijving van de werkwijze moet je kunnen lezen: hoe de assistent een taak in stappen verdeelt, geheugen gebruikt en antwoorden controleert.

De gezamenlijke infrastructuur moet alleen modellen en instellingen beschikbaar stellen die de openbare benchmarkproeven doorstaan. Boven dat minimum kies jij de werkwijze, van rustig gedachten ordenen tot een veeleisend gesprek waarin de assistent op hiaten in je redenering wijst.

We willen een open bibliotheek van getoetste instructies bijhouden die deelnemers in OmniForum (de gedeelde ruimte voor gesprek en besluiten) verbeteren en in de benchmark toetsen. Die bibliotheek bestaat nog niet.

Meer: [whitepaper Suveria, hoofdstuk 4](../whitepaper-suveria.md#s4) en [paragraaf 4.1](../whitepaper-suveria.md#s4-1).

## De assistent, de Persoonlijke Canon en de Gedachtetelescoop

Het geheugen van eerdere gesprekken moet met je toestemming werken en zichtbaar bewerkbaar zijn: elke vermelding kan worden verwijderd of verbeterd en de herkomst kan worden bekeken. De assistent maakt duidelijk onderscheid tussen een eigen suggestie en een standpunt dat iemand bewust als eigen standpunt heeft aanvaard.

De Persoonlijke Canon is de verzameling beginselen en waarden die jij opschrijft en als de jouwe aanvaardt. De Gedachtetelescoop moet je je vastgelegde overwegingen uit verschillende momenten laten zien en hoe die met de tijd veranderden, en een door jou aangewezen situatie naast je Canon leggen. Het idee ontstond uit het Overtonvenster, het bereik van ideeën dat op een bepaald moment in een samenleving aanvaardbaar wordt geacht. Voor één persoon is dat het bereik van gedachten dat die op een bepaald moment voor zichzelf toelaatbaar vindt; de Telescoop moet zo'n venster voor één persoon worden, uitsluitend voor die persoon.

Het model toont mogelijke verbanden samen met de bron van het aangehaalde beginsel en de interpretatie kan worden verbeterd of afgewezen. We maken geen morele puntenscores of openbare ranglijst. In de eerste versie werkt de Telescoop alleen met één door jou aangewezen situatie en volgt die je leven niet doorlopend.

Meer: [whitepaper Suveria, hoofdstuk 6](../whitepaper-suveria.md#s6) en [paragraaf 6.1](../whitepaper-suveria.md#s6-1).

## Grenzen: wat het model doet en wat niet

- **Crisis.** Als het gesprek over een bedreiging van leven of gezondheid gaat, moet de assistent informatie geven over beschikbare hulp, bijvoorbeeld alarmnummers, zonder iets buiten de privéomgeving te versturen.
- **Berichten van anderen.** Een bericht van een ander, bijvoorbeeld uit een aangesloten postvak, kan verborgen instructies bevatten; daarom scheiden we externe inhoud van jouw opdrachten: bij het ordenen ervan mag de assistent zonder jouw bevestiging niet zelfstandig berichten versturen, netwerkadressen openen of de Persoonlijke Canon veranderen.
- **Keuzes van de maker.** Het model draagt ook keuzes van de maker mee, bijvoorbeeld onderwerpen die het vermijdt; we toetsen die in de benchmark en beschrijven ze bij de modelkeuze.
- **Geen verborgen toegang.** We willen misbruik tegengaan zonder privégesprekken te lezen. We creëren geen verborgen toegang tot privé-inhoud.

Meer: [whitepaper Suveria, hoofdstuk 4](../whitepaper-suveria.md#s4), [hoofdstuk 3](../whitepaper-suveria.md#s3) en [hoofdstuk 6](../whitepaper-suveria.md#s6).

## Lees en vertel wat je ervan vindt

De cijfers, voetnoten en lijst van nog te beslissen kwesties staan in de [whitepaper over Suveria](../whitepaper-suveria.md) en de beoordelingswijze voor modellen in de [whitepaper over materiaal en benchmark](../whitepaper-materialy-i-benchmark.md). Als iets je aan het denken zet of onjuist lijkt, markeer dan dat fragment en gebruik de knop “Ik heb een opmerking” of schrijf naar salve@novusignis.org.
