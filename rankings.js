document.addEventListener('DOMContentLoaded', () => {
    const rankingListDiv = document.getElementById('ranking-list');
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

        // Display only the top 10 rankings
        const top10Rankings = rankings.slice(0, 10);

        rankingListDiv.innerHTML = ''; // Clear previous listings

        top10Rankings.forEach((rank, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('ranking-item');
            const formattedTime = new Date(rank.time).toISOString().substr(14, 5);
            itemDiv.innerHTML = `
                <span>${index + 1}. ${rank.name}</span>
                <span>${formattedTime}</span>
            `;
            rankingListDiv.appendChild(itemDiv);
        });
    }

    loadAndDisplayRankings();
});
