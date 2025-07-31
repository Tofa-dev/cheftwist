// Show page function
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const pageElement = document.getElementById(pageName + '-page');
    if (pageElement) {
        pageElement.classList.add('active');
    }

    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    const navLink = document.getElementById('nav-' + pageName);
    if (navLink) {
        navLink.classList.add('active');
    }

    // Prevent default link behavior
    return false;
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 1500); // 1500ms = 1.5 seconds
    } else {
        console.error('Splash screen element not found!');
    }

    // Menu filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
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
            this.reset(); // Reset the form fields
        });
    }
});