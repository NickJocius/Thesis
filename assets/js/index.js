const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

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