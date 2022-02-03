var player;
var playerImg,playerjumpImg,playerrunImg,doorImg;
var door

function preload(){
playerImg= loadImage("assets/player.png");
playerjumpImg = loadImage("assets/player-jumping.png")
playerrunImg = loadAnimation("assets/player-running.png","assets/player-running 2.png")
doorImg = loadImage("assets/door.png")
}

function setup(){
  createCanvas(500,400)
player = createSprite(25,100,50,10);
player.addImage(playerImg);
player.scale = 0.5

door = createSprite(490,100,50,10);
door.addImage(doorImg);
door.scale=0.3

}

function draw() {
  background("black");
  drawSprites();
  
}