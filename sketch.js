let canvSize = 1000;
let speed = 10;
let x = canvSize / 2;
let y = canvSize / 2;
let H = 0;
let S = 128;

function setup() {
  createCanvas(canvSize, canvSize);
  background(0);
  textSize(20);
  colorMode(HSL, 360, 255, 255, 255); // Hue, Saturation, Lightness
}

function draw() {
  if (keyIsDown(UP_ARROW)) {
    speed += 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    speed -= 1;
  }
  if (keyIsPressed) {
    for (let i = 0; i < speed; i++) {
      x = walk(x, canvSize);
      y = walk(y, canvSize);
      H = walk(H, 360);
      S = walk(S, 200);
      stroke(H, S, 255, 10);
      point(x, y);
    }
  }
}

function walk(v, loop, step = 1) {
  let r = random(1);
  if (r < 0.33) {
    v += step;
  } else if (r < 0.66) {
    v -= step;
  }
  v = mod(v, loop);
  return v;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
