document.addEventListener('DOMContentLoaded', function() {
    
    const playButton = document.getElementById('play-music-btn');
    const themeSong = document.getElementById('theme-song');

    // Función para "desbloquear" el audio en móviles con el primer toque.
    // Esencial para que el botón de play funcione correctamente.
    function unlockAudio() {
        if (themeSong.paused) {
            themeSong.play().catch(() => {}); // Intenta reproducir y si falla no muestra error.
            themeSong.pause(); // Y pausa inmediatamente.
        }
        // Se elimina a sí misma para no ejecutarse más de una vez.
        document.body.removeEventListener('click', unlockAudio);
        document.body.removeEventListener('touchstart', unlockAudio);
    }
    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);

    // Lógica del botón de play/pausa
    playButton.addEventListener('click', function() {
        if (themeSong.paused) {
            themeSong.play();
        } else {
            themeSong.pause();
        }
    });

});
