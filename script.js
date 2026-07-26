// ===== i18n Translations =====
const translations = {
  uk: {
    nav_home: 'Головна', nav_services: 'Послуги', nav_about: 'Про нас', nav_gallery: 'Галерея',
    nav_testimonials: 'Відгуки', nav_contact: 'Контакти',
    hero_desc: 'Класичний стиль. Сучасна точність. Кожна стрижка — це історія.',
    hero_btn: 'Записатися',
    stat_years: 'Років досвіду', stat_clients: 'Задоволених клієнтів', stat_styles: 'Стилів стрижок', stat_masters: 'Професійних майстрів',
    services_title: 'Наші Послуги',
    service1_title: 'Класична стрижка', service1_desc: 'Точна стрижка, підібрана під ваш стиль і форму обличчя.',
    service2_title: 'Стрижка бороди', service2_desc: 'Формування та стилізація бороди з експертною точністю.',
    service3_title: 'Гоління гарячим рушником', service3_desc: 'Традиційне гоління небезпечною бритвою з гарячим рушником.',
    service4_title: 'Фарбування волосся', service4_desc: 'Професійне фарбування волосся для оновленого образу.',
    service5_title: 'Дитяча стрижка', service5_desc: 'Дбайлива та весела стрижка для наймолодших клієнтів.',
    service6_title: 'Повний комплекс', service6_desc: 'Стрижка, оформлення бороди та гоління гарячим рушником.',
    about_title: 'Про Нас',
    about_desc: 'Барбершоп Sharp Cuts обслуговує громаду вже понад 15 років. Наші досвідчені майстри поєднують традиційні техніки з сучасними тенденціями, щоб створити для вас ідеальний образ. Заходьте, розслабтеся, а про решту подбаємо ми.',
    gallery_title: 'Галерея',
    testimonials_title: 'Відгуки Клієнтів',
    testimonial1_text: '"Найкращий барбершоп у місті! Завжди якісна стрижка та приємна атмосфера."', testimonial1_author: '— Андрій К.',
    testimonial2_text: '"Дуже задоволений роботою майстрів. Рекомендую всім, хто цінує якість!"', testimonial2_author: '— Михайло С.',
    testimonial3_text: '"Гоління гарячим рушником — це щось неймовірне. Обов\'язково прийду ще!"', testimonial3_author: '— Олексій В.',
    contact_title: 'Записатися на Прийом',
    form_name: "Ваше ім'я*", form_phone: 'Ваш телефон*', form_email: 'Ваш Email',
    form_date: 'Оберіть дату', form_time: 'Оберіть час*', form_service: 'Оберіть послугу*',
    form_submit_text: 'Записатися',
    form_name_error: "Введіть ім'я", form_phone_error: 'Введіть номер телефону',
    form_date_error: 'Виберіть дату', form_time_error: 'Виберіть час', form_service_error: 'Виберіть послугу',
    modal_title: 'Запис підтверджено!', modal_btn: 'Дякую!',
    chat_header: "Зв'язатися з нами", footer_rights: 'Всі права захищено.',
    gallery_labels: ['Класична стрижка', 'Стрижка бороди', 'Гаряче гоління', 'Фарбування', 'Дитяча стрижка', 'Повний комплекс']
  },
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_about: 'About', nav_gallery: 'Gallery',
    nav_testimonials: 'Testimonials', nav_contact: 'Contact',
    hero_desc: 'Classic style. Modern precision. Every haircut tells a story.',
    hero_btn: 'Book Now',
    stat_years: 'Years Experience', stat_clients: 'Happy Clients', stat_styles: 'Haircut Styles', stat_masters: 'Professional Barbers',
    services_title: 'Our Services',
    service1_title: 'Classic Haircut', service1_desc: 'Precise cut tailored to your style and face shape.',
    service2_title: 'Beard Trim', service2_desc: 'Expert beard shaping and styling with precision.',
    service3_title: 'Hot Towel Shave', service3_desc: 'Traditional straight razor shave with hot towel treatment.',
    service4_title: 'Hair Coloring', service4_desc: 'Professional hair coloring for a refreshed look.',
    service5_title: 'Kids Haircut', service5_desc: 'Gentle and fun haircut for our youngest clients.',
    service6_title: 'Full Package', service6_desc: 'Haircut, beard styling, and hot towel shave combo.',
    about_title: 'About Us',
    about_desc: 'Sharp Cuts Barbershop has been serving the community for over 15 years. Our experienced barbers blend traditional techniques with modern trends to create your perfect look. Come in, relax, and let us take care of the rest.',
    gallery_title: 'Gallery', testimonials_title: 'Client Testimonials',
    testimonial1_text: '"The best barbershop in town! Always a quality haircut and a pleasant atmosphere."', testimonial1_author: '— Andriy K.',
    testimonial2_text: '"Very satisfied with the barbers\' work. I recommend it to everyone who values quality!"', testimonial2_author: '— Mykhailo S.',
    testimonial3_text: '"Hot towel shave is incredible. I\'ll definitely come back!"', testimonial3_author: '— Oleksiy V.',
    contact_title: 'Book an Appointment',
    form_name: 'Your Name*', form_phone: 'Your Phone*', form_email: 'Your Email',
    form_date: 'Select Date', form_time: 'Select Time*', form_service: 'Select Service*',
    form_submit_text: 'Book Now',
    form_name_error: 'Enter your name', form_phone_error: 'Enter your phone number',
    form_date_error: 'Select a date', form_time_error: 'Select a time', form_service_error: 'Select a service',
    modal_title: 'Booking Confirmed!', modal_btn: 'Thank you!',
    chat_header: 'Contact Us', footer_rights: 'All rights reserved.',
    gallery_labels: ['Classic Haircut', 'Beard Trim', 'Hot Shave', 'Coloring', 'Kids Cut', 'Full Package']
  }
};

