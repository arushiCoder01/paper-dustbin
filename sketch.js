
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;
var leftside,rightside,bottomside;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,690,800,10)
	paper1  = new paper(100,600,25);
	leftside = new dustbin(500,660,20,50)
	bottomside = new dustbin(550,675,80,20);
	rightside = new dustbin(600,660,20,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  leftside.display();
  bottomside.display();
  rightside.display();
 
}

function keyPressed()
{
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:140,y:175})
	}

}



