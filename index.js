// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Toggle for Small Screens
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close Navbar When Clicking on a Link (for small screens)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Theme Switcher
const themeSwitcher = document.getElementById('theme-switcher');

// Check local storage for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeSwitcher.textContent = '☀️'; // Switch to Light Mode icon
}

// Add event listener for theme switcher button
themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Update button icon
  if (document.body.classList.contains('dark')) {
    themeSwitcher.textContent = '☀️'; // Light Mode icon
    localStorage.setItem('theme', 'dark'); // Save theme to local storage
  } else {
    themeSwitcher.textContent = '🌙'; // Dark Mode icon
    localStorage.setItem('theme', 'light'); // Save theme to local storage
  }
});