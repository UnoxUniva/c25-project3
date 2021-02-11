
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const Body = Matter.Body;

var ground
var paper1
var side1,side2,side3



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    ground = new Ground(600,390,1200,20) 
    paper1= new paper(100,100,30)
    side1= new Dustbin(1000,350,20,150)
    side2= new Dustbin(1190,350,20,150)
    side3= new Dustbin(1095,390,170,20)
    
  Engine.run(engine);
  
  
}


function draw() {
  background("white");
  
  
  paper1.display()
  ground.display()
  side1.display()
  side2.display()
  side3.display()
  

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85,y:-100})
  }
}



