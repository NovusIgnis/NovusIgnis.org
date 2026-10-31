---
tytul: Vie privée et sécurité dans Suveria
opis: Contre qui Suveria doit protéger les conversations, comment un message traverse le système, qui détient les clés et comment nous vérifierons que la protection fonctionne
grupa: suveria
kolejnosc: 2
menu: Vie privée et sécurité
---
# Vie privée et sécurité dans Suveria

Cette page s’adresse aux personnes qui veulent comprendre sur quoi doit reposer la protection de la vie privée dans Suveria avant de lui confier leurs conversations. Elle approfondit la page [Qu’est-ce que Suveria](suveria.md), et chaque partie renvoie au livre blanc.

Un principe organise l’ensemble : la protection de la vie privée ne peut reposer sur la confiance dans les bonnes intentions de la fondation ou des administrateurs des serveurs, mais seulement sur des dispositifs de sécurité dont le fonctionnement peut être vérifié de manière indépendante. Le manifeste le formule ainsi : « Chaque promesse de sécurité doit avoir sa preuve dans le code et dans le silicium, et pas seulement dans nos paroles. » Vos propres appareils doivent être le lieu principal de conservation des conversations, et nous ne créons pas d’accès cachés aux contenus privés.

Suveria est aujourd’hui un projet. Tout ce qui suit décrit le fonctionnement prévu ; nous n’avons encore réalisé aucun des essais qui doivent le confirmer.

