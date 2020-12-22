const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine,myworld;
var object;
var ground;
var box1,box2;;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //here you are creating ur own engine
  myworld = myengine.world;  //you have created a world of your own for this projct

  //creating object of Box class by using the constructor
   box1 = new Box(200,200,50,50);
   box2 = new Box(240,100,50,50);
   ground = new Ground (200,380,400,15) 

}

function draw() {
  background("black");
  Engine.update(myengine); //updating Matter.js engine about our engine
 
  push();
  fill("red");
  box1.display();
  box2.display();
  pop();
  ground.display();

    

  
  //creating the ball object
 
}