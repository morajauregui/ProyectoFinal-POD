let distorsionada
let myInput
let mapeoX
let mapeoY
let colorPicker

function preload() {
 distorsionada = loadFont ('/assets/DistorsionadaFont.ttf') 
}

function setup() {
 createCanvas(windowWidth,windowHeight)

  myInput = createInput()
  myInput.position((windowWidth - myInput.width)/2, 400)
  myInput.addClass('myInput');

  colorPicker = createColorPicker(255)
  colorPicker.position((windowWidth - colorPicker.width)/2, 450)
  colorPicker.addClass("color-picker")

}

function draw() {
    // mapeoX = map(mouseX, 0 , width, 0, 50)
    mapeoY = map (mouseY, 0, height, 0, 50)

    let msg = myInput.value()
    let color = colorPicker.color()
    background(220)

    textAlign(CENTER)
    let bounds = distorsionada.textBounds(msg, 0, 0, 200);
    let points = distorsionada.textToPoints(msg, width/2 - bounds.w/2, 130, 200, { sampleFactor: 0.3 });

    for (let p of points) {
    fill(color)
    stroke (255)
    ellipse(p.x, p.y , 10 + mapeoY);
  }


}