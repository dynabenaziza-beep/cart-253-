// --- GAME STATE FLAGS FOR VARIATION 2 ---
let v2_started = false;          // has the game started?
let v2_showInstructions = false; // have we shown instructions?
let v2_gameOver = false;         // lose condition
let v2_win = false;              // win condition


// --- STONES ---

let stoneA = { x: 150, y: 150, w: 45, h: 30, color: "red", collected:false };
let stoneB = { x: 320, y: 200, w: 45, h: 30, color: "yellow", collected:false };
let stoneC = { x: 490, y: 150, w: 45, h: 30, color: "green", collected:false };

// --- FLIES ---
let flyA = { x: 150, y: 120, size: 25, dx: 2 };
let flyB = { x: 320, y: 170, size: 25, dx: 2 };
let flyC = { x: 490, y: 170, size: 25, dx: 2 };
let flyD = { x: 250, y: 100, size: 25, dy: 2 };
let flyE = { x: 320, y: 300, size: 25, dx: 3 };

// --- FROG ---
let frog2 = {
    x: 540,
    y: 60,
    size: 60,

    speed: 4
};

function variation2Draw() {

// 1) BEFORE START: show start screen
    if (!v2_started) {
        drawV2StartScreen();
        return;
    }

    // 2) WIN SCREEN
    if (v2_win) {
        background("green");
        fill(255);
        textSize(48);
        text("YOU WON!", width / 2, height / 2);
        textSize(20);
        text("Click to restart", width / 2, height / 2 + 50);
        return;
    }

    // 3) GAME OVER SCREEN
    if (v2_gameOver) {
        background("red");
        fill(255);
        textSize(48);
        text("GAME OVER", width / 2, height / 2);
        textSize(20);
        text("Click to restart", width / 2, height / 2 + 50);
        return;
    }
    background("lightblue");

    // TITLE
    fill(0);
    textSize(32);
    text("Variation 2 Working!", width/2, 40);

    // --- MOVE FROG (WASD) ---
    if (keyIsDown(87)) frog2.y -= frog2.speed; // W
    if (keyIsDown(83)) frog2.y += frog2.speed; // S
    if (keyIsDown(65)) frog2.x -= frog2.speed; // A
    if (keyIsDown(68)) frog2.x += frog2.speed; // D

    // DRAW FROG
    fill("blue");
    ellipse(frog2.x, frog2.y, frog2.size);

    // DRAW STONES
    if (!stoneA.collected) {
        fill(stoneA.color);
        ellipse(stoneA.x, stoneA.y, stoneA.w, stoneA.h);
    }
    if (!stoneB.collected) {
        fill(stoneB.color);
        ellipse(stoneB.x, stoneB.y, stoneB.w, stoneB.h);
    }
    if (!stoneC.collected) {
        fill(stoneC.color);
        ellipse(stoneC.x, stoneC.y, stoneC.w, stoneC.h);
    }

    // --- MOVE FLIES ---
    flyA.x += flyA.dx;
    flyB.x += flyB.dx;
    flyC.x += flyC.dx;

    flyD.y += flyD.dy;
    flyE.x += flyE.dx;

    // --- BOUNCE LOGIC ---
    if (flyA.x > stoneA.x + 60 || flyA.x < stoneA.x - 60) flyA.dx *= -1;
    if (flyB.x > stoneB.x + 60 || flyB.x < stoneB.x - 60) flyB.dx *= -1;
    if (flyC.x > stoneC.x + 60 || flyC.x < stoneC.x - 60) flyC.dx *= -1;

    if (flyD.y > 200 || flyD.y < 80) flyD.dy *= -1;
    if (flyE.x > 560 || flyE.x < 80) flyE.dx *= -1;

    // DRAW FLIES
    fill(0);
    ellipse(flyA.x, flyA.y, flyA.size);
    ellipse(flyB.x, flyB.y, flyB.size);
    ellipse(flyC.x, flyC.y, flyC.size);
    ellipse(flyD.x, flyD.y, flyD.size);
    ellipse(flyE.x, flyE.y, flyE.size);

    // COLLECT STONES
    if (dist(frog2.x, frog2.y, stoneA.x, stoneA.y) < frog2.size/2 + stoneA.w/2) stoneA.collected = true;
    if (dist(frog2.x, frog2.y, stoneB.x, stoneB.y) < frog2.size/2 + stoneB.w/2) stoneB.collected = true;
    if (dist(frog2.x, frog2.y, stoneC.x, stoneC.y) < frog2.size/2 + stoneC.w/2) stoneC.collected = true;

// WIN CONDITION: all three stones collected
    if (stoneA.collected && stoneB.collected && stoneC.collected) {
        v2_win = true;
    }

    // LOSE CONDITION: touching any fly
    if (dist(frog2.x, frog2.y, flyA.x, flyA.y) < frog2.size/2 + flyA.size/2) v2_gameOver = true;
    if (dist(frog2.x, frog2.y, flyB.x, flyB.y) < frog2.size/2 + flyB.size/2) v2_gameOver = true;
    if (dist(frog2.x, frog2.y, flyC.x, flyC.y) < frog2.size/2 + flyC.size/2) v2_gameOver = true;
    if (dist(frog2.x, frog2.y, flyD.x, flyD.y) < frog2.size/2 + flyD.size/2) v2_gameOver = true;
    if (dist(frog2.x, frog2.y, flyE.x, flyE.y) < frog2.size/2 + flyE.size/2) v2_gameOver = true;
    // KEEP FROG INSIDE SCREEN
    frog2.x = constrain(frog2.x, frog2.size/2, width - frog2.size/2);
    frog2.y = constrain(frog2.y, frog2.size/2, height - frog2.size/2);
}

function variation2MousePressed() {

    // --- start screen clicks ---
    if (!v2_started) {

        // first click = show instructions
        if (!v2_showInstructions) {
            v2_showInstructions = true;
        }

        // second click = begin game
        else {
            v2_started = true;
        }

        return;
    }

    // --- click to restart on win or lose ---
    if (v2_win || v2_gameOver) {
        resetVariation2();
        return;
    }
}
function resetVariation2() {

    // reset game flow flags
    v2_started = false;
    v2_showInstructions = false;
    v2_gameOver = false;
    v2_win = false;

    frog2.x = 540;
    frog2.y = 60;

    stoneA.collected = false;
    stoneB.collected = false;
    stoneC.collected = false;

    flyA.x = 150; flyA.y = 120; flyA.dx = 2;
    flyB.x = 320; flyB.y = 170; flyB.dx = 2;
    flyC.x = 490; flyC.y = 170; flyC.dx = 2;

    flyD.x = 250; flyD.y = 100; flyD.dy = 2;
    flyE.x = 320; flyE.y = 300; flyE.dx = 3;
}

function drawV2StartScreen() {
    background("white");

    // title
    fill("black");
    textSize(48);
    text("SPIDER FROG", width / 2, 110);

    // first instruction
    fill(80);
    textSize(22);
    text("Click to see instructions", width / 2, 180);

    // after first click, show instructions
    if (v2_showInstructions) {
        fill(0);
        textSize(20);
        text(
            "Move with W A S D\nCollect the 3 stones to win\nAvoid the flies or you lose",
            width / 2,
            260
        );

        text("Click again to start!", width / 2, 330);
    }

    // simple frog icon at bottom
    fill("blue");
    ellipse(width / 2, height - 80, 120, 90);
}


