import { getRenderContext } from "nacatamal-on/Engine";
import { getProgram } from "nacatamal-on/Engine/engineStore";
import { Matrix3 } from "nacatamal-on/math";

import { createProgram, gameLoop, getAttribLocation } from "nacatamal-on/renders/WebGL";
import { triforce } from "nacatamal-on/shapes";
import { Pane } from "tweakpane";

const matrix3 = new Matrix3();
const triforcePosition = {
    x: 110,
    y: 110,
    rotate: 0,
    origin: 0.5
}

export const SceneMain2 = () => {
    const GL = getRenderContext();
    const uMatrixLocation = GL.getUniformLocation(getProgram(), "u_matrix");

    matrix3.translate(triforcePosition.x, triforcePosition.y);
    matrix3.rotate(triforcePosition.rotate);

    GL.uniformMatrix3fv(uMatrixLocation, false, matrix3.toArray());

    triforce(GL, 0, 0, 100, 100, triforcePosition.origin);


    // Only for testing purposes
    return {
        name: 'SceneMain',
    }
}

// ### GUI controls ###
const PARAMS = {
    x: 0,
    y: 0,
    angle: 0,
    origin: 0.5
};
// const pane: any = new Pane();
// pane.addInput(PARAMS, 'x', { min: 0, max: 600 - 100, step: 1 })
//     .on('change', (value: any) => {
//         triforcePosition.x = value.value;
//     });
// pane.addInput(PARAMS, 'y', { min: 0, max: 600 - 100, step: 1 })
//     .on('change', (value: any) => {
//         triforcePosition.y = value.value;
//     });
// pane.addInput(PARAMS, 'angle', { min: 0, max: 360 * 2, step: 1 })
//     .on('change', (value: any) => {
//         const angleInRadians = value.value * Math.PI / 180;
//         triforcePosition.rotate = angleInRadians;

//     });

// pane.addInput(PARAMS, 'origin', { min: 0, max: 1.0, step: 0.1 })
//     .on('change', (value: any) => {
//         triforcePosition.origin = value.value;

//     });