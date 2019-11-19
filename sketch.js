let ball;
let angularVelocitySlider;
let forceCheck;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(windowWidth / 2, windowHeight / 2, 125);
  textSize(15);
  background(0);
  angularVelocitySlider = createSlider(0.005, PI, 0.01, 0.001);
  fill(255);
  text("Angular Velocity", windowWidth * 0.75 - 40, 20);
  noFill();
  angularVelocitySlider.position(windowWidth * 0.75, 20);
  angularVelocitySlider.style("width", "80px");
  forceCheck = createCheckbox("Show Force", false);
  forceCheck.position(windowWidth * 0.75, 40);
  forceCheck.style("color", "#DDD");
  forceCheck.changed(() => background(0));
  stroke(255);
}
let mag = 0.001;
function draw() {
  mag += 0.01;
  ball.setMagnitude(mag);
  ball.setAngularVelocity(angularVelocitySlider.value());

  ball.spin();

  if (forceCheck.checked()) {
    ball.showForce();
  }
}
