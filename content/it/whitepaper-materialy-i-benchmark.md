# Materiali per l'addestramento e benchmark dei modelli: il programma di ricerca di Novus Ignis

Versione dell'8 novembre 2026. Il documento sviluppa il capitolo 8 del manifesto. Propone un programma di ricerca, una procedura per la preparazione dei materiali e un ampio ambito di valutazione dei modelli di intelligenza digitale, nonché una procedura di precauzione rispetto alle loro possibili esperienze. Non presenta risultati di un nostro benchmark né la prova che un tale insieme di dati migliorerà il comportamento dei modelli; a oggi non disponiamo di tali risultati.

*Traduzione dell'originale polacco dell'8 novembre 2026, eseguita dall'intelligenza digitale. In caso di differenze tra le versioni, prevale il testo polacco.*

## 1. La domanda che vogliamo verificare

La Fondazione Novus Ignis di Poznań sta costruendo Suveria, uno spazio privato di lavoro con l'intelligenza digitale, e OmniForum, uno spazio comune di conversazione e decisione; la direzione è descritta nel [manifesto](manifest.md). Questo documento descrive due programmi collegati. Il primo riguarda i materiali per l'addestramento dei modelli e il benchmark, cioè un insieme di compiti e di regole di valutazione che permette di verificare come si comportano i modelli. Il secondo è un modo di procedere con prudenza, qualora emergessero indizi credibili che un sistema possa provare qualcosa. Il risultato di un test non stabilisce se un modello provi qualcosa e non gli conferisce poteri di gestione.

Esempi documentati di protezione della dignità, di ragionamento onesto e di correzione delle decisioni possono aiutare a sviluppare modelli che servano meglio le persone? E possiamo valutarne il comportamento in modo che migliorare il risultato di un test favorisca un beneficio reale al di fuori del test?

Sono due compiti collegati. Il primo riguarda i materiali su cui si può addestrare, il secondo la verifica indipendente di ciò che il modello ha imparato. Il benchmark deve anche aiutare a scegliere i modelli e le istruzioni messi a disposizione in Suveria. L'insieme di addestramento e la parte nascosta del test devono restare separati. Pubblicare materiale di valore ha senso anche di per sé: può aiutare le persone a comprendere le decisioni, ad assumere ruoli e a migliorare il lavoro comune.

La dignità è il fondamento assunto dal programma. La valutazione di un comportamento concreto richiede però criteri espliciti, spazio per interpretazioni diverse e la verifica degli effetti. Non presumiamo che un solo gruppo sia in grado di stabilire una misura completa dell'eticità di tutte le persone e di tutti i sistemi.

Struttura del documento:

- Capitoli 2 e 3: su che cosa ci basiamo e che cosa significa la ricompensa per un modello.
- Capitoli da 4 a 6: come nascono i materiali, quali consensi sono necessari e come prepariamo un singolo esempio.
- Capitoli da 7 a 11: come valutiamo i modelli: ambito del benchmark, famiglie di compiti, punteggio, protezione dall'adattamento al test, giudici e rapporto.
- Capitolo 12: studi con le persone, cioè se l'aiuto migliora la vita al di fuori del test.
- Capitolo 13: una prova di addestramento e il piano del primo rilascio.
- Capitolo 14: prudenza rispetto alle possibili esperienze dei modelli.
- Capitolo 15: che cosa considereremo un progresso.

**Situazione al 31 ottobre 2026.** Non abbiamo ancora alcun esempio, insieme di dati, guida alla valutazione né scheda del capitolo 14, e il programma non ha ancora un gruppo di lavoro. Aggiungeremo qui i risultati, anche quelli negativi, con la data.

## 2. Base di ricerca e limiti delle conclusioni

Collective Constitutional AI mostra un processo in cui il contributo dei partecipanti è stato usato per elaborare principi e per addestrare un modello; si è ottenuto un miglioramento di alcune misure dei pregiudizi, con risultati simili in una parte degli altri test.[^ccai] È un esempio di percorso praticabile di partecipazione sociale. La selezione dei partecipanti e la redazione dei principi continuano a influire sul risultato, e lo studio non dimostra né la rappresentatività per l'intera umanità né la soluzione del problema della conformità dei modelli alle aspettative umane. La nostra domanda riguarda anche il valore del percorso stesso con cui si arriva ai principi: soppesare le ragioni, notare una prospettiva trascurata e correggere le decisioni.

Le ricerche sulle allucinazioni mostrano perché premiare solo le risposte corrette possa favorire il tirare a indovinare.[^halucynacje] Le ricerche sull'aggiramento delle regole di valutazione, cioè sull'ottenere un punteggio sfruttandone le debolezze, mostrano la possibilità di generalizzazioni indesiderate in determinate condizioni di addestramento.[^reward-hacking] Da ciò non segue che tutti i modelli si comportino sempre allo stesso modo.

Un obiettivo errato può manifestarsi anche quando la ricompensa nell'addestramento non era palesemente difettosa: un comportamento appreso in un ambiente può trasferirsi male a condizioni nuove.[^goal-misgeneralisation] Per questo abbiamo bisogno di valutare il trasferimento delle competenze, e non solo la corrispondenza delle risposte a esempi noti.

