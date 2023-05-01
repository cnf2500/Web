// Get the canvas element
const canvas = document.getElementById('myShelf');

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Set small square dimensions
const squareWidth = 10;
const squareHeight = 100;

// Calculate the x position of the first square so that the row is centered
const rowWidth = squareWidth * 50 - 49;
const startX = canvas.width / 2 - rowWidth / 2;

// Enable pixel snapping to fix border color issue
ctx.translate(0.5, 0.5);

// Draw 50 small squares and set up mouseover event for each square
for (let i = 0; i < 50; i++) {
  // Calculate the x and y position of the current square
  const squareX = startX + i * squareWidth - i;
  const squareY = canvas.height / 2 - squareHeight / 2;

  // Draw small square
  ctx.fillStyle = 'white';
  ctx.fillRect(squareX, squareY, squareWidth, squareHeight);

  // Draw black border
  ctx.strokeStyle = 'black';
  ctx.strokeRect(squareX, squareY, squareWidth, squareHeight);

  // Set up mouseover event for current square
  canvas.addEventListener('mousemove', function(e) {
    // Check if mouse is hovering over square or its original y position
    const hoveredSquareX = startX + i * squareWidth - i;
    const hoveredSquareY = canvas.height / 2 - squareHeight / 2;
    let isSquareRaised = false;
    if (e.offsetX >= hoveredSquareX && e.offsetX <= hoveredSquareX + squareWidth &&
        (e.offsetY >= hoveredSquareY && e.offsetY <= hoveredSquareY + squareHeight ||
         e.offsetY <= hoveredSquareY && e.offsetY >= hoveredSquareY - 10)) {
      // If the square hasn't been raised yet, raise it by 10 pixels on the y-axis
      if (!isSquareRaised) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(0.5, 0.5);
        ctx.fillStyle = 'white';
        ctx.fillRect(squareX, squareY - 10, squareWidth, squareHeight);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(squareX, squareY - 10, squareWidth, squareHeight);
        ctx.translate(-0.5, -0.5);
        isSquareRaised = true;
      }
    } else {
      // If the square has been raised, lower it back to its original y position
      if (isSquareRaised) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(0.5, 0.5);
        ctx.fillStyle = 'white';
        ctx.fillRect(squareX, squareY, squareWidth, squareHeight);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(squareX, squareY, squareWidth, squareHeight);
        ctx.translate(-0.5, -0.5);
        isSquareRaised = false;
      }
    }
  });
}

// Disable pixel snapping
ctx.translate(-0.5, -0.5);