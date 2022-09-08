// Checking if a number is prime

function isPrime(number) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// main
// console.log(isPrime(11))

export default isPrime;