Pour en savoir plus : [manifeste, point 2.2](../manifest.md#s2-2) et [point 3.1](../manifest.md#s3-1).

## Contre qui la protection est prévue et contre qui elle ne l’est pas

Nous protégeons le contenu des conversations et des fichiers, l’historique et la mémoire de l’assistant, les clés (c’est-à-dire les chaînes de caractères secrètes qui ouvrent les données chiffrées), les données de facturation et les métadonnées, c’est-à-dire les informations sur la connexion elle-même : son horaire, l’adresse réseau et la taille de la requête.

Un environnement confidentiel est une zone du serveur isolée au niveau matériel, dont même l’administrateur ne peut pas consulter le contenu. L’attestation, c’est-à-dire une certification signée par le matériel indiquant le logiciel qui fonctionne sur le serveur et le mode de protection utilisé, doit confirmer qu’il en est bien ainsi. Une API confidentielle est un tel environnement chez un fournisseur externe, auquel notre application se connecte (une API est une liaison entre logiciels). Le tableau décrit le fonctionnement prévu, qui n’a pas encore été vérifié par un essai :

| Contre qui la protection est prévue | Modèle sur votre appareil | Environnement confidentiel sur des serveurs | API confidentielle d’un fournisseur externe |
| --- | --- | --- | --- |
| Administrateur du fournisseur | sans objet : traitement sur l’appareil | doit protéger : isolation matérielle | déclaration du fournisseur, à vérifier |
| Observateur du réseau | sans objet sans réseau ; le trafic des intégrations doit être évalué | protection partielle : contenu chiffré, métadonnées nécessitant des mesures distinctes | protection partielle, si la clé de connexion est liée à l’attestation |
| Personne ayant un accès physique au serveur | sans objet ; l’accès à l’appareil est ce qui compte | ne protège pas : dans le centre de données d’un tiers, le fournisseur a accès ; sur notre propre matériel, contrôle physique visible | ne protège pas : le fournisseur a accès |
| Fondation | sans objet : la fondation ne participe pas au traitement | doit protéger : l’isolation s’applique aussi à nous, vous détenez les clés du stockage | doit protéger le contenu : la passerelle, c’est-à-dire notre composant qui facture les requêtes, n’accède pas au contenu ; nous montrerons où le chiffrement prend fin avant la phase pilote |

Légende : « doit protéger » désigne la protection prévue, « protection partielle » protège le contenu mais pas tout ce qui l’entoure, « ne protège pas » indique explicitement une limite, et « déclaration du fournisseur, à vérifier » signifie que nous ne confirmons pas la protection avant de l’avoir vérifiée nous-mêmes. L’administrateur du fournisseur est la personne qui gère les serveurs sur lesquels fonctionne le modèle ; l’observateur du réseau voit le trafic entre votre appareil et le serveur, mais le contenu est chiffré pendant le transit ; une personne ayant un accès physique peut ouvrir le boîtier du serveur ; la fondation, c’est nous en tant qu’opérateur du service.

Trois limites sont à connaître d’emblée. L’informatique confidentielle ne répare pas un téléphone ou un ordinateur infecté. Elle ne protège pas contre toute personne ayant un accès physique au serveur : en 2025, des chercheurs ont construit pour moins de mille dollars un dispositif qui permet, avec un accès physique au serveur, de falsifier la certification du matériel. La protection sur les serveurs repose aussi sur les clés du fabricant du processeur, qui doit être honnête.

Pour en savoir plus : [livre blanc de Suveria, chapitre 2](../whitepaper-suveria.md#s2) et [point 2.3](../whitepaper-suveria.md#s2-3).

## Comment un message traverse le système

Suveria doit se composer d’une application sur votre appareil, d’une passerelle (notre partie du système qui facture les requêtes et fait respecter la limite de dépenses), d’un environnement confidentiel contenant le modèle, du stockage des copies chiffrées et d’un relais facultatif qui masque votre adresse.

Dans la variante cible, un message doit suivre ce chemin :

1. L’application télécharge la description de la version approuvée et vérifie l’attestation du serveur.
2. Elle compare cette certification à une politique publique. La clé avec laquelle elle chiffre le message doit y être liée.
3. Ce n’est qu’après une vérification réussie qu’elle établit une connexion chiffrée. Une divergence bloque l’envoi des données ; passer à une autre variante exige votre choix conscient.
4. L’environnement traite la requête avec un accès limité au réseau et aux outils, renvoie le résultat et supprime les données de travail conformément à la politique publiée.
5. La conversation ou la mémoire n’est enregistrée que dans les limites que vous choisissez.

L’attestation aide à établir ce qui a été exécuté, mais elle ne prouve pas à elle seule que ce code est sûr ; des revues de code et une possibilité de vérification indépendante sont nécessaires. Avant la phase pilote, nous montrerons dans l’application où prend fin le chiffrement contrôlé par votre appareil et si la passerelle voit le contenu.

Nous sommes particulièrement prudents lorsque vous connectez des sources contenant les messages d’autres personnes, par exemple une boîte de messagerie. Le message d’un tiers peut contenir des instructions cachées qui tentent de pousser le modèle à révéler la mémoire privée. C’est pourquoi l’assistant ne peut, de lui-même, envoyer des messages, ouvrir des adresses réseau ni modifier le Canon personnel (votre ensemble de principes et de valeurs) sans confirmation humaine.

Au lancement du service, nous publierons la liste de tous les types de données sur le fonctionnement du service que nous collectons, avec leur finalité et leur durée de conservation. Nous ne collectons pas de données absentes de cette liste.

Pour en savoir plus : [livre blanc de Suveria, chapitre 3](../whitepaper-suveria.md#s3).

## Vos clés

Les clés des conteneurs privés, c’est-à-dire des ensembles de données chiffrées, restent sous votre contrôle. La fondation ne conserve ni les clés ni des parties de celles-ci ; elle ne peut donc ni rétablir l’accès à votre place ni remettre vos données à un tiers. Récupérer un compte auprès de l’opérateur ne déverrouille pas le contenu.

Perdre toutes les copies de la clé peut entraîner une perte définitive des données. C’est pourquoi nous envisageons des méthodes de récupération qui peuvent être combinées : un second appareil ayant accès aux données, une clé notée sur papier ou dans un gestionnaire de mots de passe, une clé matérielle, ou le partage de la clé entre plusieurs personnes de confiance dont aucune ne peut lire seule les données. Pour commencer, nous recommandons un second appareil et une clé notée sur papier. Nous vérifions chaque mécanisme par un essai de restauration des données.

Pour en savoir plus : [livre blanc de Suveria, point 2.2](../whitepaper-suveria.md#s2-2).

## Ce qui ne se voit pas, mais révèle : le rythme de transmission

La réponse vous parvient par paquets, c’est-à-dire par portions de données. Le chiffrement masque leur contenu, mais pas leur longueur ni leur rythme. C’est un canal auxiliaire : l’information fuit par le mode de transmission, et non par le contenu. Des recherches de 2024–2025 ont montré qu’un observateur du réseau peut ainsi reconstituer le sujet et parfois le contenu de la conversation. C’est pourquoi, en mode confidentiel, nous voulons envoyer la réponse par portions de taille fixe et à un rythme constant ; cela allonge un peu le temps de réponse et nécessite davantage de bande passante.

Pour en savoir plus : [livre blanc de Suveria, chapitre 3](../whitepaper-suveria.md#s3).

## Des versions vérifiables

La confiance dans le logiciel ne doit pas dépendre d’une seule personne ni de la seule fondation. Chacun peut compiler l’application à partir du code publié et vérifier que le résultat est identique à la version installée. Au moins deux parties indépendantes extérieures à la fondation doivent reproduire la version et confirmer publiquement sa conformité ; tant que nous ne les avons pas trouvées, nous indiquons que la version n’est pas confirmée par des tiers.

Nous concevons la protection complète pour l’application installée. Dans un navigateur, le code qui vérifie le serveur est à chaque fois fourni par l’opérateur ; la version pour navigateur décrira donc clairement son niveau de protection inférieur.

Pour en savoir plus : [livre blanc de Suveria, chapitre 3](../whitepaper-suveria.md#s3).

## Plusieurs cartes graphiques

Le modèle que nous voulons exécuter ne tient pas sur une seule carte graphique ; les données circulent donc aussi entre les cartes. Il faut vérifier la protection des cartes elles-mêmes et des connexions entre elles ; l’appellation commerciale « secure » ne remplace pas cette vérification. Nous ne comparons l’offre d’un fournisseur qu’après un essai avec notre propre application.

Pour en savoir plus : [livre blanc de Suveria, chapitre 5](../whitepaper-suveria.md#s5).

## Comment nous vérifierons que cela fonctionne

L’essai le plus important : une équipe disposant des prérogatives de l’opérateur à l’extérieur de l’environnement confidentiel (passerelle, disques, réseau, journaux) tente de lire les conversations de comptes de test dans lesquelles des chaînes de caractères secrètes ont été cachées. Si quiconque les extrait, y compris nous, l’essai a échoué.

Avant de qualifier une version de confidentielle, nous documenterons notamment une attestation correcte, le refus d’envoyer des données après substitution du code ou de la clé, l’absence de contenu dans les journaux, ainsi que la suppression et la récupération. Les résultats, y compris les échecs, sont consignés dans le journal des résultats. État au 29 octobre 2026 : nous n’avons encore réalisé aucun des essais décrits.

Nous voulons mener les essais ouvertement. Si vous travaillez dans la sécurité, la cryptographie, l’infrastructure ou les applications, ou si vous souhaitez porter un regard critique sur le projet, écrivez à salve@novusignis.org avec l’objet « [Rejoindre] Essais de Suveria ».

Pour en savoir plus : [livre blanc de Suveria, chapitre 9](../whitepaper-suveria.md#s9).

## Lisez et dites-nous ce que vous en pensez

Vous trouverez l’ensemble des variantes et des menaces, les dispositifs de sécurité de l’application et la liste des questions à trancher dans le [livre blanc de Suveria](../whitepaper-suveria.md). Si quelque chose vous intrigue ou vous paraît erroné, sélectionnez le passage dans le document et utilisez le bouton « J’ai une remarque », ou écrivez à salve@novusignis.org.