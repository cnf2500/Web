// Get the canvas element
const canvas = document.getElementById('myShelf');

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Set the dimensions of the small squares
const squareHeight = 100;
const squareWidth = 10;

// Set the border color of the small squares
ctx.strokeStyle = 'black';

// Calculate the starting x-coordinate of the row to center it horizontally
const totalWidth = squareWidth * 50;
const startX = (canvas.width - totalWidth) / 2;

// Calculate the starting y-coordinate of the row to center it vertically
const startY = (canvas.height - squareHeight) / 2;

// Loop through and draw 50 small squares, aligned side by side
for (let i = 0; i < 50; i++) {
  // Calculate the x-coordinate of this small square, centered horizontally
  const squareX = startX + i * squareWidth;

  // Determine if this is the first or last small square
  const isFirstSquare = (i === 0);
  const isLastSquare = (i === 49);

  // Draw the small square with a white fill and black stroke
  ctx.fillStyle = 'white';
  ctx.fillRect(squareX, startY, squareWidth, squareHeight);

  // Adjust the position and dimensions of the stroke rectangle to ensure consistent line width
  const strokeX = squareX + 0.5;
  const strokeY = startY + 0.5;
  const strokeWidth = squareWidth - 1;
  const strokeHeight = squareHeight - 1;

  if (isFirstSquare) {
    // For the first small square, increase the stroke width on the left side
    ctx.strokeRect(strokeX - 10, strokeY, strokeWidth + 10, strokeHeight);
  } else if (isLastSquare) {
    // For the last small square, increase the stroke width on the right side
    ctx.strokeRect(strokeX, strokeY, strokeWidth + 10, strokeHeight);
  } else {
    // For all other small squares, use the default stroke width
    ctx.strokeRect(strokeX, strokeY, strokeWidth, strokeHeight);
  }
}

canvas.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;

  for (let i = 1; i < 49; i++) {
    const squareX = startX + i * squareWidth;
    const squareY = startY;
    const isHovering = (mouseX >= squareX && mouseX <= squareX + squareWidth && mouseY >= squareY && mouseY <= squareY + squareHeight);

    if (isHovering) {
      ctx.fillStyle = 'grey';
      ctx.fillRect(squareX, squareY, squareWidth, squareHeight);
    } else {
      ctx.fillStyle = 'white';
      ctx.fillRect(squareX, squareY, squareWidth, squareHeight);
    }

    const strokeX = squareX + 0.5;
    const strokeY = squareY + 0.5;
    const strokeWidth = squareWidth - 1;
    const strokeHeight = squareHeight - 1;

    if (i === 0) {
      ctx.strokeRect(strokeX - 10, strokeY, strokeWidth + 10, strokeHeight);
    } else if (i === 49) {
      ctx.strokeRect(strokeX, strokeY, strokeWidth + 10, strokeHeight);
    } else {
      ctx.strokeRect(strokeX, strokeY, strokeWidth, strokeHeight);
    }
  }
});