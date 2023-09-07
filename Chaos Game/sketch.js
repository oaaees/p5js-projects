var sides = 6;
var ratio = 2 / 3;
var current;

function setup() {
  createCanvas(650, 650);
  background(220);
  translate(width / 2, height / 2);
  angleMode(DEGREES);

  strokeWeight(2);
  stroke("black");

  for (let i = 0; i < sides; i++) {
    point(PolarToRect(width * (2 / 5), (360 / sides) * i));
  }

  current = PolarToRect(width * (2 / 5), 0);
}

function draw() {
  translate(width / 2, height / 2);

  rp = PolarToRect(width * (2 / 5), (360 / sides) * floor(random(0, sides)));

  dir = rp.sub(current);
  current.add(dir.mult(ratio));

  point(current);
}

function PolarToRect(r, theta) {
  return createVector(r * cos(theta), r * sin(-theta));
}
