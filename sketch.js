//Create variables here
var dog, dogImg, happyDogImg, database, foodS, foodStock;

function preload() {
  dogImg = loadImage("Dog.png")
  happyDogImg = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dogImg)
  dog.scale = 0.25
  
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock)
}


function draw() {
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImg);

  }

  drawSprites();
  textSize(20);
  fill("white");
  text("Food Stock: " + foodS, 350, 475)

}

function readStock(data) {
  foodS = data.val();

}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}


