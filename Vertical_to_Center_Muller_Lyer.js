#H34106070_陳靖則
  
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(40);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  let numIllusions = 12;
  let radii = [60, 100, 140, 180, 220];
  let arrowLength = 30;

  // Draw center cross for focus
  stroke(200); // Gray color for the cross
  strokeWeight(4); // Increase stroke weight to make it thicker
  line(-20, 0, 20, 0); // Horizontal line
  line(0, -20, 0, 20); // Vertical line

  // Determine arrow direction change instantaneously every second
  let period = 40; // Every 40 frames (1 second at 40 FPS) change direction
  let direction = floor(frameCount / period) % 2 == 0 ? 1 : -1;

  stroke(220); // Set stroke color to a very light gray
  strokeWeight(4); // Increase stroke weight to make lines thicker

  for (let i = 0; i < numIllusions; i++) {
    let angle = (360 / numIllusions) * i;

    for (let j = 0; j < radii.length; j++) {
      push();
      rotate(angle);
      translate(0, radii[j]);

      // Draw the line segment for each layer, maintaining connection
      if (j > 0) {
        line(0, -radii[j] + radii[j - 1], 0, 0); // Draw connecting line to previous layer
      }
      line(0, 0, 0, arrowLength); // Draw main segment

      // Determine arrow direction based on layer
      let layerDirection = (j % 2 == 0) ? direction : -direction;
      drawArrow(0, arrowLength, 8 * layerDirection);
      pop();
    }
  }
}

function drawArrow(x, y, arrowSize) {
  push();
  translate(x, y);
  stroke(220); // Set stroke color to a very light gray
  strokeWeight(4); // Increase stroke weight to make arrows thicker
  line(0, 0, -arrowSize, -arrowSize);
  line(0, 0, arrowSize, -arrowSize);
  pop();
}
