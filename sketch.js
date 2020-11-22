const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;
//Declare all the variable
var Bluro;
var ast1, ast2, ast3, ast4;
var bomb1, bomb2, bomb3, bomb4, bomb5, bomb6;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12;
var border;

function setup() {
  createCanvas(displayWidth*1.33,displayHeight*1.12);
  engine = Engine.create();
  world = engine.world;
//White border
  var options={
    isStatic:true
}

border = Bodies.rectangle(displayWidth/4,displayHeight/4,displayWidth/4,displayHeight/4,options);
World.add(world,border);



  ast1 = new Ast(200,200,displayWidth/2,displayHeight/2);
  ast2 = new Ast(300,300,displayWidth/2,displayHeight/2);
  ast3 = new Ast(400,400,displayWidth/2,displayHeight/2);
  ast4 = new Ast(1000,500,displayWidth/2,displayHeight/2);
  Engine.run(engine);
}


function draw() {
  background(0,0,70);
  rectMode(CENTER);
  stroke("white");
  strokeWeight(10);
  noFill();
  rect(border.position.x, border.position.y,displayWidth/4,displayHeight/4);
  /*ast1.display();
  ast2.display();
  ast3.display();
  ast4.display();*/

}