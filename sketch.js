  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;
  const Constraint=Matter.Constraint;
  
  var engine, world
  var box
  var backgroundImg,platform;

  function preload(){
    getBackgroundImg();
  }
  

  function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
  ground=new Ground(600,height,1200,20);
  platform=new Ground(150,305,300,170);
  
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  log1=new LOG(810,260,300,PI/2);
  
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  
  log3=new Log(810,180,300,PI/2);
  
  box5=new Box(810,160,70,70);
  log4=new Log(760,120,150,PI/7);
  log5=new Log(870,120,150,-PI/7);
  
  //log6=new Log(230,180,80,PI/2);
  }  

function draw() {
  if (backgroundImg)
        background(backgroundImg);
  
       noStroke();
       textSize(35)
       fill("white")
  
  Engine.update(engine);
  //strokeWeight(4);
  box1.display();
  box2.display();
  ground.display();
  log1.display();
  
  box3.display();
  box4.display();
  log3.display();
  
  box5.display();
  log4.display();
  log5.display();
  
  //log6.display();
}

async function getBackgroundImg(){
    var response = await fetch ("http; //worldtimeapi.org /api/timezone/Asia/Kolkata");
     var responseJSON=await response.json();
 
  var datetime= responseJSON.datetime;
  var hour=datetime.slice(11,13);
  
  if (hour>=0660&&hour<=1900){
    
  }
}

backgroundImg=LoadImage(bg);
console.log(backgroungImg);

     