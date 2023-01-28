let angle1 = 0; //angolo che fa l'espansione

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  angle1 = angle1 + 1; //angolo che fa l'espansione
  let esp = abs(sin(angle1)) * 30; //larghezza dell'espansione
  background(0, 0, 0, 60);

  translate(width / 2, height / 2);
  for (let i = 0; i < esp; i = i + 0.1) {
    const angle = 5 * i + frameCount;
    const rotation = sin(angle) * 900;
    const ellWidth = 50 * i;
    const ellHeight = 40 * i;

    push();

    rotate(rotation);
    noFill();
    stroke(255, 0, 0, 240);
    strokeWeight(0.2);
    ellipse(0, 0, ellWidth, ellHeight);
    pop();
  }
}
