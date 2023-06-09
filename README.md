# Achat automatique pass 4 jours sur Reelax

Un script utilisant le plugin chrome tampermonkey permettant d'actualiser tout seul la page et d'appuyer sur le bouton acheter

## Installation

* Installer le plugin suivant sur chrome : https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr
* Dans le tableau de bord de l'extension, appuyer sur le "+" pour ajouter un nouveau script
* Remplacer tout le contenu du script par défaut par le contenu du fichier suivant : https://github.com/Thomerdos/bot-hellfest-reelax/blob/main/script.js
* Sauver le script (ctrl + S)
* Se rendre sur la page suivante : https://reelax-tickets.com/e/n/v-and-b-fest-2023/achat
* Cliquer quelque part sur la page (important sinon la notification sonore ne fonctionne pas)
* Si tout va bien la page devrait se comporter de cette manière :
  * Rafraichissement automatique
  * Attente de 2.5 secondes que la page se charge
  * Clic auto sur "pass 4 jours"
  * Clic auto sur bouton acheter sinon rafraichissement automatique
  * Clic auto sur le bouton suivant pour ajouter au panier
  * Notification sonore pour informer que l'ajout a été fait

**Important : il faut bien rester sur la page pour que l'actualisation se fasse bien**

## Personnalisation

Par défaut le script va chercher les pass 4 jours et appuyer sur le bouton acheter du premier lien en dessous.

Il est possible de changer le pass demandé en changeant dans le script la ligne suivante en mettant le texte correspondant à là où on souhaite cliquer :

````
if(buttons.length === 0 || !button?.textContent?.includes("Pass 4 jours du 15 au 18 juin 2023 ")) {
````

Si la page est trop lente à charger et que le clic automatique pour dérouler les billets ne marche pas il est peut être nécessaire de mettre plus de temps d'attente :

Ligne 23 du script :

````
await sleep(2500)
````

Ajuster la valeur d'attente qui est en ms.
