/**
 * mod-jam
 * Title of Project
 * dyna benaziza 
 * 

 */

"use strict";
//FROG 

const frog ={
body:{
    x: 320,
    y: 520,
    size: 150 
}

};
/**
 * Creates the canvas and initializes the fly 
*/
function setup() {
 createCanvas(640,480);
}

function draw() {
    background("#87ceeb"); // creating the background ( bleu) for the game 
    drawFrog();

}

function drawFrog() {

    //Frog body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();

}