// ===== Gallery Images Array =====
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80', labelKey: 0 },
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665333?auto=format&fit=crop&w=600&q=80', labelKey: 1 },
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80', labelKey: 2 },
  { src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80', labelKey: 3 },
  { src: 'https://images.unsplash.com/photo-1567894340315-735d7c361db7?auto=format&fit=crop&w=600&q=80', labelKey: 4 },
  { src: 'https://images.unsplash.com/photo-1503951914875-452cb2b3f769?auto=format&fit=crop&w=600&q=80', labelKey: 5 }
];

// ===== DOM Cache (single lookup, cached) =====
const $ = (id) => document.getElementById(id);
const dom = {
  hamburgerBtn: $('hamburgerBtn'),
  navLinks: $('navLinks'),
  navIndicator: $('navIndicator'),
  navAnchors: () => document.querySelectorAll('.nav-links a'),
  sections: () => document.querySelectorAll('section[id]'),
  header: document.querySelector('.navbar'),
  progressPole: $('scrollProgressPole'),
  progressTrack: $('scrollProgressTrack'),
  backToTopBtn: $('backToTop'),
  chatTrigger: $('chatTrigger'),
  floatingChat: $('floatingChat'),
  bookingForm: $('bookingForm'),
  formMessage: $('formMessage'),
  submitBtn: $('submitBtn'),
  modalOverlay: $('confirmModal'),
  modalText: $('modalText'),
  modalClose: $('modalClose'),
  modalOkBtn: $('modalOkBtn'),
  lightbox: $('lightbox'),
  lightboxImg: $('lightboxImg'),
  lightboxClose: $('lightboxClose'),
  lightboxPrev: $('lightboxPrev'),
  lightboxNext: $('lightboxNext'),
  langUk: $('langUk'),
  langEn: $('langEn'),
  heroContent: document.querySelector('.hero-content'),
  heroSection: document.querySelector('.hero'),
  statsSection: $('stats'),
  galleryGrid: $('galleryGrid'),
  yearEl: $('year')
};

let currentLang = 'uk';
let currentImageIndex = 0;

// ===== Throttle helper =====
function rafThrottle(fn) {
  let ticking = false;
  return function(...args) {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        fn(...args);
        ticking = false;
      });
    }
  };
}

