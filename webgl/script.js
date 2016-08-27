
var gl,
    shaderProgram,
    vertices,
    vertexCount = 5000;

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
    vertices = [];
    for(var i = 0; i < vertexCount; i++) {
    	vertices.push(Math.random() * 2 - 1);
    	vertices.push(Math.random() * 2 - 1);
    }

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

    var coords = gl.getAttribLocation(shaderProgram, "coords");
    // gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(coords, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coords);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var pointSize = gl.getAttribLocation(shaderProgram, "pointSize");
    gl.vertexAttrib1f(pointSize, 1);

    var color = gl.getUniformLocation(shaderProgram, "color");
    gl.uniform4f(color, 1, 0, 1, 1);
}

function draw() {
	for(var i = 0; i < vertexCount * 2; i += 2) {
		vertices[i] += Math.random() * 0.01 - 0.005;
		vertices[i+1] += Math.random() * 0.01 - 0.005;
	}
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices));
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, vertexCount);
    requestAnimationFrame(draw);
}
