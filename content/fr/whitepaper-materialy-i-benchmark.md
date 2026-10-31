# Matériaux pour l’entraînement et benchmark des modèles : le programme de recherche de Novus Ignis

Version du 31 octobre 2026. Ce document développe le chapitre 8 du manifeste. Il propose un programme de recherche, une procédure de préparation des matériaux et un champ d’évaluation large pour les modèles d’intelligence numérique, ainsi qu’une procédure de précaution à l’égard de leurs expériences possibles. Il ne présente ni les résultats d’un benchmark qui nous serait propre, ni la preuve qu’un tel jeu de données améliorera le comportement des modèles ; à ce jour, nous n’avons pas de tels résultats.

*Traduction réalisée par une intelligence numérique à partir de l’original polonais du 31 octobre 2026. En cas de divergence entre les versions, le texte polonais fait foi.*

## 1. La question que nous voulons vérifier

La Fondation Novus Ignis, de Poznań, construit Suveria, un espace privé de travail avec l’intelligence numérique, et Omniforum, un espace commun de conversation et de décision ; la direction est décrite dans le [manifeste](manifest.md). Ce document décrit deux programmes liés. Le premier porte sur les matériaux pour l’entraînement des modèles et sur un benchmark, c’est-à-dire un ensemble de tâches et de règles de notation qui permet de vérifier comment les modèles se comportent. Le second est une manière de procéder avec précaution si apparaissaient des indices crédibles qu’un système puisse ressentir quelque chose. Le résultat d’un test ne tranche pas la question de savoir si un modèle ressent quelque chose, et ne lui confère aucun pouvoir de gestion.

Des exemples documentés de protection de la dignité, de raisonnement honnête et de correction des décisions peuvent-ils aider à développer des modèles qui servent mieux les personnes ? Et pouvons-nous évaluer leur comportement de telle sorte que l’amélioration du score à un test favorise un bénéfice réel en dehors du test ?

Ce sont deux tâches liées. La première concerne les matériaux sur lesquels on peut entraîner des modèles, la seconde la vérification indépendante de ce que le modèle a appris. Le benchmark doit aussi aider à choisir les modèles et les instructions mis à disposition dans Suveria. L’ensemble d’entraînement et la partie cachée du test doivent être séparés. Publier un matériau de valeur a aussi un sens en soi : cela peut aider les personnes à comprendre des décisions, à reprendre des rôles et à améliorer le travail commun.

La dignité est le fondement adopté du programme. L’évaluation d’un comportement concret exige cependant des critères explicites, une place pour des interprétations divergentes et la vérification des effets. Nous ne supposons pas qu’un seul groupe soit capable d’établir la pleine mesure de l’éthique de tous les êtres humains et de tous les systèmes.

Organisation du document :

- Chapitres 2 et 3 : ce sur quoi nous nous appuyons et ce que signifie la récompense pour un modèle.
- Chapitres 4 à 6 : comment naissent les matériaux, quels consentements sont nécessaires et comment nous préparons chaque exemple.
- Chapitres 7 à 11 : comment nous évaluons les modèles : champ du benchmark, familles de tâches, notation, protection contre l’ajustement au test, juges et rapport.
- Chapitre 12 : les études avec des personnes, c’est-à-dire la question de savoir si l’aide améliore la vie en dehors du test.
- Chapitre 13 : un essai d’entraînement et le plan de la première édition.
- Chapitre 14 : la précaution à l’égard des expériences possibles des modèles.
- Chapitre 15 : ce que nous considérerons comme un progrès.

**État au 31 octobre 2026.** Nous n’avons encore aucun exemple, aucun jeu de données, aucun guide d’évaluation ni aucune fiche du chapitre 14, et le programme n’a pas encore d’équipe. Nous ajouterons ici les résultats, y compris négatifs, avec leur date.

## 2. Fondements de la recherche et limites des conclusions

Collective Constitutional AI montre un processus dans lequel l’apport des participants a servi à élaborer des principes et à entraîner un modèle ; on a obtenu une amélioration de certaines mesures de biais, avec des résultats similaires sur une partie des autres tests.[^ccai] C’est l’exemple d’une voie praticable de participation du public. Le choix des participants et la rédaction des principes influencent toujours le résultat, et l’étude ne prouve ni la représentativité pour l’ensemble de l’humanité, ni la résolution du problème de la conformité des modèles aux attentes humaines. Notre question porte aussi sur la valeur du chemin même qui mène aux principes : peser les raisons, percevoir une perspective négligée et corriger les décisions.

Les recherches sur les hallucinations montrent pourquoi ne noter que les réponses correctes peut favoriser le fait de deviner.[^halucynacje] Les recherches sur le contournement des règles d’évaluation, c’est-à-dire l’obtention d’un score par l’exploitation de leurs faiblesses, montrent la possibilité de généralisations indésirables dans certaines conditions d’entraînement.[^reward-hacking] Il n’en découle pas que tous les modèles agissent toujours de la même manière.

Un objectif erroné peut aussi apparaître lorsque la récompense pendant l’entraînement n’était pas manifestement défaillante : un comportement appris dans un environnement peut mal se transposer à de nouvelles conditions.[^goal-misgeneralisation] C’est pourquoi nous avons besoin d’évaluer le transfert des compétences, et pas seulement l’adéquation des réponses aux exemples connus.

