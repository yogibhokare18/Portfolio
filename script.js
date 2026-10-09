// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// STICKY NAVBAR SHADOW
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }

});

// ===============================
// SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

function revealSection() {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealSection);

revealSection();


// ===============================
// TYPING EFFECT
// ===============================

const text = [
    "Python Full Stack Developer",
    "Frontend Developer",
    "MCA Student",
    "Web Designer"
];

let index = 0;
let char = 0;

const typing = document.querySelector(".home-text h2");

function typeEffect() {

    if (char < text[index].length) {

        typing.textContent += text[index].charAt(char);

        char++;

        setTimeout(typeEffect, 100);

    }
    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (char > 0) {

        typing.textContent = text[index].substring(0, char - 1);

        char--;

        setTimeout(eraseEffect, 50);

    }
    else {

        index++;

        if (index >= text.length)
            index = 0;

        setTimeout(typeEffect, 300);

    }

}

typing.textContent = "";

typeEffect();





// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});




// ===============================
// CONTACT EMAIL - EMAILJS
// ===============================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const sendBtn = document.getElementById("send-btn");
        const formStatus = document.getElementById("form-status");

        const SERVICE_ID = "service_gi6wteo";
        const TEMPLATE_ID = "template_6ak5j3z";
        const PUBLIC_KEY = "7OBmIeugIznAmigqX";

        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";
        formStatus.textContent = "";

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            contactForm,
            { publicKey: PUBLIC_KEY }
        )
        .then(function () {

            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "green";

            contactForm.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            formStatus.textContent =
                "Message could not be sent. Please try again.";

            formStatus.style.color = "red";

        })
        .finally(function () {

            sendBtn.disabled = false;
            sendBtn.textContent = "Send Message";

        });

    });

}
