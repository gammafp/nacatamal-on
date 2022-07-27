const getAttribLocation = (gl: WebGLRenderingContext, program, attrib: string) => {
    const positionAttributeLocation = gl.getAttribLocation(program, attrib);

    // Se habilita positionAttribute Location
    
    const attribLocationBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, attribLocationBuffer);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    return positionAttributeLocation;

}

export default getAttribLocation;