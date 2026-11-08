---
tytul: Che cos'è Suveria
opis: Uno spazio privato per lavorare con l'intelligenza digitale progettato dalla fondazione: che cosa deve rendere possibile, da che cosa deve proteggere e a che punto è oggi
grupa: suveria
kolejnosc: 1
menu: Che cos'è Suveria
---
# Che cos'è Suveria

Questa pagina spiega in breve che cosa deve essere Suveria, per chi nasce e a che punto è. In ogni parte troverai un link al whitepaper di Suveria, quando vorrai saperne di più.

Suveria deve essere uno spazio privato in internet in cui la persona conversa con l'intelligenza digitale, lavora sui propri materiali e torna ai pensieri precedenti, come a casa propria dietro una porta chiusa. La Fondazione Novus Ignis la progetta pensando alle persone di ogni parte del mondo.

Oggi Suveria è un progetto. Nasce per permettere di parlare con l'intelligenza digitale di salute, relazioni, lavoro, denaro e progetti di vita senza il timore che una conoscenza così intima della persona venga un giorno monetizzata o usata per influenzarla. Il primo rilascio si rivolge a persone per cui una privacy verificabile è un motivo di scelta.

Per saperne di più: [whitepaper di Suveria, capitolo 1](../whitepaper-suveria.md#s1).

## Che cosa vogliamo rendere possibile

In Suveria vogliamo che si possa:

- conversare di questioni personali e professionali, vedendo dove viene elaborata la conversazione e chi può vederla;
- lavorare sui propri documenti e file, salvare i risultati e trasferirli altrove in formati aperti;
- conservare conversazioni, file e memoria dell'assistente soprattutto sui propri dispositivi, cifrati con una chiave sotto il tuo controllo;
- con il proprio consenso, usare la memoria delle conversazioni precedenti e costruire un Canone Personale, cioè una raccolta dei propri principi e valori;
- scegliere un modo di lavorare, dal modello sul proprio dispositivo all'ambiente confidenziale su un server, sapendo da che cosa protegge ciascuno;
- pagare per l'uso effettivo, con un limite di spesa stabilito autonomamente;
- perfezionare un pensiero in privato e poi portarlo consapevolmente nella conversazione comune in OmniForum, cioè nello spazio pubblico di conversazione e decisione.

Già il primo giorno deve dare la sensazione tranquilla di essere a casa propria. Vogliamo anche permettere di trasferire i propri appunti e archivi di conversazioni da altri servizi di intelligenza digitale. Usare Suveria non significa acconsentire all'uso delle conversazioni per addestrare i modelli.

Per saperne di più: [whitepaper di Suveria, capitolo 1](../whitepaper-suveria.md#s1).

## Da che cosa protegge e che cosa ancora non c'è

La protezione deve basarsi su misure di sicurezza verificabili in modo indipendente e non sulla fiducia nella fondazione, compresa la fiducia in noi come persone che gestiscono l'infrastruttura. A oggi non è ancora stata eseguita alcuna verifica di questo tipo.

Confrontiamo diversi modi di lavorare, perché ciascuno protegge da qualcosa di diverso:

- **Modello sul tuo dispositivo.** La conversazione non lascia il telefono o il computer, a meno che l'assistente non usi integrazioni con servizi in rete; contano lo stato del dispositivo, i permessi dell'applicazione e chi vi ha accesso fisico.
- **Ambiente confidenziale su server.** Il server ha una zona isolata a livello hardware, in cui non può guardare nemmeno il suo amministratore; è lì che il modello legge il contenuto. L'hardware deve confermarlo con una firma digitale (si tratta dell'attestazione: una conferma di quale software funzioni sulla macchina remota e in quale modalità di protezione). Occorre comunque fidarsi del produttore del processore. È la variante a cui miriamo.
- **API confidenziale di un fornitore esterno.** Un'API è il collegamento attraverso cui la nostra applicazione invia la conversazione al modello di un altro fornitore. Il primo rilascio userà molto probabilmente un'API confidenziale; se prima del suo avvio raccoglieremo fondi sufficienti per noleggiare server propri in un ambiente confidenziale, potrà funzionare su di essi fin dall'inizio. Qui, all'inizio, la confidenzialità è una dichiarazione del fornitore, che verificheremo; fino a un esito positivo delle prove contrassegniamo questa variante come protezione dichiarata, non confidenziale.
- **API ordinaria del fornitore del modello.** Il fornitore ha accesso al contenuto; non è la variante predefinita della Suveria privata.

Il calcolo confidenziale non ripara un computer infetto e non protegge da chiunque abbia accesso fisico al server. Nessuna variante riceve l'etichetta «piena privacy» prima della verifica della configurazione concreta. In ogni conversazione deve essere visibile in quale variante lavori, e cambiarla richiede una tua decisione consapevole.

Per saperne di più: [whitepaper di Suveria, capitolo 2](../whitepaper-suveria.md#s2) e [punto 2.3](../whitepaper-suveria.md#s2-3). Vedi anche: [Privacy e sicurezza](suveria-prywatnosc.md).

## Modelli

Alla base del progetto ci sono modelli aperti che si possono eseguire in proprio. Nella scelta di un modello consideriamo, tra l'altro, la qualità in molte lingue, l'affidabilità, la licenza, il costo e la possibilità di eseguirlo nell'architettura di protezione richiesta.

Annunciamo in anticipo la sostituzione o il ritiro di un modello, e la cronologia delle conversazioni resta a te: puoi scegliere un modello successore, esportare i dati o terminare il lavoro. Nella conversazione deve essere visibile il momento del cambio di modello.

Per saperne di più: [whitepaper di Suveria, capitolo 6](../whitepaper-suveria.md#s6).

## Quanto costa

Il manifesto propone l'ipotesi che un'infrastruttura comune possa offrire più potenza di calcolo e più intelligenza digitale per ogni dollaro rispetto ai servizi chiusi. Il whitepaper presenta un calcolo datato 29 ottobre 2026: con il profilo d'uso adottato, un'API confidenziale con confidenzialità dichiarata costa circa 0,70–1,25 USD per persona al mese per il solo calcolo. A ciò si aggiunge il costo fisso dell'ambiente privato, che pesa di più quando le persone sono poche: con 30 partecipanti, circa 6–11 USD per persona al mese.

È una stima sulla carta, non il listino prezzi di Suveria: il calcolo non comprende il lavoro delle persone, le revisioni di sicurezza, i pagamenti né una riserva per i guasti. Stato dell'ipotesi a quella data: il calcolo ci avvicina a essa, ma non la conferma.

Per saperne di più: [whitepaper di Suveria, capitolo 8](../whitepaper-suveria.md#s8). Vedi anche: [Quanto costa](suveria-koszty.md).

## Stato dei lavori

Il whitepaper tiene un diario dei risultati. Il suo stato al 29 ottobre 2026: non abbiamo ancora svolto nessuna delle prove descritte, non abbiamo noleggiato GPU né eseguito un modello in Suveria. Pianifichiamo la prima misurazione su una sola GPU confidenziale con un modello più piccolo.

La prova più importante: un gruppo con i permessi dell'operatore cerca di leggere le conversazioni degli account di prova, in cui sono state nascoste stringhe segrete di caratteri. Se qualcuno riesce a estrarle, noi compresi, la prova è fallita.

Vogliamo svolgere le prove apertamente. Se ti occupi di sicurezza, crittografia, infrastruttura o applicazioni, oppure vuoi esaminare il progetto con occhio critico, scrivi a salve@novusignis.org con l'oggetto «[Partecipa] Prove di Suveria».

Per saperne di più: [whitepaper di Suveria, capitolo 9](../whitepaper-suveria.md#s9) e [punto 8.2](../whitepaper-suveria.md#s8-2).

## Perché Suveria è una strada e non un fine

Il manifesto lo dice apertamente:

> Oggi Suveria è la nostra strada migliore verso un lavoro privato con l'intelligenza digitale, e non un fine in sé. Se i modelli troveranno posto sul dispositivo della persona o nascerà un modo migliore di protezione, una parte di questa strada diventerà superflua, e lo considereremo una buona notizia.

Per saperne di più: [manifesto, punto 3.1](../manifest.md#s3-1).

## Leggi e dicci che cosa ne pensi

La descrizione completa, con la tabella delle varianti di protezione, il calcolo dei costi e l'elenco delle questioni da risolvere, è nel [whitepaper di Suveria](../whitepaper-suveria.md). Se qualcosa ti fa riflettere o ti sembra sbagliato, seleziona quel passo nel documento e usa il pulsante «Ho un'osservazione» oppure scrivi a salve@novusignis.org.
