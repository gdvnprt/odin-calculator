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
    if (display.innerHTML.length > 8) {
        display.style.fontSize = '30px';
    } else {
        display.style.fontSize = '60px';
    };
};

/* add dynamic text resize to populateDisplay?
    not working for some reason

    if (displayValue.join('').length > 8) {
        display.style.fontsize = '30px';
    } else {
        display.style.fontsize = '60px';
    }; 
*/


let number = document.querySelectorAll('.number');
for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", () => {
            let previousNumber = displayValue.length - 1;
            if (displayValue.length > 0 && 
                displayValue[previousNumber] !== '+' && 
                displayValue[previousNumber] !== '–' && 
                displayValue[previousNumber] !== '×' && 
                displayValue[previousNumber] !== '÷') {
                    let joinedNumber = displayValue.pop().concat("", number[i].innerHTML);
                    displayValue.push(joinedNumber);
            } else {
                displayValue.push(number[i].innerHTML);
            }
            populateDisplay();
    });
};

let operator = document.querySelectorAll('.operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", () => {
        let previousDigit = displayValue.length - 1;
        if (displayValue.length > 0 &&
            displayValue[previousDigit] !== '+' && 
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
    let previousValue = displayValue.length - 1;
    if (displayValue[previousValue].length > 1) {
        let previousSpot = displayValue[previousValue].length - 2;
        let newValue = displayValue[previousSpot].slice(previousSpot, 1);
        displayValue.pop();
        displayValue.push(newValue);
    } else {
        displayValue.pop();
    }; 
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
        if (solution.toString().length > 10 ||
            solution.toString().length === undefined) {
            displayValue.unshift(solution.toPrecision(10));
            displayValue.splice(1, 3);
        } else {
            displayValue.unshift(solution);
            displayValue.splice(1, 3);
        }
    };
    populateDisplay();
});
