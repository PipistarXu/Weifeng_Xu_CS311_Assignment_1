
// OFF THE CLOCK — Three Rings
// Three rings.Outer: Hr; Mid: Min; Inner: Sec
//One notch at a time, and resets when its unit rolls over.
let lastMinute = -1;
const HOUR_COL = '#FFFF00';
const MIN_COL = '#0000FF';
const SEC_COL = '#90EE90';
 
function sketchSize() {
  return min(windowWidth, windowHeight) - 40;
}
 
function setup() {
  createCanvas(sketchSize(), sketchSize());
  lastMinute = minute();
}
 
function windowResized() {
  resizeCanvas(sketchSize(), sketchSize());
}
 
function draw() {
  const h = hour();
  const m = minute();
  const s = second();
 if (m !== lastMinute) {
    lastMinute = m;
    console.log('minute goes', m);
  }
  background('#0b0d12');
  //shift the whole model from left-top corner to the center
  translate(width / 2, height / 2);
  const d = width;
  ring(d * 0.9, HOUR_COL, (h % 12) / 12);
  ring(d * 0.7, MIN_COL, m / 60);
  ring(d * 0.4, SEC_COL, s / 60);
}
// one ring: faint full circle + the arc that has grown so far
function ring(d, col, t) {
  const w = width * 0.075;
  noFill();
  strokeWeight(w);
  // track, make the color of ring lighter when the arc does not go through yet
  stroke(col + '20');
  circle(0, 0, d);
 
  if (t <= 0) 
    return;
  // grown arc
  stroke(col);
  arc(0, 0, d, d, -HALF_PI, -HALF_PI + t * TWO_PI);
}