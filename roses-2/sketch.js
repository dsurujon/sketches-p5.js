let x = 200;
let y = 200;
let t = 0;
let n = 7;
let a = 50;
let drawX = 300;
let drawY = 200;


function setup() {
	createCanvas(400, 400);
	background(15);
	stroke(100,250 ,255, 10);
}

function draw() {
	xold = drawX;
	yold = drawY;
	for(let i=0; i<a; i+=18){
		let theta = t + i*PI/180;
		drawX = x + 100*cos(n*theta)*cos(theta);
		drawY = y + 100*cos(n*theta)*sin(theta);
		line(xold, yold, drawX, drawY);
	}

	//console.log(xold, yold, drawX, drawY);
	
	t = t + 0.01;
}

function mousePressed(){
	clear();
	background(15);
	n = random(20);
	a = random(20, 100);
}