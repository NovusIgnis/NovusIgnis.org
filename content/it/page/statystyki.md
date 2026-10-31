---
tytul: Statistiche del sito
opis: Quante volte vengono letti il nostro sito e i documenti, con conteggi aggregati dai log del server, senza script di analisi né cookie
grupa: skroty
kolejnosc: 11
menu: Statistiche del sito
---
# Statistiche del sito

Vogliamo sapere come cambia l'interesse per la fondazione e quali testi vengono letti più spesso e vogliamo mostrarlo apertamente. Lo contiamo nel modo più semplice: dai log del server, che registra comunque ogni richiesta di una pagina. Il sito non ha script di analisi, cookie né nulla che possa riconoscerti alla visita successiva.

**Situazione al 31 ottobre 2026.** Il sito sta passando a un piano di hosting che rende disponibili i log del server. Iniziamo a calcolare le statistiche da novembre 2026; le regole qui sotto valgono dal primo mese conteggiato.

## Che cosa contiamo

- **Visualizzazioni delle pagine:** quante volte è stata richiesta ogni pagina e ogni documento, separatamente in polacco e in inglese.
- **Download dei file:** per esempio `llms-full.txt`, cioè il manifesto e i whitepaper in un unico file.
- **Accessi dei bot** in quattro gruppi: motori di ricerca; bot delle aziende che costruiscono modelli di intelligenza digitale; modelli che leggono il sito su richiesta di una persona, per esempio quando qualcuno chiede alla propria chat di leggere il manifesto; altri bot.
- **File per i modelli:** quante volte i bot dei modelli hanno scaricato `llms.txt` e `llms-full.txt`.

## Che cosa non registriamo

- Indirizzi IP, descrizioni complete dei browser o qualsiasi altra cosa che permetta di riconoscere una singola persona.
- La cronologia degli accessi di una persona: non raggruppiamo le visualizzazioni in visite né in profili.
- Dati di altri siti e servizi.

Per questo non sappiamo quante persone ci abbiano visitato, ma solo quante volte siano state richieste le pagine. Una persona può aprire una pagina più volte e alcuni bot si presentano come normali browser, quindi i numeri sono approssimativi.

## Come contiamo

Ogni settimana scarichiamo il log del server dal pannello di Infomaniak, l'azienda che ospita il sito, perché i log vi sono conservati soltanto per pochi giorni. Alla fine del mese lo script `tools/statystyki.mjs` ne ricava soltanto i totali elencati sopra e li salva senza indirizzi IP né descrizioni dei browser. Conserviamo le copie scaricate dei log al massimo fino alla fine del mese e le eliminiamo subito dopo il conteggio. La pagina [I tuoi dati](twoje-dane.md) descrive le regole del trattamento dei dati.

## Risultati

{{statystyki}}
