// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.opacity = "1";
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
}

// Auto slideshow
setInterval(() => {
    changeSlide(1);
}, 5000);

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// City selection functionality
function selectCity(city) {
    document.getElementById('citySelect').value = city;
    searchProperties();
}

function searchProperties() {
    const selectedCity = document.getElementById('citySelect').value;
    if (selectedCity) {
        // Simulate search functionality
        alert(`Searching for properties in ${selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)}...\n\nThis would typically redirect to a search results page or filter the current properties.`);

        // Scroll to trending section
        document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Please select a city to search for properties.');
    }
}

// WhatsApp integration (UI only - non-functional)
function openWhatsApp() {
    // Show a message that this is a demo
    alert('WhatsApp integration is for demonstration purposes only.\n\nIn a real application, this would open WhatsApp with a pre-filled message.');
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const terms = formData.get('terms');

    // Basic validation
    if (!name || !email || !phone || !message || !terms) {
        alert('Please fill in all required fields and accept the terms and conditions.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit Indian phone number.');
        return;
    }

    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Success message
        alert(`Thank you for your message, ${name}!\n\nWe have received your inquiry. Our team will contact you at ${email} or ${phone} within 24 hours.\n\nMessage: ${message}`);

        // Reset form
        document.getElementById('contactForm').reset();

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Send email notification (simulated)
        sendEmailNotification(name, email, phone, message);

    }, 2000);
});

// Simulate email notification
function sendEmailNotification(name, email, phone, message) {
    console.log('Email notification sent to:', {
        to: 'info@elitepropertiesindia.com',
        subject: `New Property Inquiry from ${name}`,
        body: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
            
            This is a simulated email notification. In a real application, this would be sent via a backend service.
        `
    });
}

// Modal functionality
function showPrivacyPolicy() {
    document.getElementById('privacyModal').style.display = 'block';
}

function showTermsConditions() {
    document.getElementById('termsModal').style.display = 'block';
}

function showRCS() {
    document.getElementById('rcsModal').style.display = 'block';
}

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Property card click handlers
document.querySelectorAll('.property-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const propertyCard = this.closest('.property-card');
        const propertyName = propertyCard.querySelector('h3').textContent;
        const propertyPrice = propertyCard.querySelector('.price').textContent;
        const propertyLocation = propertyCard.querySelector('.location').textContent;

        alert(`Property Details:\n\n${propertyName}\n${propertyLocation}\nPrice: ${propertyPrice}\n\nThis would typically open a detailed property page or modal with full information.`);
    });
});

// Loading animation
window.addEventListener('load', function () {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.classList.add('loaded');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.property-card, .city-card, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Form input validation
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('blur', function () {
        validateField(this);
    });

    input.addEventListener('input', function () {
        if (this.classList.contains('error')) {
            validateField(this);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Validation rules
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(value.replace(/\D/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid 10-digit Indian phone number.';
        }
    }

    // Apply error styling if invalid
    if (!isValid) {
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.25rem';
        field.parentNode.appendChild(errorElement);
    }
}

// Add CSS for error styling
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #e74c3c;
        box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2);
    }
`;
document.head.appendChild(errorStyles);

// Property search simulation with city data
const cityProperties = {
    gurgaon: [
        { name: 'Luxury Villa in DLF Phase 5', price: '₹4.25 Cr', type: 'Villa', area: '3,200 sq ft' },
        { name: 'Premium Apartment in Cyber City', price: '₹2.75 Cr', type: 'Apartment', area: '2,100 sq ft' },
        { name: 'Independent House in Sohna Road', price: '₹5.50 Cr', type: 'House', area: '4,500 sq ft' }
    ],
    mumbai: [
        { name: 'Premium Apartment in Bandra West', price: '₹8.75 Cr', type: 'Apartment', area: '1,850 sq ft' },
        { name: 'Luxury Penthouse in Worli', price: '₹12.50 Cr', type: 'Penthouse', area: '3,200 sq ft' },
        { name: 'Sea View Apartment in Powai', price: '₹6.25 Cr', type: 'Apartment', area: '2,400 sq ft' }
    ],
    bangalore: [
        { name: 'Luxury Penthouse in Koramangala', price: '₹6.50 Cr', type: 'Penthouse', area: '4,500 sq ft' },
        { name: 'Premium Villa in Whitefield', price: '₹4.80 Cr', type: 'Villa', area: '3,800 sq ft' },
        { name: 'Modern Apartment in Electronic City', price: '₹2.95 Cr', type: 'Apartment', area: '1,950 sq ft' }
    ]
};

// Enhanced search function with city data
function enhancedSearchProperties() {
    const selectedCity = document.getElementById('citySelect').value;
    if (selectedCity && cityProperties[selectedCity]) {
        const properties = cityProperties[selectedCity];
        let resultMessage = `Properties found in ${selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)}:\n\n`;

        properties.forEach((property, index) => {
            resultMessage += `${index + 1}. ${property.name}\n`;
            resultMessage += `   Price: ${property.price}\n`;
            resultMessage += `   Type: ${property.type}\n`;
            resultMessage += `   Area: ${property.area}\n\n`;
        });

        alert(resultMessage);
    }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    console.log('Elite Properties India website loaded successfully!');

    // Add loading animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Initialize tooltips for property cards
    document.querySelectorAll('.property-card').forEach(card => {
        card.title = 'Click to view detailed information';
    });

    // Add hover effects for city cards
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}); 