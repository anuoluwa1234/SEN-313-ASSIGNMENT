document.getElementById("hireBtn").addEventListener("click", function () {
    const messages = [
        "I am passionate, disciplined, and constantly improving my skills.",
        "I enjoy learning new technologies and working on real-world projects.",
        "Ready to bring value to your team with a problem-solving mindset!"
    ];
    
    alert(messages.join("\n\n"));
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});