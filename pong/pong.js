
var canvas,
    context,
    interval,
    paddleHeight = 200, paddleWidth = 20,
    ballSize = 10,
    ballX, ballY, ballSpeedX = 6, ballSpeedY = 9,
    framesPerSecond = 30,
    leftPlayerPoints = rightPlayerPoints = 0,
    leftPaddleY, rightPaddleY;

function reset () {
    clearInterval(interval);
    canvas = document.getElementById('gameCanvas');
    context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    ballX = canvas.width/2 - ballSize/2,
    ballY = canvas.height/2 - ballSize/2;
    leftPaddleY = rightPaddleY = canvas.height/2;

    interval = setInterval(function () {
        move();
        draw();
    }, 1000/framesPerSecond);
};


function move () {

    // left paddle collision check
    var lptop = leftPaddleY - paddleHeight/2;
    var lpbot = leftPaddleY + paddleHeight/2;

    if (ballX >= canvas.width-paddleWidth) {
        ballSpeedX = -ballSpeedX;
        if (!((lptop < ballY) && (lpbot > ballY))) {
            leftPlayerPoints++;
            //console.log('Score | ', leftPlayerPoints, rightPlayerPoints);
            reset();
        }
    }

    // right paddle collision check
    var rptop = rightPaddleY - paddleHeight/2;
    var rpbot = rightPaddleY + paddleHeight/2;

    if (ballX <= paddleWidth) {
        ballSpeedX = -ballSpeedX;
        if (!((rptop < ballY) && (rpbot > ballY))) {
            rightPlayerPoints++;
            //console.log('Score | ', leftPlayerPoints, rightPlayerPoints);
            reset();
        }
    }

    if (ballY > canvas.height) ballSpeedY = -ballSpeedY;

    if (ballY < 0) ballSpeedY = -ballSpeedY;
    
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

function draw () {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'white';

    // paddles
    context.fillRect(0, canvas.height/2 - paddleHeight/2, paddleWidth, paddleHeight);
    context.fillRect(canvas.width-paddleWidth, canvas.height/2 - paddleHeight/2, paddleWidth, paddleHeight);

    //scoreboard
    context.font = "40px Verdana";
    context.textAlign = "center";
    var scoreString = leftPlayerPoints + " - " + rightPlayerPoints;
    context.fillText(scoreString, canvas.width/2, 50);

    //ball
    context.fillStyle = 'red';
    context.fillRect(ballX, ballY, ballSize, ballSize);

}

window.onload = reset;
