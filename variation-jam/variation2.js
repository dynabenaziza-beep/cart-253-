let spiderBg; // background image 


let spiderFrog={
    x: 320,
    y: 240,
    size: 80,
    speed: 4 
};
//--new infinity stone and fly ---
let stone ={
x: 200,
y: 200, 
size: 40,
collected: false 
};

let fly  ={
 x: 0,
    y: 0,
    size: 25,
    angle: 0,
    radius: 60,
    speed: 0.03
};

function variation2Draw() {

    //load background image 
    if(!spiderBg){
        spiderBg = loadImage("wall.jpeg");
         }

    image(spiderBg, 0, 0, width, height);

//move the frog //
moveSpiderFrog();
//drawspider
drawSpiderFrog();
drawStone();
drawFly();

updateFly();

//text//
fill(0);
textSize(32);
text("variation 2 is WORKING!", width/2,height/2);

textSize(18);
    text("Click to return", width/2,height/2+40);
}

function  variation2MousePressed(){
    if (state== "variation2"){
        state="menu"; //go back to menu 
    }
}

function moveSpiderFrog(){

    //W KEY UP 
    if (keyIsDown(87)){//W
spiderFrog.y-=spiderFrog.speed;
    }
//S KEY DOWN
    if(keyIsDown(83)){
        spiderFrog.y+=spiderFrog.speed;
    }

    if(keyIsDown(65)){ ///a
        spiderFrog.x-=spiderFrog.speed;
 }
 //D key right 
 if(keyIsDown(68)){ //D
    spiderFrog.x += spiderFrog.speed;
 }

 //keep the frog inside the canavas 
spiderFrog.x = constrain(spiderFrog.x, spiderFrog.size/2, width - spiderFrog.size/2);
spiderFrog.y = constrain(spiderFrog.y, spiderFrog.size/2, height - spiderFrog.size/2);

}
function drawSpiderFrog(){
    fill(0,255,0);
    ellipse(spiderFrog.x, spiderFrog.y, spiderFrog.size);
}
function drawStone(){
    if(!stone.collected) {
        fill(255,215,0); //gold 
        ellipse(stone.x, stone.y, stone.size);
    }
}
function drawFly() {
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
}

function updateFly() {
    // increase angle a bit every frame
    fly.angle += fly.speed;

    // make fly orbit around the stone
    fly.x = stone.x + cos(fly.angle) * fly.radius;
    fly.y = stone.y + sin(fly.angle) * fly.radius;
}
