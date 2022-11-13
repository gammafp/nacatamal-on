attribute vec4 a_color;
attribute vec2 a_position;

uniform mat3 u_matrix;
uniform vec2 u_resolution;

varying vec4 v_color;

void main(){
    vec2 position=(u_matrix * vec3(a_position,1)).xy;
    
    vec2 zeroToOne=position / u_resolution;
    
    // Escalamos
    vec2 zeroToTwo=zeroToOne * 2.;
    
    vec2 clipSpace=zeroToTwo - 1.0;
    
    // vec2 reverse_clip_space = clipSpace*vec2(1, -1);
    clipSpace.y *= -1.0;

    gl_Position = vec4(clipSpace, 0, 1);
    v_color =  a_color;
}
