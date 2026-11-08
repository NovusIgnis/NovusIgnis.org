# Suveria : travail privé avec l’intelligence numérique

Version du 31 octobre 2026. Ce document développe les principes du manifeste qui concernent Suveria : comment nous voulons protéger la vie privée, comment doit fonctionner le travail avec l’intelligence numérique, combien cela coûte et comment nous le vérifierons. L’architecture décrite est un projet. La mention d’une technologie existante ou de la documentation d’un fournisseur ne signifie pas que nous l’avons mise en service dans Suveria. Nous ajoutons les résultats de nos essais au chapitre 9, toujours avec la date, la version de la configuration et le périmètre de la mesure.

*Traduction réalisée par une intelligence numérique à partir de l’original polonais du 31 octobre 2026. En cas de divergence entre les versions, le texte polonais fait foi.*

## 1. Ce qu’est Suveria et pourquoi elle est créée

Suveria doit être un espace privé sur internet, où une personne converse avec l’intelligence numérique, travaille sur ses propres documents et revient à ses réflexions antérieures, comme chez soi, porte fermée. Elle est conçue par la Fondation Novus Ignis de Poznań, dont les valeurs sont décrites dans le [manifeste](manifest.md), à l’intention des personnes de toutes les régions du monde. Elle repose sur des modèles ouverts d’intelligence numérique, et nous voulons mettre nos propres logiciels à disposition comme bien public numérique au code ouvert.

Suveria est créée parce que nous confions de plus en plus de choses à nos conversations avec l’intelligence numérique : des questions sur la santé, les relations, le travail, l’argent et les projets de vie. Dans de nombreux services populaires, le contenu de ces conversations aboutit sur les serveurs du fournisseur, qui peut le lire, et sa protection dépend des règles de ce fournisseur et de la confiance qu’on lui accorde. Nous voulons que l’on puisse parler des questions les plus importantes sans craindre qu’un regard aussi intime sur une personne soit un jour monétisé ou utilisé pour l’influencer. Nous voulons aussi que chacun paie pour ce qu’il utilise réellement, voie ce qu’il paie et fixe lui-même la limite de ses dépenses.

Dans Suveria, nous voulons qu’il soit possible de :

- converser avec l’intelligence numérique de questions personnelles et professionnelles, en voyant où la conversation est traitée et qui peut la voir ;
- travailler sur ses propres documents et fichiers, puis enregistrer les résultats et les emporter ailleurs dans des formats ouverts ;
- conserver les conversations, les fichiers et la mémoire de l’assistant avant tout sur ses propres appareils, chiffrés avec une clé qui reste sous le contrôle de l’utilisateur ;
- avec son propre accord, utiliser la mémoire des conversations antérieures, revenir aux raisons de décisions passées et constituer son Canon personnel (*Canon Personalis*), c’est-à-dire un recueil de ses propres principes et valeurs ;
- choisir son mode de travail, du modèle sur son propre appareil à l’environnement confidentiel sur un serveur, avec une information claire sur ce contre quoi chacun protège ;
- payer selon l’utilisation réelle, avec une limite de dépenses fixée soi-même ;
- mûrir une pensée en privé, puis l’apporter consciemment à la conversation commune dans Omniforum.

Nous destinons la première version aux personnes pour qui une protection vérifiable de la vie privée est la raison de leur choix.

Nous voulons que, dès le premier jour, Suveria donne le sentiment paisible d’être chez soi, dans un atelier privé que l’on aménage à son propre rythme. L’utilisateur pourra parler à l’assistant de ses affaires et de ses objectifs ; nous voulons aussi permettre d’importer dans Suveria ses propres notes et les archives de conversations antérieures avec d’autres services d’intelligence numérique. Ces archives doivent rester chiffrées et ordonnées sur l’appareil de l’utilisateur, et seule la partie choisie pour la question en cours doit être transmise au modèle distant (chapitre 3).

Nous mesurons la valeur du service à sa capacité d’aider à atteindre un but, à préserver sa vie privée et à décider par soi-même. Les conditions doivent être claires et faciles d’accès, et l’utilisateur doit maîtriser ses dépenses, pouvoir exporter ses propres documents et partir.

La protection totale de la vie privée, y compris à notre égard en tant que personnes qui exploitent l’infrastructure, est l’objectif auquel nous subordonnons la conception. La protection doit reposer sur des dispositifs de sécurité que l’on peut vérifier de manière indépendante, et non sur la confiance envers la fondation. C’est pourquoi chaque version décrit concrètement ce qui est protégé, contre qui, dans quelles conditions et quelles failles subsistent.

Le point de départ est une conversation écrite avec un seul modèle et le travail sur un document choisi, avec un niveau de protection clairement décrit, une limite de dépenses et l’export du résultat. Les fonctionnalités suivantes, comme la mémoire, la recherche, les intégrations et l’exécution d’actions, reçoivent chacune un périmètre d’autorisations distinct. Une seule interface pratique peut réunir plusieurs modes de travail, à condition que la personne voie où vont les données et quelles règles s’appliquent avant de les envoyer.

Ce sur quoi s’appuiera la première version dépend des fonds que la fondation réunira avant son lancement. Le plus probable est une API confidentielle d’un fournisseur externe ; de tels services sont disponibles aujourd’hui aux États-Unis, et leur confidentialité est au départ une déclaration du fournisseur, que nous vérifierons. Si les fonds suffisent pour louer nos propres serveurs dans un environnement confidentiel, la première version pourra fonctionner directement sur eux. Jusqu’à un résultat positif des essais du chapitre 9, nous qualifions chacune de ces options de protection déclarée, et non de protection confidentielle. Le chapitre 2 décrit la protection visée. Nous décrirons avant le lancement de la phase pilote ce qui en découle pour la protection des données personnelles des personnes résidant en Europe.

Utiliser Suveria ne vaut pas consentement à l’utilisation des conversations pour l’entraînement de modèles. Les contenus des utilisateurs n’entrent dans les matériaux de recherche qu’avec un consentement distinct et éclairé, et les autres matériaux proviennent de l’acquis public de la fondation et d’autres sources dont la base d’utilisation est claire, comme le décrit le [livre blanc sur les matériaux et le benchmark](whitepaper-materialy-i-benchmark.md).

Suveria complète Omniforum, l’espace commun de conversation et de décision : l’une offre un atelier privé, l’autre une tribune publique. Les valeurs dont sont issus ces deux projets sont décrites dans le manifeste de la fondation. Nous présentons ensuite successivement :

- ce que nous protégeons et contre quoi, où se trouvent les données et les clés (chapitre 2) ;
- comment un message va de l’appareil au modèle et comment le vérifier (3) ;
- comment nous limitons les abus sans lire les conversations privées (4) ;
- comment fonctionnent les calculs sur plusieurs cartes graphiques (5) ;
- quels modèles, quelle mémoire et quels outils nous prévoyons (6) ;
- quelle puissance de calcul est nécessaire, de 30 personnes à l’humanité entière (7) ;
- combien cela coûte, dans un calcul daté (8) ;
- comment nous vérifierons que les promesses fonctionnent : essais de validation et journal des résultats (9).

## 2. Ce que nous protégeons et contre quoi

Nous protégeons le contenu des conversations et des fichiers, l’historique et la mémoire, les clés, les données de facturation ainsi que les métadonnées, par exemple l’heure de connexion, l’adresse réseau et la taille de la requête. Chacun de ces domaines exige des mesures différentes.

Le tableau ci-dessous montre contre qui protège chacune des cinq options de travail décrites au point 2.3. Dans les options sur serveur, la protection repose sur l’attestation, c’est-à-dire une confirmation signée par le matériel indiquant quel logiciel fonctionne sur la machine distante et dans quel mode de protection. Nous avons rempli les cases à partir des chapitres suivants de ce document ; « déclaration du fournisseur » signifie que nous ne confirmons pas la protection tant que nous ne l’avons pas vérifiée nous-mêmes.

| Contre qui | Modèle local sur un appareil sans connexion au réseau | Modèle local sur un appareil connecté au réseau | Traitement dans un environnement confidentiel sur des serveurs | API confidentielle d’un fournisseur externe | API externe d’un fournisseur de modèle |
| --- | --- | --- | --- | --- | --- |
| Administrateur du fournisseur | sans objet : traitement sur l’appareil | sans objet pour le modèle seul ; avec des intégrations, dépend des services choisis | protège : isolation matérielle, inaccessible à l’administrateur du serveur | déclaration du fournisseur, à vérifier | ne protège pas : le fournisseur a accès au contenu |
| Autre client sur la même machine | sans objet | sans objet | protège : l’isolation couvre les autres clients | déclaration du fournisseur, à vérifier | dépend du fournisseur : la séparation des clients est assurée par son logiciel, sans isolation matérielle |
| Observateur du réseau | sans objet : aucun trafic réseau | protection partielle : le trafic réseau des intégrations demande une évaluation | protection partielle : contenu chiffré en transit, les métadonnées (heure, adresse, taille et rythme des paquets) demandent des mesures distinctes (chapitre 3) | protection partielle : comme dans l’environnement confidentiel, si la clé de connexion est liée à l’attestation | protection partielle : contenu chiffré en transit, métadonnées comme dans la colonne voisine |
| Personne ayant un accès physique au serveur | ne concerne pas le serveur ; ce qui compte est l’accès physique à l’appareil | ne concerne pas le serveur ; ce qui compte est l’accès physique à l’appareil | ne protège pas : dans le centre de données d’un tiers, le fournisseur a accès ; avec notre propre matériel, contrôle physique visible | ne protège pas : le fournisseur a accès | ne protège pas : le fournisseur a de toute façon accès au contenu |
| Fondation | sans objet : la fondation ne participe pas au traitement | sans objet : la fondation ne participe pas au traitement | protège : l’isolation nous couvre aussi en tant qu’opérateur, l’utilisateur détient les clés des données enregistrées | doit protéger le contenu : la passerelle facture les requêtes sans voir le contenu ; nous montrerons avant la phase pilote où s’arrête le chiffrement (chapitre 3) | doit protéger le contenu contre nous : facturation sans voir le contenu ; le fournisseur le voit |
| Fabricant du processeur | dépend de la confiance dans le matériel de l’appareil | dépend de la confiance dans le matériel de l’appareil | ne protège pas : l’attestation repose sur les clés du fabricant, qui doit être honnête | ne protège pas : comme dans la colonne voisine | sans importance au regard de l’accès du fournisseur au contenu |

L’informatique confidentielle change le coût d’une attaque : au lieu d’un accès administrateur à distance, il faut une intervention physique sur le matériel.

Nous décrivons ci-dessous comment doit fonctionner l’option visée, avec notre propre environnement confidentiel ; le tableau du point 2.3 montre en quoi les autres options diffèrent. Voici ce que cela signifie en pratique, sur les tronçons successifs du chemin que parcourt un message :

