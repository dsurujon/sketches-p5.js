let t=0;

let A1 = 0.7;
let A2 = 0.5;
let A3 = 0.3;
let A4 = 0.3;
let w1 = 2;
let w2 = 2.4;
let w3 = 3;
let w4 = 2.1;
let p1 = 0.541;
let p2 = 0.3;
let p3 = 0.44;
let p4 = 1.3;

let x = 0;
let y = 0;

function setup() {
	createCanvas(800, 800);
	background(15);
	noStroke();

}

function draw() {
	//background(15,15); // translucent background (creates trails)

	// make a x and y grid of traces
	
	translate(400,400);
	
	let xold = x;
	let yold = y;
	x = 200*(Math.exp(-A1*t)*sin(w1*t + p1)+Math.exp(-A2*t)*sin(w2*t+p2));
	y = 200*(Math.exp(-A3*t)*sin(w3*t + p3)+Math.exp(-A4*t)*sin(w4*t+p4));
	console.log([Math.exp(-A1*t), x,y]);

	line(xold, yold, x, y);

	t = t + 0.1; // update time
}

function mousePressed(){
	clear();
	background(15);
	stroke(random(255), 100+random(50), 255, 150);
	w1 = random(2,3);
	w2 = random(2,3);
	w3 = random(2,3);
	w4 = random(2,3);
	A1 = random(1/100);
	A2 = random(1/100);
	A3 = random(1/100);
	A4 = random(1/100);
	p1 = random(0,PI);
	p2 = random(0,PI);
	p3 = random(0,PI);
	p4 = random(0,PI);
	
}