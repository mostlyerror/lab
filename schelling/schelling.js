
function drawGrid (canvas, tile_size) {
    var ctx = canvas.getContext('2d');
    for(var x = 0; x < canvas.width; x += tile_size) {
        for(var y = 0; y < canvas.height; y += tile_size) {
            ctx.rect(x, y, tile_size, tile_size);
            ctx.stroke();
        }
    }
}

var canvas = document.getElementById('canvas');
drawGrid(canvas, 30);