- **Sur l’appareil de l’utilisateur**, le texte est lisible, car c’est l’utilisateur qui l’écrit et le lit. Il est protégé par une application qui ne demande que les autorisations nécessaires, par les mises à jour et par la prudence avec les sauvegardes. Nous ne pourrons pas le protéger si un logiciel malveillant fonctionne sur le téléphone ou l’ordinateur.
- **En route vers le serveur**, le message est chiffré de sorte que seul le lieu de traitement vérifié puisse le lire. Avant de l’envoyer, l’application vérifie que c’est exactement le logiciel que nous avons publié qui fonctionne de l’autre côté.
- **Sur le serveur**, le modèle doit lire le contenu pour répondre ; il le fait donc dans un environnement matériel fermé, inaccessible à l’administrateur du serveur comme aux autres clients. Nous vérifions que cette isolation couvre le processeur, les cartes graphiques, la mémoire et les connexions entre eux.
- **Dans le stockage**, l’historique des conversations et la mémoire de l’assistant sont chiffrés avec une clé que détient l’utilisateur. Nous vérifions les sauvegardes, la récupération de l’accès et la suppression.
- **Dans l’exploitation du service**, la facturation, le diagnostic et les rapports d’erreurs fonctionnent sans le contenu des conversations, et chaque type de données collectées est public (chapitre 3).
- **Avec les outils externes**, lorsque l’assistant doit faire quelque chose en dehors de Suveria, par exemple chercher une information sur internet, il n’envoie que ce que l’utilisateur a accepté et montre où il l’envoie.

L’informatique confidentielle ne répare pas l’ordinateur infecté d’un utilisateur. Elle ne protège pas non plus contre toute personne ayant un accès physique au serveur : en 2025, des chercheurs ont montré qu’un dispositif branché sur le bus mémoire, construit avec des pièces coûtant moins de mille dollars, permet d’extraire les clés d’attestation dans les solutions d’Intel et d’AMD, et par là de falsifier l’attestation aussi dans l’informatique confidentielle de NVIDIA, et les fabricants de processeurs considèrent que de telles attaques sortent du périmètre de leur protection.[^teefail] Subsistent aussi des dépendances envers les fabricants de matériel, la justesse de la cryptographie, le code de l’application et le processus de mise à jour. Un fournisseur peut refuser le service même lorsqu’il ne sait pas lire le contenu. Le modèle de menaces doit donc distinguer l’accès au contenu, les déductions tirées des métadonnées, la modification du fonctionnement et l’interruption du service, et, pour chaque option, indiquer qui doit être honnête pour que la protection fonctionne.

Tant que nous utilisons les centres de données de tiers, c’est le fournisseur qui a l’accès physique au matériel, et nous ne pouvons pas le vérifier ; nous le disons pour chaque option. Avec notre propre matériel (étapes 3–4 du point 8.2), nous voulons rendre cet accès visible par :

- un inventaire des appareils ;
- le contrôle des entrées ;
- des scellés à motif aléatoire et des capteurs d’ouverture du boîtier ;
- un journal des interventions ;
- des caméras d’observateurs indépendants, dont l’image montre la valeur courante d’un générateur public d’aléa, signée avec la clé de la machine ;
- et, à plus long terme, une salle de serveurs que chacun peut voir.

L’entretien et le remplacement de pièces se déroulent selon des procédures annoncées et publiques. Un contrôle physique visible réduit le risque et permet de détecter de nombreux événements, mais il ne prouve ni toute l’histoire de la machine ni l’absence d’intervention avant la livraison, et des attaques semblables à celle décrite plus haut peuvent conduire à falsifier les preuves d’attestation. C’est pourquoi, après l’ouverture du boîtier, le remplacement d’une pièce, un redémarrage non planifié ou un autre événement suspect, nous suspendons le traitement de contenus privés sur cette machine. Nous remplaçons les clés de session et d’application, mais une nouvelle attestation ne rétablit pas à elle seule la confiance si le soupçon porte sur le fondement de l’attestation matérielle ; nous décrivons à l’avance les conditions et les preuves d’une nouvelle admission. Les clés qui chiffrent les données des utilisateurs bénéficient d’une protection et d’une récupération distinctes, de sorte qu’une telle procédure ne prive pas les personnes de leur acquis privé.

### 2.1. Ses propres appareils et des serveurs facultatifs

Les appareils de l’utilisateur doivent constituer le lieu principal de stockage des conversations privées, des fichiers et de la mémoire, dans des conteneurs chiffrés, c’est-à-dire des ensembles de données dont on lit le contenu avec la clé adéquate. C’est l’approche local-first : les données sont d’abord enregistrées sur l’appareil, et les serveurs peuvent soutenir les sauvegardes et la synchronisation.[^local-first] Les documents enregistrés doivent rester accessibles même après la fin de l’utilisation des services de la fondation ; les tâches qui exigent un modèle distant dépendent de la disponibilité du service de calcul choisi.

L’enregistrement facultatif sur des serveurs choisis sert aux sauvegardes et à la mise en cohérence des modifications entre appareils. Nous chiffrons le contenu sur l’appareil avant l’envoi, de sorte que l’opérateur qui conserve la copie ne reçoive qu’un enregistrement chiffré, sans la clé pour le lire. L’utilisateur choisit le fournisseur de stockage et les appareils autorisés à lire. Nous limitons séparément la divulgation des métadonnées, comme l’heure et la taille de la copie transférée.

### 2.2. Clés et récupération de l’accès

Les clés des conteneurs privés restent sous le contrôle de l’utilisateur. La procédure de récupération indique clairement si l’accès est rétabli par un second appareil, par une clé de récupération conservée ou par un autre mécanisme choisi en connaissance de cause, et à qui elle donne la possibilité de lire. Récupérer son compte auprès de l’opérateur ne déverrouille pas le contenu du conteneur. La perte de toutes les copies de la clé et de toute possibilité de récupération peut signifier la perte définitive des données ; c’est pourquoi nous vérifions le mécanisme choisi par un essai de restauration des données et le décrivons dans des instructions compréhensibles.

Nous envisageons plusieurs moyens de récupération, combinables entre eux : un second appareil qui a déjà accès ; une clé de récupération notée sur papier ou dans un gestionnaire de mots de passe ; une clé matérielle ; le partage de la clé entre plusieurs personnes de confiance, dont par exemple deux quelconques sur trois peuvent ensemble rétablir l’accès, sans qu’aucune ne puisse seule lire les données. La fondation ne conserve ni les clés ni des fragments de clés ; elle ne peut donc pas récupérer l’accès à la place de l’utilisateur ni livrer ses données.

Pour commencer, nous recommandons un second appareil et une clé notée sur papier ; le partage de la clé entre personnes de confiance est une option pour qui le souhaite.

### 2.3. Options de protection

Nous voulons comparer cinq options de travail, car chacune protège contre autre chose :

| Option | Où a lieu le traitement | Ce qu’il faut évaluer |
| --- | --- | --- |
| Modèle local sur un appareil sans connexion au réseau | Sur l’appareil de l’utilisateur | L’état de l’appareil, l’accès physique, les supports et les copies des données |
| Modèle local sur un appareil connecté au réseau | En local et, avec des intégrations, aussi dans les services choisis | Les autorisations de l’application, les mises à jour, le trafic réseau et l’étendue des données transmises aux intégrations |
| Traitement dans un environnement confidentiel sur des serveurs | Dans un environnement distant dont la configuration est confirmée par l’attestation | La vérification de l’environnement, l’accès des administrateurs et l’accès physique au matériel, la protection de la transmission et du traitement, les métadonnées et les clés |
| API confidentielle d’un fournisseur externe | Dans l’environnement confidentiel du fournisseur, dont la configuration doit être confirmée par l’attestation | Si la clé de connexion est liée à l’attestation, si l’attestation couvre le processeur et la carte graphique, s’il est possible de relier une requête précise à une machine précise, qui a un accès physique au matériel, la conservation des données et la juridiction ; jusqu’à notre propre vérification, nous traitons la confidentialité comme une déclaration du fournisseur |
| API externe d’un fournisseur de modèle | Chez le fournisseur externe | Les conditions du fournisseur, l’accès au contenu, la conservation et la juridiction ; nous n’étendons pas à cette option les promesses d’une exécution confidentielle |

La vérification indépendante du serveur exige une application installée. Dans un navigateur, le code qui vérifie le serveur est fourni à chaque fois par l’opérateur ; c’est pourquoi nous signalons ce mode comme moins protégé.

Un appareil connecté au réseau peut présenter plus de points d’attaque qu’un environnement serveur isolé ; le lieu du calcul ne détermine donc pas à lui seul la sécurité. Aucune option ne reçoit l’étiquette « protection totale de la vie privée » avant la vérification de la configuration concrète. À chaque conversation, l’utilisateur voit dans quelle option il travaille, et changer d’option exige sa décision consciente. Une clé personnelle pour une API externe permet de facturer l’accès, mais n’assure pas la confidentialité vis-à-vis du fournisseur. Cette option n’est pas l’option par défaut de la Suveria privée, et avant l’envoi du contenu nous indiquons si le fournisseur peut l’utiliser pour entraîner des modèles et combien de temps il le conserve.

Nous analysons aussi une piste qui ne figure pas encore dans ce tableau : l’essaim de confiance. Le modèle fonctionnerait alors sur le matériel de plusieurs personnes qui se connaissent et se font confiance, par exemple une famille, des amis ou une petite communauté, et chacune mettrait à disposition un peu de la puissance de calcul de son ordinateur. La protection de la vie privée dans une telle option repose sur la confiance envers ces personnes, et non sur la technique, car leurs ordinateurs voient les contenus traités, et c’est exactement ainsi que nous voulons la décrire. C’est une idée qui n’en est encore qu’au stade de l’analyse, mais c’est l’une des voies que nous voulons explorer.

Un serveur sûr ne protégera pas un texte lu depuis un téléphone compromis, et un téléphone plus sûr ne réparera pas le serveur ; c’est pourquoi nous concevons l’application en même temps que la protection de l’appareil. Nous voulons que l’application Suveria fonctionne sans les services Google, par exemple sous GrapheneOS, qu’elle soit disponible aussi en dehors du Google Play Store et que ses versions soient compilées de manière reproductible : chacun peut compiler soi-même l’application à partir du code source publié et vérifier qu’il obtient un fichier identique à celui qu’il installe. Nous prévoyons aussi des dispositifs de sécurité dans l’application elle-même : le blocage des captures d’écran, un mode de clavier qui n’apprend pas du texte saisi, l’exclusion des données privées des sauvegardes dans le nuage, le masquage du contenu des notifications et le verrouillage de l’application. Sur le site de la fondation, nous préparerons un guide de sécurisation de ses propres appareils à trois niveaux : des réglages de base et des mises à jour, en passant par une isolation renforcée du travail et des clés, jusqu’à des configurations éprouvées pour les personnes aux exigences les plus élevées, comme Qubes OS sur un ordinateur doté d’un micrologiciel ouvert. Utiliser Suveria n’exige pas d’acheter le matériel indiqué, et le nom d’un système n’est pas une certification de l’appareil tout entier.

