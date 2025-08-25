// ===== GLOBAL VARIABLES =====
let fullpageInstance;
let currentSection = 0;
let isAnimating = false;

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize FullPage.js
    initFullPage();
    
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize portfolio filters
    initPortfolioFilters();
    
    // Initialize testimonials slider
    initTestimonialsSlider();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize floating elements
    initFloatingElements();
    
    // Initialize statistics counter
    initStatisticsCounter();
});

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide loading screen after completion
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
        
        loadingProgress.style.width = progress + '%';
    }, 200);
}

// ===== FULLPAGE.JS INITIALIZATION =====
function initFullPage() {
    fullpageInstance = new fullpage('#fullpage', {
        // License key (if you have one)
        licenseKey: 'YOUR_KEY_HERE',
        
        // Navigation
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'Portfolio', 'Testimonials', 'Contact'],
        showActiveTooltip: true,
        
        // Scrolling
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollHorizontally: true,
        scrollBar: false,
        
        // Responsive
        responsiveWidth: 768,
        responsiveHeight: 600,
        
        // Callbacks
        onLeave: function(origin, destination, direction) {
            handleSectionLeave(origin, destination, direction);
        },
        
        afterLoad: function(origin, destination, direction) {
            handleSectionLoad(origin, destination, direction);
        },
        
        afterResponsive: function(isResponsive) {
            handleResponsiveChange(isResponsive);
        },
        
        // Anchors
        anchors: ['home', 'about', 'portfolio', 'testimonials', 'contact'],
        
        // Sections
        sectionsColor: ['#f8f9fa', '#ffffff', '#f8f9fa', '#ffffff', '#1a1a1a'],
        
        // Loop
        loopBottom: false,
        loopTop: false,
        
        // CSS3
        css3: true,
        scrollingSpeed: 700,
        
        // Auto scrolling
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        
        // Keyboard navigation
        keyboardScrolling: true,
        animateAnchor: true,
        
        // Touch
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        
        // Big sections
        bigSectionsDestination: 'top',
        
        // Continuous vertical scrolling
        continuousVertical: false,
        
        // Lazy loading
        lazyLoading: true,
        
        // Observer
        observer: true,
        observeParents: true
    });
}

// ===== GSAP ANIMATIONS =====
function initGSAPAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    animateHeroSection();
    
    // About section animations
    animateAboutSection();
    
    // Portfolio section animations
    animatePortfolioSection();
    
    // Testimonials section animations
    animateTestimonialsSection();
    
    // Contact section animations
    animateContactSection();
}

// Hero section animations
function animateHeroSection() {
    const tl = gsap.timeline();
    
    tl.from('.hero-title .title-line', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
    })
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.hero-description', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-cta .btn', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=1')
    .from('.floating-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.8');
}

// About section animations
function animateAboutSection() {
    gsap.from('.about-intro', {
        scrollTrigger: {
            trigger: '.about-intro',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.skills-section', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.stat-card', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

// Portfolio section animations
function animatePortfolioSection() {
    gsap.from('.portfolio-filters', {
        scrollTrigger: {
            trigger: '.portfolio-filters',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

// Testimonials section animations
function animateTestimonialsSection() {
    gsap.from('.testimonial-item.active', {
        scrollTrigger: {
            trigger: '.testimonials-slider',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// Contact section animations
function animateContactSection() {
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate toggle lines
        const lines = navToggle.querySelectorAll('.toggle-line');
        if (navToggle.classList.contains('active')) {
            gsap.to(lines[0], { rotation: 45, y: 7, duration: 0.3 });
            gsap.to(lines[1], { opacity: 0, duration: 0.3 });
            gsap.to(lines[2], { rotation: -45, y: -7, duration: 0.3 });
        } else {
            gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(lines[1], { opacity: 1, duration: 0.3 });
            gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });
    
    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Navigate to section
            fullpageInstance.moveTo(targetSection);
        });
    });
    
    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

// Update active navigation
function updateActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= 100 && rect.bottom >= 100;
        
        if (isVisible) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index]?.classList.add('active');
        }
    });
}

// ===== PORTFOLIO FILTERS =====
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    gsap.to(item, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                } else {
                    gsap.to(item, {
                        scale: 0.8,
                        opacity: 0.3,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                }
            });
        });
    });
}

