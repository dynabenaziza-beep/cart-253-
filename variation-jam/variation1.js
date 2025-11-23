/* variation 1 - Frod Detective */
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
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

function variation1Draw(){
    background(240);
moveFrogVariation1();
functionDrawFrogvariation1();
}

function moveFrogVariation1() {
    frog.body.x=mouseX;
}

function DrawFrogvariation1() {
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

