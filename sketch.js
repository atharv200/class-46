var backgroundImg

function setup() {
  createCanvas(800,600);
  
}

function preload(){
  backgroundImg = loadImage("Images/background.jpg")
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}