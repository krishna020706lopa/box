var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
    }
  else{
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }
  drawSprites();
}