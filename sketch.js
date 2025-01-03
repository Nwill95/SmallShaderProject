let planetShader;
let atmosphereShader;
let shaderTexture;
let postShader

let planetColor = [];
let sunColor = [];

function preload(){
  planetShader = loadShader("/Planet/planetShader.vert","/Planet/planetShader.frag");
  atmosphereShader = loadShader("/Atmosphere/atmosphereShader.vert","/Atmosphere/atmosphereShader.frag");
  postShader = loadShader("/postShader/postShader.vert","/postShader/postShader.frag")
}

function setup() {
  createCanvas(800, 800, WEBGL);
  noStroke();
  
  shaderTexture = createGraphics(710,400,WEBGL);
  //shaderTexture.noStroke();
  
  //set planet colors
  planetColor = [0.0,1.0,1.0];
  sunColor = [1.0,1.0,0.0];

  //create camera
  createEasyCam();
}

function draw() {
  //set uniforms
  planetShader.setUniform('u_resolution', [width,height]);
  planetShader.setUniform('u_planetColor',sunColor);
  atmosphereShader.setUniform('u_resolution', [width,height]);
  postShader.setUniform('u_resolution', [width,height]);
  
  //draw background
  background(100);
  
  //create light
  let lightPos = createVector(150,150,150);
  let lightCol = color(255,255,255);
  pointLight(lightCol,lightPos);
  push();
  translate(lightPos);
  emissiveMaterial(lightCol);
  sphere(10);
  pop();

  //shader1
  shaderTexture.shader(planetShader)
  shaderTexture.rect(0,0,width,height);
  planetShader.setUniform('u_planetColor',planetColor);
  
  texture(shaderTexture);
  push();
  sphere(50);
  pop();
  
  //shader2
  shaderTexture.shader(atmosphereShader);
  shaderTexture.rect(0,0,width,height);
  
  texture(shaderTexture);
  push();
  sphere(60);
  pop();
  
  //post-processing shader
  push();
  shader(postShader);
  //rect(-100,-100,1000,100);
  pop();
}