// =============================================
// API Base URL — Change this to your Render backend URL after deployment!
// Example: const API_BASE = 'https://cyberx-backend.onrender.com';
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://cyberx-4qz9.onrender.com'; // ✅ Render Backend Live!
// =============================================

// Resource data with enhanced content
const resources = {
    password: {
        title: "Password Mastery Elite",
        description: "Advanced password security techniques used by enterprise security teams and government agencies.",
        videos: [
            {
                title: "Enterprise Password Strategies",
                description: "Professional-grade password creation and management techniques.",
                thumbnail: "image 1.png",
                url: "https://www.youtube.com/watch?v=yzGzB-yYKcc",
                duration: "8:45"
            },
            {
                title: "Advanced Password Manager Setup",
                description: "Complete guide to enterprise password management systems.",
                thumbnail: "image 2.png",
                url: "https://www.youtube.com/watch?v=Zgv6DjNf7ac",
                duration: "12:30"
            },
            {
                title: "Password Security Best Practices",
                description: "Learn how to create and manage secure passwords effectively.",
                thumbnail: "image 3.png",
                url: "https://www.youtube.com/watch?v=WOrndXzgKd4",
                duration: "10:15"
            }
        ],
        tips: [
            "Use enterprise-grade password managers with AES-256 encryption",
            "Implement 20+ character passphrases with entropy-based generation",
            "Enable hardware security key integration for critical accounts",
            "Set up automated password rotation for high-risk accounts",
            "Use zero-knowledge architecture password solutions",
            "Implement password policy enforcement across all devices"
        ]
    },
    phishing: {
        title: "Phishing Defense Matrix",
        description: "Military-grade phishing detection and prevention protocols used by cybersecurity experts.",
        videos: [
            {
                title: "Advanced Phishing Detection",
                description: "Professional techniques for identifying sophisticated phishing attempts.",
                thumbnail: "image 2.1.png",
                url: "https://www.youtube.com/watch?v=JlQovysQBn0",
                duration: "15:20"
            },
            {
                title: "Phishing Simulation Training",
                description: "How to conduct effective phishing awareness training.",
                thumbnail: "image2.2.png",
                url: "https://www.youtube.com/watch?v=fMON6UeUMfQ",
                duration: "9:45"
            },
            {
                title: "Email Security Protocols",
                description: "Implementing advanced email security measures.",
                thumbnail: "2.3.png",
                url: "https://www.youtube.com/watch?v=ghLTz12zMQo",
                duration: "11:30"
            }
        ],
        tips: [
            "Analyze email headers for SPF, DKIM, and DMARC authentication",
            "Use advanced threat intelligence feeds for real-time phishing detection",
            "Implement email sandboxing and URL reputation checking",
            "Deploy machine learning-based phishing detection systems",
            "Conduct regular phishing simulation exercises",
            "Establish incident response protocols for phishing attacks"
        ]
    },
    browsing: {
        title: "Secure Navigation Protocol",
        description: "Elite browsing security techniques used by intelligence agencies and security professionals.",
        videos: [
            {
                title: "Secure Browser Configuration",
                description: "How to harden your browser for maximum security.",
                thumbnail: "image 3.1.png",
                url: "https://youtu.be/9nl6hO0ECgM?si=KzogVZeLh76p9gHa",
                duration: "14:20"
            },
            {
                title: "VPN and Privacy Tools",
                description: "Using VPNs and privacy tools for secure browsing.",
                thumbnail: "image 3.2.png",
                url: "https://youtu.be/zFbx-3pPVjU?si=vw26wQO-a_LLVDfg",
                duration: "12:10"
            },
            {
                title: "HTTPS and SSL/TLS Security",
                description: "Understanding and implementing secure web protocols.",
                thumbnail: "image 3.3.png",
                url: "https://youtu.be/EnY6fSng3Ew?si=ZXaKn2VvlIRhleDE",
                duration: "13:45"
            }
        ],
        tips: [
            "Use hardened browser configurations with security extensions",
            "Implement DNS-over-HTTPS with trusted resolvers",
            "Deploy VPN with kill-switch and leak protection",
            "Enable certificate pinning and HSTS enforcement",
            "Use containerized browsing environments",
            "Implement real-time threat detection and blocking"
        ]
    },
    mobile: {
        title: "Mobile Fortress Protocol",
        description: "Enterprise mobile security framework for maximum device protection.",
        videos: [
            {
                title: "Mobile Device Security",
                description: "Comprehensive guide to securing mobile devices.",
                thumbnail: "image 4.1.png",
                url: "https://youtu.be/WAWsgvyqqj8?si=jcDEi5kcE2x55g26",
                duration: "11:25"
            },
            {
                title: "Mobile App Security",
                description: "Securing mobile applications against threats.",
                thumbnail: "image 4.2.png",
                url: "https://youtu.be/5OsfgmPNKEg?si=GRmzcfS2nujJquaX",
                duration: "10:40"
            },
            {
                title: "BYOD Security Policies",
                description: "Implementing Bring Your Own Device security policies.",
                thumbnail: "image 4.3.png",
                url: "https://youtu.be/9YDwvruTPyU?si=3Sg7ScWkjv_8toZ_",
                duration: "12:15"
            }
        ],
        tips: [
            "Deploy Mobile Device Management (MDM) solutions",
            "Use hardware-backed keystore for cryptographic operations",
            "Implement mobile application security testing (MAST)",
            "Enable remote attestation and device integrity checking",
            "Use secure containers for sensitive applications",
            "Deploy mobile threat defense (MTD) solutions"
        ]
    },
    '2fa': {
        title: "Authentication Elite Matrix",
        description: "Multi-layered authentication protocols used by high-security environments.",
        videos: [
            {
                title: "Multi-Factor Authentication",
                description: "Implementing MFA for enhanced security.",
                thumbnail: "5.1.png",
                url: "https://youtu.be/JCFAoMPFq-Q?si=1GgSuq-zEGqFH6rz",
                duration: "9:30"
            },
            {
                title: "Biometric Security",
                description: "Using biometrics for secure authentication.",
                thumbnail: "5.2.png",
                url: "https://youtu.be/eQsN2Ij03oo?si=qV3-PfRtz_Bo2MS7",
                duration: "11:20"
            },
            {
                title: "Hardware Security Keys",
                description: "Implementing hardware-based authentication.",
                thumbnail: "5.3.png",
                url: "https://youtu.be/eMslwQLtcvM?si=An-cdvk3_BUCl-os",
                duration: "10:50"
            }
        ],
        tips: [
            "Deploy FIDO2/WebAuthn hardware security keys",
            "Implement biometric authentication with liveness detection",
            "Use risk-based adaptive authentication",
            "Deploy certificate-based authentication for critical systems",
            "Implement time-based and location-based access controls",
            "Use quantum-resistant authentication methods"
        ]
    },
    social: {
        title: "Digital Identity Vault",
        description: "Advanced privacy protection and digital identity management for social media.",
        videos: [
            {
                title: "Social Media Privacy",
                description: "Protecting your privacy on social media platforms.",
                thumbnail: "6.1.png",
                url: "https://youtu.be/rEIRnl2Z1NY?si=5NY9QVdDVxCqXeL4",
                duration: "8:35"
            },
            {
                title: "Digital Footprint Management",
                description: "Managing and reducing your digital footprint.",
                thumbnail: "6.2.png",
                url: "https://youtu.be/K9COIyN8rdI?si=N6ZWdlVCIn-U4Wot",
                duration: "10:25"
            },
            {
                title: "Online Identity Protection",
                description: "Protecting your identity from online threats.",
                thumbnail: "6.3.png",
                url: "https://youtu.be/L2zOZtd4AGU?si=UBAgxGv_jRhGhoO3",
                duration: "12:10"
            }
        ],
        tips: [
            "Implement compartmentalized social media identities",
            "Use privacy-focused social media platforms",
            "Deploy automated privacy setting management",
            "Implement social media monitoring and threat detection",
            "Use disposable email addresses for account registration",
            "Deploy deep fake detection and verification systems"
        ]
    }
};