// ===== Language Switcher =====
function updateGalleryLabels(lang) {
  const labels = document.querySelectorAll('.gallery-label');
  const t = translations[lang].gallery_labels;
  labels.forEach((label, i) => { if (t && t[i]) label.textContent = t[i]; });
}

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (!t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
      el.setAttribute('placeholder', t[key]);
    } else {
      el.textContent = t[key];
    }
  });

  updateGalleryLabels(lang);
  dom.langUk.classList.toggle('active', lang === 'uk');
  dom.langEn.classList.toggle('active', lang === 'en');
  localStorage.setItem('sharpcuts_lang', lang);
}

dom.langUk.addEventListener('click', () => applyLanguage('uk'));
dom.langEn.addEventListener('click', () => applyLanguage('en'));

// ===== Mobile Navigation =====
dom.hamburgerBtn.addEventListener('click', () => {
  const isOpen = dom.navLinks.classList.toggle('active');
  dom.hamburgerBtn.classList.toggle('open');
  dom.hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  if (dom.navLinks.classList.contains('active') &&
      !dom.navLinks.contains(e.target) &&
      !dom.hamburgerBtn.contains(e.target)) {
    dom.navLinks.classList.remove('active');
    dom.hamburgerBtn.classList.remove('open');
    dom.hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

// ===== Sliding Nav Indicator =====
function moveIndicator(el) {
  if (!el || !dom.navIndicator) return;
  dom.navIndicator.style.left = el.offsetLeft + 'px';
  dom.navIndicator.style.width = el.offsetWidth + 'px';
}

function setActiveLink(link) {
  dom.navAnchors().forEach(a => {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
  });
  link.classList.add('active');
  link.setAttribute('aria-current', 'page');
  moveIndicator(link);
}

// ===== Smooth Scroll =====
function smoothScrollTo(targetY, duration = 600) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

dom.navAnchors().forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        e.preventDefault();
        const h = dom.header ? dom.header.offsetHeight : 0;
        const targetY = targetSection.getBoundingClientRect().top + window.scrollY - h;
        smoothScrollTo(targetY, 600);
      }
    }
    dom.navLinks.classList.remove('active');
    dom.hamburgerBtn.classList.remove('open');
    dom.hamburgerBtn.setAttribute('aria-expanded', 'false');
    setActiveLink(link);
  });
});

// ===== Consolidated Scroll Handler (single RAF-throttled listener) =====
const scrollState = { currentSection: '', isAtBottom: false };

function onScroll() {
  const sy = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  scrollState.isAtBottom = sy + window.innerHeight >= document.documentElement.scrollHeight - 1;

  // 1. Back to top button
  dom.backToTopBtn.classList.toggle('visible', sy > 400);

  // 2. Scroll progress bar
  if (!isDragging) {
    const progress = docH > 0 ? (sy / docH) : 0;
    const trackH = dom.progressTrack.offsetHeight;
    const avail = trackH - 70;
    dom.progressPole.style.top = (progress * avail) + 'px';
  }

  // 3. Nav section highlight
  let current = '';
  if (scrollState.isAtBottom) {
    const allSections = dom.sections();
    current = allSections[allSections.length - 1]?.getAttribute('id') || '';
  } else {
    dom.sections().forEach(section => {
      if (sy >= section.offsetTop - 120) current = section.getAttribute('id');
    });
  }
  if (current && current !== scrollState.currentSection) {
    scrollState.currentSection = current;
    const match = document.querySelector(`.nav-links a[href="#${current}"]`);
    if (match && !match.classList.contains('active')) setActiveLink(match);
  }

  // 4. Hero parallax (desktop only)
  if (window.innerWidth > 768 && sy <= window.innerHeight) {
    dom.heroContent.style.transform = `translateY(${sy * 0.15}px)`;
    dom.heroContent.style.opacity = 1 - (sy / (window.innerHeight * 1.2));
  }
}

const throttledScroll = rafThrottle(onScroll);
window.addEventListener('scroll', throttledScroll, { passive: true });

// ===== Consolidated Resize Handler =====
function onResize() {
  moveIndicator(document.querySelector('.nav-links a.active'));
  if (!isDragging) {
    const sy = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docH > 0 ? (sy / docH) : 0;
    const trackH = dom.progressTrack.offsetHeight;
    dom.progressPole.style.top = (progress * (trackH - 70)) + 'px';
  }
}
window.addEventListener('resize', rafThrottle(onResize), { passive: true });

