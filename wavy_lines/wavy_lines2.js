import { createHoverEffect } from './select_effect.js';

const canvas = document.getElementById('myLines');
const context = canvas.getContext('2d');
const wave = { amplitude: 50, frequency: 0.002, phase: 0 };
const speed = 0.25;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  
  // Curve 1.1
  for (let x = 350; x <= canvas.width; x += 5) {
    const y = canvas.height - 185 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
    if (x === 350) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }

  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();

  // Curve 1.2
  context.beginPath();
  for (let x = 350; x <= canvas.width; x += 5) {
    const y = canvas.height - 185 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
    if (x === 350) {
      context.moveTo(x, y + 50);
    } else {
      context.lineTo(x, y + 50);
    }
  }

  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();

  createHoverEffect(canvas, context, 350, canvas.height - 235, canvas.width, canvas.height - 185, 'grey');

  // Curve 2.1
  for (let x = 350; x <= canvas.width; x += 5) {
    const y = canvas.height - 370 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
    if (x === 350) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }

  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();

  // Curve 2.2
  context.beginPath();
  for (let x = 350; x <= canvas.width; x += 5) {
    const y = canvas.height - 370 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
    if (x === 350) {
      context.moveTo(x, y + 50);
    } else {
      context.lineTo(x, y + 50);
    }
  }

  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();

    // Curve 3.1
    for (let x = 350; x <= canvas.width; x += 5) {
      const y = canvas.height - 555 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
      if (x === 350) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
  
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();
  
    // Curve 3.2
    context.beginPath();
    for (let x = 350; x <= canvas.width; x += 5) {
      const y = canvas.height - 555 + wave.amplitude * Math.sin((x * wave.frequency) + wave.phase);
      if (x === 350) {
        context.moveTo(x, y + 50);
      } else {
        context.lineTo(x, y + 50);
      }
    }
  
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();

  // Vertical Line at (350, 0)
context.beginPath();
context.moveTo(350, 0);
context.lineTo(350, canvas.height);
context.strokeStyle = 'black';
context.lineWidth = 2;
context.stroke();

wave.phase += speed * Math.PI / 180;
requestAnimationFrame(draw);
}

draw();