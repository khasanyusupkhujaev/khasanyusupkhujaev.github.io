// Note: Navbar functionality (mobile menu, dark mode toggle) is now handled by navbar-loader.js

// Scroll Up Button Functionality
const scrollUpButton = document.getElementById('scrollUp');

// Show/hide scroll up button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollUpButton.classList.add('show');
  } else {
    scrollUpButton.classList.remove('show');
  }
});

// Smooth scroll to top when button is clicked
scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Note: Theme toggle analytics tracking is now handled by navbar-loader.js

// Google Analytics Event Tracking for Scroll Up
scrollUpButton.addEventListener('click', () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'scroll_to_top', {
      'event_category': 'Navigation',
      'event_label': 'scroll_up_button'
    });
  }
});