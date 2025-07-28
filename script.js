// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation fluide
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

// Gestion des clics sur les cartes d'ordres
const orderCards = document.querySelectorAll('.order-card');

orderCards.forEach(card => {
    card.addEventListener('click', function() {
        const order = this.getAttribute('data-order');
        
        // Animation de clic
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Redirection vers le site de l'ordre correspondant
        setTimeout(() => {
            redirectToOrder(order);
        }, 200);
    });
    
    // Effet de survol amélioré
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Fonction de redirection vers les sites d'ordres
function redirectToOrder(order) {
    const orderUrls = {
        'coleopteres': './coleopteres/index.html',
        'hemipteres': './hemipteres/index.html',
        'lepidopteres': './lepidopteres/index.html',
        'dipteres': './dipteres/index.html',
        'thysanopteres': './thysanopteres/index.html',
        'hymenopteres': './hymenopteres/index.html',
        'orthopteres': './orthopteres/index.html'
    };
    
    if (orderUrls[order]) {
        window.location.href = orderUrls[order];
    } else {
        console.error('URL non trouvée pour l\'ordre:', order);
    }
}

// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.order-card, .about-section').forEach(el => {
    observer.observe(el);
});

// Effet de parallaxe léger sur le fond
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Animation de chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animation séquentielle des cartes
    const cards = document.querySelectorAll('.order-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Préchargement des animations
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    // Effet de typing sur le titre principal (optionnel)
    const title = document.querySelector('.hero-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #f4d03f';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

