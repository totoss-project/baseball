document.addEventListener('DOMContentLoaded', () => {
    const recordSpan = document.getElementById('record');
    const playerNameInput = document.getElementById('player-name');
    const saveRankBtn = document.getElementById('save-rank');

    const urlParams = new URLSearchParams(window.location.search);
    const time = urlParams.get('time');

    if (time) {
        const formattedTime = new Date(parseInt(time)).toISOString().substr(14, 5);
        recordSpan.textContent = formattedTime;
    }

    saveRankBtn.addEventListener('click', saveRank);

    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveRank();
        }
    });

    function saveRank() {
        const name = playerNameInput.value.trim();
        if (name && time) {
            const newRank = { name, time: parseInt(time) };
            let rankings = JSON.parse(localStorage.getItem('rankings')) || [];
            rankings.push(newRank);
            rankings.sort((a, b) => a.time - b.time);
            localStorage.setItem('rankings', JSON.stringify(rankings));
            
            // Disable form and show saved message
            playerNameInput.disabled = true;
            saveRankBtn.disabled = true;
            saveRankBtn.textContent = '저장됨';
        } else if (!name) {
            alert('이름을 입력해주세요!');
        }
    }
});
