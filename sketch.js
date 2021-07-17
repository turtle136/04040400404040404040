//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;

var engine,world;

//the background
var backgroundI;
var bg;
//np or npc
var player;
var playerF1,playerF2;
var playerB1,playerB2;
var playerR1,playerR2;
var playerL1,playerL2;

var water1;


function preload(){
    //the background image
    backgroundI = loadImage("images/background.png");

   //the players images facing forward
  playerF1  = loadAnimation("images/stanstill_torwards.png");
  playerF2  = loadAnimation("images/walking_torwards.png","images/torwards_player.png","images/walkings_torwards.png");

  //the player going backswards facing
  playerB1  = loadAnimation("images/backwards_manacin.png");
  playerB2  = loadAnimation("images/walking_backwards.png","images/backwards_standstill.png","images/backwards_walking.png");

  //the player is going to the right
  playerR1  = loadAnimation("images/right_manacin.png");
  playerR2  = loadAnimation("images/right_walking.png","images/right_stanstill.png","images/right_walkings.png");

  //the player is going to the left
  playerL1  = loadAnimation("images/left_manacin.png");
  playerL2  = loadAnimation("images/left_walking.png","images/left_standstill.png","images/left_walkings.png");


}


function setup() {
  createCanvas(1000,650);
  //engine = Engine.create();
  //world = engine.world;
  //Engine.run(engine);

    

  bg = createSprite(500,325,1000,650);
  bg.addImage("it's the background for proto",backgroundI);
  bg.scale = 15;

   water1 = createSprite(500,400,400,150);
   water1.shapeColor = "blue"
   
    player = createSprite(400,200,20,20);

    //facing torwards the screen animation
    player.addAnimation("facing forward standstill",playerF1);
    player.addAnimation("moving",playerF2);

    //facing the opposite of original text
    player.addAnimation("facing backwards standstill",playerB1);
    player.addAnimation("backwords moving",playerB2);

    //player facing to the right
    player.addAnimation("facing right standstill",playerR1);
    player.addAnimation("right moving",playerR2);

    //player facing to the left
    player.addAnimation("facing left standstill",playerL1);
    player.addAnimation("left moving",playerL2);

    
  
}

function draw() {
  background(0);
  imageMode(CENTER);
  //Engine.update(engine);


    //water1.display();
    if(player.isTouching(water1)){

    }

  //keyFunctions();
 
    if(keyIsDown(UP_ARROW)){
      camera.position.y -=3;
      player.y -=3;
      player.changeAnimation("backwords moving",playerB2);
      
    }


  if(keyIsDown(DOWN_ARROW)){
      camera.position.y +=3;
      player.y +=3;
      player.changeAnimation("moving",playerF2);
    }



  if(keyIsDown(RIGHT_ARROW)){
      camera.position.x +=3;
      player.x +=3;
      player.changeAnimation("right moving",playerR2);
    }


  if(keyIsDown(LEFT_ARROW)){
      camera.position.x -=3;
      player.x -=3;
      player.changeAnimation("left moving",playerL2);
    }


  drawSprites();
}


/*function keyFunctions(){
  //var IDK = Math.round(1,4);
   //switch (IDK)  {
    //going torwards oposite of you going up
    //case 1: 
    upMoving();
    //break;
    //going torwards you!! going down
    //case 2: 
    downMoving();
    //break;
    //going torwards the right
    //case 3: 
    rightMoving();
    // break;
      //going torwards left
    //case 4:
    leftMoving();
    //break;
    //default: break;
   // }
}
*/





