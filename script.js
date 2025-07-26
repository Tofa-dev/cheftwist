document.addEventListener('DOMContentLoaded', function() {
    // Menu filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
            });
        });
    }

    // Form submission
    const contactForm = document.getElementById('bookingForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your request! We will contact you shortly to confirm your booking.');
            this.requestFullscreen();
        });
    }
});