// ===== Keydown (single listener for Escape / lightbox) =====
document.addEventListener('keydown', (e) => {
  // Mobile menu close
  if (e.key === 'Escape' && dom.navLinks.classList.contains('active')) {
    dom.navLinks.classList.remove('active');
    dom.hamburgerBtn.classList.remove('open');
    dom.hamburgerBtn.setAttribute('aria-expanded', 'false');
    dom.hamburgerBtn.focus();
    return;
  }

  // Lightbox navigation
  if (!dom.lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

// ===== Year =====
dom.yearEl.textContent = new Date().getFullYear();

// ===== Scroll Progress Bar (Draggable) =====
let isDragging = false;
let dragStartY = 0;
let dragStartPoleTop = 0;

function getPoleTop() { return parseFloat(dom.progressPole.style.top) || 0; }

function onDragStart(clientY) {
  isDragging = true;
  dragStartY = clientY;
  dragStartPoleTop = getPoleTop();
  dom.progressPole.classList.add('dragging');
  document.body.style.cursor = 'grabbing';
  document.body.style.userSelect = 'none';
}

function onDragMove(clientY) {
  if (!isDragging) return;
  const deltaY = clientY - dragStartY;
  const trackH = dom.progressTrack.offsetHeight;
  const avail = trackH - 70;
  const clamped = Math.max(0, Math.min(dragStartPoleTop + deltaY, avail));
  dom.progressPole.style.top = clamped + 'px';
  window.scrollTo(0, avail > 0 ? (clamped / avail) * (document.documentElement.scrollHeight - window.innerHeight) : 0);
}

function onDragEnd() {
  isDragging = false;
  dom.progressPole.classList.remove('dragging');
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
}

// Mouse
dom.progressPole.addEventListener('mousedown', (e) => {
  e.preventDefault();
  onDragStart(e.clientY);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
function onMouseMove(e) { onDragMove(e.clientY); }
function onMouseUp() { onDragEnd(); document.removeEventListener('mousemove', onMouseMove); document.removeEventListener('mouseup', onMouseUp); }

// Touch
dom.progressPole.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  onDragStart(t.clientY);
  document.addEventListener('touchmove', onTouchMove, { passive: false });
  document.addEventListener('touchend', onTouchEnd);
});
function onTouchMove(e) { e.preventDefault(); onDragMove(e.touches[0].clientY); }
function onTouchEnd() { onDragEnd(); document.removeEventListener('touchmove', onTouchMove); document.removeEventListener('touchend', onTouchEnd); }

// ===== Back to Top =====
dom.backToTopBtn.addEventListener('click', () => smoothScrollTo(0, 500));

// ===== Floating Chat =====
dom.chatTrigger.addEventListener('click', () => dom.floatingChat.classList.toggle('active'));
document.addEventListener('click', (e) => {
  if (!dom.floatingChat.contains(e.target)) dom.floatingChat.classList.remove('active');
});

// ===== Gallery Rendering =====
function renderGallery() {
  dom.galleryGrid.innerHTML = '';
  galleryImages.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;
    item.innerHTML = `
      <img src="${img.src}" alt="${translations[currentLang].gallery_labels[img.labelKey]}" loading="lazy" />
      <div class="gallery-label">${translations[currentLang].gallery_labels[img.labelKey]}</div>
    `;
    item.addEventListener('click', () => openLightbox(index));
    dom.galleryGrid.appendChild(item);
  });
}

// ===== Lightbox =====
function openLightbox(index) {
  currentImageIndex = index;
  updateLightboxImage();
  dom.lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function updateLightboxImage() {
  const img = galleryImages[currentImageIndex];
  dom.lightboxImg.src = img.src;
  dom.lightboxImg.alt = translations[currentLang].gallery_labels[img.labelKey] || '';
}
function closeLightbox() {
  dom.lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
}
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightboxImage();
}

dom.lightboxClose.addEventListener('click', closeLightbox);
dom.lightboxPrev.addEventListener('click', prevImage);
dom.lightboxNext.addEventListener('click', nextImage);
dom.lightbox.addEventListener('click', (e) => { if (e.target === dom.lightbox) closeLightbox(); });

// ===== Stats Counter Animation =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const increment = Math.ceil(target / 30);
    let current = 0;
    function update() {
      current += increment;
      if (current >= target) { counter.textContent = target; return; }
      counter.textContent = current;
      requestAnimationFrame(update);
    }
    update();
  });
}

