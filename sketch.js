
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivalTime=0

function preload(){
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.13
  
  ground=createSprite(400,350,900,10)
  ground.x=ground.width/2
}


function draw() {
  background('lime')
  
  stroke('black')
  textSize(20)
  fill('black')
  survivalTime=Math.ceil(frameCount/frameRate())
   text("Survival Time: "+survivalTime,100,50)
  
  if(ground.x>0){
  ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+1.1
  
  monkey.collide(ground)
  BananaOP()
  ObstacleOP()
  drawSprites()
}

 function BananaOP(){
 if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200
  }
}
function ObstacleOP(){
 if (frameCount % 80 === 0) {
    var obstacle = createSprite(600,330,40,10)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200
    ground.depth = obstacle.depth+1
  }
}
