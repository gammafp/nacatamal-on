import { getRenderContext } from "nacatamal-on/Engine";
import { gameLoop } from "nacatamal-on/renders/WebGL";
import FragmentSource from "nacatamal-on/renders/shaders/fragment/fragmentShader.frag";
import VertexSource from "nacatamal-on/renders/shaders/vertex/vertexShader.vert";

const rectPosition = {
    width: 300,
    height: 100,
    x: 100,
    y: 100,
    rotate: 0,
    origin: 0.5
}
export const SceneMain = () => {
    console.log("** Inicio SceneMain **");

    const gl = getRenderContext();

    // Creación de shaders
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, FragmentSource);
    gl.compileShader(fragmentShader);

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, VertexSource);
    gl.compileShader(vertexShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);


    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);


    // Getuniform u_resolution
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);


    // Get attribute location
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionAttributeLocation);

    // Position buffer
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0); // 2 X, Y


    const offsetX = 100;
    const offsetY = 100;

    // Dibujar un cuadrado
    const squareData = new Float32Array([
        offsetX + 0, 0 + offsetY,
        offsetX + 100, 0 + offsetY,
        offsetX + 0, 100 + offsetY,
        offsetX + 100, 0 + offsetY,
        offsetX + 100, 100 + offsetY,
        offsetX + 0, 100 + offsetY,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, squareData, gl.STATIC_DRAW);

    // Draw the square


    gameLoop(() => {
        // console.log("Gameloop");
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    });
}