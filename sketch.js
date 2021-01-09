const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine, world;

function setup(){
    createCanvas(500,500);
    engine=Engine.create();
    world=engine.world;

    base=new Ground(250,475,500,50);
    circle=new Ball(250,250,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);

    base.display();
    circle.display();
}