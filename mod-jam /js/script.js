/**
 * mod-jam
 * Title of Project
 * dyna benaziza 
 * 

 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};
// sun 
const day = {
sunX: 600,  //left side 
sunY: 0,  //high = morning 
  darkness: 0 // so that it start brigth 
};

// Our fly
// Has a position, size, and speed of horizontal movement
//const fly = {
   // x: 0,
   // y: 200, // Will be random
   // size: 10,
   // speed: 3
//};

let flies = []; // empty list to store flies 
let bees =[]; // empty list to store the bees 


/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // one fly come from the left 
    flies.push({
        x: 0 , // start left edge 
        y: 200,
        size: 10, 
        speedX: 3  // how fast it goes  , move rigth 

});

//second fly
flies.push({
x: 640,  //start rigth edge 
y : 150,
size: 10, 
speedX: -3  // move left 

}); 

//third fly : this one is going to move up and down 
flies.push({

  x:  0 , 
  y:200, 
  size: 10 ,
  speedX: 2, 
  speedY: 2 // make it go up and down 

});


}

/**
 * Creates the canvas and initializes the fly
 */

    

function draw() {
   //background("#87ceeb");

   // add the darkness 
   let skyColor= 255 - day.darkness; // start ligth bleu 
   if (skyColor < 15) skyColor = 15; // stop whne it become totaly dark 
   background(skyColor * 0.3 , skyColor * 0.5, skyColor); //gradually darken 



    

   
    //move the flies 
    moveFlies();
    drawFlies();


   
    moveFrog();
    moveTongue();
    drawFrog();

    //check if tongue touch flies 
    checkTongueFliesOverlap();

    //draw the sun  
    fill("yellow");
    noStroke();
    ellipse( day.sunX, day.sunY,  150 , 150 );



}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFlies() {
   for (let fly of flies ){

  fly.x = fly.x + fly.speedX; //update position frames 
    
//if fly goes too much left sie = go back to left 
if(fly.x > 640){
  fly.x = 0;
  fly.y = random(50,300);
}
// if the fly goes too much left side = go rigth 
if(fly.x< 0){
  fly.x = 640;
  fly.y= random(50,300);
}
//if flies is moving on the y make it go up and down 
if (fly.speedY) {
fly.y = fly.y+ fly.speedY;

// when it hit the limit that i put( 300, 100)  it has to go down 
if (fly.y > 300 || fly.y < 100 ){
  fly.speedY=-fly.speedY;
}

}
   }
  }

/**
 * Draws the fly as a black circle
 */
function drawFlies() {
  for(let fly of flies) { //call all flies 
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
  }
}

/**
 * Resets the fly to the left with a random y
 */

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= 480) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFliesOverlap() {
   
  for(let fly of flies){
    const d= dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
  
const eaten = (d < frog.tongue.size/2 + fly.size/2);

    if (eaten) {
        // Reset the fly
        fly.x = 0;
        fly.y = random(50,300);


         // make the sun goes down 
day.sunY+= 48;
if (day.sunY > 480) day.sunY= 480 ;  // make the sun stop at the bottom 


//make sky goes darker and darker 
day.darkness+= 20;
if (day.darkness >  255)  day.darkness = 255;


 // tongues goes back in 
        frog.tongue.state = "inbound";
    }
  } 
}
/**
 * move tongue on click 
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}
