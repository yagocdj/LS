// Finding the nth prime number
import isPrime from "./prime.js";

function findNthPrime(position) {
    let primesList = [];
    let counter = 2;
    while (primesList.length != position) {
        if (isPrime(counter)) {
            primesList.push(counter);
        }
        counter++;
    }
    return primesList[primesList.length - 1]
}

// main

console.log(findNthPrime(10));
