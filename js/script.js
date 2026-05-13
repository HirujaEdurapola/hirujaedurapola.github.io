/* ═══════════════════════════════════════════
   CURSOR
═══════════════════════════════════════════ */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
    ring.style.borderColor = 'rgba(255,94,58,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.borderColor = 'rgba(0,229,255,0.7)';
  });
});

/* ═══ STARFIELD ═══ */
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let W, H, stars = [];
let mouseX = 0, mouseY = 0;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < 220; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      alpha: Math.random() * 0.7 + 0.2,
      twinkle: Math.random() * Math.PI * 2
    });
  }
}
resize();
window.addEventListener('resize', resize);

document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / W - 0.5) * 2;
  mouseY = (e.clientY / H - 0.5) * 2;
});

let frame = 0;
function drawStars() {
  ctx.clearRect(0, 0, W, H);
  // Nebula gradient
  const grad = ctx.createRadialGradient(W*0.7, H*0.3, 0, W*0.7, H*0.3, W*0.5);
  grad.addColorStop(0, 'rgba(0,50,80,0.12)');
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const grad2 = ctx.createRadialGradient(W*0.2, H*0.8, 0, W*0.2, H*0.8, W*0.4);
  grad2.addColorStop(0, 'rgba(80,20,10,0.08)');
  grad2.addColorStop(1, 'transparent');
  ctx.fillStyle = grad2;
  ctx.fillRect(0, 0, W, H);

  frame += 0.01;
  stars.forEach(s => {
    s.twinkle += 0.02;
    const twinkleAlpha = s.alpha * (0.7 + 0.3 * Math.sin(s.twinkle));
    // parallax
    const px = s.x + mouseX * s.r * 8;
    const py = s.y + mouseY * s.r * 8;

    ctx.beginPath();
    ctx.arc(px, py, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(247,247,247,${twinkleAlpha})`;
    ctx.fill();

    // occasional cyan glow
    if (s.r > 1.2) {
      ctx.beginPath();
      ctx.arc(px, py, s.r * 2.5, 0, Math.PI * 2);
      const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 2.5);
      g.addColorStop(0, 'rgba(0,229,255,0.15)');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fill();
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();

/* ═══ NAV SCROLL ═══ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ═══ HAMBURGER ═══ */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ═══ REVEAL ON SCROLL ═══ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bars
      const bars = entry.target.querySelectorAll('.skill-fill');
      bars.forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ═══ SKILL BAR TRIGGER (for skill section) ═══ */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-card').forEach(c => skillObserver.observe(c));

/* ═══ CONTACT FORM ═══ */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#00E5FF';
  btn.style.color = '#08090D';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}

/* ═══ SMOOTH SCROLL ═══ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══ FILM REEL — DRAG SCROLL ═══ */
const reel = document.getElementById('filmReel');
if (reel) {
  let isDragging = false, startX, scrollLeft;
  reel.addEventListener('mousedown', e => {
    isDragging = true;
    reel.classList.add('dragging');
    startX = e.pageX - reel.offsetLeft;
    scrollLeft = reel.scrollLeft;
  });
  reel.addEventListener('mouseleave', () => { isDragging = false; reel.classList.remove('dragging'); });
  reel.addEventListener('mouseup', () => { isDragging = false; reel.classList.remove('dragging'); });
  reel.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - reel.offsetLeft;
    reel.scrollLeft = scrollLeft - (x - startX) * 1.6;
  });
  let touchStartX, touchScrollLeft;
  reel.addEventListener('touchstart', e => { touchStartX = e.touches[0].pageX; touchScrollLeft = reel.scrollLeft; }, { passive: true });
  reel.addEventListener('touchmove', e => { reel.scrollLeft = touchScrollLeft - (e.touches[0].pageX - touchStartX); }, { passive: true });
}

/* ═══ POSTER WALL — CURSOR PARALLAX ═══ */
const posterWall = document.getElementById('posterWall');
if (posterWall) {
  let wallRect;
  const posters = Array.from(posterWall.querySelectorAll('.poster-card'));
  const depths = [0.015, 0.025, 0.018, 0.012, 0.02];
  const baseTransforms = posters.map(p => p.style.transform);

  posterWall.addEventListener('mouseenter', () => { wallRect = posterWall.getBoundingClientRect(); });
  posterWall.addEventListener('mousemove', e => {
    if (!wallRect) wallRect = posterWall.getBoundingClientRect();
    const cx = e.clientX - wallRect.left - wallRect.width / 2;
    const cy = e.clientY - wallRect.top - wallRect.height / 2;
    posters.forEach((p, i) => {
      const d = depths[i] || 0.015;
      const tx = cx * d * 30;
      const ty = cy * d * 20;
      p.style.transform = baseTransforms[i] + ` translate(${tx}px,${ty}px)`;
    });
  });
  posterWall.addEventListener('mouseleave', () => {
    posters.forEach((p, i) => { p.style.transform = baseTransforms[i]; });
  });
}

/* ═══ BLOG — STREAM ANIMATION ═══ */
const termBody = document.querySelector('.terminal-body');
if (termBody) {
  const logObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const logs = entry.target.querySelectorAll('.log-entry');
        logs.forEach((log, i) => { setTimeout(() => log.classList.add('streamed'), i * 180); });
        logObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  logObs.observe(termBody);
}