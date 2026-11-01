---
tytul: Wat is Suveria
opis: De privéruimte om met digitale intelligentie te werken die de stichting ontwerpt: wat mogelijk moet worden, waartegen ze moet beschermen en waar ze nu staat
grupa: suveria
kolejnosc: 1
menu: Wat is Suveria
---
# Wat is Suveria

Deze pagina legt in het kort uit wat Suveria moet worden, voor wie ze wordt ontwikkeld en waar ze nu staat. Bij elk deel vind je een link naar de whitepaper over Suveria als je meer wilt weten.

Suveria moet een privéruimte op internet worden waar iemand met digitale intelligentie praat, aan eigen materiaal werkt en naar eerdere gedachten terugkeert, zoals thuis achter een gesloten deur. Stichting Novus Ignis ontwerpt deze ruimte voor mensen uit alle delen van de wereld.

Suveria is nu een ontwerp. Ze wordt ontwikkeld zodat het mogelijk wordt met digitale intelligentie over gezondheid, relaties, werk, geld en levensplannen te praten zonder vrees dat zo'n intieme inkijk ooit te gelde wordt gemaakt of wordt gebruikt om iemand te beïnvloeden. De eerste versie richten we op mensen voor wie controleerbare privacy een reden is om voor Suveria te kiezen.

