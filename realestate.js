// Featured Properties Data
const properties = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        price: '₦85,000,000',
        title: 'Modern Villa with Pool',
        location: 'Lekki Phase 1, Lagos',
        beds: 5,
        baths: 4,
        sqft: 450,
        badge: 'For Sale'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
        price: '₦120,000,000',
        title: 'Luxury Duplex',
        location: 'Banana Island, Lagos',
        beds: 6,
        baths: 5,
        sqft: 550,
        badge: 'Featured'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
        price: '₦65,000,000',
        title: 'Contemporary Apartment',
        location: 'Victoria Island, Lagos',
        beds: 4,
        baths: 3,
        sqft: 320,
        badge: 'For Sale'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
        price: '₦95,000,000',
        title: 'Executive Mansion',
        location: 'Ikoyi, Lagos',
        beds: 7,
        baths: 6,
        sqft: 600,
        badge: 'Premium'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
        price: '₦55,000,000',
        title: 'Elegant Townhouse',
        location: 'Ajah, Lagos',
        beds: 4,
        baths: 3,
        sqft: 280,
        badge: 'For Sale'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600',
        price: '₦78,000,000',
        title: 'Waterfront Villa',
        location: 'Lekki Phase 2, Lagos',
        beds: 5,
        baths: 4,
        sqft: 420,
        badge: 'New'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
        price: '₦70,000,000',
        title: 'Smart Home Estate',
        location: 'Maitama, Abuja',
        beds: 5,
        baths: 4,
        sqft: 400,
        badge: 'For Sale'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600',
        price: '₦110,000,000',
        title: 'Grand Estate Home',
        location: 'Asokoro, Abuja',
        beds: 6,
        baths: 5,
        sqft: 520,
        badge: 'Featured'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600',
        price: '₦62,000,000',
        title: 'Garden View Residence',
        location: 'Gwarinpa, Abuja',
        beds: 4,
        baths: 3,
        sqft: 350,
        badge: 'For Sale'
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600',
        price: '₦88,000,000',
        title: 'Premium Penthouse',
        location: 'Wuse 2, Abuja',
        beds: 5,
        baths: 4,
        sqft: 460,
        badge: 'Luxury'
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Adebayo Johnson',
        location: 'Lagos, Nigeria',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        text: 'Working with Brikket was an absolute pleasure. They helped me find my dream home in Lekki within my budget. Their professionalism and attention to detail are unmatched. Highly recommended!'
    },
    {
        id: 2,
        name: 'Chioma Okafor',
        location: 'Lagos, Nigeria',
        avatar: 'https://i.pravatar.cc/150?img=45',
        rating: 5,
        text: 'The team at Brikket made the entire property buying process seamless. From property viewing to documentation, everything was handled professionally. I am now a proud homeowner in Victoria Island!'
    },
    {
        id: 3,
        name: 'Ibrahim Musa',
        location: 'Abuja, Nigeria',
        avatar: 'https://i.pravatar.cc/150?img=33',
        rating: 5,
        text: 'Exceptional service! Brikket helped me invest in a prime property in Maitama. Their market knowledge and guidance were invaluable. I could not have asked for better real estate partners.'
    },
    {
        id: 4,
        name: 'Ngozi Eze',
        location: 'Lagos, Nigeria',
        avatar: 'https://i.pravatar.cc/150?img=47',
        rating: 5,
        text: 'I was skeptical about buying property online, but Brikket changed my perspective. They provided virtual tours, answered all my questions promptly, and made the process incredibly easy. Love my new home!'
    },
    {
        id: 5,
        name: 'Mohammed Ahmed',
        location: 'Abuja, Nigeria',
        avatar: 'https://i.pravatar.cc/150?img=51',
        rating: 5,
        text: 'Outstanding real estate agency! From property search to closing the deal, Brikket was with me every step of the way. Their transparency and honesty set them apart. Thank you for finding my perfect home in Asokoro!'
    }
];

// Initialize Featured Properties
function initFeaturedProperties() {
    const grid = document.getElementById('featuredGrid');
    
    properties.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge">${property.badge}</span>
                <button class="save-btn">♡</button>
            </div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-details">
                    <span>🛏️ ${property.beds} Beds</span>
                    <span>🛁 ${property.baths} Baths</span>
                    <span>📐 ${property.sqft}m²</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add save functionality
    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.textContent = this.textContent === '♡' ? '♥' : '♡';
            this.style.color = this.textContent === '♥' ? '#e74c3c' : '#000';
        });
    });
}

// Initialize Testimonials
let currentTestimonialIndex = 0;

function initTestimonials() {
    renderTestimonials();
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentTestimonialIndex = Math.max(0, currentTestimonialIndex - 1);
        renderTestimonials();
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        currentTestimonialIndex = Math.min(testimonials.length - 3, currentTestimonialIndex + 1);
        renderTestimonials();
    });
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = '';
    
    const visibleTestimonials = testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3);
    
    visibleTestimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-author">
                    <h4>${testimonial.name}</h4>
                    <p class="testimonial-location">📍 ${testimonial.location}</p>
                </div>
            </div>
            <div class="rating">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">${testimonial.text}</p>
        `;
        grid.appendChild(card);
    });
    
    // Disable buttons at boundaries
    document.getElementById('prevBtn').disabled = currentTestimonialIndex === 0;
    document.getElementById('nextBtn').disabled = currentTestimonialIndex >= testimonials.length - 3;
}

// Search Tabs Functionality
function initSearchTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#fff';
        nav.style.padding = '20px';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    });
}

// Form Handling
function initForms() {
    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
    
    // Search Form
    const searchBtn = document.querySelector('.btn-search');
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Search functionality will be implemented soon!');
    });
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Scroll Animation
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .property-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFeaturedProperties();
    initTestimonials();
    initSearchTabs();
    initMobileMenu();
    initForms();
    initSmoothScroll();
    initScrollAnimation();
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});