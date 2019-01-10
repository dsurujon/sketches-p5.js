let cx = -0.7;
let cy = 0.46527;

let maxIter = 20;
let escapeValue = 2;

function setup() {
	createCanvas(400, 400);
	background(15);
	noStroke();

}

function draw() {
	// for each pixel
	for (var y=0; y<400; y++){
		for (var x=0; x<400; x++){
			let iterations = 0;
			let scaledx = (x-200)/200.0;
			let scaledy = (y-200)/200.0;
			
			while(dist(0,0,scaledx,scaledy)<1 && iterations < maxIter){
				let newx = scaledx*scaledx - scaledy*scaledy + cx;
				let newy = 2*scaledx*scaledy + cy;
				scaledx = newx;
				scaledy = newy;
				iterations++;
			}
			if (dist(0,0,scaledx,scaledy)<1){
				stroke(255);
			}
			else{
				stroke(1.0*255*iterations/maxIter);
			}
			point(x,y);
			
		}
	
	}

}

function mousePressed(){
	clear();
	background(15);
	cx = random(-1,1);
	cy = random(-1,1);
}