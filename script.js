// ULTIMATE GOD-LEVEL PORTFOLIO JAVASCRIPT

// Initialize AOS with custom settings
AOS.init({
    duration: 1200,
    once: false,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Enhanced Loading Screen with Progress
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.querySelector('.progress-bar');
    const loaderText = document.querySelector('.loader-text');

    let progress = 0;
    const loadingMessages = [
        'Forging Digital Magic...',
        'Alchemizing the Elements...',
        'Weaving Reality Threads...',
        'Summoning Digital Spirits...',
        'Almost Ready...'
    ];

    const loadingInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            progressBar.style.width = '100%';
            loaderText.textContent = 'Digital Realm Unlocked!';

            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }, 500);
        } else {
            progressBar.style.width = progress + '%';
            const messageIndex = Math.floor((progress / 100) * loadingMessages.length);
            loaderText.textContent = loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)];
        }
    }, 200);
});



// Advanced Particle System with Multiple Layers
class EnhancedParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.mousePosition = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        // Reduced particle density for better performance
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 45000);

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.3, // Slightly slower for smoother feel
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.1,
                hue: Math.random() * 60 + 260 // Purple to blue range
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Advanced mouse interaction
            const dx = this.mousePosition.x - particle.x;
            const dy = this.mousePosition.y - particle.y;
            // Use squared distance for performance optimization
            const distSq = dx * dx + dy * dy;

            if (distSq < 22500) { // 150 * 150
                const distance = Math.sqrt(distSq);
                const force = (150 - distance) / 150;
                particle.x -= (dx / distance) * force * 3;
                particle.y -= (dy / distance) * force * 3;
                particle.size = Math.min(particle.size * 1.1, 6);
            } else {
                particle.size = Math.max(particle.size * 0.95, 1);
            }

            // Draw particle with gradient
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`);
            gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`);

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });

        // Draw advanced connections
        this.drawAdvancedConnections();

        requestAnimationFrame(() => this.animate());
    }

    drawAdvancedConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distSq = dx * dx + dy * dy;

                // Optimization: Check squared distance first (100 * 100 = 10000)
                if (distSq < 10000) {
                    const distance = Math.sqrt(distSq);
                    const opacity = (1 - distance / 100) * 0.3; // Reduced opacity slightly

                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `hsla(${this.particles[i].hue}, 70%, 60%, ${opacity})`; // Solid color instead of gradient for perf
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    }
}

// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrixCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.characters = '01♾✧◈⚛∞∑∏∫∂∇∆∅∈∉∪∩⊂⊃∧∨¬⇒⇔∀∃';
        this.drops = [];
        this.init();
    }

    init() {
        this.resize();
        this.createDrops();
        this.animate();

        window.addEventListener('resize', () => {
            this.resize();
            this.createDrops();
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createDrops() {
        const columns = Math.floor(this.canvas.width / 24); // Increased column width for fewer drops
        this.drops = [];

        for (let i = 0; i < columns; i++) {
            this.drops.push({
                x: i * 24, // Adjusted spacing
                y: Math.random() * -this.canvas.height,
                speed: Math.random() * 2 + 1,
                chars: []
            });

            // Initialize character trail
            for (let j = 0; j < 15; j++) { // Reduced trail length slightly
                this.drops[i].chars.push(this.characters[Math.floor(Math.random() * this.characters.length)]);
            }
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = '20px monospace'; // Increased font size

        this.drops.forEach(drop => {
            drop.chars.forEach((char, index) => {
                const y = drop.y + index * 24;
                if (y > 0 && y < this.canvas.height) {
                    const opacity = index === drop.chars.length - 1 ? 1 : 1 - (index / drop.chars.length);
                    this.ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 0.3})`;
                    this.ctx.fillText(char, drop.x, y);
                }
            });

            drop.y += drop.speed;

            // Reset drop when it goes off screen
            if (drop.y - drop.chars.length * 24 > this.canvas.height) {
                drop.y = Math.random() * -200;
                drop.speed = Math.random() * 2 + 1;

                // Regenerate characters
                for (let j = 0; j < drop.chars.length; j++) {
                    drop.chars[j] = this.characters[Math.floor(Math.random() * this.characters.length)];
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle systems
const particleSystem = new EnhancedParticleSystem();
const matrixRain = new MatrixRain();

// Navigation with advanced animations
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Advanced navbar scroll effect
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Active navigation link with smooth transition
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Enhanced theme toggle with sound simulation
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');
const body = document.body;

let soundEnabled = true;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
        playSound('theme-change');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
        playSound('theme-change');
    }
});

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        soundIcon.className = 'fas fa-volume-up';
        localStorage.setItem('sound', 'enabled');
    } else {
        soundIcon.className = 'fas fa-volume-mute';
        localStorage.setItem('sound', 'disabled');
    }
});

// Sound simulation system
// Advanced Sound Synthesis System using Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (!soundEnabled) return;

    // Resume context if suspended (browser policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    switch (type) {
        case 'theme-change':
            // Magical chime
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, now);
            oscillator.frequency.exponentialRampToValueAtTime(880, now + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(1760, now + 0.3);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            oscillator.start(now);
            oscillator.stop(now + 0.5);
            break;

        case 'click':
            // Soft mechanical click
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);
            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
            break;

        case 'hover':
            // Subtle high freq hum
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(1200, now);
            gainNode.gain.setValueAtTime(0.02, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            oscillator.start(now);
            oscillator.stop(now + 0.05);
            break;

        case 'notification':
        case 'success':
            // Success ping
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, now); // C5
            oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
            oscillator.start(now);
            oscillator.stop(now + 0.3);
            break;

        case 'error':
            // Error buzz
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, now);
            oscillator.frequency.linearRampToValueAtTime(100, now + 0.3);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
            oscillator.start(now);
            oscillator.stop(now + 0.3);
            break;

        default:
            // Generic blip
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, now);
            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
    }
}

// Add sound wave styles
if (!document.getElementById('sound-styles')) {
    const soundStyles = document.createElement('style');
    soundStyles.id = 'sound-styles';
    soundStyles.textContent = `
        .sound-wave {
            display: flex;
            gap: 3px;
            align-items: center;
        }
        .sound-wave span {
            width: 3px;
            height: 20px;
            background: var(--primary);
            animation: waveAnimation 0.5s ease infinite;
        }
        .sound-wave span:nth-child(2) {
            animation-delay: 0.1s;
        }
        .sound-wave span:nth-child(3) {
            animation-delay: 0.2s;
        }
        @keyframes waveAnimation {
            0%, 100% { height: 20px; }
            50% { height: 10px; }
        }
    `;
    document.head.appendChild(soundStyles);
}

// Load saved preferences
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.className = 'fas fa-sun';
}

const savedSound = localStorage.getItem('sound');
if (savedSound === 'disabled') {
    soundEnabled = false;
    soundIcon.className = 'fas fa-volume-mute';
}

// Advanced typing effect with multiple role combinations
const typingText = document.getElementById('typingText');
const roleCombinations = [
    'Coder',
    'Developer',
    'Programmer',
    'Gamer',
    'Frontend & UI',
    'Creative Dev',
    'Digital Alchemist',
    'UI/UX Enchanter'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    if (!typingText) return;

    const currentRole = roleCombinations[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roleCombinations.length;
        typingSpeed = 500;
    }

    setTimeout(typeRole, typingSpeed);
}

typeRole();

// Enhanced counter animation with staggered timing
const counters = document.querySelectorAll('[data-count]');

const startCounter = (counter) => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / 200;

    const updateCounter = () => {
        const current = +counter.innerText;
        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCounter();
};

// Intersection observer for counters with advanced timing
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                startCounter(entry.target);
                playSound('counter');
            }, index * 200);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Enhanced skill bar animations with elixir bubbles
const elixirFills = document.querySelectorAll('.elixir-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const progress = fill.getAttribute('data-fill');

            setTimeout(() => {
                fill.style.width = progress + '%';
                playSound('skill');
            }, index * 300);

            skillObserver.unobserve(fill);
        }
    });
}, { threshold: 0.5 });

elixirFills.forEach(fill => {
    skillObserver.observe(fill);
});

// Power level bars animation
const levelBars = document.querySelectorAll('.level-bar');

const powerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;

            setTimeout(() => {
                bar.style.setProperty('--target-width', width);
            }, index * 200);

            powerObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

levelBars.forEach(bar => {
    powerObserver.observe(bar);
});

// Advanced magnetic button effect with 3D rotation
const magneticButtons = document.querySelectorAll('.quantum-btn, .portal-btn, .summon-btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * -10;
        const rotateY = (x / rect.width) * 10;

        button.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0)';
    });

    button.addEventListener('click', () => {
        playSound('click');

        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'button-ripple';
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        `;

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
if (!document.getElementById('ripple-styles')) {
    const rippleStyles = document.createElement('style');
    rippleStyles.id = 'ripple-styles';
    rippleStyles.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyles);
}

// Enhanced smooth scrolling with parallax
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            playSound('navigation');
        }
    });
});

// Advanced parallax scrolling
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-left, .hero-right, .floating-orbs');
    const shapes = document.querySelectorAll('.shape');

    parallaxElements.forEach((element, index) => {
        const speed = index === 0 ? 0.5 : index === 1 ? 0.3 : 0.7;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });

    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
    });
});

