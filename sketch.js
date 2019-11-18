const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    pig1=new Pig(800,350);
    log1=new Log(800,280,300,PI/2);

    box3 = new Box(700,250,70,70);
    box4 = new Box(900,250,70,70);
    pig2=new Pig(800,250);
    log2=new Log(800,220,300,PI/2);
    ground = new Ground(500,height,1000,20);
  
    box5 = new Box(810,150,70,70);
    log3=new Log(750,120,145,PI/7);
    log4=new Log(850,120,145,-PI/7);
    bird=new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}