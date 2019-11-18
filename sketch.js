let ball = new Ball(200, 200, 50);
let angularVelocitySlider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angularVelocitySlider = createSlider(0.005, PI, 0.01, 0.001);
  angularVelocitySlider.position(windowWidth - 100, 10);
  angularVelocitySlider.style("width", "80px");
  stroke(255);
}

function draw() {
  ball.setAngularVelocity(angularVelocitySlider.value());
  line(100, 100, 50, 0);
  ellipse(100, 100, 50);

  ball.spin();
}
