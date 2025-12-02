/**
 * Variation jam */

"use strict";
/* say which screen we are on */

let state ="menu";

/* GLOBAL IMAGES (loaded in preload) */
let bgImage;    // detective frog background
let spiderBg;   // spider frog background

function preload() {
  bgImage = loadImage("dt.jpg");
  spiderBg = loadImage("wall.jpeg");
}

function setup() {
    createCanvas(640, 480);
    textAlign(CENTER,CENTER);
    textSize(24);
}
function draw() {

  if (state === "menu") {
    drawMenu();
  }
  else if (state === "variation1") {
    variation1Draw();
  }
  else if (state === "variation2") {
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
    background(0);

    textAlign(CENTER, CENTER);
    noStroke();

    // Title
    fill(255,215,120);
    textSize(40);
    text("GAME MENU", width/2, 80);

    // ------------ BUTTON 1 ------------
    // Highlight if hovered
    if (mouseX > 170 && mouseX < 470 && mouseY > 150 && mouseY < 220) {
        fill(0,255,0); // green when hovered
    } else {
        fill(90,60,40);
    }

    rect(170,150,300,70,10);  
    fill(255,220,180);
    textSize(32);
    text("Detective Frog", 320, 185);

    // ------------ BUTTON 2 ------------
    if (mouseX > 170 && mouseX < 470 && mouseY > 250 && mouseY < 320) {
        fill(0,255,0); // green when hovered
    } else {
        fill(180,20,30);
    }

    rect(170,250,300,70,10);
    fill(255);
    textSize(32);
    text("Spider Frog", 320, 285);
}



function mousePressed() {

    // (0) CLICK ON WIN/LOSE OF VARIATION2 → return to menu
    if (state === "variation2_win" || state === "variation2_lose") {
        state = "menu";
        return;
    }
if(state =="menu"){
    //button 1 area 
    if(mouseX>170 && mouseX<470 && mouseY>150 && mouseY<220){
        resetVariation1();   // ADD THIS
        state="variation1";
        return;
    }
   // ----- BUTTON 2: SPIDER FROG -----
        if (mouseX > 170 && mouseX < 470 &&
            mouseY > 250 && mouseY < 320) {
                
            resetVariation2();
            state = "variation2";
            return;
        }
    }

    // Variation 1 click handler
    if (state === "variation1") {
        variation1MousePressed();
    }

    // Variation 2 click handler
    if (state === "variation2") {
        variation2MousePressed();
    }
}
