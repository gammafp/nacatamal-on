export const fragmentShaderSource = `precision mediump float;

void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting
  gl_FragColor = vec4(1, 0, 0.5, 1); // return reddish-purple
}
`;

// 3D
export const vertexShaderSource = `
// an attribute will receive data from a buffer
attribute vec4 a_position;

// all shaders have a main function
void main() {

  // gl_Position is a special variable a vertex shader
  // is responsible for setting
  gl_Position = a_position;
}
`;

// 2D
export const vertexShaderSource2D = `

in vec2 a_position;
uniform vec2 u_resolution;
uniform mat3 u_matrix;

void main() {

  vec2 position = (u_matrix * vec3(a_position, 1)).xy;

  vec2 zeroToOne = position / u_resolution;

  vec2 zeroToTwo = zeroToOne * 2.0;

  vec2 clipSpace = zeroToTwo - 1.0;
  vec2 reverse_clip_space = clipSpace * vec2(1, -1);
  gl_Position = vec4(reverse_clip_space, 0, 1);

}
`;