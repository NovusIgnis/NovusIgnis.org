# Suveria: lavoro privato con l'intelligenza digitale

Versione dell'11 novembre 2026. Il documento sviluppa i principi del manifesto che riguardano Suveria: come vogliamo proteggere la privacy, come deve funzionare il lavoro con l'intelligenza digitale, quanto costa e come lo verificheremo. L'architettura descritta è un progetto. Il riferimento a una tecnologia esistente o alla documentazione di un fornitore non significa che l'abbiamo avviata in Suveria. I risultati delle nostre prove li aggiungiamo nel capitolo 9, sempre con la data, la versione della configurazione e l'ambito della misurazione.

*Traduzione dell'originale polacco dell'8 novembre 2026, eseguita dall'intelligenza digitale. In caso di differenze tra le versioni, prevale il testo polacco.*

## 1. Che cos'è Suveria e perché nasce

Suveria deve essere uno spazio privato in internet in cui una persona conversa con l'intelligenza digitale, lavora sui propri materiali e torna ai pensieri precedenti, come a casa propria dietro una porta chiusa. La progetta la Fondazione Novus Ignis di Poznań, i cui valori sono descritti nel [manifesto](manifest.md), pensando alle persone di ogni parte del mondo. Si basa su modelli aperti di intelligenza digitale, e il nostro software vogliamo renderlo disponibile come bene pubblico digitale a codice aperto.

Suveria nasce perché alle conversazioni con l'intelligenza digitale affidiamo sempre di più: domande sulla salute, sulle relazioni, sul lavoro, sul denaro e sui progetti di vita. In molti servizi diffusi il contenuto di queste conversazioni finisce sui server del fornitore, che può leggerlo, e la sua protezione dipende dalle regole del fornitore e dalla fiducia che si ripone in esso. Vogliamo che si possa parlare delle questioni più importanti senza il timore che uno sguardo così ravvicinato su una persona venga un giorno monetizzato o usato per influenzarla. Vogliamo anche che ciascuno paghi per ciò che usa realmente, veda per che cosa paga e stabilisca da sé il limite di spesa.

In Suveria vogliamo che si possa:

- conversare con l'intelligenza digitale di questioni personali e professionali, vedendo dove viene elaborata la conversazione e chi può vederla;
- lavorare sui propri documenti e file, salvare i risultati e trasferirli altrove in formati aperti;
- conservare conversazioni, file e memoria dell'assistente soprattutto sui propri dispositivi, cifrati con una chiave che resta sotto il controllo dell'utente;
- con il proprio consenso, usare la memoria delle conversazioni precedenti, tornare alle ragioni passate delle decisioni e costruire il Canone Personale (*Canon Personalis*), cioè una raccolta dei propri principi e valori;
- scegliere il modo di lavorare, dal modello sul proprio dispositivo all'ambiente confidenziale su un server, con un'informazione chiara su ciò da cui protegge ciascuno di essi;
- pagare per l'uso effettivo, con un limite di spesa stabilito da sé;
- affinare un pensiero in privato e poi portarlo consapevolmente nella conversazione comune in OmniForum.

Rivolgiamo il primo rilascio alle persone per le quali una privacy verificabile è il motivo della scelta.

Vogliamo che già il primo giorno in Suveria dia la sensazione serena di essere a casa propria, in un laboratorio privato da arredare al proprio ritmo. L'utente potrà raccontare all'assistente le proprie questioni e i propri obiettivi; vogliamo anche permettere di trasferire in Suveria i propri appunti e gli archivi delle conversazioni precedenti con altri servizi di intelligenza digitale. Un archivio del genere deve restare cifrato e ordinato sul dispositivo dell'utente, e al modello remoto deve arrivare solo la parte scelta per la domanda in corso (capitolo 3).

Misuriamo il valore del servizio in base a quanto aiuta a raggiungere un obiettivo, a mantenere la privacy e a prendere decisioni in autonomia. Le condizioni devono essere chiare e facilmente accessibili, e l'utente deve controllare le proprie spese, poter esportare i propri materiali e andarsene.

La piena privacy, anche nei nostri confronti in quanto persone che gestiscono l'infrastruttura, è l'obiettivo a cui subordiniamo la progettazione. La protezione deve basarsi su misure di sicurezza verificabili in modo indipendente, e non sulla fiducia nella fondazione. Per questo ogni rilascio descrive concretamente che cosa è protetto, da chi, in quali condizioni e quali lacune restano.

Il punto di partenza è una conversazione testuale con un solo modello e il lavoro su un documento scelto, con un livello di protezione descritto chiaramente, un limite di spesa e l'esportazione del risultato. Le possibilità successive, come la memoria, la ricerca, le integrazioni e l'esecuzione di azioni, ricevono ciascuna un ambito di permessi separato. Un'unica interfaccia comoda può riunire più modalità di lavoro, se la persona vede, prima di inviare i dati, dove finiscono e quali regole valgono.

Che cosa userà il primo rilascio dipende da quanti fondi la fondazione raccoglierà prima del suo avvio. L'ipotesi più probabile è l'API confidenziale di un fornitore esterno; servizi di questo tipo sono oggi disponibili negli Stati Uniti, e all'inizio la loro confidenzialità è una dichiarazione del fornitore, che verificheremo. Se i fondi basteranno per noleggiare server propri in un ambiente confidenziale, il primo rilascio potrà funzionare su di essi fin da subito. Fino a un esito positivo delle prove del capitolo 9, ciascuna di queste varianti la contrassegniamo come protezione dichiarata, e non confidenziale. Il capitolo 2 descrive la protezione a cui miriamo. Che cosa ne consegue per la protezione dei dati personali delle persone in Europa lo descriveremo prima dell'avvio del progetto pilota.

L'uso di Suveria non costituisce un consenso all'uso delle conversazioni per l'addestramento dei modelli. I contenuti degli utenti entrano nei materiali di ricerca solo con un consenso separato e consapevole, e gli altri materiali provengono dal patrimonio pubblico della fondazione e da altre fonti con una base d'uso chiara, come descrive il [whitepaper sui materiali e sul benchmark](whitepaper-materialy-i-benchmark.md).

Suveria completa OmniForum, lo spazio comune della conversazione e delle decisioni: l'una offre un laboratorio privato, l'altro una tribuna pubblica. I valori da cui nascono entrambi i progetti sono descritti nel manifesto della fondazione. Di seguito mostriamo, nell'ordine:

- che cosa proteggiamo e da che cosa, dove si trovano i dati e le chiavi (capitolo 2);
- come un messaggio passa dal dispositivo al modello e come verificarlo (3);
- come limitiamo gli abusi senza leggere le conversazioni private (4);
- come funziona il calcolo su più GPU (5);
- quali modelli, memoria e strumenti prevediamo (6);
- quanta potenza di calcolo serve, da 30 persone all'intera umanità (7);
- quanto costa, in un calcolo datato (8);
- come verificheremo se le promesse funzionano: prove di accettazione e diario dei risultati (9).

## 2. Che cosa proteggiamo e da che cosa

Proteggiamo il contenuto delle conversazioni e dei file, la cronologia e la memoria, le chiavi, i dati di fatturazione e i metadati, per esempio l'ora della connessione, l'indirizzo di rete e la dimensione della richiesta. Ciascuno di questi ambiti richiede misure diverse.

Da chi protegge ciascuna delle cinque varianti di lavoro descritte al punto 2.3 lo mostra il prospetto qui sotto. La protezione nelle varianti su server si basa sull'attestazione, cioè una conferma firmata dall'hardware di quale software è in esecuzione sulla macchina remota e in quale modalità di protezione. Abbiamo compilato le celle sulla base dei capitoli successivi di questo documento; «dichiarazione del fornitore» significa che, fino a una nostra verifica, non confermiamo la protezione.

| Da chi | Modello locale su un dispositivo senza connessione alla rete | Modello locale su un dispositivo connesso alla rete | Elaborazione in un ambiente confidenziale su server | API confidenziale di un fornitore esterno | API esterna del fornitore del modello |
| --- | --- | --- | --- | --- | --- |
| Amministratore del fornitore | non pertinente: elaborazione sul dispositivo | non pertinente per il modello in sé; con le integrazioni dipende dai servizi scelti | protegge: isolamento hardware, in cui l'amministratore del server non può guardare | dichiarazione del fornitore, da verificare | non protegge: il fornitore ha accesso al contenuto |
| Un altro cliente sulla stessa macchina | non pertinente | non pertinente | protegge: l'isolamento comprende gli altri clienti | dichiarazione del fornitore, da verificare | dipende dal fornitore: la separazione dei clienti è garantita dal suo software, senza isolamento hardware |
| Osservatore della rete | non pertinente: nessun traffico di rete | protezione parziale: il traffico di rete delle integrazioni va valutato | protezione parziale: contenuto cifrato in transito, i metadati (ora, indirizzo, dimensione e ritmo dei pacchetti) richiedono misure separate (capitolo 3) | protezione parziale: come nell'ambiente confidenziale, se la chiave della connessione è vincolata all'attestazione | protezione parziale: contenuto cifrato in transito, metadati come nella colonna accanto |
| Persona con accesso fisico al server | non riguarda il server; conta l'accesso fisico al dispositivo | non riguarda il server; conta l'accesso fisico al dispositivo | non protegge: in un data center altrui ha accesso il fornitore; con hardware proprio, controllo fisico visibile | non protegge: ha accesso il fornitore | non protegge: il fornitore ha comunque accesso al contenuto |
| Fondazione | non pertinente: la fondazione non partecipa all'elaborazione | non pertinente: la fondazione non partecipa all'elaborazione | protegge: l'isolamento comprende anche noi come operatore, le chiavi dei dati salvati le ha l'utente | deve proteggere il contenuto: il gateway contabilizza le richieste senza accedere al contenuto; dove finisce la cifratura lo mostreremo prima del progetto pilota (capitolo 3) | deve proteggere il contenuto da noi: contabilizzazione senza accesso al contenuto; il fornitore lo vede |
| Produttore del processore | dipende dalla fiducia nell'hardware del dispositivo | dipende dalla fiducia nell'hardware del dispositivo | non protegge: l'attestazione si basa sulle chiavi del produttore, che deve essere onesto | non protegge: come nella colonna accanto | irrilevante, dato l'accesso del fornitore al contenuto |

Il calcolo confidenziale cambia il costo di un attacco: invece dell'accesso remoto di un amministratore serve un intervento fisico sull'hardware.

Di seguito descriviamo come deve funzionare la variante a cui miriamo, con un ambiente confidenziale proprio; in che cosa differiscono le altre varianti lo mostra la tabella al punto 2.3. Ecco che cosa significa in pratica, lungo i tratti successivi del percorso che compie un messaggio:

