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
