/* variation 1 - Frod Detective */
let score =0; 
let caseSolved = false;
let bgImage;

function preload(){
bgImage = loadImage("dt.jpg");
}
let gameOver = false
let trashcansCreated = false;
let trashcans=[];

let showInstructions =false;
let gameStarted = false;

const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 420,
        size: 220
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
function setup(){
createCanvas(640,480);
   
}

function setupTrashcans() {
    trashcans.push({ //first trashcans
x: 100,
y: 120,
w:60,
h: 80,
speedX:2,
speedY:0,   //DOES NOT MOOVE VERTICALLY
    });
//second transh cans 
trashcans.push({
x:550,
y: 150,
w:  60,
h: 80,
speedX: -3,
speedY: 0,
});
// third trashcan - up and down
trashcans.push({
    x: 300,
    y: 100,
    w: 60,
    h: 80,
    speedX: 0,
    speedY: 2,
});
// fourth trashcan - diagonal movement
trashcans.push({
    x: 200,
    y: 200,
    w: 60,
    h: 80,
    speedX: 2,
    speedY: 2
});
//trashcans fifth 
trashcans.push({
x: 400,
y: 200,
w: 60,
h:80,
angle:0, //used for cicrcle 
radius:40,  //size circle 
centerX:400, //center rotation
centerY: 200,
dangerous: true //kilfrog 
});
}

function moveTrashcans(){ //to move the trashcans 
//t.c #1 moves left and rigth 
trashcans[0].x =trashcans[0].x+ trashcans[0].speedX;
//if touches left edge= flipe direction 
if(trashcans[0].x<0){
    trashcans[0]. speedX= trashcans[0].speedX * -1;
}
//rigth side of canvas 
if (trashcans[0].x + trashcans[0].w >width){
    trashcans[0].speedX = trashcans[0].speedX *-1;
}
trashcans[1].x = trashcans[1].x + trashcans[1].speedX;//trashcans #2 move rigth left 
if(trashcans[1].x<0){//bounce on left edge 
    trashcans[1].speedX = trashcans[1].speedX*-1;
}
if (trashcans[1].x + trashcans[1].w > width){
    trashcans[1].speedX = trashcans[1].speedX * -1;
}
//trashcans #3 
trashcans[2].y = trashcans[2].y + trashcans [2].speedY;
//bounce at the top
if(trashcans[2].y<0){
    trashcans[2].speedY = trashcans[2].speedY * -1;
    }
//bounce at bottom
if (trashcans[2].y + trashcans[2].h > height){
    trashcans[2].speedY = trashcans[2].speedY *-1;
}
//trashcan #4 = diagonally 
trashcans[3].x =trashcans[3].x + trashcans[3].speedX;
trashcans[3].y = trashcans[3].y+ trashcans[3].speedY;
    //bounce on left or rrigth 
if (trashcans[3].x <0 || trashcans[3].x + trashcans[3].w > width){
trashcans[3].speedX*= -1;
}
//bounce on top or bottom
if(trashcans[3].y < 0 || trashcans[3].y + trashcans[3].h > height){
    trashcans[3].speedY *=-1;
}
// trashcan #5 - circle movement
trashcans[4].angle += 0.05; // how fast it rotates (small = smoother)

//  new x/y based on angle
trashcans[4].x = trashcans[4].centerX + cos(trashcans[4].angle) * trashcans[4].radius;
trashcans[4].y = trashcans[4].centerY + sin(trashcans[4].angle) * trashcans[4].radius;
}

function variation1Draw(){
// start screen 
if (!gameStarted){
    drawStartScreen();
    return; //stop here until the player starts
}
if (caseSolved) {
  background(0, 180, 0);
  fill(255);
  textSize(48);
  text("YOU SOLVED THE CASE!", width/2, height/2);
  return;
}

 // game over screen 
if(gameOver) {
    background(255,50,50); //red background 
     fill(0);
    textSize(64);
    text("GAME OVER", width/2,height/2);
    return; //stop the game 
    }
      background(bgImage)

      //draw score icons (3 total )
      if (score>= 1) drawScoreTrashcan(20,20);
      if (score>= 2) drawScoreTrashcan(70,20);
     if (score>= 3) drawScoreTrashcan(120,20);

if (!trashcansCreated){
        setupTrashcans();
        trashcansCreated = true;
     }
     moveTrashcans();
     checkTrash5Collision();
     checkGoodTrashcans(); //commit the 3 trashcans 
     drawTrashcans();
     
     

moveFrogVariation1();
moveTongueVariation1();
drawFrogVariation1();
}

