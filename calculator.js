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