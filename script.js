// Portfolio Website JavaScript
// Author: Abu Khaled - Eagle

// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const langToggle = document.querySelector('.lang-toggle');
const body = document.body;
const html = document.documentElement;

// Language data
const translations = {
    ar: {
        // Navigation
        'أبو خالد - Eagle': 'أبو خالد - Eagle',
        
        // Hero Section
        'خبرة ٥ سنوات في مجال الحياة الواقعية وسنتين في البرمجة': 'خبرة ٥ سنوات في مجال الحياة الواقعية وسنتين في البرمجة',
        'ترأس العديد من السيرفرات الشهيرة والكبيرة، شخص مخضرم بالمجال واسم كبير وثقيل بالساحة، يقدم العديد من المزايا مثل البرمجة الاحترافية والتصميم الجرافيكي وغيرها الكثير، مناصبه قيادية عالية المستوى.': 'ترأس العديد من السيرفرات الشهيرة والكبيرة، شخص مخضرم بالمجال واسم كبير وثقيل بالساحة، يقدم العديد من المزايا مثل البرمجة الاحترافية والتصميم الجرافيكي وغيرها الكثير، مناصبه قيادية عالية المستوى.',
        'تواصل معي': 'تواصل معي',
        
        // About Section
        'عنّي': 'عنّي',
        'مرحباً، أنا أبو خالد - Eagle، محترف في عالم التكنولوجيا والبرمجة. بدأت رحلتي منذ خمس سنوات في الحياة العملية، واكتسبت خبرة عميقة في إدارة السيرفرات والمشاريع التقنية الكبيرة.': 'مرحباً، أنا أبو خالد - Eagle، محترف في عالم التكنولوجيا والبرمجة. بدأت رحلتي منذ خمس سنوات في الحياة العملية، واكتسبت خبرة عميقة في إدارة السيرفرات والمشاريع التقنية الكبيرة.',
        'على مدار السنتين الماضيتين، ركزت على تطوير مهاراتي البرمجية، وأصبحت قائداً في هذا المجال، حيث أدير العديد من السيرفرات المشهورة وأقدم خدمات متنوعة تشمل البرمجة والتصميم الجرافيكي.': 'على مدار السنتين الماضيتين، ركزت على تطوير مهاراتي البرمجية، وأصبحت قائداً في هذا المجال، حيث أدير العديد من السيرفرات المشهورة وأقدم خدمات متنوعة تشمل البرمجة والتصميم الجرافيكي.',
        'سنوات خبرة': 'سنوات خبرة',
        'مشروع مكتمل': 'مشروع مكتمل',
        'سيرفرات مدارة': 'سيرفرات مدارة',
        
        // Skills Section
        'المهارات': 'المهارات',
        'تصميم المواقع': 'تصميم المواقع',
        'إنشاء مواقع ويب احترافية وتفاعلية باستخدام أحدث التقنيات': 'إنشاء مواقع ويب احترافية وتفاعلية باستخدام أحدث التقنيات',
        'إدارة الأعمال': 'إدارة الأعمال',
        'خبرة واسعة في إدارة المشاريع الكبيرة والسيرفرات المعقدة': 'خبرة واسعة في إدارة المشاريع الكبيرة والسيرفرات المعقدة',
        'البرمجة': 'البرمجة',
        'تطوير التطبيقات والأنظمة باستخدام لغات برمجة متعددة': 'تطوير التطبيقات والأنظمة باستخدام لغات برمجة متعددة',
        'التصميم الجرافيكي': 'التصميم الجرافيكي',
        'إبداع تصاميم بصرية مميزة للهوية التجارية والمحتوى الرقمي': 'إبداع تصاميم بصرية مميزة للهوية التجارية والمحتوى الرقمي',
        
        // Footer
        'جميع الحقوق محفوظة © 2025 أبو خالد - Eagle': 'جميع الحقوق محفوظة © 2025 أبو خالد - Eagle'
    },
    en: {
        // Navigation
        'أبو خالد - Eagle': 'Abu Khaled - Eagle',
        
        // Hero Section
        'خبرة ٥ سنوات في مجال الحياة الواقعية وسنتين في البرمجة': '5 years of real-life experience and 2 years in programming',
        'ترأس العديد من السيرفرات الشهيرة والكبيرة، شخص مخضرم بالمجال واسم كبير وثقيل بالساحة، يقدم العديد من المزايا مثل البرمجة الاحترافية والتصميم الجرافيكي وغيرها الكثير، مناصبه قيادية عالية المستوى.': 'Leading numerous famous and large servers, a veteran in the field and a big name in the arena. Offers many advantages such as professional programming and graphic design among many others, holding high-level leadership positions.',
        'تواصل معي': 'Contact Me',
        
        // About Section
        'عنّي': 'About Me',
        'مرحباً، أنا أبو خالد - Eagle، محترف في عالم التكنولوجيا والبرمجة. بدأت رحلتي منذ خمس سنوات في الحياة العملية، واكتسبت خبرة عميقة في إدارة السيرفرات والمشاريع التقنية الكبيرة.': 'Hello, I\'m Abu Khaled - Eagle, a professional in the world of technology and programming. I started my journey five years ago in professional life, gaining deep experience in server management and large technical projects.',
        'على مدار السنتين الماضيتين، ركزت على تطوير مهاراتي البرمجية، وأصبحت قائداً في هذا المجال، حيث أدير العديد من السيرفرات المشهورة وأقدم خدمات متنوعة تشمل البرمجة والتصميم الجرافيكي.': 'Over the past two years, I focused on developing my programming skills, becoming a leader in this field, managing numerous famous servers and providing diverse services including programming and graphic design.',
        'سنوات خبرة': 'Years Experience',
        'مشروع مكتمل': 'Projects Completed',
        'سيرفرات مدارة': 'Servers Managed',
        
        // Skills Section
        'المهارات': 'Skills',
        'تصميم المواقع': 'Web Design',
        'إنشاء مواقع ويب احترافية وتفاعلية باستخدام أحدث التقنيات': 'Creating professional and interactive websites using the latest technologies',
        'إدارة الأعمال': 'Business Management',
        'خبرة واسعة في إدارة المشاريع الكبيرة والسيرفرات المعقدة': 'Extensive experience in managing large projects and complex servers',
        'البرمجة': 'Programming',
        'تطوير التطبيقات والأنظمة باستخدام لغات برمجة متعددة': 'Developing applications and systems using multiple programming languages',
        'التصميم الجرافيكي': 'Graphic Design',
        'إبداع تصاميم بصرية مميزة للهوية التجارية والمحتوى الرقمي': 'Creating distinctive visual designs for branding and digital content',
        
        // Footer
        'جميع الحقوق محفوظة © 2025 أبو خالد - Eagle': 'All rights reserved © 2025 Abu Khaled - Eagle'
    }
};