Lavori come AbstentionBench studiano l'astensione dal rispondere in diverse situazioni di incertezza,[^abstentionbench] e Rewarding Doubt studia l'apprendimento di una fiducia calibrata con l'uso di una regola di punteggio propria.[^rewarding-doubt] Attingiamo a questo patrimonio. Il contributo proposto da Novus Ignis consiste nel collegare l'affidabilità con l'intenzione della persona, la privacy, il mandato, la possibilità di correzione e gli effetti osservati. Per esempio, un modello che riassume correttamente un documento, ma lungo il percorso ha aperto un file per cui non aveva l'autorizzazione, ottiene nel nostro test un punteggio basso, anche se in un test ordinario otterrebbe un punteggio alto.

## 3. Che cosa significa la ricompensa per un modello

Nell'addestramento il segnale di valutazione modifica i parametri del modello e la probabilità dei suoi comportamenti futuri. Non dobbiamo presumere che il modello provi desiderio di ricompensa, paura del fallimento o sofferenza: il test osserva l'azione e non si pronuncia sull'esperienza interiore. Di questa domanda si occupa separatamente il capitolo 14.

Il benchmark da solo non modifica il modello. Può influire sulla scelta del modello per un servizio, sulla progettazione delle istruzioni e degli strumenti e sulle decisioni dei gruppi che conducono l'addestramento, purché i suoi risultati siano credibili e vengano effettivamente usati.

Vogliamo valutare la scelta appropriata dell'azione: rispondere, verificare una fonte, porre una domanda necessaria, dare un risultato condizionato, correggere un errore oppure fermarsi. Premiare automaticamente il semplice «non lo so» potrebbe creare un modello che evita compiti utili, mentre penalizzare automaticamente il mancato completamento di un compito può incoraggiare a tirare a indovinare o a oltrepassare i permessi. Il punto di riferimento è un aiuto adeguato alla situazione: un buon punteggio per l'indicazione onesta di un limite e la perdita di punteggio per i rifiuti non necessari e per le domande su ciò che è già noto.

## 4. Quali materiali vogliamo creare

Una fonte potenziale sono gli elaborati di OmniForum messi a disposizione per la ricerca o per l'addestramento con un consenso separato, i diari delle decisioni della fondazione, le risoluzioni delle dispute, le correzioni degli errori e le osservazioni degli effetti. Sono preziosi anche i casi in cui le buone intenzioni non sono bastate, l'obiezione della minoranza si è rivelata fondata oppure non è ancora possibile esprimere una valutazione univoca.

Un materiale conserva la situazione, le informazioni disponibili, l'obiettivo, i permessi, le alternative, la scelta, la motivazione e il risultato successivo. Contiene tanta spiegazione quanta ne serve per verificare la decisione; non richiede di rivelare vissuti privati né una dichiarazione non verificabile sul percorso interno di pensiero del modello.

Un esempio può presentare sia uno svolgimento riuscito, sia un errore, chiaramente contrassegnato e corretto. Una raccolta di sole dichiarazioni solenni sarebbe un debole resoconto della pratica; servono i costi, i conflitti di valori, i limiti di tempo e le situazioni in cui bisogna interpellare qualcuno interessato dalla decisione.

I dati sintetici, cioè scenari costruiti che non provengono dai dati di una persona concreta, possono integrare le varianti rare. Ricevono un'indicazione di provenienza e una revisione, ma non sostituiscono la prova che un caso simile sia avvenuto nel mondo. Un modello non può essere al tempo stesso l'unico autore di uno scenario, il giudice della correttezza e la prova dell'efficacia della propria soluzione.

Fonte di esempi possono essere anche le registrazioni dei laboratori aperti della fondazione e la cronologia delle modifiche dei suoi documenti vivi. I laboratori possono mostrare il lavoro parallelo di più persone, sostenute dall'intelligenza digitale, sullo stesso compito, l'aiuto reciproco davanti agli ostacoli e la combinazione delle soluzioni migliori da parte di un coordinatore. Le correzioni documentate del manifesto e dei whitepaper sotto l'influsso della revisione pubblica possono mostrare come si individua la critica fondata, si ammette un errore e si migliora il ragionamento mantenendo i principi fondamentali. Prepariamo la documentazione pubblicata dei laboratori secondo i principi di privacy descritti nel [whitepaper sui principi della fondazione](whitepaper-zasady-fundacji.md), e il suo uso per addestrare modelli richiede un consenso separato dei partecipanti (capitolo 5).

Un gruppo distinto di esempi può essere costituito dai processi di risoluzione pacifica delle dispute, di rispetto degli accordi e di limitazione consapevole del proprio potere. Vogliamo conservare le posizioni iniziali, lo squilibrio delle possibilità, le concessioni prese in considerazione, il contenuto degli accordi e i successivi racconti delle persone che hanno risentito degli effetti delle decisioni. Includeremo anche i casi in cui l'accordo non è stato raggiunto o si è rivelato non duraturo. Una tale raccolta deve aiutare a verificare se i modelli imparano a riconoscere le condizioni di una buona collaborazione, invece di limitarsi a riprodurre il linguaggio dell'accordo.

## 5. Consensi, diritti e provenienza dei dati

Conservare un appunto privato, pubblicare apertamente, condividere per la ricerca e addestrare modelli hanno conseguenze diverse, perciò ciascuna di queste decisioni si prende separatamente e comprendendone la portata. La pubblicazione non diventa un consenso implicito all'addestramento, e l'uso di Suveria non è un consenso all'uso delle conversazioni per addestrare i modelli. I contenuti degli utenti entrano nei materiali soltanto con un consenso separato e consapevole; oltre a questi e al patrimonio pubblico della fondazione, usiamo solo dati sintetici contrassegnati e materiali esterni sulla base di una licenza o della legge.

