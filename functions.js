// portfolio.js

// Carrusel de proyectos
document.querySelectorAll('.project-carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let current = 0;
    let interval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        current = index;
    }

    function startAutoSlide() {
        interval = setInterval(() => {
            current = (current + 1) % images.length;
            showImage(current);
        }, 6000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        current = (current - 1 + images.length) % images.length;
        showImage(current);
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        current = (current + 1) % images.length;
        showImage(current);
        startAutoSlide();
    });

    showImage(current);
    startAutoSlide();
});

// Scroll suave para navegación
document.querySelectorAll('nav a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