// ===== TESTIMONIALS SLIDER =====
function initTestimonialsSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        testimonialItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide
        testimonialItems[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Animate slide transition
        gsap.from(testimonialItems[index], {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialItems.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play
    setInterval(nextSlide, 5000);
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateForm(data)) {
            // Show success message
            showFormMessage('Message sent successfully!', 'success');
            
            // Reset form
            this.reset();
            
            // Animate form reset
            gsap.from(this, {
                scale: 0.95,
                opacity: 0.8,
                duration: 0.5,
                ease: 'power3.out'
            });
        } else {
            showFormMessage('Please fill in all required fields.', 'error');
        }
    });
    
    // Form field animations
    const formFields = contactForm.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power3.out'
            });
        });
        
        field.addEventListener('blur', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power3.out'
            });
        });
    });
}

// Form validation
function validateForm(data) {
    return data.name && data.email && data.subject && data.message;
}

// Show form message
function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.appendChild(messageDiv);
    
    // Animate message
    gsap.from(messageDiv, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
    });
    
    // Remove message after 3 seconds
    setTimeout(() => {
        gsap.to(messageDiv, {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
            onComplete: () => messageDiv.remove()
        });
    }, 3000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    // Parallax effect for hero image
    gsap.to('.hero-image', {
        scrollTrigger: {
            trigger: '.hero-image',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        ease: 'none'
    });
    
    // Parallax effect for floating elements
    gsap.to('.floating-card', {
        scrollTrigger: {
            trigger: '.floating-elements',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -50,
        ease: 'none'
    });
    
    // Fade in animations for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

// ===== FLOATING ELEMENTS =====
function initFloatingElements() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        const speed = parseFloat(card.getAttribute('data-speed')) || 0.5;
        
        // Continuous floating animation
        gsap.to(card, {
            y: -20,
            duration: 2,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1,
            delay: Math.random() * 2
        });
        
        // Mouse parallax effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) * speed * 0.1;
            const moveY = (y - centerY) * speed * 0.1;
            
            gsap.to(this, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ===== STATISTICS COUNTER =====
function initStatisticsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerHTML: 1 },
                    onUpdate: function() {
                        stat.innerHTML = Math.ceil(stat.innerHTML);
                    }
                });
            }
        });
    });
}

// ===== FULLPAGE CALLBACKS =====
function handleSectionLeave(origin, destination, direction) {
    currentSection = destination.index;
    
    // Update navigation
    updateNavigation(destination.index);
    
    // Section-specific animations
    switch(destination.index) {
        case 0: // Home
            animateHeroSection();
            break;
        case 1: // About
            animateAboutSection();
            break;
        case 2: // Portfolio
            animatePortfolioSection();
            break;
        case 3: // Testimonials
            animateTestimonialsSection();
            break;
        case 4: // Contact
            animateContactSection();
            break;
    }
}

function handleSectionLoad(origin, destination, direction) {
    // Add entrance animations for new section
    const section = destination.item;
    
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
}

function handleResponsiveChange(isResponsive) {
    if (isResponsive) {
        // Mobile view adjustments
        gsap.set('.floating-elements', { display: 'none' });
    } else {
        // Desktop view adjustments
        gsap.set('.floating-elements', { display: 'block' });
    }
}

// Update navigation
function updateNavigation(sectionIndex) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach((link, index) => {
        if (index === sectionIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== UTILITY FUNCTIONS =====
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
const throttledScrollHandler = throttle(updateActiveNavigation, 16);
window.addEventListener('scroll', throttledScrollHandler);

// Debounce resize events
const debouncedResizeHandler = debounce(() => {
    if (fullpageInstance) {
        fullpageInstance.reBuild();
    }
}, 250);
window.addEventListener('resize', debouncedResizeHandler);

// ===== ACCESSIBILITY =====
// Keyboard navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            fullpageInstance.moveSectionDown();
            break;
        case 'ArrowUp':
            e.preventDefault();
            fullpageInstance.moveSectionUp();
            break;
        case 'Home':
            e.preventDefault();
            fullpageInstance.moveTo(1);
            break;
        case 'End':
            e.preventDefault();
            fullpageInstance.moveTo(5);
            break;
    }
});

// Focus management
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
    // You can add error reporting here
});

// ===== ANALYTICS (Optional) =====
function trackEvent(eventName, eventData) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track section views
function trackSectionView(sectionName) {
    trackEvent('section_view', {
        section_name: sectionName,
        timestamp: new Date().toISOString()
    });
}

// Track form submissions
function trackFormSubmission() {
    trackEvent('form_submission', {
        form_name: 'contact_form',
        timestamp: new Date().toISOString()
    });
}

// ===== EXPORT FOR GLOBAL ACCESS =====
window.PortfolioApp = {
    fullpageInstance,
    currentSection,
    trackEvent,
    trackSectionView,
    trackFormSubmission
};
