#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aPosition;

void main(){
  vec4 positionVec4 = vec4(aPosition, 1.0); //copy 3D position vector, add w parameter as 1.0
  positionVec4.xy = positionVec4.xy * 2.0 - 2.0; //scale canvas to middle of screen
  gl_Position = positionVec4;
}