"use strict";

/* ---------- GLOBAL STATE ---------- */
let state = "menu";

/* ---------- IMAGES (optional) ---------- */
let bgImage;
let spiderBg;

function preload() {
    // Only load if you need images
    // bgImage = loadImage("detective.jpeg");
    // spiderBg = loadImage("wall.jpg");
}

/* ---------- SETUP ---------- */
function setup() {
    createCanvas(640, 480);
    textAlign(CENTER, CENTER);
    textSize(24);
}

/* ---------- MAIN DRAW ---------- */
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
    else if (state === "gameover") {
        gameOverScreen();
    }
}

/* ---------- MENU SCREEN ---------- */
function drawMenu() {
    background(0);

    noStroke();
    fill(255, 215, 120);
    textSize(40);
    text("GAME MENU", width / 2, 80);

    // Button 1 – Detective Frog
    if (mouseX > 170 && mouseX < 470 && mouseY > 150 && mouseY < 220)
        fill(0,255,0);
    else
        fill(90,60,40);

    rect(170,150,300,70,10);

    fill(255,220,180);
    textSize(32);
    text("Detective Frog", 320,185);

    // Button 2 – Spider Frog
    if (mouseX > 170 && mouseX < 470 && mouseY > 250 && mouseY < 320)
        fill(0,255,0);
    else
        fill(180,20,30);

    rect(170,250,300,70,10);

    fill(255);
    textSize(32);
    text("Spider Frog", 320,285);
}

/* ---------- MOUSE HANDLING ---------- */
function mousePressed() {

    if (state === "menu") {
        if (mouseX > 170 && mouseX < 470 && mouseY > 150 && mouseY < 220) {
            resetVariation1();
            state = "variation1";
            return;
        }

        if (mouseX > 170 && mouseX < 470 && mouseY > 250 && mouseY < 320) {
            resetVariation2();
            state = "variation2";
            return;
        }
    }


    

    // 3. If inside variation1 or variation2
    if (state === "variation1") variation1MousePressed();
    if (state === "variation2") variation2MousePressed();
}

