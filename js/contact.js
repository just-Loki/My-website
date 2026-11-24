
// Contact Page JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navigation
    const menuToggle = document.getElementById("contactMenuToggle");
    const navLinks = document.getElementById("contactNavLinks");

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


    // Contact Form
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const visitorName =
                document.getElementById("visitorName").value.trim();

            const visitorEmail =
                document.getElementById("visitorEmail").value.trim();

            const messageSubject =
                document.getElementById("messageSubject").value.trim();

            const visitorMessage =
                document.getElementById("visitorMessage").value.trim();


            // Your email address
            const recipientEmail = "justappu1@gmail.com";


            // Prepare email content
            const emailBody =
                "Name: " + visitorName + "\n" +
                "Email: " + visitorEmail + "\n\n" +
                "Message:\n" + visitorMessage;


            // Create email link
            const mailtoLink =
                "mailto:" + recipientEmail +
                "?subject=" + encodeURIComponent(messageSubject) +
                "&body=" + encodeURIComponent(emailBody);


            if (formStatus) {
                formStatus.textContent =
                    "Opening your email application...";
            }


            // Open email application
            window.location.href = mailtoLink;

        });

    }

});
