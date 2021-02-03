
var fairyBody, fairyImg,starImg, bg,fairySprite,starSprite,starBody;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;



function preload()
{
   //preload the images here
   bg = loadImage("starnight.png");
   fairyImg= loadAnimation("fairy1.png","fairy2.png");
   starImg= loadImage("star.png");
     joySound= loadSound("joyMusic.mp3");
  
}

function setup(){
  createCanvas(600,400);
  rectMode(CENTER);

  
  fairySprite = createSprite(100,280,10,10);
  fairySprite.addAnimation("fairy",fairyImg);
  fairySprite.scale=0.2;

  starSprite = createSprite(400,100,20,10);
  starSprite.addImage("star",starImg);
  starSprite.scale=0.3;

  engine = Engine.create();
  world = engine.world;

  var fairy_options={
    isStatic: true
  }

  var star_options={
    isStatic: true
  }

  fairyBody = Bodies.rectangle(100,200,50,20,fairy_options);
  World.add(world,fairyBody);

  starBody = Bodies.circle(400,100,20,star_options);
  World.add(world,starBody);

  Engine.run(engine);
}


function draw(){
  background(bg);
  Engine.update(engine);
  rectMode(CENTER);


  starSprite.x= starBody.position.x 
  starSprite.y= starBody.position.y

  if(keyDown("right")){
    fairySprite.x=fairySprite.x + 2;
  }
  if(keyDown("left")){
    fairySprite.x=fairySprite.x - 2;
  }


  drawSprites();
}

  function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       Matter.Body.setStatic(starBody,false);
       
     }
    }



