const compileShader = (gl: WebGLRenderingContext, type: "fragmentshader" | "vertexshader", source: string) => {
    const typeShader = type === "fragmentshader" ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER;
    const shader = gl.createShader(typeShader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(!success) {
        console.error(`Shader error: ${type}: `, gl.getShaderInfoLog(shader));
        gl.deleteShader(shader)
    }
    return shader;
    // Detecta quien ha generado el error, si es 35633 entonces es VertexShader
}

export default compileShader;