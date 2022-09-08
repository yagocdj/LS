import calc, { sum } from './lib.js'

console.log(sum(1, 2));
console.log(calc.sum(10, 5));
console.log(calc.minus(10, 5));
// usar o import sem precisar usar a extensão .mjs -> npm init -y
// e incluir a seguinte linha: "type": "module",