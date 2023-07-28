var box;
var box2;

function setup() {
 createCanvas(400,400);
 box=createSprite(200,200,30,30)
 box2=createSprite(150,150,30,30)  
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x +=2;
    background("green")
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -=2;
    background("red")
    
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -=2;
    background("yellow")
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y +=2;
    background("blue")
  }
  if (box.isTouching(box2)) {
    box2.destroy();
    fill("darkPink")
    textSize(70)
    textAlign("center")
    text("você ganhou",200,200) 
  }

  drawSprites();
  textSize(40)
  textAlign("center")
  text("destrua a caixa",150,100)
}




