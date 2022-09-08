/* var nome = "Yago";
let nome = "Yago";
const nome = "Yago";
 */

/* // HOISTING (variável enviada para o escopo geral do script)
var nome = "Yago";

console.log(window.nome); */

/* // variável definida em um escopo local
let nome = "Yago";

console.log(window.nome);
 */

/* 
var nome = "Yago";

if (nome == "Yago") {
    var idade = 90;
}

// retorna a idade
console.log(idade);
 */

// usando o let (variável de escopo local)
/* let nome = "Yago";

if (nome == "Yago") {
    let idade = 90;
    // essa variável só está definida dentro dessa caixinha de código (escopo do if)
}

// retorna variável indefinida
console.log(idade);

if (nome == "Yago") {
    let idade = 90;
    console.log(idade);
    // retorna a idade sem nenhum problema (está usando a variável idade local)
} */

/* var nome = "Yago";
var nome = "Pedro";

// mostra "Pedro" no console
console.log(nome); */

/* let nome = "Yago";
let nome = "Pedro";

// gera um erro, já que uma variável definida com let não pode ser redefinida
console.log(nome); */

/* let nome = "Yago";
nome = "Pedro";

// dá certo dessa maneira
console.log(nome); */

/* // variável de valor constante
const nome = "Yago";
nome = "Pedro";

// gera um erro, já que uma variável constante não pode receber um novo valor
console.log(nome); */

/* // neste caso, eu só posso alterar os valores de nome e sobrenome, mas não posso alterar a estrutura dessa variável como um todo
const nome = {nome:"Yago", sobrenome:"César"};
nome.nome = "Pedro"; // ok
nome = {idade:90, hobby:"Código"}; // não dá certo, já que eu estou tentando redefinir uma constante

console.log(nome); */

/* var pessoa = {nome:"Yago", sobrenome:"César"};
pessoa = "Pedro"; // troquei um objeto por uma string, mas isso não seria possível com uma variável declarada com const

console.log(pessoa); */

// AGORA, O PROFESSOR RECOMENDA QUE USEMOS MAIS O LET (SE FOR MUDAR O VALOR DA VARIÁVEL) E O CONST (SE NÃO FOR MUDAR O VALOR DA VARIÁVEL)