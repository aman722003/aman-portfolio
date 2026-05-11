const roles = [
    "Python Developer",
    "Django Developer",
    "Full Stack Developer",
    "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else{

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);
    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach((section) => {

        const sectionTop =
        section.getBoundingClientRect().top;

        const revealPoint = 150;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.textContent = "☀️";
    }

    else{

        themeToggle.textContent = "🌙";
    }
});