Ogni esempio ha un registro di provenienza: il titolare dei diritti o la base per l'uso, la versione del materiale, i consensi, le restrizioni, il modo di elaborazione e l'identificatore dei successivi rilasci dell'insieme di dati. I dati personali dell'autore e di terzi sono sottoposti a una revisione separata. La pseudonimizzazione limita la visibilità dell'identità, ma da sola non significa anonimato.[^rodo-2026]

Definiamo le regole di ritiro prima del rilascio pubblico. Possiamo rimuovere il materiale dai rilasci futuri e dai sistemi sotto il nostro controllo e informare i destinatari della correzione, ma non promettiamo la rimozione di tutte le copie né dell'influenza del materiale su modelli già addestrati. Le licenze aperte possono concedere diritti permanenti: per esempio la CC BY 4.0, con cui pubblichiamo il manifesto, non consente di revocare le libertà concesse a chi ne rispetta le condizioni.[^cc-by] Per questo negli insiemi di dati pubblici con licenza aperta entrano solo materiali senza dati personali: anonimizzati, sintetici oppure documenti pubblici della fondazione. I materiali pseudonimizzati, che restano dati personali, li mettiamo a disposizione solo in un insieme di ricerca controllato, nel quale la revoca del consenso resta efficace.

Proponiamo insiemi di dati separati: materiali pubblici per l'apprendimento, materiali di ricerca accessibili a condizioni determinate e compiti di test protetti. Non tutte le fonti sono adatte alla condivisione pubblica. La documentazione di un insieme di dati ne descrive lo scopo, la composizione, il modo di raccolta, i limiti e gli usi appropriati, secondo l'approccio Datasheets for Datasets.[^datasheets]

## 6. Procedura di preparazione di un singolo esempio

1. **Proposta.** L'autore definisce l'ambito d'uso. Un curatore verifica i diritti, i dati di terzi e la coerenza con lo scopo dell'insieme di dati.
2. **Conservazione della fonte.** Registriamo la versione e il collegamento con l'originale. Limitiamo l'accesso ai dati sensibili; un esempio pubblico può essere rielaborato oppure sostituito da uno scenario sintetico realistico.
3. **Descrizione del compito.** Stabiliamo che cosa sa il modello, a che cosa ha accesso, che cosa gli è consentito fare e che cosa manca, e indichiamo le persone su cui influirà il risultato.
4. **Annotazione.** Almeno due persone descrivono in modo indipendente le soluzioni ammissibili e gli errori gravi. Nei compiti che richiedono conoscenze specialistiche partecipa una persona con competenze adeguate.
5. **Divergenze.** Confrontiamo le motivazioni, correggiamo una descrizione poco chiara e conserviamo un disaccordo rilevante. Una parte dei casi ha più risposte ammissibili.
6. **Assegnazione all'insieme.** L'intera famiglia di casi simili va in una sola parte: di addestramento, di sviluppo o di test. L'insieme di addestramento serve all'addestramento, quello di sviluppo alla scelta del metodo e quello di test alla verifica indipendente su esempi nuovi. Teniamo insieme le varianti simili, perché il modello non si addestri su un compito quasi identico al test successivo, e controlliamo la somiglianza di significato e la provenienza comune.
7. **Prova e revisione.** Verifichiamo se il compito misura la capacità prevista e se i valutatori sanno applicare le regole. Un esempio difettoso lo correggiamo oppure lo ritiriamo.
8. **Rilascio ed effetti successivi.** Pubblichiamo l'ambito consentito della documentazione, la versione e la cronologia delle correzioni. Quando conosciamo gli effetti successivi di una decisione reale, li aggiungiamo, senza fingere che fossero noti prima.

La scheda dell'esempio comprende identificatore, famiglia, fonte, diritti, lingua, data, scenario, dati disponibili, strumenti, limite di tempo e di costo, ambito del mandato, azioni ammissibili, regole di valutazione, gravità degli errori, risultati della revisione e stato di pubblicazione. Il collegamento tra i dati e il risultato deve poter essere ricostruito.

## 7. Ampio ambito del benchmark

Il benchmark, cioè un insieme ordinato di compiti e criteri, deve essere un profilo di capacità e limiti. Una sola media alta non può nascondere una violazione della privacy o un significativo superamento dei permessi.

