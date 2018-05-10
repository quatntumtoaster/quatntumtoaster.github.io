var rad = 25;         // Width of the shape
var xpos, ypos;       // Starting position of shape

var xspeed = 0;       // Speed of the shape
var yspeed = 0;       // Speed of the shape

var xdir = 1;         // Left or Right
var ydir = 1;         // Top to Bottom

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  smooth();
  ellipseMode(RADIUS);
  frameRate(60);
  xpos = width/2;
  ypos = height/2;
  background('#1a1a1a');
}

function mouseClicked(){
  // when the mouse is clicked
  var xrand = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  var yrand = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

  var xrandmult = Math.floor(Math.random() * (1 - -1 + 1)) - 1;
  var yrandmult = Math.floor(Math.random() * (1 - -1 + 1)) - 1;

  xspeed = xrand * xrandmult;
  yspeed = yrand * yrandmult;
}

function draw() {
  //loop of what to display

  xpos = xpos + (xspeed * xdir);
  ypos = ypos + (yspeed * ydir);

  noStroke();

  if (mouseIsPressed){
    background('#1a1a1a');
    xpos = pmouseX;
    ypos = pmouseY;
  }

  //
  if (xpos > width+rad) {
    xdir *= -1;
    background('#ff0700');
  } else if (xpos <= 0){
    xdir *= -1;
    background('#00ffb7');
  }

  if (ypos > height+rad) {
    ydir *= -1;
    background('#00b7ff');
  } else if (ypos <= 0) {
    ydir *= -1;
    background('#fff700');
  }

  ellipse(xpos, ypos, rad, rad);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ellipse(xpos, ypos, rad, rad);
}
