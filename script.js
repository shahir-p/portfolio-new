// Get all nav links and sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Function to handle scroll events
function highlightNavOnScroll() {
    let scrollPosition = window.scrollY + 200; // Offset to trigger active class early

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if section is in the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));  // Remove active from all links
            navLinks[index].classList.add('active');  // Add active class to current link
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', highlightNavOnScroll);

// Optional: Highlight the section on page load if already scrolled
document.addEventListener('DOMContentLoaded', highlightNavOnScroll);


// Get all nav links and the menu
const menu = document.querySelector('nav ul');
const checkbox = document.getElementById('checkbox');

// Close the menu when any nav item is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Uncheck the checkbox to close the menu
        checkbox.checked = false;
    });
});


//auto type

// HTML structure for the effect
// <div id="auto-typing"></div>

const element = document.getElementById("auto-typing");

const roles = ["Full Stack Developers", "Flutter Developers", "UI/UX Designers"];
let currentRoleIndex = 0;
let isDeleting = false;
let currentText = "";
let charIndex = 0;
const typingSpeed = 100; // Speed for typing each letter
const deletingSpeed = 80; // Speed for deleting each letter
const pauseDelay = 3500; // Delay before switching roles

function typeEffect() {
    if (!isDeleting) {
        // Typing effect
        currentText = roles[currentRoleIndex].slice(0, charIndex + 1);
        charIndex++;

        if (currentText === roles[currentRoleIndex]) {
            // Once all characters are typed, pause before starting deletion
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, pauseDelay);
            return;
        }
    } else {
        // Deleting effect
        currentText = roles[currentRoleIndex].slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // After deletion, move to the next role
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            isDeleting = false;
        }
    }

    element.textContent = currentText;
    // Continue typing or deleting with appropriate speed
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Start the typing effect
typeEffect();


