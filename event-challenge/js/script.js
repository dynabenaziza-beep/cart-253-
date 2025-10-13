//events challenges 

let scrore= 0; // show the current score 
let gameOver = false //keep track of the point we lost 

function setup(){
createCanvas(400,400);
}

function draw(){
  background("#87ceeb");
}

if (!gameOver) {
  score+= 0.05;
}
if(gameOver){


push();
textSize(48);
textStyle(BOLD);
textAlign(CENTER,CENTER);
text(floor("YOU LOSE", width/2,height/3);
pop();

}
//to alway show the score 
push();
textAlign(CENTER,CENTE);
textSize(48);
text(floor(score),width/2, height/2);
pop();
}