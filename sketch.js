// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(8);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  var now = new Date();
  if((now.getTime() - (new Date("Jan 1, 2021 00:00").getTime()) == 0)) {
    document.getElementById('fest').innerHtml = 'Happy New Year';
  }
  if (random(1) < 0.25) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
