// =====================
// Toggle Mobile Menu
// =====================
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        body.classList.add('menu-open');
        menuIcon.innerHTML = '✖';
    } else {
        body.classList.remove('menu-open');
        menuIcon.innerHTML = '☰';
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
// Close menu on outside click
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
// Custom Smooth Scroll Function
// =====================
function smoothScrollTo(targetY, duration = 1000) { // 1000ms = 1 second
    const startY = window.scrollY;
    const distanceY = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Ease in-out for smoothness
        const ease = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startY + distanceY * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// =====================
// Navbar Smooth Scroll with Offset
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

            smoothScrollTo(targetPosition, 1000); // 1 second speed
        }
    });
});
