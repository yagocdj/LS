function sum(a, b) {
    const argumentsArray = [...arguments];
    return argumentsArray.reduce((sum, value) => sum + value, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));

// sumOdds
function sumOdds(...parameters) {
    let summation = 0;
    for (let value of parameters) {
        if (value % 2 !== 0) {
            summation += value;
        }
    }
    return summation;
}

console.log(sumOdds(1, 2, 3, 4, 5, 6));

// There are two ways to achieve the expected result:

/* // product - part one
function myProduct(...parameters) {
    let product = 1;
    for (let value of parameters) {
        product *= value;
    }
    return prod;
} */

// product - part two
function myProduct(a, b) {
    const argumentsArray = [...arguments];
    return argumentsArray.reduce((product, value) => product * value, 1);
}

console.log(myProduct(1, 2, 3, 4, 5, 6));
