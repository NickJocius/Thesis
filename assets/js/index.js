const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const form = document.getElementById("myForm");
const message = document.querySelector(".alert");

/* Toggle hamburger menu */

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
       
    } else {
        menu.classList.add("active");
    }
}

/*Form submit function */
function handleSubmit(e) {
    e.preventDefault();
    
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;

    if (name != "" && email != "" && password != "") {
        let msg = document.createElement('p');
        msg.textContent = "Success";
        message.appendChild(msg);
        message.classList.add("success")
        setTimeout(() => {
            message.classList.remove("success");
        }, 2000);
    }
    
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
form.addEventListener("submit", handleSubmit);