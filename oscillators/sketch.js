let t=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
  noStroke();

}

function draw() {
  background(5,5); // translucent background (creates trails)

	translate(width/4, height/4);
  // make a x and y grid of ellipses
  for (let x = 0; x <= width/2; x = x + 80) {
    for (let y = 0; y <= height/2; y = y + 80) {
      // each particle moves in a circle
      let myX = x + 30 * cos(2 * PI * t * (1+x/80));
      let myY = y + 30 * sin(2 * PI * t * (1+y/80));

			fill(150, 100, 250);
      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.002; // update time
}