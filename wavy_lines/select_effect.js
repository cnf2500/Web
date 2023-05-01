function createHoverEffect(canvas, context, x1, y1, x2, y2, color) {
  canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2) {
      context.fillStyle = color;
      context.fillRect(x1, y1, x2 - x1, y2 - y1);
    }
  });

  canvas.addEventListener('mouseleave', function() {
    context.clearRect(x1, y1, x2 - x1, y2 - y1);
  });
}