À chaque conversation, nous afficherons une fiche de protection (*Charta Tutelae*) : la liste des éléments dont dépend la protection de la vie privée dans cette conversation, chacun dans l’un de trois états :

- **Vérifié par nous :** nous l’avons vérifié nous-mêmes, avec la date, la version et la description de la manière dont nous l’avons fait.
- **Déclaré par le fournisseur :** le fournisseur l’affirme, et nous ne l’avons pas encore vérifié.
- **Non protégé :** cette option ne le protège pas, par exemple l’heure et la longueur des messages visibles pour le fournisseur d’accès au réseau, l’accès physique du fournisseur au matériel ou la juridiction dans laquelle se trouve le serveur.

L’état « vérifié par nous » porte la date de la dernière vérification et expire : passé un délai fixé sans nouvelle vérification, il revient à l’état « déclaré ». Nous afficherons séparément les ruptures de confiance connues, par exemple un incident chez le fournisseur ou une modification de configuration non confirmée. La fiche est la même pour tous et ne dépend pas du prix, et une option dans laquelle ne serait-ce qu’un élément est seulement déclaré ne porte pas le nom « protection totale de la vie privée ». Le tableau du début du chapitre 2 et le tableau des options de ce point décrivent les options de manière générale, tandis que la fiche montrera l’état pour cette conversation précise.

## 3. Le chemin de l’appareil au modèle

Suveria doit se composer de plusieurs parties :

- une application sur l’appareil de l’utilisateur ;
- une passerelle, qui facture les requêtes et veille au respect de la limite de dépenses ;
- un environnement confidentiel avec le modèle, le nôtre ou chez un fournisseur ;
- le stockage des copies chiffrées ;
- un relais facultatif, qui masque l’adresse de l’utilisateur.

La passerelle doit fonctionner dans une machine confidentielle. Avant la phase pilote, nous montrerons dans l’application à quel endroit s’arrête le chiffrement contrôlé par l’appareil de l’utilisateur et si la passerelle voit le contenu, et si oui, uniquement à l’intérieur de l’environnement confidentiel.

Le stockage chiffré et le traitement confidentiel exigent des dispositifs de sécurité distincts. Un modèle qui fonctionne sur un serveur a besoin, pour sa tâche, d’un contenu lisible dans un environnement de calcul protégé ; le seul chiffrement des copies de fichiers ne protège pas cette étape.[^apple-pcc] L’application ne partage que la partie choisie pour le travail en cours, sans transmettre la clé de tout le conteneur privé. La description de la session indique où le contenu devient accessible pour le calcul, quels dispositifs limitent l’accès de l’opérateur au contenu et ce qu’il advient des données après le renvoi du résultat.

Déroulement proposé d’une session :

1. L’application télécharge la description de la version approuvée et vérifie l’attestation, c’est-à-dire une confirmation cryptographique de propriétés déterminées de l’environnement en fonctionnement.
2. Elle vérifie la conformité du matériel, de l’état de protection et des mesures du logiciel avec une politique publique. La clé du destinataire des données doit être liée à cette confirmation.
3. Après une vérification réussie, elle établit une connexion chiffrée avec l’environnement approuvé. Une divergence arrête l’envoi des données ; passer à une autre option exige un choix conscient.
4. L’environnement traite la requête avec un accès limité au réseau et aux outils, renvoie le résultat et supprime les données de travail conformément à la politique publiée.
5. La conversation ou la mémoire n’est enregistrée que dans la mesure choisie par l’utilisateur.

L’attestation aide à établir ce qui a été lancé, mais ne prouve pas à elle seule que ce code est sûr. Il faut des revues de code, une compilation reproductible du logiciel à partir du code source (décrite au point 2.3), un registre des versions approuvées et la possibilité d’une vérification indépendante. L’architecture Apple Private Cloud Compute est pour nous une référence sur la manière de lier la protection à la transparence de la publication des logiciels ; elle n’est pas une certification de notre projet.[^apple-pcc]

Nous voulons sécuriser les versions publiées de sorte que la confiance ne dépende ni d’une seule personne ni de la fondation seule :

- chaque version doit pouvoir être compilée de manière reproductible à partir du code source, et au moins deux parties indépendantes extérieures à la fondation la reproduisent et confirment publiquement la concordance de l’empreinte ; tant que nous ne les avons pas trouvées, nous signalons la version comme non confirmée par des tiers ;
- les empreintes des versions approuvées sont inscrites dans un registre public, auquel on peut seulement ajouter, et dont les états successifs sont confirmés par des témoins indépendants ;
- une nouvelle version est déployée sur les serveurs après approbation par plusieurs personnes, dont au moins une extérieure au conseil d’administration ;
- les clés nécessaires au traitement des données ne sont remises qu’à un environnement qui a passé l’attestation.

Nous concevons l’option de protection complète pour des applications installées, avec des versions signées et vérifiables, une protection contre le retour à une version défectueuse et un stockage sûr des clés, car dans un navigateur le code qui vérifie le serveur est fourni à chaque fois par l’opérateur. La version pour navigateur décrit clairement son niveau de protection inférieur. La compilation reproductible permet de comparer une version avec le code, mais l’évaluation du code lui-même et de la configuration reste assurée par des revues, des audits et des primes aux signalements de bogues, et chaque incident est inscrit dans un registre public.

Pour limiter la divulgation de l’adresse de l’utilisateur, on peut étudier un relais fondé sur Oblivious HTTP, qui sépare la connaissance de l’expéditeur et celle du contenu de la requête, selon un modèle de confiance déterminé.[^ohttp] La collusion des relais, la corrélation du trafic et les détails de mise en œuvre demandent encore une évaluation ; c’est pourquoi nous ne présentons pas le seul usage de ce protocole comme un anonymat complet.

Le chiffrement et l’informatique confidentielle ne masquent ni la longueur ni le rythme des paquets dans lesquels circule la réponse. Des recherches de 2024–2025 ont montré qu’un observateur du réseau peut en reconstituer le sujet, et parfois le contenu, d’une conversation.[^weiss-keylogging][^whisper-leak] C’est pourquoi, en mode confidentiel, nous voulons envoyer la réponse en trames de taille constante et à un rythme constant, ne pas partager entre utilisateurs le cache des requêtes et désactiver le décodage spéculatif. Ces mesures coûtent un peu de latence et de débit ; nous en tiendrons compte dans le calcul.

Nous protégeons aussi l’infrastructure en limitant les possibilités d’action de chacune des parties du système : limites de ressources, isolation des tâches et blocage par défaut des connexions sortantes du nœud qui traite la conversation. Ce blocage doit faire partie du logiciel dont l’empreinte apparaît dans l’attestation : le modifier change l’empreinte, et l’application refusera donc la connexion. Nous traitons les règles réseau du fournisseur comme une seconde couche, et non comme une garantie. Les actions externes autorisées passent par une couche d’outils distincte, avec des autorisations fixées par l’utilisateur. Avant le déploiement, nous vérifierons l’efficacité de ces limites, la manière de détecter les incidents et l’étendue minimale nécessaire des métadonnées. Le but est la sécurité des ressources communes tout en préservant la confidentialité du contenu des conversations.

Nous sommes particulièrement prudents lorsque l’utilisateur connecte des sources contenant des messages d’autres personnes, par exemple une boîte de courriel. Le message d’autrui peut contenir des instructions cachées qui tentent d’amener le modèle à révéler la mémoire privée. C’est pourquoi nous séparons les contenus venus de l’extérieur des instructions de l’utilisateur : lorsqu’il les met en ordre, l’assistant ne peut pas, de lui-même, envoyer de messages, ouvrir des adresses web ni modifier le Canon personnel sans la confirmation d’une personne.

Tout ce que nous savons du fonctionnement de Suveria, chacun peut le savoir. Dès la mise en service, nous publierons la liste de tous les types de données que nous collectons sur le fonctionnement du service, avec leur finalité et leur durée de conservation, et nous mettrons ces données à disposition sous forme agrégée : consommation de tokens, modèles utilisés, charge des machines, temps d’attente dans la file, pannes et coûts. Chacun les voit au même endroit que nous. Avant de publier les tableaux, nous vérifions qu’ils ne permettent pas de reconnaître le comportement d’une personne précise : nous fixons une taille minimale de groupe, un délai de publication et les données que nous omettons. Nous ne collectons pas de données en dehors de la liste ; s’il en allait autrement, nous le traiterions comme un incident grave et le décririons publiquement.

## 4. Limiter les abus sans accès aux contenus privés

Nous étendons la protection de la dignité aussi aux personnes que peuvent toucher les effets de l’usage de nos outils. Nous voulons prévenir les abus sans lire les conversations privées : par les principes que suit l’assistant lui-même, par des limites aux autorisations des outils et aux connexions réseau, par des limites de ressources et par une protection contre la création massive de comptes. Nous ne créons pas d’accès cachés aux contenus privés, car ils affaibliraient la protection de tous.

Il sera possible de créer un compte de plusieurs manières, de la plus privée (une clé sur son propre appareil, sans adresse électronique) à la plus pratique (connexion par un fournisseur externe). Pour chaque manière, nous indiquerons avant le choix qui, en dehors de la fondation, apprend la création du compte et quelles données il voit, et ce qui se passe si ce fournisseur disparaît. La manière de créer le compte n’affecte pas les droits du participant ; le droit de vote dans Omniforum est une attestation distincte ajoutée au compte.

Nous évaluons séparément la vie privée et la limitation des abus. Nous concevons Suveria de sorte que la fondation ne dispose pas de données qu’elle pourrait livrer sur une personne précise : les contenus sont chiffrés avec les clés de l’utilisateur, nous ne collectons des données sur le fonctionnement du service que dans le périmètre public décrit au chapitre 3, et nous limitons les données personnelles au minimum exigé par la loi pour les paiements et la comptabilité ; nous en publions aussi l’étendue. Si quelqu’un exige de nous les données d’une personne précise, nous voulons pouvoir répondre honnêtement qu’au-delà de ce minimum décrit publiquement nous ne les avons pas. Pour chaque dispositif contre les abus, nous décrirons de quelles données il a besoin, combien de temps nous les conservons, quelles conséquences il a pour un participant honnête et comment contester un blocage erroné.

Nous décrirons aussi comment nous recevons les signalements de personnes qui s’estiment lésées, et ce que nous pouvons faire alors sans accès au contenu des conversations : par exemple restreindre les autorisations des outils ou les ressources du compte, vérifier les données de facturation et les métadonnées dans la mesure où nous les conservons, ou indiquer à la personne qui signale où chercher de l’aide. Les obligations légales de l’opérateur d’un tel service exigent une analyse distincte avant le lancement.

Ces dispositifs sont des objectifs et des options à tester, et aucun d’eux ne détectera tous les abus. Pour chacun, nous indiquerons à quelles menaces il répond, ce qu’il ne détecte pas et ce que l’on peut vérifier sans que l’opérateur ait accès aux conversations privées. Le résultat de cette évaluation fixe les conditions de mise à disposition de la fonctionnalité concernée.

