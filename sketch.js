let refSize;
var canvasWidth;
var canvasHeight;

var inputSpeed;
var inputFrameRate;

var piSpan;
var numerator;
var denominator;

let insideCircle = 0;
let totalDots = 0;
let pi = 0;

function setup() {
	var myCanvas = document.getElementById('canvas');
	canvasWidth = myCanvas.offsetWidth;
	canvasHeight = myCanvas.offsetHeight;
	var sketchCanvas = createCanvas(canvasWidth, canvasHeight);
	sketchCanvas.parent('canvas');

	inputSpeed = document.getElementById('input-speed');
	inputFrameRate = document.getElementById('input-frame');

	piSpan = document.getElementById('pi-value');
	numerator = document.getElementById('Numerator');
	denominator = document.getElementById('Denominator');
	
	background(40);
	translate(canvasWidth / 2, canvasHeight / 2);
	refSize = Math.min(canvasWidth, canvasHeight);

	rectMode(CENTER);
	strokeWeight(0);
	rect(0, 0, refSize, refSize);

	strokeWeight(3);
    ellipse(0, 0, refSize, refSize);
}

function draw() {
	translate(canvasWidth / 2, canvasHeight / 2);
	
	frameRate(Number(inputFrameRate.value));

	for (let i = 0; i < inputSpeed.value; i++) {
		let x = random(-refSize / 2, refSize / 2);
		let y = random(-refSize / 2, refSize / 2);
		totalDots++;
	
		let centerDistance = pow(x, 2) + pow(y, 2);
		if (centerDistance < pow(refSize / 2, 2)){
			insideCircle++;
			let colors = [random(0, 255), random(0, 255), 255];
			stroke(color(colors));
		}
		else {
			let colors = [255, random(0, 255), random(0, 255)];
			stroke(color(colors));
		}
		
		point(x, y);
	}
	
	numerator.innerHTML = insideCircle;
	denominator.innerHTML = totalDots;

	pi = 4 * (insideCircle / totalDots);
	piSpan.innerHTML = pi.toPrecision(21);

}


