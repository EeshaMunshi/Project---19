var girlImg, girl;
var carsGroup, car1, car2;
var roadImg, road;
var PLAY = 1;
var END = 0;
var gameState = PLAY;




function preload(){
girlImg = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png");
roadImg = loadImage("road.jpg");
car1 = loadImage("car1.png");
car2 = loadImage("car2.png");

}

function setup() {
 createCanvas(600,200);

 road = createSprite(300,100);
 road.addImage("road", roadImg);
 road.x = road.width /2;
 

 girl = createSprite(50,130,20,50);
 girl.addAnimation("running",girlImg);
girl.scale = 0.6;

 carsGroup = createGroup();

 girl.setCollider("circle",0,0,30);
girl.debug = false;


}

function draw() {
    background(180);

   
  
  console.log("this is ",gameState)
  
  
  if(gameState === PLAY){

   road.velocityX = -4;
    
    
    
    if (road.x < 280){
     road.x = road.width/2;
    }

    if(keyDown("UP_ARROW")) {
        girl.y -= 2;
    }

    if(keyDown("DOWN_ARROW")) {
        girl.y += 2;
    }
    
  
    spawnCars();
    
    if(carsGroup.isTouching(girl)){
        gameState = END;
    }
  
   else if (gameState === END) {

    
     road.velocityX = 0;
     
     carsGroup.setVelocityXEach(0);
    

   carsGroup.setLifetimeEach(-1);
    

     girl.velocityY = 0;
   }
   

    drawSprites();
}
}

function spawnCars(){
    if (frameCount % 60 === 0){
      var car = createSprite(400,165,10,40);
      car.velocityX = -6;
    
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: car.addImage(car1);
                 break;
         case 2: car.addImage(car2);
                 break;
        
         
       }
       car.scale = 0.1;;
       car.lifetime = 300;
      
     
      carsGroup.add(car);
    }
   }
    

