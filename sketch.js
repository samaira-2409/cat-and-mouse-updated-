var bg,bgImg;
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;



function preload() {
    //load the images here
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg=loadAnimation("images/mouse1.png");
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png")
    bgImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //bg = createSprite(0,0,1000,800);
    //bg.addImage("background",bgImg);

    //create tom and jerry sprites here
    cat = createSprite(850,600);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.scale = 0.2;
    mouse.addAnimation("mouse",mouseImg);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catHappy",catImg3);
        cat.x = 350;
        cat.changeAnimation("catHappy");
        mouse.addAnimation("mouseHappy",mouseImg3);
       mouse.changeAnimation("mouseHappy");
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      
  }
  /*if(keyCode === LEFT_ARROW){
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

  }*/


}

