/**
 * Professional Portfolio Interactions
 * Features: Mobile Pop-over Menu, Close-on-Scroll, Close-on-Click-Away
 */

const menuBtn = document.querySelector('#mobile-menu-btn');
const navMenu = document.querySelector('#nav-menu');

// 1. Function to close the menu
const closeMenu = () => {
    menuBtn.classList.remove('is-active');
    navMenu.classList.remove('active');
};

// 2. Toggle Menu Visibility
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing from the document click event
    menuBtn.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// 3. Close Menu on Screen Tap (Anywhere outside the menu)
document.addEventListener('click', (event) => {
    const isClickInside = navMenu.contains(event.target);
    const isClickOnButton = menuBtn.contains(event.target);

    if (!isClickInside && !isClickOnButton) {
        closeMenu();
    }
});

// 4. Close Menu on Scroll
window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// 5. Close Menu when a Link is tapped
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// 6. Professional "Executive Summary" Alert
document.getElementById("hireBtn").addEventListener("click", function () {
    const summary = [
        "- STRATEGIC FOUNDATION: Excellence in CS principles and logic.",
        "- ADAPTABILITY: Rapid deployment of modern frameworks.",
        "- QUALITY: Commitment to clean, readable, and efficient code."
    ];
    alert("Professional Summary:\n\n" + summary.join("\n\n"));
});