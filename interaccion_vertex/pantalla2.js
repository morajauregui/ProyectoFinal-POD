let distorsionada
let slider
let myInput
let colorPicker
let sliderSampleFactor
let valor
let montserrat
let sonido
let reverb 

function preload() {
  distorsionada = loadFont('/assets/DistorsionadaFont.ttf')
  montserrat = loadFont('/assets/Montserrat-Regular.ttf')
  sonido = loadSound('/assets/sonidoInicio.mp3')
  sonido.setVolume(1.0)
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  slider = createSlider(0, 50, 0)
  slider.position((windowWidth/2) - 165, 620)
  slider.addClass("slider2")


  sliderSampleFactor = createSlider(0, 0.5, 0.3, 0.01)
  sliderSampleFactor.position((windowWidth/2) + 10, 620)
  sliderSampleFactor.addClass("slider2")


  myInput = createInput()
  myInput.position((windowWidth - 235)/2, 550)
  myInput.addClass("myInput")

  colorPicker = createColorPicker("black")
  colorPicker.position((windowWidth - 30)/2, 750)
  colorPicker.addClass("color-picker")

  reverb = new p5.Reverb();
  sonido.disconnect();      
  reverb.process(sonido, 3, 2)

}

function draw() {
  background(255)
  
  let pos = slider.value()
  let cant = sliderSampleFactor.value()
  let msg = myInput.value()
  let color = colorPicker.color()

  let reverbTime = map(pos, 0, 50, 0.5, 5); 
  reverb.set(reverbTime, 2);


  fill(0)
  noStroke()
  textAlign(CENTER)
  textFont(montserrat)
  text('Cantidad de puntos', (windowWidth/2) + 87, 560)
  text('Posición de los puntos', (windowWidth/2) - 87, 560)
  
  fill(color)
  stroke(color)
  textAlign(CENTER, CENTER)

  let bounds = distorsionada.textBounds(msg, 0, 0, 200);
  let points = distorsionada.textToPoints(msg, width / 2 - bounds.w / 2, 300, 200, { sampleFactor: cant });

  beginShape()
  valor = -1
  for (let p of points) {
    vertex(p.x + random(pos) * valor, p.y + random(pos) * valor)
    valor = -1 * valor

  }
  endShape()

}
function mousePressed() {
  if (sonido && !sonido.isPlaying()) {
    sonido.play();
  }
}