Lorsqu’une conversation concerne un danger pour la vie ou la santé, l’assistant doit fournir des informations sur l’aide disponible, par exemple les numéros d’urgence, sans rien envoyer en dehors de l’environnement privé.

### 4.1. Instructions publiques de l’assistant et bibliothèque commune

Le comportement de l’assistant dépend aussi de son instruction principale et de sa manière de travailler : comment il découpe une tâche en étapes, utilise la mémoire et vérifie ses réponses. Dans Suveria, chaque personne doit toujours pouvoir lire l’instruction complète de son assistant. L’infrastructure commune ne doit mettre à disposition que des modèles et des réglages qui passent les essais publics du benchmark ; au-dessus de ce minimum, c’est l’utilisateur qui choisit le style de travail, de la mise en ordre paisible de ses pensées à une conversation exigeante dans laquelle l’assistant relève les failles du raisonnement. Nous voulons tenir une bibliothèque ouverte d’instructions éprouvées, que les participants améliorent dans Omniforum et vérifient dans le benchmark.

## 5. Calculs sur plusieurs cartes graphiques

Le modèle du chapitre 6 ne tient pas sur une seule carte graphique ; il faut donc vérifier la protection aussi dans les connexions entre les cartes : le bus PCIe relie le processeur aux cartes, tandis que NVLink et NVSwitch relient les cartes entre elles.

Lorsqu’un modèle utilise plusieurs cartes graphiques, les données circulent aussi entre elles ; il faut donc vérifier la protection tant pour les cartes elles-mêmes que pour les connexions. Le nom de la carte ne suffit pas pour commander un service confidentiel : il faut confirmer la machine adéquate, le processeur, la topologie des connexions, le micrologiciel, les pilotes et le logiciel d’exécution, puis vérifier leur fonctionnement d’ensemble.[^nvidia-platformy]

Dans le mode Hopper Protected PCIe, décrit dans la documentation PPCIe v2, le réseau NVLink et NVSwitch appartient à la partie de confiance du système ; le chiffrement PCIe ne signifie donc pas le chiffrement de chaque connexion entre les cartes.[^nvidia-ppcie-v2] La documentation NVIDIA R595 décrit pour les cartes Blackwell un mode d’informatique confidentielle sur plusieurs cartes, avec chiffrement des connexions NVLink et prise en charge de jusqu’à huit cartes dans une seule machine virtuelle confidentielle.[^nvidia-blackwell] C’est une base pour vérifier la configuration, et non la preuve que toute location de cartes B200 comprend cette fonction. Les différentes versions ont des matrices de compatibilité différentes ; nous ne composons donc pas la configuration à partir de versions choisies au hasard.

La demande adressée au fournisseur porte sur :

- le mode de protection précis et la possibilité d’une attestation autonome ;
- l’exclusivité des ressources requises et la région ;
- l’accès des administrateurs et l’accès physique au matériel ;
- la conservation des données ;
- le délai de livraison et le coût complet.

Nous ne comparons une offre qu’après un essai avec notre propre application. La mention commerciale « secure » ne remplace pas ces informations.

## 6. Modèle, mémoire et outils

Le projet repose sur des modèles ouverts que l’on peut faire fonctionner soi-même. Suveria doit être accessible aux personnes du monde entier, dans leurs propres langues ; c’est pourquoi, en choisissant un modèle, nous prenons en compte la qualité dans de nombreuses langues, la compréhension des intentions, la fiabilité, la licence, le coût et la possibilité de le faire fonctionner dans l’architecture de protection requise. Si le besoin s’en fait sentir, nous pourrons faire fonctionner, à côté du modèle général, des modèles qui maîtrisent mieux certaines langues. Des poids ouverts rendent possibles certains usages, mais ne garantissent pas l’ouverture des données ni de tout le processus de création du modèle.[^osi]

Le premier candidat est DeepSeek-V4.1-Flash, un modèle sous licence MIT, qui permet de l’utiliser aussi pour des services.[^deepseek] Il est grand, mais économe : le fabricant indique 552 milliards de paramètres pour la partie principale, c’est-à-dire de nombres ajustés pendant l’apprentissage, et une mémoire supplémentaire Engram de 196 milliards de paramètres, tandis que, pour chaque mot suivant, seuls 8 à 16 milliards de paramètres travaillent ; c’est pourquoi il répond vite et à bas coût (calcul au chapitre 8). Tous les paramètres doivent toutefois tenir dans la mémoire des cartes graphiques, ce qui exige au moins quatre cartes modernes. Les paramètres de ce modèle sont déjà enregistrés sous une forme économe, avec moins de chiffres pour chaque nombre ; un tel enregistrement s’appelle quantification et réduit la mémoire nécessaire, mais peut abaisser la qualité, si bien que nous le vérifions à chaque version sur nos propres tâches. Nous le comparons aussi à des modèles plus petits : nous ne choisissons le plus grand que s’il accomplit nettement mieux les tâches importantes pour les personnes.

Le deuxième candidat est Kimi K3.1 Pro de la société Moonshot AI, publié le 23 octobre 2026. Le fabricant le décrit comme une version de Kimi K3 à l’entraînement prolongé, avec environ 3 000 milliards de paramètres et un contexte allant jusqu’à un million de tokens, et annonce la publication des poids complets avant le 4 novembre 2026 ; la licence n’a pas encore été annoncée.[^kimi-k31] Les données détaillées que nous utilisons pour la comparaison proviennent de la fiche du prédécesseur : Kimi K3 compte 2 800 milliards de paramètres, dont 104 milliards travaillent pour chaque token, et une licence propre, non approuvée par l’Open Source Initiative.[^kimi-k3] Dans l’indice d’Artificial Analysis, dans sa version du 28 octobre 2026, Kimi K3.1 Pro a obtenu 46 points contre 32 pour DeepSeek-V4.1-Flash, mais il est plusieurs fois plus cher et plus lent.[^aa] Les fichiers de poids de Kimi K3 occupent environ 1,56 To, et son fonctionnement exige en plus de la mémoire pour le contexte et les calculs ; nous ne décidons donc pas, sur la seule base de la mémoire totale des cartes, si le modèle fonctionnera. La recette du moteur SGLang décrit une configuration vérifiée de Kimi K3 sur huit cartes B300 ; ce n’est pas encore un test de Kimi K3.1 ni d’une configuration confidentielle.[^spheron-kimi][^sglang-k3] Après la publication des poids, nous vérifierons leur taille et leur format, la licence, les recettes des moteurs, la capacité sur une configuration précise et la disponibilité dans des API confidentielles. Nous ajouterons le résultat, daté, comme première mise à jour de ce document, y compris si les poids n’ont pas été publiés ou si les conditions de la licence se révèlent inadaptées.

Nous annonçons à l’avance le changement ou le retrait d’un modèle. L’historique des conversations reste chez l’utilisateur : il peut choisir un modèle successeur, exporter ses données ou cesser le travail. Le moment du changement de modèle doit être visible dans la conversation, et le transfert du contexte privé vers le nouveau modèle exige la décision de l’utilisateur.

Nous publierons dans leur intégralité, avec chaque version, les principes selon lesquels l’assistant répond. Le modèle lui-même porte aussi les choix de son créateur, par exemple les sujets qu’il évite ; nous les vérifions dans le benchmark et les décrivons lors du choix du modèle.

La mémoire des conversations antérieures doit fonctionner avec l’accord de l’utilisateur et être modifiable de manière transparente. Nous distinguons les propos originaux, les résumés du modèle et les informations confirmées par l’utilisateur. Chaque entrée peut être supprimée ou corrigée ; on peut en voir l’origine et préciser dans quelles tâches elle peut être utilisée. L’assistant distingue clairement sa propre suggestion d’une position que la personne a consciemment reconnue comme la sienne.

L’exécution d’actions exige des autorisations accordées pour un but et une durée déterminés. Le contenu d’une page ou d’un document est un matériau à analyser, et non une instruction de modifier ces autorisations. Les actions externes, les dépenses, les publications et les suppressions exigent des confirmations proportionnées et un journal des actions accessible à l’utilisateur.

### 6.1. Le Télescope de la pensée et le Canon personnel

L’idée du Télescope de la pensée (*Telescopium Mentis*) est née de la fenêtre d’Overton, notion qui décrit l’éventail des idées tenues pour acceptables dans une société à un moment donné. Chez une seule personne, il s’agit de l’éventail des pensées qu’elle juge admissibles pour elle-même à un moment donné. Le Télescope doit être une telle fenêtre pour une seule personne, et pour elle seule : il permet de voir la trace de ses propres réflexions et valeurs à différents moments, et la manière dont elles ont évolué avec le temps.

Le Télescope de la pensée doit servir à revenir sur son propre raisonnement : ce que je savais alors, ce que je voulais et pourquoi j’ai changé d’avis. Il peut aussi aider à confronter des événements choisis par l’utilisateur, des informations sur le monde et ses propres actions à son Canon personnel, c’est-à-dire au recueil, rédigé par lui, des principes et des valeurs qu’il reconnaît comme siens. La comparaison porte sur une situation que l’utilisateur décrit ou désigne lui-même ; c’est lui qui détermine le matériau et le périmètre. Le modèle montre les liens possibles, avec la source du principe invoqué et la description de l’événement, en distinguant les informations confirmées de l’interprétation et de l’incertitude. L’interprétation proposée peut être corrigée ou rejetée, et nous évaluons les positions antérieures en tenant compte de leur époque et de leur contexte.

Une tension relevée peut concerner le principe lui-même, un conflit de valeurs, les conditions de l’environnement, les limites de la personne ou une interprétation inexacte du modèle. La personne peut maintenir un idéal et accepter une incohérence présente, préciser une conviction, envisager de changer d’action ou d’environnement, ou laisser la question ouverte. Le Canon doit aider à comprendre ses propres choix : nous ne créons ni notation de la moralité ni classement public de la cohérence. La réflexion privée reste privée, et son enregistrement ne signifie ni publication ni vote.

Nous commencerons prudemment. Dans la première version, le Télescope de la pensée ne travaille que sur une seule situation que l’utilisateur désigne lui-même, par exemple une décision à laquelle il veut revenir ; il ne suit pas sa vie au fil des jours. L’utilisateur décide à quelle fréquence il s’en sert, quelles notes et quels souvenirs il partage et quand il les supprime. Dans cet essai, nous vérifions si les liens présentés sont compréhensibles, s’ils donnent le sentiment de maîtriser ses propres choix et si l’outil ne crée pas une pression à se justifier sans cesse devant soi-même. Nous considérons aussi comme un bon résultat qu’une personne, après réflexion, admette qu’elle n’agit pas toujours selon ses principes, ou laisse la question ouverte : l’outil doit aider à se comprendre, et non imposer des conclusions.

### 6.2. Formats ouverts, portabilité et coopération des outils