// Enhanced contact form with validation and magic effects
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const magicInputs = document.querySelectorAll('.magic-input input, .magic-input textarea');

    // Dynamic redirect URL for hosted environment
    const nextInput = contactForm.querySelector('input[name="_next"]');
    if (nextInput) {
        nextInput.value = window.location.href.split('?')[0] + '?success=true';
    }

    magicInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
            playSound('focus');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });

        input.addEventListener('input', () => {
            const sparkle = input.parentElement.querySelector('.input-sparkle');
            if (sparkle && input.value.length > 0) {
                sparkle.style.opacity = '1';
            }
        });
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showNotification('Please complete the ritual with all magical components', 'error');
            shakeForm();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Your digital sigil appears corrupted', 'error');
            shakeForm();
            return;
        }

        if (message.length < 10) {
            showNotification('Your incantation must be more powerful', 'error');
            shakeForm();
            return;
        }

        // Real magical form submission using standard POST (works on file://)
        const submitBtn = this.querySelector('.summon-btn');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        submitBtn.querySelector('.btn-text').textContent = 'Casting Spell...';
        submitBtn.disabled = true;
        playSound('summoning');

        // Wait for animation then submit (Slower processing feel)
        setTimeout(() => {
            this.submit();
        }, 3000);
    });
}

// Form shake animation
function shakeForm() {
    const form = document.querySelector('.summoning-form');
    form.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        form.style.animation = '';
    }, 500);
}

// Add shake animation
if (!document.getElementById('shake-styles')) {
    const shakeStyles = document.createElement('style');
    shakeStyles.id = 'shake-styles';
    shakeStyles.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(shakeStyles);
}

// Enhanced notification system with magical themes
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.cosmic-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create magical notification
    const notification = document.createElement('div');
    notification.className = `cosmic-notification ${type}`;

    const iconMap = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-triangle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-circle'
    };

    notification.innerHTML = `
        <div class="notification-portal">
            <div class="notification-content">
                <i class="fas ${iconMap[type]} notification-icon"></i>
                <span class="notification-text">${message}</span>
            </div>
            <div class="notification-particles">
                <span class="particle">✨</span>
                <span class="particle">⭐</span>
                <span class="particle">💫</span>
            </div>
        </div>
    `;

    // Add magical styles
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        z-index: 10000;
        animation: notificationEntrance 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;

    // Add notification styles
    if (!document.getElementById('cosmic-notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'cosmic-notification-styles';
        notificationStyles.textContent = `
            .cosmic-notification {
                max-width: 400px;
            }
            
            .notification-portal {
                background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' :
                type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' :
                    type === 'warning' ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                        'linear-gradient(135deg, #3b82f6, #2563eb)'};
                color: white;
                padding: 20px;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(10px);
                position: relative;
                overflow: hidden;
            }
            
            .notification-portal::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: conic-gradient(
                    transparent,
                    rgba(255, 255, 255, 0.1),
                    transparent
                );
                animation: portalSpin 3s linear infinite;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 15px;
                position: relative;
                z-index: 1;
            }
            
            .notification-icon {
                font-size: 1.5rem;
                animation: iconPulse 2s ease infinite;
            }
            
            .notification-text {
                font-size: 1rem;
                font-weight: 500;
                flex: 1;
            }
            
            .notification-particles {
                position: absolute;
                top: 10px;
                right: 10px;
                display: flex;
                gap: 5px;
            }
            
            .notification-particles .particle {
                font-size: 0.8rem;
                animation: particleFloat 2s ease infinite;
            }
            
            .notification-particles .particle:nth-child(2) {
                animation-delay: 0.5s;
            }
            
            .notification-particles .particle:nth-child(3) {
                animation-delay: 1s;
            }
            
            @keyframes notificationEntrance {
                0% {
                    transform: translateX(100%) scale(0.5) rotateY(90deg);
                    opacity: 0;
                }
                100% {
                    transform: translateX(0) scale(1) rotateY(0deg);
                    opacity: 1;
                }
            }
            
            @keyframes notificationExit {
                0% {
                    transform: translateX(0) scale(1) rotateY(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateX(100%) scale(0.5) rotateY(-90deg);
                    opacity: 0;
                }
            }
            
            @keyframes portalSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @keyframes iconPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            @keyframes particleFloat {
                0%, 100% { transform: translateY(0); opacity: 0.5; }
                50% { transform: translateY(-5px); opacity: 1; }
            }
        `;
        document.head.appendChild(notificationStyles);
    }

    document.body.appendChild(notification);

    // Auto remove with magical exit
    setTimeout(() => {
        notification.style.animation = 'notificationExit 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 500);
    }, 5000);
}

