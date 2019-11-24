//formula from http://farside.ph.utexas.edu/teaching/329/lectures/node43.html
// and estimation for baseball

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
    this.angV = 0;
    this.mag = 1;
    this.vel = 10;
  }

  setVelocity(vel) {
    this.vel = vel;
  }

  getMagnusForce(v = this.vel) {
    const airResistance = 0.0041;

    return airResistance * this.angV * v;
  }

  updateMagnus() {
    this.setMagnitude(this.getMagnusForce(this.vel));
  }

  setMagnitude(mag) {
    this.mag = mag;
  }
  setAngularVelocity(angV) {
    this.angV = angV;
  }
  spin() {
    stroke(255);
    fill(0);
    arc(this.x, this.y, this.r, this.r, PI + this.angle, 0 + this.angle);
    fill(150);
    arc(this.x, this.y, this.r, this.r, 0 + this.angle, PI + this.angle);
    this.angle += this.angV / 10;
  }

  show() {
    stroke(255);
    fill(0);
    arc(this.x, this.y, this.r, this.r, PI, 0);
    fill(150);
    arc(this.x, this.y, this.r, this.r, 0, PI);
  }

  showForce(f = this.mag) {
    const up = f >= 0 ? 1 : -1;
    const width = (f * sqrt(10)) / 2;

    beginShape();
    noStroke(255);
    strokeWeight(1.1);
    fill(237, 34, 93);
    //origin
    vertex(this.x, this.y);
    //bottom left of rect
    vertex(this.x - width, this.y);
    //top left of rect
    vertex(this.x - width, this.y - up * width * f);
    //left triangle tip
    vertex(this.x - width * 1.5, this.y - up * width * f);
    //top triangle tip
    vertex(this.x, this.y - width * f * 2 * up);
    vertex(this.x + width * 1.5, this.y - up * width * f);
    vertex(this.x + width, this.y - up * width * f);
    vertex(this.x + width, this.y);
    //origin
    vertex(this.x, this.y);
    endShape(CLOSE);

    // line(this.x, this.y, this.x - width, this.y);
    // line(this.x - width, this.y, this.x - width, this.y - width * mag);
    // line(this.x - width, this.y - width * mag, this.x - width * 1.5, this.y - width * mag);
    // line(this.x - width * 1.5, this.y - width * mag, this.x, this.y - width * mag - 2 * width);
    // line(this.x + width * 1.5, this.y - width * mag, this.x, this.y - width * mag - 2 * width);
    // line(this.x + width, this.y - width * mag, this.x + width * 1.5, this.y - width * mag);
    // line(this.x + width, this.y, this.x + width, this.y - width * mag);
    // line(this.x, this.y, this.x + width, this.y);
  }
}
