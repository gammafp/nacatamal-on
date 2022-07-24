const triangle = (gl, x: number, y: number, width: number, height: number) => {

    const vertice0 = [x + width / 2, y];
    const vertice1 = [x + width, y + height];
    const vertice2 = [x, y + height];

    const array = new Float32Array([
        ...vertice0,
        ...vertice1,
        ...vertice2
    ]);

    gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);

    const GL = gl;

    const primitive = GL.TRIANGLES;
    const offsetPrimitive = 0;
    const count = 3;

    GL.drawArrays(primitive, offsetPrimitive, count);
}

export default triangle;