---
tytul: Qu’est-ce que Suveria
opis: Un espace privé de travail avec l’intelligence numérique conçu par la fondation : les possibilités visées, la protection prévue et son état actuel
grupa: suveria
kolejnosc: 1
menu: Qu’est-ce que Suveria
---
# Qu’est-ce que Suveria

Cette page explique brièvement ce que Suveria doit être, à qui elle s’adresse et où elle en est. Chaque partie contient un lien vers le livre blanc de Suveria, si vous souhaitez en savoir plus.

Suveria doit être un espace privé sur internet, où chacun converse avec l’intelligence numérique, travaille sur ses propres contenus et revient à ses réflexions antérieures, comme chez soi, porte fermée. La Fondation Novus Ignis la conçoit pour les personnes de toutes les régions du monde.

Suveria est aujourd’hui un projet. Elle est conçue pour que l’on puisse parler avec l’intelligence numérique de santé, de relations, de travail, d’argent et de projets de vie sans craindre qu’une connaissance aussi intime d’une personne soit un jour monétisée ou utilisée pour l’influencer. Nous destinons la première version aux personnes pour qui une protection vérifiable de la vie privée est une raison de choisir.

Pour en savoir plus : [livre blanc de Suveria, chapitre 1](../whitepaper-suveria.md#s1).

## Ce que nous voulons rendre possible

Dans Suveria, nous voulons que l’on puisse :

- parler de questions personnelles et professionnelles en voyant où la conversation est traitée et qui peut la voir ;
- travailler sur ses propres documents et fichiers, enregistrer les résultats et les transférer ailleurs dans des formats ouverts ;
- conserver les conversations, les fichiers et la mémoire de l’assistant principalement sur ses propres appareils, chiffrés avec une clé sous votre contrôle ;
- avec son propre consentement, utiliser la mémoire des conversations antérieures et constituer son Canon personnel, c’est-à-dire un recueil de ses propres principes et valeurs ;
- choisir son mode de travail, du modèle sur son propre appareil à l’environnement confidentiel sur un serveur, en sachant ce contre quoi chacun protège ;
- payer selon l’utilisation réelle, avec une limite de dépenses fixée soi-même ;
- mûrir une pensée en privé, puis l’apporter consciemment à la conversation commune dans Omniforum, l’espace public de conversation et de décision.

Dès le premier jour, on doit avoir le sentiment paisible d’être chez soi. Nous voulons aussi permettre de transférer ses propres notes et archives de conversations depuis d’autres services d’intelligence numérique. Utiliser Suveria ne vaut pas consentement à l’utilisation des conversations pour l’entraînement des modèles.

Pour en savoir plus : [livre blanc de Suveria, chapitre 1](../whitepaper-suveria.md#s1).

## Ce qu’elle protège et ce qui n’existe pas encore

La protection doit reposer sur des dispositifs de sécurité que l’on peut vérifier de manière indépendante, et non sur la confiance envers la fondation, y compris envers nous qui exploitons l’infrastructure. Aucune vérification de ce type n’a encore eu lieu.

Nous comparons plusieurs modes de travail, car chacun protège contre des risques différents :

- **Un modèle sur votre appareil.** La conversation ne quitte pas le téléphone ou l’ordinateur, sauf si l’assistant utilise des intégrations avec des services en ligne ; l’état de l’appareil, les autorisations de l’application et l’identité des personnes qui y ont un accès physique comptent.
- **Un environnement confidentiel sur des serveurs.** Le serveur possède une zone isolée au niveau matériel, que même son administrateur ne peut consulter ; c’est là que le modèle lit le contenu. Le matériel doit le confirmer par une signature numérique (c’est l’attestation : la confirmation du logiciel qui fonctionne sur la machine distante et du mode de protection utilisé). Cela exige de faire confiance au fabricant du processeur. C’est l’option visée à terme.
- **Une API confidentielle d’un fournisseur externe.** Une API est une liaison par laquelle notre application envoie la conversation à un modèle chez un autre fournisseur. La première version utilisera très probablement une API confidentielle ; si, avant son lancement, nous réunissons assez de fonds pour louer nos propres serveurs dans un environnement confidentiel, elle pourra fonctionner directement sur eux. Au départ, la confidentialité est ici une déclaration du fournisseur, que nous vérifierons ; tant que les essais n’ont pas donné de résultat positif, nous qualifions cette option de protection déclarée, et non de protection confidentielle.
- **Une API ordinaire du fournisseur du modèle.** Le fournisseur a accès au contenu ; ce n’est pas l’option par défaut de la Suveria privée.

L’informatique confidentielle ne répare pas un ordinateur infecté et ne protège pas contre toute personne ayant un accès physique au serveur. Aucune option ne reçoit l’étiquette « protection totale de la vie privée » avant la vérification de la configuration concrète. Chaque conversation doit montrer dans quelle option vous travaillez, et changer d’option exige votre décision éclairée.

Pour en savoir plus : [livre blanc de Suveria, chapitre 2](../whitepaper-suveria.md#s2) et [point 2.3](../whitepaper-suveria.md#s2-3). Voir aussi : [Vie privée et sécurité](suveria-prywatnosc.md).

## Modèles

Le projet repose sur des modèles ouverts que l’on peut faire fonctionner soi-même. Pour choisir un modèle, nous prenons notamment en compte la qualité dans plusieurs langues, la fiabilité, la licence, le coût et la possibilité de le faire fonctionner dans l’architecture de protection requise.

Nous annonçons à l’avance le changement ou le retrait d’un modèle, et votre historique de conversations reste chez vous : vous pouvez choisir un modèle successeur, exporter les données ou arrêter de travailler. Le moment du changement de modèle doit être visible dans la conversation.

Pour en savoir plus : [livre blanc de Suveria, chapitre 6](../whitepaper-suveria.md#s6).

## Combien cela coûte

Le manifeste avance l’hypothèse qu’une infrastructure commune peut fournir plus de puissance de calcul et d’intelligence numérique pour chaque dollar que des services fermés. Le livre blanc l’examine dans un calcul daté du 29 octobre 2026 : pour le profil d’utilisation retenu, une API confidentielle à confidentialité déclarée coûte environ 0,70–1,25 USD par personne et par mois pour les seuls calculs. À cela s’ajoute le coût fixe de l’environnement privé, qui pèse le plus lorsque les personnes sont peu nombreuses : avec 30 participants, environ 6–11 USD par personne et par mois.

C’est une estimation sur le papier, et non la grille tarifaire de Suveria : le calcul ne comprend ni le travail humain, ni les revues de sécurité, ni les paiements, ni une marge pour les pannes. État de l’hypothèse à cette date : le calcul nous en rapproche, mais ne la confirme pas.

Pour en savoir plus : [livre blanc de Suveria, chapitre 8](../whitepaper-suveria.md#s8). Voir aussi : [Combien cela coûte](suveria-koszty.md).

## État des travaux

Le livre blanc tient un journal des résultats. État au 29 octobre 2026 : nous n’avons encore réalisé aucun des essais décrits, loué aucune carte graphique ni fait fonctionner de modèle dans Suveria. Nous prévoyons la première mesure sur une seule carte confidentielle avec un modèle plus petit.

L’essai le plus important : une équipe disposant des autorisations de l’opérateur tente de lire les conversations de comptes de test dans lesquelles des chaînes secrètes de caractères ont été cachées. Si quelqu’un les extrait, y compris nous, l’essai a échoué.

Nous voulons mener les essais ouvertement. Si vous travaillez dans la sécurité, la cryptographie, l’infrastructure ou les applications, ou souhaitez examiner le projet d’un œil critique, écrivez à salve@novusignis.org avec pour objet « [Rejoindre] Essais de Suveria ».

Pour en savoir plus : [livre blanc de Suveria, chapitre 9](../whitepaper-suveria.md#s9) et [point 8.2](../whitepaper-suveria.md#s8-2).

## Pourquoi Suveria est une voie, et non un but

Le manifeste le dit explicitement :

> Suveria est aujourd’hui notre meilleure voie vers un travail privé avec l’intelligence numérique, et non une fin en soi. Si les modèles tiennent un jour sur les appareils des utilisateurs ou si un meilleur moyen de protection apparaît, une partie de cette voie deviendra inutile, et nous considérerons cela comme une bonne nouvelle.

Pour en savoir plus : [manifeste, point 3.1](../manifest.md#s3-1).

## Lisez et dites-nous ce que vous en pensez

Vous trouverez la description complète, avec un tableau des options de protection, un calcul des coûts et une liste de questions à trancher, dans le [livre blanc de Suveria](../whitepaper-suveria.md). Si quelque chose vous intrigue ou vous paraît erroné, sélectionnez ce passage dans le document et utilisez le bouton « J’ai une remarque », ou écrivez à salve@novusignis.org.