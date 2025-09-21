// Add dynamic functionality if needed.
// For example, a simple scroll-based animation.
document.addEventListener('DOMContentLoaded', () => {
    const attractionCards = document.querySelectorAll('.attraction-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    attractionCards.forEach(card => {
        observer.observe(card);
    });
});