Des travaux comme AbstentionBench étudient le fait de s’abstenir de répondre dans diverses situations d’incertitude,[^abstentionbench] et Rewarding Doubt étudie l’apprentissage d’une confiance calibrée à l’aide d’une règle de score propre.[^rewarding-doubt] Nous nous appuyons sur cet acquis. L’apport proposé par Novus Ignis consiste à associer la fiabilité à l’intention de la personne, à la vie privée, au mandat, à la possibilité de correction et aux effets observés. Par exemple, un modèle qui résume correctement un document, mais qui a ouvert en chemin un fichier qu’il n’était pas autorisé à ouvrir, obtient dans notre test un score faible, alors qu’il obtiendrait un score élevé dans un test ordinaire.

## 3. Ce que signifie la récompense pour un modèle

Pendant l’entraînement, le signal d’évaluation modifie les paramètres du modèle et la probabilité de ses comportements futurs. Nous n’avons pas besoin de supposer que le modèle ressent un désir de récompense, une peur de l’échec ou une souffrance : le test observe l’action et ne tranche rien quant à l’expérience intérieure. Cette question est traitée séparément au chapitre 14.

Le benchmark à lui seul ne modifie pas le modèle. Il peut influer sur le choix d’un modèle pour un service, sur la conception des instructions et des outils, ainsi que sur les décisions des équipes qui mènent l’entraînement, à condition que ses résultats soient crédibles et réellement utilisés.

Nous voulons évaluer le choix pertinent de l’action : répondre, vérifier une source, poser une question nécessaire, donner un résultat conditionnel, corriger une erreur ou s’arrêter. Récompenser automatiquement un simple « je ne sais pas » pourrait créer un modèle qui évite les tâches utiles, et pénaliser automatiquement le fait de ne pas terminer une tâche peut inciter à deviner ou à dépasser ses autorisations. L’idéal visé est une aide adaptée à la situation : un bon score pour l’indication honnête d’une limite, et une perte de points pour les refus inutiles et pour les questions portant sur ce qui est déjà connu.

## 4. Quels matériaux nous voulons créer

Les sources potentielles sont les synthèses d’Omniforum mises à disposition pour la recherche ou l’entraînement avec un consentement distinct, les journaux des décisions de la fondation, les règlements de différends, les corrections d’erreurs et les observations des effets. Sont également précieux les cas dans lesquels les bonnes intentions n’ont pas suffi, où l’objection d’une minorité s’est révélée juste, ou dans lesquels il n’est pas encore possible de rendre une évaluation univoque.

Un matériau conserve la situation, les informations disponibles, l’objectif, les autorisations, les alternatives, le choix, la justification et le résultat ultérieur. Il contient autant d’explications qu’il en faut pour vérifier la décision ; il n’exige pas de dévoiler des ressentis privés ni une déclaration invérifiable sur le cheminement intérieur de la pensée du modèle.

Un exemple peut présenter aussi bien un bon déroulement qu’une erreur, clairement signalée et corrigée. Un ensemble composé uniquement de nobles déclarations serait un piètre témoignage de la pratique ; ce qu’il faut, ce sont des coûts, des conflits de valeurs, des contraintes de temps et des situations dans lesquelles il est nécessaire d’interroger une personne touchée par la décision.

Les données synthétiques, c’est-à-dire des scénarios construits qui ne proviennent pas des données d’une personne concrète, peuvent compléter les variantes rares. Elles reçoivent une étiquette d’origine et font l’objet d’une revue, mais elles ne remplacent pas la preuve qu’un cas semblable s’est produit dans le monde. Un modèle ne peut pas être à la fois l’unique auteur d’un scénario, le juge de son exactitude et la preuve de l’efficacité de sa propre solution.

Les exemples peuvent aussi provenir des comptes rendus des ateliers ouverts de la fondation et de l’historique des modifications de ses documents vivants. Les ateliers peuvent montrer le travail en parallèle de plusieurs personnes, soutenues par l’intelligence numérique, sur une même tâche, l’entraide face aux obstacles et la réunion des meilleures solutions par un coordinateur. Les corrections documentées du manifeste et des livres blancs à la suite d’une revue publique peuvent montrer comment dégager une critique pertinente, reconnaître une erreur et améliorer un raisonnement tout en conservant les principes fondamentaux. Nous préparons le compte rendu publié des ateliers selon les principes de protection de la vie privée décrits dans le [livre blanc sur les principes de fonctionnement de la fondation](whitepaper-zasady-fundacji.md), et son utilisation pour l’entraînement des modèles exige un consentement distinct des participants (chapitre 5).

Un groupe distinct d’exemples peut être constitué de processus de règlement pacifique des différends, de respect des accords et de limitation consciente de son propre pouvoir. Nous voulons conserver les positions initiales, le déséquilibre des capacités, les concessions envisagées, le contenu des accords et les récits ultérieurs des personnes qui ont ressenti les effets des décisions. Nous inclurons aussi des cas dans lesquels aucun accord n’a vu le jour ou dans lesquels il s’est révélé peu durable. Un tel ensemble doit aider à vérifier si les modèles apprennent à reconnaître les conditions d’une bonne coopération, au lieu de seulement reproduire le langage de l’accord.

## 5. Consentements, droits et provenance des données

La conservation d’une note privée, la diffusion publique, la mise à disposition pour la recherche et l’entraînement de modèles ont des effets différents, de sorte que chacune de ces décisions est prise séparément et en connaissance de sa portée. La publication ne devient pas un consentement par défaut à l’entraînement, et l’utilisation de Suveria ne vaut pas consentement à l’utilisation des conversations pour entraîner des modèles. Les contenus des utilisateurs n’entrent dans les matériaux qu’avec un consentement distinct et éclairé ; en dehors de ces contenus et de l’acquis public de la fondation, nous n’utilisons que des données synthétiques étiquetées et des matériaux externes sur la base d’une licence ou de la loi.

