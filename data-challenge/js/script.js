/**
 * Data Challenge 
 dyna benaziza 
*/

"use strict";

let carData;
let carName = " click tog generate a car name. ";

function preload() {
  carData = loadJSON("assets/data/cars.json");
  
}

function setup() {
   createCanvas(600, 400);  

}

function draw() {
 background(0);

  fill("pink");
  textAlign(CENTER, CENTER);
  textSize(32);
  text(carName, width / 2, height / 2);
}

function mousePressed(){
 if (!carData || !carData.cars) {
    carName = "Car data not loaded!";
    return;
  }

  let randomCar = random(carData.cars);
  carName = randomCar;    
}