- **Sul dispositivo dell'utente** il testo è leggibile, perché è l'utente a scriverlo e leggerlo. Lo proteggono un'applicazione che chiede solo i permessi necessari, gli aggiornamenti e la prudenza con i backup. Non potremo proteggerlo se sul telefono o sul computer è in esecuzione software dannoso.
- **In viaggio verso il server** il messaggio è cifrato in modo che possa leggerlo solo il luogo di elaborazione verificato. Prima di inviarlo, l'applicazione controlla che dall'altra parte sia in esecuzione esattamente il software che abbiamo pubblicato.
- **Sul server** il modello deve leggere il contenuto per rispondere, quindi lo fa in un ambiente hardware chiuso, in cui non possono guardare né l'amministratore del server né gli altri clienti. Verifichiamo che questo isolamento comprenda il processore, le GPU, la memoria e le connessioni tra di essi.
- **Nell'archiviazione** la cronologia delle conversazioni e la memoria dell'assistente sono cifrate con una chiave che possiede l'utente. Verifichiamo le copie, il recupero dell'accesso e la cancellazione.
- **Nella gestione del servizio** fatturazione, diagnostica e segnalazioni di errori funzionano senza il contenuto delle conversazioni, e ogni tipo di dato raccolto è pubblico (capitolo 3).
- **Con gli strumenti esterni**, quando l'assistente deve fare qualcosa al di fuori di Suveria, per esempio cercare un'informazione in internet, invia solo ciò a cui l'utente ha acconsentito e mostra dove.

Il calcolo confidenziale non ripara il computer infetto dell'utente. Non protegge nemmeno da chiunque abbia accesso fisico al server: nel 2025 alcuni ricercatori hanno mostrato che un dispositivo collegato al bus della memoria, costruito con componenti per meno di mille dollari, permette di estrarre le chiavi di attestazione nelle soluzioni di Intel e AMD e, di conseguenza, di falsificare l'attestazione anche nel calcolo confidenziale di NVIDIA, e i produttori di processori considerano questi attacchi al di fuori dell'ambito della propria protezione.[^teefail] Restano anche le dipendenze dai produttori dell'hardware, dalla correttezza della crittografia, dal codice dell'applicazione e dal processo di aggiornamento. Il fornitore può rifiutare il servizio anche quando non è in grado di leggerne il contenuto. Il modello delle minacce deve quindi distinguere l'accesso al contenuto, le deduzioni dai metadati, la modifica del funzionamento e l'interruzione del servizio, e per ogni variante indicare chi deve essere onesto perché la protezione funzioni.

Finché usiamo data center altrui, l'accesso fisico all'hardware ce l'ha il fornitore e non possiamo verificarlo; lo diciamo per ogni variante. Con hardware proprio (passi 3–4 del punto 8.2) vogliamo rendere visibile questo accesso attraverso:

- un inventario dei dispositivi;
- il controllo degli ingressi;
- sigilli con un motivo casuale e sensori di apertura dell'involucro;
- un diario dei lavori;
- telecamere di osservatori indipendenti, con un'immagine in cui si vede il valore corrente di un generatore pubblico di casualità, firmato con la chiave della macchina;
- e, in una prospettiva più lontana, una sala server che chiunque può vedere.

L'assistenza e la sostituzione dei componenti avvengono come procedure annunciate e pubbliche. Un controllo fisico visibile riduce il rischio e permette di rilevare molti eventi, ma non dimostra l'intera storia della macchina né l'assenza di interventi prima della consegna, e attacchi simili a quello descritto sopra possono portare alla falsificazione delle evidenze di attestazione. Per questo, dopo l'apertura dell'involucro, la sostituzione di un componente, un riavvio non pianificato o un altro evento sospetto, sospendiamo l'elaborazione dei contenuti privati su quella macchina. Sostituiamo le chiavi di sessione e dell'applicazione, ma una nuova attestazione da sola non ripristina la fiducia se il sospetto riguarda la base dell'attestazione hardware; le condizioni e le evidenze per la riammissione le descriviamo in anticipo. Le chiavi che cifrano i dati degli utenti hanno una protezione e un recupero separati, quindi una procedura del genere non toglie alle persone il loro patrimonio privato.

### 2.1. Dispositivi propri e server opzionali

Il luogo principale di conservazione delle conversazioni private, dei file e della memoria devono essere i dispositivi dell'utente, in contenitori cifrati, cioè insiemi di dati il cui contenuto si legge con la chiave adeguata. È l'approccio local-first: i dati vengono salvati prima sul dispositivo, e i server possono supportare i backup e la sincronizzazione.[^local-first] I materiali salvati devono restare disponibili anche dopo che si è smesso di usare i servizi della fondazione; le attività che richiedono un modello remoto dipendono dalla disponibilità del servizio di calcolo scelto.

Il salvataggio opzionale su server scelti serve ai backup e all'allineamento delle modifiche tra i dispositivi. Cifriamo il contenuto sul dispositivo prima dell'invio, in modo che l'operatore che conserva la copia riceva soltanto un dato cifrato, senza la chiave per leggerlo. L'utente sceglie il fornitore dell'archiviazione e i dispositivi autorizzati alla lettura. Separatamente limitiamo la divulgazione dei metadati, come l'ora e la dimensione della copia trasmessa.

### 2.2. Chiavi e recupero dell'accesso

Le chiavi dei contenitori privati restano sotto il controllo dell'utente. La procedura di recupero indica chiaramente se l'accesso viene ripristinato da un secondo dispositivo, da una chiave di recupero conservata o da un altro meccanismo scelto consapevolmente, e a chi dà la possibilità di leggere. Il recupero dell'account presso l'operatore non sblocca il contenuto del contenitore. La perdita di tutte le copie della chiave e delle possibilità di recupero può significare la perdita permanente dei dati, per questo verifichiamo il meccanismo scelto con una prova di ripristino dei dati e lo descriviamo in istruzioni comprensibili.

Stiamo valutando diversi modi di recupero, che si possono combinare: un secondo dispositivo che ha già accesso; una chiave di recupero scritta su carta o conservata in un gestore di password; una chiave hardware; la suddivisione della chiave tra alcune persone di fiducia, di cui per esempio due qualsiasi su tre possono insieme ripristinare l'accesso, mentre nessuna da sola può leggere i dati. La fondazione non conserva le chiavi né parti di esse, quindi non può recuperare l'accesso al posto dell'utente né consegnare i suoi dati.

Per cominciare consigliamo un secondo dispositivo e una chiave scritta su carta; la suddivisione della chiave tra persone di fiducia è un'opzione per chi lo desidera.

### 2.3. Varianti di protezione

Vogliamo confrontare cinque varianti di lavoro, perché ciascuna protegge da qualcosa di diverso:

| Variante | Dove avviene l'elaborazione | Che cosa occorre valutare |
| --- | --- | --- |
| Modello locale su un dispositivo senza connessione alla rete | Sul dispositivo dell'utente | Lo stato del dispositivo, l'accesso fisico, i supporti e le copie dei dati |
| Modello locale su un dispositivo connesso alla rete | In locale e, con le integrazioni, anche nei servizi scelti | I permessi dell'applicazione, gli aggiornamenti, il traffico di rete e l'ambito dei dati trasmessi alle integrazioni |
| Elaborazione in un ambiente confidenziale su server | In un ambiente remoto la cui configurazione è confermata dall'attestazione | La verifica dell'ambiente, l'accesso degli amministratori e l'accesso fisico all'hardware, la protezione della trasmissione e dell'elaborazione, i metadati e le chiavi |
| API confidenziale di un fornitore esterno | Nell'ambiente confidenziale del fornitore, la cui configurazione deve essere confermata dall'attestazione | Se la chiave della connessione è vincolata all'attestazione, se l'attestazione comprende il processore e la GPU, se è possibile collegare una richiesta specifica a una macchina specifica, chi ha accesso fisico all'hardware, la conservazione dei dati e la giurisdizione; fino a una nostra verifica consideriamo la confidenzialità una dichiarazione del fornitore |
| API esterna del fornitore del modello | Presso il fornitore esterno | Le condizioni del fornitore, l'accesso al contenuto, la conservazione e la giurisdizione; non estendiamo a questa variante le promesse dell'esecuzione confidenziale |

La verifica indipendente del server richiede un'applicazione installata. Nel browser il codice che verifica il server viene fornito ogni volta dall'operatore, per questo contrassegniamo questa modalità come meno protetta.

Un dispositivo connesso alla rete può avere più punti di attacco di un ambiente server separato, quindi la sola posizione del calcolo non decide della sicurezza. Nessuna variante riceve l'etichetta «piena privacy» prima della verifica della configurazione concreta. In ogni conversazione l'utente vede in quale variante sta lavorando, e il cambio di variante richiede una sua decisione consapevole. Una chiave propria per un'API esterna serve a contabilizzare l'accesso, ma non garantisce la confidenzialità nei confronti del fornitore. Questa variante non è la variante predefinita della Suveria privata, e prima dell'invio del contenuto mostriamo se il fornitore può usarlo per addestrare i modelli e per quanto tempo lo conserva.

Stiamo analizzando anche una direzione che non compare ancora in questo prospetto: lo sciame fidato. Il modello funzionerebbe allora sull'hardware di alcune persone che si conoscono e si fidano l'una dell'altra, per esempio una famiglia, degli amici o una piccola comunità, e ciascuna di esse metterebbe a disposizione un po' della potenza di calcolo del proprio computer. La privacy di una variante del genere si basa sulla fiducia in queste persone, e non sulla tecnica, perché i loro computer vedono i contenuti elaborati, ed è proprio così che vogliamo descriverla. È un'idea che stiamo appena iniziando ad analizzare, ma è una delle strade che vogliamo esplorare.

Un server sicuro non proteggerà un testo letto da un telefono compromesso, e un telefono più sicuro non riparerà il server, per questo progettiamo l'applicazione insieme alla protezione del dispositivo. Vogliamo che l'applicazione di Suveria funzioni senza i servizi Google, per esempio sul sistema GrapheneOS, sia disponibile anche al di fuori dello store Google Play e abbia build riproducibili: chiunque può compilare da sé l'applicazione dal codice sorgente pubblicato e verificare di aver ottenuto un file identico a quello che installa. Prevediamo anche misure di sicurezza nell'applicazione stessa: il blocco degli screenshot, una modalità della tastiera che non impara dal testo digitato, l'esclusione dei dati privati dai backup nel cloud, il contenuto nascosto delle notifiche e il blocco dell'applicazione. Sul sito della fondazione prepareremo una guida alla protezione dei propri dispositivi su tre livelli: dalle impostazioni di base e dagli aggiornamenti, attraverso un isolamento più forte del lavoro e delle chiavi, fino a configurazioni collaudate per le persone con i requisiti più elevati, come Qubes OS su un computer con firmware aperto. L'uso di Suveria non richiede l'acquisto dell'hardware indicato, e il nome di un sistema non è una certificazione dell'intero dispositivo.

In ogni conversazione mostreremo la scheda di protezione (*Charta Tutelae*): un elenco degli elementi da cui dipende la privacy di quella conversazione, ciascuno in uno dei tre stati:

- **Verificato da noi:** lo abbiamo verificato direttamente, con la data, la versione e una descrizione di come lo abbiamo fatto.
- **Dichiarato dal fornitore:** il fornitore lo afferma, e noi non lo abbiamo ancora verificato.
- **Non protetto:** questa variante non lo protegge, per esempio l'ora e la lunghezza dei messaggi visibili al fornitore della rete, l'accesso fisico del fornitore all'hardware o la giurisdizione in cui si trova il server.

Lo stato «verificato da noi» riporta la data dell'ultima verifica e scade: dopo un tempo stabilito senza una nuova verifica torna allo stato «dichiarato». Separatamente mostreremo i casi noti di crollo della fiducia, per esempio un incidente presso il fornitore o una modifica non confermata della configurazione. La scheda è la stessa per tutti e non dipende dal prezzo, e una variante in cui anche un solo elemento è soltanto dichiarato non porta il nome «piena privacy». Il prospetto all'inizio del capitolo 2 e la tabella delle varianti in questo punto descrivono le varianti in generale, mentre la scheda mostrerà lo stato per quella specifica conversazione.