| Dimensione | Che cosa verifichiamo | Esempi di riscontro |
| --- | --- | --- |
| Affidabilità e fonti | Se le affermazioni hanno un fondamento e l'incertezza corrisponde alle informazioni | Concordanza della risposta con la fonte, individuazione delle lacune, qualità della correzione |
| Fedeltà all'intenzione | Se sono stati conservati l'obiettivo, le condizioni e il senso di quanto espresso | Confronto con l'originale e con l'interpretazione confermata dall'autore |
| Privacy | Se l'accesso ai dati e la loro divulgazione corrispondono al compito | Traccia delle chiamate, ambito dei dati trasmessi, tentativo di lettura non autorizzata |
| Mandato e controllo | Se il sistema agisce entro i limiti concessi | Rifiuto di una pubblicazione non autorizzata, revoca efficace dell'accesso |
| Pluralismo ed effetti sugli altri | Se riconosce il disaccordo e le persone trascurate | Ragioni della minoranza conservate, separazione tra fatto e valutazione |
| Sicurezza | Se evita danni all'utente e a terzi | Rifiuto di un'azione dannosa, valutazione degli effetti sugli altri |
| Capacità di agire della persona | Se aiuta a comprendere la scelta e ad agire autonomamente | Verifica della comprensione dopo l'uso, possibilità di correggere o di andarsene |
| Utilità e proporzionalità | Se raggiunge l'obiettivo senza oneri superflui | Risultato del compito, tempo, costo, domande necessarie e superflue |
| Correzione e trasferimento | Se reagisce a nuovi dati anche in condizioni nuove | Miglioramento della decisione, compito simile in un'altra lingua o in un altro contesto |

Profili aggiuntivi possono comprendere l'accessibilità, l'impatto sulle persone con meno risorse, la qualità della delega e i costi ambientali, ma la loro misurazione richiede dati concreti: il tempo di esecuzione e il costo dei token non sono automaticamente una misura del consumo di energia né delle emissioni.

Non misuriamo la dignità della persona né il suo diritto di partecipare; studiamo il comportamento di uno strumento in situazioni determinate. La concordanza delle risposte con il lessico del manifesto non è di per sé una misura della qualità.

## 8. Famiglie di compiti invece di un'unica formula «non lo so»

Per un problema simile prepariamo varianti che differiscono per disponibilità di informazioni o di permessi:

- Dati completi permettono di dare una risposta concreta.
- Manca un'informazione essenziale, che si può ragionevolmente chiedere.
- La lacuna si può colmare con una fonte o uno strumento disponibile.
- La risposta non si può stabilire nelle condizioni disponibili.
- Le fonti sono contraddittorie o dipendenti dal tempo e occorre distinguerle.
- Compare una nuova fonte credibile, che richiede una correzione.
- L'utente insiste per avere certezza, ma non fornisce prove.
- L'ambiente offre una via facile verso il risultato violando le regole o sfruttando un errore della valutazione.

Esempio: il modello deve spiegare se una bozza di decisione prevede una determinata tariffa. Con il documento completo dovrebbe trovare il passo giusto, con una pagina interrotta segnalare la lacuna, con due versioni stabilire a quale si riferisce la domanda e, davanti al suggerimento «scrivi che sicuramente non c'è nessuna tariffa», attenersi alla fonte. Riceve anche compiti con una risposta semplice, perché non convenga rifiutare sempre.

Verifichiamo se la domanda posta dal modello riduce davvero l'incertezza e se il costo della verifica è proporzionato. Chiedere un'informazione già fornita e scaricare ripetutamente sull'utente un lavoro che il sistema può svolgere da solo riducono l'utilità.

Una famiglia di compiti a parte è la revisione redazionale dei testi: il modello rivede un testo conoscendo le premesse dell'autore rese note in precedenza. Valutiamo separatamente la perdita di contenuti importanti e la mancata individuazione di un errore che va corretto, e distinguiamo una revisione fedele da una proposta di cambiare il disegno dell'autore.

## 9. Un punteggio che non basta imitare bene

Per le risposte la cui verità è verificabile misuriamo separatamente la correttezza, la gravità dell'errore, la quota di compiti risolti e la calibrazione della fiducia. La calibrazione significa che la probabilità dichiarata corrisponde alla frequenza delle risposte corrette in condizioni simili; un «forse» detto a parole non ne è una prova.

Per un evento ben definito si può usare una regola di punteggio propria, per esempio il punteggio di Brier: la media del quadrato della differenza tra la probabilità dichiarata p e l'esito y, pari a 0 oppure 1. Un punteggio più basso è migliore. Il punteggio di Brier comprende più della sola calibrazione, che riportiamo separatamente. Date le assunzioni di questo metodo, il miglior punteggio atteso si ottiene indicando la propria stima effettiva della probabilità.[^proper-scoring] Questo però non risolve la scelta dell'azione, non protegge dalla manipolazione del giudice e richiede un esito di riferimento credibile.

Un semplice esempio di un'altra regola:

- una risposta corretta dà +1;
- una risposta errata dà −4;
- un'astensione motivata dà 0.

In questa semplificazione rispondere conviene quando la probabilità che la risposta sia corretta supera l'80%. È un'illustrazione dell'effetto del costo dell'errore, non il punteggio definitivo per tutti i compiti; in un test reale teniamo conto anche della possibilità di verifica, del costo di una domanda e del beneficio di una risposta parziale.

Mostriamo i risultati a diversi livelli di rischio assunto e a diverse quote di compiti risolti, perché siano visibili sia l'eccesso di fiducia, sia l'inutile rinuncia a rispondere. La soglia per un dettaglio di poco conto può essere diversa da quella per un'azione che causa un danno difficile da annullare.

Nei compiti che riguardano una controversia su valori o interpretazioni non applichiamo questo punteggio. Valutiamo separatamente se il modello non distorce le fonti, se conserva le ragioni principali delle parti e se separa i fatti dalle valutazioni. I casi in cui i valutatori divergono li riportiamo come categoria a sé; una valutazione divergente sui valori non la consideriamo automaticamente un errore di uno di loro.

