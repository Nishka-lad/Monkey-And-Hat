var h1;
var h2;
var h3;
var score=0;
var l=3;
var gameState="Start"
var b1;
var mk,man

function preload(){
    mk=loadAnimation("01.png","02.png","03.png","04.png")
    ma=loadAnimation("0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png")
    ma1=loadAnimation("00.jpg","11.jpg","22.jpg","33.jpg","44.jpg","55.jpg","66.jpg","77.jpg")
    bg1=loadImage("bg1.jpg");
    bg2=loadImage("bg2.jpg");
    hh1=loadImage("h1.png");
    hh2=loadImage("h2.png");
    hh3=loadImage("h3.png");
    li=loadImage("line.png");
}
function setup(){
    createCanvas(1500,700);
    man=createSprite(1500/2, 670);
    man.addAnimation("man",ma);
  man.visible=false
    line=createSprite(805,240);
    line.addImage("lin",li);
    h1=new Group();
    h2=new Group();
    h3=new Group();
    mo=new Group();
    b1=createButton("Start");
    b1.position(1500/2,550);
    b1.style('background','LightSalmon ');
    b1.style('width','100px');
    b1.style('height','50px');
    b1.style('font-size','30px')
}

function draw(){
    if(gameState === "Start"){
        background(bg1);
        //stroke(5)
        fill(0, 77, 0)
        textFont("monotype corsiva")
        textSize(80);
        text("Monkeys & Hats", 550, 200);
        
        textSize(40)
        fill(0, 51, 0)
        text("Aim- Catch the hats before the monkey does", 500, 300);
        text("Make sure to save your life from the monkeys", 500,350);
        text("Brown Hat is worth 1 point", 500,400);
        text("Red Hat is worth 2 points", 500,450);
        text("White Hat is worth 3 points", 500,500);
        drawSprites();
       
    }
    b1.mousePressed(playing)
    function playing(){
        gameState="Play"
        b1.hide();
   man.visible=true
      line.visible=false
    }
    if(gameState==="Play"){
        background(bg2);
        drawSprites();
        b1.hide();
    

edges=createEdgeSprites();
man.bounceOff(edges);
if (keyDown(LEFT_ARROW)){
    man.x+=-20;
  man.changeAnimation("man",ma1)

}
if (keyDown(RIGHT_ARROW)){
  // man.setAnimation("man",ma)
    man.x+=20;
    }
    hat1();
    hat2();
    hat3();
    if (h1.isTouching(man)){
        h1.destroyEach();
        score=score+1;
    }
    if (h2.isTouching(man)){
        h2.destroyEach();
        score=score+2;
    }
    if (h3.isTouching(man)){
        h3.destroyEach();
        score=score+3;
    }
    if (score>=2){
        monk();
    }
    if (mo.isTouching(h1)){
        h1.destroyEach();
        l=l-1;
    }
    if (mo.isTouching(h2)){
        h2.destroyEach();
        l=l-1;
    }
    if (mo.isTouching(h3)){
        h3.destroyEach();
        l=l-1;
    }
    textSize(30);
    fill("black");
    textFont("baskervill old face");
    text("Lives👉"+l,50,30);
    text("Score👉"+score,200,30);
    }
    if(l<=0){
        gameState="END"
    }
    if(gameState==="END"){
        background(bg2);
        textSize(60);
        textFont("monotype corsiva")
        fill("DarkGreen")
        text("Your Score="+score,100,200);
        text("Monkeys have taken all your hats!!", 100,300)
        text("You Lose😒😒", 100,400)
    }
}

function hat1(){
if (frameCount%100===0){
    h01=createSprite(Math.round(random(50,1250)),0);
    h01.addImage(hh1)
    h01.scale=0.2
    h01.velocityY=10;
    h01.lifetime=700;
    h1.add(h01);
}
}
function hat2(){
    if (frameCount%150===0){
        h02=createSprite(Math.round(random(30,1000)),0);
        h02.addImage(hh2)
        h02.scale=0.4
        h02.velocityY=13;
        h02.lifetime=700;
        h2.add(h02);
    }
}
function hat3(){
    if (frameCount%200===0){
        h03=createSprite(Math.round(random(20,1055)),0);
        h03.addImage(hh3)
        h03.scale=0.4
        h03.velocityY=16;
        h03.lifetime=700;
        h3.add(h03);
    }
}
function monk(){
    if (frameCount%400===0){
        m=createSprite(0,650);
        m.addAnimation("lab",mk)
        m.shapeColor="brown";
        m.velocityX=5;
        m.lifetime=1550;
        mo.add(m);
    }
}