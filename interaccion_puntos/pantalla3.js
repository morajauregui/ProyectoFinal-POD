let distorsionada
let myInput
let mapeoX
let mapeoY
let colorPicker
let sliderSampleFactor
let montserrat
let sonido
let rate 

function preload() {
 distorsionada = loadFont ('/assets/DistorsionadaFont.ttf') 
 montserrat = loadFont('/assets/Montserrat-Regular.ttf')
 sonido = loadSound ('/assets/sonidoInicio.mp3') 
}

function setup() {
 createCanvas(windowWidth,windowHeight)

  myInput = createInput()
  myInput.position((windowWidth - 235)/2, 550)
  myInput.addClass('myInput');

  sliderSampleFactor = createSlider(0, 0.5, 0.3, 0.01)
  sliderSampleFactor.position((windowWidth - 155)/2, 620)
  sliderSampleFactor.addClass("slider2")

  colorPicker = createColorPicker(220)
  colorPicker.position((windowWidth - 30)/2, 700)
  colorPicker.addClass("color-picker")


}

function draw() {
    // mapeoX = map(mouseX, 0 , width, 0, 50)
    mapeoY = map (mouseY, 0, height, 0, 50)

    let msg = myInput.value()
    let color = colorPicker.color()
    let cant = sliderSampleFactor.value()
    let rate = map(cant, 0, 0.5, 0.5, 2)
    sonido.rate(rate)

    background(220)
    //line(width/2, 0, width/2, height)

    fill(255)
    noStroke()
    textAlign(CENTER)
    textFont(montserrat)
    text('Cantidad de puntos', (windowWidth/2), 560)

    textAlign(CENTER)
    let bounds = distorsionada.textBounds(msg, 0, 0, 200);
    let points = distorsionada.textToPoints(msg, width/2 - bounds.w/2, 230, 200, { sampleFactor: cant });

    for (let p of points) {
    fill(color)
    stroke (255)
    ellipse(p.x, p.y , 10 + mapeoY);
  }


}
function mousePressed() {
  if (sonido && !sonido.isPlaying()) {
    sonido.play();
  }
}
