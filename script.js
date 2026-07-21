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

// ===== Scroll Progress Bar (Barber Pole) =====
const progressPole = document.getElementById('scrollProgressPole');
const progressTrack = document.getElementById('scrollProgressTrack');

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  // Move the pole along the track (track height 500px, pole height 60px, 2px padding each side)
  const trackHeight = 500;
  const poleHeight = 60;
  const availableTrack = trackHeight - poleHeight - 4; // 4 for 2px top + 2px bottom padding
  const poleTop = 2 + (progress / 100) * availableTrack;

  progressPole.style.top = poleTop + 'px';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);
updateProgressBar();

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
