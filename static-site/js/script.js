// Typing Animation

const typingText = document.getElementById("typing-text");

const words = [

    "Python Developer",

    "Django Developer",

    "Full Stack Developer",

    "AI Enthusiast"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex--);

    }else{

        typingText.textContent =
        currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length){

        speed = 1500;

        isDeleting = true;
    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* Theme Toggle */

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.textContent = "☀️";

    }else{

        themeToggle.textContent = "🌙";
    }
});

/* Scroll Reveal */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");
        }
    });
});

/* Mobile Menu */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});