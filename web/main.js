import './style.css'

console.log('Mind Lapse: High Signal Mode Active ⚡')

// --- CRAZY MINIMAL BACKGROUND ENGINE ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.onresize = resize;
resize();

// Themes: AI Agents, World, Tech, Space
const agents = [];
const dataNodes = [];
const orbits = [];

// Create Agents (The AI theme)
for(let i = 0; i < 15; i++) {
  agents.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    angle: Math.random() * Math.PI * 2,
    spin: Math.random() * 0.02,
    size: 2 + Math.random() * 3
  });
}

// Create Orbits (The Space theme)
for(let i = 0; i < 4; i++) {
  orbits.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 100 + Math.random() * 400,
    speed: 0.0001 + Math.random() * 0.0005,
    offset: Math.random() * Math.PI * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  
  // 1. Draw Orbits (Subtle Space)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;
  orbits.forEach(o => {
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  // 2. Draw Connections (Signal Network)
  ctx.strokeStyle = 'rgba(0, 255, 0, 0.08)';
  for(let i = 0; i < agents.length; i++) {
    for(let j = i + 1; j < agents.length; j++) {
      const dx = agents[i].x - agents[j].x;
      const dy = agents[i].y - agents[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 300) {
        ctx.beginPath();
        ctx.moveTo(agents[i].x, agents[i].y);
        ctx.lineTo(agents[j].x, agents[j].y);
        ctx.stroke();
      }
    }
  }

  // 3. Draw Agents (AI Entities)
  agents.forEach(a => {
    a.x += a.vx;
    a.y += a.vy;
    a.angle += a.spin;

    if(a.x < 0 || a.x > width) a.vx *= -1;
    if(a.y < 0 || a.y > height) a.vy *= -1;

    // Agent Body
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2);
    ctx.fill();

    // Agent Ring (Minimalist UI)
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.setLineDash([5, 10]);
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.size + 15, a.angle, a.angle + Math.PI * 1.5);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // 4. Tech Grid Pulses (Subtle Entrepreneurship/Data)
  if(Math.random() > 0.99) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    ctx.strokeStyle = 'rgba(255, 0, 144, 0.1)';
    ctx.beginPath();
    ctx.rect(rx - 20, ry - 20, 40, 40);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}
draw();

// --- SIGNAL STREAM DATA ---
const signals = [
  { tag: 'BREAKING', text: 'OpenAI Sora access rolling out to creators next week.' },
  { tag: 'TRENDING', text: 'The "Apple Glass" hype cycle begins again.' },
  { tag: 'TECH', text: 'Nvidia hits new ATH as H200 chips ship.' }
];

const pulseContainer = document.getElementById('pulse-items');
if(pulseContainer) {
  pulseContainer.innerHTML = signals.map(s => `
    <div class="pulse-item">
      <div class="pulse-meta">${s.tag}</div>
      <div class="pulse-text">${s.text}</div>
    </div>
  `).join('');
}

// --- INTERACTION ---
document.querySelectorAll('.news-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    card.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(y - 0.5) * -10}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateY(0) rotateX(0) scale(1)`;
  });
});
