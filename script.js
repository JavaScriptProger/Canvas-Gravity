var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;
var platformW = 150;
var platformH = 60;
var platformX = width / 2 - platformW / 2;
var platformY = height - platformH;
var velocity = 3;
var dy = 0;
var ballSize = 50;
var ballX = canvas.width / 2 - ballSize / 2;
var ballY = 3;
var ball = new Image();
var platform = new Image();
var background = new Image();
ball.src = "images/RedBall.png";
platform.src = "images/platform.png";
background.src = "images/background.png"
var onGround = 0;

var collisionWithPlatform = function(){
    if(platformX > ballX - platformW && platformX < ballX + platformW){
        if(platformY > ballY - platformH && platformY < ballY + platformH){
            return 1;
        }
    }
    return 0;
}

var MainLoop = function(){
    ctx.clearRect(0,0,width,height);
    ballY += dy;
    ctx.drawImage(background,0,0);
    ctx.drawImage(platform,platformX,platformY,platformW,platformH);
    ctx.drawImage(ball,ballX,ballY,ballSize,ballSize);
    dy = velocity;
    if(collisionWithPlatform()) {
        if(!onGround) ballY -= dy;
        onGround = 1;
        velocity = 0;
    }
    else velocity++;
    requestAnimationFrame(MainLoop);
}

MainLoop();