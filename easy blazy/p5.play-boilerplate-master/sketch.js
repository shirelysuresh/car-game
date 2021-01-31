var bullet,height
var wall,thickness

function setup() {
  background("blue")
  createbulletvas(1600,400);
  speed=random(50,100)
  weight=random(500,1500)
  thickness=random(22,83)

 bullet= createSprite(50, 200, 50, 50);
 bullet.velocityX=speed;
 bullet.shapeColor=color("pink")
 wall=createSprite(1500,200,thickness,190);
 wall.shapeColor=color("blue")

 
 }



function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0
    var deformation=0.5* weight * speed  * speed/22500
    if(deformation>180)
    {
    bullet.shapeColor=color("red")
  
 
    }
    
    if(deformation<180 && deformation>100)
    {
    bullet.shapeColor=color("green")
 
    }
    if(deformation<100)
    {
      bullet.shapeColor=color("yellow")
    }

    function hascollided(bullet,wall){
      bulletRightEdge=lbullet.x+bullet.width;
      wallLeftEdge=lwall.x;
      if(bulletRightEdge>= wallLeftEdge)
      {
        return true
      }
        return false;
  
    }
    if(hascollided(bullet,wall))
    {
      bullet.velocityX=0
      var damage=0.5* weight * speed  * speed/(thickness*thickness*thickness);

      if(damage>10)
      {
        wall.shapeColor=color("brown")
      }

      if(damage<10)
      {
        wall.shapeColor=color("black")
      }
    }

    }
    drawSprites();
  }