Nous voulons développer Suveria comme un bien public numérique, avec un code et une documentation ouverts ; notre point de référence est le standard de la Digital Public Goods Alliance.[^dpga] Le format de transfert des données a une description publique, une version et des règles de préservation des informations lors d’un changement de version. Nous utilisons en priorité les standards ouverts existants et documentons les extensions nécessaires.

L’export comprend les originaux choisis, l’historique, les sources et les liens, ainsi que la distinction entre les mots de l’utilisateur, l’élaboration du modèle et le sens confirmé par l’auteur, et aussi la structure du Canon personnel. Le paquet téléchargé peut être lu sans compte Suveria actif, après déchiffrement par une personne autorisée.

Les API, c’est-à-dire les manières documentées dont les programmes communiquent entre eux, doivent permettre de travailler sur les documents dans d’autres outils, y compris ceux que l’on construit soi-même. L’utilisateur choisit l’étendue des données et les actions autorisées, et peut retirer les autorisations d’une intégration. Le retrait d’une autorisation arrête tout accès ultérieur ; le sort des copies transmises auparavant dépend aussi du destinataire.

L’espace privé peut aussi servir au travail pour des projets communs. L’utilisateur choisit les documents qu’il veut remettre pour réception ou publication, et l’outil aide à en retirer localement les clés d’accès, les mots de passe, les données personnelles et les informations sur des vulnérabilités non corrigées. L’usage de ressources payées à titre privé n’exige pas de divulguer les conversations de travail. Pour une tâche financée par les ressources communes de la fondation, l’étendue de l’enregistrement public, le choix d’un pseudonyme et la préparation des documents sont fixés à l’avance par les [principes des ateliers de la fondation](whitepaper-zasady-fundacji.md) (chapitre 11.1). À partir des réflexions menées dans Suveria, on peut aussi dégager consciemment une question ou un argument et le publier dans Omniforum ; cette étape, décrite dans le manifeste comme la Cérémonie Ignis (*Caerimonia Ignis*), exige toujours une décision distincte.

## 7. L’échelle : de 30 personnes à l’humanité entière

Le nombre de comptes ne détermine pas à lui seul l’infrastructure nécessaire. Ce qui compte, ce sont l’activité, la longueur des questions et des réponses, le nombre de sessions simultanées, un temps d’attente acceptable et le coût des outils. L’exemple ci-dessous est un modèle de charge destiné à un essai, et non une prévision de la demande ni une offre.

Présupposés : chacune des N personnes est active chaque jour et effectue 20 requêtes par jour, une requête moyenne comprend 1 500 tokens d’entrée et 600 tokens de sortie, et un mois compte 30 jours. Un token est une unité de texte traitée par le modèle ; sa longueur dépend de la langue. Dans une charge réelle, il faut ajouter un contexte plus long, le traitement de documents, les tokens de raisonnement et les appels auxiliaires.

| Personnes actives | Requêtes par mois | Entrée par mois | Sortie par mois | Génération moyenne sur 24 heures | Pic horaire dans le scénario mondial, env. 1,51 × la moyenne |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18 000 | 27 millions de tokens | 10,8 millions de tokens | 4,2 tokens/s | 6,3 tokens/s |
| 100 | 60 000 | 90 millions | 36 millions | 13,9 tokens/s | 20,9 tokens/s |
| 1 000 | 600 000 | 900 millions | 360 millions | 138,9 tokens/s | 209 tokens/s |
| 100 000 | 60 millions | 90 milliards | 36 milliards | 13 889 tokens/s | 20 921 tokens/s |
| 1 million | 600 millions | 900 milliards | 360 milliards | 138 889 tokens/s | 209 208 tokens/s |
| 1 milliard | 600 milliards | 900 000 milliards | 360 000 milliards | 138,9 millions de tokens/s | 209,2 millions de tokens/s |
| 10 milliards | 6 000 milliards | 9 millions de milliards | 3,6 millions de milliards | 1,39 milliard de tokens/s | 2,09 milliards de tokens/s |

Nous envisageons Suveria comme un service mondial, disponible en de nombreuses langues. Nous ne savons pas comment les participants se répartiront entre les fuseaux horaires ; nous comparons donc deux scénarios, que la mesure vérifiera. Dans le scénario mondial, nous retenons des parts régionales proportionnelles au nombre d’internautes selon l’UIT pour 2025, et la même forme de journée supposée dans chaque fuseau : un pic en soirée et une nuit calme.[^itu] Les fuseaux comblent en partie les creux les uns des autres, si bien que le pic horaire atteint environ 1,51 × la moyenne, et le trafic le plus faible environ 0,49 ×. Dans le scénario concentré dans une seule région, par exemple en Europe, le pic atteint environ 1,87 × la moyenne, et la nuit presque rien. Une telle répartition peut se produire aussi à grande échelle ; elle signifie une moins bonne utilisation de notre propre machine et un recours plus fréquent à l’API confidentielle, ou une attente plus longue au moment du pic. Les deux valeurs découlent de nos présupposés, et non de l’observation de futurs participants. Les brefs pics à l’intérieur d’une heure doivent être absorbés par une courte file d’attente avec un temps d’attente visible, et le trafic dépassant la capacité de notre propre machine peut être repris par l’API confidentielle ; nous mesurerons le temps d’attente, y compris ses 95e et 99e centiles, pendant la phase pilote, ainsi que la limite de la file et le comportement une fois celle-ci saturée. L’essai de charge couvrira aussi un afflux soudain de nouvelles personnes, par exemple cinq fois le trafic moyen. Il s’agit du débit total en sortie ; il ne remplace pas la mesure de la latence d’une conversation individuelle ni celle du coût du traitement de l’entrée. Le test devrait reproduire la répartition des sessions, les contextes longs, les pannes et la file d’attente, et non une seule requête commode.

Le multiplicateur de pic compare l’heure la plus chargée à la moyenne. Il provient d’un modèle de journée divisée en 24 heures : nous décalons une même forme de journée entre huit régions et additionnons selon les parts supposées. C’est un scénario de calcul ; il ne calcule pas le temps d’attente d’une requête individuelle.

Pour voir à quoi ressemble ce calcul à l’échelle du monde, faisons une expérience de pensée. Si chacune des 10 milliards de personnes utilisait Suveria selon le profil retenu, il faudrait au moment du pic environ 2,1 milliards de tokens de sortie par seconde. Avec la performance mesurée pour DeepSeek-V4.1-Flash, environ 930 tokens par seconde par carte B200, cela représente environ 2,25 millions de cartes et, à environ 1,75 kW par carte, serveur compris (notre présupposé, sans mesure), environ 4 GW de puissance. Pour un milliard de personnes, cela fait environ 225 000 cartes et 0,4 GW ; pour un million, environ 225 cartes. À titre de comparaison, Epoch AI estimait au début de 2026 que la puissance de calcul installée dans le monde pour l’intelligence numérique dépasse 15 millions d’équivalents de cartes H100 et exige plus de 10 GW de puissance électrique.[^epoch] C’est une simplification : le profil retenu est léger, un travail intensif, des modèles plus grands et les images demandent plusieurs fois plus, et le matériel comme les modèles évoluent vite. Il montre toutefois l’ordre de grandeur : une aide quotidienne de l’intelligence numérique dans cette mesure pour chaque être humain exigerait une puissance inférieure à celle qui fonctionne déjà aujourd’hui dans le monde. C’est un calcul simplifié, et non la preuve qu’une telle infrastructure serait disponible pour ce but.

## 8. Coûts et calcul daté

Le coût mensuel d’une réservation permanente peut s’écrire, en première approximation, ainsi : nombre de cartes × prix par carte et par heure × nombre d’heures payées, augmenté de la mémoire, des disques, du transfert, de la sécurité, de la surveillance, de l’exploitation, des paiements et des taxes. Il faut vérifier lesquels de ces postes l’offre comprend déjà. Pour un fonctionnement 24 heures sur 24, un mois compte de 672 à 744 heures ; 730 heures sont une approximation moyenne.

Dans le calcul, nous comparons cinq options de coût : le modèle local, notre propre instance sur du matériel loué, notre propre instance dans un environnement d’informatique confidentielle, avec une protection déclarée par le fournisseur et à vérifier, l’API confidentielle d’un fournisseur externe et une API externe ordinaire. Les options de coût correspondent aux options de protection du point 2.3 ; nous ne présentons la location d’une machine sans confidentialité que comme point de référence pour les prix, et non comme une option de Suveria. Nous n’évaluons pas encore le coût du modèle local, car il dépend de l’appareil de l’utilisateur. Nous comparons un même niveau de qualité, de disponibilité et de protection. Le seuil de rentabilité est le coût du service complet divisé par l’utilisation réelle, et non le coût des cartes divisé par le nombre de comptes enregistrés. Une API externe facilite le test des besoins des utilisateurs, mais son fournisseur a ses propres règles d’accès aux données ; nous n’étendons donc pas à cette option les promesses d’une exécution confidentielle.

### 8.1. Calcul daté : situation au 29 octobre 2026

Le manifeste avance l’hypothèse que, dès un nombre relativement faible de participants réguliers, une infrastructure commune peut offrir plus de puissance de calcul et d’intelligence numérique pour chaque dollar que les services fermés, avec une protection de la vie privée fondée sur des dispositifs de sécurité vérifiables. Voici ci-dessous son calcul aux prix du 29 octobre 2026. Présupposés : le profil d’utilisation du chapitre 7 (20 requêtes par jour de 600 tokens de sortie chacune) et le scénario mondial (pic horaire d’environ 1,51 × la moyenne), prix hors taxes, 730 heures par mois pour convertir les prix de location. Le nombre de personnes par machine désigne autant de participants que la machine peut servir au pic horaire : débit de sortie par seconde × 86 400 / (20 × 600 × multiplicateur de pic). Le nombre admissible de personnes sera aussi déterminé par le temps d’attente mesuré avant la réponse. Entre parenthèses, nous indiquons le scénario concentré en Europe (multiplicateur d’environ 1,87). Pour DeepSeek-V4.1-Flash, nous retenons la mesure du fournisseur Lambda sur quatre cartes B200 : environ 3 714 tokens de sortie par seconde avec 64 requêtes simultanées.[^lambda-v41] La mesure a été effectuée avec le décodage spéculatif, que nous ne voulons pas utiliser en mode confidentiel (chapitre 3). Selon notre estimation de septembre, le débit peut alors être jusqu’à environ 30 % inférieur, ce qui augmente le coût par personne dans une proportion semblable. Pour les cartes H200 et B300, il n’existe pas de mesure de ce modèle ; nous supposons que chaque ensemble de cartes portant une copie du modèle (8 × H200 ou la moitié d’une machine 8 × B300) atteint la performance de quatre cartes B200. C’est un présupposé optimiste : la H200 est d’une génération plus ancienne, le mode confidentiel peut ralentir le travail, et la mesure de Lambda porte sur des requêtes plus longues que celles de notre profil. C’est pourquoi nous donnons aussi une variante prudente, avec la moitié de ce débit.

