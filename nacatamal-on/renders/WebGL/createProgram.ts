import compileShader from "./compileShader";

const createProgram = (gl: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram => {
    const program = gl.createProgram();

    const vertexShader = compileShader(gl, "vertexshader", vertexShaderSource);
    const fragmentShader = compileShader(gl, "fragmentshader", fragmentShaderSource);

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        console.log("Error in program: ", gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
    
    gl.useProgram(program);

    gl.detachShader(program, vertexShader);
    gl.detachShader(program, fragmentShader);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    
    return program;
}

export default createProgram;