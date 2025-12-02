let stoneA = { x: 150, y: 150, w: 45, h: 30, color: "red" };
let stoneB = { x: 320, y: 200, w: 45, h: 30, color: "yellow" };
let stoneC = { x: 490, y: 150, w: 45, h: 30, color: "green" };


let flyA = { x: 150, y: 120, size: 25, dx: 2 };

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

    //draw frog
    fill(0,255,0);
    ellipse(frog2.x, frog2.y, frog2.size);

// draw stones
fill(stoneA.color);
ellipse(stoneA.x, stoneA.y, stoneA.w, stoneA.h);
fill(stoneB.color);
ellipse(stoneB.x, stoneB.y, stoneB.w, stoneB.h);

fill(stoneC.color);
ellipse(stoneC.x, stoneC.y, stoneC.w, stoneC.h);   

    // keep frog inside the canvas
    frog2.x = constrain(frog2.x, frog2.size/2, width - frog2.size/2);
    frog2.y = constrain(frog2.y, frog2.size/2, height - frog2.size/2);
}

function variation2MousePressed() {
    if (state === "variation2") {
        state = "menu";  // click anywhere to go back
    }
}

function resetVariation2() {
    state = "variation2";
}

