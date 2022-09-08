const number1 = 10;
const number2 = 10; // (+, -)
const operator = '+';
// decision

// if
if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else {
    result = 'Invalid operator';
}

console.log(result); //=> 20

// switch
/* precisamos do break para que a execução do switch pare onde queremos
e não continue realizando outros cases*/

switch (operator) {
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    default:
        resul = 'Invalid operator'
}

console.log(result); //=> 20

const nota1 = 100;
const nota2 = 70;
const nota3 = 50;

function calcularMediaIf(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 70) {
        return 'Aprovado';
    } else if (media >= 40) {
        return 'Final';
    } else {
        return 'Reprovado';
    }
}

console.log(calcularMediaIf(70, 70, 70));
console.log(calcularMediaIf(40, 40, 40));
console.log(calcularMediaIf(30, 30, 30));

function calcularMediaSwitch(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;

    // procure o primeiro case que der true
    switch (true) {
        case media >= 70:
            return 'Aprovado';
        case media >= 40:
            return 'Final';
        default:
            return 'Reprovado';
    }
}

console.log(calcularMediaIf(70, 70, 70));
console.log(calcularMediaIf(40, 40, 40));
console.log(calcularMediaIf(30, 30, 30));

/* exibindo de 0 a 99 agrupando de 10 em 10,
adicionando vírgula e, quando i == 99, adicionando um ponto no final */
let resultadoUm = "";
for (let i = 0; i <= 99; i++) {
    if (i % 10 == 0 && i != 0) {
        resultadoUm += `${i},\n`;
    } else if (i == 99) {
        resultadoUm += `${i}.`;
    } else {
        resultadoUm += `${i}, `;
    }
}
console.log(resultadoUm);

// exibir de 0 a 99 só os pares
let resultadoDois = "";
for (let x = 0; x <= 99; x++) {
    if (x % 2 == 0) {
        if (x % 10 == 0 && x != 0) {
            resultadoDois += `${x},\n`;
        } else if (x == 99) {
            resultadoDois += `${x}.`;
        } else {
            resultadoDois += `${x}, `;
        }
    }
}

console.log(resultadoDois);

// exibir de 99 a 0 só os pares
let resultadoTres = "";
for (let y = 99; y >= 0; y--) {
    if (y % 2 == 0) {
        if (y % 10 == 0 && y != 0) {
            resultadoTres += `${y},\n`;
        } else if (y == 0) {
            resultadoTres += `${y}.`;
        } else {
            resultadoTres += `${y}, `;
        }
    }
}

console.log(resultadoTres);