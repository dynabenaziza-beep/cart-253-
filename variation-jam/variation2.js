let frog2 = {
    x: 320,
    y: 240,
    size: 60,
    speed: 4
};


function variation2Draw() {
    background("pink");

    fill(0);
    textSize(32);
    text("VARIATION 2 IS WORKING!", width/2, height/2);

 // move frog with WASD
    if (keyIsDown(87)) frog2.y -= frog2.speed; // W
    if (keyIsDown(83)) frog2.y += frog2.speed; // S
    if (keyIsDown(65)) frog2.x -= frog2.speed; // A
    if (keyIsDown(68)) frog2.x += frog2.speed; // D

   
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

