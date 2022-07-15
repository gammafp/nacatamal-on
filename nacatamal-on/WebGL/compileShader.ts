const compileShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(success) {
        return shader;
    }
    // Detecta quien ha generado el error, si es 35633 entonces es VertexShader
    const typeShader = (35633 === type) ? 'VertexShader' : 'FragmentShader';
    console.error(`Algún error con el ${typeShader}: `, gl.getShaderInfoLog(shader));
    gl.deleteShader(shader)
}

export default compileShader;