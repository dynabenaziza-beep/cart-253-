let score = 0;
let timer = 30;
let flies = [];  
let spawnRate = 120;

let garfieldFrog;
let gameStarted3 = false;
let showInstructions3 = false;
let gameOver3 = false;
let gameWon3 = false;
let targetScore3 = 20; // you can change target later


function resetVariation3() {
    // reset frog
    garfieldFrog = {
        x: width / 2,
        y: height / 2,
        size: 70
    };

    // reset game values
    score = 0;
    timer = 30;
    flies = [];

 // Reset start screen logic
    gameStarted3 = false;
    showInstructions3 = false;
    gameOver3 = false;
    gameWon3 = false;
}

function drawStartScreen3() {



    background(255, 210, 160);

    // Title
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("GARFIELD FROG", width / 2, 120);

    // Subtext
    fill(120, 80, 0);
    textSize(20);
    text("Click Garfield to begin", width / 2, 180);

    // Extra instructions after first click
    if (showInstructions3) {
        fill(0);
        textSize(22);
        textLeading(40);
        text(
            "Eat normal flies to gain score.\n" +
            "Yellow flies = +5 seconds!\n" +
            "Orange flies = -5 seconds!\n\n" +
            "Catch as many as you can before time runs out!",
            width / 2,
            260
        );

        fill(100, 40, 0);
        textSize(20);
        text("Click again to start!", width / 2, 380);
    }

    // Draw Garfield head (simple cute circle version)
    noStroke();
    fill(255, 150, 40);
    ellipse(width / 2, height - 80, 200, 150);

    // Eyes
    fill(255);
    ellipse(width / 2 - 30, height - 100, 40, 40);
    ellipse(width / 2 + 30, height - 100, 40, 40);

    fill(0);
    ellipse(width / 2 - 30, height - 100, 20, 20);
    ellipse(width / 2 + 30, height - 100, 20, 20);

    // Nose
    fill(0);
    triangle(
        width / 2 - 10, height - 80,
        width / 2 + 10, height - 80,
        width / 2, height - 70
    );
}

function drawGameOver3() {
    background(120, 0, 0);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("TIME'S UP!", width / 2, height / 2 - 40);

    textSize(24);
    text("Final score: " + score, width / 2, height / 2 + 10);
    text("Click to return to menu", width / 2, height / 2 + 60);
}

function drawWinScreen3() {
    background(255, 200, 80);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("YOU WIN!", width / 2, height / 2 - 40);

    textSize(24);
    text("You reached " + score + " flies!", width / 2, height / 2 + 10);
    text("Click to return to menu", width / 2, height / 2 + 60);
}

function variation3Draw() {
    // 1) Start screen first
    if (!gameStarted3) {
        drawStartScreen3();
        return;
    }

    // 2) If already game over or won, show the correct screen
    if (gameOver3) {
        drawGameOver3();
        return;
    }

    if (gameWon3) {
        drawWinScreen3();
        return;
    }

    // 3) Normal gameplay
    background(255, 210, 160);

    // spawn flies
    if (frameCount % spawnRate === 0) {
        spawnFly();
    }

    // decrease timer
    timer -= 1 / 60;
    if (timer <= 0) {
        timer = 0;
        gameOver3 = true;   // mark game over when time runs out
        return;
    }

    moveGarfieldFrog();
    drawGarfieldFrog();
    drawGarfieldTitle();
    drawFlies();
    moveFlies();
    checkFlyCollision();

    fill(0);
    textSize(20);
    text("Score: " + score, 80, 40);
    text("Time: " + timer.toFixed(1), 80, 70);
}
    
function variation3MousePressed() {
     // Start-screen behaviour
    if (!gameStarted3) {
        if (!showInstructions3) {
            showInstructions3 = true; // first click → show instructions
        } else {
            gameStarted3 = true;      // second click → start game
        }
        return;
    }

    // If game over or win → click to go back to main menu
    if (gameOver3 || gameWon3) {
        resetVariation3();  // reset our local state
        state = "menu";     // go back to global menu
        return;
    }

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
function spawnFly() {
    let typeChance = random(100);
    let type;

    if (typeChance < 70) {
        type = "normal";  // 70% chance
    } 
    else if (typeChance < 90) {
        type = "yellow";  // 20% chance
    } 
    else {
        type = "orange";  // 10% chance
    }

    flies.push({
        x: random(width),
        y: random(height),
        size: 20,
        dx: random(-2, 2),
        dy: random(-2, 2),
        type: type
    });
}

function drawFlies(){
 for (let f of flies) {
        noStroke();

        if (f.type === "normal") fill(0);          // black
        if (f.type === "yellow") fill(255, 220, 0);
        if (f.type === "orange") fill(255, 140, 0);

        ellipse(f.x, f.y, f.size);
    }
}
function moveFlies() {
for (let f of flies) {
        f.x += f.dx;
        f.y += f.dy;

        // bounce if they hit the wall
        if (f.x < 0 || f.x > width) f.dx *= -1;
        if (f.y < 0 || f.y > height) f.dy *= -1;
    }



}

function checkFlyCollision() {
for (let i = flies.length - 1; i >= 0; i--) {
        let f = flies[i];

        let d = dist(
            garfieldFrog.x,
            garfieldFrog.y,
            f.x,
            f.y
        );

        if (d < garfieldFrog.size / 2 + f.size / 2) {
            applyFlyEffect(f.type);   // apply timer/score effect
            flies.splice(i, 1);       // remove eaten fly
        }
    }


}

function applyFlyEffect(type) {
    if (type === "normal") {
        score++;
    }

    if (type === "yellow") {
        score++;
        timer += 5;
    }

    if (type === "orange") {
        score++;
        timer -= 5;

        if (timer < 0) timer = 0;
    }

    if (score >= targetScore3) {
        gameWon3 = true;
    }
}