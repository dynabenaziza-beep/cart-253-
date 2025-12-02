let stoneA = { x: 150, y: 150, w: 45, h: 30, color: "red" };
let stoneB = { x: 320, y: 200, w: 45, h: 30, color: "yellow" };
let stoneC = { x: 490, y: 150, w: 45, h: 30, color: "green" };

let flyA = { x: 150, y: 120, size: 25, dx: 2 };
let flyB = { x: 320, y: 170, size: 25, dx: 2 };
let flyC = { x: 490, y: 170, size: 25, dx: 2 };
let flyD = { x: 250, y: 100, size: 25, dy: 2 };
let flyE = { x: 320, y: 300, size: 25, dx: 3 };



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
    fill(0,60,255); //blue 
    ellipse(frog2.x, frog2.y, frog2.size);

// draw stones
fill(stoneA.color);
ellipse(stoneA.x, stoneA.y, stoneA.w, stoneA.h);

fill(stoneB.color);
ellipse(stoneB.x, stoneB.y, stoneB.w, stoneB.h);

fill(stoneC.color);
ellipse(stoneC.x, stoneC.y, stoneC.w, stoneC.h); 


// draw flies
fill(0);
ellipse(flyA.x, flyA.y, flyA.size);

// MOVE FLY A ,B,C LEFT RIFTH 
flyA.x += flyA.dx;
flyB.x += flyB.dx;
flyC.x += flyC.dx;

//moove fly D, E , F 
flyD.y += flyD.dy;
flyE.x += flyE.dx;


// BOUNCE FLY A AROUND STONE A
if (flyA.x > stoneA.x + 60 || flyA.x < stoneA.x - 60) {
    flyA.dx *= -1;
}
//bounce fly b around stone b 
if (flyB.x > stoneB.x + 60 || flyB.x < stoneB.x - 60) {
    flyB.dx *= -1;
}
//bounce fly c around stone c 
if (flyC.x > stoneC.x + 60 || flyC.x < stoneC.x - 60) {
    flyC.dx *= -1;
}

//BOUNCE FLY  D TOP AND BOTTOM 
if (flyD.y > 200 || flyD.y < 80) {
    flyD.dy *= -1;
}

//boun fly E LEFT AND RIGTH 
if (flyE.x > 560 || flyE.x < 80) {
    flyE.dx *= -1;
}

// draw flies a
fill(0);
ellipse(flyA.x, flyA.y, flyA.size);
//draw flies b
fill(0);
ellipse(flyB.x, flyB.y, flyB.size);
//draw flie c 
fill(0);
ellipse(flyC.x, flyC.y, flyC.size);
//draw flie d 
fill(0);
ellipse(flyD.x, flyD.y, flyD.size);
//DRAW flie e 
fill(0);
ellipse(flyE.x, flyE.y, flyE.size);

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

