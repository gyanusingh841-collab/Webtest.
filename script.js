// JavaScript for Sarathua BHU-Abhilekh Portal

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to stats when they come into view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-stat');
            }
        });
    }, observerOptions);

    // Observe all stat boxes
    document.querySelectorAll('.stat-box').forEach(box => {
        observer.observe(box);
    });

    // Document download tracking
    document.querySelectorAll('.btn-download').forEach(button => {
        button.addEventListener('click', function() {
            const fileName = this.closest('tr').querySelector('td:nth-child(4)').textContent;
            console.log(`Download initiated for: ${fileName}`);
            // Here you could send this information to analytics
        });
    });

    // WhatsApp service click tracking
    document.querySelectorAll('.btn-success[href*="wa.me"]').forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.closest('.card').querySelector('.card-title').textContent;
            console.log(`WhatsApp service requested: ${serviceName}`);
            // Here you could send this information to analytics
        });
    });
});

// Additional function to calculate and update file sizes dynamically
function updateFileSizes() {
    // This function could be used to dynamically calculate and update file sizes
    // if needed in the future
    console.log('File size update function called');
}
