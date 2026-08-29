document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const primaryNav = document.getElementById('primary-nav');
  const menuOverlay = document.getElementById('menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !primaryNav) return;
  const toggleMenu = (forceState) => {
    const isCurrentlyOpen = hamburgerBtn.classList.contains('is-active');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    hamburgerBtn.classList.toggle('is-active', shouldOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(shouldOpen));

    primaryNav.classList.toggle('is-open', shouldOpen);
    if (menuOverlay) {
      menuOverlay.classList.toggle('is-visible', shouldOpen);
      menuOverlay.setAttribute('aria-hidden', String(!shouldOpen));
    }

    // Prevent background scrolling when mobile menu is active
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  // Event listener for hamburger button click
  hamburgerBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close menu when clicking the background overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      toggleMenu(false);
    });
  }

  // Close menu when selecting any navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close menu when the Escape key is pressed
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && hamburgerBtn.classList.contains('is-active')) {
      toggleMenu(false);
      hamburgerBtn.focus();
    }
  });

  // Reset menu state on window resize (e.g. pivoting from mobile to desktop view)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 640 && hamburgerBtn.classList.contains('is-active')) {
      toggleMenu(false);
    }
  });
});



document.getElementById('calculate-btn').addEventListener('click', (event) => {
  // for calculating
  let item_name = document.getElementById('item-name');
  let item_price = document.getElementById('item-price');
  let hourly_rate = document.getElementById('hourly-rate');
  let weekly_working_hours = document.getElementById('weekly-hours');
  let working_days = document.getElementById('working-days');
  let monthly_expenses = document.getElementById('monthly-expenses');

  
})