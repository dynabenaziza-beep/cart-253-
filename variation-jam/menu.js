/**
 * Variation jam */

"use strict";
/* say which screen we are on */

let state ="menu";

function setup() {
    createCanvas(640, 480);
    textAlign(CENTER,CENTER);
    textSize(24);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    background(0);

    if(state =="menu"){
        drawMenu();
    }
else if(state=="variation1"){
    variation1Draw();
}
else if (state =="variation2"){
    variation2Draw();
    }
    else if (state === "variation2_win") {
    variation2WinScreen();
}
else if (state === "variation2_lose") {
    variation2LoseScreen();
}
 }

function drawMenu(){
    background(0); //light grey 
   
    //  TITLE
    fill(255,215,120);  //title
    textSize(40);
    text("GAME MENU",width /2, 80);

//BUTTON 1 
fill(90,60,40); //medium brown button 
stroke(255,230,180); //ligth beige outline 
strokeWeight(3); //
rect(170,150,300,70,10); // rounded button 
//BUTTON 1 TEXT 
noStroke();
fill(255,220,180);
textSize(35);
text("Detective Frog", 200,200 );

//BUTTON 2 
fill(180,20,30); //medium brown button 
stroke(50,80,200); //ligth beige outline 
strokeWeight(3); //
rect(170,250,300,70,10); // rounded button 
//BUTTON 2 TEXT 
noStroke();
fill(255);
textSize(38);
text("Spider frog ", 200,300 );

}

function mousePressed(){
    if(state =="menu"){
    //button 1 area 
   if(
    mouseX> 170 && mouseX< 470 && //button widtd
    mouseY> 150 && mouseY< 220) { //button height 
  state="variation1";        //go to variation1 
 }
 //button 2
else if(mouseX> 170 && mouseX <470 &&
    mouseY > 250 && mouseY < 320 ) {
        state= "variation2";
    }
//button 3 
else if (mouseX > 150 && mouseX < 350 &&
         mouseY > 300 && mouseY < 360) {
        state = "variation3";
    }
   }
//Variation 1 click 
else if (state =="variation1"){
    variation1MousePressed();
}

else if (state =="variation2"){
    variation2MousePressed();
}
  }
