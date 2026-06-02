// SLIDER HERO AUTOMATIQUE
let slides = document.querySelectorAll('.hero-slideshow .slide');
let index = 0;

function changeSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(changeSlide, 4000); // change toutes les 4 secondes

// Animation d’apparition des cartes au scroll
const animatedCards = document.querySelectorAll('.card');

function handleScroll() {
    const trigger = window.innerHeight * 0.9;

    animatedCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < trigger) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Formulaire (placeholder)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    });
}