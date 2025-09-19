// Navbar Loader - Loads shared navbar into all pages
document.addEventListener('DOMContentLoaded', function() {
  // Find the navbar placeholder
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  
  if (navbarPlaceholder) {
    // Load navbar.html content
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarPlaceholder.innerHTML = data;
        
        // Re-initialize navbar functionality after loading
        initializeNavbar();
      })
      .catch(error => {
        console.error('Error loading navbar:', error);
        // Fallback: show a simple navbar if loading fails
        navbarPlaceholder.innerHTML = `
          <nav class="navbar">
            <div class="nav-container">
              <a href="index.html" class="nav-logo">Khasankhon Yusupkhujaev</a>
              <ul class="nav-menu">
                <li class="nav-item"><a href="research.html">Research</a></li>
                <li class="nav-item"><a href="teaching.html">Teaching</a></li>
                <li class="nav-item"><a href="education.html">Education</a></li>
                <li class="nav-item"><a href="projects.html">Projects</a></li>
                <li class="nav-item"><a href="experience.html">Experience</a></li>
                <li class="nav-item"><a href="achievements.html">Achievements</a></li>
              </ul>
            </div>
          </nav>
        `;
      });
  }
});

// Initialize navbar functionality
function initializeNavbar() {
  // Mobile Menu Toggle Functionality
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenu && navMenu) {
    // Toggle mobile menu
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-item a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Dark Mode Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  if (themeToggle && themeIcon) {
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

    // Google Analytics Event Tracking for Theme Toggle
    themeToggle.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'theme_toggle', {
          'event_category': 'UI',
          'event_label': html.getAttribute('data-theme')
        });
      }
    });
  }
}
