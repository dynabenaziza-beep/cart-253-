// variable to make the rectangle interactive 
// x cordinate of top left
let rectX= 150;
// y cordinate of top left 
let rectY= 100
//width 
let rectW= 250
//heigth of the rectangle
let rectH= 190
//
let dragging= false;


function setup() {
  createCanvas(800,800);



}


function draw() {
background(255);


//when dragging it will update the position of the rectangle 
if (dragging) {
    rectX = mouseX;
    rectY = mouseY;
}
// collor the rectangle beige to match my skin color 
fill(245,230,200);
//draw the rectangle to be at the positon i want it to be 
rect(rectX, rectY,rectW,rectH);





// draw white of the eye(sclera) 
noStroke();
fill(255);

//draw a more almond shape for the eye 
beginShape();
vertex(rectX, rectY+95);
bezierVertex(rectX+50 ,rectY-10, rectX+200, rectY-10, rectX+250, rectY+95);//top
bezierVertex(rectX+200,rectY+200,rectX+50,rectY+200,rectX,rectY+95);// bottom
endShape(CLOSE);



//draw the iris of the eye (green)
noStroke();  
fill(0,255,0);
ellipse(rectX+120,rectY+100,90,160);

//draw the pupil 
fill(0);
ellipse(rectX+120,rectY+100,30,50);

//#1 white highlight 
fill(255);
ellipse(rectX+140,rectY+85,20,40);
//#2 white highlight 
fill(255);
ellipse(rectX+90,rectY+55,45,50);
}
//
function mousePressed(){
//if i touche the rectangle it need to be interactive and moove 
if (mouseX > rectX && mouseX < rectX + rectW && 
  mouseY > rectY && mouseY <  rectY + rectH) {
    dragging=true;
  } 
  
}
//when release rectangle= stop moving 
function mouseReleased() {
dragging= false;

}




  

