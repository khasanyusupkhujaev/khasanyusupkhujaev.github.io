// Footer Loader - Loads shared footer into all pages
document.addEventListener('DOMContentLoaded', function() {
  // Find the footer placeholder
  const footerPlaceholder = document.getElementById('footer-placeholder');
  
  if (footerPlaceholder) {
    // Load footer.html content
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
        // Fallback: show a simple footer if loading fails
        footerPlaceholder.innerHTML = `
          <div class="footer">
            © 2025 Khasankhon Yusupkhujaev — All rights reserved.
          </div>
        `;
      });
  }
});
