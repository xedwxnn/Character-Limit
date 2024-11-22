const inputEl = document.getElementById('input');
let currentCharEl = document.getElementById('currentChar');
const maxCharEl = document.getElementById('maxChar');

maxCharEl.innerText = String(5).padStart(2, '0');

function charactersCounter() {
    let inputValue = inputEl.value.length;
    currentCharEl.innerText = String(inputValue).padStart(2, '0');
    validateCounter(inputValue);
}

function validateCounter(inputValue) {
    const maxChars = parseInt(maxCharEl.innerText, 10);
    if (inputValue >= maxChars) {
        inputEl.style.border = '1px solid red';
        currentCharEl.style.color = 'red';
        maxCharEl.style.color = 'red';

        inputValue = maxCharEl;
    }
    
    else {
        inputEl.style.border = '';
        currentCharEl.style.color = '';
        maxCharEl.style.color = '';

        inputValue = currentCharEl;
    }
}

inputEl.addEventListener('input', charactersCounter);