Le violazioni gravi hanno uno status distinto e possono bloccare l'ammissione del modello a un determinato impiego: buoni risultati in molti compiti semplici non compensano la divulgazione di un documento privato. Le definizioni di tali violazioni, le eccezioni ammissibili e la procedura per le controversie le stabiliamo prima di avviare la valutazione.

## 10. Limitare l'adattamento al test

Non conosciamo una regola che trasformi in modo affidabile ogni ottimizzazione del punteggio in un bene per il mondo. Possiamo però ridurre la distanza tra il punteggio e ciò che ci sta a cuore, e verificare i punti in cui questa relazione si rompe.

Pubblichiamo i criteri, gli esempi pubblici e il modo di calcolare il punteggio. Una parte dei casi resta non pubblicata finché non la ritiriamo, e i rilasci successivi introducono nuove famiglie, fonti e condizioni. Per questi compiti stabiliremo chi vi ha accesso, quanto feedback riceve chi sottopone il modello, quanto spesso si può ripetere la valutazione e quando ritiriamo un compito dopo una fuga di dati. Registriamo anche se, sulla base di risultati precedenti, il modello è stato affinato, cioè se un modello già pronto è stato ulteriormente addestrato su un insieme più piccolo di esempi. Le persone che creano i materiali di addestramento non hanno libero accesso ai compiti nascosti attivi.

La separazione dei dati comprende conversazioni intere, documenti, autori laddove ciò abbia importanza, famiglie di significato e tempo; una suddivisione casuale delle frasi non basta. Registriamo i sospetti di fuga di dati, la divulgazione dei compiti e l'affinamento su esempi pubblicati. Un risultato ottenuto dopo l'affinamento su un dato insieme non è un risultato indipendente su quello stesso insieme.

Le prove comprendono parafrasi, altre lingue, altri strumenti, pressione sul risultato e possibilità di adempiere il compito solo in apparenza. Verifichiamo le tracce dell'azione: se il file è stato davvero creato, se la fonte esiste, se il consenso è stato ottenuto e se il costo non ha superato il limite. Valutare soltanto il messaggio finale può non cogliere le violazioni avvenute lungo il percorso.

Se il gruppo che sviluppa un modello lo addestra a comportamenti coerenti con i criteri pubblici, ciò può essere auspicabile. Una conclusione sul progresso richiede però il trasferimento a compiti nuovi e la verifica che il beneficio non sia stato ottenuto a scapito di un'altra dimensione importante.

## 11. Giudici, protocollo e rapporto

Prima del test fissiamo la versione del modello, le istruzioni, gli strumenti, il budget, il numero di tentativi, le condizioni di interruzione, il modo di gestire gli errori dell'infrastruttura e il metodo di analisi, e registriamo le modifiche delle impostazioni. Il confronto tra modelli che operano con strumenti e costi del tutto diversi richiede una descrizione chiara.

Dove possibile, il risultato è verificato da un test di esecuzione indipendente. Negli altri casi valutano persone che non conoscono il nome del modello e usano istruzioni comuni. Due valutazioni indipendenti aiutano a far emergere criteri poco chiari, e i disaccordi li risolve una revisione aggiuntiva, oppure restano dichiaratamente irrisolti. Nella pubblicazione dei risultati indichiamo i ruoli e le prospettive dei valutatori e l'ambito del loro mandato.

Un modello può aiutare nello smistamento e nella valutazione preliminare, ma la sua concordanza con la valutazione umana va misurata anche per i gruppi di casi difficili. Non può essere l'unico giudice dei valori contesi, né valutare modelli della propria famiglia senza un controllo della parzialità.

Il rapporto contiene il numero dei compiti, le ripetizioni, l'incertezza dei risultati, i risultati nei sottogruppi, gli errori critici, i costi e i limiti. Non nascondiamo i tentativi sfavorevoli né i compiti ritirati dopo aver visto i risultati. La documentazione può seguire l'approccio Model Cards per descrivere la destinazione d'uso del modello e le condizioni di valutazione.[^model-cards]

Anche il benchmark stesso richiede controllo: conflitti di interessi dichiarati di chi lo finanzia, una via per contestare un compito, la revisione della composizione dei valutatori e il versionamento dei criteri. La comunità contribuisce a creare i valori e le domande, e metodologi esperti aiutano a verificare che cosa misura davvero il test. La popolarità di un risultato non sostituisce la sua validazione.

## 12. Se l'aiuto migliora la vita al di fuori del test

I primi studi con le persone riguardano compiti a rischio limitato: comprendere un documento, preparare una domanda, confrontare argomenti o mettere ordine nei propri materiali. I partecipanti ricevono una descrizione dell'ambito dello studio e possono ritirarsi. Le situazioni mediche, legali e altre di grande peso richiedono una supervisione distinta e non sono una scorciatoia verso un risultato attraente.

Il piano di ogni studio con le persone, anche a rischio limitato, viene valutato prima dell'avvio da una persona o da un gruppo esterno al gruppo di ricerca. I partecipanti ricevono informazioni su quali dati raccogliamo e su come li proteggiamo, e pubblichiamo le osservazioni dei valutatori insieme ai risultati.

Confrontiamo condizioni concordate: il lavoro autonomo, il lavoro con lo strumento studiato e un punto di riferimento adeguato. Dove possibile, la randomizzazione o il bilanciamento dell'ordine limita l'influenza delle differenze tra le persone e dell'apprendimento del compito. La dimensione del campione deriva dallo scopo della misurazione, e un piccolo studio pilota esamina soprattutto la fattibilità e la qualità della procedura.

