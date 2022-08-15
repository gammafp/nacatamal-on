precision mediump float;

uniform vec4 u_color;


void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting


  gl_FragColor = vec4(0.0706, 0.7137, 0.6824, 1.0); // return reddish-purple
}