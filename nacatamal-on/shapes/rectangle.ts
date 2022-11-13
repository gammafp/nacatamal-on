export const rectangle = (gl, x, y, width, height) => {
	var x1 = x;
	var x2 = x + width;
	var y1 = y;
	var y2 = y + height;

	const geometryData = new Float32Array([
		x1, y1,
		x2, y1,
		x1, y2,
		x1, y2,
		x2, y1,
		x2, y2,
	]);

	const primitive = gl.TRIANGLES;
	const offsetPrimitive = 0;
	const count = 6;

	return {
		draw: () => {
			// From position buffer
			gl.bufferData(gl.ARRAY_BUFFER, geometryData, gl.STATIC_DRAW);
			// gl.drawArrays(primitive, offsetPrimitive, count);
		}
	}
}