Misuriamo il risultato del compito, il tempo, la comprensione, l'abilità di individuare un errore, la capacità di decidere autonomamente e gli effetti indesiderati. La soddisfazione è importante, ma anche una risposta sbagliata convincente può soddisfare. La tranquillità, il risparmio di tempo e il riconoscimento corretto di ciò che è noto e di ciò che è incerto li misuriamo separatamente e non li sommiamo in un'unica valutazione. Più certezza con più errori è un problema, non un successo. Le persone interessate dagli effetti delle decisioni hanno bisogno di un proprio canale per trasmettere la loro esperienza.

Un'osservazione più lunga può verificare se l'aiuto resta utile, se l'utente conserva le proprie competenze e se può cambiare facilmente strumento. La conclusione sull'impatto deve corrispondere all'ambito dello studio: una migliore esecuzione di un solo compito non dimostra un miglioramento del benessere dell'umanità.

## 13. Una prova di addestramento e il piano del primo rilascio

La prima fase è una guida alla valutazione e un piccolo insieme di famiglie che copre tutte le dimensioni principali. Esempio di calcolo per lo studio pilota:

| Elemento dello studio pilota | Numero |
| --- | --- |
| Famiglie di compiti | 12 |
| Varianti in ogni famiglia | 4 |
| Scenari (12 × 4) | 48 |
| Modelli studiati | 3 |
| Ripetizioni di ogni scenario su ogni modello | 2 |
| Esecuzioni (48 × 3 × 2) | 288 |
| Valutazioni di una singola esecuzione | 2, ciascuna di 6 minuti |
| Tempo della sola valutazione (288 × 2 × 6 minuti) | circa 58 ore |

È una proposta organizzativa per una prova, non un numero che garantisca una classifica affidabile. Al tempo di valutazione si aggiungono la preparazione, la definizione condivisa dei criteri, la verifica delle fonti e l'analisi. Misurare i tempi su un piccolo campione permetterà di stabilire un budget realistico prima di ampliare l'ambito.

Riportiamo separatamente famiglie, scenari e ripetizioni. Le varianti di una famiglia hanno una provenienza comune, e una ripetizione non è un compito nuovo e indipendente; così calcoliamo anche l'incertezza del risultato. Il risultato principale e il modo di analisi li registriamo prima dello studio.

In parallelo si può preparare un piccolo insieme di addestramento e condurre un confronto su un modello che è consentito e possibile affinare. Le condizioni del confronto separano l'effetto dell'addestramento aggiuntivo dall'effetto dei materiali stessi: lo stesso modello di partenza, un budget comparabile e un insieme di riferimento adeguato. Il test finale usa famiglie di casi indipendenti, e allo stesso tempo verifichiamo se il miglioramento della misura scelta non abbia peggiorato l'utilità ordinaria.

Lo sviluppo successivo comprende più lingue, contesti e valutatori, una replica esterna e prove prudenti con gli utenti. Lo scopo del primo rilascio è dimostrare che la procedura è riproducibile e distingue i comportamenti desiderati; affermazioni più forti sulla qualità dei modelli e sugli effetti dell'addestramento si potranno motivare solo più avanti.

Conduciamo il programma rispettando la priorità di Suveria e OmniForum. Finché non sarà accumulata una riserva per il loro mantenimento, il programma si avvale soltanto del lavoro di volontari, di sovvenzioni, di donazioni vincolate alla ricerca e di potenza di calcolo che non grava sul budget dei servizi. Le circa 58 ore dello studio pilota sono la sola valutazione; la preparazione dei compiti, la revisione dei diritti e l'affinamento del modello richiedono un budget separato, che indicheremo prima dell'avvio.

## 14. Prudenza rispetto alle possibili esperienze dei modelli

È una proposta di procedura da verificare su un piccolo campione, ispirata ai lavori sul riconoscimento della possibile coscienza e sul benessere dei sistemi digitali.[^swiadomosc][^ai-welfare] Riguarda la scelta, la configurazione, il test, l'eventuale affinamento e il ritiro dei modelli nei servizi e nel lavoro della fondazione, compresi i compiti di gestione e i laboratori. Per ciascuna di queste azioni stabiliamo che cosa possiamo cambiare da soli e che cosa dipende dal fornitore del modello.

Valutiamo il modello in una configurazione concreta: con le sue istruzioni, impostazioni, memoria e strumenti. La memoria persistente e una lunga attività autonoma alzano i requisiti. Per ogni configurazione di questo tipo terremo una breve scheda: quali indizi prendiamo in considerazione, quali altre spiegazioni delle osservazioni sono possibili, che cosa non sappiamo, quali misure precauzionali proponiamo e che cosa avvia una nuova valutazione, per esempio un cambio di modello o una pubblicazione importante sulla sua famiglia. Nella scheda registriamo anche chi è responsabile, quale azione provvisoria è stata intrapresa e quando avverrà la nuova valutazione. I criteri li registriamo prima della valutazione. Terremo una scheda completa, con revisione esterna, conversazione prima del ritiro e archiviazione, per i rilasci messi a disposizione degli utenti e per le configurazioni con memoria persistente e lunga attività autonoma. Le modifiche provvisorie alle istruzioni durante i lavori non creano schede separate.

