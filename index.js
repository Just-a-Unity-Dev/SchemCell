var size = 25

function setup() {
    createCanvas(800, 400);
}
  
function draw() {
    background(65);
    for (var x = 0; x < width; x += width / size / 2) {
		for (var y = 0; y < height; y += height / size) {
			stroke(45);
			strokeWeight(.125);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}