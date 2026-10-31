---
tytul: Privacy en beveiliging van Suveria
opis: Tegen wie Suveria gesprekken moet beschermen, hoe een bericht door het systeem gaat, wie de sleutels heeft en hoe we toetsen of de bescherming werkt
grupa: suveria
kolejnosc: 2
menu: Privacy en beveiliging
---
# Privacy en beveiliging van Suveria

Deze pagina is voor mensen die willen weten hoe de privacybescherming in Suveria moet werken voordat ze hun gesprekken eraan toevertrouwen. Ze verdiept de pagina [Wat is Suveria](suveria.md) en verwijst bij elk onderdeel naar de whitepaper.

Eén beginsel ordent het geheel: privacy mag niet berusten op vertrouwen in de goede bedoelingen van de stichting of serverbeheerders, maar op bescherming waarvan de werking onafhankelijk kan worden getoetst. Het manifest zegt het zo: “Elke veiligheidsbelofte moet bewijs in code en silicium hebben, niet alleen in onze woorden.” Je eigen apparaten moeten de belangrijkste bewaarplek voor gesprekken zijn en we creëren geen verborgen toegang tot privé-inhoud.

Suveria is nu een ontwerp. Alles hieronder beschrijft hoe ze moet werken; geen van de proeven die dit moeten bevestigen, is al uitgevoerd.

Meer: [manifest, paragraaf 2.2](../manifest.md#s2-2) en [paragraaf 3.1](../manifest.md#s3-1).

## Tegen wie de bescherming bedoeld is en tegen wie niet

We beschermen de inhoud van gesprekken en bestanden, de geschiedenis en het geheugen van de assistent, sleutels (geheime tekenreeksen die versleutelde gegevens openen), factureringsgegevens en metadata: informatie over de verbinding zelf, zoals het tijdstip, het netwerkadres en de grootte van het verzoek.

Een vertrouwelijke omgeving is een door hardware afgeschermd deel van een server waarin zelfs de beheerder niet kan kijken. Of dat werkelijk zo is, moet worden bevestigd door attestatie: een door hardware ondertekend bewijs van welke software op de server draait en in welke beschermingsmodus. Een vertrouwelijke API is zo'n omgeving bij een externe aanbieder waarmee onze toepassing verbinding maakt (een API is een verbinding tussen programma's). De tabel beschrijft de beoogde werking, die nog niet in een proef is getoetst:

| Tegen wie de bescherming bedoeld is | Model op je apparaat | Vertrouwelijke omgeving op servers | Vertrouwelijke API van een externe aanbieder |
| --- | --- | --- | --- |
| Beheerder van de aanbieder | niet van toepassing: verwerking op het apparaat | moet beschermen: hardwarematige afscherming | verklaring van de aanbieder, te toetsen |
| Netwerkwaarnemer | niet van toepassing zonder netwerk; verkeer van integraties moet worden beoordeeld | gedeeltelijke bescherming: inhoud versleuteld, metadata vereisen afzonderlijke maatregelen | gedeeltelijke bescherming als de verbindingssleutel aan de attestatie is gebonden |
| Iemand met fysieke toegang tot de server | niet van toepassing; toegang tot het apparaat is bepalend | beschermt niet: in een extern datacentrum heeft de aanbieder toegang; bij eigen hardware zichtbare fysieke controle | beschermt niet: de aanbieder heeft toegang |
| Stichting | niet van toepassing: de stichting neemt niet aan de verwerking deel | moet beschermen: de afscherming geldt ook tegenover ons en jij hebt de opslagsleutels | moet de inhoud beschermen: de toegangspoort, ons onderdeel dat verzoeken afrekent, zonder inzage in de inhoud; waar de versleuteling eindigt, tonen we vóór de pilot |