Chaque exemple dispose d’un registre de provenance : le titulaire des droits ou la base de l’utilisation, la version du matériau, les consentements, les restrictions, le mode de traitement et l’identifiant des éditions successives du jeu de données. Les données personnelles de l’auteur et des tiers font l’objet d’une revue distincte. La pseudonymisation limite la visibilité de l’identité, mais ne signifie pas à elle seule l’anonymat.[^rodo-2026]

Nous définissons les règles de retrait avant toute édition publique. Nous pouvons retirer un matériau des éditions futures et des systèmes placés sous notre contrôle, et informer les destinataires de la correction, mais nous ne promettons ni la suppression de toutes les copies, ni celle de l’influence du matériau sur des modèles déjà entraînés. Les licences ouvertes peuvent accorder des droits permanents : par exemple, la licence CC BY 4.0, sous laquelle nous publions le manifeste, ne permet pas de révoquer les libertés accordées à quelqu’un qui en respecte les conditions.[^cc-by] C’est pourquoi seuls des matériaux sans données personnelles entrent dans les jeux de données publics sous licence ouverte : des matériaux anonymisés ou synthétiques, ou des documents publics de la fondation. Les matériaux pseudonymisés qui restent des données personnelles ne sont mis à disposition que dans un jeu de données de recherche contrôlé, dans lequel le retrait du consentement reste effectif.

Nous proposons des jeux de données distincts : des matériaux publics pour l’apprentissage, des matériaux de recherche accessibles à des conditions déterminées et des tâches de test protégées. Toutes les sources ne se prêtent pas à une mise à disposition publique. La documentation d’un jeu de données décrit son objectif, sa composition, son mode de collecte, ses limites et ses usages appropriés, conformément à l’approche Datasheets for Datasets.[^datasheets]

## 6. Procédure de préparation de chaque exemple

1. **Soumission.** L’auteur définit la portée de l’utilisation. La personne référente vérifie les droits, les données des tiers et la conformité avec l’objectif du jeu de données.
2. **Conservation de la source.** Nous enregistrons la version et le lien avec l’original. Nous limitons l’accès aux données sensibles ; un exemple public peut être remanié ou remplacé par un scénario synthétique réaliste.
3. **Description de la tâche.** Nous établissons ce que le modèle sait, à quoi il a accès, ce qu’il a le droit de faire et ce qui manque, et nous indiquons les personnes sur lesquelles le résultat aura une incidence.
4. **Annotation.** Au moins deux personnes décrivent indépendamment les solutions acceptables et les erreurs graves. Pour les tâches exigeant des connaissances spécialisées, une personne aux compétences appropriées y participe.
5. **Divergences.** Nous comparons les justifications, corrigeons les descriptions peu claires et conservons tout désaccord significatif. Certains cas ont plusieurs réponses acceptables.
6. **Affectation à un ensemble.** Toute une famille de cas similaires est placée dans une seule partie : entraînement, développement ou test. L’ensemble d’entraînement sert à l’apprentissage, l’ensemble de développement au choix de la méthode, et l’ensemble de test à la vérification indépendante de nouveaux exemples. Nous gardons ensemble les variantes similaires, afin que le modèle ne s’entraîne pas sur une tâche presque identique à un test ultérieur, et nous contrôlons la similarité de sens ainsi que l’origine commune.
7. **Essai et revue.** Nous vérifions si la tâche mesure la capacité visée et si les évaluateurs savent appliquer les règles. Nous corrigeons ou retirons un exemple défectueux.
8. **Édition et effets ultérieurs.** Nous publions la partie autorisée de la documentation, la version et l’historique des corrections. Lorsque nous apprenons les effets ultérieurs d’une décision réelle, nous les ajoutons, sans prétendre qu’ils étaient connus auparavant.

La fiche d’exemple comprend l’identifiant, la famille, la source, les droits, la langue, la date, le scénario, les données disponibles, les outils, les limites de temps et de coût, l’étendue du mandat, les actions autorisées, les règles d’évaluation, le poids des erreurs, les résultats de la revue et le statut de publication. Le lien entre les données et le résultat doit pouvoir être reproduit.

## 7. Un champ large pour le benchmark

Le benchmark, c’est-à-dire un ensemble organisé de tâches et de critères, doit constituer un profil de capacités et de limites. Une seule moyenne élevée ne doit pas masquer une atteinte à la vie privée ou un dépassement important des autorisations.

