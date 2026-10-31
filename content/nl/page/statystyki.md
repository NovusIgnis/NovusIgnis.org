---
tytul: Websitestatistieken
opis: Hoe vaak onze website en documenten worden gelezen, als totalen uit serverlogboeken geteld, zonder analysescripts en cookies
grupa: skroty
kolejnosc: 11
menu: Websitestatistieken
---
# Websitestatistieken

We willen weten hoe de belangstelling voor de stichting verandert en welke teksten het meest worden gelezen, en willen dat openbaar tonen. We tellen dit op de eenvoudigste manier: uit de serverlogboeken, waarin elke opvraging van een pagina toch al wordt vastgelegd. De website heeft geen analysescripts, cookies of iets anders dat je bij een volgend bezoek herkent.

**Stand op 31 oktober 2026.** De website gaat over op een hostingpakket dat serverlogboeken beschikbaar stelt. We beginnen de statistieken vanaf november 2026 te tellen; de regels hieronder gelden vanaf de eerste getelde maand.

## Wat we tellen

- **Paginaweergaven:** hoe vaak elke pagina en elk document is opgevraagd, afzonderlijk in het Pools en Engels.
- **Bestandsdownloads:** bijvoorbeeld `llms-full.txt`, het manifest en de whitepapers in één bestand.
- **Verzoeken van bots** in vier groepen: zoekmachines; bots van bedrijven die modellen van digitale intelligentie bouwen; modellen die de website op verzoek van een mens lezen, bijvoorbeeld wanneer iemand een chat vraagt het manifest te lezen; andere bots.
- **Bestanden voor modellen:** hoe vaak modelbots `llms.txt` en `llms-full.txt` hebben opgehaald.

## Wat we niet vastleggen

- IP-adressen, volledige browserbeschrijvingen of iets anders waarmee een afzonderlijke persoon kan worden herkend.
- De bezoekgeschiedenis van één persoon: we voegen paginaweergaven niet samen tot bezoeken of profielen.
- Gegevens van andere websites en diensten.

Daarom weten we niet hoeveel mensen ons hebben bezocht, alleen hoe vaak pagina's zijn opgevraagd. Eén persoon kan een pagina verschillende keren openen en sommige bots doen zich als gewone browsers voor; de cijfers zijn dus benaderingen.

## Hoe we tellen

Elke week halen we het serverlogboek op uit het beheerpaneel van Infomaniak, dat de website host, omdat logboeken daar maar enkele dagen worden bewaard. Aan het einde van de maand telt het script `tools/statystyki.mjs` daaruit alleen de hierboven genoemde totalen en slaat die zonder IP-adressen of browserbeschrijvingen op. De opgehaalde kopieën van logboeken bewaren we hoogstens tot het einde van de maand en verwijderen we meteen na het tellen. De regels voor gegevensverwerking staan op de pagina [Je gegevens](twoje-dane.md).

## Resultaten

{{statystyki}}
