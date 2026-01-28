const lottoNumbersDiv = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 테마 설정 함수
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '라이트 모드';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '다크 모드';
        localStorage.setItem('theme', 'light');
    }
}

// 테마 토글 버튼 이벤트 리스너
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    setTheme(isDarkMode ? 'light' : 'dark');
});

// 페이지 로드 시 저장된 테마 적용
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // 초기 로또 번호 생성
    generateBtn.click();
});


function getNumberColor(number) {
    if (number <= 10) return '#f9c941';  // 노란색
    if (number <= 20) return '#2a9d8f';  // 파란색
    if (number <= 30) return '#e76f51';  // 주황색
    if (number <= 40) return '#e9c46a';  // 살구색
    return '#d62828'; // 빨간색
}

generateBtn.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        numberDiv.style.backgroundColor = getNumberColor(number);
        lottoNumbersDiv.appendChild(numberDiv);
    });
});