var wall;
var bullet;
var speed;
var weight;
var thickness;
var bulletrightedge;
var wallleftedge;

function hasCollided(lbullet,lwall){
  bulletrightedge=lbullet.x+lbullet.width/2;
  wallleftedge=lwall.x;
  if(bulletrightedge>=wallleftedge){
 
    return true
  }
  return false;
}

function setup() {
  createCanvas(1600,400);


  speed=random(50,100);
  weight=random(400,1500);
  thickness=random(30,50);
  

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(255,255,255);
  wallleftedge=wall.x-wall.width/2;

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
 
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);
      }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }  

  drawSprites();
}

