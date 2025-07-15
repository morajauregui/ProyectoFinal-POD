let distorsionada
let slider
let myInput
let colorPicker
let valor
let montserrat
let sonido
let distortion

function preload(){
 distorsionada = loadFont('/assets/DistorsionadaFont.ttf')
 montserrat = loadFont('/assets/Montserrat-Regular.ttf')
 sonido = loadSound ('/assets/sonidoInicio.mp3') 
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  slider = createSlider(0, 0.5, 0.1, 0.01)
  slider.position((windowWidth - 155)/2, 620)
  slider.addClass("super-slider")
  
  myInput = createInput()
  myInput.position((windowWidth - 235)/2, 550)

  myInput.addClass("myInput")

  colorPicker = createColorPicker(255)
  colorPicker.position((windowWidth - 30)/2, 700)
  colorPicker.addClass("color-picker")

  distortion = new p5.Distortion()
  sonido.disconnect() 
  sonido.connect(distortion)

}

function draw() {
  background(0)

  let posX = map(mouseX, width/2, width, 0, 100)
  let posY = map(mouseY, 130, height, 0, 100)
  let msg = myInput.value()
  let color = colorPicker.color()
  let cant = slider.value()

  let drive = map(cant, 0, 0.5, 0, 1)  
  distortion.set(drive)

  fill(255)
  noStroke()
  textAlign(CENTER)
  textFont(montserrat)
  text('Cantidad de puntos', (windowWidth/2), 560)

  fill(color)
  stroke(color)
  textAlign(CENTER, CENTER)
  
  let bounds = distorsionada.textBounds(msg, 0, 0, 200);
  let points = distorsionada.textToPoints(msg, width / 2 - bounds.w / 2, 300, 200, { sampleFactor: cant });
  
  beginShape()
  valor = -1
  for (let p of points) {
    vertex(p.x + random(posX) * valor, p.y + random(posY) * valor)
    valor = -1 * valor

  }
  endShape()

}

function mousePressed() {
  if (sonido && !sonido.isPlaying()) {
    sonido.play();
  }
}
