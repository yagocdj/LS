const arr = [1, 3, 5]

// 1 - For
for (let flag = 0; flag < arr.length; flag++) {
    console.log(arr[flag]);
}

// 2 - For...in...
for (const indice in arr) {
    console.log(indice + " - " + arr[indice]);
}

// 3 - For...of...
for (const valor of arr) {
    console.log(valor);
}

// 4 - while
const periodo = 1;
while (periodo >= 2) {
    console.log("Imprimir oportunidades de bolsas!");
}

// 5 - do...while

do {
    console.log("do ... while - Imprimir oportunidades de bolsas!");
} while (periodo >= 2);
