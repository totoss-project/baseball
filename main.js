const lottoNumbersDiv = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

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