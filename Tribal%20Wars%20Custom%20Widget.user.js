// ==UserScript==
// @name         Tribal Wars Custom Widget
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Adds a custom widget with buttons to trigger various UI functions on Tribal Wars.
// @author       sharmanhall
// @match        https://*.tribalwars.us/game.php?village=*&screen=overview
// @match        https://*.tribalwars.net/game.php?village=*&screen=overview
// @license      MIT
// @icon         https://github.com/tyhallcsu/Tribal-Wars-Scripts-SDK/raw/main/tribal-wars-icon.svg
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/497345/Tribal%20Wars%20Custom%20Widget.user.js
// @updateURL https://update.greasyfork.org/scripts/497345/Tribal%20Wars%20Custom%20Widget.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Add the custom widget to the village overview
    $("#leftcolumn").append(`
    <div id="show_custom_widget" class="vis moveable widget ">
        <h4 class="head with-button ui-sortable-handle">
            <img class="widget-button" onclick="return VillageOverview.toggleWidget( 'show_custom_widget', this );"
                src="graphic/minus.png"> Custom widget
        </h4>
        <div class="widget_content" style="display: block;">
            <table width="100%">
                <tbody>
                    <tr id="custom_widget_content">
                        <td>
                            <button class="btn" id="confirm_box">Confirm Box</button><br>
                            <button class="btn" id="banner_message">Banner Message</button><br>
                            <button class="btn" id="error_message">Error Message</button><br>
                            <button class="btn" id="info_message">Info Message</button><br>
                            <button class="btn" id="complex_dialog">Complex Dialog</button><br>
                            <button class="btn" id="omg_message">OMG Message</button><br>
                            <button class="btn" id="notification">Notification</button><br>
                            <button class="btn" id="show_dialog">Show Dialog</button><br>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`);

    // Add event listeners to the buttons
    document.getElementById("confirm_box").addEventListener("click", function() {
        UI.addConfirmBox("<p>Are you sure?</p>", function() { alert("Confirmed!"); });
    });

    document.getElementById("banner_message").addEventListener("click", function() {
        UI.BanneredRewardMessage("This is a banner message", 3000);
    });

    document.getElementById("error_message").addEventListener("click", function() {
        UI.ErrorMessage("This is an error message", 3000);
    });

    document.getElementById("info_message").addEventListener("click", function() {
        UI.InfoMessage("This is an info message", 3000, null, null);
    });

    document.getElementById("complex_dialog").addEventListener("click", function() {
        UI.AjaxPopup(null, "dialog_id", "<p>Complex dialog content</p>", "Dialog Title", null, { dataType: "prerendered" }, 300, "auto", 100, 100);
    });

    document.getElementById("omg_message").addEventListener("click", function() {
        UI.OmgMessage($(".visual-anim.anim-building-stone-prod"), "OMG Message", "customClassName");
    });

    document.getElementById("notification").addEventListener("click", function() {
        UI.Notification.SHOW_TIME = 1000;
        UI.Notification.show("graphic/building_farm.png", "Notification Title", "Notification Description", function() {
            TribalWars.redirect("info_player", { mode: "awards" });
        });
    });

    document.getElementById("show_dialog").addEventListener("click", function() {
        Dialog.show('MyDialogId', '<p>This is a dialog</p>', function() {
            alert('Dialog closed!');
        });
    });

})();
