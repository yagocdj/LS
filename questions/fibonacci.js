// Fibonacci number locator

function locateFibonacci(position_n) {
    let fibo = [0, 1];
    if (position_n === 0) {
        fibo = [0];
    } else {
        for (let i = 0; i < position_n - 1; i++) {
            fibo.push(fibo[i + 1] + fibo[i]);
        }
    }
    return fibo[fibo.length - 1];
}

console.log(locateFibonacci(6));

// outro jeito

// function locateFibonacciV2(position_n) {
//     for (let i = 0; i < N; i++) {
//         if (position_n === 0) {
//             
//         }
//     }
// }
