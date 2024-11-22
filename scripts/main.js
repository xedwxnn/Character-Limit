const inputEl = document.getElementById('input');
let currentCharEl = document.getElementById('currentChar');
const maxCharEl = document.getElementById('maxChar');

maxCharEl.innerText = String(60).padStart(2, '0');

function charactersCounter() {
    let inputValue = inputEl.value.length;
    currentCharEl.innerText = String(inputValue).padStart(2, '0');
    validateCounter(inputValue);
}

function validateCounter(inputValue) {
    const maxChars = parseInt(maxCharEl.innerText, 10);
    
    inputEl.removeEventListener("keydown", preventInput);
    
    if (inputValue >= maxChars) {
        inputEl.style.border = '1px solid red';
        currentCharEl.style.color = 'red';
        maxCharEl.style.color = 'red';

        inputEl.addEventListener("keydown", preventInput);
    } else {
        inputEl.style.border = '';
        currentCharEl.style.color = '';
        maxCharEl.style.color = '';
    }
}

function preventInput(event) {
    if (event.key !== 'Backspace' && event.key !== 'Delete') {
        event.preventDefault();
    }
}

inputEl.addEventListener('input', charactersCounter);