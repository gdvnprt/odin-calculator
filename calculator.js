function operate(num1, operator, num2) {
    if (operator === '+') {
        return num1 += num2;
    } else if (operator === '-') {
        return num1 -= num2;
    } else if (operator === '*') {
        return num1 *= num2;
    } else if ((operator === '/') && (num2 = 0)) {
        return "Don't divide by zero, stupid.";
    } else if (operator === '/') {
        return num1 /= num2;
    } else {
        return "ERROR";
    };
};