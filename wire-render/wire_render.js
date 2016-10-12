var canvas = document.getElementById('canvas');
canvas.width = 640;
canvas.height = 480;

var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// don't have a direct pixel manipulator function in canvas
function setPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
}

function swap(a, b) {
    return [b, a];
}

function line(x0, y0, x1, y1, color) {
    var steep = false;
    if (Math.abs(x0 - x1) <  Math.abs(y0-y1)) { // transpose if line too steep
        [x0, y0] = swap(x0, y0);
        [x1, y1] = swap(x1, y1);
        steep = true;
    }
    if (x0 > x1) { // make it left-to-right?
        [x0, x1] = swap(x0, x1);
        [y0, y1] = swap(y0, y1);
    }

    var dx = x1 - x0,
        dy = y1 - y0,
        derror2 = Math.abs(dy) * 2,
        error2 = 0,
        y = y0;

    for (var x = 0; x <= x1; x++) {
        if (steep) {
            setPixel(y, x, color);
        } else {
            setPixel(x, y, color);
        }

        error2 += derror2;
        if (error2 > dx) {
            y += (y1 > y0 ? 1 : -1);
            error2 -= dx * 2;
        }
    }
}

line(13, 20, 80, 40, 'white');
line(20, 13, 40, 80, 'red');
line(80, 40, 13, 20, 'red');
