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
function setup(){
    createCanvas(640,480);
}


function variation1Draw(){
    background(240);

moveFrogVariation1();
moveTongueVariation1();
drawFrogVariation1();

}

function moveFrogVariation1() {
    frog.body.x=mouseX;
}

function drawFrogVariation1() {
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

// Draw the tongue tip
   
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    

    // Draw the rest of the tongue

    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
 
}

function moveTongueVariation1() {
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

    function variation1MousePressed(){
        if (frog.tongue.state =="idle") {
            frog.tongue.state ="outbound";
        }
    }

