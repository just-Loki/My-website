
// Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. TYPING ANIMATION

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const words = [
            "MCA Graduate",
            "Technology Enthusiast",
            "Java Developer",
            "Android Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (deleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingText.textContent =
                currentWord.substring(0, charIndex);

            let speed = deleting ? 50 : 100;

            if (!deleting && charIndex === currentWord.length) {
                deleting = true;
                speed = 1200;
            }

            else if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }


    // 2. MOBILE NAVIGATION MENU

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        // Close menu after selecting a link
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });

        });
    }


    // 3. SCROLL REVEAL ANIMATION

    const revealElements = document.querySelectorAll(
        ".reveal, .highlight-card, .project-card"
    );

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    } else {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });
    }

});
