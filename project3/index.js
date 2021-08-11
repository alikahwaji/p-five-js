let distArray = []
let xArray = []
let zArray = []
let angle = 0.0
let maxD = 0.0
let isY = 0.0
let w = 24

function setup() {
  createCanvas(400, 400, WEBGL)
  isY = atan(1 / sqrt(2))
  maxD = dist(0, 0, 200, 200)

  colorMode(RGB)

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      zArray.push(z)
      xArray.push(x)
      distArray.push(dist(x, z, width * 0.5, height * 0.5))
    }
  }
}

function draw() {
  background(1000)
  orbitControl()
  ortho(-400 - w * 0.5, 400, 400, -400, 0, 1000)
  rotateX(-QUARTER_PI)
  rotateY(isY)
  ambientLight(255, 0, 0)
  pointLight(255, 255, 255, 0, 0, 100)

  let offset = 0.0
  for (i = 0; i < xArray.length; i++) {
    push()
    let d = distArray[i]
    let x = xArray[i]
    let z = zArray[i]

    let offset = map(d, 0, maxD, -PI, PI)
    let h = map(sin(angle + offset), -1, 1, 25, 225, 225)
    translate(x - width * 0.5, 0, z - height * 0.5)
    ambientMaterial(h, 255, 255, - h)
    box(w - 1, h, w - 1)
    pop()
  }
  angle -= 0.2
}