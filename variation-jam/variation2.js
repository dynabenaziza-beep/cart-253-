let spiderFrog={
    x: 320,
    y: 240,
    size: 80,
    speed: 4 
};


function variation2Draw() {
background("pink");

//drawspider
drawSpiderFrog();

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