Les poids du modèle occupent environ 511 Go, et le moteur vLLM recommande environ 614 Go de mémoire de cartes. Quatre cartes H200 (564 Go) ne suffisent pas ; une copie sur H200 a donc besoin de huit cartes. La recette de l’éditeur du moteur pour cette configuration était, le 29 octobre, en cours de vérification, et dans les cartes H200 la connexion entre cartes (NVLink) n’est pas chiffrée par le matériel, contrairement aux B200 et B300.

| Option | Confidentialité | Coût mensuel | Personnes par machine | Coût du seul calcul par personne |
| --- | --- | ---: | ---: | ---: |
| API DeepSeek | aucune, le fournisseur voit le contenu | selon l’utilisation | sans objet pour une machine isolée ; limites et disponibilité du fournisseur | 0,35–0,70 USD |
| API confidentielle avec DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | déclarée par le fournisseur, à vérifier | selon l’utilisation | sans objet pour une machine isolée ; limites et disponibilité du fournisseur | 0,70–1,25 USD |
| API Kimi K3.1 Pro (Moonshot) | aucune | selon l’utilisation | sans objet pour une machine isolée ; limites et disponibilité du fournisseur | 5,40 USD |
| API confidentielle avec Kimi K3 (Phala, NEAR AI) | déclarée par le fournisseur, à vérifier | selon l’utilisation | sans objet pour une machine isolée ; limites et disponibilité du fournisseur | 8,10–8,91 USD |
| Machine confidentielle louée 8 × H200 (Phala), DeepSeek, une copie du modèle | attestation du processeur et des cartes, à vérifier | 23 506 USD avec engagement de 180 jours, 32 266 USD à la demande | env. 17 750 (14 300), capacité supposée | 1,32–1,82 USD (1,64–2,25) |
| Comme ci-dessus, variante prudente : moitié du débit | attestation du processeur et des cartes, à vérifier | comme ci-dessus | env. 8 900 (7 150), capacité supposée | 2,65–3,64 USD (3,29–4,51) |
| Machine confidentielle louée 8 × B300 (Phala), Kimi K3 | attestation du processeur et des cartes, à vérifier | 45 552–47 888 USD | env. 4 800–7 600 (3 900–6 200), capacité supposée | env. 6–10 USD (7,4–12,4) |
| 4 × B200 sans confidentialité confirmée (Lambda), DeepSeek | non confirmée | 19 827 USD | env. 17 750 (14 300) | 1,12 USD (1,38) |
| 8 × B200 sans confidentialité confirmée (Lambda), DeepSeek, deux copies de quatre cartes chacune | non confirmée | 39 070 USD | env. 35 500 (28 700), performance de deux copies supposée | 1,10 USD (1,36) |

D’où viennent ces chiffres : prix des API tirés des grilles tarifaires de DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala et NEAR AI ;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] prix des machines confidentielles tirés de la grille tarifaire de Phala ;[^phala-gpu] location de B200 chez Lambda à 6,79 USD par carte et par heure dans une instance de quatre cartes et à 6,69 USD dans une instance de huit.[^lambda-cennik] Nous reprenons la capacité de Kimi des mesures de tiers pour Kimi K3 sur huit cartes B300, qui donnent environ 1 000 à 1 600 tokens de sortie par seconde.[^spheron-kimi] Les montants mensuels avec engagement ne signifient pas des paiements mensuels : Phala exige le paiement de toute la période à l’avance, sans remboursement en cas de résiliation anticipée ; 180 jours d’une machine 8 × H200 représentent donc 139 104 USD en liquidités à la commande, et 180 jours d’une machine 8 × B300, 269 568 USD.[^phala-gpu]

Ce qui en découle :

- Pour le profil retenu, les prix des API à confidentialité déclarée s’élèvent à environ 0,70–1,25 USD par personne et par mois, soit d’un coût comparable à celui d’une API ordinaire jusqu’à environ 3,6 fois ce coût, selon le fournisseur et l’heure d’utilisation ; le prix le plus bas est déclaré par Confidential AI, et cette offre aussi, nous devons la vérifier. Une API confidentielle offre une puissance flexible sans mise en service de notre propre machine, même si elle a ses propres limites, files d’attente et pannes. Une machine confidentielle louée pour DeepSeek, dimensionnée pour le pic, fonctionne dans le scénario mondial en moyenne à environ deux tiers de sa capacité et coûte environ 1,32 USD par personne, soit à peu près autant que les API confidentielles les plus chères et plus que la moins chère. Dans notre modèle horaire, un premier nœud propre, dont l’excédent est dirigé vers une API confidentielle à 1,25 USD par personne, apparaît au point vérifié d’environ 20 000 personnes actives ; c’est un résultat des présupposés retenus, et non un seuil exact, et avec une API confidentielle moins chère la machine louée n’est pas rentable à cette échelle.
- La location à l’heure d’une machine confidentielle complète n’offre pas aujourd’hui de souplesse pour le pic du soir : Phala exige au moins une journée (8 × H200) ou un mois (8 × B300), Confidential AI trois mois pour 8 × B300 à 60 USD de l’heure, et VoltageGPU, qui facture 8 × H200 à la seconde à 64,62 USD de l’heure, ne fournit pas de preuves d’attestation publiées couvrant cette configuration ni les commutateurs NVSwitch.[^cai][^voltage] À cela s’ajoute le temps d’attribution de la machine et de chargement des poids.
- Pour Kimi, le calcul dépend de la mesure : l’API confidentielle coûte environ 8 à 9 USD par personne, et notre propre machine 8 × B300, à pleine utilisation, environ 6 USD avec l’estimation haute de la capacité et environ 9,5 USD avec l’estimation basse. Elle revient moins cher que l’API confidentielle si une machine sert plus d’environ 5 100 à 5 600 personnes actives utilisant ce modèle ; avec l’estimation basse de la capacité (environ 4 800 personnes), ce n’est pas le cas.

Achat de notre propre serveur : un serveur Supermicro complet avec huit cartes B300 coûtait en septembre 2026 environ 663 000 USD.[^supermicro] Nous estimons ainsi le coût mensuel d’un tel achat :

| Poste | Montant mensuel |
| --- | ---: |
| Amortissement du serveur sur cinq ans | env. 11 000 USD |
| Amortissement du serveur sur quatre ans | env. 13 800 USD |
| Colocation | env. 1 900–3 000 USD |
| Réseau, pièces et maintenance (estimation) | env. 1 500 USD |
| Total | env. 14 000–18 000 USD |

Un tel serveur peut accueillir deux copies de DeepSeek, qui, dans le scénario mondial, serviront environ 35 000 personnes (dans le scénario européen, environ 28 000), à environ 0,41–0,52 USD par personne. Selon ces présupposés, l’achat revient moins cher qu’une API confidentielle à 1,11–1,25 USD à partir d’environ 12 000 à 17 000 personnes actives, et moins cher que la moins chère des offres déclarées (0,70 USD) à partir d’environ 21 000 à 26 000. Le calcul ne comprend pas le coût complet de l’entretien et de la mesure de cette configuration ; l’achat exige aussi des liquidités à l’avance, une astreinte humaine 24 heures sur 24 et une demande stable pendant des années, et c’est alors la fondation qui a l’accès physique au matériel (chapitre 2). Ce sont nos estimations, et non des offres.

- Les machines confidentielles à plusieurs cartes sont aujourd’hui disponibles publiquement aux États-Unis. Dans l’Union européenne, nous avons trouvé des machines confidentielles avec une seule carte H100,[^azure-ncc] dans lesquelles ni DeepSeek complet ni Kimi ne tiennent. Privatemode (Edgeless Systems, Allemagne) propose aussi une API confidentielle avec des serveurs dans l’Union européenne, avec un choix de modèles plus restreint.[^privatemode] C’est également une déclaration du fournisseur, à vérifier.
- Un annuaire indépendant qui contrôle les API confidentielles n’a confirmé, lors de l’observation du 29 octobre 2026 à 14 h 00 UTC, la vérification complète d’aucune des 95 routes contrôlées ; il manquait le plus souvent la preuve de l’identité du programme lancé, de l’origine du code et du lien entre la requête et la machine.[^katalog] C’est un résultat fondé sur les preuves disponibles, et non la preuve que ces services divulguent des contenus. Jusqu’à notre propre vérification, nous traitons la confidentialité de ces services comme une déclaration du fournisseur.
- Ce calcul porte sur la puissance de calcul. L’environnement privé (passerelle, mémoire, fichiers) dans une ou deux machines confidentielles avec quatre processeurs virtuels et 8 Go de mémoire coûte chez Phala environ 168 USD par mois et par machine, et le disque est facturé séparément, environ 10 USD pour 100 Go.[^phala-cvm] Nous vérifierons pendant la phase pilote si cette taille suffit. À 170–340 USD par mois, cela fait, pour 30 personnes, environ 6 à 11 USD par personne, et pour 1 000 personnes, quelques dizaines de cents. Le calcul ne comprend pas le travail humain, les revues de sécurité, les paiements ni la réserve pour les pannes.
- Les abonnements populaires coûtent environ 20 USD par mois, et le chat de DeepSeek est gratuit.[^abonamenty] Les formules à 100–200 USD donnent, en cas de travail agentique intensif, l’équivalent de milliers de dollars aux prix catalogue des API ;[^semianalysis] nous ne rivalisons pas en prix avec de telles formules. Nous proposons une facturation de l’utilisation réelle, avec une protection vérifiable de la vie privée.

État de l’hypothèse du manifeste au 29 octobre 2026 : le calcul nous en rapproche, mais ne la confirme pas. Le traitement avec confidentialité déclarée et attestation est déjà disponible dans des grilles tarifaires publiques et coûte, pour le profil d’utilisation retenu, environ 0,70–1,25 USD par personne et par mois ; un petit groupe peut donc commencer par lui à prix coûtant, et, selon nos présupposés, une infrastructure propre peut devenir moins chère à partir d’un nombre de personnes actives compris entre une bonne dizaine de milliers et plusieurs dizaines de milliers. Trois éléments trancheront, et nous les vérifierons dans les essais du chapitre 9 : si la confidentialité de ces services résiste à une vérification indépendante, si la qualité des modèles disponibles suffit pour les tâches pour lesquelles les gens viendront à Suveria, et quel est le profil réel du trafic. Nous mettons à jour le calcul à chaque changement significatif des prix et après chaque essai, et nous conservons les versions précédentes.

### 8.2. Étapes de l’infrastructure et fiches de décision

Nous développons l’infrastructure par étapes, dont chacune apporte aux participants une valeur propre, sans obligation de passer à la suivante : d’abord l’API confidentielle et l’environnement privé dans des machines confidentielles (si nous réunissons assez de fonds avant le lancement, nous pouvons commencer directement par l’étape suivante), ensuite la location de nos propres machines confidentielles, puis l’achat de matériel et son installation dans un centre de données externe, et, à long terme, si cela démontre un avantage, un bâtiment propre. L’étape suivante est justifiée par des données mesurées : le coût complet du service, le trafic réel, le temps de réponse au moment du pic, la capacité à maintenir les dispositifs de sécurité et à gérer les pannes, et, en cas d’achat, aussi le financement des réparations, du remplacement du matériel et des personnes qui assumeront la responsabilité. La location de notre propre machine peut aussi avoir du sens lorsque le modèle nécessaire n’est pas disponible dans une API confidentielle ou lorsque nous voulons un contrôle complet de ce qui fonctionne.