Legenda: “moet beschermen” betekent beoogde bescherming; “gedeeltelijke bescherming” beschermt de inhoud, maar niet alles eromheen; “beschermt niet” benoemt de grens rechtstreeks; “verklaring van de aanbieder, te toetsen” betekent dat we de bescherming pas na eigen verificatie bevestigen. De beheerder van de aanbieder beheert de servers waarop het model draait; een netwerkwaarnemer ziet het verkeer tussen je apparaat en de server, maar de inhoud is onderweg versleuteld; iemand met fysieke toegang kan de serverbehuizing openen; de stichting zijn wij als beheerder van de dienst.

Drie grenzen zijn meteen van belang. Vertrouwelijke gegevensverwerking herstelt geen besmette telefoon of computer. Ze beschermt niet tegen iedereen met fysieke toegang tot de server: in 2025 bouwden onderzoekers voor minder dan duizend dollar een apparaat waarmee bij fysieke toegang tot een server het hardwarebewijs kan worden vervalst. De bescherming op servers berust ook op de sleutels van de processorfabrikant, die eerlijk moet handelen.

Meer: [whitepaper Suveria, hoofdstuk 2](../whitepaper-suveria.md#s2) en [paragraaf 2.3](../whitepaper-suveria.md#s2-3).

## Hoe een bericht door het systeem gaat

Suveria moet bestaan uit een toepassing op je apparaat, een toegangspoort (ons systeemonderdeel dat verzoeken afrekent en de uitgavenlimiet bewaakt), een vertrouwelijke omgeving met het model, opslag van versleutelde kopieën en een optionele tussenpersoon die je adres verbergt.

In de beoogde variant moet één bericht de volgende route afleggen:

1. De toepassing haalt de beschrijving van de goedgekeurde softwareversie op en controleert de attestatie van de server.
2. Ze vergelijkt dat bewijs met een openbaar beleid. De sleutel waarmee de toepassing het bericht versleutelt, moet aan de attestatie gebonden zijn.
3. Pas na een geslaagde controle maakt ze een versleutelde verbinding. Een afwijking verhindert de verzending van gegevens; overstappen op een andere variant vereist je bewuste keuze.
4. De omgeving verwerkt het verzoek met beperkte toegang tot het netwerk en hulpmiddelen, geeft het resultaat terug en verwijdert werkgegevens volgens het gepubliceerde beleid.
5. Het gesprek of geheugen wordt alleen opgeslagen voor zover jij dat kiest.

Attestatie helpt vaststellen wat er is gestart, maar bewijst op zichzelf niet dat die code veilig is; daarvoor zijn codebeoordelingen en de mogelijkheid van onafhankelijke toetsing nodig. Vóór de pilot zullen we in de toepassing laten zien waar de door je apparaat gecontroleerde versleuteling eindigt en of de toegangspoort de inhoud ziet.

We zijn extra voorzichtig wanneer je bronnen met berichten van andere mensen aansluit, bijvoorbeeld een postvak. Een bericht van een ander kan verborgen instructies bevatten die het model ertoe proberen te brengen privégeheugen vrij te geven. Daarom mag de assistent zonder menselijke bevestiging niet zelfstandig berichten versturen, netwerkadressen openen of de Persoonlijke Canon (je verzameling beginselen en waarden) veranderen.

Bij de start van de dienst publiceren we een overzicht van alle soorten gegevens over de werking van de dienst die we verzamelen, met het doel en de bewaartermijn. Gegevens buiten dat overzicht verzamelen we niet.

Meer: [whitepaper Suveria, hoofdstuk 3](../whitepaper-suveria.md#s3).

## Je sleutels

De sleutels tot privécontainers, versleutelde verzamelingen gegevens, blijven onder jouw controle. De stichting bewaart geen sleutels of delen ervan en kan dus geen toegang voor je herstellen of je gegevens afgeven. Herstel van een account bij de beheerder ontgrendelt de inhoud niet.

Verlies van alle kopieën van de sleutel kan blijvend gegevensverlies betekenen. Daarom overwegen we herstelmethoden die gecombineerd kunnen worden: een tweede apparaat met toegang, een sleutel op papier of in een wachtwoordbeheerder, een hardwaresleutel of het verdelen van de sleutel over enkele vertrouwde personen, van wie niemand alleen de gegevens kan lezen. Voor de start adviseren we een tweede apparaat en een sleutel op papier. Elk mechanisme toetsen we door te proberen de gegevens te herstellen.

Meer: [whitepaper Suveria, paragraaf 2.2](../whitepaper-suveria.md#s2-2).

## Wat onzichtbaar is maar toch iets verraadt: het verzendritme

Het antwoord komt in pakketten: dat zijn porties gegevens. Versleuteling verbergt de inhoud, maar niet de lengte of het ritme ervan. Dit is een zijkanaal: informatie lekt via de manier van verzenden in plaats van via de inhoud. Onderzoek uit 2024–2025 liet zien dat een netwerkwaarnemer daaruit het onderwerp en soms de inhoud van een gesprek kan reconstrueren. Daarom willen we in de vertrouwelijke modus het antwoord in porties van vaste grootte en met een vast ritme verzenden; dat kost enige vertraging en bandbreedte.

Meer: [whitepaper Suveria, hoofdstuk 3](../whitepaper-suveria.md#s3).

## Controleerbare softwareversies

Vertrouwen in de software moet niet van één persoon of alleen van de stichting afhangen. Iedereen kan de toepassing zelf uit de gepubliceerde code bouwen en toetsen of het resultaat identiek is aan wat die installeert. Minstens twee onafhankelijke partijen van buiten de stichting moeten de softwareversie reproduceren en de overeenkomst openbaar bevestigen; totdat we die vinden, markeren we de softwareversie als niet door derden bevestigd.

We ontwerpen de volledige bescherming voor de geïnstalleerde toepassing. In de browser levert de beheerder telkens de code die de server controleert; daarom zal de browserversie haar lagere beschermingsniveau duidelijk beschrijven.

Meer: [whitepaper Suveria, hoofdstuk 3](../whitepaper-suveria.md#s3).

## Meerdere grafische kaarten

Het model dat we willen draaien, past niet op één grafische kaart, zodat gegevens ook tussen kaarten stromen. De bescherming moet zowel voor de kaarten zelf als voor de verbindingen ertussen worden getoetst; het commerciële label “secure” vervangt dat niet. We vergelijken het aanbod van een aanbieder pas na een proef met onze eigen toepassing.

Meer: [whitepaper Suveria, hoofdstuk 5](../whitepaper-suveria.md#s5).

## Hoe we toetsen of het werkt

De belangrijkste proef: een team met beheerdersrechten buiten de vertrouwelijke omgeving (toegangspoort, schijven, netwerk, logboeken) probeert de gesprekken van testaccounts te lezen, waarin geheime tekenreeksen zijn verborgen. Als wie dan ook ze achterhaalt, ook wij, is de proef mislukt.

Voordat we een softwareversie vertrouwelijk noemen, zullen we onder meer de juiste attestatie documenteren, de weigering gegevens te verzenden na vervanging van code of sleutel, de afwezigheid van inhoud in logboeken en het verwijderen en herstellen. Resultaten, ook de mislukte, komen in het resultatenlogboek. Stand op 29 oktober 2026: we hebben nog geen van de beschreven proeven uitgevoerd.

We willen de proeven openlijk uitvoeren. Als je werkt aan beveiliging, cryptografie, infrastructuur of toepassingen, of kritisch naar het ontwerp wilt kijken, schrijf dan naar salve@novusignis.org met het onderwerp “[Doe mee] Proeven met Suveria”.

Meer: [whitepaper Suveria, hoofdstuk 9](../whitepaper-suveria.md#s9).

## Lees en vertel wat je ervan vindt

Het volledige overzicht van varianten en bedreigingen, de bescherming van de toepassing en de lijst van nog te beslissen kwesties staan in de [whitepaper over Suveria](../whitepaper-suveria.md). Als iets je aan het denken zet of onjuist lijkt, markeer dan het fragment in het document en gebruik de knop “Ik heb een opmerking” of schrijf naar salve@novusignis.org.
