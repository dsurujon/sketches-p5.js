let t=0;

function setup() {
	createCanvas(1200, 1200);
	background(15);
	noStroke();

}

function draw() {
	//background(15,15); // translucent background (creates trails)

	// make a x and y grid of traces

	for (let i=0; i <= 10; i = i+1){
		for (let j=0; j <= 10; j = j+1){
			x = 100 + 100*i;
			y = 100 + 100*j;
			
			drawX = x + 30 * cos((i+1)*t/j)*cos(t);
			drawY = y + 30 * cos((i+1)*t/j)*sin(t);
			fill (x/3, 250, y/3);
			ellipse(drawX, drawY, 2);
		}
		
	}

	t = t + 0.02; // update time
}