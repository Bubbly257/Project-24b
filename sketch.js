
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone1, stone2;
var rubber1, rubber2, rubber3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer();
	ground = new plain();

	stone1 = new stone(550, 380, 100, 100);
	stone2 = new stone(580, 500, 100, 100);

  rubber1 = new rubber(500, 500, 50);
  rubber2 = new rubber(535, 580, 35);
  rubber3 = new rubber(517, 480, 23)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('#00cccc');
  
  drawSprites();

  hammer.display();
  ground.display();

  stone1.display();
  stone2.display();

  rubber1.display();
  rubber2.display();
  rubber3.display();
}