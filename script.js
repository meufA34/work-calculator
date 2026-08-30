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
  let item_name = document.getElementById('item-name').value;// macbook
  let item_nameOk = /[a-zA-Z]/.test(item_name);

  let item_price = document.getElementById('item-price').value;// 2,000
  function if_int_or_double(input) {
    if (typeof input === 'string' && input.trim() === ''){ 
      return false; 
    }
    return Number.isFinite(Number(input));
  }

  let item_priceOk = if_int_or_double(item_price);
  
  let hourly_rate = document.getElementById('hourly-rate').value;// 20
  let hourly_rateOk = if_int_or_double(hourly_rate);

  let working_days = document.getElementById('working-days').value;// 5
  let working_daysOk = if_int_or_double(working_days) && working_days <= 7;

  let weekly_working_hours = document.getElementById('weekly-hours').value;// 50
  let weekly_working_hoursOk = if_int_or_double(weekly_working_hours) && ((weekly_working_hours / working_days) < 24); 

  let monthly_expenses = document.getElementById('monthly-expenses').value;// 2000
  let monthly_expensesOk = if_int_or_double(monthly_expenses);
  
  let everythingOk = item_nameOk && item_priceOk && hourly_rateOk && working_daysOk && weekly_working_hoursOk && monthly_expensesOk;
  
  
  // for calculating
  if(!everythingOk){
    document.getElementById('warning_phrase').style.display = 'block';
  }else{
    document.getElementById('warning_phrase').style.display = 'none';
    item_price = Number(item_price);
    hourly_rate = Number(hourly_rate);
    weekly_working_hours = Number(weekly_working_hours);
    working_days = Number(working_days);
    monthly_expenses = Number(monthly_expenses);

    let daily_rate = (weekly_working_hours / working_days) * hourly_rate // 200
    let daily_expenses = (monthly_expenses / 4) / working_days; // 100

    let daily_net = daily_rate - daily_expenses; // 100
    let days_needed = item_price / daily_net; // 20

    
  }
  console.log('end of the eventListener.');
})



console.log('script loaded successfully');

// maybe i'll use them later for testing
  // console.log(typeof item_name);
  // console.log(typeof item_price);
  // console.log(typeof hourly_rate);
  // console.log(typeof working_days);
  // console.log(typeof weekly_working_hours);
  // console.log(typeof monthly_expenses);
  // console.log();
  // console.log(item_name);
  // console.log(item_price);
  // console.log(hourly_rate);
  // console.log(working_days);
  // console.log(weekly_working_hours);
  // console.log(monthly_expenses);
  // console.log();
  // console.log('1 ' + item_nameOk); 
  // console.log('2 ' + item_priceOk); 
  // console.log('3 ' + hourly_rateOk); 
  // console.log('4 ' + working_daysOk); 
  // console.log('5 ' + weekly_working_hoursOk); 
  // console.log('6 ' + monthly_expensesOk); 
  

