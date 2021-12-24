const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

/* Toggle hamburger menu */

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
       
    } else {
        menu.classList.add("active");
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);