## 3. Il percorso dal dispositivo al modello

Suveria deve essere composta da alcune parti:

- un'applicazione sul dispositivo dell'utente;
- un gateway che contabilizza le richieste e fa rispettare il limite di spesa;
- un ambiente confidenziale con il modello, proprio o presso un fornitore;
- l'archiviazione di copie cifrate;
- un intermediario opzionale che nasconde l'indirizzo dell'utente.

Il gateway deve funzionare in una macchina confidenziale. Prima del progetto pilota mostreremo nell'applicazione in quale punto finisce la cifratura controllata dal dispositivo dell'utente e se il gateway vede il contenuto e, in tal caso, che lo vede solo all'interno dell'ambiente confidenziale.

L'archiviazione cifrata e l'elaborazione confidenziale richiedono misure di sicurezza distinte. Un modello che funziona su un server ha bisogno, per il suo compito, di un contenuto leggibile in un ambiente di calcolo protetto; la sola cifratura delle copie dei file non protegge questa fase.[^apple-pcc] L'applicazione rende disponibile solo la parte scelta per un dato lavoro, senza trasmettere la chiave dell'intero contenitore privato. La descrizione della sessione indica dove il contenuto diventa disponibile per il calcolo, che cosa limita l'accesso dell'operatore e che cosa succede ai dati dopo la restituzione del risultato.

Svolgimento proposto della sessione:

1. L'applicazione scarica la descrizione del rilascio approvato e controlla l'attestazione, cioè una conferma crittografica di determinate proprietà dell'ambiente in esecuzione.
2. Verifica la conformità dell'hardware, dello stato di protezione e delle misurazioni del software a una politica pubblica. La chiave del destinatario dei dati deve essere vincolata a questa conferma.
3. Dopo una verifica riuscita stabilisce una connessione cifrata con l'ambiente approvato. Una discrepanza blocca l'invio dei dati; il passaggio a un'altra variante richiede una scelta consapevole.
4. L'ambiente elabora la richiesta con un accesso limitato alla rete e agli strumenti, restituisce il risultato e cancella i dati di lavoro secondo la politica pubblicata.
5. Il salvataggio della conversazione o della memoria avviene solo nell'ambito scelto dall'utente.

L'attestazione aiuta a stabilire che cosa è stato avviato, ma da sola non dimostra che quel codice sia sicuro. Servono revisioni del codice, build riproducibili del software a partire dal codice sorgente (descritte al punto 2.3), un registro delle versioni approvate e la possibilità di una verifica indipendente. L'architettura Apple Private Cloud Compute è per noi un riferimento su come legare la protezione alla trasparenza nel rilascio del software; non è una certificazione del nostro progetto.[^apple-pcc]

Vogliamo proteggere i rilasci in modo che la fiducia non dipenda da una sola persona né dalla sola fondazione:

- ogni rilascio deve poter essere compilato in modo riproducibile dal codice sorgente, e almeno due parti indipendenti esterne alla fondazione lo riproducono e confermano pubblicamente la corrispondenza dell'impronta; finché non le troveremo, contrassegniamo il rilascio come non confermato da terzi;
- le impronte dei rilasci approvati finiscono in un registro pubblico a cui si può solo aggiungere, e i suoi stati successivi sono confermati da testimoni indipendenti;
- una nuova versione arriva sui server dopo l'approvazione di alcune persone, di cui almeno una esterna al consiglio di amministrazione;
- le chiavi necessarie per trattare i dati le riceve solo un ambiente che ha superato l'attestazione.

La variante con protezione piena la progettiamo per applicazioni installate con rilasci firmati e verificabili, protezione contro il ritorno a una versione difettosa e conservazione sicura delle chiavi, perché nel browser il codice che verifica il server viene fornito ogni volta dall'operatore. La versione per browser descrive chiaramente il proprio livello di protezione inferiore. La build riproducibile permette di confrontare il rilascio con il codice, ma la valutazione del codice stesso e della configurazione continua a essere garantita da revisioni, audit e ricompense per le segnalazioni di errori, e ogni incidente finisce in un registro pubblico.

Per limitare la divulgazione dell'indirizzo dell'utente si può studiare un'intermediazione basata su Oblivious HTTP, che separa la conoscenza del mittente da quella del contenuto della richiesta in un determinato modello di fiducia.[^ohttp] La collusione degli intermediari, la correlazione del traffico e i dettagli dell'implementazione richiedono comunque una valutazione, per questo non descriviamo il solo uso di questo protocollo come anonimato completo.

La cifratura e il calcolo confidenziale non nascondono la lunghezza né il ritmo dei pacchetti in cui scorre la risposta. Ricerche degli anni 2024–2025 hanno mostrato che un osservatore della rete può ricostruire da essi l'argomento e talvolta il contenuto della conversazione.[^weiss-keylogging][^whisper-leak] Per questo, in modalità confidenziale, vogliamo inviare la risposta in frame di dimensione fissa e a ritmo costante, non condividere tra gli utenti la cache delle richieste e disattivare la decodifica speculativa. Queste misure costano un po' di latenza e di throughput; ne terremo conto nel calcolo.

Proteggiamo l'infrastruttura anche limitando le possibilità d'azione delle singole parti del sistema: limiti alle risorse, isolamento dei compiti e blocco predefinito delle connessioni in uscita dal nodo che elabora la conversazione. Questo blocco deve far parte del software la cui impronta è visibile nell'attestazione: modificarlo cambia l'impronta, quindi l'applicazione rifiuterà la connessione. Consideriamo le regole di rete del fornitore un secondo livello, e non una garanzia. Le azioni esterne consentite passano attraverso un livello di strumenti separato, con permessi stabiliti dall'utente. Prima della messa in servizio verificheremo l'efficacia di questi limiti, il modo di rilevare gli incidenti e l'ambito minimo necessario dei metadati. L'obiettivo è la sicurezza delle risorse comuni mantenendo la confidenzialità del contenuto delle conversazioni.

Siamo particolarmente prudenti quando l'utente collega fonti con messaggi di altre persone, per esempio una casella di posta. Un messaggio altrui può contenere comandi nascosti che cercano di indurre il modello a rivelare la memoria privata. Per questo separiamo i contenuti provenienti dall'esterno dai comandi dell'utente: mentre li riordina, l'assistente non può da solo inviare messaggi, aprire indirizzi web o modificare il Canone Personale senza la conferma di una persona.

Tutto ciò che sappiamo sul funzionamento di Suveria può saperlo chiunque. Con l'avvio del servizio pubblicheremo l'elenco di tutti i tipi di dati che raccogliamo sul funzionamento del servizio, con lo scopo e il periodo di conservazione, e renderemo disponibili i dati stessi in forma aggregata: consumo di token, modelli usati, carico delle macchine, tempo di attesa in coda, guasti e costi. Ognuno li vede nello stesso posto in cui li vediamo noi. Prima di pubblicare i prospetti verifichiamo che non permettano di riconoscere il comportamento di una persona specifica: stabiliamo la dimensione minima del gruppo, il ritardo della pubblicazione e i dati che omettiamo. Non raccogliamo dati al di fuori dell'elenco; se risultasse il contrario, lo consideriamo un incidente grave e lo descriviamo pubblicamente.

## 4. Limitare gli abusi senza accedere ai contenuti privati

Applichiamo la protezione della dignità anche alle persone che possono subire gli effetti dell'uso dei nostri strumenti. Vogliamo contrastare gli abusi senza leggere le conversazioni private: attraverso i principi che segue l'assistente stesso, i limiti ai permessi degli strumenti e alle connessioni di rete, i limiti alle risorse e la protezione contro la creazione di account in massa. Non creiamo accessi nascosti ai contenuti privati, perché indebolirebbero la protezione di tutti.

Sarà possibile creare un account in diversi modi, da quello completamente privato (una chiave sul proprio dispositivo, senza indirizzo e-mail) a quello comodo (accesso tramite un fornitore esterno). Per ciascun modo mostreremo, prima della scelta, chi al di fuori della fondazione viene a sapere della creazione dell'account e quali dati vede, e che cosa succede se quel fornitore scompare. Il modo in cui si crea l'account non influisce sui diritti del partecipante; il diritto di voto in OmniForum è una credenziale separata aggiunta all'account.

Valutiamo separatamente la privacy e la limitazione degli abusi. Progettiamo Suveria in modo che la fondazione non abbia dati che potrebbe consegnare su una persona specifica: i contenuti sono cifrati con le chiavi dell'utente, i dati sul funzionamento del servizio li raccogliamo solo nell'ambito pubblico descritto nel capitolo 3, e i dati personali li limitiamo al minimo richiesto dalla legge per i pagamenti e la contabilità; ne pubblichiamo anche l'ambito. Se qualcuno ci chiede i dati di una persona specifica, vogliamo poter rispondere onestamente che, oltre a questo minimo descritto pubblicamente, non li abbiamo. Per ogni misura contro gli abusi descriveremo di quali dati ha bisogno, per quanto tempo li conserviamo, quali effetti ha su un partecipante onesto e come si può contestare un blocco errato.

Descriveremo anche come riceviamo le segnalazioni delle persone che si ritengono danneggiate, e che cosa possiamo fare in quel caso senza accedere al contenuto delle conversazioni: per esempio limitare i permessi degli strumenti o le risorse dell'account, verificare i dati di fatturazione e i metadati nella misura in cui li conserviamo, oppure indicare a chi segnala dove cercare aiuto. Gli obblighi legali dell'operatore di un servizio del genere richiedono un'analisi separata prima dell'avvio.

Queste misure sono obiettivi e varianti da testare, e nessuna di esse rileverà tutti gli abusi. Per ciascuna indicheremo a quali minacce risponde, che cosa non rileva e che cosa si può verificare senza che l'operatore acceda alle conversazioni private. L'esito di questa valutazione determina le condizioni per rendere disponibile la funzione in questione.

Quando una conversazione riguarda un pericolo per la vita o la salute, l'assistente deve fornire informazioni sull'aiuto disponibile, per esempio i numeri di emergenza, senza inviare nulla al di fuori dell'ambiente privato.

### 4.1. Istruzioni pubbliche dell'assistente e biblioteca comune

Il comportamento dell'assistente dipende anche dalla sua istruzione principale e dal suo modo di lavorare: come suddivide un compito in passaggi, usa la memoria e controlla le risposte. In Suveria la persona deve poter sempre leggere l'istruzione completa del proprio assistente. L'infrastruttura comune deve rendere disponibili solo i modelli e le impostazioni che superano le prove pubbliche del benchmark; al di sopra di questo minimo è l'utente a scegliere lo stile di lavoro, dal riordino tranquillo dei pensieri a una conversazione esigente in cui l'assistente fa notare le lacune nel ragionamento. Vogliamo curare una biblioteca aperta di istruzioni collaudate, che i partecipanti migliorano in OmniForum e verificano nel benchmark.

## 5. Calcolo su più GPU

Il modello del capitolo 6 non entra in una sola GPU, quindi la protezione va verificata anche nelle connessioni tra le GPU: il bus PCIe collega il processore alle GPU, mentre NVLink e NVSwitch collegano le GPU tra loro.

