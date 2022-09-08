// const arr = [1, 3, 5, 8, 'LS 2022.2 B', null]; // melhor maneira de se criar um array
// console.log(arr[2]);

const arr = [1, 3, 5];

console.log(arr.concat(["Teste"]));
// Adding the array [2, 8] to arr
console.log([...arr, [2, 8]]);
// Adding the elemens of [2, 8] to arr
console.log([...arr, ...[2, 8]]);
// console.log(typeof arr);
console.log(Array.isArray(arr));

// delete arr[4];
// arr.pop(); // melhor maneira de se remover um elemento de um array
arr.splice(1, 1);
console.log(arr);
console.log(typeof arr[arr.length - 1]);

// delete arr[arr.length - 1];
// console.log(typeof arr[arr.length - 1]);

// arr[0] = 2;
// console.log(arr)

// const arrObj = new Array(1, 3, 5, 8);
// console.log(arrObj);

// const arrObjNovo = new Array(5); // array com 5 elementos
// const arrLiteral = [5];

// console.log(arrObjNovo.length);
// console.log(arrLiteral.length);

// Funções da API array
const a = [];
// Inserção
a.push(10);
// console.log(a);

a.push(20);
a.push(30);

// console.log(a);
a.unshift(40);
// console.log(a);

a.splice(2, 0, 15, 16); // inserir a partir da posição 2 sem remover ninguém (0) 15 e 16
console.log(a);

// Remoção
console.log(a.shift());
// console.log(a);
// console.log(a.pop());

a.splice(1, 2);
// console.log(a);

// Ordenação
const arrayNumbers = [2, 8, 5, 30, 9, 3, 10];
console.log(arrayNumbers);

function compareProgressive(a, b) {
    return a - b;
}

arrayNumbers.sort(compareProgressive);
console.log(compareProgressive);
console.log(arrayNumbers);
console.log(arrayNumbers.reverse());

console.log(arrayNumbers.join(" - "));
console.log(arrayNumbers.includes(4));

console.log("Slice: " + arrayNumbers.slice(4));
console.log("Slice 2: " + arrayNumbers.slice(1, -2));

const comparar = function(a, b) {
    return a, b;
};
