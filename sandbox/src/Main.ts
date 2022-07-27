import { createProgram, createWebGlContext, gameLoop, getAttribLocation } from 'nacatamal-on/Renders/WebGL';

import fragmentShaderSource from "nacatamal-on/renders/shaders/fragment/varyingColor.frag";
import vertexShaderSource from "nacatamal-on/renders/shaders/vertex/varyingColor.vert";

// import { triforce } from 'nacatamal-on/shapes/triforce';
import triangle from 'nacatamal-on/shapes/triangle';
import { triforce } from 'nacatamal-on/shapes/triforce';
import Color from 'nacatamal-on/colors';
import { Matrix3 } from 'nacatamal-on/math/matrix3/Matrix3';
// import { triforce } from "nacatamal-on/shapes/triforce";

// Crea WebGL context
const GL: WebGLRenderingContext = createWebGlContext({
    parent: 'canvas-with-yuka',
    width: 600,
    height: 600,
});

const program = createProgram(GL, vertexShaderSource, fragmentShaderSource);

// Create position vertext buffer
const positionBuffer = getAttribLocation(GL, program, "a_position");

const uResolution = GL.getUniformLocation(program, "u_resolution");
GL.uniform2f(uResolution, GL.canvas.width, GL.canvas.height);

const matrix3 = new Matrix3();

const uMatrixLocation = GL.getUniformLocation(program, "u_matrix");
GL.uniformMatrix3fv(uMatrixLocation, false, matrix3.toArray());

gameLoop(GL, () => {
    triforce(GL, 400, 100, 100, 100)
});