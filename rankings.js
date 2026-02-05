document.addEventListener('DOMContentLoaded', () => {
    const top3ListDiv = document.getElementById('top3-list');
    const restListDiv = document.getElementById('rest-list');
    const noRankingsMessage = document.querySelector('.no-rankings');

    function loadAndDisplayRankings() {
        let rankings = JSON.parse(localStorage.getItem('rankings')) || [];

        if (rankings.length === 0) {
            noRankingsMessage.style.display = 'block';
            return;
        } else {
            noRankingsMessage.style.display = 'none';
        }

        // Sort rankings by time (ascending)
        rankings.sort((a, b) => a.time - b.time);

        const top3Rankings = rankings.slice(0, 3);
        const ranks4to10 = rankings.slice(3, 10);

        top3ListDiv.innerHTML = '';
        restListDiv.innerHTML = '';

        top3Rankings.forEach((rank, index) => {
            const itemDiv = document.createElement('div');
            const displayRank = index + 1;
            itemDiv.classList.add('ranking-item', `rank-${displayRank}`);

            const formattedTime = new Date(rank.time).toISOString().substr(14, 5);
            let medal = '';
            if (index === 0) {
                medal = '<span class="medal gold">🥇</span> ';
            } else if (index === 1) {
                medal = '<span class="medal silver">🥈</span> ';
            } else if (index === 2) {
                medal = '<span class="medal bronze">🥉</span> ';
            }
            itemDiv.innerHTML = `
                <span>${medal}${displayRank}. ${rank.name}</span>
                <span>${formattedTime}</span>
            `;
            top3ListDiv.appendChild(itemDiv);
        });

        ranks4to10.forEach((rank, index) => {
            const itemDiv = document.createElement('div');
            const displayRank = index + 4;
            itemDiv.classList.add('ranking-item', `rank-${displayRank}`);

            const formattedTime = new Date(rank.time).toISOString().substr(14, 5);
            itemDiv.innerHTML = `
                <span>${displayRank}. ${rank.name}</span>
                <span>${formattedTime}</span>
            `;
            restListDiv.appendChild(itemDiv);
        });
    }

    loadAndDisplayRankings();
});
