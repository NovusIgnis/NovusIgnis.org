---
tytul: Les modèles d’intelligence numérique dans Suveria
opis: D’où viennent les modèles pour Suveria, comment nous les choisissons, ce qui se passe quand un modèle change et quels principes publics l’assistant doit suivre
grupa: suveria
kolejnosc: 4
menu: Modèles
---
# Les modèles d’intelligence numérique dans Suveria

Un modèle d’intelligence numérique est un programme qui lit vos mots et compose une réponse ; l’assistant de Suveria doit fonctionner à partir d’un tel modèle. Cette page explique d’où viennent les modèles, comment nous les choisissons, ce qui se passe quand le modèle change et quels principes l’assistant doit suivre ouvertement.

Suveria est aujourd’hui un projet. Le journal des résultats du livre blanc (état au 29 octobre 2026) le dit explicitement : nous n’avons encore exécuté aucun modèle dans Suveria ni réalisé aucun des essais décrits. Tout ce qui suit présente des intentions et des candidats, et non un service en fonctionnement.

Pour en savoir plus : [livre blanc de Suveria, chapitre 9](../whitepaper-suveria.md#s9).

## Pourquoi des modèles ouverts

Le projet repose sur des modèles ouverts, c’est-à-dire mis à disposition dans des conditions permettant de les exécuter soi-même. La fondation peut ainsi les proposer pratiquement à prix coûtant et concentrer son travail sur un environnement privé pour utiliser les modèles existants, avec la possibilité de développer aussi ses propres modèles à l’avenir.

Au début, nous voulons les utiliser chez des fournisseurs d’informatique confidentielle, puis sur nos propres serveurs si le calcul et les conditions le justifient. Le manifeste précise que Suveria est « notre meilleure voie vers un travail privé avec l’intelligence numérique, et non une fin en soi » : si les modèles tiennent sur les appareils des utilisateurs ou qu’un meilleur moyen de protection apparaît, une partie de cette voie deviendra inutile.

Pour en savoir plus : [manifeste, point 3.1](../manifest.md#s3-1) et [livre blanc de Suveria, chapitre 6](../whitepaper-suveria.md#s6).

## Comment nous choisissons un modèle

Suveria doit être accessible aux personnes du monde entier, dans leurs propres langues. C’est pourquoi, pour choisir un modèle, nous prenons en compte :

- la qualité dans de nombreuses langues ;
- la compréhension des intentions ;
- la fiabilité ;
- la licence, c’est-à-dire les conditions dans lesquelles le créateur autorise l’utilisation du modèle ;
- le coût ;
- la possibilité de l’exécuter dans l’environnement protégé décrit sur la page [Vie privée et sécurité](suveria-prywatnosc.md).

Nous ne choisissons un modèle plus grand que s’il accomplit nettement mieux les tâches importantes pour les personnes. Le benchmark de la fondation doit nous y aider : c’est un ensemble de tâches et de règles d’évaluation permettant de vérifier le comportement des modèles ; aujourd’hui, c’est un programme de recherche sans résultats.

Le livre blanc cite deux candidats. Ce sont des candidats à vérifier, et non une décision : le premier modèle et le niveau de qualité acceptable restent à déterminer.

- **DeepSeek-V4.1-Flash.** Un modèle sous licence MIT, qui permet aussi de l’utiliser pour des services. Le fabricant annonce 552 milliards de paramètres pour la partie principale (les paramètres sont des nombres ajustés pendant l’entraînement du modèle) et une mémoire supplémentaire appelée Engram de 196 milliards de paramètres. Seuls 8–16 milliards d’entre eux travaillent à chaque mot, ce qui permet des réponses rapides et peu coûteuses, bien que l’exécution exige au moins quatre cartes graphiques modernes. Les paramètres sont enregistrés sous une forme abrégée (quantification). Cela économise de la mémoire, mais peut réduire la qualité ; nous le vérifierons donc sur nos propres tâches.
- **Kimi K3.1 Pro.** Le fabricant a annoncé la publication des poids complets, c’est-à-dire des paramètres, mais n’a pas encore annoncé la licence. Après la publication, nous vérifierons notamment leur taille, leur licence et leur disponibilité chez les fournisseurs d’informatique confidentielle, puis nous ajouterons le résultat daté au livre blanc, même si les conditions s’avèrent inadaptées.

Pour en savoir plus : [livre blanc de Suveria, chapitre 6](../whitepaper-suveria.md#s6) et [livre blanc sur les matériaux et le benchmark, chapitre 1](../whitepaper-materialy-i-benchmark.md#s1).

## Ce qui se passe quand le modèle change

Nous annonçons à l’avance le changement ou le retrait d’un modèle. L’historique de vos conversations reste chez vous : vous pouvez choisir un nouveau modèle, exporter vos données ou arrêter votre travail.

Le moment du changement de modèle doit être visible dans la conversation, et le transfert du contexte privé vers un nouveau modèle exige votre décision. Changer de modèle peut aussi exiger une nouvelle vérification de la protection, car une mise à jour ne doit pas affaiblir discrètement les dispositifs de sécurité convenus.

Pour en savoir plus : [livre blanc de Suveria, chapitre 6](../whitepaper-suveria.md#s6) et [chapitre 9](../whitepaper-suveria.md#s9).

## Les principes de l’assistant doivent être publics

Nous publierons en entier les principes selon lesquels l’assistant répond avec chaque version. Dans Suveria, vous devez toujours pouvoir lire l’instruction complète de votre assistant, c’est-à-dire les règles écrites selon lesquelles il répond, ainsi que la description de son mode de travail : comment il décompose une tâche en étapes, utilise la mémoire et vérifie les réponses.

L’infrastructure commune ne doit proposer que les modèles et les réglages qui réussissent les essais publics du benchmark. Au-delà de ce minimum, vous choisissez votre style de travail, de la mise en ordre calme de vos pensées à une conversation exigeante dans laquelle l’assistant signale les lacunes du raisonnement.

Nous voulons tenir une bibliothèque ouverte d’instructions éprouvées, que les participants améliorent dans OmniForum (l’espace commun de conversation et de décision) et vérifient dans le benchmark. Cette bibliothèque n’existe pas encore.

Pour en savoir plus : [livre blanc de Suveria, chapitre 4](../whitepaper-suveria.md#s4) et [point 4.1](../whitepaper-suveria.md#s4-1).

## L’assistant, le Canon personnel et le Télescope de la pensée

La mémoire des conversations antérieures doit fonctionner avec votre accord et pouvoir être modifiée ouvertement : chaque entrée peut être supprimée ou corrigée, et son origine consultée. L’assistant distingue clairement sa propre suggestion d’une position que la personne a consciemment reconnue comme sienne.

Le Canon personnel est l’ensemble de principes et de valeurs que vous avez consignés et reconnaissez comme vôtres. Le Télescope de la pensée doit permettre de voir la trace de vos propres réflexions à différents moments et leur évolution au fil du temps, ainsi que de confronter une situation que vous indiquez au Canon. L’idée vient de la fenêtre d’Overton, c’est-à-dire de l’éventail des idées considérées comme acceptables dans une société à un moment donné. Pour une personne, il s’agit de l’éventail des pensées qu’elle juge admissibles pour elle-même à un moment donné ; le Télescope doit être une telle fenêtre pour une seule personne, et pour elle seule.

Le modèle montre les liens possibles avec la source du principe invoqué, et son interprétation peut être corrigée ou rejetée. Nous ne créons ni score de moralité ni classement public. Dans la première version, le Télescope ne travaille que sur une situation que vous indiquez et ne suit pas votre vie en continu.

Pour en savoir plus : [livre blanc de Suveria, chapitre 6](../whitepaper-suveria.md#s6) et [point 6.1](../whitepaper-suveria.md#s6-1).

## Les limites : ce que le modèle fait et ne fait pas

- **Crise.** Lorsque la conversation porte sur une menace pour la vie ou la santé, l’assistant doit fournir des informations sur l’aide disponible, par exemple les numéros d’urgence, sans rien envoyer hors de l’environnement privé.
- **Les messages d’autrui.** Le message d’un tiers, par exemple dans une boîte de messagerie connectée, peut contenir des instructions cachées ; c’est pourquoi nous séparons les contenus extérieurs de vos instructions : lorsqu’il les organise, l’assistant ne peut, de lui-même, envoyer des messages, ouvrir des adresses réseau ni modifier le Canon personnel sans votre confirmation.
- **Les choix du créateur.** Le modèle porte aussi les choix de son créateur, par exemple les sujets qu’il évite ; nous les vérifions dans le benchmark et les décrivons lors du choix du modèle.
- **Sans accès cachés.** Nous voulons prévenir les abus sans lire les conversations privées. Nous ne créons pas d’accès cachés aux contenus privés.

Pour en savoir plus : [livre blanc de Suveria, chapitre 4](../whitepaper-suveria.md#s4), [chapitre 3](../whitepaper-suveria.md#s3) et [chapitre 6](../whitepaper-suveria.md#s6).

## Lisez et dites-nous ce que vous en pensez

Vous trouverez les chiffres, les notes et la liste des questions à trancher dans le [livre blanc de Suveria](../whitepaper-suveria.md), et le mode d’évaluation des modèles dans le [livre blanc sur les matériaux et le benchmark](../whitepaper-materialy-i-benchmark.md). Si quelque chose vous intrigue ou vous paraît erroné, sélectionnez ce passage et utilisez le bouton « J’ai une remarque », ou écrivez à salve@novusignis.org.