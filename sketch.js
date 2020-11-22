const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ouEengine, ourWorld,ground;
var ball, ball2;

function setup(){

    createCanvas(400,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world;

    var ground_options = {
        isStatic:true
    }
     
    ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(ourWorld,ground);
     
    var ballOptions = {
        restitution : 1.0
    }
    ball = Bodies.circle(200,100,20,ballOptions);
    World.add(ourWorld,ball);
    var ballOptions2 = {
        restitution : 0.5
    }
    ball2 = Bodies.circle(100,100,20,ballOptions2);
    World.add(ourWorld,ball2);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    fill ("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill ("green");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20,20);


   
}