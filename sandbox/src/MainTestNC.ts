import { createWebGlContext, createProgram, draw, getAttribLocation, gameLoop, compileShader } from 'nacatamal-on/Renders/WebGL';

import { rectangle } from 'nacatamal-on/shapes/Rectangle';

import fragmentShaderSource from 'nacatamal-on/renders/shaders/fragmentShader.frag';
import vertexShaderSource from 'nacatamal-on/renders/shaders/vertexShader.vert';
import { triforce } from 'nacatamal-on/shapes/triforce';
import triangle from 'nacatamal-on/shapes/triangle';
// import { triforce } from "nacatamal-on/shapes/triforce";

// Crea WebGL context
const GL: WebGLRenderingContext = createWebGlContext({
    parent: 'canvas-with-yuka',
    width: 600,
    height: 600,
});

const program = createProgram(GL, vertexShaderSource, fragmentShaderSource);

const attribLocation = getAttribLocation(GL, program, 'a_position');

const uResolution = GL.getUniformLocation(program, 'u_resolution');
GL.uniform2f(uResolution, GL.canvas.width, GL.canvas.height);

const positionBuffer = GL.createBuffer();
GL.bindBuffer(GL.ARRAY_BUFFER, positionBuffer);

const size = 2;
const type = GL.FLOAT;
const normalize = false;

const stride = 0;
const offset = 0;
GL.vertexAttribPointer(attribLocation, size, type, normalize, stride, offset);

const colorUniformLocation = GL.getUniformLocation(program, "u_color");
GL.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

gameLoop(GL, () => {
    triangle( GL, 150, 200, 100, 100);
});
