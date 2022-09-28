function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  const loop = 30;
  translate(width / 2, height / 2);
  for (let i = 1; i < loop; i++) {
    const angle = 5 * i + frameCount;
    const rotation = sin(angle) * 50;
    const x = 0;
    const y = 0;
    const ellWidth = 150 * i;
    const ellHeight = 25 * i;

    push();
    rotate(rotation);
    noFill();
    stroke("red");
    ellipse(x, y, ellWidth, ellHeight);
    pop();
  }
}
