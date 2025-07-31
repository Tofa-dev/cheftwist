// Show page function 
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pagename + '-page').classList.add('active');

    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
     document.getElementById('nav-' + pageName).classList.add('active);

    // Prevent default link behaviour
    return false;
}


// Splah Screen Logic
window.addEventListener('load', () => {
    const splashScreen = document,getElementById('splash-screen');


    // Hide splah screen after 1.5 seconds
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 1500); // 1500ms = 1.5 seconds
});    
    
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
