let distorsionada
let slider
let myInput
let colorPicker
let slider2

function preload(){
distorsionada = loadFont('/assets/DistorsionadaFont.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  slider = createSlider(0, 50, 0)
  slider.position((windowWidth - slider.width)/2, 450)
  slider.addClass("slider2")
  
  myInput = createInput()
  myInput.position((windowWidth - myInput.width)/2, 400)
  myInput.addClass("myInput")

  colorPicker = createColorPicker(255)
  colorPicker.position((windowWidth - colorPicker.width)/2, 500)
  colorPicker.addClass("color-picker")

}

function draw() {
  background(255)
  let pos = slider.value()
  let msg = myInput.value()
  let color = colorPicker.color()

  fill(color)
  stroke(color)
  textAlign(CENTER, CENTER)
  
  let points = distorsionada.textToPoints(msg, windowWidth/2, 130, 200, { sampleFactor: 0.1 })

  beginShape()
  for (let p of points) {
    vertex(p.x + random(pos), p.y + random(pos))
    
  }
  endShape()

}