// Create animated particles background
function createParticles() {
    const background = document.getElementById('particles-background');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 5 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        background.appendChild(particle);
    }
}

// Survey card activation with animation
function activateCard(card, type) {
    // Remove active class from all cards
    document.querySelectorAll('.survey-card').forEach(c => c.classList.remove('active'));
    // Add active class to clicked card
    card.classList.add('active');

    // Add bounce animation
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'pulse 0.6s ease-in-out';
    }, 10);

    setTimeout(() => {
        card.style.animation = '';
    }, 600);
}

// Enhanced smooth scrolling with easing
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Close mobile menu after clicking a link
    closeMobileMenu();
}

// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileOverlay.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    mobileOverlay.style.display = 'none';
}

mobileMenu.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Enhanced show resource function
function showResource(resourceId, pushState = true) {
    const resource = resources[resourceId];
    if (!resource) return;

    // Push browser history state to enable back button navigation
    if (pushState) {
        history.pushState({ view: 'resource', resourceId: resourceId }, '', `#resource-${resourceId}`);
    }

    // Update resource title and description
    document.getElementById('resource-title').textContent = resource.title;
    document.getElementById('resource-desc').textContent = resource.description;

    // Clear and populate videos
    const videosContainer = document.getElementById('resource-videos');
    videosContainer.innerHTML = '';

    if (resource.videos && resource.videos.length > 0) {
        resource.videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                        <div class="video-thumbnail" style="position: relative; height: 200px; overflow: hidden; background: var(--gradient-card); display: flex; align-items: center; justify-content: center;">
                            <img src="${video.thumbnail}" alt="${video.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\"display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--secondary);\\"><i class=\\"fas fa-play-circle\\" style=\\"font-size:3rem;margin-bottom:1rem;\\"></i><span>Video Content</span></div>'">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(0, 212, 255, 0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; transition: all 0.3s ease;">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div style="padding: 1.5rem;">
                            <h4 style="color: var(--gold); margin-bottom: 0.5rem;">${video.title}</h4>
                            <p style="color: rgba(255,255,255,0.8); margin-bottom: 1rem; font-size: 0.9rem;">${video.description}</p>
                            <span style="display: inline-block; background: var(--gradient-secondary); color: var(--dark); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${video.duration}</span>
                        </div>
                    `;

            videoCard.addEventListener('click', () => {
                window.open(video.url, '_blank');
            });

            videosContainer.appendChild(videoCard);
        });
    } else {
        videosContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; padding: 2rem; color: rgba(255,255,255,0.8);">Premium video content coming soon...</p>';
    }

    // Clear and populate tips
    const tipsContainer = document.getElementById('resource-tips');
    tipsContainer.innerHTML = '';

    resource.tips.forEach((tip, index) => {
        const tipItem = document.createElement('li');
        tipItem.innerHTML = `
                    <div style="display: flex; align-items: flex-start; gap: 15px; padding: 1rem 0; border-bottom: 1px solid rgba(0, 212, 255, 0.1);">
                        <div style="width: 30px; height: 30px; background: var(--gradient-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--dark); font-weight: bold; font-size: 0.8rem; flex-shrink: 0;">${index + 1}</div>
                        <div style="color: rgba(255,255,255,0.9); flex: 1;">${tip}</div>
                    </div>
                `;
        tipsContainer.appendChild(tipItem);
    });

    // Show resource details section and hide education section
    document.getElementById('education').style.display = 'none';
    document.getElementById('resource-details').style.display = 'block';

    // Scroll to resource details
    scrollToSection('resource-details');
}

// Hide resource details - Support browser history back
function hideResource(triggerHistoryBack = true) {
    if (triggerHistoryBack && window.history.state && window.history.state.view === 'resource') {
        window.history.back();
        return;
    }

    document.getElementById('resource-details').style.display = 'none';
    document.getElementById('education').style.display = 'block';

    // Clear the URL hash if it was a resource link
    if (window.location.hash.startsWith('#resource-')) {
        history.pushState(null, '', window.location.pathname + window.location.search);
    }

    scrollToSection('education');
}

// Listen for popstate history movements
window.addEventListener('popstate', function (event) {
    if (event.state && event.state.view === 'resource') {
        showResource(event.state.resourceId, false);
    } else {
        hideResource(false);
    }
});

// Enhanced contact form with backend routing and encryption simulation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';

        const nameElem = document.getElementById('name');
        const emailElem = document.getElementById('email');
        const messageElem = document.getElementById('message');

        const name = nameElem ? nameElem.value : '';
        const email = emailElem ? emailElem.value : '';
        const message = messageElem ? messageElem.value : '';

        // Encryption simulation
        submitBtn.innerHTML = '<i class="fas fa-lock fa-spin"></i> Encrypting...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-shield-alt fa-spin"></i> Transmitting...';

            // Fetch POST to backend
            fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
                .then(res => res.json())
                .then(data => {
                    submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Secured & Sent!';
                    submitBtn.style.background = 'var(--gradient-secondary)';
                    submitBtn.style.color = 'var(--dark)';

                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.color = '';
                        submitBtn.disabled = false;
                        document.getElementById('contactForm').reset();

                        // Show success notification
                        showNotification('Message encrypted and transmitted securely!', 'success');
                    }, 2000);
                })
                .catch(err => {
                    console.error("Message send failed:", err);
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Transmission Failed';
                    submitBtn.style.background = 'var(--gradient-accent)';
                    submitBtn.style.color = 'white';

                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.color = '';
                        submitBtn.disabled = false;
                        showNotification('Failed to send encrypted message. Server is offline.', 'error');
                    }, 2000);
                });
        }, 1000);
    });
}

// Support button functionality
function contactSupport(type) {
    let message = '';
    let title = '';

    switch (type) {
        case 'helpdesk':
            title = '24/7 Help Desk';
            message = 'Our support team is available 24/7 to assist with any cybersecurity concerns.Please call +91 (8237624964) or email yadavkishan50501@gmail.com';
            break;
        case 'knowledge':
            title = 'Knowledge Base';
            message = 'Access our comprehensive knowledge base with tutorials, guides, and FAQs at Whatsapp or telegram (scroll down and get direct link)';
            break;
        case 'forum':
            title = 'Community Forum';
            message = 'Join our community of cybersecurity professionals at "Telegram" to share knowledge and solutions.';
            break;
    }

    // Show notification
    showNotification(title, message);
}

// Enhanced notification system
function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--gradient-card);
                backdrop-filter: blur(20px);
                border: 1px solid var(--secondary);
                color: white;
                padding: 1.5rem;
                border-radius: 15px;
                box-shadow: var(--shadow-glow);
                z-index: 10000;
                transform: translateX(400px);
                transition: all 0.3s ease;
                max-width: 350px;
            `;

    notification.innerHTML = `
                <h4 style="color: var(--gold); margin-bottom: 0.5rem;">${title}</h4>
                <p style="color: rgba(255,255,255,0.8); margin-bottom: 1rem;">${message}</p>
                <button class="btn btn-primary" style="width: 100%;" onclick="this.parentElement.remove()">
                    <i class="fas fa-check"></i> OK
                </button>
            `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        // Only slide out and remove if the element is still in the document
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Enhanced navbar scroll effect with glow
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 100;

    if (scrolled) {
        navbar.style.background = 'rgba(10, 10, 35, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 35, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Password Strength Checker with Email/Phone
document.addEventListener('DOMContentLoaded', function () {
    const emailPhoneInput = document.getElementById('email-phone-input');
    const passwordInput = document.getElementById('password-input');
    const togglePassword = document.getElementById('togglePassword');
    const passwordStrengthBar = document.getElementById('password-strength-bar');
    const passwordStrengthText = document.getElementById('password-strength-text');
    const securityStatus = document.getElementById('securityStatus');
    const checkSecurityBtn = document.getElementById('checkSecurityBtn');

    // Toggle password visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }

    // Check password strength
    if (passwordInput && passwordStrengthBar && passwordStrengthText) {
        passwordInput.addEventListener('input', function () {
            const password = this.value;
            const strength = calculatePasswordStrength(password);

            // Update strength bar
            passwordStrengthBar.style.width = strength.percentage + '%';
            passwordStrengthBar.style.background = strength.color;

            // Update strength text
            passwordStrengthText.textContent = strength.text;
            passwordStrengthText.style.color = strength.color;
        });
    }

    // Check security when button clicked
    if (checkSecurityBtn && emailPhoneInput && passwordInput) {
        checkSecurityBtn.addEventListener('click', function () {
            const emailPhone = emailPhoneInput.value.trim();
            const password = passwordInput.value;

            if (!emailPhone || !password) {
                updateSecurityStatus('Please enter both email/phone and password', 'warning');
                return;
            }

            // Simulate security check
            const isSecure = checkAccountSecurity(emailPhone, password);

            if (isSecure) {
                updateSecurityStatus('Account security is good!', 'success');
            } else {
                updateSecurityStatus('Security recommendations available', 'warning');
            }
        });
    }

    function calculatePasswordStrength(password) {
        let score = 0;

        if (!password) {
            return {
                level: 'empty',
                text: 'Password not entered',
                percentage: 0,
                color: 'var(--secondary)'
            };
        }

        // Length check
        if (password.length >= 12) score += 25;
        else if (password.length >= 8) score += 15;
        else if (password.length >= 6) score += 5;

        // Character variety
        if (/[a-z]/.test(password)) score += 10;
        if (/[A-Z]/.test(password)) score += 10;
        if (/[0-9]/.test(password)) score += 10;
        if (/[^a-zA-Z0-9]/.test(password)) score += 15;

        // Pattern checks
        if (!/(.)\1{2,}/.test(password)) score += 10;
        if (!/(123|abc|password|qwerty)/i.test(password)) score += 10;

        let level, text, color;
        if (score >= 80) {
            level = 'strong';
            text = 'Strong Password';
            color = '#00ff00';
        } else if (score >= 50) {
            level = 'medium';
            text = 'Medium Password';
            color = 'var(--gold)';
        } else {
            level = 'weak';
            text = 'Weak Password';
            color = 'var(--accent)';
        }

        return {
            level: level,
            text: text,
            percentage: Math.min(score, 100),
            color: color
        };
    }

    function checkAccountSecurity(emailPhone, password) {
        // Simple validation - in real app, this would be more complex
        const isEmail = emailPhone.includes('@');
        const isPhone = /^\d+$/.test(emailPhone.replace(/\D/g, ''));

        if (!isEmail && !isPhone) {
            updateSecurityStatus('Please enter valid email or phone number', 'error');
            return false;
        }

        const strength = calculatePasswordStrength(password);
        return strength.level === 'strong' || strength.level === 'medium';
    }

    function updateSecurityStatus(message, type) {
        const icon = securityStatus.querySelector('i');
        const text = securityStatus.querySelector('span');

        text.textContent = message;

        // Update colors based on type
        switch (type) {
            case 'success':
                securityStatus.style.background = 'rgba(0, 255, 0, 0.1)';
                securityStatus.style.borderColor = 'rgba(0, 255, 0, 0.3)';
                icon.style.color = '#00ff00';
                break;
            case 'warning':
                securityStatus.style.background = 'rgba(255, 215, 0, 0.1)';
                securityStatus.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                icon.style.color = 'var(--gold)';
                break;
            case 'error':
                securityStatus.style.background = 'rgba(255, 0, 110, 0.1)';
                securityStatus.style.borderColor = 'rgba(255, 0, 110, 0.3)';
                icon.style.color = 'var(--accent)';
                break;
            default:
                securityStatus.style.background = 'rgba(0, 212, 255, 0.1)';
                securityStatus.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                icon.style.color = 'var(--secondary)';
        }
    }
});


// Professional click sound effect
function playClickSound() {
    // Create a subtle click sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Add click sound to all buttons
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button, .btn, .nav-btn, .survey-card, .resource-card');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (!this.disabled) {
                playClickSound();
            }
        });
    });
});

