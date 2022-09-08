// Calculator

function calculator(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
    }
}

console.log(calculator(1, 1, '+'));
console.log(calculator(1, 1, '-'));
console.log(calculator(1, 1, '*'));
console.log(calculator(1, 1, '/'));

/* 
function calculator(number1, number2, operator) {
    let operationResult;
    switch (operator) {
        case '+':
            operationResult = number1 + number2;
            return `${number1} + ${number2} = ${operationResult}`;
        case '-':
            operationResult = number1 - number2;
            return `${number1} - ${number2} = ${operationResult}`;
        case '*':
            operationResult = number1 * number2;
            return `${number1} * ${number2} = ${operationResult}`;
        case '/':
            operationResult = number1 / number2;
            return `${number1} / ${number2} = ${operationResult}`;
    }
}

console.log(calculator(5, 5, '+'));
console.log(calculator(5, 5, '-'));
console.log(calculator(5, 5, '*'));
console.log(calculator(5, 5, '/'));
 */