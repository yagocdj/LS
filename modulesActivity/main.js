var isNumber = require('is-number-object');
var assert = require('assert');

console.log(isNumber('abcde'));
console.log(isNumber(true));
console.log(isNumber(1));
