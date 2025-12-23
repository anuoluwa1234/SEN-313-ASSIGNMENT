// Interaction for the 'Why Hire Me' button
document.getElementById("hireBtn").addEventListener("click", function () {
    const reasons = [
        "1. Strong foundation in Computer Science principles.",
        "2. Proven ability to learn and implement new technologies quickly.",
        "3. Disciplined work ethic and attention to detail."
    ];
    
    alert("Professional Strengths:\n\n" + reasons.join("\n\n"));
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});