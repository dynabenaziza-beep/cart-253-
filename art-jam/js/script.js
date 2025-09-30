// variable to make the rectangle (interactive piece #1)
// x cordinate of top left
let rectX= 150;
// y cordinate of top left 
let rectY= 100
//width 
let rectW= 250
//heigth of the rectangle
let rectH= 190
//
let dragging1= false;
// variable to make the ( interactive piece #2)
let rect2X= 400 ;
let rect2Y= 300;
let rect2W=430;
let rect2H= 110;
let dragging2 = false;



function setup() {
  createCanvas(900,900);



}


function draw() {
background(255);




//when dragging it will update the position of the rectangle 
if (dragging1) {
    rectX = mouseX;
    rectY = mouseY;
} 

if (dragging2) {
    rect2X = mouseX;
    rect2Y = mouseY;
}

//Hair first layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(700,200,260,180); //oval shape for the top of the hair 


//Hair second curly layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(650,160,260,180); //oval shape for the top of the hair 

//3
//Hair third curly layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(750,130,260,180); //oval shape for the top of the hair 

//3 
//Hair fourth curly layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(790,220,260,180); //oval shape for the top of the hair 


//4/
//Hair  fifth curly layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(590,100,260,180); //oval shape for the top of the hair 

//6
//Hair 6 curly layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(700,220,260,180); //oval shape for the top of the hair 


//7
//Hair seven curly layer (top)
stroke (0);
strokeWeight(6);
fill(160,100,50);
ellipse(550,80,260,180); //oval shape for the top of the hair 

//8 
//eigth curly hair layered (top left)
stroke
strokeWeight(6);
//(x,y(up-down),w,h)
fill(160,100,50);
ellipse(400,95,260,180);

//9 ninth curly har layered (top left 
// bigger then the other 
fill(160,100,50);
ellipse(400,95,300,180);




// head shape 
stroke(0);
strokeWeight(6);
//lleft side head 
fill(245,220,160);
beginShape();
vertex(250,150);
bezierVertex(200,100,700,80,800,250);
bezierVertex(780,550,700,850,500,900);
vertex(500,200);
endShape(CLOSE);




//second half of the head  right side 

fill(255,190,180);

beginShape();
vertex(500,200);
bezierVertex(750,250,720,500,500,500);
vertex(500,200);
endShape(CLOSE);

//third half of the head 
stroke(0);
strokeWeight(6);
fill(180,210,180);

beginShape();
vertex(520,200);
bezierVertex(700,520,720,720,520,800);
bezierVertex(460,780,480,600,520,500)
endShape(CLOSE);

//dividing line head shape 
stroke(0);
strokeWeight(8);
line(500,210,90);

//yellow face block ( bottom right )
stroke(0);
strokeWeight(6);
fill(250,210,90);
beginShape();
vertex(400,500);
vertex(520,500);
vertex(520,760);
vertex(300,760);
endShape(CLOSE);

//rect1 
// collor the rectangle beige to match my skin color 
fill(245,230,200);
//draw the rectangle to be at the positon i want it to be 
rect(rectX, rectY,rectW,rectH);

//rect2
fill(245,230,200);
rect(rect2X,rect2Y,rect2W ,rect2H);



//characteristic #1
// draw white of the eye(sclera) 
noStroke();
fill(255);

//draw a more almond shape for the eye 
//CREATING a custom shape 
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

//characteristic #2
noStroke();
fill(255);

  // male a smaller almond shape inside the rectangle
let eyeWidth= rect2W* 0.5; // 80% of rectangle width 
let eyeHeight = rect2H *1.2; // taller so only half shows 
let eyeX = rect2X + rect2W* 0.25; // centerec horizontally 
let eyeY = rect2Y+ rect2H* 0.1;  // moove down 


// use percentage instead of fixed pixel number 
beginShape();
vertex(eyeX,eyeY+ eyeHeight/2);

bezierVertex(
  eyeX +  eyeWidth * 0.25, eyeY+ eyeHeight* 0.1,
  eyeX + eyeWidth * 0.75, eyeY + eyeHeight * 0.1,
  eyeX + eyeWidth,      eyeY + eyeHeight /2  

);

bezierVertex(
  eyeX + eyeWidth * 0.75, eyeY+ eyeHeight* 1.2 ,
  eyeX + eyeWidth * 0.25,   eyeY+ eyeHeight * 1.2,
  eyeX,           eyeY+ eyeHeight/2 // 
  
);




//BIG EYE 
push();
translate(280,600); //move it tot the bottom left 
rotate(radians(20)); //move the eye sideway 

fill(0);
ellipse(0,0,200,250);

fill(0,255,0);
ellipse(10,10,200,200);

fill(0);
ellipse(10,10,80,80);

//highlight
fill(255);
ellipse(50,-30,50,50);
pop();


//nose (abstarct) shape trapeziod 
let nx= rectX+ rectW * 0.60;
let ny= rectY+ rectH * 0.25;
let nh = rectH * 1.6;
let ntop = 90;
let nbot= 50;

stroke(0);
strokeWeight(6);
strokeJoin(ROUND);
fill(245,200,160);
beginShape();
vertex(nx,ny);
vertex(nx+ ntop,ny);
vertex(nx+nbot, ny +nh);
vertex(nx,ny + nh);
endShape(CLOSE);



// mouth 
push ();
translate(500,700);
scale(2.1);

//outline of the mouth 
noStroke ();
fill(0);//black
beginShape();
vertex(-70,0);
bezierVertex(-50,-40,50,-40,70,0);
bezierVertex(50,40,-50,40,-70,0);
endShape(CLOSE);


//upperliip
fill(255,140,140);//red 
beginShape();
vertex(-65,0);
bezierVertex(-45,-30,45,-30,65,0);
vertex(-65,0);
endShape(CLOSE);

//Lower lip 
fill(255,140,140);
beginShape();
vertex(-65,0);
bezierVertex(-45,30,45,30,65,0);
vertex(-65,0);
endShape(CLOSE);
pop();


// ear 
push();
translate(rectX-50,rectY + rectH* 0.4);
scale(3);
stroke(0);
strokeWeight(3);
fill(245,230,200);


//ouside shape(ear)
beginShape();
vertex(0,-40);
bezierVertex(-40,-40,-40,40,0,40);
bezierVertex (20,40,20,-40,0,-40);
endShape(CLOSE);

noFill();
stroke(0);
strokeWeight(4);
beginShape();
vertex(-10, -20);
bezierVertex(-20,-10,-20,10,-10,20);
endShape();
pop();

//neck abstract 
stroke(0);
strokeWeight(4);
fill(240,200,160);

beginShape();
vertex(500,500);
vertex(640,500);
vertex(680,740);
vertex(470,760);
endShape(CLOSE);
// base of neck 
fill(230,180,150);
  stroke(0);
  strokeWeight(4);
  beginShape();
  vertex(450,760);
  vertex(720,760);
  vertex(850,900);
  vertex(300,900);
endShape(CLOSE);

}
//
function mousePressed(){
  //rectangle#1
//if i touche the rectangle it need to be interactive and moove 
if (mouseX > rectX && mouseX < rectX + rectW && 
  mouseY > rectY && mouseY <  rectY + rectH) {
    dragging1=true;
  } 
  //rectangle #2 
  if (mouseX > rect2X && mouseX < rect2X + rect2W && 
  mouseY > rect2Y && mouseY <  rect2Y + rect2H) {
    dragging2=true;
  } 
}
//when release rectangle= stop moving 
function mouseReleased() {
dragging1= false;
dragging2= false;

}




  

