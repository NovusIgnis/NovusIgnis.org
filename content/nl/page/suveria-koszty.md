---
tytul: Wat kost Suveria
opis: Waarvoor je in Suveria moet betalen, wat een gedateerde berekening oplevert en waarom dit een schatting is en geen prijslijst
grupa: suveria
kolejnosc: 3
menu: Hoeveel het kost
---
# Wat kost Suveria

Deze pagina gaat over je geld: waarvoor je in Suveria moet betalen, hoe de rekening wordt opgebouwd en wat onze berekeningen opleveren. Suveria is nu een ontwerp. De dienst bestaat nog niet, dus er is ook nog geen prijs. De cijfers hieronder komen uit een berekening van 29 oktober 2026 (behalve de rij “Totaal”, die we zelf hebben opgeteld). Het is een berekening op papier, geen prijslijst.

Meer: [whitepaper Suveria, hoofdstuk 8](../whitepaper-suveria.md#s8).

## Waarvoor je betaalt

Het beginsel is eenvoudig: je betaalt voor wat je werkelijk gebruikt, met een eerlijk berekend aandeel in de gezamenlijke kosten (kosten die niet aan één persoon kunnen worden toegeschreven, bijvoorbeeld beveiliging of boekhouding), je ziet waarvoor je betaalt en je bepaalt zelf je uitgavenlimiet. De vergoeding dekt alleen de kosten. Alles daarboven is een vrijwillige donatie die apart wordt vermeld.

De rekening heeft twee delen:

- **werkelijk gebruik** in een bepaalde cyclus: berekeningen, geheugen, gegevensoverdracht;
- **een openbaar toegewezen aandeel in de vaste kosten** die de infrastructuur beschikbaar houden: beveiliging, betalingen, boekhouding, ondersteuning, slijtage en vervanging van hardware.

We willen gezamenlijke kosten verdelen volgens een openbare regel die in de pilot wordt gekozen: evenredig aan het gebruik of gelijk over actieve accounts. De geschatte kosten van een taak moeten altijd te controleren zijn; je aandeel in de gezamenlijke kosten maken we vóór de afrekencyclus bekend en het blijft altijd binnen je limiet. Elke prijswijziging zullen we bekendmaken met de reden en de gevolgen voor gebruikers.

Meer: [whitepaper over de werkingsprincipes van de stichting, hoofdstuk 3](../whitepaper-zasady-fundacji.md#s3) en [paragraaf 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifest, paragraaf 6.1](../manifest.md#s6-1).

## Wat de berekening oplevert

Voor de berekeningen namen we een voorbeeldgebruiker: 20 vragen per dag, elk antwoord ongeveer 600 tokens lang (een token is een stukje tekst, ongeveer een kort woord), elke dag gedurende 30 dagen. Dit is een belastingsmodel voor een proef, geen voorspelling. De prijzen komen uit openbare prijslijsten, zonder belastingen.

De eerste softwareversie zal waarschijnlijk een vertrouwelijke API gebruiken (als we voldoende geld verzamelen, kan ze meteen op eigen gehuurde servers draaien): het model van digitale intelligentie draait bij een externe aanbieder die verklaart de gespreksinhoud niet te lezen; wij zullen die verklaring toetsen. Daarbij komt een privéomgeving: één of twee vertrouwelijke machines met de toegangspoort, het geheugen en de bestanden van gebruikers. Die kosten zijn vast en wegen daarom bij een kleine groep het zwaarst.

| Per persoon per maand als Suveria zou worden gebruikt door (berekening van 29-10-2026) | 30 personen | 100 personen | 1.000 personen |
| --- | --- | --- | --- |
| Alleen berekeningen via een vertrouwelijke API | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Vaste kosten van de privéomgeving (170–340 USD per maand) | ca. 6–11 USD | ca. 1,70–3,40 USD | enkele tientallen centen |

Het is een schatting op papier: werk van mensen, beveiligingsbeoordelingen, betalingen en een reserve voor storingen zijn niet inbegrepen; of machines van deze omvang volstaan, toetsen we in de pilot. We willen de vaste kosten apart tonen en dekken uit het ondersteuningsbudget voor de pilot, bijvoorbeeld uit donaties voor Suveria. We gaan er niet van uit dat we zulke middelen al hebben.

Meer: [whitepaper Suveria, hoofdstuk 7](../whitepaper-suveria.md#s7) en [paragraaf 8.1](../whitepaper-suveria.md#s8-1); [whitepaper over de werkingsprincipes van de stichting, paragraaf 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Van 30 personen tot de hele mensheid

Met dezelfde voorbeeldgebruiker kunnen we berekenen hoeveel werk het model bij verschillende aantallen mensen zou hebben. In de tabel is de “piek” het drukste uur van de dag, wanneer mensen uit verschillende tijdzones Suveria gebruiken (ca. 1,51 × het gemiddelde).

| Actieve personen | Vragen per maand | Antwoordtekst tijdens de piek |
| --- | ---: | ---: |
| 30 | 18.000 | 6,3 tokens per seconde |
| 100 | 60.000 | 20,9 tokens per seconde |
| 1.000 | 600.000 | 209 tokens per seconde |
| 100.000 | 60 miljoen | 20.921 tokens per seconde |
| 1 miljoen | 600 miljoen | 209.208 tokens per seconde |
| 1 miljard | 600 miljard | 209,2 miljoen tokens per seconde |
| 10 miljard | 6 biljoen | 2,09 miljard tokens per seconde |

Hoeveel hardware is dat? De whitepaper voert een gedachte-experiment uit. Als elk van 10 miljard mensen Suveria op deze manier zou gebruiken, zouden bij de voor DeepSeek-V4.1-Flash gemeten prestaties ongeveer 2,25 miljoen B200-kaarten en ongeveer 4 GW vermogen nodig zijn. Voor een miljard mensen zijn dat ongeveer 225.000 kaarten en 0,4 GW, en voor een miljoen ongeveer 225 kaarten. Ter vergelijking: begin 2026 schatte Epoch AI dat wereldwijd meer dan 15 miljoen H100-equivalente kaarten voor digitale intelligentie werken, die meer dan 10 GW vermogen nodig hebben. Dit is een vereenvoudiging: de voorbeeldgebruiker is zuinig en intensief werk, grotere modellen en beelden vragen een veelvoud daarvan.

We geven geen kosten per persoon voor miljoenen mensen: op die schaal zouden hardware, prijzen en de manier om de dienst in stand te houden veranderen, zodat zo'n getal giswerk zou zijn. De berekening van 29-10-2026 zegt alleen dat onder onze aannames eigen infrastructuur bij aantallen van ruim tienduizend tot enkele tienduizenden actieve mensen goedkoper kan worden dan een vertrouwelijke API.

Meer: [whitepaper Suveria, hoofdstuk 7](../whitepaper-suveria.md#s7).

## Waarom we in dollars rekenen

We zullen de dienstprijzen in dollars vermelden, omdat rekenkracht in die valuta wordt gekocht. We willen ook betalingen in andere valuta ontvangen tegen de koers die op de rekening staat. De stichting voert haar boekhouding in zloty's.

Meer: [whitepaper over de werkingsprincipes van de stichting, paragraaf 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Vooruitbetaling, terugbetaling, afronding

- **Vooruitbetaling.** Je voert één bedrag in en precies dat bedrag komt op je saldo, ongeacht de betaalwijze. Vooruitbetalingen moeten op een afzonderlijke bankrekening staan; vóór de dienst is geleverd, dekken we er geen kosten van de stichting mee.
- **Limiet.** Bij een storting bepaal je hoeveel je maximaal wilt besteden. De limiet moet als grens werken, niet als waarschuwing achteraf. Dit is een vereiste om te bouwen en te toetsen, geen werkende functie.
- **Terugbetaling.** Ongebruikt saldo moet op elk moment kunnen worden teruggevraagd, op termijn met één knop; het reglement zal de terugbetalingstermijn, eventuele kosten, de minimale storting en andere details bepalen. Na opzegging van het account of sluiting van de dienst wordt het saldo automatisch via dezelfde route teruggestort. Niet-opgevraagd saldo gaat niet naar het budget van de stichting.
- **Afronding.** Bij het aanmaken van een account vragen we of je elke rekening naar boven wilt afronden op een hele dollar of een vergelijkbaar bedrag in lokale valuta; het verschil gaat als donatie naar het gezamenlijke budget. We vragen het in plaats van de optie voor iemand te selecteren en de keuze kan op elk moment met één instelling worden veranderd.

De rekening toont de vergoeding voor de dienst en het donatiebedrag afzonderlijk. De terugbetalingstermijn, minimale storting en overige details worden bepaald door het reglement dat vóór de eerste vooruitbetaling wordt opgesteld.

Meer: [whitepaper over de werkingsprincipes van de stichting, paragraaf 3.2](../whitepaper-zasady-fundacji.md#s3-2) en [paragraaf 3.3](../whitepaper-zasady-fundacji.md#s3-3); [whitepaper Suveria, paragraaf 8.3](../whitepaper-suveria.md#s8-3).

## Hoe dit zich tot abonnementen verhoudt

De abonnementsprijs op commerciële platforms combineert meestal de gebruikskosten, het onderhoud van gratis accounts, marketing, bestuur en winst voor investeerders in één bedrag, zonder dat de gebruiker ziet welk deel van het bedrag naar elk onderdeel gaat. Het manifest stelt de hypothese dat gezamenlijke infrastructuur zonder die verborgen opslag al bij een betrekkelijk kleine groep vaste deelnemers meer rekenkracht en digitale intelligentie per uitgegeven dollar kan bieden dan gesloten diensten, met privacy op basis van toetsbare bescherming.

Stand van de hypothese op 29 oktober 2026: de berekening brengt ons dichterbij, maar bevestigt haar niet. Verwerking met verklaarde vertrouwelijkheid is al beschikbaar in openbare prijslijsten, zodat een kleine groep daarmee tegen kostprijs kan beginnen; onder onze aannames kan eigen infrastructuur bij aantallen van ruim tienduizend tot enkele tienduizenden actieve mensen goedkoper worden. Met abonnementen van 100–200 USD die bij intensief werk met agents het equivalent van duizenden dollars tegen API-catalogusprijzen bieden, concurreren we niet op prijs. We stellen afrekening van werkelijk gebruik voor met privacy die kan worden getoetst.

Meer: [manifest, paragraaf 2.4](../manifest.md#s2-4); [whitepaper Suveria, paragraaf 8.1](../whitepaper-suveria.md#s8-1).

## Wat de berekening zal beïnvloeden

We werken de berekening bij na elke wezenlijke prijswijziging en elke proef en bewaren eerdere versies. Drie dingen zullen beslissend zijn en die toetsen we in de proeven:

- of de vertrouwelijkheid van deze diensten onafhankelijke toetsing doorstaat;
- of de kwaliteit van beschikbare modellen volstaat voor de taken waarvoor mensen naar Suveria komen;
- wat het werkelijke verkeersprofiel is.

We willen de infrastructuur stapsgewijs ontwikkelen: eerst een vertrouwelijke API en een privéomgeving in vertrouwelijke machines, daarna eigen vertrouwelijke machines huren, vervolgens hardware voor een extern datacentrum kopen en op lange termijn, als dat voordeel blijkt te bieden, een eigen gebouw. Elke stap wordt onderbouwd met gemeten gegevens en een besluitkaart met de volledige kosten, risico's en voorwaarden voor terugtrekking. De aankoop van een server nemen we nu alleen als schatting op, niet als offerte.

Meer: [whitepaper Suveria, paragraaf 8.1](../whitepaper-suveria.md#s8-1) en [paragraaf 8.2](../whitepaper-suveria.md#s8-2).

## Lees en vertel wat je ervan vindt

De volledige berekening met een tabel van varianten en prijsbronnen staat in de [whitepaper over Suveria](../whitepaper-suveria.md#s8) en de regels voor de rekening, vooruitbetalingen en terugbetalingen in de [whitepaper over de werkingsprincipes van de stichting](../whitepaper-zasady-fundacji.md#s3). Als er volgens jou iets niet klopt in de cijfers of aannames, markeer dan dat fragment in het document en gebruik de knop “Ik heb een opmerking” of schrijf naar salve@novusignis.org.
