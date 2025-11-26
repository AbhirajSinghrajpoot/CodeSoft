const previousOperandText = document.getElementById('previousOperand');
const currentOperandText = document.getElementById('currentOperand');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');

let currentOperand = '';
let previousOperand = '';
let currentOperation = '';

function updateDisplay() {
    currentOperandText.textContent = currentOperand || '0';
    previousOperandText.textContent = previousOperand + (currentOperation || '');
}

function clearAll() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = '';
    updateDisplay();
}

function deleteDigit() {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') compute();
    currentOperation = operation;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    if (currentOperation === '+') result = prev + current;
    if (currentOperation === '-') result = prev - current;
    if (currentOperation === '*') result = prev * current;
    if (currentOperation === '/') result = current === 0 ? 'Error' : prev / current;

    currentOperand = String(result);
    previousOperand = '';
    currentOperation = '';
    updateDisplay();
}

numberButtons.forEach(btn => btn.addEventListener('click', () => appendNumber(btn.textContent)));
operationButtons.forEach(btn => btn.addEventListener('click', () => chooseOperation(btn.dataset.operation)));
equalsButton.addEventListener('click', compute);
allClearButton.addEventListener('click', clearAll);
deleteButton.addEventListener('click', deleteDigit);

updateDisplay();