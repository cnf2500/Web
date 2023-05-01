// Get the canvas element and its 2D context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set the initial positions and velocities of the balls
let ball1 = {
  x: 50,
  y: 150,
  vx: 100, // velocity in pixels per second
  radius: 10,
  color: "blue"
};

let ball2 = {
  x: 50,
  y: 225,
  vx: 50, // velocity in pixels per second
  radius: 15,
  color: "red"
};

let ball3 = {
  x: 50,
  y: 75,
  vx: 120, // velocity in pixels per second
  radius: 5,
  color: "yellow"
};

let ball4 = {
  x: ball2.x + 80,
  y: ball2.y + 10,
  vx: 50,
  radius: 7,
  color: "green"
}


// Set the last timestamp
let lastTime = Date.now();

// Define the animation loop function
function draw() {
  // Get the current timestamp
  const currentTime = Date.now();

  // Calculate the time elapsed since the last frame
  const deltaTime = (currentTime - lastTime) / 1000; // convert to seconds

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the balls
  drawBall(ball1);
  drawBall(ball2);
  drawBall(ball3);
  drawBall(ball4);

  // Update the positions of the balls based on their velocities and the elapsed time
  ball1.x += ball1.vx * deltaTime;
  ball2.x += ball2.vx * deltaTime;
  ball3.x += ball3.vx * deltaTime;
  ball4.x = ball2.x + 30 * Math.cos(currentTime / 1000); // orbit around ball2
  ball4.y = ball2.y + 30 * Math.sin(currentTime / 1000); // orbit around ball2

  // If a ball goes off the right edge of the canvas, reset its position to the left edge
  if (ball1.x - ball1.radius > canvas.width) {
    ball1.x = -ball1.radius;
  }
  if (ball2.x - ball2.radius > canvas.width) {
    ball2.x = -ball2.radius;
  }
  if (ball3.x - ball3.radius > canvas.width) {
    ball3.x = -ball3.radius;
  }
  
  // Set the last timestamp to the current timestamp
  lastTime = currentTime;

  // Call the draw function again using requestAnimationFrame
  requestAnimationFrame(draw);
}

// Define the function to draw a ball
function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

// Call the draw function to start the animation loop
draw();
