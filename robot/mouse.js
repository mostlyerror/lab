var robot = require('robotjs');

var {width, height} = robot.getScreenSize();
console.log(`width ${width}\t height ${height}`);

robot.setMouseDelay(2);
var twoPI = Math.PI * 2.0;
height = (height / 2) - 10;
for (var x = 0; x < width; x++)
{
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
}
