var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1000,400);  
  speed = random(10, 500);
  weight = random(200, 1000);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed
  car.shapeColor = "red";

  wall = createSprite(800, 200, 60, 200)
  wall.shapeColor = "grey";
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;
  if(deformation>180){
  car.shapeColor = "red";  
    
  } 
if(deformation<180 && deformation>100){
car.shapeColor = "yellow";

}
if(deformation<100){
car.shapeColor = "green";

}
}


  drawSprites();
}