Nous décrivons chaque transition par une fiche de décision : ce que nous gagnons, le coût complet, les risques, les conditions de démarrage et de retrait, la manière de transférer les données et les clés, ainsi que la conformité avec les [principes de la réserve et de lancement des piliers suivants](whitepaper-zasady-fundacji.md) (chapitre 8 du livre blanc sur les principes de la fondation). Nous n’admettons de combiner notre propre machine avec une API confidentielle pour les pics de trafic que si chacune des voies offre un niveau de protection accepté ; le passage à une option plus faible exige une décision distincte et consciente de l’utilisateur. Nous prévoyons la première mesure sur une seule carte confidentielle avec un modèle plus petit, et la suivante sur une machine pouvant accueillir le modèle complet.

Nous adaptons la puissance au trafic sans tout dimensionner pour le pic le plus élevé. Nous concevons une courte file d’attente avec un temps d’attente visible ; nous mesurerons pendant la phase pilote son temps réel, sa limite et son comportement une fois saturée. La puissance flexible pour les pics plus longs est fournie en priorité par l’API confidentielle, à condition qu’elle préserve le niveau de protection accepté, le consentement et la limite de dépenses de l’utilisateur ; lorsqu’une telle voie n’existe pas, nous informons honnêtement de l’attente ou de l’indisponibilité. La location à l’heure a du sens pour les modèles qui ne sont pas disponibles dans une API confidentielle ou qui y sont nettement plus chers, et seulement là où le fournisseur permet réellement de lancer et de libérer rapidement des machines confidentielles. Nous voulons utiliser la puissance libre de notre propre machine aux heures plus calmes pour des tâches de la fondation, comme des analyses pour Omniforum ; sa valeur aux prix des API n’est pas une recette budgétaire, et ces tâches ont donc leur propre objectif et leur propre budget. Après la première phase pilote, nous voulons tester deux modes : « Conversation » pour le travail ordinaire avec l’assistant et « Sans hâte » pour les tâches qui peuvent attendre, par exemple la traduction d’un document. En mode « Sans hâte », nous affichons une fenêtre de démarrage indicative, une estimation du coût, un budget maximal, la possibilité d’annuler avec facturation du travail effectué et la même information sur la protection. Un prix plus bas pour ce type de travail n’est possible que s’il découle d’une méthode publique de répartition des coûts, sans double comptage du coût fixe.

### 8.3. Mesure de l’utilisation sans le contenu des conversations

Pour facturer l’utilisation réelle, nous mesurons les ressources nécessaires à l’exécution des tâches et décrivons clairement la part des coûts fixes. Le compteur de facturation se limite aux données indispensables pour vérifier le coût, et le contenu de la conversation n’est pas nécessaire pour établir la facture. Lors des essais, nous vérifierons la précision de la mesure, la manière dont l’utilisateur peut la contrôler, l’étendue des métadonnées divulguées et le comportement du service une fois la limite de dépenses atteinte. Les règles de la facture, des arrondis, des prépaiements et des remboursements sont décrites dans le [livre blanc sur les principes de la fondation](whitepaper-zasady-fundacji.md).

La limite de dépenses fixée par un participant doit fonctionner comme une frontière, et non comme un avertissement après coup. Certains fournisseurs ne facturent les requêtes en cours qu’une fois celles-ci terminées, si bien que leurs limites peuvent être dépassées ; c’est ce que décrit par exemple Tinfoil.[^tinfoil] C’est pourquoi nous concevons une réservation : avant l’envoi d’une requête, la passerelle de Suveria met de côté sur le solde son coût maximal admissible, en tenant compte des autres requêtes en cours, et limite le nombre de requêtes parallèles ainsi que la longueur de la réponse. Une fois la requête terminée, nous facturons le coût réel et libérons la réservation non utilisée. C’est une exigence à construire et à vérifier, et non une fonction en service.

## 9. Essais de validation et journal des résultats

Avant de qualifier une version quelle qu’elle soit de confidentielle, nous documenterons au moins :

- une attestation correcte ;
- le refus d’envoyer des données après substitution du code ou de la clé ;
- l’isolation des sessions ;
- les restrictions de l’administrateur ;
- l’absence de contenu dans les journaux, les vidages mémoire et la télémétrie ;
- la gestion du cache ;
- la suppression et la récupération ;
- le comportement après une panne ;
- les limites des outils ;
- les coûts sous charge.

Le résultat comprend la version de la configuration et le scénario dans lequel nous avons tenté de violer la protection.

Nous voulons que chaque version de Suveria passe tous les contrôles de preuve d’au moins un vérificateur indépendant de services confidentiels : le matériel et l’état des dispositifs de sécurité, la fraîcheur de la preuve, le lien entre la clé de connexion et l’environnement protégé, l’identité du programme lancé, l’origine du code et le lien entre la requête et une machine précise, tout en maintenant la disponibilité. Nous publions le résultat avec la date de l’observation, la version des critères et les preuves pour la version, le modèle et la route de requête concernés, et nous décrivons les liens du vérificateur en même temps que le résultat. Nous ne promettons aucune place dans un classement. Passer la vérification signifie atteindre le contrôle décrit à un moment donné, avec des limites rendues publiques, et ne remplace ni un audit ni nos propres essais.

Lorsque nous mettrons en service notre propre option confidentielle, nous soumettrons Suveria à chaque annuaire indépendant qui vérifie la confidentialité de l’exécution des modèles, et nous lui donnerons un point d’accès pour vérifier l’attestation ; le premier exemple est confidentialinference.net (situation au 31 octobre 2026).[^confidentialinference] Nous ne promettons pas l’inscription, car elle relève de la décision de l’annuaire ; nous promettons la soumission, la réponse à ses questions et la publication du résultat, même mauvais, avec sa date. Un annuaire ne vérifie que ce qu’il voit de l’extérieur, généralement l’attestation et le canal de connexion ; il ne remplace ni l’audit du code, ni celui de la configuration, ni l’évaluation des canaux auxiliaires.

Les essais de stockage et de portabilité comprennent :

- la restauration d’une copie chiffrée sur un autre appareil autorisé et le refus de lecture sans la clé adéquate ;
- la perte d’un appareil, la récupération de l’accès par la méthode choisie et la présentation claire des conséquences de la perte de toutes les clés ;
- la synchronisation de modifications parallèles sans écrasement silencieux de l’une des versions ;
- la lecture d’un export dans un outil indépendant, sans compte chez l’opérateur d’origine, avec comparaison des originaux, de l’historique, des sources et des liens ;
- la limitation du périmètre d’une intégration et l’arrêt effectif de son accès ultérieur après le retrait de l’autorisation.

Étapes :

1. un test d’utilisabilité sur des documents non sensibles ;
2. un essai technique de la protection ;
3. une phase pilote limitée, avec des conditions claires ;
4. une augmentation progressive de l’échelle.

Avant la phase pilote, nous fixerons et publierons des seuils : le temps jusqu’au premier mot de la réponse, le coût de calcul par personne pour le profil mesuré et la qualité du modèle selon le [livre blanc sur les matériaux et le benchmark](whitepaper-materialy-i-benchmark.md). Nous considérerons la phase pilote comme réussie lorsqu’elle remplira les trois.

Un changement de modèle, de micrologiciel ou de méthode de connexion au compte peut exiger une nouvelle qualification, et une mise à jour ne peut pas affaiblir en silence la protection convenue. Chaque version a une fiche publique :

- périmètre de fonctionnement ;
- preuves issues des essais ;
- limites connues ;
- personnes responsables ;
- coûts ;
- moyen de signaler un problème ;
- plan de retrait.

La découverte d’une faille entraîne la limitation de l’exposition, l’information des personnes concernées et une correction vérifiable.

Nous voulons mener les essais ouvertement. Nous invitons les personnes qui travaillent dans la sécurité, la cryptographie, l’infrastructure et les applications, y compris les créateurs qui présentent la technologie à un large public, à concevoir avec nous les épreuves et à tenter de percer la protection sur des comptes de test dédiés, avec des données fictives. Nous invitons aussi les critiques. Nous ne payons pas pour la promotion, et nous signalons chaque collaboration conformément au [registre des avantages](whitepaper-zasady-fundacji.md) (chapitre 7 du livre blanc sur les principes de la fondation). Les résultats, y compris ceux des essais infructueux, sont inscrits dans le journal des résultats. Si vous voulez vous engager, écrivez à [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) avec l’objet « [Dołącz] Próby Suverii ».

L’essai le plus important : une équipe disposant des droits d’opérateur hors de l’environnement confidentiel (passerelle, disques, réseau, journaux) tente de lire les conversations de comptes de test dans lesquelles des chaînes de caractères secrètes ont été cachées. Si quelqu’un parvient à les extraire, nous compris, l’essai a échoué.

Nous mettrons la première version de Suveria à la disposition de quelques personnes qui aident à la configurer. Si elle s’appuie sur une API confidentielle, sa fiche de protection (point 2.3) indiquera clairement que le modèle fonctionne chez un fournisseur externe, que l’attestation est déclarée par le fournisseur et que nous ne l’avons pas encore vérifiée, et que les métadonnées ne sont pas protégées. Comme les premières personnes aident aussi à exploiter le service, le premier résultat que nous publierons sera celui de l’essai le plus important décrit ci-dessus, avec la description de ce que l’opérateur a réussi à faire.

**Journal des résultats.** Situation au 29 octobre 2026 : nous n’avons encore mené aucun des essais décrits, nous n’avons pas loué de cartes graphiques et nous n’avons pas mis en service de modèle dans Suveria. Nous ajoutons ici chaque nouveau résultat avec la date, la configuration, le scénario et la conclusion, y compris lorsqu’un essai échoue.

Restent à trancher :

- le premier modèle et un niveau de qualité acceptable ;
- la vérification indépendante des API confidentielles et des machines confidentielles, ainsi que leur disponibilité dans des juridictions offrant une forte protection des données personnelles, comme l’Union européenne avec le RGPD ;
- le temps de réponse ;
- les règles relatives aux clés et à la mémoire ;
- l’étendue minimale des données de facturation ;
- les obligations légales de l’opérateur face aux signalements d’abus ;
- le mode de financement de la continuité.

Le [livre blanc sur les principes de la fondation](whitepaper-zasady-fundacji.md) décrit le budget, la facture et la responsabilité, et le [livre blanc sur les matériaux et le benchmark](whitepaper-materialy-i-benchmark.md), l’évaluation du comportement des modèles.

Fondation Novus Ignis, Poznań, KRS 0001269575. Site et manifeste : novusignis.org. Remarques : salve@novusignis.org.

