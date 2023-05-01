// Get the canvas and context
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Set the initial positions and velocities of the balls
let ball1 = {
  x: 50, 
  y: 50, 
  vx: 2, 
  vy: 1, 
  radius: 30, 
  color: "orange"
};

let ball2 = {
  x: 200, 
  y: 150, 
  vx: 2, 
  vy: 1, 
  radius: 20, 
  color: "orange"
};

// Set the animation loop
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update the positions of the balls
    ball1.x += ball1.vx;
    ball1.y += ball1.vy;
    ball2.x += ball2.vx;
    ball2.y += ball2.vy;

    // Check for collisions with the walls
    if (ball1.x + ball1.radius > canvas.width || ball1.x - ball1.radius < 0) {
        ball1.vx = -ball1.vx;
    }
    if (ball1.y + ball1.radius > canvas.height || ball1.y - ball1.radius < 0) {
        ball1.vy = -ball1.vy;
    }
    if (ball2.x + ball2.radius > canvas.width || ball2.x - ball2.radius < 0) {
        ball2.vx = -ball2.vx;
    }
    if (ball2.y + ball2.radius > canvas.height || ball2.y - ball2.radius < 0) {
        ball2.vy = -ball2.vy;
    }

    // Check for collisions between the balls
    let dx = ball1.x - ball2.x;
    let dy = ball1.y - ball2.y;
   
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < ball1.radius + ball2.radius) {
        let angle = Math.atan2(dy, dx);
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);

        // Rotate ball1's velocity
        let vx1 = ball1.vx * cos + ball1.vy * sin;
        let vy1 = ball1.vy * cos - ball1.vx * sin;

        // Rotate ball2's velocity
        let vx2 = ball2.vx * cos + ball2.vy * sin;
        let vy2 = ball2.vy * cos - ball2.vx * sin;

        // Calculate new velocities for the balls
        let vx1Final = ((ball1.radius - ball2.radius) * vx1 + (2 * ball2.radius) * vx2) / (ball1.radius + ball2.radius);
        let vx2Final = ((2 * ball1.radius) * vx1 + (ball2.radius - ball1.radius) * vx2) / (ball1.radius + ball2.radius);
        let vy1Final = vy1;
        let vy2Final = vy2;

        // Rotate the velocities back
        ball1.vx = vx1Final * cos - vy1Final * sin;
        ball1.vy = vy1Final * cos + vx1Final * sin;
        ball2.vx = vx2Final * cos - vy2Final * sin;
        ball2.vy = vy2Final * cos + vx2Final * sin;
    }

    // Draw the balls
    ctx.beginPath();
    ctx.arc(ball1.x, ball1.y, ball1.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball1.color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(ball2.x, ball2.y, ball2.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball2.color;
    ctx.fill();
    ctx.closePath();

  // Request the next frame of the animation
  requestAnimationFrame(animate);
  }

// Start the animation loop
animate();