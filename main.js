const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const dropdown = document.querySelector('.dropdown');


function toggleMenu() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Toggle dropdown on mobile
function toggleDropdown() {
  if (window.innerWidth <= 768) {
    dropdown.classList.toggle('active');
  }
}

// Event Listeners
hamburger.addEventListener('click', toggleMenu);

// Handle clicks on nav links to close menu
document.querySelectorAll('.nav-menu > li > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
      toggleMenu();
    }
    // Prevent default only for Tech Stack to allow dropdown toggle
    if (link.parentElement.classList.contains('dropdown')) {
      e.preventDefault();
      toggleDropdown();
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navMenu.contains(event.target) && navMenu.classList.contains('active')) {
    toggleMenu();
  }
});


document.querySelectorAll('.dropdown-menu li a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
});
