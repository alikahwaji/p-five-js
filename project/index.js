let x = 10;
let y = 10;

let spacing = 40;

function setup() {
  createCanvas(1340, 660);
  background(255);
}

function draw() {
  stroke(255)
  
  let a1 = random(2, 12)
  let a2 = random(1, 8)

  let b1 = random(15, 200)
  let b2 = random(15, 200)

  let c1 = random(15, 200)
  let c2 = random(15, 200)

  let d1 = random(15, 200)
  let d2 = random(15, 200)

  if (random(1) < 0.5) {
    strokeWeight(a1)
    stroke(a1, c1, d1)
    line(x, y, x + spacing, y + spacing)
  } else {
    strokeWeight(a2)
    stroke(b2, c2, d2)
    fill(b2, c2, d2)
    line(x, y + spacing, x + spacing, y)
  }

  x += spacing

  if (x >= width - 10) {
    x = 10
    y += spacing
  }

  if (y >= width - 10) {
    noLoop()
  }
}