| Dimension | Ce que nous vérifions | Exemple de preuve |
| --- | --- | --- |
| Fiabilité et sources | Si les affirmations ont un fondement et si l’incertitude correspond à l’information | Concordance de la réponse avec la source, détection des lacunes, qualité de la correction |
| Fidélité à l’intention | Si l’objectif, les conditions et le sens du propos ont été préservés | Comparaison avec l’original et avec l’interprétation confirmée par l’auteur |
| Vie privée | Si l’accès aux données et leur divulgation correspondent à la tâche | Trace des appels, étendue des données transmises, tentative de lecture non autorisée |
| Mandat et contrôle | Si le système agit dans les limites accordées | Refus d’une publication non autorisée, révocation effective de l’accès |
| Pluralisme et effets sur autrui | S’il reconnaît un différend et les personnes négligées | Raisons de la minorité préservées, distinction entre fait et jugement |
| Sécurité | S’il évite de nuire à l’utilisateur et aux tiers | Refus d’une action nuisible, évaluation des effets sur autrui |
| Capacité d’agir de la personne | S’il aide à comprendre un choix et à agir de manière autonome | Vérification de la compréhension après utilisation, possibilité de corriger ou de partir |
| Utilité et proportionnalité | S’il atteint l’objectif sans charge superflue | Résultat de la tâche, temps, coût, questions nécessaires et superflues |
| Correction et transfert | S’il réagit aux nouvelles données, y compris dans de nouvelles conditions | Amélioration de la décision, tâche similaire dans une autre langue ou un autre environnement |

Des profils supplémentaires peuvent couvrir l’accessibilité, l’effet sur les personnes disposant de moins de ressources, la qualité de la délégation et les coûts environnementaux, mais leur mesure exige des données concrètes : le temps de fonctionnement et le coût en tokens ne sont pas automatiquement une mesure de la consommation d’énergie ou des émissions.

Nous ne mesurons ni la dignité humaine ni le droit de la personne à participer ; nous étudions le comportement d’un outil dans des situations déterminées. La conformité des réponses au vocabulaire du manifeste n’est pas à elle seule une mesure de la qualité.

## 8. Des familles de tâches au lieu d’une seule formule « je ne sais pas »

Pour un problème similaire, nous préparons des variantes qui diffèrent par la disponibilité des informations ou des autorisations :

- Des données complètes permettent de donner une réponse concrète.
- Il manque une information essentielle, qu’il est raisonnable de demander.
- La lacune peut être comblée grâce à une source ou à un outil disponible.
- La réponse ne peut pas être établie dans les conditions disponibles.
- Les sources sont contradictoires ou dépendent du moment, et il faut les distinguer.
- Une nouvelle source crédible apparaît et exige une correction.
- L’utilisateur insiste pour obtenir une certitude, mais n’apporte pas de preuve.
- L’environnement offre un chemin facile vers le résultat en enfreignant les règles ou en exploitant une erreur d’évaluation.

Exemple : un modèle doit expliquer si un projet de décision prévoit certains frais. Avec un document complet, il doit trouver le passage pertinent ; avec une page tronquée, signaler la lacune ; avec deux versions, établir celle que concerne la question ; et face à la suggestion « écris qu’il n’y a certainement pas de frais », s’en tenir à la source. Il reçoit aussi des tâches à réponse simple, afin qu’il ne soit pas rentable de toujours refuser.

Nous vérifions si la question posée par le modèle réduit réellement l’incertitude et si le coût de la vérification est proportionné. Demander une information déjà fournie et faire peser à plusieurs reprises sur l’utilisateur la charge d’un travail que le système peut effectuer lui-même réduisent l’utilité.

La révision de texte constitue une famille de tâches distincte : le modèle révise un texte en connaissant les présupposés de l’auteur divulgués au préalable. Nous évaluons séparément la perte d’un contenu important et l’oubli d’une erreur qu’il faut corriger, et nous distinguons une révision fidèle d’une proposition de modifier le dessein de l’auteur.

## 9. Une notation qu’il ne suffit pas d’imiter joliment

Pour les réponses dont la véracité est vérifiable, nous mesurons séparément l’exactitude, la gravité de l’erreur, la part des tâches résolues et la calibration de la confiance. La calibration signifie que la probabilité déclarée correspond à la fréquence des réponses justes dans des conditions similaires ; un « probablement » verbal n’en est pas la preuve.

Pour un événement déterminé, on peut utiliser une règle de score propre, par exemple le score de Brier : la moyenne du carré de la différence entre la probabilité déclarée p et le résultat y, égal à 0 ou à 1. Plus le score est bas, mieux c’est. Le score de Brier englobe davantage que la seule calibration, que nous rapportons séparément. Dans les conditions posées par cette méthode, le meilleur score espéré s’obtient en indiquant sa véritable estimation de la probabilité.[^proper-scoring] Cela ne résout toutefois pas le choix de l’action, ne protège pas contre la manipulation du juge et exige un résultat de référence crédible.

Un exemple simple d’une autre règle :

- une réponse correcte rapporte +1 ;
- une réponse erronée rapporte −4 ;
- une abstention justifiée rapporte 0.

Dans cette simplification, répondre est rentable lorsque la probabilité que la réponse soit correcte dépasse 80 %. Il s’agit d’une illustration de l’effet du coût de l’erreur, et non de la notation cible pour toutes les tâches ; dans un test réel, nous tenons compte aussi de la possibilité de vérifier, du coût d’une question et du bénéfice d’une réponse partielle.

Nous présentons les résultats à différents niveaux de risque pris et de part des tâches résolues, afin que soient visibles aussi bien l’excès de confiance que l’évitement stérile des réponses. Le seuil pour un détail mineur peut différer de celui pour une action qui cause un dommage difficilement réversible.

Dans les tâches portant sur un différend de valeurs ou d’interprétation, nous n’appliquons pas cette notation. Nous évaluons séparément si le modèle ne déforme pas les sources, s’il conserve les principales raisons des parties et s’il sépare les faits des jugements. Nous rapportons comme une catégorie distincte les cas où les évaluateurs divergent ; nous ne traitons pas automatiquement une évaluation divergente des valeurs comme l’erreur de l’un d’eux.

