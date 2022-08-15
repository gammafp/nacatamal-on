import { getRenderContext } from "nacatamal-on/Engine";
import { getProgram } from "nacatamal-on/Engine/engineStore";
import { Matrix3 } from "nacatamal-on/math";
import { gameLoop } from "nacatamal-on/renders/WebGL";

import { rectangle, triforce } from "nacatamal-on/shapes";
import { Pane } from "tweakpane";

const rectPosition = {
    width: 300,
    height: 100,
    x: 100,
    y: 100,
    rotate: 0,
    origin: 0.5
}
export const SceneMain = () => {

    console.warn("** Scene main cargada **");
    // Obtenemos el contexto de webGL render
    const GL = getRenderContext();


    console.log("Program: ", getProgram());
    const uMatrixLocation = GL.getUniformLocation(getProgram(), "u_matrix");

    const matrix3 = new Matrix3();

    GL.uniformMatrix3fv(uMatrixLocation, false, matrix3.toArray());
    
    const rectangleG = rectangle(GL, 0, 0, rectPosition.width, rectPosition.height);
    const triforceG = triforce(GL, 200, 200, 100, 100);

    // Constant update
    gameLoop(() => {
        matrix3.translate(rectPosition.x, rectPosition.y);
        GL.uniformMatrix3fv(uMatrixLocation, false, matrix3.toArray());

        // ####### Espacio para objetos
        triforceG.draw();
        rectangleG.draw();
    });

    // Constantes de tweakpane
    const params = {
        x: rectPosition.x,
    }
    const pane = new Pane();
    const x = (pane as any).addInput(params, "x", {min: 0, max: GL.canvas.width - rectPosition.width, step: 1});
    x.on("change", (x) => {
        rectPosition.x = x.value;
    });

    // Only for testing purposes
    return {
        name: 'SceneMain'
    }
}
