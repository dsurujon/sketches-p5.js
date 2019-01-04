var t;
var x2 = 400;
var x3 = 400;
var y2 = 400;
var y3 = 400;

var c = 100;
function setup() {
  createCanvas(800, 800);
  background(0);
  
  noFill();
  t = 0;
}

function draw() {
  var x1 = width * noise(t + 55);
  var x4 = width * noise(t + 15);
  var y1 = height * noise(t + 35);
  var y4 = height * noise(t + 45);
  stroke(255,x1/2,x2/2,50);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;
}

function mouseClicked(){
	clear();
	background(0);
	c = random(255);
	x2 = mouseX;
	x3 = mouseX;
	y2 = mouseY;
	y3 = mouseY;
	
}