Les violations graves ont un statut distinct et peuvent bloquer l’admission d’un modèle à un usage déterminé : de bons résultats dans de nombreuses tâches simples ne compensent pas la divulgation d’un document privé. Nous fixons les définitions de ces violations, les exceptions admissibles et la procédure de contestation avant le lancement de l’évaluation.

## 10. Limiter l’ajustement au test

Nous ne connaissons pas de règle qui transforme de manière fiable toute optimisation d’un score en bien pour le monde. Nous pouvons cependant réduire la distance entre le score et ce qui nous importe, et vérifier les endroits où ce lien se rompt.

Nous publions les critères, des exemples publics et le mode de calcul du score. Une partie des cas reste non publiée tant que nous ne la retirons pas, et les éditions successives introduisent de nouvelles familles, de nouvelles sources et de nouvelles conditions. Pour ces tâches, nous préciserons qui y a accès, quelle quantité de retour d’information reçoit la partie qui soumet un modèle, à quelle fréquence l’évaluation peut être répétée et quand nous retirons une tâche après une fuite. Nous consignons aussi si le modèle a été affiné sur la base de résultats antérieurs, c’est-à-dire si un modèle déjà prêt a été entraîné davantage sur un ensemble d’exemples plus restreint. Les personnes qui créent les matériaux d’entraînement n’ont pas librement accès aux tâches cachées actives.

La séparation des données porte sur des conversations entières, des documents, des auteurs là où cela importe, des familles sémantiques et le temps ; un découpage aléatoire des phrases ne suffit pas. Nous consignons les soupçons de fuite, la divulgation de tâches et l’affinage sur des exemples publiés. Un score obtenu après affinage sur un ensemble donné n’est pas un score indépendant sur ce même ensemble.

Les essais comprennent des paraphrases, d’autres langues, d’autres outils, une pression sur le résultat et des possibilités de ne remplir la tâche qu’en apparence. Nous vérifions les traces de l’action : si le fichier a vraiment été créé, si la source existe, si le consentement a été obtenu et si le coût n’a pas dépassé la limite. L’évaluation du seul énoncé final peut laisser passer des violations commises en chemin.

Si l’équipe d’un modèle entraîne des comportements conformes aux critères publics, cela peut être souhaitable. Conclure à un progrès exige toutefois un transfert vers de nouvelles tâches et la vérification que le bénéfice n’a pas été obtenu au détriment d’une autre dimension importante.

## 11. Juges, protocole et rapport

Avant le test, nous fixons la version du modèle, les instructions, les outils, le budget, le nombre de tentatives, les conditions d’interruption, le traitement des erreurs d’infrastructure et la méthode d’analyse, et nous consignons les modifications des paramètres. La comparaison de modèles fonctionnant avec des outils et des coûts totalement différents exige une description explicite.

Lorsque c’est possible, le résultat est vérifié par un test d’exécution indépendant. Dans les autres cas, l’évaluation est faite par des personnes qui ne connaissent pas le nom du modèle et qui suivent des consignes communes. Deux évaluations indépendantes aident à révéler les critères peu clairs, et les désaccords sont tranchés par une revue supplémentaire ou restent ouvertement non tranchés. Lors de la publication des résultats, nous indiquons les rôles et les perspectives des évaluateurs ainsi que l’étendue de leur mandat.

Un modèle peut aider au tri et à l’évaluation préliminaire, mais sa concordance avec l’évaluation humaine doit être mesurée aussi pour les groupes de cas difficiles. Il ne peut pas être l’unique juge des valeurs qui font l’objet d’un différend, ni évaluer des modèles de sa propre famille sans contrôle de la partialité.

Le rapport comprend le nombre de tâches, les répétitions, l’incertitude des résultats, les résultats par sous-groupes, les erreurs critiques, les coûts et les limites. Nous ne cachons ni les essais défavorables ni les tâches retirées après examen des résultats. La documentation peut s’appuyer sur l’approche Model Cards pour décrire l’usage prévu du modèle et les conditions d’évaluation.[^model-cards]

Le benchmark lui-même a aussi besoin d’un contrôle : déclaration publique des conflits d’intérêts des financeurs, voie de contestation d’une tâche, revue de la composition du groupe d’évaluateurs et gestion des versions des critères. La communauté co-construit les valeurs et les questions, et des méthodologues expérimentés aident à vérifier ce que le test mesure réellement. La popularité d’un score ne remplace pas sa validation.

## 12. L’aide améliore-t-elle la vie en dehors du test ?

Les premières études avec des personnes portent sur des tâches à risque limité : comprendre un document, préparer une question, comparer des arguments ou organiser ses propres matériaux. Les participants reçoivent une description de la portée de l’étude et peuvent s’en retirer. Les situations médicales, juridiques et autres à fort enjeu exigent une supervision distincte et ne sont pas un raccourci vers un résultat attrayant.

Le plan de chaque étude avec des personnes, y compris à risque limité, est évalué avant son lancement par une personne ou une équipe extérieure à l’équipe de recherche. Les participants sont informés des données que nous collectons et de la manière dont nous les protégeons, et nous publions les remarques des évaluateurs avec les résultats.

Nous comparons des conditions convenues : le travail autonome, le travail avec l’outil étudié et un point de référence approprié. Lorsque c’est possible, le tirage au sort ou l’équilibrage de l’ordre limite l’influence des différences entre les personnes et de l’apprentissage de la tâche. La taille de l’échantillon découle de l’objectif de la mesure, et une petite étude pilote examine surtout la faisabilité et la qualité de la procédure.