function moveFrogVariation1() {
    frog.body.x=mouseX;
}

function drawTrashcans(){
    for (let tc of trashcans){
  
push();
fill(100);   //grey trashcans 
stroke(0);
rect(tc.x, tc.y, tc.w, tc.h);
pop();
    }
}
function drawFrogVariation1() {

    // Draw the tongue tip
   
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    
// Draw the rest of the tongue
 stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    //Draw frog body 
    fill("00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y,frog.body.size);

    //draw the frog eye 
  fill(255);
  ellipse(frog.body.x - 60 , frog.body.y-90,80,80); //left eye 
  ellipse(frog.body.x +60 ,frog.body.y -90 ,80,80 ); //rigth eye 

  //draw frog puppil 
  fill(0); //black
  ellipse(frog.body.x - 60 , frog.body.y - 90 , 50, 50); //left puppil 
ellipse(frog.body.x+60, frog.body.y -90, 50 ,50); //rigth puppil 

}
function checkTrash5Collision(){
    let tc = trashcans[4]; //the fifth tc 


    //center roating trascans 
    let tcCenterX = tc.x + tc.w / 2;
    let tcCenterY = tc.y + tc.h / 2;
//distance from tongue tip 
    let dTongue = dist(frog.tongue.x, frog.tongue.y, tcCenterX,tcCenterY);

    // if frog  tongue closer then 20 px = game over 
    if(dTongue <50){
        gameOver = true;
    }
}

function checkGoodTrashcans(){
   for (let i=0; i < 4 ; i++) { //only 0-3 trashcans 
    let tc = trashcans[i];
// center of trashcan 
let cx = tc.x + tc.w/2;
let cy = tc.y + tc.h /2;
//distance tongue -> trashcans center 
let d = dist(frog.tongue.x, frog.tongue.y, cx , cy );
//if tongue hit trashcans 
if (d < 50) {
 score++; //ad point 
    frog.tongue.state="inbound"; //pull tongue bakc 
    // move trashcans off screen so it doesnt count again 
    tc.x =-9999; 
    if(score >=3 ){
        caseSolved=true;
    }
   }
 }
}
function moveTongueVariation1() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
   //reset
   
   if(frog.tongue.state=="idle"){
    frog.tongue.y = frog.body.y;
   }
    
// outbound(go up)
     if (frog.tongue.state === "outbound") {
        frog.tongue.y -= frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) frog.tongue.state = "inbound";
         }

    // inbound go down 
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= 480) frog.tongue.state = "idle";
        }
}

  function variation1MousePressed() {
  if (!gameStarted) {
    let d = dist(mouseX, mouseY, width / 2, height - 50);

    // First click → show instructions
    if (d < 250 && !showInstructions) {
      showInstructions = true;
    }
    // Second click → start game
    else if (d < 250 && showInstructions) {
      gameStarted = true;
    }
  }
  else if (frog.tongue.state === "idle") {
    frog.tongue.state = "outbound";
  }
}

function drawStartScreen() {
  background(20, 40, 80); // deep blue
//drawing the detective frog loop 
  //loop 
  stroke(255);
  strokeWeight(10);
  noFill();
  ellipse(300,200,90,90);
// loop handle 
  stroke(80,50,20);
  strokeWeight(20);
  line(340, 240, 400, 300);

textAlign(CENTER, CENTER); //center title 
  // Title
  fill(255, 215, 0); 
  textSize(50);
  text("FROD DETECTIVE", width / 2, 120);

  // Subtext
  fill(200);
  textSize(20);
  text("Click the frog to start", width / 2, 160);

  // Instructions after first click
  if (showInstructions) {
    fill(255);
    textSize(16);
    textLeading(50);
    text("Use your tongue to catch clues.\nAvoid dangerous trashcans.\nStay alive.", width / 2, 220);

    textSize(18);
    text("Click again to begin!", width / 2, 270);
  }


  // Frog body (only top part)
  noStroke();
  fill("#00ff00");
  ellipse(width / 2, height + 120, 640, 400);

  // Eyes
  fill(255);
  ellipse(width / 3 - 40, height - 40, 120, 120);
  ellipse(width / 3 + 260, height - 40, 120, 120);

  fill(0);
  ellipse(width / 3 - 45, height - 40, 90, 90);
  ellipse(width / 3 + 260, height - 40, 90, 90);
}
//trashcans score (similar to heart)
function drawScoreTrashcan(x,y){
    fill(120);
    stroke(0);
    rect(x,y,30,40,5);//small trashcan icon 
}