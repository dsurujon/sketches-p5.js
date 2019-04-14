let t=0;

function setup() {
  createCanvas(800, 800);
  background(0);
  
  noFill();

}

function draw() {	
	
	for (x=40; x<800; x+=40){
		y = -10;
		
		a = noise(t+x, t+y)*20;
		b = noise(t+y,t+x)*20;
		stroke(100, (x)%255, 150, 50);
		x1 = x-20-a;
		y1 = (y+t*100)+b;
		x2 = x+20+a;
		y2 = (y+t*100)+b;
		line(x1, y1, x2, y2);
		

		
	}
	t = t + 0.002; // update time
}
