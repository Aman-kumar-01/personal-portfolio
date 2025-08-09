// =====================
// Toggle Mobile Menu
// =====================
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;

    // Toggle menu visibility
    navLinks.classList.toggle('active');

    // Add smooth scroll lock
    if (navLinks.classList.contains('active')) {
        body.classList.add('menu-open');
        menuIcon.innerHTML = '✖'; // Close icon
    } else {
        body.classList.remove('menu-open');
        menuIcon.innerHTML = '☰'; // Menu icon
    }
}

// =====================
// Close menu when clicking a link
// =====================
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        const menuIcon = document.getElementById('menu-icon');
        document.body.classList.remove('menu-open');
        navLinks.classList.remove('active');
        menuIcon.innerHTML = '☰';
    });
});

// =====================
// Close menu on outside click (Mobile)
// =====================
document.addEventListener('click', (event) => {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            menuIcon.innerHTML = '☰';
        }
    }
});

// =====================
// Smooth Scroll (Optional Enhancement)
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // navbar offset
                behavior: 'smooth'
            });
        }
    });
});
