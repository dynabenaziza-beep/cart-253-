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
    size: 220,

},
tongue: {
  x: 320,
  y: 520, 
  size: 20, 
  length:100 
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
  moveFrog();


}

function drawFrog() {

    //Frog body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
    

    //frog ears
     push();
  fill("#00ff00");
  noStroke();
  ellipse(frog.body.x - 60,frog.body.y- 100,80,75); //left frog ear 
  ellipse(frog.body.x + 70,frog.body.y-100,80,75); //rigth frog ear  
pop();

//
push();
stroke("#ff0000");
strokeWeight(frog.tongue.size);
line(
  frog.body.x, frog.body.y, frog.tongue.x, frog.body.y - frog.tongue.length );
pop();
}
function moveFrog(){
    frog.body.x =mouseX;
}
