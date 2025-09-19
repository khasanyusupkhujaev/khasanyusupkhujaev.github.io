// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
}

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

// Google Analytics Event Tracking for Theme Toggle
themeToggle.addEventListener('click', () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'theme_toggle', {
      'event_category': 'UI',
      'event_label': html.getAttribute('data-theme')
    });
  }
});

// Google Analytics Event Tracking for Scroll Up
scrollUpButton.addEventListener('click', () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'scroll_to_top', {
      'event_category': 'Navigation',
      'event_label': 'scroll_up_button'
    });
  }
});