function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0,102);
}

function draw() {
  // put drawing code here

  ellipse(mouseX, mouseY, 20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
