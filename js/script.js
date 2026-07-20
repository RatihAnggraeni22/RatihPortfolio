/* =========================================
   RATIH ANGGRAENI PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");


    const isLightMode =
        document.body.classList.contains("light");


    if (isLightMode) {

        themeToggle.innerHTML =
            "☀ Light mode";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeToggle.innerHTML =
            "☾ Night mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.innerHTML =
        "☀ Light mode";

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");


const nav =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});