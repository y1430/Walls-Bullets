var bullet,wall;
var speed,weight,thickness;

function setup() {
  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
bullet=createSprite(50,200,300,300);
bullet.shapeColor="white";
bullet.setCollider("circle",0,0,bullet.width);
bullet.scale=0.2;
bullet.debug=true;
bullet.setCollider("rectangle",0,0,bullet.width,bullet.height);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
wall.debug=false;
bullet.velocityX=speed;
}

function draw() {
createCanvas(1600,400);
background("lightblue");



if (hasCollided(bullet,wall)) {
  bullet.collide(wall);
  bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if (damage>10){
     wall.shapeColor=color(255,0,0);
   }
    
   if (damage<10) {
     wall.shapeColor=color(0,255,0);
   }
}
drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
     return true;
  }
  return false;
}