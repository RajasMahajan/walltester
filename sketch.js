var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
  speed = random(23,121);
  weight= random(30,42);
  bullet = createSprite(10,200,40,10);
  wall= createSprite(650,200,thickness,300);
  bullet.velocityX= speed;
}

function draw() {
  background("black");  
 if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){

    wall.shapeColor="red";
  }
  if(damage>10){
    wall.shapeColor="green";
  }
 }


  drawSprites();
 
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>=wallleftEdge){

    return true
  }
  else {
  return false;
  }

}