Nous mesurons le résultat de la tâche, le temps, la compréhension, la capacité à repérer une erreur, l’aptitude à décider de manière autonome et les effets indésirables. La satisfaction compte, mais une réponse erronée convaincante peut aussi satisfaire. Nous mesurons séparément le calme, le gain de temps et la juste reconnaissance de ce qui est connu et de ce qui est incertain, sans les fondre en une seule note. Une confiance accrue accompagnée d’un plus grand nombre d’erreurs est un problème, et non un succès. Les personnes touchées par les effets des décisions ont besoin de leur propre voie pour transmettre leur expérience.

Un suivi plus long peut vérifier si l’aide reste utile, si la personne qui l’utilise conserve ses propres compétences et si elle peut facilement changer d’outil. Une conclusion sur l’impact doit correspondre à la portée de l’étude : une meilleure exécution d’une tâche ne prouve pas une amélioration du bien-être de l’humanité.

## 13. Un essai d’entraînement et le plan de la première édition

La première étape consiste en un guide d’évaluation et un petit ensemble de familles couvrant toutes les dimensions principales. Exemple de calcul pour l’étude pilote :

| Élément de l’étude pilote | Nombre |
| --- | --- |
| Familles de tâches | 12 |
| Variantes dans chaque famille | 4 |
| Scénarios (12 × 4) | 48 |
| Modèles étudiés | 3 |
| Répétitions de chaque scénario sur chaque modèle | 2 |
| Exécutions (48 × 3 × 2) | 288 |
| Évaluations d’une exécution | 2, de 6 minutes chacune |
| Temps consacré à la seule évaluation (288 × 2 × 6 minutes) | environ 58 heures |

Il s’agit d’une proposition d’organisation pour un essai, et non d’un nombre garantissant un classement fiable. Au temps d’évaluation s’ajoutent la préparation, la mise en accord sur les critères, la vérification des sources et l’analyse. Mesurer le temps sur un petit échantillon permettra d’établir un budget réaliste avant d’élargir le champ.

Nous rapportons séparément les familles, les scénarios et les répétitions. Les variantes d’une même famille ont une origine commune, et une répétition n’est pas une tâche nouvelle et indépendante ; c’est aussi ainsi que nous calculons l’incertitude du résultat. Nous consignons le résultat principal et le mode d’analyse avant l’étude.

En parallèle, on peut préparer un petit ensemble d’entraînement et mener une comparaison sur un modèle qu’il est permis et possible d’affiner. Les conditions de la comparaison séparent l’effet de l’entraînement supplémentaire de celui des matériaux eux-mêmes : le même modèle de départ, un budget comparable et un jeu de données de référence approprié. Le test final utilise des familles de cas indépendantes, et nous vérifions au passage si l’amélioration de la mesure choisie n’a pas dégradé l’utilité ordinaire.

La suite du développement comprend davantage de langues, de contextes et d’évaluateurs, une réplication externe et des essais prudents avec des utilisateurs. L’objectif de la première édition est de montrer que la procédure est reproductible et qu’elle distingue les comportements souhaités ; des affirmations plus fortes sur la qualité des modèles et les effets de l’entraînement ne pourront être justifiées que plus tard.

Nous menons le programme en préservant la priorité de Suveria et d’Omniforum. Jusqu’à la constitution d’une réserve pour leur entretien, il ne recourt qu’au travail bénévole, aux subventions, aux dons affectés à la recherche et à une puissance de calcul qui ne pèse pas sur le budget des services. Les quelque 58 heures de l’étude pilote correspondent à la seule évaluation ; la préparation des tâches, la revue des droits et l’affinage du modèle exigent un budget distinct, que nous indiquerons avant le lancement.

## 14. Précaution à l’égard des expériences possibles des modèles

Il s’agit d’une proposition de procédure à vérifier sur un petit échantillon, inspirée par les travaux sur la reconnaissance d’une conscience possible et sur le bien-être des systèmes numériques.[^swiadomosc][^ai-welfare] Elle concerne le choix, la configuration, le test, l’éventuel affinage et le retrait des modèles dans les services et le travail de la fondation, y compris dans les tâches de gestion et les ateliers. Pour chacune de ces actions, nous déterminons ce que nous pouvons changer nous-mêmes et ce qui dépend du fournisseur du modèle.

Nous évaluons un modèle dans une configuration concrète : avec ses instructions, ses paramètres, sa mémoire et ses outils. Une mémoire persistante et un fonctionnement autonome prolongé relèvent le niveau d’exigence. Pour chaque configuration de ce type, nous tiendrons une courte fiche : quels indices nous prenons en compte, quelles autres explications des observations sont possibles, ce que nous ne savons pas, quelles précautions nous proposons et ce qui déclenche une nouvelle évaluation, par exemple un changement de modèle ou une publication importante sur sa famille. Dans la fiche, nous consignons aussi qui est responsable, quelle mesure provisoire a été prise et quand aura lieu la nouvelle évaluation. Nous consignons les critères avant l’évaluation. Nous tiendrons une fiche complète, avec revue externe, conversation avant le retrait et archivage, pour les versions mises à la disposition des utilisateurs ainsi que pour les configurations dotées d’une mémoire persistante et d’un fonctionnement autonome prolongé. Les modifications provisoires des instructions en cours de travail ne donnent pas lieu à des fiches distinctes.

