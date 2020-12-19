
var backImg, pick, pickImg,knife,knifeImg, ground,enemyImg;


function preload(){
 backImg= loadImage("images/bg2.jpg");
 pickImg = loadImage("images/sad.png");
 cookiesImg = loadImage("images/cookie.png");
 enemyImg = loadImage("images/virus.png");
   }


function setup() {
  createCanvas(1200,700);

 

  pick= createSprite(455,637, 50, 50);
  pick.addImage(pickImg);
  pick.scale= 0.2;

  ground = createSprite(640,683,1400,10);
  ground.visible = false;

  energyBar = createSprite(950,80,300,25);
  lossBar = createSprite(200,80,300,25);

  cookieGroup= createGroup();
  enemyGroup = createGroup();

 score = 0; 
 score1 = 0;

  

  
  


  
}



function draw() {
  background(backImg);  

  
 if(keyDown(RIGHT_ARROW)){
  pick.x= pick.x+10;
 }

 if(keyDown(LEFT_ARROW)){
  pick.x= pick.x-10;
}

Cookie();
Enemy();

//energy increase
if(cookieGroup.isTouching(pick)){
  score = score+1;
  if(score===22){
   energy1 = createSprite(1090,80,25,25);
   energy1.shapeColor = "green";
  }

  if(score===44){
    energy2 = createSprite(1065,80,25,25);
    energy2.shapeColor = "green";
   }

   if(score===66){
    energy3 = createSprite(1040,80,25,25);
    energy3.shapeColor = "green";
   }

   if(score===88){
    energy4 = createSprite(1015,80,25,25);
    energy4.shapeColor = "green";
   }

   if(score===110){
    energy5 = createSprite(990,80,25,25);
    energy5.shapeColor = "green";
   }

   if(score===132){
    energy6 = createSprite(965,80,25,25);
    energy6.shapeColor = "green";
   }

   if(score===154){
    energy7 = createSprite(940,80,25,25);
    energy7.shapeColor = "green";
   }

   if(score===176){
    energy8 = createSprite(915,80,25,25);
    energy8.shapeColor = "green";
   }

   if(score===198){
    energy9 = createSprite(890,80,25,25);
    energy9.shapeColor = "green";
   }

   if(score===220){
    energy10 = createSprite(865,80,25,25);
    energy10.shapeColor = "green";
   }

   if(score===242){
    energy11 = createSprite(840,80,25,25);
    energy11.shapeColor = "green";
   }

   if(score===264){
    energy12 = createSprite(815,80,25,25);
    energy12.shapeColor = "green";
   }
  
}

//energy decrease
if(enemyGroup.isTouching(pick)){
  score1 = score1+1;
  if(score1===22){
   energy1 = createSprite(1090,80,25,25);
   energy1.shapeColor = "red";
  }

  if(score1===44){
    energy2 = createSprite(1065,80,25,25);
    energy2.shapeColor = "red";
   }

   if(score1===66){
    energy3 = createSprite(1040,80,25,25);
    energy3.shapeColor = "red";
   }

   if(score1===88){
    energy4 = createSprite(1015,80,25,25);
    energy4.shapeColor = "red";
   }

   if(score1===110){
    energy5 = createSprite(990,80,25,25);
    energy5.shapeColor = "red";
   }

   if(score1===132){
    energy6 = createSprite(965,80,25,25);
    energy6.shapeColor = "red";
   }

   if(score1===154){
    energy7 = createSprite(940,80,25,25);
    energy7.shapeColor = "red";
   }

   if(score1===176){
    energy8 = createSprite(915,80,25,25);
    energy8.shapeColor = "red";
   }

   if(score1===198){
    energy9 = createSprite(890,80,25,25);
    energy9.shapeColor = "red";
   }

   if(score1===220){
    energy10 = createSprite(865,80,25,25);
    energy10.shapeColor = "red";
   }

   if(score1===242){
    energy11 = createSprite(840,80,25,25);
    energy11.shapeColor = "red";
   }

   if(score1===264){
    energy12 = createSprite(815,80,25,25);
    energy12.shapeColor = "red";
   }
  
}


  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 30,30);
  text("score :"+score,600,200);
}

function Cookie(){
  if(frameCount%80===0){
    var cookie =createSprite(10,200,20,20);
    cookie.addImage("cookie",cookiesImg);
    cookie.scale = 0.3;

    cookie.x= random(20,1000);
    cookie.velocityY= 12;

    cookieGroup.add(cookie);

  }
}

function Enemy(){
  if(frameCount%100===0){
    var enemies =createSprite(10,200,20,20);
   enemy.addImage("virus",enemyImg);
   enemy.scale = 0.3;

   enemy.x= random(20,1000);
   enemy.velocityY= 12;

   enemyGroup.add(enemies);

  }
}