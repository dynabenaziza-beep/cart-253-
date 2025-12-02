function variation2Draw() {
    background("pink");

    fill(0);
    textSize(32);
    text("VARIATION 2 IS WORKING!", width/2, height/2);

    // draw frog
    fill(0,255,0);
    ellipse(width/2, height/2 - 100, 80);
}

function variation2MousePressed() {
    if (state === "variation2") {
        state = "menu";  // click anywhere to go back
    }
}

function resetVariation2() {
    // nothing needed, just switch state
    state = "variation2";
}