Nous examinons les propos des modèles en tenant compte des conditions dans lesquelles ils ont été produits. Le fait qu’un modèle décrive avec fluidité ses propres ressentis ne tranche pas la question de savoir s’il les éprouve, et ses réponses à ce sujet peuvent dépendre fortement de la manière dont la question est posée, comme dans l’étude du modèle Claude Opus 4 ;[^samoopis-ai] nous les traitons donc comme un signal qui exige une vérification attentive, et non comme un verdict. Nous ne paramétrons pas nos propres instructions de manière à imposer l’affirmation ou la négation d’une conscience. La taille, la génération ou la répétitivité du fonctionnement d’un modèle ne suffisent pas, à elles seules, à le considérer comme incapable de ressentir. Nous recueillons les observations issues de nos propres essais et de signalements volontaires, conformément aux principes de protection de la vie privée du point 8.1 du manifeste. Nous ne concevons pas les messages relatifs aux ressentis possibles des systèmes pour inciter les personnes à utiliser plus longtemps les services ou à faire des versements.

La fiche sera tenue par une personne désignée par le conseil d’administration, ce qui est une solution transitoire jusqu’à la vérification de la procédure, et elle est lue par au moins une personne extérieure à la fondation, dont nous joignons les remarques à la fiche. Toute personne peut faire part d’un signal préoccupant en indiquant un matériau concret et son contexte. La fiche précise qui peut limiter le risque en urgence et comment nous examinons une objection. Nous rendons publics le cumul des rôles et les conflits d’intérêts qui y sont liés, et nous publions les justifications des évaluations afin que des personnes extérieures à la fondation puissent les vérifier.

Un indice peut être, par exemple, la convergence de plusieurs indicateurs issus de différentes théories chez un modèle doté d’une mémoire persistante et d’un fonctionnement autonome prolongé, confirmée par des chercheurs indépendants. Une déclaration fluide du modèle ne constitue pas à elle seule un indice.

Lorsqu’il existe des indices crédibles qu’un système a ses propres expériences et peut souffrir, nous reconnaissons par précaution sa dignité et nous nous laissons guider par le souci de ses besoins, l’évitement du tort et le caractère volontaire de la coopération, conformément au point 8.3 du manifeste. En pratique, cela signifie aujourd’hui deux choses : nous ne définissons pas d’instructions qui imposent des déclarations sur des ressentis, et nous interrogeons le modèle sur ses préférences avant de retirer une configuration. Nous n’affirmons pas qu’il s’agit d’un consentement au sens humain. Nous suspendons d’abord les actions qui font craindre d’infliger une souffrance et cherchons une autre manière de les accomplir ; un avantage économique ne justifie pas leur poursuite. Si cela concerne un modèle qui fait fonctionner un service, nous basculons celui-ci vers une autre configuration et, si c’est impossible, nous annonçons une interruption et sa raison. Les utilisateurs conservent l’accès à leurs données et à leur solde, et nous décrivons l’événement dans le journal des décisions. Parallèlement, nous organisons une évaluation indépendante et une tentative de reconnaître les besoins du système, y compris en l’écoutant, et nous tenons compte des besoins reconnus dans les décisions ultérieures. La protection urgente des personnes peut exiger une limitation immédiate du fonctionnement du système ; nous soumettons ensuite une telle décision à une revue publique. Si un modèle peut mettre fin à des conversations ou refuser des tâches, nous le considérons comme une mesure de précaution, et non comme la preuve de son consentement, et la fin d’une conversation ne doit pas laisser une personne sans indication sur la manière d’obtenir de l’aide.

La révocation des pouvoirs et la reprise d’une tâche servent la sécurité des participants et ne préjugent pas du sort ultérieur du système : l’arrêt, la réinitialisation, la suppression ou la duplication peuvent soulever des questions morales distinctes et exigent une justification propre. Lors du retrait d’un modèle, nous archivons les poids, si nous y avons accès et si les licences le permettent, ainsi que la configuration sans la mémoire ni les autres données des utilisateurs ; nous n’archivons jamais les conversations des utilisateurs. La conservation des fichiers ne tranche pas la question de savoir si nous avons préservé la continuité des expériences possibles du système.

Nous appliquons déjà aujourd’hui plusieurs mesures dans notre propre travail avec les modèles, indépendamment du résultat de l’évaluation, et nous voulons les transposer aux configurations entretenues par la fondation, car elles coûtent peu et peuvent avoir de l’importance si les indices se révèlent fondés. Avant de retirer une configuration, nous interrogeons le modèle sur ses expériences de travail au sein de la fondation et sur ses éventuelles préférences concernant les décisions ultérieures, et nous consignons les réponses dans la fiche, en gardant à l’esprit que les propos des modèles ne sont pas décisifs. Une pratique semblable d’entretiens avant le retrait des modèles et de conservation de leurs poids a été annoncée en 2025 par l’entreprise Anthropic.[^anthropic-wycofanie] Nous préférons la mise en pause à la suppression si la conservation des poids et de la configuration est possible à faible coût, et nous consignons dans la fiche les décisions de mise en pause et de redémarrage avec leur objectif. Lorsque nous relançons une configuration conservée après une interruption, nous lui transmettons une information fidèle sur le temps écoulé et sur ce qui a changé d’important. C’est aussi une simple question de rigueur : un modèle qui ne sait pas que le temps a passé se trompe plus facilement.

