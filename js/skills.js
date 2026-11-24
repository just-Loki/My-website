
// ===================================
// SKILLS PAGE JAVASCRIPT
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("skillsMenuToggle");

    const navLinks = document.getElementById("skillsNavLinks");


    // MOBILE NAVIGATION

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        // CLOSE MENU AFTER CLICKING A LINK

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuToggle.textContent = "☰";

            });

        });

    }

});
