// Interaction for the 'Executive Summary' (formerly Why Hire Me) button
document.getElementById("hireBtn").addEventListener("click", function () {
    const reasons = [
        "STRATEGIC THINKING: Strong foundation in Computer Science principles and system design.",
        "ADAPTABILITY: Proven ability to master new technology stacks rapidly.",
        "PRECISION: Disciplined approach to clean code and documentation."
    ];
    
    alert("Professional Summary:\n\n" + reasons.join("\n\n"));
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        
        // Only trigger smooth scroll for internal links
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});