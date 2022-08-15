const getAttribLocation = (gl: WebGLRenderingContext, program, attrib: string) => {

    const positionAttributeLocation = gl.getAttribLocation(program, attrib);
    const attribLocationBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, attribLocationBuffer);

    // Se habilita positionAttribute Location con el buffer previamente creado
    gl.enableVertexAttribArray(positionAttributeLocation);
    // Indicate that the position data to be used by elements of the array Data in this case 2 elements of 32 bits and float
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    return positionAttributeLocation;

}

export default getAttribLocation;