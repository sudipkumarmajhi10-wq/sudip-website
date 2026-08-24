// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// SCROLL TO TOP
// ==============================

const scrollTop =
    document.getElementById("scrollTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTop.style.display = "block";

    } else {

        scrollTop.style.display = "none";

    }

});


scrollTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// NAVBAR ON SCROLL
// ==============================

const header =
    document.querySelector("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(3,10,20,0.97)";

    } else {

        header.style.background =
            "rgba(7,17,31,0.85)";

    }

});