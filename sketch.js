var cat,mouse;
var catImage,mouseImage,catRunning,mouseRunning;

function preload() {
    catImage = loadImage ("cat1.png");
    catRunning = loadAnimation("cat2.png","cat3.png","cat4.png");

    mouseImage = loadImage("mouse1.png");
    mouseRunning = loadAnimation("mouse2.png","mouse3.png","mouse4,png");

}

function setup(){
    createCanvas(1000,800);

    cat = createSprite (500,400,30,30);
    cat = loadImage (catImage);


    mouse = createSprite (300,800,30,30);
    mouse = loadImage (mouseImage);
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    text(mouseX + ',' + mouseY,10,45);




    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation (catRunning)
      cat.changeAnimation("catRunning");

  }


}
