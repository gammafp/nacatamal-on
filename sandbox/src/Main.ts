import { createWebGlContext } from "nacatamal-on/Renders/WebGL";

import fragmentShaderSource from "nacatamal-on/renders/shaders/fragmentShader.frag";
import vertexShaderSource from "nacatamal-on/renders/shaders/vertexShader.vert";

// Crea WebGL context
const GL = createWebGlContext({
    parent: "canvas-with-yuka",
    width: 600,
    height: 600
});

// ## Create shaders
// Vertex
const vertexShader = GL.createShader(GL.VERTEX_SHADER); // Esto es necesario
GL.shaderSource(vertexShader, vertexShaderSource); // Se hace bind al shader con el source
GL.compileShader(vertexShader); // Se compila el shader

// Fragment
const fragmentShader = GL.createShader(GL.FRAGMENT_SHADER); // Esto es necesario
GL.shaderSource(fragmentShader, fragmentShaderSource); // Se hace bind al shader con el source
GL.compileShader(fragmentShader); // se compila el shader


// Success
const vertexSuccess = GL.getShaderParameter(vertexShader, GL.COMPILE_STATUS);
console.log("* Shader Vertex success: ", vertexSuccess);
if (!vertexSuccess) {
    console.error("* Error en el VertexShader: ", GL.getShaderInfoLog(vertexShader));
    GL.deleteShader(vertexShader);
}

const fragmentSuccess = GL.getShaderParameter(fragmentShader, GL.COMPILE_STATUS);
console.log("* Shader Fragment success: ", fragmentSuccess)

if (!fragmentSuccess) {
    console.error("* Error en el VertexShader: ", GL.getShaderInfoLog(fragmentShader));
    GL.deleteShader(fragmentShader);
}

// ##  End shaders creation
// ## Program creation
const program = GL.createProgram();
GL.attachShader(program, vertexShader);
GL.attachShader(program, fragmentShader);
GL.linkProgram(program);




// Status
const programSuccess = GL.getProgramParameter(program, GL.LINK_STATUS);
console.log("* Program success: ", programSuccess);
if (!programSuccess) {
    console.error("* Error en el Program: ", GL.getProgramInfoLog(program));
    GL.deleteProgram(program);
}

console.log("* Program linked");

// ## End program creation
// ## Attributes
const positionAttributeLocation = GL.getAttribLocation(program, "a_position");
const positionBuffer = GL.createBuffer();
GL.bindBuffer(GL.ARRAY_BUFFER, positionBuffer);
GL.enableVertexAttribArray(positionAttributeLocation);

const offsetX = -0.25;
const offsetY = -0.25;
// triangle 2D points
const positions = [
    0 + offsetX, 0 + offsetY,
    0.25 + offsetX, 0.5 + offsetY,
    0.5 + offsetX, 0 + offsetY,
];
GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(positions), GL.STATIC_DRAW);

// ## End attributes
// ## Render code
console.log("* Set viewport");
GL.viewport(0, 0, GL.canvas.width, GL.canvas.height);

console.log("* Clear canvas");
GL.clearColor(0, 0, 0, 0);
GL.clear(GL.COLOR_BUFFER_BIT);

// ## End render code
// ## Draw code
// Tell webgl which program should be active
GL.useProgram(program);

GL.bindBuffer(GL.ARRAY_BUFFER, positionBuffer);

// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
const size = 2;
const type = GL.FLOAT;
const normalize = false;
const stride = 0;
const offset = 0;
GL.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

const primitive = GL.TRIANGLES;
const offsetPrimitive = 0;
const count = 3;
GL.drawArrays(primitive, offsetPrimitive, count);

console.log("* Draw triangle");