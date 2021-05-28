
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy;
var stone;
var connection;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(200,300,40,40);
	connection=new Connection(stone.body,{x:240,y:410})
	mango2=new Mango(1100,200,30);
	mango3=new Mango(1150,200,30);
	mango4=new Mango(1100,250,30);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  groundObject.display();
  stone.display();
  connection.display();
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
connection.fly();
}

function detectCollision(mango,stones){
var stonepos=stones.body.position;
var mangopos=mango.body.position;
var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
if(distance<=stones.r+mango.r){
Matter.Body.setStatic(mango.body,false);
console.log("esfd");
}
console.log("sdlfjsk");
}

function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:240,y:410});
connection.attach(stone.body);
}
}