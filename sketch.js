const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var backgroundImg;
var snow;
var snowBall;
var player;
var music;

function preload(){
  backgroundImg = loadImage("snow3.jpg");
  snowBall = loadImage("SnowBall.png");
  music = loadSound("Moon Base.mp3")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  snow = new Snow(200,0,70,70);
    
  Engine.run(engine);

  player = createSprite(500,330,40,40);
  player.addImage(snowBall);

}

function SpawnSnow(){
  if(frameCount%40 === 0){
    snow = new Snow(Math.round(random(50,750)),0,70,70);
  }
}

function draw() {
  background(backgroundImg);
 
  SpawnSnow();
  snow.display();

  textSize(28);
  fill(0);  
  text("Press Q To Play Music",250,40);
  text("Press F To Stop The Music",225,70);

  drawSprites();
}

function keyPressed(){

  if(keyCode === 65){
    player.x = player.x-30;
  }

  if(keyCode === 68){
    player.x = player.x+30;
  }

  if(keyCode === 70){
    music.stop();
  }

  if(keyCode === 81){
    music.play();
    music.loop();
    music.Volume(0);
  }
}

