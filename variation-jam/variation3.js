let flies = [];  // array of fly objects
let spawnRate = 120; // every 120 frames (~2 seconds)


let garfieldFrog;

function resetVariation3() {
    // put the frog in the center of the screen for now
    garfieldFrog = {
        x: width / 2,
        y: height / 2,
        size: 70 // kind of big, garfield style
    };
}


function variation3Draw() {
   
    // warm background so I know I'm in this variation
    background(255, 210, 160);

    // step 3: actually move the frog now
    moveGarfieldFrog();

    // draw the frog (still static)
    drawGarfieldFrog();
// title, just so I see the name on top
    drawGarfieldTitle();
}
    

function variation3MousePressed() {
    // i'll use this later if i want to go back to menu or restart

}
function drawGarfieldFrog() {
 noStroke();
 fill(255, 140, 0); // garfield orange
    ellipse(garfieldFrog.x, garfieldFrog.y, garfieldFrog.size);


    // little cat ears
    triangle(
        garfieldFrog.x - 20, garfieldFrog.y - 20,
        garfieldFrog.x - 5,  garfieldFrog.y - 40,
        garfieldFrog.x + 5,  garfieldFrog.y - 20
    );
 triangle(
        garfieldFrog.x + 20, garfieldFrog.y - 20,
        garfieldFrog.x + 5,  garfieldFrog.y - 40,
        garfieldFrog.x - 5,  garfieldFrog.y - 20
    );
// eyes
    fill(255);
    ellipse(garfieldFrog.x - 12, garfieldFrog.y - 5, 18, 18);
    ellipse(garfieldFrog.x + 12, garfieldFrog.y - 5, 18, 18);

    fill(0);
    ellipse(garfieldFrog.x - 12, garfieldFrog.y - 5, 6, 6);
    ellipse(garfieldFrog.x + 12, garfieldFrog.y - 5, 6, 6);

    // little smile
    stroke(0);
    noFill();
    arc(garfieldFrog.x, garfieldFrog.y + 10, 25, 18, 0, PI);
}
function drawGarfieldTitle() {
    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(30);
    text("Garfield Frog", width / 2, 20);


}
function moveGarfieldFrog() {
// go left
    if (keyIsDown(LEFT_ARROW)) {
        garfieldFrog.x -= 4;
    }

    // go right
    if (keyIsDown(RIGHT_ARROW)) {
        garfieldFrog.x += 4;
    }

    // go up
    if (keyIsDown(UP_ARROW)) {
        garfieldFrog.y -= 4;
    }

    // go down
    if (keyIsDown(DOWN_ARROW)) {
        garfieldFrog.y += 4;
    }

}
