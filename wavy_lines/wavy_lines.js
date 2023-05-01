const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const wave = { amplitude: 100, frequency: 0.002, phase: 0 };
const speed = 0.3;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  
  // First curve
  context.moveTo(-100, canvas.height / 2);

  for (let x = 0; x <= canvas.width; x += 5) {
    const y = canvas.height / 2 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
    context.lineTo(x, y);
  }

  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();

  // Second curve
  context.beginPath();
  context.moveTo(-100, canvas.height / 2 + 100);

  for (let x = 0; x <= canvas.width; x += 5) {
    const y = canvas.height / 2 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
    context.lineTo(x, y + 50);
  }

  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();

  wave.phase += speed * Math.PI / 180;
  requestAnimationFrame(draw);
}

draw();