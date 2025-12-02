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

let stone2 = {
    x: 450,
    y: 150,
    size: 40,
    collected: false
};

let stone3 = {
    x: 320,
    y: 350,
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
let fly2 = {
    x: 0,
    y: 0,
    size: 25,
    angle: 0,
    radius: 60,
    speed: 0.1,
};

let fly3 = {
    x: 0,
    y: 0,
    size: 25,
    angle: 0,
    radius: 60,
    speed: 0.03
};
/*FLY 4,5,6(DIFFERENT MOVEMNT )*/
let fly4 = { 
    x: 100, 
    y: 50, 
    size: 25, 
    speed: 3, 
    direction: 1 };  // left-right

let fly5 = {
    x: 550,
    y: 300,
    size: 25,
    speed: 3,
    direction: 1
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

//--stone 1 and ffly 1 
drawStone();
updateFly();
drawFly();
checkFlyCollision();
checkStoneCollection();


// --- Stone 2 + Fly 2 ---
drawStone2();
updateFly2();
drawFly2();
checkFly2Collision();
checkStone2Collection();

// Stone 3 + Fly 3
drawStone3();
updateFly3();
drawFly3();
checkFly3Collision();
checkStone3Collection();
 
//fly 4 
updateFly4();
drawFly4();
checkFly4Collision();

//fly5
updateFly5();
drawFly5();
checkFly5Collision();
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

function drawStone2() {
    if (!stone2.collected) {
        fill(255, 215, 0); 
        ellipse(stone2.x, stone2.y, stone2.size);
    }
}
function drawStone3() {
    if (!stone3.collected) {
        fill(255, 215, 0);
        ellipse(stone3.x, stone3.y, stone3.size);
    }
}

function drawFly() {
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
}
function drawFly2() {
    fill(0);
    ellipse(fly2.x, fly2.y, fly2.size);
}

function drawFly3() {
    fill(0);
    ellipse(fly3.x, fly3.y, fly3.size);
}
function drawFly4() { 
    fill(0);
     ellipse(fly4.x, fly4.y, fly4.size); }

function drawFly5() {
    fill(0);
    ellipse(fly5.x, fly5.y, fly5.size);
}

function updateFly() {
    // increase angle a bit every frame
    fly.angle += fly.speed;

    // make fly orbit around the stone
    fly.x = stone.x + cos(fly.angle) * fly.radius;
    fly.y = stone.y + sin(fly.angle) * fly.radius;
}
function updateFly2() {
    fly2.angle += fly2.speed;

    fly2.x = stone2.x + cos(fly2.angle) * fly2.radius;
    fly2.y = stone2.y + sin(fly2.angle) * fly2.radius;
}

function updateFly3() {
    fly3.angle += fly3.speed;

    fly3.x = stone3.x + cos(fly3.angle) * fly3.radius;
    fly3.y = stone3.y + sin(fly3.angle) * fly3.radius;
}
function updateFly4() {
    fly4.x += fly4.speed * fly4.direction;

    // bounce when hitting walls
    if (fly4.x > width - fly4.size/2 || fly4.x < fly4.size/2) {
        fly4.direction *= -1;
    }
}

function updateFly5() {
    fly5.y += fly5.speed * fly5.direction;

    // bounce on top & bottom edges
    if (fly5.y > height - fly5.size/2 || fly5.y < fly5.size/2) {
        fly5.direction *= -1;
    }
}
function checkFlyCollision() {
    let d = dist(fly.x, fly.y, spiderFrog.x, spiderFrog.y);

    // if the fly touches the frog
    if (d < (fly.size/2 + spiderFrog.size/2)) {
        state = "gameover";  
    }
}

function checkFly2Collision() {
    let d = dist(fly2.x, fly2.y, spiderFrog.x, spiderFrog.y);

    if (d < (fly2.size/2 + spiderFrog.size/2)) {
        state = "gameover";
    }
}
function checkFly3Collision() {
    let d = dist(fly3.x, fly3.y, spiderFrog.x, spiderFrog.y);

    if (d < (fly3.size/2 + spiderFrog.size/2)) {
        state = "gameover";
    }
}

function checkStoneCollection() {
    // if stone is already collected == nothing
    if (stone.collected) return;


  // distance between frog and stone
    let d = dist(spiderFrog.x, spiderFrog.y, stone.x, stone.y);

 // if frog touches the stone
    if (d < (spiderFrog.size/2 + stone.size/2)) {
        stone.collected = true; // stone disappears
    }
}
function checkStone2Collection() {
   if (stone2.collected) return;

    let d = dist(spiderFrog.x, spiderFrog.y, stone2.x, stone2.y);

    if (d < (spiderFrog.size/2 + stone2.size/2)) {
        stone2.collected = true;
    }
}
function checkStone3Collection() {
    if (stone3.collected) return;


    let d = dist(spiderFrog.x, spiderFrog.y, stone3.x, stone3.y);

    if (d < (spiderFrog.size/2 + stone3.size/2)) {
        stone3.collected = true;
    }
}

function checkFly4Collision() {
    let d = dist(fly4.x, fly4.y, spiderFrog.x, spiderFrog.y);

    if (d < (fly4.size/2 + spiderFrog.size/2)) {
        state = "gameover";
    }
}

function checkFly5Collision() {
    let d = dist(fly5.x, fly5.y, spiderFrog.x, spiderFrog.y);

    if (d < (fly5.size/2 + spiderFrog.size/2)) {
        state = "gameover";
    }
}
