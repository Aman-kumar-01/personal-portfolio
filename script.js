// script.js

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        body.classList.add('menu-open');
        menuIcon.innerHTML = '✖'; // Close icon
    } else {
        body.classList.remove('menu-open');
        menuIcon.innerHTML = '☰'; // Menu icon
    }
}

// Optional: Close menu when clicking a nav link (for smooth UX)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        const menuIcon = document.getElementById('menu-icon');
        document.body.classList.remove('menu-open');
        navLinks.classList.remove('active');
        menuIcon.innerHTML = '☰';
    });
});
