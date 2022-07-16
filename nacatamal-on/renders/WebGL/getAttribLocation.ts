const getAttribLocation = (gl: WebGLRenderingContext, program, attrib: string) => {
    const positionAttributeLocation = gl.getAttribLocation(program, attrib);
    // Preparamos el Buffer
    // Se habilita positionAttribute Location
    gl.enableVertexAttribArray(positionAttributeLocation);
    return positionAttributeLocation;

}

export default getAttribLocation;