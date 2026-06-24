// Basic nav scroll + mobile + year
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-nav');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile toggle (simple)
  const toggle = document.getElementById('nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const links = document.getElementById('nav-links');
      if (links) links.classList.toggle('open');
    });
  }
});