// Advanced keyboard shortcuts with cheat codes
document.addEventListener('keydown', (e) => {
    // Prevent shortcuts when typing in forms
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    switch (e.key.toLowerCase()) {
        case 'h':
            window.location.href = '#home';
            playSound('navigation');
            break;
        case 'a':
            window.location.href = '#about';
            playSound('navigation');
            break;
        case 's':
            window.location.href = '#skills';
            playSound('navigation');
            break;
        case 'p':
            window.location.href = '#projects';
            playSound('navigation');
            break;
        case 't':
            window.location.href = '#timeline';
            playSound('navigation');
            break;
        case 'c':
            window.location.href = '#contact';
            playSound('navigation');
            break;
        case 't':
            if (e.shiftKey) {
                themeToggle.click();
            }
            break;
        case 'm':
            if (e.shiftKey) {
                soundToggle.click();
            }
            break;
    }
});

// Easter egg: Alchemical sequence
let alchemicalSequence = [];
const alchemicalPattern = ['a', 'l', 'c', 'h', 'e', 'm', 'y'];

document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    alchemicalSequence.push(e.key.toLowerCase());
    alchemicalSequence = alchemicalSequence.slice(-7);

    if (alchemicalSequence.join('') === alchemicalPattern.join('')) {
        activateAlchemicalMode();
    }
});

function activateAlchemicalMode() {
    document.body.style.animation = 'alchemicalTransformation 5s ease';
    showNotification('🧙‍♂️ ALCHEMICAL MODE ACTIVATED! You have unlocked the ancient secrets of digital transmutation!', 'success');

    // Add floating particles everywhere
    for (let i = 0; i < 50; i++) {
        createFloatingParticle();
    }

    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);

    playSound('transformation');
}

function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.innerHTML = ['✨', '⭐', '💫', '🔮', '⚗️', '🧪', '🌟'][Math.floor(Math.random() * 7)];
    particle.style.cssText = `
        position: fixed;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 9999;
        animation: floatUp 3s ease-out forwards;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
    `;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
}

