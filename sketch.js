function preload(){


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#2F4F4F");

  angleMode(DEGREES);
  frameRate(12);
}

function draw() {

  translate(width/2, height/2);
  rotate(90);
  strokeWeight(2);
  stroke(lerpColor(color("#EEE8AA"), color("#00CED1"), frameCount/60));
  line(width/6, 0, cos(frameCount*6) * width/6, sin(frameCount*6) * width/6);
  if (frameCount == 60) {
    noLoop();
}
}
