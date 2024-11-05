// Typewriter Effect for "I Am Into" text
const dynamicText = document.getElementById("dynamic-text");
const textArray = ["Web Development", "AI & Machine Learning", "Data Analysis", "UI/UX Design"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'service_533auxi';
    const templateID = 'template_8a05q7k';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Submit';
            document.getElementById('successMessage').style.display = 'block';
            this.reset();
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 3000);
        }, (err) => {
            btn.value = 'Submit';
            alert(JSON.stringify(err));
        });
});
