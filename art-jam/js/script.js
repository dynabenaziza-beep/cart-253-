
function setup() {
  createCanvas(800,800);


}


function draw(){
background(255);
// collor the rectangle beige to match my skin color 
fill(245,230,200);
//draw the rectangle to be at the positon i want it to be 
rect(150,100,250,190);



// draw white of the eye(sclera) 
noStroke();
fill(255);

//draw a more almond shape for the eye 
beginShape();
vertex(210, 200);
bezierVertex(240, 160, 300, 160, 330, 200);
bezierVertex(300,240,240,240,210,200);
endShape(CLOSE);



//draw the iris of the eye (green)
noStroke();  
fill(0,255,0);
ellipse(270,200,90,160);

//draw the pupil 
fill(0);
ellipse(270,200,30,50);

//#1 white highlight 
fill(255);
ellipse(290,185,20,40)
//#2 white highlight 
fill(255);
ellipse(240,155,45,50)



}

