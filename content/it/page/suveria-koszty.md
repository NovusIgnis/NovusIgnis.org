---
tytul: Quanto costa Suveria
opis: Per che cosa si deve pagare in Suveria, che cosa risulta da un calcolo datato e perché è una stima, non un listino
grupa: suveria
kolejnosc: 3
menu: Quanto costa
---
# Quanto costa Suveria

Questa pagina riguarda il tuo denaro: per che cosa si deve pagare in Suveria, come si compone il conto e che cosa risulta dai nostri calcoli. Suveria è oggi un progetto. Il servizio non esiste ancora, quindi non c'è nemmeno un prezzo. I numeri qui sotto provengono da un calcolo datato 29 ottobre 2026 (tranne la riga «Totale», che abbiamo sommato noi). È un calcolo sulla carta, non un listino.

Per saperne di più: [whitepaper di Suveria, capitolo 8](../whitepaper-suveria.md#s8).

## Per che cosa paghi

Il principio è semplice: paghi per ciò che usi realmente, insieme a una quota calcolata equamente dei costi comuni (quelli che non si possono attribuire a una sola persona, per esempio la sicurezza o la contabilità), vedi per che cosa paghi e sei tu a stabilire il limite delle tue spese. Il corrispettivo copre i costi e nulla di più. Tutto ciò che li supera è una donazione volontaria, mostrata separatamente.

Il conto ha due parti:

- **l'uso effettivo** nel ciclo considerato: calcolo, memoria, trasferimento dei dati;
- **una quota dei costi fissi attribuita in modo trasparente**, che mantiene l'infrastruttura pronta all'uso: sicurezza, pagamenti, contabilità, gestione, usura e sostituzione dell'hardware.

Vogliamo ripartire i costi comuni secondo una regola pubblica scelta nel progetto pilota: in proporzione all'uso oppure in parti uguali tra gli account attivi. Il costo stimato di un compito deve essere sempre consultabile e annunceremo la tua quota dei costi comuni prima del ciclo di fatturazione; tale quota rientra sempre nel tuo limite. Annunceremo ogni variazione di prezzo con il motivo e l'effetto su chi usa il servizio.

Per saperne di più: [whitepaper sui principi di funzionamento della fondazione, capitolo 3](../whitepaper-zasady-fundacji.md#s3) e [punto 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifesto, punto 6.1](../manifest.md#s6-1).

## Che cosa risulta dal calcolo

Per i calcoli abbiamo ipotizzato una persona con un uso esemplificativo: 20 domande al giorno, ogni risposta lunga circa 600 token (un token è un frammento di testo, all'incirca una parola breve), ogni giorno per 30 giorni. È un modello di carico da mettere alla prova, non una previsione. I prezzi provengono da listini pubblici, al netto delle imposte.

La prima versione userà molto probabilmente un'API confidenziale (se raccoglieremo fondi sufficienti, potrebbe funzionare fin dall'inizio su nostri server noleggiati): il modello di intelligenza digitale gira presso un fornitore esterno che dichiara di non leggere il contenuto delle conversazioni e noi verificheremo questa dichiarazione. A questo si aggiunge l'ambiente privato: una o due macchine confidenziali con il gateway, la memoria e i file di chi usa il servizio. Questo costo è fisso, perciò pesa di più quando il gruppo è piccolo.

| Per persona al mese, se Suveria fosse usata da (calcolo del 29.10.2026) | 30 persone | 100 persone | 1000 persone |
| --- | --- | --- | --- |
| Solo calcolo nell'API confidenziale | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Costo fisso dell'ambiente privato (170–340 USD al mese) | circa 6–11 USD | circa 1,70–3,40 USD | alcune decine di centesimi |

È una stima sulla carta: non comprende il lavoro delle persone, le revisioni di sicurezza, i pagamenti né una riserva per i guasti, e verificheremo nel progetto pilota se macchine di queste dimensioni siano sufficienti. Vogliamo mostrare separatamente il costo fisso e coprirlo con il budget di sostegno al progetto pilota, per esempio con donazioni destinate a Suveria. Non presumiamo di disporre già di questi fondi.

Per saperne di più: [whitepaper di Suveria, capitolo 7](../whitepaper-suveria.md#s7) e [punto 8.1](../whitepaper-suveria.md#s8-1); [whitepaper sui principi di funzionamento della fondazione, punto 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Da 30 persone a tutta l'umanità

Lo stesso profilo esemplificativo permette di calcolare quanto lavoro avrebbe il modello con numeri diversi di persone. Nella tabella, il «picco» è l'ora più carica della giornata, quando Suveria viene usata da persone in fusi orari diversi (circa 1,51 × la media).

| Persone attive | Domande al mese | Testo delle risposte al picco |
| --- | ---: | ---: |
| 30 | 18 000 | 6,3 token al secondo |
| 100 | 60 000 | 20,9 token al secondo |
| 1000 | 600 000 | 209 token al secondo |
| 100 mila | 60 milioni | 20 921 token al secondo |
| 1 milione | 600 milioni | 209 208 token al secondo |
| 1 miliardo | 600 miliardi | 209,2 milioni di token al secondo |
| 10 miliardi | 6 bilioni | 2,09 miliardi di token al secondo |

Quanto hardware serve? Il whitepaper propone un esperimento mentale. Se ciascuna di 10 miliardi di persone usasse Suveria in questo modo, con le prestazioni misurate per il modello DeepSeek-V4.1-Flash servirebbero circa 2,25 milioni di GPU B200 e circa 4 GW di potenza. Per un miliardo di persone sarebbero circa 225 mila GPU e 0,4 GW, e per un milione circa 225 GPU. Per confronto, all'inizio del 2026 Epoch AI stimava che nel mondo lavorassero per l'intelligenza digitale oltre 15 milioni di GPU equivalenti alle H100, che richiedevano oltre 10 GW di potenza. È una semplificazione: il profilo esemplificativo prevede un uso contenuto, mentre il lavoro intenso, i modelli più grandi e le immagini richiedono molte volte di più.

Non indichiamo un costo per persona per milioni di persone: su quella scala cambierebbero l'hardware, i prezzi e il modo di mantenere il servizio, quindi una cifra del genere sarebbe una congettura. Il calcolo del 29.10.2026 dice soltanto che, nelle nostre ipotesi, un'infrastruttura propria può diventare più economica di un'API confidenziale con un numero di persone attive compreso tra poco più di diecimila e alcune decine di migliaia.

Per saperne di più: [whitepaper di Suveria, capitolo 7](../whitepaper-suveria.md#s7).

## Perché calcoliamo in dollari

Indicheremo i prezzi dei servizi in dollari, perché la potenza di calcolo si acquista in questa valuta. Vogliamo accettare versamenti anche in altre valute, al tasso di cambio mostrato nel conto. Teniamo la contabilità della fondazione in złoty.

Per saperne di più: [whitepaper sui principi di funzionamento della fondazione, punto 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Pagamento anticipato, rimborso, arrotondamento

- **Pagamento anticipato.** Inserisci un unico importo ed esattamente quella somma arriva sul tuo saldo, indipendentemente dal metodo di pagamento. I pagamenti anticipati devono restare su un conto bancario separato; non li usiamo per coprire i costi della fondazione prima di aver fornito il servizio.
- **Limite.** Al momento del versamento stabilisci quanto vuoi spendere al massimo. Il limite deve funzionare come una barriera, non come un avviso a cose fatte. È un requisito da realizzare e verificare, non una funzione già operativa.
- **Rimborso.** Il saldo inutilizzato deve poter essere recuperato in qualsiasi momento, a regime con un solo pulsante; il termine del rimborso, i suoi eventuali costi, il versamento minimo e gli altri dettagli saranno definiti dal regolamento. Dopo la chiusura dell'account o del servizio, il saldo viene restituito automaticamente con lo stesso mezzo. Il saldo non ritirato non alimenta il budget della fondazione.
- **Arrotondamento.** Quando crei un account, chiediamo se vuoi arrotondare ogni conto per eccesso al dollaro intero o a un equivalente vicino nella valuta locale; la differenza confluisce come donazione nel budget comune. Chiediamo anziché selezionare l'opzione per qualcuno e puoi cambiare la decisione in qualsiasi momento con una sola impostazione.

Il conto mostra separatamente il corrispettivo del servizio e l'importo della donazione. Il termine del rimborso, il versamento minimo e gli altri dettagli saranno definiti dal regolamento, preparato prima di accettare il primo pagamento anticipato.

Per saperne di più: [whitepaper sui principi di funzionamento della fondazione, punto 3.2](../whitepaper-zasady-fundacji.md#s3-2) e [punto 3.3](../whitepaper-zasady-fundacji.md#s3-3); [whitepaper di Suveria, punto 8.3](../whitepaper-suveria.md#s8-3).

## Il confronto con gli abbonamenti

Il prezzo di un abbonamento sulle piattaforme commerciali riunisce di solito in un unico importo il costo dell'uso, il mantenimento degli account gratuiti, il marketing, la gestione e il profitto degli investitori, e chi usa il servizio non vede il peso di queste componenti. Il manifesto propone l'ipotesi che, senza questo ricarico nascosto, già con un numero relativamente ridotto di partecipanti regolari l'infrastruttura comune possa offrire più potenza di calcolo e intelligenza digitale per ogni dollaro speso rispetto ai servizi chiusi, con una privacy basata su misure di sicurezza verificabili.

Stato dell'ipotesi al 29 ottobre 2026: il calcolo ci avvicina a essa, ma non la conferma. L'elaborazione con confidenzialità dichiarata è già disponibile nei listini pubblici, quindi un piccolo gruppo può iniziare da essa a prezzo di costo e, nelle nostre ipotesi, un'infrastruttura propria può diventare più economica con un numero di persone attive compreso tra poco più di diecimila e alcune decine di migliaia. Non competiamo sul prezzo con i piani da 100–200 USD che, con un uso intenso di agenti digitali, offrono l'equivalente di migliaia di dollari ai prezzi di listino delle API. Proponiamo un addebito per l'uso effettivo con una privacy verificabile.

Per saperne di più: [manifesto, punto 2.4](../manifest.md#s2-4); [whitepaper di Suveria, punto 8.1](../whitepaper-suveria.md#s8-1).

## Che cosa cambierà il calcolo

Aggiorniamo il calcolo a ogni variazione significativa dei prezzi e dopo ogni prova e conserviamo le versioni precedenti. Saranno decisive tre cose, che verificheremo nelle prove:

- se la confidenzialità di questi servizi supera una verifica indipendente;
- se la qualità dei modelli disponibili è sufficiente per i compiti per cui le persone verranno in Suveria;
- qual è il profilo reale del traffico.

Vogliamo sviluppare l'infrastruttura per passi: prima un'API confidenziale e un ambiente privato in macchine confidenziali, poi il noleggio di nostre macchine confidenziali, quindi l'acquisto di hardware da collocare in un centro dati esterno e, in una prospettiva lontana, se dimostrerà un vantaggio, un edificio nostro. Ogni passo è giustificato da dati misurati e da una scheda decisionale con il costo completo, i rischi e le condizioni per tornare indietro. Oggi calcoliamo l'acquisto di un server soltanto come stima, non come offerta.

Per saperne di più: [whitepaper di Suveria, punto 8.1](../whitepaper-suveria.md#s8-1) e [punto 8.2](../whitepaper-suveria.md#s8-2).

## Leggi e dicci che cosa ne pensi

Nel [whitepaper di Suveria](../whitepaper-suveria.md#s8) trovi il calcolo completo con la tabella delle varianti e le fonti dei prezzi, mentre le regole del conto, dei pagamenti anticipati e dei rimborsi sono nel [whitepaper sui principi di funzionamento della fondazione](../whitepaper-zasady-fundacji.md#s3). Se qualcosa nei numeri o nei presupposti non ti torna, seleziona quel passo nel documento e usa il pulsante «Ho un'osservazione» oppure scrivi a salve@novusignis.org.
