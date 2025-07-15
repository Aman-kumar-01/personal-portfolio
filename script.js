function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});
