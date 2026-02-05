(() => {
    const audio = document.getElementById('bgm');
    const toggle = document.getElementById('bgm-toggle');

    if (!audio || !toggle) return;

    audio.volume = 0.35;
    audio.playbackRate = 1.0;
    let isPlaying = false;

    const updateUI = () => {
        toggle.textContent = isPlaying ? 'BGM ON' : 'BGM OFF';
        toggle.setAttribute('aria-pressed', String(isPlaying));
        toggle.classList.toggle('is-on', isPlaying);
    };

    const tryPlay = () => {
        audio.play()
            .then(() => {
                isPlaying = true;
                updateUI();
            })
            .catch(() => {
                // Autoplay is likely blocked until a user gesture.
            });
    };

    const handleUserGesture = () => {
        if (!isPlaying) {
            tryPlay();
        }
        window.removeEventListener('pointerdown', handleUserGesture);
        window.removeEventListener('keydown', handleUserGesture);
    };

    window.addEventListener('pointerdown', handleUserGesture, { once: true });
    window.addEventListener('keydown', handleUserGesture, { once: true });

    toggle.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            updateUI();
            return;
        }
        tryPlay();
    });

    updateUI();
})();
