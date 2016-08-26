
var gl,
    shaderProgram,
    vertices;

initGL();
createShaders();
createVertices();
draw();


function initGL() {
    var canvas = document.getElementById("canvas");
    console.log(canvas);
    gl = canvas.getContext("webgl");
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1, 1, 1, 1);
}

function getShader(gl, id, type) {
    var shaderScript, theSource, currentChild, shader;

    shaderScript = document.getElementById(id);
    if (!shaderScript) return null;
    theSource = shaderScript.text;
    if (!type) {
        if (shaderScript.type == "x-shader/x-fragment") {
            type = gl.FRAGMENT_SHADER;
        } else if (shaderScript.type == "x-shader/x-vertex") {
            type = gl.VERTEX_SHADER;
        } else { // unknown shader type
            return null;
        }
    }
    shader = gl.createShader(type);
    gl.shaderSource(shader, theSource);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createShaders() {
    var vertexShader = getShader(gl, 'shader-vs');
    var fragmentShader = getShader(gl, 'shader-fs');
    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
}

function createVertices() {
    vertices = [
        -0.9, -0.9, 0.0,
        0.9, -0.9, 0.0,
        0.0, 0.9, 0.0
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var coords = gl.getAttribLocation(shaderProgram, "coords");
    gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coords);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
    gl.vertexAttrib1f(pointSize, 10);

    var color = gl.getUniformLocation(shaderProgram, "color");
    gl.uniform4f(color, 1, 0, 1, 1);
}

function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}
