var mar_im, mar;
var barco,barco_an;

function preload(){
  mar_im=loadImage("sea.png");
  barco_an=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  mar=createSprite(200,180,400,20);
  
  mar.addImage("mar",mar_im);
  mar.scale=0.5;
  mar.velocityX=-2;

  barco=createSprite(100,250,20,40);
  barco.scale=0.1;
  barco.addAnimation("barco",barco_an);
}

function draw() {
  background("blue");

  
  mar.addImage("mar",mar_im);

  if(mar.x<0){
    mar.x=mar.width/2;
  }

 drawSprites();
}