// State management
let currentLang = 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeAnimations();
    initializeEventListeners();
    initializeScrollAnimations();
    animateProgressBars();
    typewriterEffect();
});

// Theme Management
function initializeTheme() {
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function toggleTheme() {
    if (currentTheme === 'light') {
        currentTheme = 'dark';
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        currentTheme = 'light';
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    localStorage.setItem('theme', currentTheme);
    
    // Add theme transition effect
    body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
}

// Language Management
function initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'ar';
    if (savedLang !== currentLang) {
        toggleLanguage();
    }
}

function toggleLanguage() {
    if (currentLang === 'ar') {
        currentLang = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langToggle.innerHTML = '<span class="flag">🇬🇧</span>';
    } else {
        currentLang = 'ar';
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langToggle.innerHTML = '<span class="flag">🇸🇦</span>';
    }
    
    updateTexts();
    localStorage.setItem('language', currentLang);
    
    // Add language transition effect
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

function updateTexts() {
    const elements = document.querySelectorAll('[data-ar][data-en]');
    elements.forEach(element => {
        const arText = element.getAttribute('data-ar');
        const enText = element.getAttribute('data-en');
        
        if (currentLang === 'ar') {
            element.textContent = arText;
        } else {
            element.textContent = enText;
        }
    });
}

// Animation Management
function initializeAnimations() {
    // Add CSS classes for scroll animations
    const elementsToAnimate = document.querySelectorAll('.about-content, .skill-card, .stat-item');
    elementsToAnimate.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Progress Bar Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.style.getPropertyValue('--progress');
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = progress;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Typewriter Effect
function typewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid var(--primary-color)';
    
    let index = 0;
    const typeSpeed = 100;
    
    function type() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, typeSpeed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Event Listeners
function initializeEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    langToggle.addEventListener('click', toggleLanguage);
    
    // Smooth scrolling for CTA button
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            document.querySelector('.about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Mouse parallax effect
    document.addEventListener('mousemove', handleMouseParallax);
    
    // Skill card hover effects
    initializeSkillCardEffects();
    
    // Stats counter animation
    initializeStatsCounter();
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = currentTheme === 'dark' 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = currentTheme === 'dark' 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    if (e.key === 't' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleTheme();
    }
    
    if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleLanguage();
    }
}

// Mouse parallax effect
function handleMouseParallax(e) {
    const profileCard = document.querySelector('.profile-card');
    if (!profileCard) return;
    
    const rect = profileCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    profileCard.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translateZ(0)
    `;
}

// Skill card effects
function initializeSkillCardEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click ripple effect
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(37, 99, 235, 0.3);
                width: 20px;
                height: 20px;
                left: ${x - 10}px;
                top: ${y - 10}px;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            card.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Stats counter animation
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                const increment = finalValue / 60; // 60 frames for smooth animation
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + (target.textContent.includes('+') ? '+' : '');
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + (target.textContent.includes('+') ? '+' : '');
                    }
                }, 16); // ~60fps
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Utility Functions
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
    }
}

// Performance optimizations
const debouncedResize = debounce(() => {
    // Handle resize events
    console.log('Window resized');
}, 250);

const throttledScroll = throttle(() => {
    // Handle scroll events
    handleHeaderScroll();
}, 16);

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// Console message
console.log('%c🦅 Abu Khaled - Eagle Portfolio', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cDesigned & Developed with ❤️', 'color: #f59e0b; font-size: 14px;');
