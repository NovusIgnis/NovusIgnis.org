---
tytul: Statistiques du site
opis: Le nombre de lectures de notre site et de nos documents, calculé sous forme agrégée à partir des journaux du serveur, sans scripts d’analyse ni cookies
grupa: skroty
kolejnosc: 11
menu: Statistiques du site
---
# Statistiques du site

Nous voulons savoir comment évolue l’intérêt pour la fondation et quels textes sont le plus souvent lus, et le montrer ouvertement. Nous le calculons de la manière la plus simple : à partir des journaux du serveur, qui enregistre de toute façon chaque téléchargement de page. Le site ne contient ni scripts d’analyse, ni cookies, ni rien qui vous reconnaîtrait lors d’une prochaine visite.

**État au 31 octobre 2026.** Le site passe à une offre d’hébergement donnant accès aux journaux du serveur. Nous commençons à compter les statistiques à partir de novembre 2026 ; les règles ci-dessous s’appliquent dès le premier mois comptabilisé.

## Ce que nous comptons

- **Les consultations des pages :** le nombre de téléchargements de chaque page et de chaque document, séparément en polonais et en anglais.
- **Les téléchargements de fichiers :** par exemple `llms-full.txt`, qui réunit le manifeste et les livres blancs dans un seul fichier.
- **Les visites des robots**, réparties en quatre groupes : moteurs de recherche ; robots des entreprises qui construisent des modèles d’intelligence numérique ; modèles qui lisent le site à la demande d’une personne, par exemple lorsqu’elle demande à son outil de conversation de lire le manifeste ; autres robots.
- **Les fichiers pour les modèles :** le nombre de téléchargements de `llms.txt` et de `llms-full.txt` par les robots des modèles.

## Ce que nous n’enregistrons pas

- Les adresses IP, les descriptions complètes des navigateurs ou tout autre élément permettant de reconnaître une personne.
- L’historique des visites d’une personne : nous ne regroupons pas les consultations en visites ni en profils.
- Les données provenant d’autres sites et services.

Nous ne savons donc pas combien de personnes nous ont rendu visite, mais seulement combien de fois les pages ont été téléchargées. Une personne peut ouvrir une page plusieurs fois, et certains robots se font passer pour des navigateurs ordinaires ; les chiffres sont donc approximatifs.

## Comment nous comptons

Chaque semaine, nous téléchargeons le journal du serveur depuis le panneau de gestion d’Infomaniak, qui héberge le site, car les journaux n’y sont conservés que quelques jours. À la fin du mois, le script `tools/statystyki.mjs` n’en calcule que les totaux énumérés ci-dessus et les enregistre sans adresses IP ni descriptions des navigateurs. Nous conservons les copies téléchargées des journaux au plus tard jusqu’à la fin du mois et les supprimons immédiatement après le calcul. La page [Vos données](twoje-dane.md) décrit les règles de traitement des données.

## Résultats

{{statystyki}}