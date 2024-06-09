// ==UserScript==
// @name         Tribal Wars Enhanced Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Enhanced features for Tribal Wars using twSDK
// @author       sharmanhall
// @match        https://*.tribalwars.net/*
// @match        https://*.tribalwars.us/*
// @match        *://*.die-staemme.de/*
// @match        *://*.divoke-kmene.sk/*
// @match        *://*.divokekmeny.cz/*
// @match        *://*.fyletikesmaxes.gr/*
// @match        *://*.guerrastribales.es/*
// @match        *://*.guerretribale.fr/*
// @match        *://*.klanhaboru.hu/*
// @match        *://*.klanlar.org/*
// @match        *://*.plemena.com/*
// @match        *://*.plemiona.pl/*
// @match        *://*.staemme.ch/*
// @match        *://*.tribals.it/*
// @match        *://*.tribalwars.ae/*
// @match        *://*.tribalwars.asia/*
// @match        *://*.tribalwars.co.uk/*
// @match        *://*.tribalwars.com.br/*
// @match        *://*.tribalwars.com.pt/*
// @match        *://*.tribalwars.com/*
// @match        *://*.tribalwars.dk/*
// @match        *://*.tribalwars.net/*
// @match        *://*.tribalwars.nl/*
// @match        *://*.tribalwars.se/*
// @match        *://*.tribalwars.us/*
// @match        *://*.tribalwars.works/*
// @match        *://*.triburile.ro/*
// @match        *://*.vojnaplemen.si/*
// @match        *://*.voyna-plemyon.ru/*
// @grant        none
// @require      https://github.com/tyhallcsu/Tribal-Wars-Scripts-SDK/raw/main/twSDK.js
// @license      MIT
// @icon         https://github.com/tyhallcsu/Tribal-Wars-Scripts-SDK/raw/main/tribal-wars-icon.svg
// @downloadURL  https://github.com/tyhallcsu/Tribal-Wars-Scripts-SDK/raw/main/Tribal-Wars-Enhanced-Script.user.js
// @updateURL   https://github.com/tyhallcsu/Tribal-Wars-Scripts-SDK/raw/main/Tribal-Wars-Enhanced-Script.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Ensure twSDK is loaded
    if (typeof twSDK === 'undefined') {
        console.error('twSDK is not loaded');
        return;
    }

    // Configuration for the script
    const scriptConfig = {
        scriptData: {
            name: 'Tribal Wars Enhanced Script',
            version: '1.0',
            author: 'sharmanhall',
            authorUrl: 'https://example.com',
            helpLink: 'https://example.com/help'
        },
        translations: {
            en_US: {
                'Enhanced Script': 'Enhanced Script',
                'Help': 'Help',
                'Invalid game mode!': 'Invalid game mode!'
            }
        },
        allowedMarkets: ['en', 'us', 'uk'],
        allowedScreens: ['overview_villages', 'place'],
        allowedModes: ['prod'],
        isDebug: true,
        enableCountApi: true
    };

    // Initialize twSDK with the script configuration
    twSDK.init(scriptConfig);

    // Main function to execute the enhanced features
    function main() {
        const gameScreen = twSDK.getParameterByName('screen');
        const gameMode = twSDK.getParameterByName('mode');

        if (twSDK.allowedScreens.includes(gameScreen)) {
            if (twSDK.allowedModes.includes(gameMode)) {
                console.log('We are on a valid game screen and mode, init script!');
                // Insert your enhanced features here
            } else {
                UI.ErrorMessage(`${twSDK.tt('Invalid game mode!')}`);
            }
        } else {
            console.log('Show a notice or redirect to the correct place!');
        }
    }

    // Execute the main function
    main();
})();
