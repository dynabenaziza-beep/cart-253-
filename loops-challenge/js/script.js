/**
 * Loop challenges 
 * dyna benaziza
 * 
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
  
// background
    let shade= 0;
    for(let x= 0 ; x <width; x+= 2){ // move 2 pixel each time 
        stroke(shade);
        line(x,0,x,height); //draw vertical line 
        shade +=1; // make it lighter for next line 
    }

    //vertical lines 
    
    let  x = 0; //starting position 
    let dark = 0; // start the stroke color 

    while(x<= 500) {//repeated till the end of the canvas 
    stroke(dark); // setting the line color 
    line(x,0,x, height); // drawing  vertical line 

    //increase the value ( like in thr exemple )
    x += 50; // 50 pixel to the rigth 
    dark += 25; // shade for each line ( get ligther and ligther )
    }
    // horizontal line 

    let y = 0 ; 
    let tone = 0;

    while(y<= 500){
        stroke(tone);
        line(0,y,width,y);
        y+=50;
        tone+=25;  
    
}
}