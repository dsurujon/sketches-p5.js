var t;
var x1 = 400;
var y1 = 400;

expansion = 40;


function setup() {
  createCanvas(800, 800);
  background(0);
  fill(255);
  noStroke();
  t = 0;
}

function draw() {
  x1 = constrain(x1 + random(-30,30), 0, 800);
  y1 = constrain(y1 + random(-30,30),0,800);
  
  c=random(255);
  fill(255,c,255, 80);
  
  r = random(50);
  ellipse(x1, y1,r,r);
  
  //console.log([x1, y1, xnew, ynew]);
  
  t += 0.005;
}

function mouseClicked(){
	clear();
	background(0);
	x1 = 0;
	y1 = 0;
	xnew = 0;
	ynew = 0;
	
}