/**
 * The Only Move Is Not To Play
 * Pippin Barr (Modified by Dyna Benaziza)
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

  // Lose if internet connection changes (Step 5)
  window.addEventListener("online", lose);
  window.addEventListener("offline", lose);

  // Lose if the page/tab loses focus (Step 6)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      lose();
    }
  });

  // Lose if any keyboard or mouse events occur (Step 3 & 4)
  window.addEventListener("keydown", lose);
  window.addEventListener("keyup", lose);
  window.addEventListener("mousemove", lose);
  window.addEventListener("mousedown", lose);
  window.addEventListener("mouseup", lose);
  window.addEventListener("click", lose);
  window.addEventListener("dblclick", lose);
  window.addEventListener("wheel", lose);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

/**
 * Handles losing the game
 */
function lose() {
  gameOver = true;
}

