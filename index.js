let distorsionada
let slider
let myInput
let colorPicker
let valor
let video
let sonido
let sonidoReproducido = false

function preload(){
distorsionada = loadFont('/assets/DistorsionadaFont.ttf')
sonido = loadSound ('assets/sonidoInicio.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
video = createVideo('assets/miVideo.mp4')
video.volume(0)
video.hide();    
video.loop(); 
  


}

function draw() {
  background(0)
  image(video, 0, 0, width, height);

  fill('white')
  textFont('Montserrat')
  textAlign(CENTER)
  textSize(15)
  text('¡Explorá y distorsioná tu mensaje!', width/2, height/2 + 100)
  
}
function mousePressed() {
if (sonido.isPlaying()) {
    sonido.stop(); 
    sonidoReproducido = false;
  } else {
    sonido.play(); 
    sonidoReproducido = true;
}
}