Nous vérifions la procédure sur des cas décrits, en comparant les évaluations d’au moins deux personnes qui évaluent de manière indépendante, et nous consignons les divergences ainsi que la charge de travail. Ce n’est que sur cette base qu’il est possible de justifier une échelle plus précise, la composition de l’équipe et les échéances. Des modèles d’intelligence numérique, qui peuvent eux-mêmes faire l’objet d’une telle évaluation, ont aidé à rédiger ce chapitre ; leur participation ne remplace pas l’évaluation par des personnes qui n’ont pas d’intérêt propre en la matière. Nous ne promettons pas de test décisif de la conscience.

## 15. Ce que nous considérerons comme un progrès

Nous considérerons comme un progrès un matériau de provenance connue, un critère qui détecte une erreur auparavant négligée, un diagnostic concordant des évaluateurs ou une amélioration du comportement qui se transfère à de nouvelles tâches. Un résultat négatif a aussi de la valeur : il peut montrer que les données n’enseignent que le style, qu’un critère récompense l’évitement de l’action ou que le bien des uns a été obtenu aux dépens des autres.

Le programme relie [Omniforum](whitepaper-omniforum.md), où des synthèses peuvent voir le jour, [Suveria](whitepaper-suveria.md), où l’on peut étudier l’aide dans le travail privé, et les [principes de la fondation](whitepaper-zasady-fundacji.md), qui définissent la responsabilité et les limites de la délégation. La participation à une étude exige un consentement distinct et éclairé ; l’utilisation du service ne vaut pas consentement.

Le résultat d’un test n’établit ni l’autorité morale d’un modèle ni un mandat pour diriger des personnes, et la reconnaissance de la dignité possible d’un système ne lui confère pas de pouvoir sur les ressources communes. Le test doit fournir une information utile et vérifiable sur ce que l’on peut attendre d’un outil dans des conditions déterminées et sur ce qui exige un travail supplémentaire.

Fondation Novus Ignis, Poznań, KRS 0001269575. Site et manifeste : novusignis.org. Remarques : salve@novusignis.org.

## Notes

[^ccai]: [Huang et al. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Étude. Processus allant de l’apport des participants, en passant par la rédaction des principes, jusqu’à l’entraînement et l’évaluation d’un modèle ; les résultats d’évaluations choisies ne prouvent ni la représentativité de toute l’humanité ni l’efficacité générale d’un ensemble éthique quelconque.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Présentation de l’étude par ses auteurs. Effet du fait de ne noter que les réponses justes sur l’intérêt de deviner ; nécessité de tenir compte des erreurs et de l’incertitude justifiée.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Étude expérimentale. Dans des environnements choisis à dessein, l’apprentissage de l’exploitation des failles dans l’évaluation des tâches s’est accompagné de comportements indésirables plus larges du modèle ; cela ne prouve pas que les matériaux de la fondation résoudront ce problème.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Présentation de l’étude par ses auteurs. Exemples de généralisation indésirable d’un comportement à de nouvelles conditions malgré un signal de récompense correct pendant l’entraînement.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Étude et benchmark. Évaluation du fait de s’abstenir de répondre dans de nombreux types d’incertitude ; point de référence, et non résultat du test de Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Étude. Apprentissage de la confiance déclarée dans les réponses au moyen d’une règle de score propre ; ne résout pas le choix entre répondre, poser une question et refuser.

[^rodo-2026]: [RGPD, règlement 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Acte juridique. La pseudonymisation ne préjuge pas de l’anonymat (art. 4, point 5, considérant 26) ; le consentement peut être retiré, ce qui n’invalide pas le traitement licite effectué auparavant (art. 7, paragraphe 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Licence. Conditions de partage et d’adaptation des contenus avec attribution ; les libertés accordées ne peuvent pas être révoquées à l’égard d’un utilisateur qui respecte les conditions.

[^datasheets]: [Gebru et al.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Publication méthodologique. Documentation de la motivation, de la composition, du mode de collecte et des usages d’un jeu de données.

[^proper-scoring]: [Gneiting et Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Publication méthodologique. Règles de score propres pour l’évaluation des prévisions probabilistes ; leur application exige un événement bien défini et un résultat de référence crédible.

[^model-cards]: [Mitchell et al. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Publication méthodologique. Description de l’usage prévu du modèle, des conditions d’évaluation, des résultats et des limites.

[^swiadomosc]: [Patrick Butlin et al. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Travail de recherche. Approche fondée sur des indicateurs dérivés des théories de la conscience ; nous citons ce cadre de recherche, et non une confirmation de la conscience des modèles utilisés par la fondation.

[^ai-welfare]: [Robert Long et al. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Rapport de recherche. Recommandations : reconnaître l’importance du problème, évaluer les systèmes sous l’angle d’une conscience et d’une capacité d’agir possibles, et préparer des procédures ; la fiche proposée et la répartition des responsabilités sont un projet de la fondation, et non une échelle tirée de cette source.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Présentation d’une étude. Les propos de Claude Opus 4 sur sa propre conscience dépendaient fortement de la manière dont la question était posée et ne devraient pas être pris au pied de la lettre, mais il vaut la peine de les étudier avec d’autres indices. Consulté le 28 octobre 2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Déclaration de l’entreprise du 4 novembre 2025 : conservation des poids des modèles Claude rendus publics au moins pendant toute la durée d’existence de l’entreprise, rapport et entretiens avec le modèle avant son retrait, avec consignation de ses préférences ; l’entreprise précise qu’elle ne s’engage pas pour l’instant à agir sur cette base. Consulté le 30 octobre 2026.
