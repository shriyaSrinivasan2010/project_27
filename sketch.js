
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	ground = new roof(300,100,300,20);
	ball1 = new ball(220,400,40)
	ball2 = new ball(260,400,40)
	ball3 = new ball(300,400,40)
	ball4 = new ball(340,400,40)
	ball5 = new ball(380,400,40)

	rope1 = new rope(ball1.body,ground.body,-80,0)
	rope2 = new rope(ball2.body,ground.body,-40,0)
	rope3 = new rope(ball3.body,ground.body, 0,0)
	rope4 = new rope(ball4.body,ground.body,+40,0)
	rope5 = new rope(ball5.body,ground.body,+80,0)
	
  
}
function draw() {
  background(0);
  rectMode(CENTER);

  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
 
}