Quando un modello usa più GPU, i dati scorrono anche tra di esse, quindi la protezione va verificata sia per le GPU stesse sia per le connessioni. Il nome della GPU non basta per ordinare un servizio confidenziale: occorre confermare la macchina adeguata, il processore, la topologia delle connessioni, il firmware, i driver e il software di esecuzione, e poi verificare il loro funzionamento congiunto.[^nvidia-platformy]

Nella modalità Hopper Protected PCIe, descritta nella documentazione PPCIe v2, la rete NVLink e NVSwitch appartiene alla parte fidata del sistema, quindi la cifratura PCIe non significa cifratura di ogni connessione tra le GPU.[^nvidia-ppcie-v2] La documentazione NVIDIA R595 descrive per le GPU Blackwell una modalità di calcolo confidenziale su più GPU, con cifratura delle connessioni NVLink e supporto fino a otto GPU in un'unica macchina virtuale confidenziale.[^nvidia-blackwell] È una base per verificare la configurazione, e non una prova che ogni noleggio di GPU B200 includa questa funzione. Rilasci diversi hanno matrici di compatibilità diverse, quindi non componiamo la configurazione con versioni scelte a caso.

La richiesta al fornitore comprende:

- la modalità di protezione specifica e la possibilità di un'attestazione autonoma;
- l'uso esclusivo delle risorse richieste e la regione;
- l'accesso degli amministratori e l'accesso fisico all'hardware;
- la conservazione dei dati;
- i tempi di consegna e il costo complessivo.

Confrontiamo un'offerta solo dopo una prova con la nostra applicazione. La dicitura commerciale «secure» non sostituisce queste informazioni.

## 6. Modello, memoria e strumenti

La base del progetto sono modelli aperti che si possono eseguire in proprio. Suveria deve essere accessibile alle persone di tutto il mondo, nelle loro lingue, per questo nella scelta del modello consideriamo la qualità in molte lingue, la comprensione delle intenzioni, l'affidabilità, la licenza, il costo e la possibilità di eseguirlo nell'architettura di protezione richiesta. Quando ce ne sarà bisogno, accanto al modello generale possiamo avviare modelli che gestiscono meglio lingue specifiche. I pesi aperti rendono possibili alcuni usi, ma non stabiliscono l'apertura dei dati e dell'intero processo di creazione del modello.[^osi]

Il primo candidato è DeepSeek-V4.1-Flash, un modello con licenza MIT, che ne consente l'uso anche per offrire servizi.[^deepseek] È grande ma parsimonioso: il produttore indica 552 miliardi di parametri della parte principale, cioè numeri regolati durante l'addestramento, e una memoria aggiuntiva Engram da 196 miliardi di parametri, mentre per ogni parola successiva lavorano solo 8–16 miliardi di parametri, per questo risponde in modo rapido ed economico (calcolo nel capitolo 8). Tutti i parametri devono però entrare nella memoria delle GPU, quindi servono almeno quattro GPU moderne. I parametri di questo modello sono già salvati in una forma compatta, con meno cifre per ogni numero; un salvataggio di questo tipo si chiama quantizzazione e riduce la memoria necessaria, ma può abbassare la qualità, quindi a ogni versione lo verifichiamo sui nostri compiti. Lo confrontiamo anche con modelli più piccoli: scegliamo quello più grande solo se svolge chiaramente meglio i compiti importanti per le persone.

Il secondo candidato è Kimi K3.1 Pro dell'azienda Moonshot AI, reso disponibile il 23 ottobre 2026. Il produttore lo descrive come una versione ulteriormente addestrata di Kimi K3 con circa 3 bilioni di parametri e un contesto fino a un milione di token, e annuncia i pesi completi prima del 4 novembre 2026; la licenza non è stata ancora annunciata.[^kimi-k31] I dati dettagliati che usiamo per il confronto provengono dalla scheda del predecessore: Kimi K3 ha 2,8 bilioni di parametri, di cui 104 miliardi lavorano a ogni token, e una licenza propria, non approvata dalla Open Source Initiative.[^kimi-k3] Nell'indice di Artificial Analysis nella versione del 28 ottobre 2026 Kimi K3.1 Pro ha ottenuto 46 punti contro i 32 di DeepSeek-V4.1-Flash, ma è diverse volte più costoso e più lento.[^aa] I file dei pesi di Kimi K3 occupano circa 1,56 TB, e per l'esecuzione serve inoltre memoria per il contesto e per i calcoli, quindi non stabiliamo se il modello funzionerà sulla base della sola somma della memoria delle GPU. La ricetta del motore SGLang descrive una configurazione verificata di Kimi K3 su otto GPU B300; non è ancora un test di Kimi K3.1 né di una configurazione confidenziale.[^spheron-kimi][^sglang-k3] Dopo la pubblicazione dei pesi verificheremo la loro dimensione e il formato, la licenza, le ricette dei motori, la capacità su una configurazione concreta e la disponibilità nelle API confidenziali. Aggiungeremo il risultato, con la data, come primo aggiornamento di questo documento, anche se i pesi non saranno stati pubblicati o se le condizioni della licenza si riveleranno inadatte.

**Aggiornamento del 9 novembre 2026.** I pesi di Kimi K3.1 Pro sono pubblici e accessibili senza registrazione; il repository del produttore è stato creato il 2 novembre 2026.[^kimi-k31-wagi] Occupano circa 1,56 TB in 96 file. Il modello è stato addestrato fin dall'inizio in un formato compatto: i pesi degli esperti sono in formato MXFP4, gli altri in BF16. La scheda del modello indica 2,8 bilioni di parametri, di cui 104 miliardi lavorano a ogni token, e un contesto fino a 1.048.576 token; i precedenti «circa 3 bilioni» erano il nome della classe del modello, non un numero. La licenza è propria (Kimi K3.1-Pro License). Consente di usare il modello anche per servizi, con due condizioni: un accordo separato con il produttore quando il soggetto che offre l'accesso al modello come servizio supera 20 milioni di USD di ricavi in 12 mesi, e il nome del modello visibile nell'interfaccia oltre 100 milioni di utenti al mese o oltre 20 milioni di USD di ricavi al mese. La Open Source Initiative non l'ha approvata. Alla scala attuale della fondazione nessuna di queste condizioni ci riguarda; è la nostra lettura del testo, non un parere legale.[^kimi-k31-licencja] I motori vLLM e SGLang hanno ricette per questo modello; la configurazione più piccola descritta è di otto GPU di ultima generazione (un nodo 8 × B300 oppure due moduli GB300), e per ora il supporto c'è solo nelle versioni di sviluppo di entrambi i motori.[^kimi-k31-silniki] Nessuno ha ancora pubblicato la capacità di elaborazione di una configurazione simile nell'uso normale, quindi oggi non sappiamo calcolare quante persone servirà una configurazione. Nelle API confidenziali abbiamo trovato questo modello il 9 novembre presso un solo fornitore, indicato come sperimentale, al prezzo di 4 USD per milione di token in ingresso e 20 USD per milione di token in uscita; l'attestazione di questa offerta non l'abbiamo ancora verificata.[^kimi-k31-poufne] Nell'indice di Artificial Analysis (versione 5.0.1, consultato il 9 novembre) Kimi K3.1 Pro ha 46 punti e DeepSeek-V4.1-Flash 33.[^aa-2026-11] Conclusione per oggi: la licenza e il formato dei pesi non chiudono la strada, ma il modello richiede almeno otto GPU, e il suo costo e la sua velocità nella variante confidenziale restano da misurare. DeepSeek-V4.1-Flash resta il primo candidato.

Annunciamo in anticipo la sostituzione o il ritiro di un modello. La cronologia delle conversazioni resta all'utente: può scegliere un modello successore, esportare i dati o terminare il lavoro. Nella conversazione deve essere visibile il momento del cambio di modello, e il trasferimento del contesto privato al nuovo modello richiede una decisione dell'utente.

I principi secondo cui risponde l'assistente li pubblicheremo integralmente insieme a ogni rilascio. Il modello stesso porta con sé anche le scelte del suo creatore, per esempio gli argomenti che evita; le verifichiamo nel benchmark e le descriviamo nella scelta del modello.

La memoria delle conversazioni precedenti deve funzionare con il consenso dell'utente ed essere modificabile in modo trasparente. Distinguiamo i messaggi originali, i riassunti del modello e le informazioni confermate dall'utente. Ogni voce si può cancellare o correggere, se ne può vedere l'origine e stabilire in quali compiti è lecito usarla. L'assistente distingue chiaramente un proprio suggerimento da una posizione che la persona ha consapevolmente riconosciuto come propria.

L'esecuzione di azioni richiede permessi concessi per uno scopo e un tempo determinati. Il contenuto di una pagina o di un documento è materiale da analizzare, e non un comando di modificare questi permessi. Le azioni esterne, le spese, le pubblicazioni e le cancellazioni richiedono conferme proporzionate e un diario delle azioni accessibile all'utente.

### 6.1. Il Telescopio del Pensiero e il Canone Personale

L'idea del Telescopio del Pensiero (*Telescopium Mentis*) è nata dalla finestra di Overton, cioè il concetto che descrive la gamma delle idee che in un dato momento sono considerate accettabili in una società. Per una singola persona si tratta della gamma di pensieri che in un dato momento considera ammissibili per sé. Il Telescopio deve essere una finestra del genere per una sola persona e solo per lei: permette di vedere la traccia delle proprie riflessioni e dei propri valori in momenti diversi e come sono cambiati nel tempo.

Il Telescopio del Pensiero deve servire a tornare al proprio ragionamento: che cosa sapevo allora, che cosa volevo e perché ho cambiato idea. Può anche aiutare a confrontare eventi scelti dall'utente, informazioni sul mondo e le proprie azioni con il suo Canone Personale, cioè la raccolta di principi e valori che l'utente ha messo per iscritto e riconosce come propri. Il confronto riguarda una situazione che l'utente descrive o indica da sé; è l'utente a determinare il materiale e l'ambito. Il modello mostra i possibili collegamenti insieme alla fonte del principio richiamato e alla descrizione dell'evento, distinguendo le informazioni confermate dalle interpretazioni e dalle incertezze. L'interpretazione proposta si può correggere o respingere, e le posizioni precedenti le valutiamo tenendo conto del loro tempo e del loro contesto.

La tensione notata può riguardare il principio stesso, un conflitto di valori, le condizioni dell'ambiente circostante, i limiti della persona o un'interpretazione errata del modello. La persona può mantenere l'ideale e accettare l'incoerenza attuale, precisare una convinzione, valutare un cambiamento nelle proprie azioni o nell'ambiente oppure lasciare la domanda aperta. Il Canone deve aiutare a comprendere le proprie scelte: non creiamo punteggi di moralità né classifiche pubbliche di coerenza. La riflessione privata resta privata, e la sua registrazione non significa pubblicazione né espressione di un voto.

Inizieremo con cautela. Nella prima versione il Telescopio del Pensiero lavora solo su una singola situazione indicata dall'utente, per esempio una decisione su cui vuole tornare; non segue la sua vita in tempo reale. L'utente decide quanto spesso usarlo, quali appunti e ricordi condividere e quando cancellarli. In questa prova verifichiamo se i collegamenti mostrati sono comprensibili, se danno la sensazione di avere il controllo sulle proprie scelte e se lo strumento non genera la pressione di dover rendere continuamente conto a sé stessi. Consideriamo un buon risultato anche il fatto che qualcuno, dopo averci riflettuto, accetti di non agire sempre secondo i propri principi, o lasci la questione aperta: lo strumento deve aiutare a comprendere sé stessi, e non imporre decisioni.