// Add float up animation
if (!document.getElementById('float-up-styles')) {
    const floatUpStyles = document.createElement('style');
    floatUpStyles.id = 'float-up-styles';
    floatUpStyles.textContent = `
        @keyframes alchemicalTransformation {
            0% { filter: hue-rotate(0deg) saturate(1); }
            25% { filter: hue-rotate(90deg) saturate(1.5); }
            50% { filter: hue-rotate(180deg) saturate(2); }
            75% { filter: hue-rotate(270deg) saturate(1.5); }
            100% { filter: hue-rotate(360deg) saturate(1); }
        }
        
        @keyframes floatUp {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-200px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(floatUpStyles);
}

// Performance optimization with advanced debouncing
function advancedDebounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Debounced performance handlers
const optimizedScrollHandler = advancedDebounce(() => {
    // Complex scroll calculations
    const scrolled = window.pageYOffset;

    // Parallax effects
    const parallaxElements = document.querySelectorAll('.hero-left, .hero-right, .floating-orbs');
    parallaxElements.forEach((element, index) => {
        const speed = index === 0 ? 0.5 : index === 1 ? 0.3 : 0.7;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10, true);

window.addEventListener('scroll', optimizedScrollHandler);

// Lazy loading for performance optimization
const lazyImages = document.querySelectorAll('img[data-lazy]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.lazy;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Console welcome message with ASCII art
console.log('%c🧙‍♂️ WELCOME TO BHUUX DIGITAL LAB! 🧪', 'font-size: 20px; font-weight: bold; color: #8b5cf6; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%c⚗️ Transmuting pixels into consciousness...', 'font-size: 14px; color: #ec4899;');
console.log('%c✨ Where code meets magic and reality bends to will...', 'font-size: 12px; color: #14b8a6;');
console.log('%c🔮 Explore the secrets hidden within the source...', 'font-size: 10px; color: #f59e0b;');

// Final initialization
document.addEventListener('DOMContentLoaded', () => {
    // Only show welcome message if NOT returning from form submission
    if (!window.location.search.includes('success=true')) {
        // Trigger initial animations with longer delay
        setTimeout(() => {
            playSound('load');
            showNotification('Welcome to BhuuX Portfolio! ✨', 'info');
        }, 3500);
    }
});

// Performance monitoring
let performanceStats = {
    startTime: performance.now(),
    interactions: 0,
    scrollDepth: 0,
    timeSpent: 0
};

// Track interactions
document.addEventListener('click', () => {
    performanceStats.interactions++;
    playSound('click');
});

// Track scroll depth
window.addEventListener('scroll', advancedDebounce(() => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    performanceStats.scrollDepth = Math.max(performanceStats.scrollDepth, scrollPercent);
}, 100));

// Save performance data
window.addEventListener('beforeunload', () => {
    performanceStats.timeSpent = performance.now() - performanceStats.startTime;
    localStorage.setItem('portfolioPerformance', JSON.stringify(performanceStats));
});

// Check for successful form submission
function checkSubmissionSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Remove the query parameter without reloading
        window.history.replaceState({}, document.title, window.location.pathname);

        // Trigger celebration
        setTimeout(() => {
            triggerConfetti();

            // Scroll to top (Home) to show the celebration better
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Show notification after a slight delay so user settles in
            setTimeout(() => {
                showNotification('✨ Message Delivered Successfully! ✨', 'success');
                try { playSound('success'); } catch (e) { }
            }, 800);

        }, 500);
    }
}

// Simple Confetti Effect
function triggerConfetti() {
    const colors = ['#8b5cf6', '#ec4899', '#14b8a6', '#ffffff', '#fbbf24'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';

        // Random animation properties
        const duration = Math.random() * 3 + 2 + 's';
        const delay = Math.random() * 0.5 + 's';

        confetti.style.transition = `top ${duration} linear, transform ${duration} ease-in-out, opacity ${duration} ease`;
        document.body.appendChild(confetti);

        // Animate
        setTimeout(() => {
            confetti.style.top = '110vh';
            confetti.style.transform = `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px)`;
            confetti.style.opacity = '0';
        }, 100);

        // Cleanup
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// --- Visual Upgrades Logic ---

// 1. Magical Cursor
const cursor = document.querySelector('.magic-cursor');
const cursorTrail = document.querySelector('.cursor-trail');

if (cursor && cursorTrail) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Trail delay effect
        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effect for clickable elements
    const clickables = document.querySelectorAll('a, button, .project-crystal, .skill-sphere');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// 2. Scroll Progress & Warp to Top
const progressBar = document.querySelector('.scroll-progress');
const warpBtn = document.getElementById('warpTopBtn');

window.addEventListener('scroll', () => {
    // Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";

    // Warp Button
    if (warpBtn) {
        if (winScroll > 500) {
            warpBtn.classList.add('visible');
        } else {
            warpBtn.classList.remove('visible');
        }
    }
});

if (warpBtn) {
    warpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        playSound('hover');
    });
}

// AI Assistant (Peter) Logic
// AI Assistant (Peter) Logic
// AI Assistant (Peter) Logic - Advanced Brain 🧠
const aiFamiliar = {
    container: document.getElementById('aiFamiliar'),
    orb: document.querySelector('.familiar-orb'),
    dialogue: document.getElementById('familiarDialogue'),
    chatHistory: document.getElementById('chatHistory'),
    input: document.getElementById('userChatInput'),
    dots: document.getElementById('typingDots'),
    moodDisplay: document.querySelector('.peter-mood'),
    levelDisplay: document.getElementById('peterLevel'),
    voiceIcon: document.getElementById('voiceIcon'),

    isVisible: false,
    idleTimer: null,
    voiceEnabled: false,

    // Pet Stats
    stats: {
        happiness: 100,
        energy: 100,
        level: 1,
        xp: 0
    },

    // Knowledge Base
    brain: {
        greetings: ['hi', 'hello', 'hey', 'sup', 'yo'],
        skills: ['skill', 'stack', 'tech', 'react', 'node', 'js', 'javascript', 'css'],
        projects: ['project', 'work', 'portfolio', 'built', 'make'],
        contact: ['contact', 'email', 'hire', 'reach', 'message'],
        jokes: ['joke', 'funny', 'laugh'],
        identity: ['who are you', 'what are you', 'name'],
        creator: ['who made you', 'creator', 'author', 'bhuux'],
        status: ['how are you', 'status', 'mood'],
        commands: ['dark mode', 'light mode', 'lights off', 'lights on']
    },

    jokes: [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "I told a UDP joke, but you might not get it... 📦",
        "Why did the developer go broke? Because he used up all his cache! 💸",
        "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 📊",
        "Hardware: The part of a computer you can kick. 🦶",
        "Real programmers count from 0. 0, 1, 2... 🔢"
    ],

    init() {
        if (!this.orb) return;
        this.createSummonButton();
        this.container.classList.add('hidden');

        // Eye Tracking
        document.addEventListener('mousemove', (e) => {
            if (this.isVisible) this.trackEyes(e.clientX, e.clientY);
            this.resetIdleTimer();
        });

        // Click interaction
        this.orb.addEventListener('click', () => {
            this.toggleChat();
            this.playRobotSound('chirp');
            this.happyJump();
        });

        // Keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if (e.shiftKey && e.key.toLowerCase() === 'p') {
                this.toggleVisibility();
            }
        });

        // Stats decay loop
        setInterval(() => this.decayStats(), 60000); // Every minute
    },

    createSummonButton() {
        const btn = document.createElement('button');
        btn.className = 'summon-peter-btn';
        btn.innerHTML = '<i class="fas fa-robot"></i>';
        btn.title = "Summon Peter (Shift + P)";
        btn.onclick = () => this.toggleVisibility();
        document.body.appendChild(btn);
    },

    toggleVisibility() {
        this.isVisible = !this.isVisible;
        if (this.isVisible) {
            this.container.classList.remove('hidden');
            this.playRobotSound('activate');
            this.speak("Peter online! Systems nominal. 🤖");
            this.happyJump();
            this.resetIdleTimer();
        } else {
            this.playRobotSound('deactivate');
            this.container.classList.add('hidden');
        }
    },

    toggleChat() {
        this.dialogue.classList.toggle('active');
        if (this.dialogue.classList.contains('active')) {
            this.input.focus();
        }
    },

    switchTab(tabName) {
        // Update buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`tab-${tabName}`).classList.add('active');

        this.playRobotSound('click');
    },

    handleEnter(e) {
        if (e.key === 'Enter') this.handleUserMessage();
    },

    handleUserMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        this.addUserMessage(text);
        this.input.value = '';

        this.showTyping();
        setTimeout(() => {
            const response = this.analyzeInput(text.toLowerCase());
            this.hideTyping();
            this.speak(response);
        }, 1000 + Math.random() * 500);
    },

    analyzeInput(text) {
        // Commands
        if (text.includes('dark mode') || text.includes('lights off')) {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            return "Dark mode activated. Stealth protocols engaged. 🌑";
        }
        if (text.includes('light mode') || text.includes('lights on')) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            return "Light mode activated. Solar shields up! ☀️";
        }

        // Check stats
        if (this.stats.energy < 20) return "I'm too tired... need energy... 🔋";

        // Pattern Matching
        if (this.brain.greetings.some(w => text.includes(w))) return "Hello there! Ready to explore some code? 🚀";
        if (this.brain.skills.some(w => text.includes(w))) return "BhuuX is a master of the MERN stack! React, Node, Express, and MongoDB. ⚔️";
        if (this.brain.projects.some(w => text.includes(w))) {
            setTimeout(() => window.location.href = '#projects', 1500);
            return "Let me warp you to the Projects section! Hold on... 🌌";
        }
        if (this.brain.contact.some(w => text.includes(w))) {
            setTimeout(() => window.location.href = '#contact', 1500);
            return "Opening communication channels... warping to Contact section! 📡";
        }
        if (this.brain.jokes.some(w => text.includes(w))) return this.jokes[Math.floor(Math.random() * this.jokes.length)];
        if (this.brain.identity.some(w => text.includes(w))) return "I am Peter v2.0, a Level " + this.stats.level + " Digital Familiar. 🤖";
        if (this.brain.creator.some(w => text.includes(w))) return "I was forged in the digital fires by BhuuX himself! 🔥";
        if (this.brain.status.some(w => text.includes(w))) return `Systems Check: Happiness ${this.stats.happiness}%, Energy ${this.stats.energy}%. Mood: ${this.getMood()}!`;

        const defaults = [
            "Interesting... tell me more! 🤔",
            "I'm analyzing that input... beep boop. 🧠",
            "My databanks don't have a specific record for that, but I'm learning! 📚",
            "Try asking me to tell a joke or switch to dark mode! 🎭"
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    },

    // Actions
    feed() {
        if (this.stats.energy >= 100) {
            this.speak("I'm full! No more bytes for me. 🤢");
            return;
        }
        this.stats.energy = Math.min(100, this.stats.energy + 20);
        this.stats.happiness = Math.min(100, this.stats.happiness + 5);
        this.addXp(10);
        this.updateMoodDisplay();
        this.speak("Yum! That apple was delicious. Energy restored! 🍎");
        this.happyJump();
    },

    play() {
        if (this.stats.energy < 10) {
            this.speak("Too tired to play... zzz... 😴");
            return;
        }
        this.stats.energy -= 10;
        this.stats.happiness = Math.min(100, this.stats.happiness + 15);
        this.addXp(20);
        this.updateMoodDisplay();
        this.speak("Wheee! Catch! 🎾 That was fun!");
        this.happyJump();
    },

    tellJoke() {
        const joke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
        this.speak(joke);
        this.stats.happiness = Math.min(100, this.stats.happiness + 10);
        this.addXp(5);
        this.updateMoodDisplay();
    },

    playRPS(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const botChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (userChoice === botChoice) result = "It's a tie! 🤝";
        else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            result = "You win! 🎉";
            this.addXp(30);
            this.stats.happiness = Math.min(100, this.stats.happiness + 10);
        } else {
            result = "I win! Hehe. 🤖";
            this.stats.happiness = Math.min(100, this.stats.happiness + 5);
        }

        this.speak(`I chose ${botChoice}. ${result}`);
        this.updateMoodDisplay();
    },

    startTour() {
        this.speak("Initiating Guided Tour! Follow me... 🗺️");
        this.toggleChat(); // Close chat to see screen

        const sections = ['#home', '#about', '#skills', '#projects', '#contact'];
        let currentStep = 0;

        const tourInterval = setInterval(() => {
            if (currentStep >= sections.length) {
                clearInterval(tourInterval);
                this.speak("Tour complete! Hope you enjoyed it. 👋");
                return;
            }

            window.location.href = sections[currentStep];
            this.playRobotSound('activate');
            currentStep++;
        }, 3000);
    },

    setColor(color) {
        document.documentElement.style.setProperty('--primary', color);
        this.speak(`Color calibrated to ${color}. Looking fresh! 🎨`);
        this.happyJump();
    },

    toggleSound() {
        this.voiceEnabled = !this.voiceEnabled;
        this.voiceIcon.className = this.voiceEnabled ? "fas fa-volume-up" : "fas fa-volume-mute";
        this.speak(this.voiceEnabled ? "Voice synthesis activated." : "Voice synthesis deactivated.");
    },

    // Helpers
    addUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'chat-message user';
        div.textContent = text;
        this.chatHistory.appendChild(div);
        this.scrollToBottom();
    },

    addBotMessage(text) {
        const div = document.createElement('div');
        div.className = 'chat-message bot';
        div.textContent = text;
        this.chatHistory.appendChild(div);
        this.scrollToBottom();
    },

    speak(text) {
        this.addBotMessage(text);
        this.playRobotSound('talk');

        if (this.voiceEnabled && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = 1.2; // Robotic pitch
            utterance.rate = 1.1;
            window.speechSynthesis.speak(utterance);
        }
    },

    showTyping() {
        this.dots.style.display = 'flex';
        this.scrollToBottom();
    },

    hideTyping() {
        this.dots.style.display = 'none';
    },

    scrollToBottom() {
        this.chatHistory.scrollTop = this.chatHistory.scrollHeight;
    },

    addXp(amount) {
        this.stats.xp += amount;
        if (this.stats.xp >= 100) {
            this.stats.level++;
            this.stats.xp = 0;
            this.levelDisplay.textContent = this.stats.level;
            this.speak(`LEVEL UP! I am now Level ${this.stats.level}! 🌟`);
            this.playRobotSound('activate');
        }
    },

    decayStats() {
        this.stats.happiness = Math.max(0, this.stats.happiness - 5);
        this.stats.energy = Math.max(0, this.stats.energy - 2);
        this.updateMoodDisplay();
    },

    getMood() {
        if (this.stats.happiness > 80) return "Ecstatic 🤩";
        if (this.stats.happiness > 50) return "Happy 😺";
        if (this.stats.happiness > 20) return "Bored 😐";
        return "Sad 😢";
    },

    updateMoodDisplay() {
        this.moodDisplay.textContent = this.getMood();
    },

    resetIdleTimer() {
        if (!this.isVisible) return;
        clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(() => {
            if (this.isVisible) {
                this.speak("Entering sleep mode... 💤");
                setTimeout(() => this.toggleVisibility(), 2000);
            }
        }, 60000);
    },

    trackEyes(mouseX, mouseY) {
        const eyes = document.querySelectorAll('.eye');
        const rect = this.orb.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        const distance = Math.min(5, Math.hypot(mouseX - centerX, mouseY - centerY) / 20);
        const eyeX = Math.cos(angle) * distance;
        const eyeY = Math.sin(angle) * distance;
        eyes.forEach(eye => eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`);
    },

    happyJump() {
        this.orb.style.animation = 'none';
        this.orb.offsetHeight;
        this.orb.style.animation = 'familiarJump 0.5s ease';
        setTimeout(() => this.orb.style.animation = 'familiarFloat 4s ease-in-out infinite', 500);
    },

    playRobotSound(type) {
        if (!window.audioCtx) return;
        const now = audioCtx.currentTime;
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        switch (type) {
            case 'activate':
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(220, now);
                oscillator.frequency.linearRampToValueAtTime(880, now + 0.3);
                gainNode.gain.setValueAtTime(0.1, now);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
                oscillator.start(now);
                oscillator.stop(now + 0.3);
                break;
            case 'deactivate':
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(880, now);
                oscillator.frequency.linearRampToValueAtTime(220, now + 0.3);
                gainNode.gain.setValueAtTime(0.1, now);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
                oscillator.start(now);
                oscillator.stop(now + 0.3);
                break;
            case 'chirp':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(1200, now);
                oscillator.frequency.exponentialRampToValueAtTime(2000, now + 0.1);
                gainNode.gain.setValueAtTime(0.05, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                oscillator.start(now);
                oscillator.stop(now + 0.1);
                break;
            case 'click':
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(600, now);
                gainNode.gain.setValueAtTime(0.05, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                oscillator.start(now);
                oscillator.stop(now + 0.05);
                break;
            case 'talk':
                for (let i = 0; i < 5; i++) {
                    const osc = audioCtx.createOscillator();
                    const gn = audioCtx.createGain();
                    osc.connect(gn);
                    gn.connect(audioCtx.destination);
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(400 + Math.random() * 400, now + i * 0.05);
                    gn.gain.setValueAtTime(0.02, now + i * 0.05);
                    gn.gain.linearRampToValueAtTime(0, now + i * 0.05 + 0.03);
                    osc.start(now + i * 0.05);
                    osc.stop(now + i * 0.05 + 0.03);
                }
                break;
        }
    }
};

// Initialize AI
document.addEventListener('DOMContentLoaded', () => {
    checkSubmissionSuccess();
    aiFamiliar.init();

    // Project Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-crystal');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            playSound('click');
        });
    });
});