Meer: [whitepaper over Suveria, hoofdstuk 1](../whitepaper-suveria.md#s1).

## Wat we mogelijk willen maken

In Suveria willen we het mogelijk maken om:

- over persoonlijke en professionele zaken te praten en daarbij te zien waar het gesprek wordt verwerkt en wie het kan zien;
- aan eigen documenten en bestanden te werken en de resultaten op te slaan en in open formaten naar elders mee te nemen;
- gesprekken, bestanden en het geheugen van de assistent vooral op eigen apparaten te bewaren, versleuteld met een sleutel onder jouw controle;
- met eigen toestemming het geheugen van eerdere gesprekken te gebruiken en een Persoonlijke Canon op te bouwen, een verzameling eigen beginselen en waarden;
- een werkwijze te kiezen, van een model op het eigen apparaat tot een vertrouwelijke omgeving op een server, met kennis van waartegen elke werkwijze beschermt;
- voor werkelijk gebruik te betalen, met een zelf ingestelde uitgavenlimiet;
- een gedachte privé uit te werken en daarna bewust in te brengen in het gezamenlijke gesprek in Omniforum, de openbare ruimte voor gesprek en besluiten.

Al op de eerste dag moet er een rustig gevoel van thuiskomen zijn. We willen ook het meenemen van eigen notities en gespreksarchieven uit andere diensten voor digitale intelligentie mogelijk maken. Gebruik van Suveria is geen toestemming om gesprekken voor modeltraining te gebruiken.

Meer: [whitepaper over Suveria, hoofdstuk 1](../whitepaper-suveria.md#s1).

## Waartegen ze beschermt en wat er nog niet is

De bescherming moet berusten op onafhankelijk controleerbare beveiliging, in plaats van vertrouwen in de stichting, ook in ons als beheerders van de infrastructuur. Zo'n controle heeft nog niet plaatsgevonden.

We vergelijken verschillende werkwijzen, omdat elke werkwijze tegen iets anders beschermt:

- **Een model op je eigen apparaat.** Het gesprek verlaat je telefoon of computer niet, tenzij de assistent integraties met onlinediensten gebruikt; belangrijk zijn de staat van het apparaat, de bevoegdheden van de toepassing en wie er fysiek toegang toe heeft.
- **Een vertrouwelijke omgeving op servers.** De server heeft een door hardware afgeschermde zone waar zelfs de beheerder niet in kan kijken; daar leest het model de inhoud. De hardware moet dat met een digitale handtekening bevestigen (dit is attestatie: een bevestiging van welke software op de externe machine draait en in welke beschermingsmodus). Daarbij moet de processorfabrikant worden vertrouwd. Dit is de beoogde optie.
- **Een vertrouwelijke API van een externe aanbieder.** Een API is de verbinding waarmee onze toepassing het gesprek naar een model bij een andere aanbieder stuurt. De eerste versie zal waarschijnlijk een vertrouwelijke API gebruiken; als we vóór de start voldoende middelen verzamelen om eigen servers in een vertrouwelijke omgeving te huren, kan ze meteen daarop draaien. Vertrouwelijkheid is hier aanvankelijk een verklaring van de aanbieder die we zullen toetsen; totdat de proeven een positief resultaat geven, markeren we deze optie als bescherming op basis van een verklaring, niet als vertrouwelijke bescherming.
- **Een gewone API van de modelaanbieder.** De aanbieder heeft toegang tot de inhoud; dit is niet de standaardoptie voor de privéruimte Suveria.

Vertrouwelijke gegevensverwerking herstelt geen geïnfecteerde computer en beschermt niet tegen iedereen die fysiek toegang tot de server heeft. Geen enkele optie krijgt het label “volledige privacy” voordat de concrete configuratie is gecontroleerd. Bij elk gesprek moet zichtbaar zijn met welke optie je werkt. Een wijziging daarvan vereist je bewuste beslissing.

Meer: [whitepaper over Suveria, hoofdstuk 2](../whitepaper-suveria.md#s2) en [paragraaf 2.3](../whitepaper-suveria.md#s2-3). Zie ook: [Privacy en veiligheid](suveria-prywatnosc.md).

## Modellen

Het ontwerp berust op open modellen die zelfstandig kunnen worden gedraaid. Bij de modelkeuze letten we onder meer op kwaliteit in veel talen, betrouwbaarheid, licentie, kosten en de mogelijkheid het model binnen de vereiste beschermingsarchitectuur te draaien.

We kondigen een modelwijziging of uitfasering vooraf aan. Je gespreksgeschiedenis blijft bij jou: je kunt een opvolgend model kiezen, je gegevens exporteren of stoppen. In het gesprek moet zichtbaar zijn wanneer het model verandert.

Meer: [whitepaper over Suveria, hoofdstuk 6](../whitepaper-suveria.md#s6).

## Hoeveel het kost

Het manifest stelt de hypothese dat gezamenlijke infrastructuur per dollar meer rekenkracht en digitale intelligentie kan bieden dan gesloten diensten. De whitepaper werkt dit uit in een berekening van 29 oktober 2026: bij het aangenomen gebruiksprofiel kost een vertrouwelijke API met verklaarde vertrouwelijkheid circa 0,70–1,25 USD per persoon per maand voor alleen het rekenwerk. Daar komen de vaste kosten van de privéomgeving bij, die bij weinig deelnemers het zwaarst wegen: bij 30 deelnemers circa 6–11 USD per persoon per maand.

Dit is een schatting op papier, geen prijslijst van Suveria: de berekening omvat geen menselijke arbeid, veiligheidsbeoordelingen, betalingen of reserve voor storingen. De stand van de hypothese op die datum: de berekening brengt ons dichterbij, maar bevestigt haar niet.

Meer: [whitepaper over Suveria, hoofdstuk 8](../whitepaper-suveria.md#s8). Zie ook: [Hoeveel het kost](suveria-koszty.md).

## Stand van het werk

De whitepaper houdt een resultatenlogboek bij. De stand op 29 oktober 2026: we hebben nog geen van de beschreven proeven uitgevoerd, geen grafische kaarten gehuurd en geen model in Suveria gestart. We plannen de eerste meting op één grafische kaart voor vertrouwelijke gegevensverwerking met een kleiner model.

De belangrijkste proef: een team met beheerdersbevoegdheden probeert de gesprekken van testaccounts uit te lezen waarin geheime tekenreeksen zijn verstopt. Als iemand de geheime tekenreeksen uitleest, ook wijzelf, is de proef mislukt.

We willen de proeven open uitvoeren. Werk je in beveiliging, cryptografie, infrastructuur of toepassingen, of wil je kritisch naar het ontwerp kijken? Schrijf naar salve@novusignis.org met als onderwerp “[Doe mee] Proeven met Suveria”.

Meer: [whitepaper over Suveria, hoofdstuk 9](../whitepaper-suveria.md#s9) en [paragraaf 8.2](../whitepaper-suveria.md#s8-2).

## Waarom Suveria een weg is, geen doel

Het manifest zegt het duidelijk:

> Suveria is nu onze beste weg naar privéwerk met digitale intelligentie, geen doel op zich. Als modellen op je eigen apparaat passen of er een betere beschermingsmethode ontstaat, wordt een deel van die weg overbodig. Dat beschouwen we als goed nieuws.

Meer: [manifest, paragraaf 3.1](../manifest.md#s3-1).

## Lees en vertel wat je denkt

De volledige beschrijving, met een tabel van beschermingsopties, kostenberekening en lijst van open vragen, vind je in de [whitepaper over Suveria](../whitepaper-suveria.md). Als iets je aan het denken zet of onjuist lijkt, markeer dat fragment in het document en gebruik de knop “Ik heb een opmerking” of schrijf naar salve@novusignis.org.
