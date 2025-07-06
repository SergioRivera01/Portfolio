document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('menu-audio');
    audio.volume = 0.1;
    audio.loop = true;
    const playBtn = document.getElementById('play-audio-btn');

    playBtn.textContent = '🔇 Sonido';

    // Función para actualizar el texto del botón según estado del audio
    function updateButton() {
        if (audio.paused || audio.muted) {
            playBtn.textContent = '🔇 Sonido';
        } else {
            playBtn.textContent = '🔈 Sonido';
        }
    }
    
    // Al cargar la página, sincronizamos el botón con el estado actual del audio
    document.addEventListener('DOMContentLoaded', () => {
        updateButton();
    });
    
    playBtn.addEventListener('click', () => {
        if (audio.paused || audio.muted) {
            audio.muted = false;
            audio.play().catch(() => alert('No se pudo reproducir el audio.'));
            
        } else {
            audio.muted = true;
            audio.pause();
        }
    });

    // Escuchar cambios en volumen y play/pause para actualizar el botón siempre
    audio.addEventListener('play', updateButton);
    audio.addEventListener('pause', updateButton);
    audio.addEventListener('volumechange', updateButton);
    
    // Intentar reproducir (algunos navegadores bloquean autoplay sin interacción)
    audio.play().catch(() => {
        console.log("Interacciona para activar audio");
    });

    // Botón empezar recarga portfolio.html
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Opcional: puedes hacer un fade out aquí antes de cargar la nueva página
            window.location.href = 'portfolio.html';
        });
    }
});