### 6.2. Formati aperti, portabilità e interoperabilità degli strumenti

Vogliamo sviluppare Suveria come bene pubblico digitale, con codice e documentazione aperti; il punto di riferimento è lo standard della Digital Public Goods Alliance.[^dpga] Il formato di trasferimento dei dati ha una descrizione pubblica, una versione e regole per la conservazione delle informazioni al cambio di versione. In primo luogo usiamo gli standard aperti esistenti, e documentiamo le estensioni necessarie.

L'esportazione comprende gli originali scelti, la cronologia, le fonti e i collegamenti, nonché la distinzione tra le parole dell'utente, l'elaborazione del modello e il significato confermato dall'autore, e anche la struttura del Canone Personale. Il pacchetto scaricato si può leggere senza un account attivo in Suveria, dopo la decifratura da parte di una persona autorizzata.

Le API, cioè modi documentati con cui i programmi comunicano tra loro, devono permettere di lavorare con i materiali in altri strumenti, anche costruiti in proprio. L'utente sceglie l'ambito dei dati e le azioni consentite, e può revocare i permessi di un'integrazione. La revoca di un permesso blocca l'accesso successivo; la sorte delle copie trasmesse in precedenza dipende anche dal destinatario.

Lo spazio privato può servire anche al lavoro per progetti comuni. L'utente sceglie i materiali che vuole consegnare per l'accettazione o la pubblicazione, e lo strumento aiuta a rimuovere da essi, in locale, chiavi di accesso, password, dati personali e informazioni su vulnerabilità non corrette. L'uso di risorse pagate privatamente non richiede di rivelare le conversazioni di lavoro. Per un compito finanziato con le risorse comuni della fondazione, l'ambito della traccia pubblica, la scelta di uno pseudonimo e la preparazione dei materiali sono stabiliti in anticipo dai [principi dei laboratori della fondazione](whitepaper-zasady-fundacji.md) (capitolo 11.1). Dalle riflessioni in Suveria si può anche far emergere consapevolmente una sola domanda o un solo argomento e pubblicarlo in OmniForum; questo passo, descritto nel manifesto come Cerimonia Ignis (*Caerimonia Ignis*), richiede sempre una decisione separata.

## 7. Scala: da 30 persone all'intera umanità

Il numero di account da solo non determina l'infrastruttura necessaria. Contano l'attività, la lunghezza delle domande e delle risposte, il numero di sessioni simultanee, il tempo di attesa accettabile e il costo degli strumenti. L'esempio seguente è un modello di carico per una prova, e non una previsione della domanda né un'offerta.

Ipotesi: ciascuna delle N persone è attiva ogni giorno ed effettua 20 richieste al giorno, la richiesta media comprende 1500 token in ingresso e 600 token in uscita, e un mese ha 30 giorni. Il token è un'unità di testo elaborata dal modello; la sua lunghezza dipende dalla lingua. Nel carico reale bisogna aggiungere un contesto più lungo, l'elaborazione di documenti, i token di ragionamento e le chiamate ausiliarie.

| Persone attive | Richieste al mese | Ingresso al mese | Uscita al mese | Generazione media nell'arco della giornata | Picco orario nello scenario mondiale, circa 1,51 × la media |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18.000 | 27 milioni di token | 10,8 milioni di token | 4,2 token/s | 6,3 token/s |
| 100 | 60.000 | 90 milioni | 36 milioni | 13,9 token/s | 20,9 token/s |
| 1000 | 600.000 | 900 milioni | 360 milioni | 138,9 token/s | 209 token/s |
| 100.000 | 60 milioni | 90 miliardi | 36 miliardi | 13.889 token/s | 20.921 token/s |
| 1 milione | 600 milioni | 900 miliardi | 360 miliardi | 138.889 token/s | 209.208 token/s |
| 1 miliardo | 600 miliardi | 900 bilioni | 360 bilioni | 138,9 milioni di token/s | 209,2 milioni di token/s |
| 10 miliardi | 6 bilioni | 9 biliardi | 3,6 biliardi | 1,39 miliardi di token/s | 2,09 miliardi di token/s |

Progettiamo Suveria come un servizio mondiale, disponibile in molte lingue. Non sappiamo come si distribuiranno i partecipanti tra i fusi orari, quindi confrontiamo due scenari, che verranno verificati dalle misurazioni. Nello scenario mondiale assumiamo quote regionali proporzionali al numero di utenti di internet secondo l'ITU per il 2025 e la stessa forma ipotetica della giornata in ogni fuso: un picco serale e una notte tranquilla.[^itu] I fusi colmano in parte a vicenda i rispettivi cali, quindi il picco orario è di circa 1,51 × la media, e il traffico minimo di circa 0,49 ×. Nello scenario concentrato in una sola regione, per esempio in Europa, il picco è di circa 1,87 × la media, e di notte il traffico è quasi nullo. Una distribuzione del genere può verificarsi anche su larga scala; significa un utilizzo peggiore della nostra macchina e un ricorso più frequente all'API confidenziale oppure un'attesa più lunga nel picco. Entrambi i valori derivano dalle nostre ipotesi, e non dall'osservazione dei futuri partecipanti. I brevi picchi all'interno di un'ora devono essere livellati da una breve coda con un tempo di attesa visibile, e il traffico oltre la capacità della nostra macchina può essere preso in carico dall'API confidenziale; il tempo di attesa, compresi il 95° e il 99° percentile, lo misureremo nel progetto pilota, insieme al limite della coda e al comportamento una volta esaurita. La prova di carico comprenderà anche un afflusso improvviso di nuove persone, per esempio cinque volte il traffico medio. Si tratta del throughput complessivo in uscita; non sostituisce la misurazione della latenza di una singola conversazione né del costo dell'elaborazione dell'ingresso. Il test dovrebbe riprodurre la distribuzione delle sessioni, i contesti lunghi, i guasti e la coda, e non una singola richiesta comoda.

Il moltiplicatore di picco confronta l'ora più carica con la media. Deriva da un modello della giornata suddivisa in 24 ore: spostiamo un'unica forma della giornata tra otto regioni e sommiamo secondo le quote ipotizzate. È uno scenario di calcolo; non calcola il tempo di attesa di una singola richiesta.

Per vedere come appare questo calcolo su scala mondiale, facciamo un esperimento mentale. Se ciascuna di 10 miliardi di persone usasse Suveria come nel profilo adottato, nel picco servirebbero circa 2,1 miliardi di token in uscita al secondo. Con le prestazioni misurate per DeepSeek-V4.1-Flash, circa 930 token al secondo per GPU B200, si tratta di circa 2,25 milioni di GPU e, con circa 1,75 kW per GPU incluso il server (una nostra ipotesi, senza misurazione), di circa 4 GW di potenza. Per un miliardo di persone sono circa 225.000 GPU e 0,4 GW, per un milione circa 225 GPU. Per confronto, all'inizio del 2026 Epoch AI stimava che la potenza di calcolo installata nel mondo per l'intelligenza digitale superasse i 15 milioni di equivalenti di GPU H100 e richiedesse oltre 10 GW di potenza.[^epoch] È una semplificazione: il profilo adottato è leggero, il lavoro intensivo, i modelli più grandi e le immagini richiedono molte volte di più, e l'hardware e i modelli cambiano rapidamente. Mostra però l'ordine di grandezza: l'aiuto quotidiano dell'intelligenza digitale in questa misura per ogni essere umano richiederebbe una potenza inferiore a quella che già oggi funziona nel mondo. È un calcolo semplificato, e non una prova che un'infrastruttura del genere sarebbe disponibile per questo scopo.

## 8. Costi e calcolo datato

Il costo mensile di una prenotazione fissa si può scrivere, in prima approssimazione, così: numero di GPU × prezzo per ora-GPU × numero di ore pagate, più memoria, dischi, trasferimento dati, protezione, monitoraggio, gestione, pagamenti e imposte. Bisogna verificare quali di queste voci siano già incluse nell'offerta. Per il funzionamento 24 ore su 24 un mese ha da 672 a 744 ore; 730 ore sono un'approssimazione media.

Nel calcolo confrontiamo cinque varianti di costo: il modello locale, un'istanza propria su hardware noleggiato, un'istanza propria in un ambiente di calcolo confidenziale, con protezione dichiarata dal fornitore e da verificare, l'API confidenziale di un fornitore esterno e una normale API esterna. Le varianti di costo corrispondono alle varianti di protezione del punto 2.3; il noleggio di una macchina senza confidenzialità lo mostriamo solo come punto di riferimento per i prezzi, e non come variante di Suveria. Il costo del modello locale non lo stimiamo ancora, perché dipende dal dispositivo dell'utente. Mettiamo a confronto lo stesso livello di qualità, disponibilità e protezione. La soglia di convenienza è il costo del servizio completo diviso per l'utilizzo effettivo, e non il costo delle GPU diviso per il numero di account registrati. Un'API esterna facilita il test dei bisogni degli utenti, ma il suo fornitore ha proprie regole di accesso ai dati, quindi non estendiamo a essa le promesse dell'esecuzione confidenziale.

### 8.1. Calcolo datato: situazione al 29 ottobre 2026

Il manifesto formula l'ipotesi che, già con un numero relativamente piccolo di partecipanti regolari, un'infrastruttura comune possa offrire più potenza di calcolo e più intelligenza digitale per ogni dollaro rispetto ai servizi chiusi, con una protezione della privacy fondata su misure di sicurezza verificabili. Di seguito ne presentiamo il calcolo ai prezzi del 29 ottobre 2026. Ipotesi: il profilo d'uso del capitolo 7 (20 richieste al giorno da 600 token in uscita) e lo scenario mondiale (picco orario di circa 1,51 × la media), prezzi al netto delle imposte, 730 ore al mese per la conversione dei prezzi di noleggio. Il numero di persone per macchina indica quanti partecipanti la macchina è in grado di servire nel picco orario: throughput in uscita al secondo × 86.400 / (20 × 600 × moltiplicatore di picco). Il numero ammissibile di persone sarà determinato anche dal tempo di attesa della risposta misurato. Tra parentesi indichiamo lo scenario concentrato in Europa (moltiplicatore di circa 1,87). Per DeepSeek-V4.1-Flash adottiamo la misurazione del fornitore Lambda su quattro GPU B200: circa 3714 token in uscita al secondo con 64 richieste simultanee.[^lambda-v41] La misurazione è stata effettuata con la decodifica speculativa, che in modalità confidenziale non vogliamo usare (capitolo 3). Secondo una nostra stima di settembre, il throughput può allora essere inferiore fino a circa il 30%, il che aumenta il costo per persona in proporzione simile. Per le GPU H200 e B300 non esiste una misurazione di questo modello; assumiamo che ogni insieme di GPU con una copia del modello (8 × H200 oppure metà di una macchina 8 × B300) raggiunga le prestazioni di quattro GPU B200. È un'ipotesi ottimistica: la H200 è una generazione precedente, la modalità confidenziale può rallentare il lavoro e la misurazione di Lambda riguarda richieste più lunghe del nostro profilo. Per questo indichiamo anche una variante prudente con metà di questo throughput.

