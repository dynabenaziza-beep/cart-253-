/**
 * Variation jam */

"use strict";
/* say which screen we are on */

let state ="menu"

function setup() {
    createCanvas(500, 500);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "variation 1":
            variation1Draw();
            break
        case "variation 2":
            variation2Draw();
            break;
        case "variation 3":
            variation3Draw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "variation 1" :
            variation1dMousePressed();
            break
        case "variation 2":
            variation2MousePressed();
            break;
        case "variation 3":
            variation3MousePressed();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "varition 1":
            variation1KeyPressed(event);
            break
        case "variation 2":
            variation2KeyPressed(event);
            break;
        case "variation 3":
            variation3KeyPressed(event);
            break;
    }
}

