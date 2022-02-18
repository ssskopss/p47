var fire,robot
var score = 0;
var life =5;
function preload(){
  robotImg= loadImage("Yanshee robot.png")
  fImg = loadImage("402-4026126_fireball-transparent-png-sprite-fireball-clipart.png")
}

function setup() {
  createCanvas(800,400);
  robot=createSprite(50,360, 50, 50);
  robot.debug=true
// fireball=createSprite(750,random(100,300), 10, 10);
fireg=createGroup

}

function draw() {
  fireSpawner()
  fireSpawner2()
  fireSpawner3()

  if(keyDown("UP_ARROW")||touches.length>0){
    robot.y = robot.y-random(5,50)
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   robot.y = robot.y+random(5,50)
  }
  if(keyDown("left_ARROW")||touches.length>0){
    score++
    fire.velocityX=fire.velocityX+ -2
   }
   if(life=0){
     robot.destroy()
   }

  robot.addImage(robotImg)
  robot.scale=0.09
  //fireball.velocityx=9
  background("red");  

  //if(robot.isTouching(fireg)){
    //fireg.destroy()
    //score=score-1
    //life--
  //}

if(life=0){
  robot.destroy()
  fireg.destroy()


}
//if(fireg.X>50){
  //score++
//}
text("score:"+score,200,100)
text("life:"+life,120,100)
if(score%5 == 0){
  fire.velocityX=fire.velocityX+ -2
}
  drawSprites();
}

function fireSpawner(){
  if(frameCount%65 == 0){
  fire = createSprite(windowWidth-50,random(50,350),10,10)
  fire.velocityX=-5
  fire.lifetime =800
 fire.debug=true
//fireg.add(fire);
  }
  }

  function fireSpawner2(){
    if(frameCount%65 == 0){
    fire2 = createSprite(windowWidth-50,random(50,350),10,10)
    fire2.velocityX=-10
    fire2.lifetime =800
   fire2.debug=true
  //fireg.add(fire2);
    }
    }

    function fireSpawner3(){
      if(frameCount%65 == 0){
      fire3 = createSprite(windowWidth-50,random(50,350),10,10)
      fire3.velocityX=-20
      fire3.lifetime =800
     fire3.debug=true
   // fireg.add(fire3);
      }
      }