// Example: Add a simple alert on page load
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my portfolio!");

    // Example: Toggle a class on navigation link click
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Example: Smooth scroll to sections when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});