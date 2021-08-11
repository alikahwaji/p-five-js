class Particle {
  constructor(pos, node) {
    this.pos
    this.acc = new p5.Vector(0,0) // velocity
    this.vel = new p5.Vector(0,0) // acceleration
    
    this.node =node
  }
  
  run() {
  // velocity
  this.vel.add(this.acc)
  // max_speed
  this.vel.limit(max_speed)
  this.pos.add(this.vel)
  
  // Reset to 0
  this.acc.mult(0)
  }
  
  drawParticle() {
    noStroke()
    fill(255, 65, 65)
    ellipse(this.pos.x, this.pos.y,4)
    noFill()
  }
  
  arrive(target) {
    this.acc.add(target, true)
  }
  
  steer(target, slowspeed) {
    let steer;
    let desired = p5.Vector.sub(target, this.pos)
    
  }
}