let countersAnimated = false;
if (dom.statsSection) {
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });
  statsObs.observe(dom.statsSection);
}

// ===== Form Validation =====
function showError(id) { const el = document.getElementById(id); if (el) el.classList.add('visible'); }
function hideError(id) { const el = document.getElementById(id); if (el) el.classList.remove('visible'); }

// ===== Booking Form (NO setTimeout — instant feedback) =====
dom.bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelectorAll('.field-error').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.booking-form input.error, .booking-form select.error').forEach(el => el.classList.remove('error'));

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const service = document.getElementById('service').value;

  let valid = true;
  if (!name) { document.getElementById('name').classList.add('error'); showError('nameError'); valid = false; }
  if (!phone) { document.getElementById('phone').classList.add('error'); showError('phoneError'); valid = false; }
  if (!date) { document.getElementById('date').classList.add('error'); showError('dateError'); valid = false; }
  if (!time) { document.getElementById('time').classList.add('error'); showError('timeError'); valid = false; }
  if (!service) { document.getElementById('service').classList.add('error'); showError('serviceError'); valid = false; }

  if (!valid) {
    dom.formMessage.style.color = '#ff6b6b';
    dom.formMessage.textContent = 'Будь ласка, заповніть усі обов\'язкові поля.';
    return;
  }

  // Show spinner briefly (just visual feedback — 300ms max)
  dom.submitBtn.classList.add('loading');
  dom.formMessage.textContent = '';

  // Open email in background immediately
  const subject = encodeURIComponent(`Новий запис — Sharp Cuts: ${name}`);
  const body = encodeURIComponent(
    `Новий запис\n\nІм'я: ${name}\nТелефон: ${phone}\nEmail: ${email}\nДата: ${date}\nЧас: ${time}\nПослуга: ${service}`
  );
  window.open(`mailto:bunvmerlok@gmail.com?subject=${subject}&body=${body}`, '_blank');

  // Show confirmation instantly after a tiny paint frame for spinner
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dom.submitBtn.classList.remove('loading');
      const t = translations[currentLang];
      dom.modalText.innerHTML = `
        <strong>${name}</strong><br />
        ${t.contact_title || 'Запис'}: ${service}<br />
        ${date} о ${time}<br />
        ${phone}${email ? ` · ${email}` : ''}
      `;
      dom.modalOverlay.classList.add('active');
      dom.bookingForm.reset();
    });
  });
});

// Real-time validation clearing
document.querySelectorAll('#bookingForm input, #bookingForm select').forEach(el => {
  el.addEventListener('blur', () => {
    if (el.value.trim()) {
      el.classList.remove('error');
      hideError(el.id + 'Error');
    }
  });
  el.addEventListener('input', () => {
    if (el.classList.contains('error') && el.value.trim()) {
      el.classList.remove('error');
      hideError(el.id + 'Error');
    }
  });
});

// ===== Modal Close =====
function closeModal() { dom.modalOverlay.classList.remove('active'); }
dom.modalClose.addEventListener('click', closeModal);
dom.modalOkBtn.addEventListener('click', closeModal);
dom.modalOverlay.addEventListener('click', (e) => { if (e.target === dom.modalOverlay) closeModal(); });

// ===== Scroll Reveal (single observer, use CSS will-change) =====
const revealElements = document.querySelectorAll('.service-card, .gallery-item, .about-content, .testimonial-card, .stat-item');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObs.observe(el);
});

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  const savedLang = localStorage.getItem('sharpcuts_lang') || 'uk';
  applyLanguage(savedLang);
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').setAttribute('min', today);
  // Initial indicator position
  const activeLink = document.querySelector('.nav-links a.active') || dom.navAnchors()[0];
  moveIndicator(activeLink);
});

