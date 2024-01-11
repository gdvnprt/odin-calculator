function operate(arr) {
    if (arr[1] === '+') {
        return parseInt(arr[0]) + parseInt(arr[2]);
    } else if (arr[1] === '–') {
        return arr[0] -= arr[2];
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


let arithmetic = document.querySelectorAll('.arithmetic');
for (let i = 0; i < arithmetic.length; i++) {
        arithmetic[i].addEventListener("click", () => {
            displayValue.push(arithmetic[i].innerHTML);
            populateDisplay();
    });
};

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
    displayValue.unshift(operate(displayValue));
    for (let i = 0; i < 3; i++) {
        displayValue.pop();
    };
    populateDisplay();
});
