---
tytul: Modelli di intelligenza digitale in Suveria
opis: Da dove prendiamo i modelli per Suveria, come li scegliamo, che cosa succede quando cambia il modello e quali principi pubblici deve seguire l'assistente
grupa: suveria
kolejnosc: 4
menu: Modelli
---
# Modelli di intelligenza digitale in Suveria

Un modello di intelligenza digitale è un programma che legge le tue parole e compone una risposta; su di esso deve funzionare l'assistente di Suveria. Questa pagina spiega da dove prendiamo i modelli, come li scegliamo, che cosa succede quando il modello cambia e quali principi l'assistente deve seguire in modo trasparente.

Suveria è oggi un progetto. Il diario dei risultati del whitepaper (situazione al 29 ottobre 2026) lo dice chiaramente: non abbiamo ancora avviato alcun modello in Suveria né svolto nessuna delle prove descritte. Tutto ciò che segue riguarda intenzioni e candidati, non un servizio funzionante.

Per saperne di più: [whitepaper di Suveria, capitolo 9](../whitepaper-suveria.md#s9).

## Perché modelli aperti

Il progetto si basa su modelli aperti, cioè resi disponibili a condizioni che permettono di eseguirli autonomamente. In questo modo la fondazione può renderli disponibili praticamente a prezzo di costo e concentrare il lavoro su un ambiente privato per usare modelli esistenti, con la possibilità di svilupparne in futuro anche di propri.

Per iniziare vogliamo usarli presso fornitori di calcolo confidenziale e, se i conti e le condizioni lo giustificheranno, sui nostri server. Il manifesto precisa che Suveria è «la nostra strada migliore verso un lavoro privato con l'intelligenza digitale, e non un fine in sé»: se i modelli troveranno posto sul proprio dispositivo o nascerà un modo migliore di protezione, una parte di questa strada diventerà superflua.

Per saperne di più: [manifesto, punto 3.1](../manifest.md#s3-1) e [whitepaper di Suveria, capitolo 6](../whitepaper-suveria.md#s6).

## Come scegliamo un modello

Suveria deve essere accessibile alle persone di tutto il mondo, nelle loro lingue. Per questo, nella scelta del modello, consideriamo:

- la qualità in molte lingue;
- la comprensione delle intenzioni;
- l'affidabilità;
- la licenza, cioè le condizioni alle quali chi ha creato il modello ne permette l'uso;
- il costo;
- la possibilità di eseguirlo nell'ambiente protetto che descriviamo nella pagina [Privacy e sicurezza](suveria-prywatnosc.md).

Scegliamo un modello più grande solo quando svolge chiaramente meglio compiti importanti per le persone. A questo deve contribuire il benchmark della fondazione, cioè un insieme di compiti e regole di valutazione che permette di verificare come si comportano i modelli; oggi è un programma di ricerca senza risultati.

Il whitepaper indica due candidati. Sono candidati da verificare, non una decisione: il primo modello e il livello di qualità accettabile restano da stabilire.

- **DeepSeek-V4.1-Flash.** Un modello con licenza MIT, che ne permette l'uso anche per i servizi. Il produttore dichiara 552 miliardi di parametri nella parte principale (i parametri sono numeri definiti durante l'addestramento del modello) e una memoria aggiuntiva chiamata Engram con 196 miliardi di parametri. Per ogni parola il modello usa soltanto 8–16 miliardi di questi parametri, perciò risponde rapidamente e a basso costo, anche se per eseguirlo servono almeno quattro GPU moderne. I parametri sono memorizzati in forma ridotta (quantizzazione). Questo risparmia memoria, ma può ridurre la qualità, quindi lo verificheremo sui nostri compiti.
- **Kimi K3.1 Pro.** Il produttore ha annunciato la pubblicazione dei pesi completi, cioè dei parametri, ma non ha ancora annunciato la licenza. Dopo la pubblicazione verificheremo, fra l'altro, le loro dimensioni, la licenza e la disponibilità presso fornitori di calcolo confidenziale e aggiungeremo il risultato al whitepaper con una data, anche se le condizioni risulteranno inadatte.

Per saperne di più: [whitepaper di Suveria, capitolo 6](../whitepaper-suveria.md#s6) e [whitepaper sui materiali e sul benchmark, capitolo 1](../whitepaper-materialy-i-benchmark.md#s1).

## Che cosa succede quando cambia il modello

Annunciamo in anticipo la sostituzione o il ritiro di un modello. La cronologia delle conversazioni resta con te: puoi scegliere un nuovo modello, esportare i dati oppure terminare il lavoro.

Nella conversazione deve essere visibile il momento del cambio di modello e il trasferimento del contesto privato a un nuovo modello richiede una tua decisione. Cambiare modello può anche richiedere una nuova verifica della protezione, perché un aggiornamento non può indebolire di nascosto le misure di sicurezza concordate.

Per saperne di più: [whitepaper di Suveria, capitolo 6](../whitepaper-suveria.md#s6) e [capitolo 9](../whitepaper-suveria.md#s9).

## I principi dell'assistente devono essere pubblici

Pubblicheremo integralmente, insieme a ogni versione, i principi secondo cui l'assistente risponde. In Suveria devi sempre poter leggere le istruzioni complete del tuo assistente, cioè i principi scritti secondo cui risponde, e la descrizione del suo modo di lavorare: come divide il compito in passi, usa la memoria e verifica le risposte.

L'infrastruttura comune deve rendere disponibili solo modelli e impostazioni che superino le prove pubbliche del benchmark. Oltre questo minimo, sei tu a scegliere lo stile di lavoro, dal riordino calmo dei pensieri a una conversazione impegnativa in cui l'assistente segnala le lacune nel ragionamento.

Vogliamo curare una biblioteca aperta di istruzioni verificate, che chi partecipa migliora in OmniForum (lo spazio comune di conversazione e decisione) e verifica nel benchmark. Questa biblioteca non esiste ancora.

Per saperne di più: [whitepaper di Suveria, capitolo 4](../whitepaper-suveria.md#s4) e [punto 4.1](../whitepaper-suveria.md#s4-1).

## L'assistente, il Canone Personale e il Telescopio del Pensiero

La memoria delle conversazioni precedenti deve funzionare con il tuo consenso ed essere apertamente modificabile: ogni voce si può eliminare o correggere e se ne può vedere l'origine. L'assistente distingue chiaramente un proprio suggerimento da una posizione che la persona ha consapevolmente riconosciuto come propria.

Il Canone Personale è la raccolta, scritta da te, dei principi e dei valori che riconosci come tuoi. Il Telescopio del Pensiero deve permettere di vedere la registrazione delle proprie riflessioni in momenti diversi e come siano cambiate nel tempo, e di confrontare una situazione che indichi con il Canone. L'idea nasce dalla finestra di Overton, cioè l'insieme delle idee considerate accettabili nella società in un dato momento. Per una singola persona è l'insieme dei pensieri che in un dato momento considera ammissibili per sé; il Telescopio deve essere una finestra del genere per una sola persona e soltanto per lei.

Il modello mostra possibili collegamenti insieme alla fonte del principio richiamato e la sua interpretazione si può correggere o rifiutare. Non creiamo punteggi di moralità né classifiche pubbliche. Nella prima versione il Telescopio lavora soltanto su una situazione che indichi e non segue la tua vita in modo continuo.

Per saperne di più: [whitepaper di Suveria, capitolo 6](../whitepaper-suveria.md#s6) e [punto 6.1](../whitepaper-suveria.md#s6-1).

## Limiti: che cosa fa il modello e che cosa no

- **Crisi.** Quando la conversazione riguarda un pericolo per la vita o la salute, l'assistente deve fornire informazioni sull'aiuto disponibile, per esempio i numeri di emergenza, senza inviare nulla fuori dall'ambiente privato.
- **Messaggi altrui.** Un messaggio altrui, per esempio proveniente da una casella di posta collegata, può contenere istruzioni nascoste, perciò separiamo i contenuti esterni dalle tue istruzioni: nel riordinarli, l'assistente non può autonomamente inviare messaggi, aprire indirizzi di rete o modificare il Canone Personale senza la tua conferma.
- **Le scelte di chi crea il modello.** Il modello porta con sé anche le scelte di chi lo ha creato, per esempio gli argomenti che evita; le verifichiamo nel benchmark e le descriviamo al momento della scelta del modello.
- **Senza accessi nascosti.** Vogliamo contrastare gli abusi senza leggere le conversazioni private. Non creiamo accessi nascosti ai contenuti privati.

Per saperne di più: [whitepaper di Suveria, capitolo 4](../whitepaper-suveria.md#s4), [capitolo 3](../whitepaper-suveria.md#s3) e [capitolo 6](../whitepaper-suveria.md#s6).

## Leggi e dicci che cosa ne pensi

Nel [whitepaper di Suveria](../whitepaper-suveria.md) trovi i numeri, le note e l'elenco delle questioni da risolvere, mentre il metodo di valutazione dei modelli è nel [whitepaper sui materiali e sul benchmark](../whitepaper-materialy-i-benchmark.md). Se qualcosa ti fa riflettere o sembra sbagliato, seleziona quel passo e usa il pulsante «Ho un'osservazione» oppure scrivi a salve@novusignis.org.
