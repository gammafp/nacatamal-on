const getAttribLocation = (gl: WebGLRenderingContext, program, attrib: string) => {
    const positionAttributeLocation = gl.getAttribLocation(program, attrib);

    // Se habilita positionAttribute Location
    gl.enableVertexAttribArray(positionAttributeLocation);
    return positionAttributeLocation;

}

export default getAttribLocation;