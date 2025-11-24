/* variation 1 - Frod Detective */
let trashcansCreated = false;
let trashcans=[];

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
x:600,
y: 150,
w:  60,
h: 80,
speedX: -3,
speedY: 0,
})
}

function draw(){
    variation1Draw();
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
trashcans[1].x = trashcans[1].x + trashcans[1].speedX; //trashcans #2 move rigth left 
}
function variation1Draw(){
    background(240);

    if (!trashcansCreated){
        setupTrashcans();
        trashcansCreated = true;
     }
     moveTrashcans();
     drawTrashcans();
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

function moveTongueVariation1() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
   
    // If the tongue is outbound, it moves up
     if (frog.tongue.state === "outbound") {
        frog.tongue.y -= -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) frog.tongue.state = "inbound";
         }

    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= 480) frog.tongue.state = "idle";
        }
}
function variation1MousePressed(){
        if (frog.tongue.state =="idle") {
            frog.tongue.state ="outbound";
        }
    }

