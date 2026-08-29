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
  let item_name = document.getElementById('item-name');// macbook
  let item_nameOk = /[a-zA-Z]/.test(item_name);

  let item_price = document.getElementById('item-price');// 2,000
  function if_int_or_double(input) {
    if (typeof input !== 'number' || Number.isNaN(input)) {
      return false;
    }
    // Check if it is an integer or double
    if (Number.isInteger(input)) {
      return true;
    } else {
      return true;
    }
  }
  let item_priceOk = if_int_or_double(item_price);

  let hourly_rate = document.getElementById('hourly-rate');// 20
  let hourly_rateOk = if_int_or_double(hourly_rate);

  let working_days = document.getElementById('working-days');// 5
  let working_daysOk = if_int_or_double(working_days) && working_days <= 7;

  let weekly_working_hours = document.getElementById('weekly-hours');// 50
  // let weekly_working_hoursOk =

  let monthly_expenses = document.getElementById('monthly-expenses');// 2000
  
  
  
  
  // for calculating
  // let daily_rate =(weekly_working_hours / working_days) * hourly_rate;// 200
  // let days_needed = item_price / daily_rate;// 10
  
})



