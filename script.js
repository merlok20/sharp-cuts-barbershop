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
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  if (current) {
    const matchingLink = document.querySelector(`.nav-links a[href="#${current}"]`);
    if (matchingLink && !matchingLink.classList.contains('active')) {
      setActiveLink(matchingLink);
    }
  }
});


// ===== Set Current Year in Footer =====
document.getElementById('year').textContent = new Date().getFullYear();

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

  // Simulate booking success
  formMessage.style.color = '#e2c58f';
  formMessage.textContent = `Дякуємо, ${name}! Ваш запис на "${service}" ${date} прийнято. Підтвердження надішлемо на ${email}.`;


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

// ===== Premium Barber Pole Scroll =====

const pole = document.querySelector(".barber-pole");
const track = document.querySelector(".scroll-track");

let current = 0;
let target = 0;

function animatePole() {

    current += (target - current) * 0.08;

    pole.style.transform = `translateY(${current}px)`;

    requestAnimationFrame(animatePole);

}

function updateTarget() {

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent =
        maxScroll <= 0 ? 0 : window.scrollY / maxScroll;

    const travel =
        track.clientHeight - pole.clientHeight - 6;

    target = percent * travel;

}

animatePole();
updateTarget();

window.addEventListener("scroll", updateTarget);
window.addEventListener("resize", updateTarget);