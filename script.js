document.addEventListener('DOMContentLoaded', function() {
    // Reveal sections on scroll
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        for (let i = 0; i < reveals.length; i++) {
            const revealTop = reveals[i].getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);

    // Run the function once on load to show elements that are already in view
    revealOnScroll();

    // Auto-update copyright year in the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});