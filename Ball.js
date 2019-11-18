class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
    this.angV = 0;
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
    this.angle += this.angV;
  }

  show() {
    stroke(255);
    fill(0);
    arc(this.x, this.y, this.r, this.r, PI, 0);
    fill(150);
    arc(this.x, this.y, this.r, this.r, 0, PI);
  }
}
