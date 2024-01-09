function operate(num1, operator, num2) {
    if (operator === '+') {
        return num1 += num2;
    } else if (operator === '-') {
        return num1 -= num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/'){
        if (num2 === 0){
        return "Don't divide by zero, stupid.";
        } else {
        return (num1 / num2);
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
