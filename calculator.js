function operate(arr) {
    if (arr[1] === '+') {
        return parseInt(arr[0]) + parseInt(arr[2]);
    } else if (arr[1] === '–') {
        return arr[0] - arr[2];
    } else if (arr[1] === '×') {
        return arr[0] * arr[2];
    } else if (arr[1] === '÷'){
        if (arr[2] === '0'){
        return "Don't divide by zero, stupid.";
        } else {
        return (arr[0] / arr[2]);
        };
    } else {
        return "ERROR";
    };
};

const display = document.querySelector('#displayText');
let displayValue = [];

function populateDisplay() {
    display.innerHTML = displayValue.join(" ").toString();
};


/* base function for button use
let arithmetic = document.querySelectorAll('.arithmetic');
for (let i = 0; i < arithmetic.length; i++) {
        arithmetic[i].addEventListener("click", () => {
            displayValue.push(arithmetic[i].innerHTML);
            populateDisplay();
    });
};*/

let number = document.querySelectorAll('.number');
for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", () => {
            displayValue.push(number[i].innerHTML);
            populateDisplay();
            let previousNumber = displayValue.length - 2;
            if (displayValue.length > 0 && 
                displayValue[previousNumber] !== '+' && 
                displayValue[previousNumber] !== '–' && 
                displayValue[previousNumber] !== '×' && 
                displayValue[previousNumber] !== '÷') {
                    let joinedNumber = displayValue[previousNumber].concat("", displayValue[previousNumber + 1]);
                    displayValue.push(joinedNumber);
                    displayValue.splice(previousNumber,2);
                    populateDisplay();
            }
    });
};

let operator = document.querySelectorAll('.operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", () => {
        let previousDigit = displayValue.length - 1;
        if (displayValue[previousDigit] !== '+' && 
            displayValue[previousDigit] !== '–' && 
            displayValue[previousDigit] !== '×' && 
            displayValue[previousDigit] !== '÷') {
                displayValue.push(operator[i].innerHTML);
                populateDisplay();
            };
    });
};

let decimal = document.querySelector('.decimal');
decimal.addEventListener("click",() => {
    let previousDigit = displayValue.length - 1;
        if (displayValue[previousDigit].includes('.') === false) {
            displayValue.push(decimal.innerHTML);
            let previousNumber = displayValue.length - 2;
            if (displayValue.length > 0 && 
                displayValue[previousNumber] !== '+' && 
                displayValue[previousNumber] !== '–' && 
                displayValue[previousNumber] !== '×' && 
                displayValue[previousNumber] !== '÷') {
                    let joinedNumber = displayValue[previousNumber].concat("", displayValue[previousNumber + 1]);
                    displayValue.push(joinedNumber);
                    displayValue.splice(previousNumber,2);
                };
        };
    populateDisplay();
});

let backspace = document.querySelector('#backspace');
backspace.addEventListener("click", () => {
    displayValue.pop(); 
    populateDisplay();
});

let clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    for (let i = displayValue.length; i > 0; i--) {
        displayValue.pop();
        populateDisplay();
    };
});

let execute = document.querySelector('#execute');
execute.addEventListener("click", () => {
    while (displayValue.length >= 3) {
        let solution = operate(displayValue)
        displayValue.unshift(solution.toPrecision(6));
        displayValue.splice(1, 3);
    };
    populateDisplay();
});


/* auto text resize attempt

const displayContainer = document.querySelector('.display');

const isOverflown = ({element}) => element.scrollHeight > element.innerHeight;

const resizeText = ({element, parent}) => {
    let p = 20;
    let overflow = false;
    const maxSize = 40;

    while (!overflow && p < maxSize) {
        element.style.fontsize = `${p}px`;
        overflow = isOverflown(parent);
        if (!overflow) p++;
    };

    element.style.fontSize = `${p - 1}px`;
};

resizeText({display, displayContainer}); */