#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec3 u_planetColor;

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  
  vec3 color = vec3(u_planetColor.x,u_planetColor.y,u_planetColor.z);
  
  //vec3 color = vec3(0.0,0.7,0.1);
  gl_FragColor = vec4(color,1.0);
}