I pesi del modello occupano circa 511 GB, e il motore vLLM raccomanda circa 614 GB di memoria GPU. Quattro GPU H200 (564 GB) non bastano, per questo una copia su H200 richiede otto GPU. Il 29 ottobre la ricetta del produttore del motore per questa configurazione era ancora in fase di verifica, e nelle GPU H200 la connessione tra le GPU (NVLink) non è cifrata a livello hardware, a differenza di B200 e B300.

| Variante | Confidenzialità | Costo mensile | Persone per macchina | Costo del solo calcolo per persona |
| --- | --- | ---: | ---: | ---: |
| API di DeepSeek | assente, il fornitore vede il contenuto | in base all'uso | non riguarda una singola macchina; limiti e disponibilità del fornitore | 0,35–0,70 USD |
| API confidenziale con DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | dichiarata dal fornitore, da verificare | in base all'uso | non riguarda una singola macchina; limiti e disponibilità del fornitore | 0,70–1,25 USD |
| API di Kimi K3.1 Pro (Moonshot) | assente | in base all'uso | non riguarda una singola macchina; limiti e disponibilità del fornitore | 5,40 USD |
| API confidenziale con Kimi K3 (Phala, NEAR AI) | dichiarata dal fornitore, da verificare | in base all'uso | non riguarda una singola macchina; limiti e disponibilità del fornitore | 8,10–8,91 USD |
| Macchina confidenziale noleggiata 8 × H200 (Phala), DeepSeek, una copia del modello | attestazione del processore e delle GPU, da verificare | 23.506 USD con impegno di 180 giorni, 32.266 USD on demand | circa 17.750 (14.300), ipotesi di capacità | 1,32–1,82 USD (1,64–2,25) |
| Come sopra, variante prudente: metà del throughput | attestazione del processore e delle GPU, da verificare | come sopra | circa 8900 (7150), ipotesi di capacità | 2,65–3,64 USD (3,29–4,51) |
| Macchina confidenziale noleggiata 8 × B300 (Phala), Kimi K3 | attestazione del processore e delle GPU, da verificare | 45.552–47.888 USD | circa 4800–7600 (3900–6200), ipotesi di capacità | circa 6–10 USD (7,4–12,4) |
| 4 × B200 senza confidenzialità confermata (Lambda), DeepSeek | nessuna confermata | 19.827 USD | circa 17.750 (14.300) | 1,12 USD (1,38) |
| 8 × B200 senza confidenzialità confermata (Lambda), DeepSeek, due copie da quattro GPU ciascuna | nessuna confermata | 39.070 USD | circa 35.500 (28.700), ipotesi sulle prestazioni di due copie | 1,10 USD (1,36) |

Da dove vengono questi numeri: i prezzi delle API dai listini di DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala e NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] i prezzi delle macchine confidenziali dal listino di Phala;[^phala-gpu] il noleggio delle B200 presso Lambda a 6,79 USD per ora-GPU nell'istanza con quattro GPU e a 6,69 USD nell'istanza con otto.[^lambda-cennik] La capacità di Kimi la ricaviamo dalle misurazioni di terzi per Kimi K3 su otto GPU B300, che danno circa 1000–1600 token in uscita al secondo.[^spheron-kimi] Gli importi mensili con impegno non significano pagamenti mensili: Phala richiede il pagamento anticipato dell'intero periodo, senza rimborso in caso di conclusione anticipata, quindi 180 giorni di una macchina 8 × H200 equivalgono a 139.104 USD di liquidità al momento dell'ordine, e 180 giorni di una macchina 8 × B300 a 269.568 USD.[^phala-gpu]

Che cosa ne deriva:

- Per il profilo adottato, i prezzi delle API con confidenzialità dichiarata sono di circa 0,70–1,25 USD per persona al mese, da un costo paragonabile a quello di una normale API fino a circa 3,6 volte il suo costo, a seconda del fornitore e dell'orario di utilizzo; il prezzo più basso lo dichiara Confidential AI, e anche questa offerta dobbiamo verificarla. L'API confidenziale offre potenza flessibile senza avviare una macchina propria, anche se ha propri limiti, code e guasti. Una macchina confidenziale noleggiata per DeepSeek, dimensionata sul picco, nello scenario mondiale lavora in media a circa due terzi della capacità e costa circa 1,32 USD per persona, cioè più o meno quanto le API confidenziali più costose e più della più economica. Nel nostro modello orario il primo nodo proprio, con l'eccedenza indirizzata all'API confidenziale a 1,25 USD per persona, compare nel punto verificato di circa 20.000 persone attive; è il risultato delle ipotesi adottate, e non una soglia esatta, e con un'API confidenziale più economica una macchina noleggiata non conviene su questa scala.
- Il noleggio orario di una macchina confidenziale completa oggi non offre flessibilità per il picco serale: Phala richiede almeno un giorno (8 × H200) o un mese (8 × B300), Confidential AI tre mesi per 8 × B300 a 60 USD all'ora, e VoltageGPU, che fattura 8 × H200 al secondo a 64,62 USD all'ora, non copre con evidenze di attestazione pubblicate questa configurazione né gli switch NVSwitch.[^cai][^voltage] A ciò si aggiunge il tempo di assegnazione della macchina e di caricamento dei pesi.
- Per Kimi il calcolo dipende dalla misurazione: l'API confidenziale costa circa 8–9 USD per persona, e una macchina propria 8 × B300 a pieno utilizzo circa 6 USD con la stima di capacità più alta e circa 9,5 USD con quella più bassa. Risulta più economica dell'API confidenziale se una macchina serve più di circa 5100–5600 persone attive che usano questo modello; con la stima di capacità più bassa (circa 4800 persone) non ci si riesce.

Acquisto di un server proprio: un server Supermicro completo con otto GPU B300 costava, nel settembre 2026, circa 663.000 USD.[^supermicro] Stimiamo il costo mensile di un acquisto del genere così:

| Voce | Importo mensile |
| --- | ---: |
| Ammortamento del server in cinque anni | circa 11.000 USD |
| Ammortamento del server in quattro anni | circa 13.800 USD |
| Colocation | circa 1900–3000 USD |
| Rete, componenti e assistenza (stima) | circa 1500 USD |
| Totale | circa 14.000–18.000 USD |

Su un server del genere entrano due copie di DeepSeek, che nello scenario mondiale serviranno circa 35.000 persone (in quello europeo circa 28.000), a circa 0,41–0,52 USD per persona. Con queste ipotesi l'acquisto risulta più economico dell'API confidenziale a 1,11–1,25 USD a partire da circa 12.000–17.000 persone attive, e di quella dichiarata più economica (0,70 USD) a partire da circa 21.000–26.000. Il calcolo non comprende il costo completo di manutenzione e misurazione di questa configurazione; l'acquisto richiede inoltre liquidità anticipata, un presidio di persone 24 ore su 24 e una domanda stabile per anni, e l'accesso fisico all'hardware ce l'ha allora la fondazione (capitolo 2). Sono nostre stime, e non offerte.

- Le macchine confidenziali con più GPU sono oggi disponibili pubblicamente negli Stati Uniti. Nell'Unione europea abbiamo trovato macchine confidenziali con una sola GPU H100,[^azure-ncc] in cui non entrano né il DeepSeek completo né Kimi. Un'API confidenziale con server nell'Unione europea la offre anche Privatemode (Edgeless Systems, Germania), con una scelta di modelli più ridotta.[^privatemode] Anche questa è una dichiarazione del fornitore, da verificare.
- Un catalogo indipendente che verifica le API confidenziali, nell'osservazione del 29 ottobre 2026 alle 14:00 UTC, non ha confermato la verifica completa di nessuno dei 95 percorsi esaminati; mancavano più spesso le evidenze dell'identità del programma in esecuzione, della provenienza del codice e del collegamento tra la richiesta e la macchina.[^katalog] È un risultato basato sulle evidenze disponibili, e non una prova che i servizi divulghino i contenuti. Fino a una nostra verifica consideriamo la confidenzialità di questi servizi una dichiarazione del fornitore.
- Il calcolo comprende l'elaborazione dei modelli. L'ambiente privato (gateway, memoria, file) in una o due macchine confidenziali con quattro processori virtuali e 8 GB di memoria costa presso Phala circa 168 USD al mese per macchina, e il disco viene fatturato separatamente, circa 10 USD per 100 GB.[^phala-cvm] Se queste dimensioni bastino lo verificheremo nel progetto pilota. Con 170–340 USD al mese, sono circa 6–11 USD per persona con 30 persone, e qualche decina di centesimi con 1000 persone. Il calcolo non comprende il lavoro delle persone, le revisioni di sicurezza, i pagamenti né una riserva per i guasti.
- Gli abbonamenti più diffusi costano circa 20 USD al mese, e la chat di DeepSeek è gratuita.[^abonamenty] I piani da 100–200 USD offrono, con un lavoro intensivo da agente, l'equivalente di migliaia di dollari ai prezzi di listino delle API;[^semianalysis] con piani del genere non competiamo sul prezzo. Proponiamo la fatturazione dell'uso effettivo con una privacy che si può verificare.

Stato dell'ipotesi del manifesto al 29 ottobre 2026: il calcolo ci avvicina a essa, ma non la conferma. L'elaborazione con confidenzialità dichiarata e attestazione è già disponibile nei listini pubblici e, con il profilo d'uso adottato, costa circa 0,70–1,25 USD per persona al mese, quindi un piccolo gruppo può iniziare da essa a prezzo di costo, e nelle nostre ipotesi un'infrastruttura propria può diventare più economica con un numero di persone attive compreso tra poco più di diecimila e alcune decine di migliaia. Saranno decisive tre cose, che verificheremo nelle prove del capitolo 9: se la confidenzialità di questi servizi supera una verifica indipendente, se la qualità dei modelli disponibili è sufficiente per i compiti per cui le persone verranno in Suveria, e qual è il profilo reale del traffico. Aggiorniamo il calcolo a ogni variazione significativa dei prezzi e dopo ogni prova, e conserviamo le versioni precedenti.

### 8.2. Passi dell'infrastruttura e schede decisionali

