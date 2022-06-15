const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const clearButton = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

let prevNumber = '';
let calculationOperation = '';
let currentNumber = '';

numbers.forEach(function (number) {
	number.addEventListener('click', function (e) {
		inputNumber(e.target.value);
		updateScreen(currentNumber);
	});
});

const updateScreen = (number) => {
	calculatorScreen.value = number;
};

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
};

operators.forEach(function (operator) {
	operator.addEventListener('click', function (e) {
		inputOperator(e.target.value);
	});
});

const inputOperator = (operator) => {
	if (calculationOperation === '') {
		prevNumber = currentNumber;
	}
	calculationOperation = operator;
	currentNumber = '';
};

equalSign.addEventListener('click', function () {
	calculate();
	updateScreen(currentNumber);
});

const calculate = () => {
	let result = '';
	switch (calculationOperation) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			break;
	}

	currentNumber = result;
	calculationOperation = '';
};

clearButton.addEventListener('click', function () {
	clearAll();
	updateScreen(currentNumber);
});

const clearAll = () => {
	prevNumber = '';
	currentNumber = '0';
	calculationOperation = '';
};

decimal.addEventListener('click', function (e) {
	inputDecimal(e.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return;
	}
	currentNumber += dot;
};
