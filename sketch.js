var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  var rand = Math.round(random(1,3))
  if(frameCount%80===0){
    if(rand===1){
      spawnApple()
    }
    if(rand===2){
      spawnOrange()
    }
    if(rand===3){
      spawnRed()
    }
  }

  drawSprites();
}
function spawnApple(){
  apple = createSprite(random(80,350),10,15,15)
  apple.addImage(appleImg)
  apple.velocityY=4
  apple.scale = 0.07
  rabbit.depth=apple.depth
  rabbit.depth+=1
}
function spawnOrange(){
  orange = createSprite(random(80,350),10,15,15)
  orange.addImage(orangeImg)
  orange.velocityY=4
  orange.scale = 0.08
  rabbit.depth=orange.depth
  rabbit.depth+=1
}
function spawnRed(){
  red = createSprite(random(80,350),10,15,15)
  red.addImage(redImg)
  red.velocityY=4
  red.scale = 0.06
  rabbit.depth=red.depth
  rabbit.depth+=1
}