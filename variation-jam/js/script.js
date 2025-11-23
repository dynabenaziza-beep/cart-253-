/**
 * Variation jam */

"use strict";
/* say which screen we are on */

let state ="menu"

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER,CENTER);
    textSize(24);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    if(state =="menu"){
        drawMenu();
    }
else if(state=="variation1"){
    variation1Draw();
}
else if (state =="variation2"){
    variation2Draw();
    }
        
    else if (state == "variation3"){
        variation3Draw();
    }
}


function drawMenu(){
    background(230); //light grey 
   
    //button 1 
    fill(255);  //white rectangle 
    stroke(0);   // black outline 
    rect(150,100,200,60); //(x,y, width, height)
    fill(0);  //black  text 
    noStroke();
    text("variation 1",250,130);

    //button 2 
    fill(255);
    stroke(0);
    rect(150,200,200,60); // x,y,width,heigth
    fill(0);
    noStroke();
    text("variation 2", 250,230);
    //button 3
    fill(255);
    stroke(0);
    rect(150,300,200,60);
    fill(0);
    noStroke();
    text("variaton 3", 250,330);
}

function mousePressed(){
    if(state =="menu"){
    //button 1 area 
   if(
    mouseX> 150 && mouseX< 350 && //button widtd
    mouseY> 100 && mouseY< 160) { //button height 
  state="variation1";        //go to variation1 
 }
 //button 2
else if(mouseX> 150 && mouseX <350 &&
    mouseY > 200 && mouseY < 260 ) {
        state= "variation2";
    }
//button 3 
else if (mouseX > 150 && mouseX < 350 &&
         mouseY > 300 && mouseY < 360) {
        state = "variation3";
    }
   }
  }
