let t=0;

function setup() {
	createCanvas(800, 800);
	background(50);
	noStroke();

}

function draw() {
	background(15,15); // translucent background (creates trails)

	// make a x and y grid of ellipses
	let x = width/2;
	let y = height/2;

    for (let i = 1; i<24 ; i = i+1) {

		// each particle moves in a circle
		let myX = x + 400 * cos(PI * t *i)*cos(t*i);
		let myY = y - 400 * sin(PI * t *i)*sin(t*i);

		fill(i*10, i*10, 250);
		ellipse(myX, myY, 10); // draw particle
    }

	t = t + 0.002; // update time
}