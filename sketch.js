let ball;
// let velocity = 10;
// let angularVel = 1;
let angularVelocitySlider;
// let forceCheck = false;

let params = {
  "Velocity (m/s)": 10,
  "Angular Velocity (r/s)": 1,
  "Magnus Force": false,
  "Gravity Force": false
};

let gui;
const BG = 255;
const TEXT = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  let velocity = 10;

  let angularVel = 1;

  let forceCheck = false;

  gui = createGui("Magnus Explorer");
  sliderRange(0.1, 100, 0.1);
  gui.setPosition(50, 50);
  gui.addObject(params);
  ball = new Ball(windowWidth / 2, windowHeight / 2, 125);
}

function draw() {
  background(BG);
  ball.spin();
  params["Magnus Force"] ? ball.showForce() : null;
  params["Gravity Force"] ? ball.showForce(-9.8, color(0, 0, 255)) : null;

  ball.setVelocity(params["Velocity (m/s)"]);
  ball.updateMagnus();
  ball.setAngularVelocity(params["Angular Velocity (r/s)"]);
}
