const glsl = x => x;

export const vertext_ortographic = glsl`#version 300 es
in vec4 a_position;

uniform mat4 u_projection;
uniform mat4 u_matrix;
void main() {
    mat4 projection_position = u_projection * u_matrix;
    gl_Position = projection_position * a_position;
}`;

export const fragment_orthographic = glsl`#version 300 es
precision highp float;

uniform vec3 u_color;
out vec4 outColor;

void main() {
    outColor = vec4(u_color, 1.0);
}`;

