import { createWebGlContext } from "nacatamal-on/Renders/WebGL";

import {  rectangle } from "nacatamal-on/shapes/Rectangle";

import fragmentShaderSource from "nacatamal-on/renders/shaders/fragmentShader.frag";
import vertexShaderSource from "nacatamal-on/renders/shaders/vertexShader.vert";
import { triforce } from "nacatamal-on/shapes/triforce";

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
// Tell webgl which program should be active

// Status
const programSuccess = GL.getProgramParameter(program, GL.LINK_STATUS);
console.log("* Program success: ", programSuccess);
if (!programSuccess) {
    console.error("* Error en el Program: ", GL.getProgramInfoLog(program));
    GL.deleteProgram(program);
}
console.log("* Program linked");

// ## Render code
console.log("* Set viewport");

GL.viewport(0, 0, GL.canvas.width, GL.canvas.height);

console.log("* Clear canvas");
GL.clearColor(0, 0, 0, 0);
GL.clear(GL.COLOR_BUFFER_BIT);

GL.useProgram(program);
// ## End program creation

// ## Attributes
const positionAttributeLocation = GL.getAttribLocation(program, "a_position");
const positionBuffer = GL.createBuffer();
GL.bindBuffer(GL.ARRAY_BUFFER, positionBuffer);
GL.enableVertexAttribArray(positionAttributeLocation);

// Get uniform location
const resolutionUniformLocation = GL.getUniformLocation(program, "u_resolution");
// Set uniform resolution
GL.uniform2f(resolutionUniformLocation, GL.canvas.width, GL.canvas.height);

const sizeT = 150;

// ## End attributes
for(let i = 0; i < 25; i++) {
    // Math random between 30 to 150
    const size = Math.floor(Math.random() * (sizeT - 30)) + 30;
    // Math random x position in canvas
    const x = Math.floor(Math.random() * (GL.canvas.width - size));
    // Math random y position in canvas
    const y = Math.floor(Math.random() * (GL.canvas.height - size));
    triforce(GL, x, y, size, size, positionAttributeLocation);

}
// triforce(GL, 0, 10, sizeT, sizeT, positionAttributeLocation);


// ## End render code
// ## Draw code




console.log("* Draw triangle");