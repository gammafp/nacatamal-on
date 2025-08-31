import { createProgram, createWebGlContext } from "nacatamal-on/renders/WebGL";
import fragmentShaderSource from "nacatamal-on/renders/shaders/fragment/varyingColor.frag";
import vertexShaderSource from "nacatamal-on/renders/shaders/vertex/varyingColor.vert";
import { Matrix3 } from "nacatamal-on/math";
// ELement position
const triforcePosition = {
    x: 100,
    y: 100,
    rotate: 0,
    origin: 0.5
}
//

const canvas = document.querySelector("#canvas-with-yuka") as HTMLCanvasElement;
canvas.width = 600;
canvas.height = 600;

const gl = createWebGlContext(canvas);
const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);

const uMatrixLocation = gl.getUniformLocation(program, "u_matrix");
const uResolution = gl.getUniformLocation(program, "u_resolution");
gl.uniform2f(uResolution, gl.canvas.width, gl.canvas.height);

const matrix3 = new Matrix3();
matrix3.translate(triforcePosition.x, triforcePosition.y);
matrix3.rotate(triforcePosition.rotate);

gl.uniformMatrix3fv(uMatrixLocation, false, matrix3.toArray());

const positionBuffer = gl.createBuffer();
const aPositionLocation = gl.getAttribLocation(program, "a_position");
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.enableVertexAttribArray(aPositionLocation);

gl.vertexAttribPointer(aPositionLocation, 2, gl.FLOAT, false, 0, 0); // 2 X, Y

// 
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

// Dibujar un cuadrado
const squareData = new Float32Array([
    0, 0,
    100, 0,
    0, 100,
    100, 0,
    100, 100,
    0, 100,
 ]);
gl.bufferData(gl.ARRAY_BUFFER, squareData, gl.STATIC_DRAW);

// Color data
// a_color
const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

const aColorLocation = gl.getAttribLocation(program, "a_color");
gl.enableVertexAttribArray(aColorLocation);
gl.vertexAttribPointer(aColorLocation, 4, gl.FLOAT, false, 0, 0); // 4 RGBA

const colorData = new Float32Array([
    1, 0, 0, 1,
    1, 1, 0, 1,
    1, 0, 0, 1,
    1, 0, 1, 1,
    1, 0, 1, 1,
    1, 0, 1, 1,
]);
gl.bufferData(gl.ARRAY_BUFFER, colorData, gl.STATIC_DRAW);

// Draw the square
gl.drawArrays(gl.TRIANGLES, 0, 6);
