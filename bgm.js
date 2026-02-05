(() => {
    const audio = document.getElementById('bgm');
    const toggle = document.getElementById('bgm-toggle');

    if (!audio || !toggle) return;

    audio.volume = 0.35;
    audio.playbackRate = 1.0;
    let isPlaying = false;
    const STORAGE_KEY = 'bgm-enabled';
    const TIME_KEY = 'bgm-time';

    const updateUI = () => {
        toggle.textContent = isPlaying ? 'BGM ON' : 'BGM OFF';
        toggle.setAttribute('aria-pressed', String(isPlaying));
        toggle.classList.toggle('is-on', isPlaying);
    };

    const tryPlay = () => {
        audio.play()
            .then(() => {
                isPlaying = true;
                localStorage.setItem(STORAGE_KEY, '1');
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
            localStorage.setItem(STORAGE_KEY, '0');
            updateUI();
            return;
        }
        tryPlay();
    });

    const savedState = localStorage.getItem(STORAGE_KEY);
    const savedTime = Number(localStorage.getItem(TIME_KEY) || 0);

    if (!Number.isNaN(savedTime) && savedTime > 0) {
        audio.addEventListener('loadedmetadata', () => {
            audio.currentTime = Math.min(savedTime, Math.max(0, audio.duration - 0.5));
        }, { once: true });
    }

    if (savedState === '1') {
        tryPlay();
    } else {
        updateUI();
    }

    const saveTime = () => {
        if (isPlaying) {
            localStorage.setItem(TIME_KEY, String(audio.currentTime));
        }
    };

    window.addEventListener('pagehide', saveTime);
    window.addEventListener('beforeunload', saveTime);
})();
