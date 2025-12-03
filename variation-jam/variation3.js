
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


    // little cat ears
    triangle(
        garfieldFrog.x - 20, garfieldFrog.y - 20,
        garfieldFrog.x - 5,  garfieldFrog.y - 40,
        garfieldFrog.x + 5,  garfieldFrog.y - 20
    );




}
