let distorsionada
let slider
let myInput
let colorPicker

function preload(){
distorsionada = loadFont('/assets/DistorsionadaFont.ttf')
}

function setup() {
  createCanvas(600, 600)
  
  slider = createSlider(0, 50, 0)
  slider.position((windowWidth - slider.width)/2, 450)
  slider.addClass("super-slider")
  
  myInput = createInput()
  myInput.position((windowWidth - myInput.width)/2, 400)
  myInput.addClass("myInput")

  colorPicker = createColorPicker(255)
  colorPicker.position((windowWidth - colorPicker.width)/2, 500)
  colorPicker.addClass("color-picker")

}

function draw() {
  background(0)
  let posX = map(mouseX, 0, width, 10, 300)
  let posY = map(mouseY, 0, height, 10, 500)
  let msg = myInput.value()
  let color = colorPicker.color()

  fill(color)
  stroke(color)
  textAlign(CENTER, CENTER)
  
  let points = distorsionada.textToPoints(msg, windowWidth/2, 130, 200, { sampleFactor: 0.05 })

  beginShape()
  for (let p of points) {
    
    vertex(p.x + random(posX), p.y + random(posY))
    
  }
  endShape()

}