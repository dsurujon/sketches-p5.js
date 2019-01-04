let t=0;

function setup() {
	createCanvas(300, 750);
	background(50);
  noStroke();

}

function draw() {
	background(15,15); // translucent background (creates trails)

	// make a x and y grid of ellipses
	let x = width/2;

    for (let i = 1; i<24 ; i = i+1) {
		let y = i*30; 
		// each particle moves in a circle
		let myX = x + 100 * cos(PI * t * i);

		fill(i*10, i*10, 250);
		ellipse(myX, y, 10); // draw particle
    }

	t = t + 0.002; // update time
}