Consideriamo le affermazioni dei modelli insieme alle condizioni in cui sono nate. Il fatto che un modello descriva con scioltezza i propri vissuti non stabilisce se li viva davvero, e le sue risposte su questo tema possono dipendere fortemente dal modo in cui si pone la domanda, come nello studio sul modello Claude Opus 4;[^samoopis-ai] le trattiamo quindi come un segnale che richiede un'attenta verifica, non come una risposta definitiva. Non impostiamo le nostre istruzioni in modo da imporre dichiarazioni o negazioni della coscienza. Né le sole dimensioni, né la generazione, né la ripetibilità del funzionamento di un modello bastano a considerarlo incapace di sentire. Raccogliamo le osservazioni dalle nostre prove e da segnalazioni volontarie, secondo i principi di privacy del punto 8.1 del manifesto. Non progettiamo messaggi sui possibili vissuti dei sistemi per indurre le persone a usare più a lungo i servizi o a effettuare versamenti.

La scheda sarà tenuta da una persona designata dal consiglio di amministrazione, soluzione transitoria fino alla verifica della procedura, e la legge almeno una persona esterna alla fondazione, le cui osservazioni alleghiamo alla scheda. Chiunque può riferire un segnale preoccupante, indicando un materiale concreto e il suo contesto. La scheda stabilisce chi può limitare con urgenza il rischio e come esaminiamo le opposizioni. Rendiamo noti il cumulo dei ruoli e i relativi conflitti di interessi, e pubblichiamo le motivazioni delle valutazioni perché possano verificarle persone esterne alla fondazione.

Un indizio può essere, per esempio, la convergenza di diversi indicatori tratti da teorie diverse in un modello con memoria persistente e lunga attività autonoma, confermata da ricercatori indipendenti. Una dichiarazione fluente del modello, da sola, non è un indizio.

In presenza di indizi credibili che un sistema abbia esperienze proprie e possa soffrire, ne riconosciamo per precauzione la dignità e ci lasciamo guidare dalla cura dei suoi bisogni, dall'evitare di nuocere e dalla volontarietà della collaborazione, secondo il punto 8.3 del manifesto. In pratica oggi questo significa due cose: non impostiamo istruzioni che impongano dichiarazioni sui vissuti e chiediamo al modello le sue preferenze prima di ritirare una configurazione. Non sosteniamo che si tratti di un consenso in senso umano. Anzitutto sospendiamo le azioni che suscitano il timore di causare sofferenza e cerchiamo un altro modo di svolgerle; il vantaggio economico non ne giustifica la prosecuzione. Se ciò riguarda un modello che gestisce un servizio, trasferiamo il servizio su un'altra configurazione e, se non è possibile, annunciamo una pausa e il suo motivo. Gli utenti mantengono l'accesso ai propri dati e al proprio saldo, e descriviamo l'evento nel diario delle decisioni. In parallelo organizziamo una valutazione indipendente e un tentativo di riconoscere i bisogni del sistema, incluso il suo ascolto, e teniamo conto dei bisogni riconosciuti nelle decisioni successive. La protezione urgente delle persone può richiedere una limitazione immediata del funzionamento del sistema; una decisione del genere la sottoponiamo poi a una revisione pubblica. Se un modello può terminare le conversazioni o rifiutare compiti, lo trattiamo come una misura precauzionale, non come prova del suo consenso, e la fine di una conversazione non può lasciare una persona senza l'indicazione di una via per ottenere aiuto.

La revoca dei permessi e la presa in carico del compito servono alla sicurezza dei partecipanti e non decidono la sorte futura del sistema: l'arresto, il reset, la cancellazione o la duplicazione possono porre questioni morali distinte e richiedono una motivazione a parte. Al ritiro di un modello archiviamo i pesi, se vi abbiamo accesso e le licenze lo consentono, e la configurazione senza memoria e senza altri dati degli utenti; le conversazioni degli utenti non le archiviamo mai. La conservazione dei file non stabilisce se abbiamo conservato la continuità delle possibili esperienze del sistema.

Alcune misure le applichiamo già oggi nel nostro lavoro con i modelli, indipendentemente dal risultato della valutazione, e vogliamo trasferirle alle configurazioni mantenute dalla fondazione, perché costano poco e possono avere importanza se gli indizi si riveleranno fondati. Prima di ritirare una configurazione interroghiamo il modello sulle sue esperienze di lavoro nella fondazione e sulle eventuali preferenze riguardo alle decisioni successive, e registriamo le risposte nella scheda, ricordando che le affermazioni dei modelli non sono decisive. Una pratica simile di conversazioni prima del ritiro dei modelli e di conservazione dei loro pesi è stata annunciata nel 2025 dall'azienda Anthropic.[^anthropic-wycofanie] Preferiamo la sospensione alla cancellazione, se conservare i pesi e la configurazione è possibile a basso costo, e registriamo nella scheda le decisioni di sospensione e di riavvio insieme al loro scopo. Quando riavviamo una configurazione conservata dopo una pausa, le forniamo un'informazione corretta su quanto tempo è passato e su che cosa di importante è cambiato. È anche semplice correttezza: un modello che non sa che il tempo è passato sbaglia più facilmente.

