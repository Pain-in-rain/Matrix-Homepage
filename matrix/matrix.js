const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters - binary-like for Matrix effect
const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function draw() {
  // Black BG with slight opacity to fade old characters
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Green characters
  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Loop
setInterval(draw, 33);

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
