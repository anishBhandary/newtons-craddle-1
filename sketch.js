const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ball,ground,rope;


function setup() {
  createCanvas(3000, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 380, 1200, 20);
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);

  ball = new Ball(200, 200, 80, 80);

  rope = new Rope(ball.body, { x: 500, y: 50 });

  ball1 = new Ball(500, 200, 80, 80);

  rope1 = new Rope(ball1.body, { x: 500, y: 50 });

  ball2 = new Ball(200, 200, 80, 80);

  rope2 = new Rope(ball2.body, { x: 500, y: 50 });

  ball3 = new Ball(200, 200, 80, 80);

  rope3 = new Rope(ball3.body, { x: 500, y: 50 });

  ball4 = new Ball(500, 200, 80, 80);

  rope4 = new Rope(ball4.body, { x: 500, y: 50 });

  ball5 = new Ball(200, 200, 80, 80);

  rope5 = new Rope(ball5.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);

  ground.display();

  //box1.display();
  //box2.display();
  //box3.display();
  //box4.display()
  //box5.display()
  //box6.display()
  //box7.display()
  //box8.display()
  //box9.display()
  //box10.display()
  //box11.display()
  //box12.display()
  //box13.display()
  //box14.display()
  //box15.display()
  //box16.display()
  //box17.display()
  //box18.display()
  //box19.display()
  //box20.display()
  
  ball.display();
  rope.display();
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();

 
  text("Dragg the mouse to play",400,80);
  textSize("20")
}

function mouseDragged(){
  
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  //Matter.Body.setPosition(ball2.body, {x: mouseX , y: mouseY});


}


function mouseReleased(){
slingshot.fly();
gameState = "launched";
}

