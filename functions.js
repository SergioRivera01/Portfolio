// functions.js

// 1. Seleccionamos todos los elementos que queremos animar al hacer scroll
const hiddenElements = document.querySelectorAll('.project-card, .section-title, .about-section p');

// 2. Creamos el observador (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento entra en la pantalla del usuario
        if (entry.isIntersecting) {
            // Le añadimos la clase 'show' que activa la animación en CSS
            entry.target.classList.add('show');

            // Dejamos de observar el elemento para que la animación se ejecute solo la primera vez
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // El elemento aparecerá cuando al menos el 15% sea visible en pantalla
});

// 3. Le decimos al observador que vigile cada uno de los elementos seleccionados
hiddenElements.forEach((el) => observer.observe(el));

// =========================================
// LÓGICA DEL CARRUSEL (Solo para páginas de detalle)
// =========================================
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