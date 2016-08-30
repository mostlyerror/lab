
const robot = require('robotjs');
let mouse = robot.getMousePos();
let hex = robot.getPixelColor(mouse.x, mouse.y);
console.log(`#${hex} at x:${mouse.x} y:${mouse.y}`);



