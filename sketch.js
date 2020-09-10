const Engine = Matter.Engine
const World  =  Matter.World  
const Bodies  =   Matter.Bodies  
const Constraint =  Matter.Constraint
const Render = Matter.Render;


var world,engine
var backgroundimg;

var boy;

var i;

var maxdrops = 100;

var drops = [];

var thunder1, thunder2, thunder3;

var thunder,thunderCreatedFrame = 0;

var rand;

function preload(){
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");  
}

function setup(){
    engine = Engine.create()
  world = engine.world     

  Canvas = createCanvas(1200,800);

    boy = new umerella(560,600,50)

    if(frameCount%100===0){
      for( i=0; i<maxdrops;i++){
        drops.push(new drop(random(1000,1200),random(0,800)));
       }
      }
    }
function draw(){

    background(0)

    Engine.update(engine)
 
     rand = Math.round(random(1,2));
    if(frameCount%80===0){
      thunderCreatedFrame = frameCount;
     thunder = createSprite(random(600,1200),random(600,800),10,10);
     switch(rand){
       case 1 : thunder.addImage(thunder1, "thunder1.png");
       break;
       case 2 : thunder.addImage(thunder2);
       break;
       case 3 : thunder.addImage(thunder3);
       break;
       default : break;
     }
     console.log(thunderCreatedFrame);
    }

   // if(thunderCreatedFrame + 20 === frameCount ){
   //   thunder.destroy();
   //}
   if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

    for( i=0; i<maxdrops;i++){
      drops[i].display();
      drops[i].update();
    }

    boy.display();

    console.log(mouseX,mouseY);
}   

