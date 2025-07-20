document.addEventListener('DOMContentLoaded', function() {
    
    const playButton = document.getElementById('play-music-btn');
    const themeSong = document.getElementById('theme-song');

    // Función para "desbloquear" el audio en móviles con el primer toque.
    function unlockAudio() {
        themeSong.play();
        themeSong.pause();
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
