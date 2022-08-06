export const triforce = (gl, x: number, y: number, width: number, height: number, origin = 0.5) => {
    const originXY = {
        x: origin * width,
        y: 0
    };
    
    // First triangle
    const vertice0 = [(x + width / 4) - originXY.x, (y + height / 2) - originXY.y];
    const vertice1 = [(x + width / 2) - originXY.x, (y + height) - originXY.y];
    const vertice2 = [x - originXY.x, (y + height) - originXY.y];

    // Second triangle
    const vertice3 = [(x + width * 3 / 4) - originXY.x, y + height / 2 - originXY.y];
    const vertice4 = [x + width - originXY.x, y + height - originXY.y];
    const vertice5 = [...vertice1];

    // // Third triangle
    const vertice6 = [x + width / 2 - originXY.x, y - originXY.y];
    const vertice7 = [...vertice3];
    const vertice8 = [...vertice0];


    const position = new Float32Array([
        ...vertice0,
        ...vertice1,
        ...vertice2,
        ...vertice3,
        ...vertice4,
        ...vertice5,
        ...vertice6,
        ...vertice7,
        ...vertice8
    ]);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);

    const GL = gl;
    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)

    const primitive = GL.TRIANGLES;
    const offsetPrimitive = 0;
    const count = 12;

    GL.drawArrays(primitive, offsetPrimitive, count);

}