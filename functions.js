// functions.js

/* =========================================
   1. EFECTO MÁQUINA DE ESCRIBIR (Multi-línea)
   ========================================= */
const textToType = "Sergio Rivera Anguita"; // Tu nombre completo
const typewriterElement = document.getElementById('typewriter');
let index = 0;

if (typewriterElement) {
    function type() {
        if (index < textToType.length) {
            typewriterElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidad de escritura (100ms por letra)
        }
    }
    // Retrasamos el inicio medio segundo al entrar a la web para que quede más natural
    setTimeout(type, 500);
}

/* =========================================
   2. CARRUSEL DE IMÁGENES (Para páginas de detalle)
   ========================================= */
const carousel = document.querySelector('.project-carousel');

if (carousel) {
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let current = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        current = (current === 0) ? images.length - 1 : current - 1;
        showImage(current);
    });

    nextBtn.addEventListener('click', () => {
        current = (current === images.length - 1) ? 0 : current + 1;
        showImage(current);
    });
}

/* =========================================
   3. ANIMACIONES DE SCROLL (Fade-in de las tarjetas)
   ========================================= */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // El elemento aparecerá cuando el 15% sea visible en pantalla
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Dejamos de observarlo para que la animación solo ocurra la primera vez
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionamos las tarjetas y títulos que queremos que aparezcan con fade-in
const hiddenElements = document.querySelectorAll('.project-card, .section-title, .about-section p');
hiddenElements.forEach((el) => observer.observe(el));