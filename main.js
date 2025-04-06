const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-menu li a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navMenu.contains(event.target) && navMenu.classList.contains('active')) {
    toggleMenu();
  }
});

