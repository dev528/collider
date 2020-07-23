var r1,r2


function setup() {
  
createCanvas(800,400);
  

r1=createSprite(400, 200, 80, 30);


r1.debug=true
r1.velocityY=4
r2=createSprite(400, 400, 80, 30);

r2.debug=true
r2.velocityY=-4
}


function draw() {
  

background("black");  
  

if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r1.width/2+r2.width/2){
r1.velocityX=r1.velocityX*(-1)
r2.velocityX=r2.velocityX*(-1)
}
else if(r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r1.height/2+r2.height/2){
r1.velocityY=r1.velociyY*(-1)
r2.velocityY=r2.velocityY*(-1)
}

drawSprites();
}