/* Array */

/* const firstArray = [1, 2, 4, 6, 7];
console.log(firstArray);

const secondArray = [];

secondArray[0] = 10;
secondArray[1] = 20;
secondArray[10] = 100; // 8 empty positions from 20 to 100

console.log(secondArray);
console.log(secondArray[10]);

console.log(secondArray[11]); // undefined
secondArray[11] = null;
console.log(secondArray);

delete secondArray[10]; // it lets an empty space
console.log(secondArray);
 
const values = [1, 2, 3];
console.log([...values, 4, 5]);
*/

const numbers = [1, 2, 3];
console.log(numbers.length);

console.log(numbers.push(4));
console.log(numbers);

console.log(numbers.unshift(0)); // the unshift() method returns the nwe length of the array
console.log(numbers);

console.log(numbers.pop(4)); // the pop() method returns the element that was popped off
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);

console.log(numbers.reverse());
console.log(numbers);

/* Iterators */

// For
/* const numbers = [1, 2, 4];
let result = '';

for (let flag = 0; flag < numbers.length; flag++) {
    result += numbers[flag] + ' ';
}

console.log(result);
console.log(typeof result); */
/* 
const numbers = [1, 2, 4];
let result = '';

// For..in...
for (const index in numbers) {
    result += numbers[index] + ' ';
}

console.log(result);
 */

// For...of...
/* const numbers = [1, 2, 4];
let result = '';

for (const value of numbers) {
    result += value + ' ';
}

console.log(result);
 */