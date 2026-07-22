// ===== Mobile Navigation Toggle =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const navIndicator = document.getElementById('navIndicator');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburgerBtn.classList.toggle('open');
});

// ===== Sliding Nav Indicator =====
function moveIndicator(el) {
  if (!el || !navIndicator) return;
  navIndicator.style.left = el.offsetLeft + 'px';
  navIndicator.style.width = el.offsetWidth + 'px';
}

function setActiveLink(link) {
  navAnchors.forEach(a => a.classList.remove('active'));
  link.classList.add('active');
  moveIndicator(link);
}

// ===== Custom Smooth Scroll (fixed duration) =====
function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  // easeInOutCubic easing for a natural start/stop
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const headerEl = document.querySelector('.navbar');

// Close mobile menu when a link is clicked + slide indicator to it + smooth scroll
navAnchors.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        e.preventDefault();
        const headerHeight = headerEl ? headerEl.offsetHeight : 0;
        const targetY = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
        smoothScrollTo(targetY, 700);
      }
    }

    navLinks.classList.remove('active');
    setActiveLink(link);
  });
});


// Position indicator correctly on initial load and on window resize
window.addEventListener('load', () => {
  const activeLink = document.querySelector('.nav-links a.active') || navAnchors[0];
  moveIndicator(activeLink);
});

window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav-links a.active');
  moveIndicator(activeLink);
});

// Highlight nav link + slide indicator based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;

  if (isAtBottom) {
    // If at the very bottom, activate the last section (contact)
    current = sections[sections.length - 1].getAttribute('id');
  } else {
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  }

  if (current) {
    const matchingLink = document.querySelector(`.nav-links a[href="#${current}"]`);
    if (matchingLink && !matchingLink.classList.contains('active')) {
      setActiveLink(matchingLink);
    }
  }
});


// ===== Set Current Year in Footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll Progress Bar (Barber Pole) - Draggable =====
const progressPole = document.getElementById('scrollProgressPole');
const progressTrack = document.getElementById('scrollProgressTrack');

let isDragging = false;
let dragStartY = 0;
let dragStartPoleTop = 0;

function getPoleTop() {
  return parseFloat(progressPole.style.top) || 0;
}

function getScrollFromPole(poleTop) {
  const trackHeight = progressTrack.offsetHeight;
  const poleHeight = 70;
  const availableTrack = trackHeight - poleHeight;
  const clampedTop = Math.max(0, Math.min(poleTop, availableTrack));
  const progress = availableTrack > 0 ? clampedTop / availableTrack : 0;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return progress * docHeight;
}

function updatePoleFromScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) : 0;
  const trackHeight = progressTrack.offsetHeight;
  const poleHeight = 70;
  const availableTrack = trackHeight - poleHeight;
  const poleTop = progress * availableTrack;
  progressPole.style.top = poleTop + 'px';
}

window.addEventListener('scroll', () => {
  if (!isDragging) {
    updatePoleFromScroll();
  }
});

window.addEventListener('resize', () => {
  if (!isDragging) {
    updatePoleFromScroll();
  }
});

function onDragStart(clientY) {
  isDragging = true;
  dragStartY = clientY;
  dragStartPoleTop = getPoleTop();
  progressPole.classList.add('dragging');
  document.body.style.cursor = 'grabbing';
  document.body.style.userSelect = 'none';
}

function onDragMove(clientY) {
  if (!isDragging) return;

  const deltaY = clientY - dragStartY;
  const newPoleTop = dragStartPoleTop + deltaY;

  const trackHeight = progressTrack.offsetHeight;
  const poleHeight = 70;
  const availableTrack = trackHeight - poleHeight;
  const clampedTop = Math.max(0, Math.min(newPoleTop, availableTrack));

  progressPole.style.top = clampedTop + 'px';

  // Scroll page proportionally
  const targetScroll = getScrollFromPole(clampedTop);
  window.scrollTo(0, targetScroll);
}

function onDragEnd() {
  isDragging = false;
  progressPole.classList.remove('dragging');
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
}

// Mouse events
progressPole.addEventListener('mousedown', (e) => {
  e.preventDefault();
  onDragStart(e.clientY);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) { onDragMove(e.clientY); }
function onMouseUp() {
  onDragEnd();
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

// Touch events
progressPole.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  onDragStart(touch.clientY);
  document.addEventListener('touchmove', onTouchMove, { passive: false });
  document.addEventListener('touchend', onTouchEnd);
});

function onTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  onDragMove(touch.clientY);
}
function onTouchEnd() {
  onDragEnd();
  document.removeEventListener('touchmove', onTouchMove);
  document.removeEventListener('touchend', onTouchEnd);
}

// Initialize
updatePoleFromScroll();

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  smoothScrollTo(0, 500);
});

// ===== Floating Chat Toggle =====
const chatTrigger = document.getElementById('chatTrigger');
const floatingChat = document.getElementById('floatingChat');

chatTrigger.addEventListener('click', () => {
  floatingChat.classList.toggle('active');
});

// Close chat popup when clicking outside
document.addEventListener('click', (e) => {
  if (!floatingChat.contains(e.target)) {
    floatingChat.classList.remove('active');
  }
});

// ===== Booking Form Handling =====
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;
  const service = document.getElementById('service').value;

  if (!name || !email || !date || !service) {
    formMessage.style.color = '#ff6b6b';
    formMessage.textContent = 'Будь ласка, заповніть усі поля.';
    return;
  }

  // Show success message
  formMessage.style.color = '#e2c58f';
  formMessage.textContent = `Дякуємо, ${name}! Ваш запис на "${service}" ${date} прийнято. Підтвердження надішлемо на ${email}.`;

  // Open email client with booking details
  const subject = encodeURIComponent(`Новий запис — Sharp Cuts: ${name}`);
  const body = encodeURIComponent(
`Новий запис на стрижку

Ім'я: ${name}
Email: ${email}
Дата: ${date}
Послуга: ${service}

— Sharp Cuts Барбершоп`
  );
  window.location.href = `mailto:bunvmerlok@gmail.com?subject=${subject}&body=${body}`;

  bookingForm.reset();
});

// ===== Simple Scroll Reveal for Sections =====
const revealElements = document.querySelectorAll('.service-card, .gallery-item, .about-content');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
