// 404 page mobile navigation

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("errorMenuToggle");
    const navLinks = document.getElementById("errorNavLinks");

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