const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var ground2;
var log8,log9,log10,log11,log12,log13,log14,log15,log16,log17,log18,log19,log20;
var gameState = "onSling";
var finalScore = 0;

function preload() {
  setBackgroungImage();
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(800,height,800,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    log8 = new Box(710,300,70,70);
    log9 = new Box(750,300,70,70);
    log10 = new Box(780,300,70,70);
    log11 = new Box(810,300,70,70);
    log12 = new Box(740,300,70,70);
    log13 = new Box(750,300,70,70);
    log14 = new Box(780,300,70,70);
    log15 = new Box(810,300,70,70);
    log16 = new Box(740,300,70,70);
    log17 = new Box(810,160,70,70);
    log18 = new Box(700,320,70,70);
     log19 = new Box(920,320,70,70);
    log20 = new Box(700,240,70,70);
    bird = new Bird(200,50);
  
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    
}

function draw(){
    background(0);
    console.log(bird.body.speed);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
        slingshot.attach(bird.body);
        bird.trajectory = []
        gameState = "onSling";
    }
}

    async function setBackgroungImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var response_in_json = await response.json();
        var dateTime = response_in_json.datetime;
        var hours = dateTime.slice(11,13);
        if(hours<19 && hours>6){
            backgroundImg = loadImage("sprites/bg.png");
         }
        else{
             backgroundImg = loadImage("sprites/bg2.jpg");
        }
    }
