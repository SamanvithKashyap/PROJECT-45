const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rocket,rocketImage;
var engine, world;
var bg;
var position;
var obstacle;
var obstacleGroup, obstacle_image;
var planer, planetImage,planetGroup;



function preload(){
  bg = loadImage("./images/background.png");
  obstacle_image = loadImage("./images/meteroid.png");
  rocketImage = loadImage("./images/Rocket.png");
  planetImage = loadImage("./images/planet.png");
}

function setup() {
  engine = Engine.create();
 world = engine.world;
 var canvas = createCanvas(600,600);
 obstaclesGroup = new Group();
 planetGroup = new Group();
 rocket = createSprite(300,510,40,100);
rocket.addImage("rocket",rocketImage);
rocket.scale = 0.1;
 
 
}

function draw() {
  background(bg);  
  if(frameCount%80===0){
      createObstacles();
    }
    
      createPlanets();
    
 if(obstaclesGroup.isTouching(rocket)){
   obstaclesGroup.destroyEach();
   
 }
 if(planetGroup.isTouching(rocket)){
  planetGroup.destroyEach();
  
}
Engine.update(engine);
move();
drawSprites();
}


function createObstacles(){
  var obstacle = createSprite(0,0,1,1);
  obstacle.x = Math.round(random(50,550));
  obstacle.y = Math.round(random(50,200));
  obstacle.addImage("obstacle",obstacle_image);
  obstacle.scale = 0.07;
  obstacle.velocityY = 5
  obstaclesGroup.add(obstacle);
  if(frameCount%500===0){
    obstacle.velocityY = obstacle.velocityY + 5;
  }
}
function move(){
  if(keyDown("LEFT_ARROW")){
    rocket.x = rocket.x - 10;
    //moveSound.play();
  }
  if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x + 10;
    //moveSound.play();
  }
}

function createPlanets(){
  if(frameCount%200===0){
    var planet = createSprite(random(30,570),random(10,300),1,1);
    planet.velocityY = 5;
    planet.scale = 0.1;
    planetGroup.add(planet);
    planet.addImage(planetImage);
    
    }
  }


