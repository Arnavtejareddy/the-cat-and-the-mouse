var cat,mouse;
var garden;
var catImage;
var mouseImage;
var gardenImage;
var cat_movingImage;
var catImg2
function preload() {
    catImage=loadImage("images/cat1.png");
    mouseImage=loadImage("images/mouse1.png");
gardenImage=loadImage("images/garden.png");
catImg2=loadImage("images/cat2.png",);
catImg3=loadImage("images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
garden=createSprite(500,500,1000,800);
garden.addImage("gdn",gardenImage);

cat=createSprite(840,700,40,40);
cat.addImage("cati",catImage);
cat.scale=0.2;

mouse=createSprite(240,750,20,20);
mouse.addImage("mousei",mouseImage);
mouse.scale=0.1;




}

function draw() {

    background(255);
    


    if(cat.isTouching(mouse)){
        cat.velocityx=0;
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
    }


    
    

    
    drawSprites();
}


function keyPressed(){

 if(keyCode===LEFT_ARROW) {
     cat.velocityX=-5;
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
 }


}
