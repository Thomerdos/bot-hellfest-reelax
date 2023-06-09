// ==UserScript==
// @name          bot-hellfest-test
// @namespace     thomos
// @version       0.1
// @description   Achat automatique sur reelax ticket
// @include       https://reelax-tickets.com/e/n/v-and-b-fest-2023/achat
// @require      https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.min.js#sha256-/Q4ZPy6sMbk627wHxuaWSIXS1y7D2KnMhsm/+od7ptE=
// ==/UserScript==
(async function() {
    'use strict';

    const readySound = new window.Howl({
        src: ['//freesound.org/data/previews/187/187404_635158-lq.mp3'],
        autoplay: false,
        loop: true,
        volume: 1.0,
    });

    // Scan the page for the provided selector and "click" them if present.
    async function triggerClicks() {
        console.log("start");
        let anyClicked = false;
        await sleep(2500)
        const buttons = document.getElementsByClassName("category-button__content__category-name");
        console.log(buttons)

        if(!buttons) {
            console.log("Pas de billets disponible");
            return false
        }

        const button = buttons[0]
        if(buttons.length === 0 && !button.textContent.includes("Pass Vendredi")) {
            console.log("Pas de pass 4 jours");
            return false
        }
        console.log(button)

        // // No available "Add to Cart" buttons. Cool down and refresh.
        // if (!buttons.length) {
        //     console.log("Pas de billets disponibles");
        //     return anyClicked;
        // }

        await buttons[0].click()
        console.log("Premier lien cliqué.");

        await sleep(500)

        const buyBtn = await document.getElementsByClassName('mat-focus-indicator table__card__button-div__button --buy mat-button mat-button-base ng-star-inserted')

        if (buyBtn.length === 0  || !buyBtn[0].textContent.includes("Acheter")) {
            console.log("Bouton acheter introuvable");
            return false
        }

        await buyBtn[0].click()
        console.log("Bouton acheté cliquer.");

        await sleep(500)

         const nextBtn = await document.getElementsByClassName('mat-focus-indicator button --custom-event --large mat-button mat-button-base')

        if (nextBtn.length === 0 || !nextBtn[0].textContent.includes("Suivant")) {
            console.log("Bouton acheter introuvable");
            return false
        }

        await nextBtn[0].click()
        console.log("Ajouté au panier.");


        anyClicked = true;


        return anyClicked;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function refresh() {
        console.log("Rechargement.");
        window.setTimeout(() => {
            window.location.reload(true);
        }, 50);
    }

    if (await triggerClicks()) {
        readySound.play();
    } else {
        console.log('refresh')
      refresh();
    }


})();
