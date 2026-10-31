---
tytul: Combien coûte Suveria
opis: Ce qu’il est prévu de payer dans Suveria, ce que donne un calcul daté et pourquoi il s’agit d’une estimation, pas d’un tarif
grupa: suveria
kolejnosc: 3
menu: Combien cela coûte
---
# Combien coûte Suveria

Cette page concerne votre argent : ce qu’il est prévu de payer dans Suveria, comment se compose la facture et ce que donnent nos calculs. Suveria est aujourd’hui un projet. Le service n’existe pas encore, il n’y a donc pas non plus de prix. Les chiffres ci-dessous proviennent d’un calcul daté du 29 octobre 2026 (sauf la ligne « Total », dont nous avons fait la somme nous-mêmes). C’est un calcul sur le papier, pas un tarif.

Pour en savoir plus : [livre blanc de Suveria, chapitre 8](../whitepaper-suveria.md#s8).

## Ce que vous payez

Le principe est simple : vous payez ce que vous utilisez réellement, avec une part honnêtement calculée des coûts communs (ceux qui ne peuvent être attribués à une seule personne, par exemple la sécurité ou la comptabilité), vous voyez ce que vous payez et vous fixez la limite de vos dépenses. Le tarif couvre les coûts et rien de plus. Tout montant au-delà est un don volontaire, présenté séparément.

La facture comporte deux parties :

- **l’usage réel** pendant le cycle concerné : calcul, mémoire, transfert de données ;
- **une part des coûts fixes attribuée de manière transparente**, qui maintiennent l’infrastructure prête à fonctionner : sécurité, paiements, comptabilité, assistance, usure et remplacement du matériel.

Nous voulons répartir les coûts communs selon une règle publique choisie pendant la phase pilote : proportionnellement à l’usage ou à parts égales entre les comptes actifs. Le coût estimé d’une tâche doit toujours être consultable, et nous annoncerons votre part des coûts communs avant le cycle de facturation ; elle reste toujours dans votre limite. Nous annoncerons chaque changement de prix avec sa raison et son effet sur les utilisateurs.

Pour en savoir plus : [livre blanc sur les principes de la fondation, chapitre 3](../whitepaper-zasady-fundacji.md#s3) et [point 3.1](../whitepaper-zasady-fundacji.md#s3-1) ; [manifeste, point 6.1](../manifest.md#s6-1).

## Ce que donne le calcul

Pour les calculs, nous avons retenu un utilisateur type : 20 questions par jour, chaque réponse d’environ 600 tokens (un token est un morceau de texte, à peu près un mot court), chaque jour pendant 30 jours. C’est un modèle de charge à tester, pas une prévision. Les prix proviennent de tarifs publics, hors taxes.

La première version utilisera très probablement une API confidentielle (si nous réunissons assez de fonds, elle pourra fonctionner dès le départ sur nos propres serveurs loués) : le modèle d’intelligence numérique fonctionne chez un fournisseur externe qui déclare ne pas lire le contenu des conversations, et nous vérifierons cette déclaration. À cela s’ajoute un environnement privé : une ou deux machines confidentielles avec la passerelle, la mémoire et les fichiers des utilisateurs. Ce coût est fixe et pèse donc le plus pour un petit groupe.

| Par personne et par mois, si Suveria était utilisée par (calcul du 29.10.2026) | 30 personnes | 100 personnes | 1 000 personnes |
| --- | --- | --- | --- |
| Calcul seul dans une API confidentielle | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Coût fixe de l’environnement privé (170–340 USD par mois) | env. 6–11 USD | env. 1,70–3,40 USD | quelques dizaines de cents |

C’est une estimation sur le papier : elle ne comprend ni le travail humain, ni les revues de sécurité, ni les paiements, ni une réserve pour les pannes, et nous vérifierons pendant la phase pilote si cette capacité des machines suffit. Nous voulons présenter le coût fixe séparément et le couvrir avec le budget de soutien à la phase pilote, par exemple avec des dons affectés à Suveria. Nous ne présupposons pas que nous disposons déjà de ces fonds.

Pour en savoir plus : [livre blanc de Suveria, chapitre 7](../whitepaper-suveria.md#s7) et [point 8.1](../whitepaper-suveria.md#s8-1) ; [livre blanc sur les principes de la fondation, point 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## De 30 personnes à toute l’humanité

Le même utilisateur type permet de calculer la quantité de travail du modèle pour différents nombres de personnes. Dans le tableau, le « pic » est l’heure la plus chargée de la journée lorsque Suveria est utilisée par des personnes de différents fuseaux horaires (env. 1,51 × la moyenne).

| Personnes actives | Questions par mois | Texte des réponses au pic |
| --- | ---: | ---: |
| 30 | 18 000 | 6,3 tokens par seconde |
| 100 | 60 000 | 20,9 tokens par seconde |
| 1 000 | 600 000 | 209 tokens par seconde |
| 100 000 | 60 millions | 20 921 tokens par seconde |
| 1 million | 600 millions | 209 208 tokens par seconde |
| 1 milliard | 600 milliards | 209,2 millions de tokens par seconde |
| 10 milliards | 6 000 milliards | 2,09 milliards de tokens par seconde |

Quelle quantité de matériel cela représente-t-il ? Le livre blanc propose une expérience de pensée. Si chacune des 10 milliards de personnes utilisait Suveria de cette façon, il faudrait, avec la performance mesurée pour le modèle DeepSeek-V4.1-Flash, environ 2,25 millions de cartes B200 et environ 4 GW de puissance. Pour un milliard de personnes, cela fait environ 225 000 cartes et 0,4 GW, et pour un million, environ 225 cartes. À titre de comparaison, Epoch AI estimait au début de 2026 que plus de 15 millions d’équivalents de cartes H100 fonctionnaient pour l’intelligence numérique dans le monde et nécessitaient plus de 10 GW de puissance. C’est une simplification : l’utilisateur type est économe, tandis que le travail intensif, les modèles plus grands et les images exigent plusieurs fois plus.

Nous ne donnons pas de coût par personne pour des millions de personnes : à cette échelle, le matériel, les prix et le mode d’entretien du service changeraient ; un tel chiffre serait donc une conjecture. Le calcul du 29.10.2026 dit seulement que, selon nos présupposés, notre propre infrastructure peut devenir moins chère qu’une API confidentielle lorsque le nombre de personnes actives se situe entre une bonne dizaine de milliers et plusieurs dizaines de milliers.

Pour en savoir plus : [livre blanc de Suveria, chapitre 7](../whitepaper-suveria.md#s7).

## Pourquoi nous calculons en dollars

Nous indiquerons les prix des services en dollars, car la puissance de calcul s’achète dans cette monnaie. Nous voulons aussi accepter des versements dans d’autres monnaies, au taux de change indiqué sur la facture. Nous tenons les comptes de la fondation en zlotys.

Pour en savoir plus : [livre blanc sur les principes de la fondation, point 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Prépaiement, remboursement, arrondi

- **Prépaiement.** Vous saisissez un montant unique, et c’est exactement ce montant qui arrive sur votre solde, quel que soit le moyen de paiement. Les prépaiements doivent être conservés sur un compte bancaire séparé ; nous ne les utilisons pas pour couvrir les coûts de la fondation avant la prestation du service.
- **Limite.** Lors du versement, vous fixez le montant maximal que vous souhaitez dépenser. La limite doit fonctionner comme une borne, et non comme un avertissement après coup. C’est une exigence à construire et à vérifier, pas une fonction opérationnelle.
- **Remboursement.** Le solde non utilisé doit pouvoir être récupéré à tout moment, à terme en cliquant sur un seul bouton ; le délai de remboursement, ses éventuels coûts, le versement minimal et les autres détails seront fixés par le règlement. Après la fermeture du compte ou du service, le solde est automatiquement restitué par le même moyen. Un solde non réclamé ne vient pas alimenter le budget de la fondation.
- **Arrondi.** Lors de la création du compte, nous demandons si vous souhaitez arrondir chaque facture au dollar entier supérieur ou à un équivalent proche dans la monnaie locale ; la différence rejoint le budget commun sous forme de don. Nous demandons au lieu de cocher la case à votre place, et vous pouvez changer de décision à tout moment avec un seul réglage.

La facture présente séparément le tarif du service et le montant du don. Le délai de remboursement, le versement minimal et les autres détails seront fixés par le règlement, préparé avant l’acceptation du premier prépaiement.

Pour en savoir plus : [livre blanc sur les principes de la fondation, point 3.2](../whitepaper-zasady-fundacji.md#s3-2) et [point 3.3](../whitepaper-zasady-fundacji.md#s3-3) ; [livre blanc de Suveria, point 8.3](../whitepaper-suveria.md#s8-3).

## Comparaison avec les abonnements

Le prix d’un abonnement sur les plateformes commerciales regroupe généralement le coût d’utilisation, l’entretien des comptes gratuits, le marketing, la direction et les bénéfices des investisseurs en un montant unique, sans que l’utilisateur voie la part de ces composantes. Le manifeste avance l’hypothèse que, sans ce supplément caché et dès un nombre relativement faible de participants réguliers, une infrastructure commune peut fournir davantage de puissance de calcul et d’intelligence numérique par dollar dépensé que les services fermés, avec une protection de la vie privée fondée sur des dispositifs vérifiables.

État de l’hypothèse au 29 octobre 2026 : le calcul nous en rapproche, mais ne la confirme pas. Le traitement avec une confidentialité déclarée est déjà disponible dans des tarifs publics ; un petit groupe peut donc commencer ainsi à prix coûtant, et selon nos présupposés, notre propre infrastructure peut devenir moins chère lorsque le nombre de personnes actives se situe entre une bonne dizaine de milliers et plusieurs dizaines de milliers. Nous ne concurrençons pas sur le prix les offres à 100–200 USD qui, pour un travail intensif avec des agents, donnent l’équivalent de milliers de dollars aux tarifs publics des API. Nous proposons la facturation de l’usage réel avec une protection vérifiable de la vie privée.

Pour en savoir plus : [manifeste, point 2.4](../manifest.md#s2-4) ; [livre blanc de Suveria, point 8.1](../whitepaper-suveria.md#s8-1).

## Ce qui changera le calcul

Nous mettons le calcul à jour à chaque changement important des prix et après chaque essai, et nous conservons les versions précédentes. Trois points, que nous vérifierons lors des essais, seront décisifs :

- la réussite de la vérification indépendante de la confidentialité de ces services ;
- la qualité suffisante des modèles disponibles pour les tâches qui amèneront les personnes à Suveria ;
- le profil réel du trafic.

Nous voulons développer l’infrastructure par étapes : d’abord une API confidentielle et un environnement privé sur des machines confidentielles, puis la location de nos propres machines confidentielles, ensuite l’achat de matériel installé dans un centre de données externe et, à long terme, si cela présente un avantage, notre propre bâtiment. Chaque étape est justifiée par des données mesurées et une fiche de décision avec le coût complet, les risques et les conditions de retrait. Aujourd’hui, l’achat d’un serveur n’entre dans nos calculs qu’à titre d’estimation, pas d’offre.

Pour en savoir plus : [livre blanc de Suveria, point 8.1](../whitepaper-suveria.md#s8-1) et [point 8.2](../whitepaper-suveria.md#s8-2).

## Lisez et dites-nous ce que vous en pensez

Vous trouverez le calcul complet, avec le tableau des variantes et les sources des prix, dans le [livre blanc de Suveria](../whitepaper-suveria.md#s8), et les règles de facturation, de prépaiement et de remboursement dans le [livre blanc sur les principes de la fondation](../whitepaper-zasady-fundacji.md#s3). Si quelque chose vous paraît incohérent dans les chiffres ou les présupposés, sélectionnez ce passage dans le document et utilisez le bouton « J’ai une remarque », ou écrivez à salve@novusignis.org.