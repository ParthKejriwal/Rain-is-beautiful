const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain,rainImage;

function preload(){
//rainImage=loadImage("rain/rain.webp");
}

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 // rain=new Rain(random(50,750),0);
 // rain=  createSprite(400, 200, 50, 50);
 // rain.push(new Rain(rain.x, rain.y));
 // for (var i = 0; i <1000; i++){
  //rain[i]=new Rain(random(50,750),10);
 // rain.velocityY=5
// rain.velocityY=5;
  // }

}

function draw() {
  background(0); 
  if( frameCount%2===0){
  rain=  createSprite(random(50,750), 5, 5, 30);
  rain.velocityY=13;
  rain.shapeColor="red"
 // rain.addImage(rainImage);
  }
 // for (var i = 0; i<1000; i++){
    
   //  }
  
  Engine.update(engine); 
  fill(200);
 
 
 // rain.display();
 drawSprites();
}
