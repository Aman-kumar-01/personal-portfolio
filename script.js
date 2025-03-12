document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Toggle mobile navigation menu
    const menuToggle = document.querySelector(".menu");
    const nav = document.querySelector(".navbar nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Dynamic typing effect
    const textElement = document.querySelector(".details h2");
    const textArray = ["Software Developer", "Backend Engineer", "Game Developer", "Ethical Hacker"];
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textArray[textIndex].length) {
            textElement.innerHTML = "I'm a " + textArray[textIndex].substring(0, charIndex + 1) + "..";
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            textElement.innerHTML = "I'm a " + textArray[textIndex].substring(0, charIndex - 1) + "..";
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }

    setTimeout(typeEffect, 1000);
});
