---
tytul: Privacy e sicurezza di Suveria
opis: Da chi Suveria deve proteggere le conversazioni, come un messaggio attraversa il sistema, chi ha le chiavi e come verificheremo se la protezione funziona
grupa: suveria
kolejnosc: 2
menu: Privacy e sicurezza
---
# Privacy e sicurezza di Suveria

Questa pagina è per chi vuole sapere in che cosa deve consistere la protezione della privacy in Suveria prima di affidarle le proprie conversazioni. Approfondisce la pagina [Che cos'è Suveria](suveria.md) e in ogni parte rimanda al whitepaper.

Un principio guida l'insieme: la privacy non può basarsi sulla fiducia nelle buone intenzioni della fondazione o di chi amministra i server, ma su misure di sicurezza il cui funzionamento sia verificabile in modo indipendente. Il manifesto lo esprime così: «Ogni promessa di sicurezza deve avere una prova nel codice e nel silicio, non solo nelle nostre parole». I tuoi dispositivi personali devono essere il luogo principale in cui conservare le conversazioni e non creiamo accessi nascosti ai contenuti privati.

Suveria è oggi un progetto. Tutto ciò che segue descrive come deve funzionare; non abbiamo ancora svolto nessuna delle prove che devono confermarlo.

Per saperne di più: [manifesto, punto 2.2](../manifest.md#s2-2) e [punto 3.1](../manifest.md#s3-1).

## Da chi deve proteggere e da chi no

Proteggiamo il contenuto delle conversazioni e dei file, la cronologia e la memoria dell'assistente, le chiavi (cioè sequenze segrete di caratteri che aprono i dati cifrati), i dati di fatturazione e i metadati, cioè informazioni sulla connessione stessa: l'orario, l'indirizzo di rete e la dimensione della richiesta.

Un ambiente confidenziale è una parte del server isolata a livello hardware, nella quale nemmeno chi lo amministra può guardare. A confermare se sia davvero così deve essere l'attestazione, cioè una dichiarazione firmata dall'hardware che indica quale software gira sul server e con quale modalità di protezione. Un'API confidenziale è un ambiente di questo tipo presso un fornitore esterno, al quale si collega la nostra applicazione (un'API è un collegamento tra programmi). La tabella descrive il funzionamento previsto, non ancora verificato in una prova:

| Da chi deve proteggere | Modello sul tuo dispositivo | Ambiente confidenziale sui server | API confidenziale di un fornitore esterno |
| --- | --- | --- | --- |
| Chi amministra i server del fornitore | non applicabile: elaborazione sul dispositivo | deve proteggere: isolamento hardware | dichiarazione del fornitore, da verificare |
| Chi osserva la rete | non applicabile senza rete; il traffico delle integrazioni richiede una valutazione | protezione parziale: contenuto cifrato, i metadati richiedono misure distinte | protezione parziale, se la chiave della connessione è vincolata all'attestazione |
| Una persona con accesso fisico al server | non applicabile; conta l'accesso al dispositivo | non protegge: in un centro dati altrui il fornitore ha accesso; sul proprio hardware, controllo fisico visibile | non protegge: il fornitore ha accesso |
| La fondazione | non applicabile: la fondazione non partecipa all'elaborazione | deve proteggere: l'isolamento riguarda anche noi, le chiavi dei dati salvati le hai tu | deve proteggere il contenuto: il gateway, cioè la nostra componente che contabilizza le richieste, senza accesso al contenuto; mostreremo dove termina la cifratura prima del progetto pilota |

Legenda: «deve proteggere» indica la protezione prevista, «protezione parziale» protegge il contenuto ma non tutto ciò che lo circonda, «non protegge» esplicita un limite e «dichiarazione del fornitore, da verificare» significa che non confermiamo la protezione finché non l'abbiamo verificata di persona. Chi amministra i server del fornitore gestisce i server su cui gira il modello; chi osserva la rete vede il traffico tra il tuo dispositivo e il server, ma il contenuto è cifrato durante il transito; una persona con accesso fisico può aprire l'involucro del server; la fondazione siamo noi in quanto gestori del servizio.

È bene conoscere subito tre limiti. Il calcolo confidenziale non ripara un telefono o un computer infetto. Non protegge da chiunque abbia accesso fisico al server: nel 2025 un gruppo di ricerca ha costruito, per meno di mille dollari, un dispositivo che, con accesso fisico al server, permette di falsificare l'attestazione dell'hardware. La protezione sui server dipende anche dalle chiavi del produttore del processore, che deve essere onesto.

Per saperne di più: [whitepaper di Suveria, capitolo 2](../whitepaper-suveria.md#s2) e [punto 2.3](../whitepaper-suveria.md#s2-3).

## Come un messaggio attraversa il sistema

Suveria deve essere composta da un'applicazione sul tuo dispositivo, un gateway (la nostra componente del sistema che contabilizza le richieste e fa rispettare il limite di spesa), un ambiente confidenziale con il modello, un sistema di archiviazione delle copie cifrate e un intermediario facoltativo che nasconde il tuo indirizzo.

Nella variante a regime, un messaggio deve seguire questo percorso:

1. L'applicazione scarica la descrizione della versione approvata e verifica l'attestazione del server.
2. Confronta questa attestazione con una politica pubblica. La chiave con cui cifra il messaggio deve essere vincolata all'attestazione.
3. Solo dopo una verifica riuscita stabilisce una connessione cifrata. Una discrepanza blocca l'invio dei dati; il passaggio a un'altra variante richiede una tua scelta consapevole.
4. L'ambiente elabora la richiesta con accesso limitato alla rete e agli strumenti, restituisce il risultato ed elimina i dati di lavoro secondo la politica pubblicata.
5. La conversazione o la memoria viene salvata soltanto nella misura che scegli.

L'attestazione aiuta a stabilire che cosa è stato avviato, ma da sola non dimostra che quel codice sia sicuro; servono revisioni del codice e la possibilità di una verifica indipendente. Prima del progetto pilota mostreremo nell'applicazione dove termina la cifratura controllata dal tuo dispositivo e se il gateway vede il contenuto.

Usiamo particolare cautela quando colleghi fonti con messaggi di altre persone, per esempio una casella di posta. Un messaggio altrui può contenere istruzioni nascoste che cercano di indurre il modello a rivelare la memoria privata. Per questo l'assistente non può autonomamente inviare messaggi, aprire indirizzi di rete o modificare il Canone Personale (la tua raccolta di principi e valori) senza la conferma di una persona.

All'avvio del servizio pubblicheremo l'elenco di tutti i tipi di dati sul funzionamento del servizio che raccogliamo, con lo scopo e il periodo di conservazione. Non raccogliamo dati al di fuori dell'elenco.

Per saperne di più: [whitepaper di Suveria, capitolo 3](../whitepaper-suveria.md#s3).

## Le tue chiavi

Le chiavi dei contenitori privati, cioè delle raccolte di dati cifrati, restano sotto il tuo controllo. La fondazione non conserva le chiavi né parti di esse, quindi non può recuperare l'accesso per te né consegnare i tuoi dati. Il recupero dell'account presso il gestore non sblocca il contenuto.

Perdere tutte le copie della chiave può significare perdere definitivamente i dati. Per questo consideriamo metodi di recupero che si possono combinare: un secondo dispositivo con accesso, una chiave scritta su carta o salvata in un gestore di password, una chiave hardware oppure la suddivisione della chiave tra più persone fidate, nessuna delle quali può leggere i dati da sola. Per iniziare consigliamo un secondo dispositivo e una chiave scritta su carta. Verifichiamo ogni meccanismo con una prova di ripristino dei dati.

Per saperne di più: [whitepaper di Suveria, punto 2.2](../whitepaper-suveria.md#s2-2).

## Ciò che non si vede ma rivela informazioni: il ritmo della trasmissione

La risposta ti arriva in pacchetti, cioè porzioni di dati. La cifratura ne nasconde il contenuto, ma non la lunghezza o il ritmo. È un canale laterale: le informazioni trapelano non dal contenuto, ma dal modo in cui viene trasmesso. Studi del 2024–2025 hanno mostrato che chi osserva la rete può ricostruirne l'argomento e, talvolta, il contenuto della conversazione. Per questo, in modalità confidenziale, vogliamo inviare la risposta in porzioni di dimensione costante e a ritmo costante; questo comporta un certo costo in termini di latenza e larghezza di banda.

Per saperne di più: [whitepaper di Suveria, capitolo 3](../whitepaper-suveria.md#s3).

## Versioni verificabili

La fiducia nel software non deve dipendere da una sola persona né dalla sola fondazione. Chiunque può compilare autonomamente l'applicazione dal codice pubblicato e verificare che il risultato sia identico a quello che installa. Almeno due soggetti indipendenti esterni alla fondazione devono riprodurre la versione e confermarne pubblicamente la corrispondenza; finché non li troviamo, contrassegniamo la versione come non confermata da terzi.

Progettiamo la protezione completa per l'applicazione installata. Nel browser, il codice che verifica il server viene fornito ogni volta dal gestore, perciò la versione per browser descriverà chiaramente il proprio livello inferiore di protezione.

Per saperne di più: [whitepaper di Suveria, capitolo 3](../whitepaper-suveria.md#s3).

## Più GPU

Il modello che vogliamo avviare non entra in una sola GPU, quindi i dati passano anche tra le GPU. La protezione va verificata sia per le GPU stesse sia per i collegamenti tra loro; la dicitura commerciale «secure» non sostituisce questa verifica. Confrontiamo l'offerta del fornitore solo dopo una prova con la nostra applicazione.

Per saperne di più: [whitepaper di Suveria, capitolo 5](../whitepaper-suveria.md#s5).

## Come verificheremo se funziona

La prova più importante: un gruppo con i permessi del gestore al di fuori dell'ambiente confidenziale (gateway, dischi, rete, log) tenta di leggere le conversazioni di account di prova in cui sono state nascoste sequenze segrete di caratteri. Se qualcuno riesce a estrarle, noi compresi, la prova è fallita.

Prima di definire confidenziale una qualsiasi versione, documenteremo fra l'altro l'attestazione corretta, il rifiuto di inviare dati dopo la sostituzione del codice o della chiave, l'assenza di contenuti nei log e le operazioni di eliminazione e recupero. I risultati, anche quelli negativi, confluiscono nel diario dei risultati. Situazione al 29 ottobre 2026: non abbiamo ancora svolto nessuna delle prove descritte.

Vogliamo svolgere le prove apertamente. Se ti occupi di sicurezza, crittografia, infrastruttura o applicazioni, oppure vuoi esaminare il progetto con sguardo critico, scrivi a salve@novusignis.org con oggetto «[Partecipa] Prove di Suveria».

Per saperne di più: [whitepaper di Suveria, capitolo 9](../whitepaper-suveria.md#s9).

## Leggi e dicci che cosa ne pensi

Nel [whitepaper di Suveria](../whitepaper-suveria.md) trovi il confronto completo delle varianti e delle minacce, le misure di sicurezza dell'applicazione e l'elenco delle questioni da risolvere. Se qualcosa ti fa riflettere o sembra sbagliato, seleziona il passo nel documento e usa il pulsante «Ho un'osservazione» oppure scrivi a salve@novusignis.org.