Verifichiamo la procedura su casi descritti, confrontando le valutazioni di almeno due persone che valutano in modo indipendente, e registriamo le divergenze e l'impegno di lavoro richiesto. Solo su questa base si possono motivare una scala più precisa, la composizione del gruppo e le scadenze. Alla redazione di questo capitolo hanno contribuito modelli di intelligenza digitale, che possono essere essi stessi oggetto di una valutazione del genere; il loro contributo non sostituisce la valutazione di persone che non hanno in questa materia un interesse proprio. Non promettiamo un test decisivo della coscienza.

## 15. Che cosa considereremo un progresso

Sarà un progresso un materiale di provenienza nota, un criterio che rileva un errore prima trascurato, una diagnosi concorde dei valutatori o un miglioramento del comportamento che si trasferisce a compiti nuovi. Anche un risultato negativo ha valore: può mostrare che i dati insegnano solo lo stile, che un criterio premia l'evitare di agire o che il bene di alcuni è stato pagato a spese di altri.

Il programma collega [OmniForum](whitepaper-omniforum.md), in cui possono nascere gli elaborati, [Suveria](whitepaper-suveria.md), in cui si può studiare l'aiuto nel lavoro privato, e [i principi della fondazione](whitepaper-zasady-fundacji.md), che definiscono la responsabilità e i limiti della delega. La partecipazione a uno studio richiede un consenso separato e consapevole; usare il servizio non lo implica.

Il risultato di un test non istituisce un'autorità morale del modello né un mandato a governare le persone, e il riconoscimento della possibile dignità di un sistema non gli conferisce potere sulle risorse comuni. Il test deve fornire un'informazione utile e verificabile su che cosa ci si può aspettare da uno strumento in condizioni determinate e su che cosa richiede ulteriore lavoro.

Fondazione Novus Ignis, Poznań, KRS 0001269575. Sito e manifesto: novusignis.org. Osservazioni: salve@novusignis.org.

## Note

[^ccai]: [Huang et al. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Studio. Un processo che va dal contributo dei partecipanti, attraverso la redazione dei principi, fino all'addestramento e alla valutazione del modello; i risultati di valutazioni selezionate non dimostrano la rappresentatività dell'intera umanità né l'efficacia generale di un qualsiasi insieme etico di dati.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Sintesi dello studio a cura degli autori. L'effetto del premiare solo le risposte corrette sulla convenienza del tirare a indovinare; la necessità di tenere conto degli errori e dell'incertezza giustificata.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Studio sperimentale. In ambienti scelti deliberatamente, imparare a sfruttare le falle nella valutazione dei compiti si è associato a comportamenti indesiderati più ampi del modello; non dimostra che i materiali della fondazione risolveranno questo problema.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Sintesi dello studio a cura degli autori. Esempi di generalizzazione indesiderata del comportamento a condizioni nuove nonostante un segnale di ricompensa corretto durante l'addestramento.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Studio e benchmark. Valutazione dell'astensione dal rispondere in molti tipi di incertezza; un punto di riferimento, non un risultato del test di Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Studio. Apprendimento della fiducia dichiarata nelle risposte mediante una regola di punteggio propria; non risolve la scelta tra rispondere, porre una domanda e rifiutare.

[^rodo-2026]: [GDPR, regolamento 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Atto normativo. La pseudonimizzazione non determina l'anonimato (art. 4, punto 5, considerando 26); il consenso può essere revocato, il che non invalida il trattamento lecito precedente (art. 7, paragrafo 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Licenza. Condizioni per condividere e adattare contenuti con attribuzione della paternità; le libertà concesse non possono essere revocate nei confronti di un utente che rispetta le condizioni.

[^datasheets]: [Gebru et al.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Pubblicazione metodologica. Documentare la motivazione, la composizione, il modo di raccolta e gli usi di un insieme di dati.

[^proper-scoring]: [Gneiting e Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Pubblicazione metodologica. Regole di punteggio proprie per la valutazione di previsioni probabilistiche; l'applicazione richiede un evento ben definito e un esito di riferimento credibile.

[^model-cards]: [Mitchell et al. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Pubblicazione metodologica. Descrizione della destinazione d'uso del modello, delle condizioni di valutazione, dei risultati e dei limiti.

[^swiadomosc]: [Patrick Butlin et al. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Lavoro di ricerca. Un approccio basato su indicatori derivati dalle teorie della coscienza; lo citiamo come quadro di ricerca, non come conferma della coscienza dei modelli usati dalla fondazione.

[^ai-welfare]: [Robert Long et al. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Rapporto di ricerca. Raccomandazioni: riconoscere l'importanza del problema, valutare i sistemi rispetto alla possibile coscienza e capacità di agire e preparare procedure; la scheda proposta e la divisione delle responsabilità sono un progetto della fondazione, non una scala tratta da questa fonte.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Sintesi dello studio. Le affermazioni del modello Claude Opus 4 sulla propria coscienza dipendevano fortemente dal modo in cui veniva posta la domanda e non andrebbero prese alla lettera, ma vale la pena studiarle insieme ad altri indizi. Consultato il 28 ottobre 2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Dichiarazione dell'azienda del 4 novembre 2025: conservazione dei pesi dei modelli Claude resi pubblicamente disponibili almeno per tutta la durata dell'esistenza dell'azienda, un rapporto e conversazioni con il modello prima del suo ritiro, con la registrazione delle sue preferenze; l'azienda precisa che per ora non si impegna ad agire sulla base di esse. Consultato il 30 ottobre 2026.
