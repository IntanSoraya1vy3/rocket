var rocketImg, rocket;
var rockImg, rock, rocksGroup;
var starImg, star, starsGroup;
var galaxy, galaxyImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  rocketImg = loadImage("rocket.png");
  rockImg = loadImage("rock.png");
  starrImg = loadImage("star.png");
  galaxyImg = loadImage("galaxy.png");
  rocksGroup=new Group();
}

function setup() {
  createCanvas(600, 600);
  rocket = createSprite(300,300);
  rocket.addImage("rocket",rocketImg);
  rocket.velocityY = 1;
  
}

function draw() {
  background(200);
  
  if(rocket.y > 400){
      rocket.y = 300
    }
    spawnRocks();
    drawSprites();
}
function spawnDoors(){
  if(frameCount%240===0){
    var rock=createSprite(200,-50);
    rock.addImage(rockImg);
    var star=createSprite(200,10);
    star.addImage(starImg);
    rock.x=Math.round(random(120,400));
    rock.velocityY=1
    star.x=rock.x
    star.velocityY=1
    rock.lifetime=800;
    star.lifetime=800;
    rocksGroup.add(rock)
    starsGroup.add(star)
  }
}