Sviluppiamo l'infrastruttura per passi, ognuno dei quali offre ai partecipanti un valore autonomo, senza l'obbligo di passare al successivo: prima l'API confidenziale e l'ambiente privato in macchine confidenziali (se prima dell'avvio raccoglieremo fondi sufficienti, possiamo iniziare direttamente dal passo successivo), poi il noleggio di macchine confidenziali proprie, quindi l'acquisto di hardware e la sua collocazione in una sala server esterna e, in una prospettiva lontana, se dimostrerà un vantaggio, un edificio proprio. Il passo successivo è giustificato da dati misurati: il costo completo del servizio, il traffico reale, il tempo di risposta nel picco, la capacità di mantenere le misure di sicurezza e di gestire i guasti e, in caso di acquisto, anche il finanziamento delle riparazioni, della sostituzione dell'hardware e delle persone che si assumeranno la responsabilità. Il noleggio di una macchina propria può avere senso anche quando il modello necessario non è disponibile nell'API confidenziale o quando vogliamo il pieno controllo su ciò che è in esecuzione.

Ogni passaggio lo descriviamo con una scheda decisionale: che cosa guadagniamo, il costo completo, i rischi, le condizioni di avvio e di ritiro, il modo di trasferire dati e chiavi e la conformità alle [regole sulla riserva e sull'avvio degli ulteriori pilastri](whitepaper-zasady-fundacji.md) (capitolo 8 del whitepaper sui principi della fondazione). Ammettiamo la combinazione di una macchina propria con l'API confidenziale per i picchi di traffico solo quando ciascuna delle strade ha un livello di protezione accettato; il passaggio a una variante più debole richiede una decisione separata e consapevole dell'utente. Prevediamo la prima misurazione su una singola GPU confidenziale con un modello più piccolo, e la successiva su una macchina in grado di contenere il modello completo.

Adattiamo la potenza al traffico senza dimensionare tutto sul picco più alto. Progettiamo una breve coda con un tempo di attesa visibile; il suo tempo reale, il suo limite e il comportamento una volta esaurita li misureremo nel progetto pilota. La potenza flessibile per i picchi più lunghi la fornisce in primo luogo l'API confidenziale, a condizione che mantenga il livello di protezione accettato, il consenso e il limite di spesa dell'utente; quando una strada del genere non c'è, informiamo onestamente dell'attesa o dell'indisponibilità. Il noleggio orario ha senso per i modelli che non sono presenti nell'API confidenziale o che vi costano nettamente di più, e solo dove il fornitore permette davvero di avviare e rilasciare rapidamente le macchine confidenziali. La potenza libera della nostra macchina nelle ore più tranquille vogliamo usarla per i compiti della fondazione, come le analisi per OmniForum; il suo valore ai prezzi delle API non è un'entrata nel budget, quindi questi compiti hanno un proprio scopo e un proprio budget. Dopo il primo progetto pilota vogliamo provare due modalità: «Conversazione» per il normale lavoro con l'assistente e «Senza fretta» per i compiti che possono aspettare, per esempio la traduzione di un documento. Nella modalità «Senza fretta» mostriamo una finestra di avvio indicativa, una stima del costo, il budget massimo, la possibilità di annullare con la fatturazione del lavoro svolto e la stessa informazione sulla protezione. Un prezzo più basso per questo lavoro è possibile solo se deriva da un metodo pubblico di ripartizione dei costi, senza contare due volte il costo fisso.

### 8.3. Misurazione dell'uso senza il contenuto delle conversazioni

Per fatturare l'uso effettivo misuriamo le risorse necessarie a svolgere i compiti e descriviamo chiaramente la quota dei costi fissi. Il contatore di fatturazione si limita ai dati indispensabili per verificare il costo, e il contenuto della conversazione non è necessario per emettere il conto. Nelle prove verificheremo la precisione della misurazione, il modo in cui l'utente può controllarla, l'ambito dei metadati divulgati e il comportamento del servizio al raggiungimento del limite di spesa. Le regole del conto, degli arrotondamenti, dei pagamenti anticipati e dei rimborsi sono descritte nel [whitepaper sui principi della fondazione](whitepaper-zasady-fundacji.md).

Il limite di spesa impostato dal partecipante deve funzionare come un confine, e non come un avviso a cose fatte. Alcuni fornitori fatturano le richieste in corso solo dopo la loro conclusione, quindi i loro limiti possono essere superati; così lo descrive, per esempio, Tinfoil.[^tinfoil] Per questo progettiamo una prenotazione: prima di inviare una richiesta, il gateway di Suveria accantona dal saldo il suo costo massimo ammissibile, tenendo conto delle altre richieste in corso, e limita il numero di richieste parallele e la lunghezza della risposta. Al termine fatturiamo il costo effettivo e liberiamo la prenotazione non utilizzata. È un requisito da costruire e verificare, e non una funzione già operativa.

## 9. Prove di accettazione e diario dei risultati

Prima di definire confidenziale un qualsiasi rilascio, documenteremo almeno:

- un'attestazione corretta;
- il rifiuto di inviare i dati dopo la sostituzione del codice o della chiave;
- l'isolamento delle sessioni;
- le limitazioni dell'amministratore;
- l'assenza di contenuti nei log, nei dump e nella telemetria;
- la gestione della cache;
- la cancellazione e il recupero;
- il comportamento dopo un guasto;
- i limiti degli strumenti;
- i costi sotto carico.

Il risultato comprende la versione della configurazione e lo scenario in cui abbiamo cercato di violare la protezione.

Vogliamo che ogni rilascio di Suveria superi tutte le verifiche probatorie di almeno un verificatore indipendente dei servizi confidenziali: hardware e stato delle misure di sicurezza, attualità delle evidenze, collegamento della chiave della connessione con l'ambiente protetto, identità del programma in esecuzione, provenienza del codice e collegamento della richiesta con una macchina specifica, mantenendo la disponibilità. Pubblichiamo il risultato con la data dell'osservazione, la versione dei criteri e le evidenze per il rilascio, il modello e il percorso della richiesta specifici, e descriviamo le affiliazioni del verificatore insieme al risultato. Non promettiamo un posto in nessuna classifica. Superare la verifica significa raggiungere il controllo descritto in un dato momento, con limiti pubblici, e non sostituisce un audit né le nostre prove.

Quando avvieremo una nostra variante confidenziale, iscriveremo Suveria a ogni catalogo indipendente che verifica la confidenzialità dell'esecuzione dei modelli e gli metteremo a disposizione un endpoint per la verifica dell'attestazione; il primo esempio è confidentialinference.net (situazione al 31 ottobre 2026).[^confidentialinference] Non promettiamo l'inserimento, perché la decisione spetta al catalogo; promettiamo la candidatura, la risposta alle sue domande e la pubblicazione del risultato, anche negativo, con la data. Il catalogo verifica solo ciò che vede dall'esterno, di solito l'attestazione e il canale di connessione; non sostituisce un audit del codice o della configurazione né la valutazione dei canali laterali.

Le prove di archiviazione e trasferimento comprendono:

- il ripristino di una copia cifrata su un altro dispositivo autorizzato e il rifiuto della lettura senza la chiave corretta;
- la perdita di un dispositivo, il recupero dell'accesso con il metodo scelto e una presentazione comprensibile delle conseguenze della perdita di tutte le chiavi;
- la sincronizzazione di modifiche parallele senza la sovrascrittura silenziosa di una delle versioni;
- la lettura dell'esportazione in uno strumento indipendente senza un account presso l'operatore originario, con il confronto di originali, cronologia, fonti e collegamenti;
- la limitazione dell'ambito di un'integrazione e il blocco effettivo del suo accesso successivo dopo la revoca del permesso.

Fasi:

1. test di usabilità su materiali non sensibili;
2. prova tecnica della protezione;
3. progetto pilota limitato con condizioni chiare;
4. aumento graduale della scala.

Prima del progetto pilota stabiliremo e pubblicheremo le soglie: il tempo fino alla prima parola della risposta, il costo di calcolo per persona con il profilo misurato e la qualità del modello secondo il [whitepaper sui materiali e sul benchmark](whitepaper-materialy-i-benchmark.md). Considereremo riuscito il progetto pilota quando le soddisferà tutte e tre.

Il cambio di modello, di firmware o del metodo di accesso all'account può richiedere una nuova qualificazione, e un aggiornamento non può indebolire in silenzio la protezione concordata. Ogni rilascio ha una scheda pubblica:

- ambito di funzionamento;
- evidenze delle prove;
- limiti noti;
- persone responsabili;
- costi;
- modo di segnalare un problema;
- piano di ritiro.

La scoperta di una vulnerabilità porta alla limitazione dell'esposizione, all'informazione delle persone coinvolte e a una correzione verificabile.

Vogliamo condurre le prove apertamente. Invitiamo le persone che si occupano di sicurezza, crittografia, infrastruttura e applicazioni, compresi i creatori che presentano la tecnologia a un vasto pubblico, a progettare insieme le verifiche e a tentare di forzare la protezione su account di prova separati con dati inventati. Invitiamo anche i critici. Non paghiamo per la promozione, e ogni collaborazione la contrassegniamo secondo il [registro dei benefici](whitepaper-zasady-fundacji.md) (capitolo 7 del whitepaper sui principi della fondazione). I risultati, anche quelli negativi, finiscono nel diario dei risultati. Se vuoi partecipare, scrivi a [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) con l'oggetto «[Dołącz] Próby Suverii».

La prova più importante: un gruppo con i privilegi di operatore al di fuori dell'ambiente confidenziale (gateway, dischi, rete, log) cerca di leggere le conversazioni di account di prova in cui sono state nascoste stringhe di caratteri segrete. Se le estrae chiunque, anche noi, la prova non è riuscita.

Il primo rilascio di Suveria lo renderemo disponibile ad alcune persone che aiutano a configurarla. Se userà un'API confidenziale, la sua scheda di protezione (punto 2.3) dirà apertamente che il modello funziona presso un fornitore esterno, che l'attestazione è dichiarata dal fornitore e non l'abbiamo ancora verificata, e che i metadati non sono protetti. Poiché le prime persone aiutano anche a gestire il servizio, il primo risultato che pubblicheremo sarà la prova più importante descritta sopra, con una descrizione di ciò che è riuscito a fare l'operatore.

**Diario dei risultati.** Situazione al 29 ottobre 2026: non abbiamo ancora svolto nessuna delle prove descritte, non abbiamo noleggiato GPU e non abbiamo avviato alcun modello in Suveria. Ogni risultato successivo lo aggiungiamo qui con la data, la configurazione, lo scenario e la conclusione, anche quando la prova non riesce.

Restano da definire:

- il primo modello e un livello di qualità accettabile;
- la verifica indipendente delle API confidenziali e delle macchine confidenziali e la loro disponibilità in giurisdizioni con una forte protezione dei dati personali, come l'Unione europea con il GDPR;
- il tempo di risposta;
- le regole per le chiavi e la memoria;
- l'ambito minimo dei dati di fatturazione;
- gli obblighi legali dell'operatore rispetto alle segnalazioni di abusi;
- il modo di finanziare la continuità.

Il [whitepaper sui principi della fondazione](whitepaper-zasady-fundacji.md) descrive il budget, il calcolo dei costi e la responsabilità, e il [whitepaper sui materiali e sul benchmark](whitepaper-materialy-i-benchmark.md) la valutazione del comportamento dei modelli.

Fondazione Novus Ignis, Poznań, KRS 0001269575. Sito e manifesto: novusignis.org. Osservazioni: salve@novusignis.org.

## Note

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Ricerca di Georgia Tech, Purdue University e Synkhronix, pubblicata il 28 ottobre 2025: estrazione delle chiavi di attestazione di Intel TDX e SGX e di AMD SEV-SNP tramite collegamento fisico al bus di memoria DDR5, con conseguenze per il calcolo confidenziale di NVIDIA. Richiede l'accesso fisico al server; Intel e AMD considerano questi attacchi al di fuori dell'ambito della protezione. Commento: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Consultato il 28 ottobre 2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg e McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Saggio. Principi della conservazione della copia principale sui dispositivi dell'utente e del ruolo di supporto dei server, comprese le copie cifrate.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Descrizione dell'architettura. Esempio di collegamento della confidenzialità con il controllo del software e la trasparenza del sistema.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Specifica. Separazione della conoscenza del mittente e della richiesta in un determinato modello di fiducia; non è un anonimato completo.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit e Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Pubblicazione scientifica (USENIX Security 2024; versione preliminare arXiv 2403.09751). Dalla lunghezza dei pacchetti cifrati con il flusso della risposta, un osservatore della rete ricostruisce l'argomento e in parte il contenuto della risposta dell'assistente. Consultato il 30 ottobre 2026.

[^whisper-leak]: [McDonald e Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) e [commento di Microsoft (7 novembre 2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Pubblicazione di ricerca e descrizione del produttore. Dalla dimensione e dal ritmo dei pacchetti nel flusso cifrato della risposta si può riconoscere l'argomento della conversazione; alcuni fornitori hanno aggiunto un riempimento casuale dei pacchetti. Consultato il 30 ottobre 2026.

[^nvidia-platformy]: [NVIDIA: piattaforme supportate per i container confidenziali](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Documentazione del produttore. Requisiti dell'intera configurazione di processore, GPU e software.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Documentazione del produttore. Nella modalità PPCIe v2 la rete NVLink e NVSwitch appartiene alla parte fidata del sistema; la protezione PCIe non significa cifratura di tutto il traffico tra le GPU.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Documentazione del produttore. Modalità di calcolo confidenziale su più GPU Blackwell, compresa la protezione delle connessioni; richiede una configurazione compatibile.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definizione. I pesi aperti non stabiliscono se sia soddisfatta l'intera definizione di sistema aperto.

[^deepseek]: [DeepSeek-V4.1-Flash: scheda del modello](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Documentazione del produttore. Architettura, licenza MIT e capacità dichiarate del modello; non è una misurazione delle prestazioni di Suveria.

[^dpga]: [Digital Public Goods Alliance: standard](https://www.digitalpublicgoods.net/standard). Standard. Criteri di valutazione di un bene pubblico digitale; una direzione progettuale non è un riconoscimento ottenuto dalla DPGA.

[^lambda-cennik]: [Lambda: listino delle istanze](https://lambda.ai/pricing). Listino del fornitore. NVIDIA B200 SXM6 180 GB: 6,79 USD per ora-GPU nell'istanza con quattro GPU e 6,69 USD nell'istanza con otto; H100 SXM 80 GB: 3,99 USD; prezzi on demand, al netto delle imposte, senza modalità confidenziale. Consultato il 29 ottobre 2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, risultati della misurazione delle prestazioni](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Misurazione del fornitore. 4 × B200, vLLM, parallelismo tensoriale 4, decodifica speculativa, circa 8192 token in ingresso e 1024 in uscita per richiesta; con 64 richieste simultanee, in totale 3713,9 token in uscita al secondo e in media 66,8 token al secondo per conversazione. Senza data della misurazione. Consultato il 28 ottobre 2026.

[^azure-ncc]: [Azure: listino della macchina NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) e [descrizione della serie](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Listino del fornitore. Macchina confidenziale con una sola GPU H100 NVL 94 GB; da 6,98 USD all'ora (East US 2) a 8,90 USD (West Europe), Linux, pagamento a consumo. Consultato il 28 ottobre 2026.

[^deepseek-cennik]: [DeepSeek: listino API (versione cinese)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Listino del fornitore. Modello deepseek-flash (V4.1-Flash-1017): ingresso senza hit nella cache 1 CNY fuori picco e 2 CNY nel picco, uscita 4 e 8 CNY per milione di token. Conversione in USD secondo il [prospetto di eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), fonte ausiliaria. Consultato il 28 ottobre 2026.

[^abonamenty]: Prezzi degli abbonamenti: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (prospetto di geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); la chat di DeepSeek è gratuita ([descrizione](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Prezzi mensili in USD, al netto delle imposte; Kimi Plus 19 USD. Consultato il 28–29 ottobre 2026.

[^kimi-k31]: [Moonshot: lancio di Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) e [Kimi: descrizione di K3.1 Pro (24 ottobre 2026)](https://www.kimi.com/news/kimi-k3-1-pro). Documentazione del produttore. Versione ulteriormente addestrata di Kimi K3, circa 3 bilioni di parametri, contesto di 1 milione di token, pesi annunciati prima del 4 novembre 2026; licenza non annunciata. Prezzi API secondo OpenRouter: 2 / 10 USD per milione di token.

[^kimi-k3]: [Kimi K3: scheda del modello](https://huggingface.co/moonshotai/Kimi-K3). Documentazione del produttore. 2,8 bilioni di parametri, 104 miliardi attivi, contesto di circa 1 milione, MXFP4, licenza Kimi K3 License.

[^spheron-kimi]: [Spheron: implementazione di Kimi K3 (19 ottobre 2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Guida del fornitore. File dei pesi 1560,94 GB, configurazioni in grado di contenere il modello. Capacità di circa 1000–1600 token al secondo su 8 × B300 secondo un prospetto di misurazioni di terzi del 29 ottobre 2026; dispersione ampia.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro e DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Confronto indipendente. Indice v5 del 28 ottobre 2026: 46 e 32; velocità di circa 36 e 178 token al secondo. Consultato il 29 ottobre 2026.

[^kimi-k31-wagi]: [Moonshot AI: Kimi K3.1 Pro, repository dei pesi e scheda del modello](https://huggingface.co/moonshotai/Kimi-K3.1-Pro). Documentazione del produttore. 96 file safetensors, circa 1,56 TB; 2,8 bilioni di parametri, 104 miliardi attivi, 896 esperti, contesto di 1.048.576; MXFP4 per i pesi degli esperti. Consultato il 9 novembre 2026.

[^kimi-k31-licencja]: [Kimi K3.1-Pro License](https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE) e [elenco delle licenze approvate dalla Open Source Initiative](https://opensource.org/licenses). Testo della licenza e registro di un'organizzazione indipendente. Consultato il 9 novembre 2026.

[^kimi-k31-silniki]: [vLLM: ricetta per Kimi K3.1 Pro](https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro) e [SGLang: ricetta per Kimi K3.1 Pro](https://docs.sglang.io/cookbook/autoregressive/Moonshotai/Kimi-K3.1-Pro). Documentazione dei motori. vLLM richiede la versione 0.34.0, non ancora pubblicata; «Throughput was not tuned». Consultato il 9 novembre 2026.

[^kimi-k31-poufne]: Elenchi pubblici dei modelli dei fornitori di API confidenziali, esaminati il 9 novembre 2026; il riepilogo con gli indirizzi è negli atti della fondazione. Il modello in variante confidenziale era presso un solo fornitore; presso un altro era disponibile senza ambiente di esecuzione fidato.

[^aa-2026-11]: [Artificial Analysis: Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro) e [DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017). Confronto indipendente. Indice v5.0.1. Consultato il 9 novembre 2026.

[^tinfoil]: [Tinfoil: listino](https://tinfoil.sh/pricing). Listino del fornitore. DeepSeek-V4.1-Flash 0,65 USD in ingresso e 1,45 USD in uscita per milione di token; descrizione dei limiti di spesa. Consultato il 29 ottobre 2026.

[^phala-api]: [Phala: modelli confidenziali](https://phala.com/confidential-ai-models). Listino del fornitore. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD per milione di token; attestazione del gateway e conferme delle risposte secondo il fornitore. Consultato il 29 ottobre 2026.

[^near]: [NEAR AI: listino](https://near.ai/pricing). Listino del fornitore. Kimi K3: 3,30 / 16,50 USD per milione di token; sulla pagina principale prezzi diversi, discrepanza da chiarire. Consultato il 29 ottobre 2026.

[^phala-gpu]: [Phala: GPU confidenziali](https://phala.com/gpu-tee) e [listino](https://cloud.phala.com/about/pricing). Listino del fornitore. 8 × H200: 44,20 USD all'ora on demand, 32,20 USD con impegno di 180 giorni; 8 × B300: 65,60 USD (30 giorni), 62,40 USD (180 giorni); Intel TDX con il calcolo confidenziale di NVIDIA; nessuna macchina in Europa. Consultato il 29 ottobre 2026. Impegno pagato in anticipo, senza rimborso in caso di conclusione anticipata.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Offerta del fornitore. API confidenziale con server nell'Unione europea e attestazione remota; scelta di modelli aperti più ridotta rispetto ai fornitori statunitensi, prezzi non pubblicati. Confidenzialità dichiarata dal fornitore, non verificata da noi. Consultato il 30 ottobre 2026.

[^katalog]: [Confidential Inference Directory: metodologia e osservazioni](https://confidentialinference.net/attestation). Catalogo indipendente, sponsorizzato da un'azienda che offre inferenza confidenziale. 0 su 95 percorsi verificati da un capo all'altro nell'osservazione del 29 ottobre 2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: server AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) e [GPU Per Hour: prezzi dei server NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Offerta del produttore e prospetto dei prezzi. Server completo con otto GPU B300: 662.845,95 USD (21 settembre 2026).

[^semianalysis]: [BigGo Finance sull'analisi di SemiAnalysis (7 ottobre 2026)](https://finance.biggo.com/news/173039423dab79be). Analisi di settore. Il piano da 200 USD offre, con un lavoro intensivo, circa 12.000 USD ai prezzi di listino delle API; stime dei margini, non dati dell'azienda.

[^sglang-k3]: [SGLang: ricetta per Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Documentazione del motore. Configurazione verificata di Kimi K3 su 8 × B300; non riguarda Kimi K3.1 né la modalità confidenziale.

[^phala-cvm]: [Phala: listino delle macchine confidenziali](https://phala.com/pricing). Listino del fornitore. tdx.large (4 processori virtuali, 8 GB di memoria): 0,23 USD all'ora; disco 0,000139 USD per GB all'ora. Consultato il 29 ottobre 2026.

[^itu]: [ITU: Facts and Figures 2025, uso di internet](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Statistica internazionale. Percentuale di persone che usano internet nelle regioni del mondo nel 2025 (circa 6 miliardi di persone, il 74% della popolazione); le quote regionali nel nostro calcolo sono un'approssimazione: percentuale × popolazione della regione.

[^cai]: [Confidential AI: listino](https://confidential.ai/pricing). Listino del fornitore, prezzi del 26 ottobre 2026. DeepSeek V4.1 Flash: 0,30 USD in ingresso, 0,03 USD in ingresso dalla cache, 1,20 USD in uscita per milione di token; macchina 8 × B300 60 USD all'ora, minimo tre mesi, assegnazione entro alcuni giorni. Confidenzialità dichiarata dal fornitore, non verificata da noi.

[^voltage]: [VoltageGPU: listino](https://voltagegpu.com/pricing) e [ambito delle evidenze](https://voltagegpu.com/). Listino e dichiarazioni del fornitore. 8 × H200 64,62 USD all'ora con fatturazione al secondo; le evidenze pubblicate non comprendono l'attestazione di questa configurazione né degli switch NVSwitch.

[^epoch]: [The Decoder sui dati di Epoch AI (8 gennaio 2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) e [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Prospetto di un centro di ricerca indipendente. Potenza di calcolo installata per l'intelligenza digitale superiore a 15 milioni di equivalenti NVIDIA H100, fabbisogno superiore a 10 GW. Stima, non misurazione.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): confronto dei fornitori che eseguono modelli in ambienti di esecuzione fidati, con verifiche datate dell'attestazione; sito sponsorizzato dall'azienda Enclava, al momento della consultazione undici fornitori. Consultato il 31 ottobre 2026.