## Notes

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Étude de Georgia Tech, de l’Université Purdue et de Synkhronix, publiée le 28 octobre 2025 : extraction des clés d’attestation d’Intel TDX et SGX ainsi que d’AMD SEV-SNP par branchement physique sur le bus mémoire DDR5, avec des conséquences pour l’informatique confidentielle de NVIDIA. Exige un accès physique au serveur ; Intel et AMD considèrent que de telles attaques sortent du périmètre de leur protection. Présentation : [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Consulté le 28 octobre 2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg et McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Étude. Principes de conservation de la copie principale sur les appareils de l’utilisateur et du rôle d’appui des serveurs, y compris pour les copies chiffrées.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Description d’architecture. Exemple de lien entre confidentialité, contrôle du logiciel et transparence du système.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Spécification. Séparation de la connaissance de l’expéditeur et de celle de la requête, selon un modèle de confiance déterminé ; pas un anonymat complet.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit et Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Publication scientifique (USENIX Security 2024 ; prépublication arXiv 2403.09751). À partir de la longueur des paquets chiffrés du flux de réponse, un observateur du réseau reconstitue le sujet, et en partie le contenu, de la réponse de l’assistant. Consulté le 30 octobre 2026.

[^whisper-leak]: [McDonald et Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) et [présentation de Microsoft (7 novembre 2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Publication de recherche et description de l’éditeur. La taille et le rythme des paquets d’un flux de réponse chiffré permettent de reconnaître le sujet de la conversation ; certains fournisseurs ont ajouté un remplissage aléatoire des paquets. Consulté le 30 octobre 2026.

[^nvidia-platformy]: [NVIDIA: plateformes prises en charge pour les conteneurs confidentiels](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Documentation du fabricant. Exigences portant sur l’ensemble de la configuration du processeur, des cartes et des logiciels.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Documentation du fabricant. En mode PPCIe v2, le réseau NVLink et NVSwitch appartient à la partie de confiance du système ; la protection PCIe ne signifie pas le chiffrement de tout le trafic entre les cartes.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Documentation du fabricant. Mode d’informatique confidentielle sur plusieurs cartes Blackwell, y compris la protection des connexions ; exige une configuration compatible.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Définition. Des poids ouverts ne garantissent pas que l’ensemble de la définition d’un système ouvert soit respecté.

[^deepseek]: [DeepSeek-V4.1-Flash: fiche du modèle](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Documentation du fabricant. Architecture, licence MIT et capacités déclarées du modèle ; ce n’est pas une mesure de la performance de Suveria.

[^dpga]: [Digital Public Goods Alliance: standard](https://www.digitalpublicgoods.net/standard). Standard. Critères d’évaluation d’un bien public numérique ; une orientation de conception n’est pas une reconnaissance obtenue de la DPGA.

[^lambda-cennik]: [Lambda : tarifs des instances](https://lambda.ai/pricing). Grille tarifaire du fournisseur. NVIDIA B200 SXM6 180 GB : 6,79 USD par carte et par heure dans une instance de quatre cartes et 6,69 USD dans une instance de huit ; H100 SXM 80 GB : 3,99 USD ; prix à la demande, hors taxes, sans mode confidentiel. Consulté le 29 octobre 2026.

[^lambda-v41]: [Lambda : DeepSeek-V4.1-Flash, résultats de la mesure de performance](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Mesure du fournisseur. 4 × B200, vLLM, parallélisme tensoriel 4, décodage spéculatif, environ 8 192 tokens d’entrée et 1 024 de sortie par requête ; avec 64 requêtes simultanées, au total 3 713,9 tokens de sortie par seconde et en moyenne 66,8 tokens par seconde par conversation. Sans date de mesure. Consulté le 28 octobre 2026.

[^azure-ncc]: [Azure : tarif de la machine NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) et [description de la série](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Grille tarifaire du fournisseur. Machine confidentielle avec une seule carte H100 NVL 94 GB ; de 6,98 USD de l’heure (East US 2) à 8,90 USD (West Europe), Linux, paiement à l’usage. Consulté le 28 octobre 2026.

[^deepseek-cennik]: [DeepSeek : tarifs de l’API (version chinoise)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Grille tarifaire du fournisseur. Modèle deepseek-flash (V4.1-Flash-1017) : entrée sans succès de cache 1 CNY hors pic et 2 CNY en pic, sortie 4 et 8 CNY par million de tokens. Conversion en USD selon le [tableau d’eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), source auxiliaire. Consulté le 28 octobre 2026.

[^abonamenty]: Prix des abonnements : [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (tableau de geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing) ; le chat de DeepSeek est gratuit ([description](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Prix mensuels en USD, hors taxes ; Kimi Plus 19 USD. Consulté les 28 et 29 octobre 2026.

[^kimi-k31]: [Moonshot: lancement de Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) et [Kimi: description de K3.1 Pro (24 octobre 2026)](https://www.kimi.com/news/kimi-k3-1-pro). Documentation du fabricant. Version de Kimi K3 à l’entraînement prolongé, environ 3 000 milliards de paramètres, contexte de 1 million de tokens, poids annoncés avant le 4 novembre 2026 ; licence non annoncée. Prix de l’API selon OpenRouter : 2 / 10 USD par million de tokens.

[^kimi-k3]: [Kimi K3: fiche du modèle](https://huggingface.co/moonshotai/Kimi-K3). Documentation du fabricant. 2 800 milliards de paramètres, dont 104 milliards actifs, contexte d’environ 1 million, MXFP4, licence Kimi K3 License.

[^spheron-kimi]: [Spheron: déploiement de Kimi K3 (19 octobre 2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Guide du fournisseur. Fichiers de poids de 1 560,94 Go, configurations pouvant accueillir le modèle. Capacité d’environ 1 000 à 1 600 tokens par seconde sur 8 × B300 selon un tableau de mesures de tiers du 29 octobre 2026 ; forte dispersion.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro et DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Comparaison indépendante. Indice v5 du 28 octobre 2026 : 46 et 32 ; vitesse d’environ 36 et 178 tokens par seconde. Consulté le 29 octobre 2026.

[^tinfoil]: [Tinfoil : tarifs](https://tinfoil.sh/pricing). Grille tarifaire du fournisseur. DeepSeek-V4.1-Flash 0,65 USD en entrée et 1,45 USD en sortie par million de tokens ; description des limites de dépenses. Consulté le 29 octobre 2026.

[^phala-api]: [Phala : modèles confidentiels](https://phala.com/confidential-ai-models). Grille tarifaire du fournisseur. DeepSeek V4.1 Flash 1017 : 0,75 / 1,60 USD ; Kimi K3 : 3 / 15 USD par million de tokens ; attestation de la passerelle et confirmations des réponses selon le fournisseur. Consulté le 29 octobre 2026.

[^near]: [NEAR AI : tarifs](https://near.ai/pricing). Grille tarifaire du fournisseur. Kimi K3 : 3,30 / 16,50 USD par million de tokens ; d’autres prix sur la page d’accueil, divergence à éclaircir. Consulté le 29 octobre 2026.

[^phala-gpu]: [Phala : cartes graphiques confidentielles](https://phala.com/gpu-tee) et [tarifs](https://cloud.phala.com/about/pricing). Grille tarifaire du fournisseur. 8 × H200 : 44,20 USD de l’heure à la demande, 32,20 USD avec un engagement de 180 jours ; 8 × B300 : 65,60 USD (30 jours), 62,40 USD (180 jours) ; Intel TDX avec l’informatique confidentielle de NVIDIA ; aucune machine en Europe. Consulté le 29 octobre 2026. Engagement payé à l’avance, sans remboursement en cas de résiliation anticipée.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Offre du fournisseur. API confidentielle avec des serveurs dans l’Union européenne et attestation à distance ; choix de modèles ouverts plus restreint que chez les fournisseurs américains, prix non publiés. Confidentialité déclarée par le fournisseur, non vérifiée par nous. Consulté le 30 octobre 2026.

[^katalog]: [Confidential Inference Directory: méthodologie et observations](https://confidentialinference.net/attestation). Annuaire indépendant, parrainé par une entreprise qui propose de l’inférence confidentielle. 0 sur 95 routes vérifiées de bout en bout lors de l’observation du 29 octobre 2026, 14 h 00 min 19 s UTC.

[^supermicro]: [Supermicro: serveur AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) et [GPU Per Hour: prix des serveurs NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Offre du fabricant et tableau de prix. Serveur complet avec huit cartes B300 : 662 845,95 USD (21 septembre 2026).

[^semianalysis]: [BigGo Finance sur l’analyse de SemiAnalysis (7 octobre 2026)](https://finance.biggo.com/news/173039423dab79be). Analyse sectorielle. Une formule à 200 USD donne, en cas de travail intensif, environ 12 000 USD aux prix catalogue des API ; estimations de marge, et non données de l’entreprise.

[^sglang-k3]: [SGLang: recette pour Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Documentation du moteur. Configuration vérifiée de Kimi K3 sur 8 × B300 ; ne concerne ni Kimi K3.1 ni le mode confidentiel.

[^phala-cvm]: [Phala : tarifs des machines confidentielles](https://phala.com/pricing). Grille tarifaire du fournisseur. tdx.large (4 processeurs virtuels, 8 Go de mémoire) : 0,23 USD de l’heure ; disque 0,000139 USD par Go et par heure. Consulté le 29 octobre 2026.

[^itu]: [ITU: Facts and Figures 2025, utilisation d’internet](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Statistique internationale. Proportion de personnes utilisant internet dans les régions du monde en 2025 (environ 6 milliards de personnes, 74 % de la population) ; les parts régionales de notre calcul sont une approximation : proportion × population de la région.

[^cai]: [Confidential AI : tarifs](https://confidential.ai/pricing). Grille tarifaire du fournisseur, prix du 26 octobre 2026. DeepSeek V4.1 Flash : 0,30 USD en entrée, 0,03 USD en entrée depuis le cache, 1,20 USD en sortie par million de tokens ; machine 8 × B300 à 60 USD de l’heure, minimum trois mois, attribution en quelques jours. Confidentialité déclarée par le fournisseur, non vérifiée par nous.

[^voltage]: [VoltageGPU : tarifs](https://voltagegpu.com/pricing) et [étendue des preuves](https://voltagegpu.com/). Grille tarifaire et déclarations du fournisseur. 8 × H200 à 64,62 USD de l’heure avec facturation à la seconde ; les preuves publiées ne couvrent pas l’attestation de cette configuration ni les commutateurs NVSwitch.

[^epoch]: [The Decoder sur les données d’Epoch AI (8 janvier 2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) et [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Compilation d’un institut de recherche indépendant. Puissance de calcul installée pour l’intelligence numérique de plus de 15 millions d’équivalents NVIDIA H100, besoin de plus de 10 GW. Estimation, et non mesure.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net) : comparaison des fournisseurs qui font fonctionner des modèles dans des environnements d’exécution de confiance, avec des vérifications d’attestation datées ; site parrainé par l’entreprise Enclava, recensant onze fournisseurs au moment de la consultation. Consulté le 31 octobre 2026.
