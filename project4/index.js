let circlePath = []
let sqrPath = []
dots=[]
spacing = 2
max_speed = 1
max_time = 0.006

let checkBox

let isReversed = false;
let isDebug = true

function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
  
  resetSktetch()
    checkBox = createCheckbox(" " + "debug", true)
}

function draw() {
  background(245)
  
  isDebug = checkBox.checked()
  
  push()
  
  translate(width/2, height/2)
  rotate(45)
  stroke(80, 200)
  strokeWeight(1)
  noFill()
    
  beginShape();
  for (let i = 0;i < dots.length;i++) {
    vertex(dots[i].pos.x, dots[i].pos.y)
  }
  endShape(CLOSE)
  
  if (isReversed) {
    if (isDebug) {
      for (let i = 0; i < dots.length; i++) {
        dots[i].drawPartical()
      }
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].arrive(circlePath[i])
      dots.run[i]
    }
    
  } else {
    if (isDebug) {
      for (let i = 0; i < dots.length; i++) {
      dots[i].drawPartical()
      }
    }
    
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].node === 0) {
        dots[i].arrive(sqrPath[0])
        dots.run()
      } else if (dots[i].node === 1) {
        dots[i].arrive(sqrPath[1])
        dots.run()
      } else if (dots[i].node === 2) { 
        dots[i].arrive(sqrPath[2])
        dots.run()
      } else if (dots[i].node === 3) {
        dots[i].arrive(sqrPath[3])
        dots.run()
      }
    }
  }
  
  for (let i = 0; i < dots.length; i++) { 
    if( frameCount % 800 === 0) {
      isReversed = !isReversed
      resetSketch()
    }
  }
  pop()
}