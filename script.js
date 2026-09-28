/* =====================================================
   DAPUR IBU YENI
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Tutup menu ketika link diklik */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= COPYRIGHT YEAR ================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ================= SCROLL ANIMATION ================= */

const animatedElements = document.querySelectorAll(
    ".menu-card, .swot-card, .sop-card, .review-card, .vm-card"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


/* Kondisi awal */

animatedElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* ================= NAVBAR SHADOW ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(50, 25, 10, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});