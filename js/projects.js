// Projects page mobile navigation

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("projectsMenuToggle");
    const navLinks = document.getElementById("projectsNavLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
            });
        });
    }

});