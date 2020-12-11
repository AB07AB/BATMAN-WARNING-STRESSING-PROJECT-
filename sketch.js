const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxDrops=100;

var drops=[]

function preload(){
    
}

function setup(){
   createCanvas(500,800);

   engine = Engine.create();
   world = engine.world;

   if(frameCount%60===0){
       for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500), random(0,500)))
       }
   }
    
}

function draw(){
    background(200)
    
    drawSprites();

    for(var i = 0; i<maxDrops; i++){
      drops[i].display();
      drops[i].update();
    }
}   

