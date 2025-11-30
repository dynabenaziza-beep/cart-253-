let spiderFrog={
    x: 320,
    y: 240,
    size: 80,
    speed: 4 
};


function variation2Draw() {
background("pink");


//move the frog //
moveSpiderFrog();

//drawspider
drawSpiderFrog();

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
}
function drawSpiderFrog(){
    fill(0,255,0);
    ellipse(spiderFrog.x, spiderFrog.y, spiderFrog.size);
}