
let garfieldFrog;

function resetVariation3() {
    // later i'll reset all my variables here
}

function variation3Draw() {
   
    // warm background so I know I'm in this variation
    background(255, 210, 160);

    // draw the frog (still static)
    drawGarfieldFrog();

    
}
function variation3MousePressed() {
    // i'll use this later if i want to go back to menu or restart

}
function drawGarfieldFrog() {
 noStroke();
 fill(255, 140, 0); // garfield orange
    ellipse(garfieldFrog.x, garfieldFrog.y, garfieldFrog.size);

}
