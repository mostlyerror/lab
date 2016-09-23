
var canvas,
    context,
    interval,
    paddleHeight = 200, paddleWidth = 20,
    ballSize = 10,
    ballX, ballY, ballSpeedX = 10, ballSpeedY = 10,
    framesPerSecond = 30;

function reset () {
    console.log('reset');

    clearInterval(interval);
    canvas = document.getElementById('gameCanvas');
    context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    ballX = canvas.width/2 - ballSize/2,
    ballY = canvas.height/2 - ballSize/2;

    interval = setInterval(function () {
        move();
        draw();
    }, 1000/framesPerSecond);
};


function move () {
    if (ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

function draw () {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'white';
    context.fillRect(10, canvas.height/2 - paddleHeight/2, paddleWidth, paddleHeight);
    context.fillRect(canvas.width-30, canvas.height/2 - paddleHeight/2, paddleWidth, paddleHeight);

    context.fillRect(ballX, ballY, ballSize, ballSize);
}

window.onload = reset;
