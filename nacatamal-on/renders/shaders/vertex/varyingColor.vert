attribute vec2 a_position;
uniform mat3 u_matrix;
uniform vec2 u_resolution;

varying vec4 v_color;

void main(){
    vec2 position=(u_matrix*vec3(a_position,1)).xy;
    
    vec2 zeroToOne=position/u_resolution;
    
    vec2 zeroToTwo=zeroToOne*2.;
    
    vec2 clipSpace=zeroToTwo-1.;
    vec2 reverse_clip_space=clipSpace*vec2(1,-1);
    gl_Position=vec4(reverse_clip_space,0,1);
    v_color=gl_Position*.5+.5;
}