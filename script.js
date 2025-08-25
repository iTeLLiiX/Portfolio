// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize fullPage.js
    const fullpageInstance = new fullpage("#fullpage", {
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: false,
        onLeave: function (origin, destination, direction) {
            const leavingText = origin.item.querySelector("h1");
            const enteringText = destination.item.querySelector("h1");
            const line = destination.item.querySelector(".line");

            // Animate the leaving text to fade out and move up
            gsap.to(leavingText, {
                opacity: 0,
                y: -100,
                duration: 1.5,
                ease: "power2.out",
            });

            // Animate the entering text to fade in and move up
            gsap.fromTo(
                enteringText,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    color: destination.item.getAttribute("data-text-color"), // Set text color
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 0.5,
                }
            );

            // Get the destination colors
            const newBgColor = destination.item.getAttribute("data-bg");
            const newTextColor = destination.item.getAttribute("data-text-color");

            // Change background color of destination slide
            destination.item.style.backgroundColor = newBgColor;

            // Change text colors dynamically
            gsap.to(line, { color: newTextColor, duration: 0.5 });

            // Line growth/shrinkage animation
            const newLineWidth = (destination.index + 1) * 150;
            const currentLineWidth = (origin.index + 1) * 150;

            if (direction === "down") {
                gsap.to(line, {
                    width: newLineWidth + "px",
                    duration: 1.5,
                    ease: "power2.out",
                });
            } else {
                gsap.to(line, {
                    width: currentLineWidth + "px",
                    duration: 1.5,
                    ease: "power2.out",
                });
            }

            // Animate other elements in the section
            animateSectionElements(destination);
        },
        afterLoad: function (origin, destination, direction) {
            // Initialize animations for the loaded section
            initializeSectionAnimations(destination);
        }
    });

    // Navigation click handlers
    document.getElementById("link1").addEventListener("click", function () {
        scrollToSection(1);
    });
    document.getElementById("link2").addEventListener("click", function () {
        scrollToSection(2);
    });
    document.getElementById("link3").addEventListener("click", function () {
        scrollToSection(3);
    });
    document.getElementById("link4").addEventListener("click", function () {
        scrollToSection(4);
    });

    function scrollToSection(sectionIndex) {
        fullpageInstance.moveTo(sectionIndex);
    }

    // Mobile navigation toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // Initialize animations for the first section
    initializeSectionAnimations(document.querySelector("#section1"));

    // Contact form handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", handleContactForm);
    }

    // Portfolio item interactions
    initializePortfolioInteractions();

    // Scroll animations
    initializeScrollAnimations();

    // Loading screen
    hideLoadingScreen();
});

// Function to animate section elements
function animateSectionElements(section) {
    const elements = section.querySelectorAll(".portfolio-item, .service-card, .contact-item");
    
    elements.forEach((element, index) => {
        gsap.fromTo(element, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "power2.out"
            }
        );
    });
}

// Function to initialize section animations
function initializeSectionAnimations(section) {
    // Animate stats in hero section
    if (section.id === "section1") {
        const stats = section.querySelectorAll(".stat-number");
        stats.forEach((stat, index) => {
            const finalValue = stat.textContent;
            const isPercentage = finalValue.includes("%");
            const isPlus = finalValue.includes("+");
            const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ""));
            
            gsap.fromTo(stat, 
                { textContent: "0" },
                { 
                    textContent: numericValue,
                    duration: 2,
                    delay: index * 0.3,
                    ease: "power2.out",
                    onUpdate: function() {
                        const currentValue = Math.floor(this.targets()[0].textContent);
                        stat.textContent = currentValue + (isPercentage ? "%" : "") + (isPlus ? "+" : "");
                    }
                }
            );
        });
    }

    // Animate portfolio items
    if (section.id === "section2") {
        const portfolioItems = section.querySelectorAll(".portfolio-item");
        portfolioItems.forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, scale: 0.8 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "back.out(1.7)"
                }
            );
        });
    }

    // Animate service cards
    if (section.id === "section3") {
        const serviceCards = section.querySelectorAll(".service-card");
        serviceCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, x: -100 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.8, 
                    delay: index * 0.3,
                    ease: "power2.out"
                }
            );
        });
    }

    // Animate contact form
    if (section.id === "section4") {
        const contactInfo = section.querySelector(".contact-info");
        const contactForm = section.querySelector(".contact-form");
        
        gsap.fromTo(contactInfo,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
        
        gsap.fromTo(contactForm,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
        );
    }
}

// Function to initialize portfolio interactions
function initializePortfolioInteractions() {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    
    portfolioItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener("mouseleave", function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Function to initialize scroll animations
function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll(".scroll-trigger").forEach(el => {
        observer.observe(el);
    });
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = event.target.querySelector("button[type='submit']");
    const originalText = submitButton.textContent;
    submitButton.textContent = "Wird gesendet...";
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        showNotification("Nachricht erfolgreich gesendet!", "success");
        
        // Reset form
        event.target.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Function to show notifications
function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === "success" ? "#00ff88" : "#ff6b6b"};
        color: #0f0f23;
        border-radius: 5px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = "translateX(0)";
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Function to hide loading screen
function hideLoadingScreen() {
    const loading = document.querySelector(".loading");
    if (loading) {
        setTimeout(() => {
            loading.classList.add("hidden");
            setTimeout(() => {
                loading.style.display = "none";
            }, 500);
        }, 1000);
    }
}

// Smooth scrolling for anchor links
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

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading screen to DOM
function addLoadingScreen() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
}

// Initialize loading screen
addLoadingScreen();

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate fullPage.js dimensions
    if (typeof fullpage !== 'undefined') {
        fullpage_api.reBuild();
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        fullpage_api.moveSectionDown();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        fullpage_api.moveSectionUp();
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up
            fullpage_api.moveSectionDown();
        } else {
            // Swipe down
            fullpage_api.moveSectionUp();
        }
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: 'Inter', sans-serif;
    }
    
    .notification-success {
        background: #00ff88 !important;
        color: #0f0f23 !important;
    }
    
    .notification-error {
        background: #ff6b6b !important;
        color: #ffffff !important;
    }
`;
document.head.appendChild(notificationStyles);
