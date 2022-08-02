import { createProgram, createWebGlContext, gameLoop, getAttribLocation } from 'nacatamal-on/Renders/WebGL';

import fragmentShaderSource from "nacatamal-on/renders/shaders/fragment/varyingColor.frag";
import vertexShaderSource from "nacatamal-on/renders/shaders/vertex/varyingColor.vert";

// import { triforce } from 'nacatamal-on/shapes/triforce';
import triangle from 'nacatamal-on/shapes/triangle';
import { triforce } from 'nacatamal-on/shapes/triforce';
import Color from 'nacatamal-on/colors';
import { Matrix3 } from 'nacatamal-on/math/matrix3/Matrix3';

import { Pane } from "tweakpane";
import { PaneConfig } from 'tweakpane/dist/types/pane/pane-config';

// import { triforce } from "nacatamal-on/shapes/triforce";

// Crea WebGL context
const GL: WebGLRenderingContext = createWebGlContext({
    parent: 'canvas-with-yuka',
    width: 600,
    height: 600,
});

const triforcePosition = {
    x: 0,
    y: 0,
}

const program = createProgram(GL, vertexShaderSource, fragmentShaderSource);


// Create position vertext buffer
getAttribLocation(GL, program, "a_position");

const uResolution = GL.getUniformLocation(program, "u_resolution");
GL.uniform2f(uResolution, GL.canvas.width, GL.canvas.height);

const matrix3 = new Matrix3();

const uMatrixLocation = GL.getUniformLocation(program, "u_matrix");
GL.uniformMatrix3fv(uMatrixLocation, false, matrix3.toArray());

gameLoop(GL, () => {
    triforce(GL, triforcePosition.x, triforcePosition.y, 100, 100);
});


// ### GUI controls ###
const PARAMS = {
    x: 0,
    y: 0,
};
const pane: any = new Pane();
pane.addInput(PARAMS, 'x', { min: 0, max: GL.canvas.width - 100, step: 1 })
    .on('change', (value: any) => {
        triforcePosition.x = value.value;

    });
pane.addInput(PARAMS, 'y', { min: 0, max: GL.canvas.width - 100, step: 1 })
    .on('change', (value: any) => {
        triforcePosition.y = value.value;
})