// Global chart instances
let awarenessChart, passwordChart, knowledgeChart, ageChart, usageChart;

// Initialize and update charts from dynamic stats
function initCharts(stats) {
    // 1. Cybersecurity Awareness Level Chart
    const awarenessCtx = document.getElementById('awarenessChart').getContext('2d');
    if (awarenessChart) {
        awarenessChart.data.datasets[0].data = stats.awarenessAverages;
        awarenessChart.update();
    } else {
        awarenessChart = new Chart(awarenessCtx, {
            type: 'radar',
            data: {
                labels: ['Password Security', 'Phishing Awareness', 'Software Updates', 'Data Backup', 'Social Media Privacy'],
                datasets: [{
                    label: 'Current Awareness Level',
                    data: stats.awarenessAverages,
                    backgroundColor: 'rgba(0, 212, 255, 0.2)',
                    borderColor: 'rgba(0, 212, 255, 1)',
                    pointBackgroundColor: 'rgba(0, 212, 255, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 212, 255, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: 'white',
                            font: {
                                size: 12
                            }
                        },
                        ticks: {
                            color: 'white',
                            backdropColor: 'transparent'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    // 2. Password Security Chart
    const passwordCtx = document.getElementById('passwordChart').getContext('2d');
    const passwordData = [stats.passwords.strong, stats.passwords.weak, stats.passwords.medium, stats.passwords.no2fa];
    if (passwordChart) {
        passwordChart.data.datasets[0].data = passwordData;
        passwordChart.update();
    } else {
        passwordChart = new Chart(passwordCtx, {
            type: 'pie',
            data: {
                labels: ['Strong Passwords', 'Weak Passwords', 'Reused Passwords', 'No 2FA'],
                datasets: [{
                    data: passwordData,
                    backgroundColor: [
                        'rgba(0, 212, 255, 0.8)',
                        'rgba(255, 0, 110, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(99, 102, 241, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 212, 255, 1)',
                        'rgba(255, 0, 110, 1)',
                        'rgba(255, 215, 0, 1)',
                        'rgba(99, 102, 241, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'white',
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // 3. Knowledge by Age Group Chart
    const knowledgeCtx = document.getElementById('knowledgeChart').getContext('2d');
    const basicData = [stats.knowledgeByAge.below18.basic, stats.knowledgeByAge.age18_30.basic, stats.knowledgeByAge.age30_45.basic];
    const advancedData = [stats.knowledgeByAge.below18.advanced, stats.knowledgeByAge.age18_30.advanced, stats.knowledgeByAge.age30_45.advanced];
    if (knowledgeChart) {
        knowledgeChart.data.datasets[0].data = basicData;
        knowledgeChart.data.datasets[1].data = advancedData;
        knowledgeChart.update();
    } else {
        knowledgeChart = new Chart(knowledgeCtx, {
            type: 'bar',
            data: {
                labels: ['Below 18', '18-30', '30-45'],
                datasets: [
                    {
                        label: 'Basic Knowledge',
                        data: basicData,
                        backgroundColor: 'rgba(0, 212, 255, 0.8)',
                        borderColor: 'rgba(0, 212, 255, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Advanced Knowledge',
                        data: advancedData,
                        backgroundColor: 'rgba(255, 215, 0, 0.8)',
                        borderColor: 'rgba(255, 215, 0, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: 'white',
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }

    // 4. Age Distribution Chart
    const ageCtx = document.getElementById('ageChart').getContext('2d');
    const ageData = [stats.ageDistribution.age18_30, stats.ageDistribution.below18, stats.ageDistribution.age30_45, stats.ageDistribution.ageAbove45];
    if (ageChart) {
        ageChart.data.datasets[0].data = ageData;
        ageChart.update();
    } else {
        ageChart = new Chart(ageCtx, {
            type: 'doughnut',
            data: {
                labels: ['18-30', 'Below 18', '30-45', '45+'],
                datasets: [{
                    data: ageData,
                    backgroundColor: [
                        'rgba(0, 212, 255, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(255, 0, 110, 0.8)',
                        'rgba(99, 102, 241, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 212, 255, 1)',
                        'rgba(255, 215, 0, 1)',
                        'rgba(255, 0, 110, 1)',
                        'rgba(99, 102, 241, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'white',
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // 5. Internet Usage Chart
    const usageCtx = document.getElementById('usageChart').getContext('2d');
    const usageData = [stats.internetUsage.hours5Plus, stats.internetUsage.hours3To5, stats.internetUsage.hours1To2, stats.internetUsage.rarely];
    if (usageChart) {
        usageChart.data.datasets[0].data = usageData;
        usageChart.update();
    } else {
        usageChart = new Chart(usageCtx, {
            type: 'bar',
            data: {
                labels: ['5+ hours', '3-5 hours', '1-2 hours', 'Rarely'],
                datasets: [{
                    label: 'Percentage of Users',
                    data: usageData,
                    backgroundColor: [
                        'rgba(0, 212, 255, 0.8)',
                        'rgba(255, 0, 110, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(99, 102, 241, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 212, 255, 1)',
                        'rgba(255, 0, 110, 1)',
                        'rgba(255, 215, 0, 1)',
                        'rgba(99, 102, 241, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: 'white',
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Fetch statistics from backend and update dashboard charts
function fetchStatsAndUpdateCharts() {
    fetch(`${API_BASE}/api/stats`)
        .then(res => res.json())
        .then(stats => {
            initCharts(stats);

            // Also update the total participant counter card on research section dynamically!
            const participantCard = document.querySelector('.stats-grid .stat-card:first-child');
            if (participantCard && stats.totalParticipants) {
                const numElem = participantCard.querySelector('.stat-number');
                if (numElem) numElem.textContent = stats.totalParticipants;
            }
        })
        .catch(err => {
            console.error("Failed to load live stats from backend. Using static fallback data.", err);
            // Use local static stats fallback
            const staticFallback = {
                awarenessAverages: [68, 55, 72, 45, 60],
                passwords: { strong: 56, weak: 31, medium: 13, no2fa: 45 },
                knowledgeByAge: {
                    below18: { basic: 45, advanced: 25 },
                    age18_30: { basic: 68, advanced: 42 },
                    age30_45: { basic: 72, advanced: 58 }
                },
                ageDistribution: { age18_30: 69, below18: 25, age30_45: 6, ageAbove45: 0 },
                internetUsage: { hours5Plus: 50, hours3To5: 26, hours1To2: 18, rarely: 6 }
            };
            initCharts(staticFallback);
        });
}

// Global variables for live news updates
let alertedThreats = new Set();
let isFirstNewsLoad = true;

// Play warning buzzer using Web Audio API
function playWarningBuzzer() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
        oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
        oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.3);

        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
        console.log("Audio warning alert blocked by browser autoplay policy.");
    }
}

// Fetch latest cybersecurity incident logs from backend proxy
function loadIncidentsFeed() {
    const listWrapper = document.querySelector('.incident-list');
    if (!listWrapper) return;

    // Show loading placeholder ONLY on the very first load
    if (isFirstNewsLoad || listWrapper.children.length === 0) {
        listWrapper.innerHTML = `
                    <li style="text-align:center; padding: 2rem; color: rgba(255,255,255,0.6);">
                        <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--secondary); margin-bottom: 0.5rem;"></i>
                        <p>Securing proxy & syncing threat logs...</p>
                    </li>
                `;
    }

    fetch(`${API_BASE}/api/news`)
        .then(res => res.json())
        .then(incidents => {
            listWrapper.innerHTML = '';
            let hasNewCriticalThreat = false;
            let newThreatTitle = '';

            incidents.forEach(inc => {
                const item = document.createElement('li');
                item.className = inc.isCritical ? 'incident-item critical-incident' : 'incident-item';

                const badgeHTML = inc.isCritical
                    ? `<span class="badge badge-critical"><i class="fas fa-exclamation-triangle"></i> CRITICAL</span>`
                    : `<span class="badge badge-info">INFO</span>`;

                item.innerHTML = `
                            <div class="incident-time" style="display: flex; flex-direction: column; gap: 6px; align-items: flex-start;">
                                <span>${inc.timeString}</span>
                                ${badgeHTML}
                            </div>
                            <div class="incident-details">
                                <div class="incident-type" style="color: ${inc.isCritical ? 'var(--accent)' : 'var(--gold)'}; font-weight: bold;">${inc.title}</div>
                                <div class="incident-description">${inc.description}</div>
                                <a href="${inc.url}" target="_blank" style="color: var(--secondary); font-size: 0.8rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; margin-top: 5px;">
                                    <i class="fas fa-external-link-alt"></i> Threat Source
                                </a>
                            </div>
                        `;
                listWrapper.appendChild(item);

                // If the incident is critical, check if we should alert
                if (inc.isCritical) {
                    if (!alertedThreats.has(inc.title)) {
                        alertedThreats.add(inc.title);
                        if (!isFirstNewsLoad) {
                            hasNewCriticalThreat = true;
                            newThreatTitle = inc.title;
                        }
                    }
                }
            });

            // Trigger notification alert if a new critical threat was found in polling updates
            if (hasNewCriticalThreat) {
                showNotification('🚨 CRITICAL CYBER THREAT DETECTED!', newThreatTitle, 'error');
                playWarningBuzzer();
            }

            isFirstNewsLoad = false;
        })
        .catch(err => {
            console.error("Failed to load incidents:", err);
            if (listWrapper.children.length === 0) {
                listWrapper.innerHTML = '<li style="text-align:center; padding: 1.5rem; color: var(--accent);">Failed to retrieve intelligence log. Server is offline.</li>';
            }
        });
}

// Hardware Gadgets Descriptions Details data
const gadgetsData = {
    yubikey: {
        title: "Hardware Security Key (YubiKey)",
        icon: "fa-key",
        description: `
                    <p><strong>How it protects you:</strong></p>
                    <p>Hardware Security Keys provide the gold standard for Two-Factor Authentication (2FA). Unlike SMS or app-based codes which can be intercepted or phished, a physical key uses public-key cryptography (FIDO2/WebAuthn) to authenticate you directly with the service (like Google, GitHub, or your bank).</p>
                    <br>
                    <p><strong>Key Security Benefits:</strong></p>
                    <ul style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; list-style-type: none;">
                        <li>🛡️ <strong>Phishing Immunity:</strong> Even if you enter your password on a fake site, the security key will refuse to authenticate because the website URL does not match the registered domain.</li>
                        <li>🔑 <strong>Physical Touch Required:</strong> Authentication requires a physical touch on the key, meaning a remote hacker cannot gain access without physically possessing your key.</li>
                        <li>📦 <strong>Durable & Portable:</strong> Fits on your keychain, water-resistant, and battery-free.</li>
                    </ul>
                `
    },
    'encrypted-usb': {
        title: "Hardware-Encrypted USB Drive",
        icon: "fa-usb",
        description: `
                    <p><strong>How it protects you:</strong></p>
                    <p>Standard USB drives can be easily lost or stolen, exposing all files. Hardware-encrypted drives include a physical keypad on the drive casing. The drive remains completely locked and unreadable until the correct PIN is entered directly on the keypad.</p>
                    <br>
                    <p><strong>Key Security Benefits:</strong></p>
                    <ul style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; list-style-type: none;">
                        <li>🔒 <strong>Hardware-Based Encryption:</strong> Data is encrypted using AES 256-bit protocols directly on the internal hardware controller. It cannot be bypassed by software.</li>
                        <li>💣 <strong>Brute Force Protection:</strong> If an incorrect PIN is entered multiple times (usually 10), the drive executes a self-destruct sequence, erasing all stored encryption keys and data.</li>
                        <li>🖥️ <strong>OS Independent:</strong> Works on Windows, Mac, Linux, and Android without requiring additional software drivers.</li>
                    </ul>
                `
    },
    'vpn-router': {
        title: "Hardware Firewall / VPN Router",
        icon: "fa-network-wired",
        description: `
                    <p><strong>How it protects you:</strong></p>
                    <p>Smart home IoT devices (like security cameras, smart TVs, and refrigerators) rarely support VPN apps. A dedicated hardware firewall router encrypts and filters all incoming and outgoing internet traffic at the router level.</p>
                    <br>
                    <p><strong>Key Security Benefits:</strong></p>
                    <ul style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; list-style-type: none;">
                        <li>🌐 <strong>Network-Wide Encryption:</strong> Every device connected to your Wi-Fi is automatically routed through a secure VPN tunnel, hiding your IP address and physical location.</li>
                        <li>🚫 <strong>Ad & Tracker Blocking:</strong> Blocks malware domains, intrusive advertisements, and telemetry tracking at the DNS level before they reach your screens.</li>
                        <li>🛡️ <strong>Intrusion Prevention:</strong> Built-in firewalls detect scanning attempts and exploit payloads targeted at local devices.</li>
                    </ul>
                `
    },
    'usb-blocker': {
        title: "USB Data Blocker (USB Condom)",
        icon: "fa-plug",
        description: `
                    <p><strong>How it protects you:</strong></p>
                    <p>Public USB charging stations (at airports, hotels, and cafes) can be modified by cybercriminals to download data from your device or install malware while charging—a threat known as <strong>Juice Jacking</strong>. A USB Data Blocker physically disconnects the data transfer wires inside the USB plug.</p>
                    <br>
                    <p><strong>Key Security Benefits:</strong></p>
                    <ul style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; list-style-type: none;">
                        <li>🔋 <strong>Power-Only Charging:</strong> Allows power charging to flow through (up to fast charging speeds) while completely blocking data lines.</li>
                        <li>🚫 <strong>Juice Jacking Protection:</strong> Rest assured that public charging stands cannot access your photos, credentials, or inject Trojan applications.</li>
                        <li>💼 <strong>Ultra-Compact:</strong> A tiny adapter that fits in your pocket or wallet.</li>
                    </ul>
                `
    },
    'webcam-cover': {
        title: "Webcam Cover & Mic Blocker",
        icon: "fa-eye-slash",
        description: `
                    <p><strong>How it protects you:</strong></p>
                    <p>Remote Access Trojans (RATs) and malware can secretly turn on your laptop's camera and record audio without triggering the indicator LED. Physical webcam covers and mic blockers provide hardware-level assurance against spying.</p>
                    <br>
                    <p><strong>Key Security Benefits:</strong></p>
                    <ul style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; list-style-type: none;">
                        <li>👁️ <strong>Webcam Blocker:</strong> Physical slide webcam covers let you selectively block the camera lens when not in use.</li>
                        <li>🎤 <strong>Mic Blocker:</strong> A mic blocker uses a dummy 3.5mm headphone jack plug that fools your device into thinking an external microphone is plugged in, routing ambient recording to a silent, non-existent audio input.</li>
                        <li>🔒 <strong>Guaranteed Privacy:</strong> Guarantees privacy even if your device is fully compromised by remote malware.</li>
                    </ul>
                `
    },
    'privacy-screen': {
        title: "Privacy Screen Filter",
        icon: "fa-desktop",
        description: `
                    <p><strong>How it protects you:</strong></p>
                    <p>Shoulder surfing—the act of looking over someone's screen to steal sensitive logins, bank numbers, or confidential documents—is a major threat in public areas like trains and cafes. A privacy screen filter narrows the viewing angle of your display.</p>
                    <br>
                    <p><strong>Key Security Benefits:</strong></p>
                    <ul style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; list-style-type: none;">
                        <li>👥 <strong>Narrow Viewing Angle:</strong> The screen is perfectly clear when viewed directly from the front, but appears completely black or gold to anyone looking from the sides (beyond 30 degrees).</li>
                        <li>🛡️ <strong>Glare & Blue Light Reduction:</strong> Offers anti-glare filters and reduces eye strain from harmful blue light.</li>
                        <li>🔨 <strong>Screen Protection:</strong> Acts as a physical scratch guard for your screen.</li>
                    </ul>
                `
    }
};

// Modal triggers & event handlers

// 1. Quick Survey Modal Logic
let currentStep = 1;
const totalSteps = 5;
const surveyModal = document.getElementById('surveyModal');
const surveyForm = document.getElementById('quickSurveyForm');

window.openQuickSurvey = function () {
    currentStep = 1;
    surveyForm.reset();
    updateSurveySteps();
    surveyModal.classList.add('active');
    playClickSound();
}

window.closeQuickSurvey = function () {
    surveyModal.classList.remove('active');
}

const closeSurveyModalBtn = document.getElementById('closeSurveyModal');
if (closeSurveyModalBtn) closeSurveyModalBtn.addEventListener('click', closeQuickSurvey);

function updateSurveySteps() {
    document.querySelectorAll('.survey-step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step'), 10) === currentStep) {
            step.classList.add('active');
        }
    });

    // Manage buttons visibility
    const prevBtnElem = document.getElementById('prevStepBtn');
    const nextBtnElem = document.getElementById('nextStepBtn');
    const submitBtnElem = document.getElementById('submitSurveyBtn');

    if (prevBtnElem) prevBtnElem.style.display = currentStep > 1 ? 'inline-block' : 'none';
    if (currentStep === totalSteps) {
        if (nextBtnElem) nextBtnElem.style.display = 'none';
        if (submitBtnElem) submitBtnElem.style.display = 'inline-block';
    } else {
        if (nextBtnElem) nextBtnElem.style.display = 'inline-block';
        if (submitBtnElem) submitBtnElem.style.display = 'none';
    }
}

const nextStepBtnElem = document.getElementById('nextStepBtn');
if (nextStepBtnElem) {
    nextStepBtnElem.addEventListener('click', () => {
        // Check if current step radio is filled
        const activeStep = document.querySelector(`.survey-step[data-step="${currentStep}"]`);
        if (activeStep) {
            const inputs = activeStep.querySelectorAll('input');
            let answered = false;
            inputs.forEach(input => {
                if (input.checked) answered = true;
            });

            if (!answered) {
                showNotification('Required Option', 'Please select an option to proceed', 'warning');
                return;
            }
        }

        if (currentStep < totalSteps) {
            currentStep++;
            updateSurveySteps();
            playClickSound();
        }
    });
}

const prevStepBtnElem = document.getElementById('prevStepBtn');
if (prevStepBtnElem) {
    prevStepBtnElem.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateSurveySteps();
            playClickSound();
        }
    });
}

if (surveyForm) {
    surveyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('submitSurveyBtn');
        const origText = submitBtn ? submitBtn.innerHTML : 'Submit';

        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
        }

        // Gather values
        const formData = new FormData(surveyForm);
        const ageGroup = formData.get('ageGroup');
        const usageHours = formData.get('usageHours');
        const passwordStrength = formData.get('passwordStrength');
        const mfaUse = formData.get('mfaUse');
        const generalRating = formData.get('generalRating');

        fetch(`${API_BASE}/api/survey`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ageGroup, usageHours, passwordStrength, mfaUse, generalRating })
        })
            .then(res => res.json())
            .then(data => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
                setTimeout(() => {
                    submitBtn.innerHTML = origText;
                    submitBtn.disabled = false;
                    closeQuickSurvey();
                    showNotification('Survey Complete', 'Your assessment has been submitted. Dashboard analytics updated!', 'success');
                    fetchStatsAndUpdateCharts(); // Fetch and re-draw charts
                }, 1500);
            })
            .catch(err => {
                console.error("Survey submission failed:", err);
                submitBtn.innerHTML = 'Retry';
                submitBtn.disabled = false;
                showNotification('Submit Failed', 'Failed to transmit survey. Server is offline.', 'error');
            });
    });
}

// 2. Admin Inbox Modal Logic
const adminInboxModal = document.getElementById('adminInboxModal');
const adminAuthSection = document.getElementById('adminAuthSection');
const adminInboxContent = document.getElementById('adminInboxContent');
const adminPasswordInput = document.getElementById('adminPasswordInput');

window.openAdminInbox = function () {
    if (adminPasswordInput) adminPasswordInput.value = '';
    if (adminAuthSection) adminAuthSection.style.display = 'block';
    if (adminInboxContent) adminInboxContent.style.display = 'none';
    if (adminInboxModal) adminInboxModal.classList.add('active');
    playClickSound();
}

window.closeAdminInbox = function () {
    if (adminInboxModal) adminInboxModal.classList.remove('active');
}

const closeAdminModal = document.getElementById('closeAdminModal');
if (closeAdminModal) closeAdminModal.addEventListener('click', closeAdminInbox);

const authenticateAdminBtn = document.getElementById('authenticateAdminBtn');
if (authenticateAdminBtn) {
    authenticateAdminBtn.addEventListener('click', () => {
        const pass = adminPasswordInput ? adminPasswordInput.value : '';
        if (pass === 'Kishan@#2006') { // standard key
            playClickSound();
            if (adminAuthSection) adminAuthSection.style.display = 'none';
            if (adminInboxContent) adminInboxContent.style.display = 'block';
            loadAdminMessages();
        } else {
            showNotification('Auth Failed', 'Invalid decryption authorization key!', 'error');
        }
    });
}

const refreshMessagesBtn = document.getElementById('refreshMessagesBtn');
if (refreshMessagesBtn) refreshMessagesBtn.addEventListener('click', loadAdminMessages);

function loadAdminMessages() {
    const listWrapper = document.getElementById('messagesListWrapper');
    const counter = document.getElementById('messageCount');

    listWrapper.innerHTML = `
                <div style="text-align:center; padding: 2rem; color: rgba(255,255,255,0.6);">
                    <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--gold); margin-bottom: 0.5rem;"></i>
                    <p>Decrypting records database...</p>
                </div>
            `;

    fetch(`${API_BASE}/api/messages`)
        .then(res => res.json())
        .then(messages => {
            listWrapper.innerHTML = '';
            counter.textContent = `${messages.length} Message${messages.length !== 1 ? 's' : ''} Found`;

            if (messages.length === 0) {
                listWrapper.innerHTML = '<div style="text-align:center; padding:2rem; color:rgba(255,255,255,0.5);">No messages in secure buffer.</div>';
                return;
            }

            messages.forEach(msg => {
                const item = document.createElement('div');
                item.className = 'message-item';

                // Parse date nicely
                const date = new Date(msg.timestamp);
                const timeStr = date.toLocaleString();

                item.innerHTML = `
                            <div class="message-item-header">
                                <div class="message-sender-info">
                                    <h4>${msg.name}</h4>
                                    <span>${msg.email}</span>
                                </div>
                                <div class="message-item-time">${timeStr}</div>
                            </div>
                            <div class="message-item-body">${msg.message}</div>
                        `;
                listWrapper.appendChild(item);
            });
        })
        .catch(err => {
            console.error("Failed to load messages:", err);
            listWrapper.innerHTML = '<div style="text-align:center; padding:2rem; color:var(--accent);">Database offline. Failed to read logs.</div>';
        });
}

// 3. Gadgets Modal Logic
const gadgetModal = document.getElementById('gadgetModal');

window.showGadgetDetail = function (gadgetId) {
    const detail = gadgetsData[gadgetId];
    if (!detail) return;

    document.getElementById('gadgetModalTitle').textContent = detail.title;
    document.getElementById('gadgetModalIcon').innerHTML = `<i class="fas ${detail.icon}"></i>`;
    document.getElementById('gadgetModalContent').innerHTML = detail.description;

    gadgetModal.classList.add('active');
    playClickSound();
}

window.closeGadgetModal = function () {
    if (gadgetModal) gadgetModal.classList.remove('active');
}

const closeGadgetModalBtn = document.getElementById('closeGadgetModal');
if (closeGadgetModalBtn) closeGadgetModalBtn.addEventListener('click', closeGadgetModal);

// 4. Simulated Forum Modal Logic with Dynamic Thread Posting
const forumModal = document.getElementById('forumModal');
const forumThreadsWrapper = document.getElementById('forumThreadsWrapper');
const forumNewThreadTitle = document.getElementById('forumNewThreadTitle');
const forumPostBtn = document.getElementById('forumPostBtn');

window.openForumModal = function () {
    if (forumModal) forumModal.classList.add('active');
    playClickSound();
};

window.closeForumModal = function () {
    if (forumModal) forumModal.classList.remove('active');
};

const closeForumModalBtn = document.getElementById('closeForumModal');
if (closeForumModalBtn) closeForumModalBtn.addEventListener('click', closeForumModal);

if (forumPostBtn) {
    forumPostBtn.addEventListener('click', () => {
        const titleText = forumNewThreadTitle.value.trim();
        if (!titleText) {
            showNotification('⚠️ Thread Empty', 'Please type a valid question/title.', 'warning');
            return;
        }
        playClickSound();

        // Dynamically build and prepend new thread card
        const thread = document.createElement('div');
        thread.className = 'forum-thread';
        thread.style.cssText = 'background:rgba(0, 212, 255, 0.05); border:1px solid var(--secondary); border-radius:8px; padding:1rem; transition:all 0.3s ease; margin-bottom: 10px;';
        thread.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                        <span style="color:var(--gold); font-weight:600; font-size:0.95rem;">${titleText}</span>
                        <span style="font-size:0.75rem; color:rgba(0,212,255,0.7); font-weight:bold;"><i class="fas fa-bullhorn"></i> New Thread</span>
                    </div>
                    <p style="font-size:0.85rem; color:rgba(255,255,255,0.85); margin-bottom:0.8rem;">
                        Query posted by guest user. Awaiting community responses.
                    </p>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem;">
                        <span style="color:var(--secondary);"><i class="fas fa-user-shield"></i> guest_security_user</span>
                        <span style="color:var(--accent); font-weight:bold;"><i class="fas fa-clock"></i> Just now</span>
                    </div>
                `;

        if (forumThreadsWrapper) {
            forumThreadsWrapper.insertBefore(thread, forumThreadsWrapper.firstChild);
            forumThreadsWrapper.scrollTop = 0;
        }

        forumNewThreadTitle.value = '';
        showNotification('✅ Thread Posted', 'Your discussion query has been published to the community forum.', 'success');
    });
}

// 5. Help Desk AI Assistant Chat Controller
const helpDeskModal = document.getElementById('helpDeskModal');
const helpDeskChatLog = document.getElementById('helpDeskChatLog');
const helpDeskChatInput = document.getElementById('helpDeskChatInput');
const helpDeskSendBtn = document.getElementById('helpDeskSendBtn');
const closeHelpDeskModalBtn = document.getElementById('closeHelpDeskModal');

window.openHelpDesk = function () {
    if (helpDeskModal) helpDeskModal.classList.add('active');
    playClickSound();
};

window.closeHelpDesk = function () {
    if (helpDeskModal) helpDeskModal.classList.remove('active');
};

if (closeHelpDeskModalBtn) closeHelpDeskModalBtn.addEventListener('click', closeHelpDesk);

function handleHelpDeskSend() {
    const query = helpDeskChatInput.value.trim();
    if (!query) return;

    playClickSound();
    helpDeskChatInput.value = '';

    // 1. Append User Bubble
    const userMsg = document.createElement('div');
    userMsg.style.cssText = 'align-self: flex-end; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.2); padding: 8px 12px; border-radius: 12px 12px 0 12px; max-width: 80%; font-size: 0.9rem; line-height: 1.4; color: white;';
    userMsg.innerHTML = `
                <span style="color: var(--gold); font-weight: bold; font-size: 0.75rem; display: block; margin-bottom: 2px;">User (You)</span>
                ${query}
            `;
    helpDeskChatLog.appendChild(userMsg);
    helpDeskChatLog.scrollTop = helpDeskChatLog.scrollHeight;

    // 2. Generate Bot response based on input
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.style.cssText = 'align-self: flex-start; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.2); padding: 8px 12px; border-radius: 12px 12px 12px 0; max-width: 80%; font-size: 0.9rem; line-height: 1.4;';

        const lower = query.toLowerCase();
        let reply = '';
        if (lower.includes('phishing')) {
            reply = '🚨 **Phishing Protection:** Always verify the sender\'s full email address and check SPF/DMARC headers. Avoid clicking links to login pages directly; enter URLs manually in a browser instead.';
        } else if (lower.includes('password')) {
            reply = '🔑 **Password Security:** Use passphrases of at least 12-16 characters. Mix letters, symbols, and numbers. Always run a dedicated password manager and avoid reusing credentials across sites.';
        } else if (lower.includes('mfa') || lower.includes('2fa') || lower.includes('authentication')) {
            reply = '🛡️ **Multi-Factor Auth:** Enable MFA on all portals. Prefer hardware security keys (like YubiKey) or app codes (Authenticator) over SMS, which is vulnerable to SIM-swap attacks.';
        } else if (lower.includes('otp')) {
            reply = '⚠️ **OTP Warning:** Never share your One-Time Password with anyone, including bank employees or support agents. Standard companies will NEVER call or text asking for your OTP code.';
        } else if (lower.includes('firewall') || lower.includes('router') || lower.includes('vpn')) {
            reply = '🌐 **Network Protection:** Harden your router settings, update its firmware, disable Universal Plug and Play (UPnP), and connect over high-grade VPN protocols when using public Wi-Fi.';
        } else {
            reply = '🤖 **Incident Triage:** I\'ve logged your security concern. If this is an active attack, please contact our Command Hotline immediately at +91(8237624964).';
        }

        botMsg.innerHTML = `
                    <span style="color: var(--secondary); font-weight: bold; font-size: 0.75rem; display: block; margin-bottom: 2px;">Support Agent (AI)</span>
                    ${reply}
                `;
        helpDeskChatLog.appendChild(botMsg);
        helpDeskChatLog.scrollTop = helpDeskChatLog.scrollHeight;

        // Sound a subtle notification beep
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.25);
        } catch (e) { }

    }, 750);
}

if (helpDeskSendBtn) helpDeskSendBtn.addEventListener('click', handleHelpDeskSend);
if (helpDeskChatInput) {
    helpDeskChatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleHelpDeskSend();
    });
}

// 6. Knowledge Base Guides Finder Search and Populate Controller
const guidesModal = document.getElementById('guidesModal');
const guidesSearchInput = document.getElementById('guidesSearchInput');
const guidesListContainer = document.getElementById('guidesListContainer');
const closeGuidesModalBtn = document.getElementById('closeGuidesModal');

window.openGuidesFinder = function () {
    if (guidesModal) guidesModal.classList.add('active');
    playClickSound();
    populateGuidesList('');
    if (guidesSearchInput) {
        guidesSearchInput.value = '';
        guidesSearchInput.focus();
    }
};

window.closeGuidesFinder = function () {
    if (guidesModal) guidesModal.classList.remove('active');
};

if (closeGuidesModalBtn) closeGuidesModalBtn.addEventListener('click', closeGuidesFinder);

function populateGuidesList(filterText = '') {
    if (!guidesListContainer) return;
    guidesListContainer.innerHTML = '';

    const query = filterText.toLowerCase().trim();
    let count = 0;

    for (const key in resources) {
        const res = resources[key];
        if (query && !res.title.toLowerCase().includes(query) && !res.description.toLowerCase().includes(query)) {
            continue;
        }

        count++;
        const card = document.createElement('div');
        card.style.cssText = 'background: rgba(255,255,255,0.03); border: 1px solid rgba(0,212,255,0.15); border-radius: 8px; padding: 1rem; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 15px;';
        card.innerHTML = `
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--gradient-secondary); display: flex; align-items: center; justify-content: center; color: var(--dark); flex-shrink: 0;">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <div style="flex: 1;">
                        <h4 style="color: var(--gold); margin: 0 0 3px 0; font-size: 0.95rem;">${res.title}</h4>
                        <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 0.8rem; line-height: 1.3;">${res.description}</p>
                    </div>
                    <div style="color: var(--secondary); font-size: 0.9rem;"><i class="fas fa-chevron-right"></i></div>
                `;

        card.addEventListener('mouseenter', () => {
            card.style.background = 'rgba(0, 212, 255, 0.05)';
            card.style.borderColor = 'var(--secondary)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255,255,255,0.03)';
            card.style.borderColor = 'rgba(0,212,255,0.15)';
        });

        card.addEventListener('click', () => {
            closeGuidesFinder();
            showResource(key, true);
        });

        guidesListContainer.appendChild(card);
    }

    if (count === 0) {
        guidesListContainer.innerHTML = '<div style="text-align:center; padding:2rem; color:rgba(255,255,255,0.5);">No security guides match your query.</div>';
    }
}

if (guidesSearchInput) {
    guidesSearchInput.addEventListener('input', (e) => {
        populateGuidesList(e.target.value);
    });
}

// 7. Interactive Support Card Router Actions
window.contactSupport = function (type) {
    playClickSound();

    if (type === 'helpdesk') {
        openHelpDesk();
    }
    else if (type === 'knowledge') {
        openGuidesFinder();
    }
    else if (type === 'forum') {
        openForumModal();
    }
};

// Enhanced initialization function
function initializeDashboard() {
    // Create particles background
    createParticles();

    // Initialize charts with live stats from backend
    fetchStatsAndUpdateCharts();

    // Load live incident logs proxy and poll for updates every 60 seconds
    loadIncidentsFeed();
    setInterval(loadIncidentsFeed, 60000);

    // Deep-link check for resource hash on initial load
    const initialHash = window.location.hash;
    if (initialHash.startsWith('#resource-')) {
        const resourceId = initialHash.replace('#resource-', '');
        // Wait briefly for full DOM rendering before opening details
        setTimeout(() => showResource(resourceId, false), 150);
    }

    // Performance optimization - reduce particles on mobile
    if (window.innerWidth < 768) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index > 20) particle.remove();
        });
    }
}

// Run initialization safely checking document.readyState
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDashboard);
} else {
    initializeDashboard();
}

// Additional CSS animations for enhanced effects
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            .survey-card:hover .survey-icon,
            .resource-card:hover .resource-icon {
                animation: pulse 0.6s ease-in-out;
            }
            
            /* Enhanced glow effects */
            .btn:hover {
                box-shadow: 0 0 30px var(--secondary), 0 0 60px var(--secondary);
            }
            
            .logo:hover {
                text-shadow: 0 0 30px var(--secondary);
            }
            
            /* Smooth transitions for all interactive elements */
            * {
                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            }
        `;
document.head.appendChild(additionalStyles);
