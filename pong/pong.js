
var canvas,
    context,
    interval,
    paddleHeight = 150, paddleWidth = 20,
    ballSize = 10,
    ballX, ballY, ballSpeedX = 6, ballSpeedY = 9,
    framesPerSecond = 30,
    leftPlayerPoints = rightPlayerPoints = 0,
    leftPaddleY, rightPaddleY,
    lptop, lpbot, rptop, rpbot,
    scoreString;

function reset () {
    clearInterval(interval);
    canvas = document.getElementById('gameCanvas');
    context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    ballX = canvas.width/2;
    ballY = canvas.height/2;
    rightPaddleY = rightPaddleY = canvas.height/2;

    interval = setInterval(function () {
        move();
        draw();
    }, 1000/framesPerSecond);
    
};

function move () {
    lptop = leftPaddleY - paddleHeight/2;
    lpbot = leftPaddleY + paddleHeight/2;

    rptop = rightPaddleY - paddleHeight/2;
    rpbot = rightPaddleY + paddleHeight/2;

    // left paddle collision check
    if ((ballX - ballSize/2) < paddleWidth) {
        ballSpeedX = -ballSpeedX;
        if (!((lptop < ballY) && (lpbot > ballY))) {
            leftPlayerPoints++;
            reset();
        }
    }

    // right paddle collision check
    if ((ballX + ballSize/2) > canvas.width-paddleWidth) {
        ballSpeedX = -ballSpeedX;
        if (!((rptop < ballY) && (rpbot > ballY))) {
            rightPlayerPoints++;
            reset();
        }
    }

    if (ballY > canvas.height) ballSpeedY = -ballSpeedY;

    if (ballY < 0) ballSpeedY = -ballSpeedY;
    
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

function draw () {
    // clear
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // paddles
    context.fillStyle = 'white';
    context.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    context.fillRect(canvas.width-paddleWidth, canvas.height/2 - paddleHeight/2, paddleWidth, paddleHeight);

    //scoreboard
    context.font = "40px Verdana";
    context.textAlign = "center";
    scoreString = leftPlayerPoints + " - " + rightPlayerPoints;
    context.fillText(scoreString, canvas.width/2, 50);

    //ball
    context.fillStyle = 'red';
    context.fillRect(ballX, ballY, ballSize, ballSize);
}

document.onmousemove = function (e) { 
    leftPaddleY = e.clientY - paddleHeight/2;

    if (e.clientY < paddleHeight/2) {
        leftPaddleY = 0;
    }

    if (e.clientY > (canvas.height - paddleHeight/2)) { 
        leftPaddleY = canvas.height - paddleHeight;
    }

};

window.onload = reset;

