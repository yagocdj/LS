// esm
// o export pode ser aplicado antes do nome da função
export function sum(a, b) {
    return a + b;
}

export function minus(a, b) {
    return a - b;
}

// cria-se um objeto com as funções dentro dele
const calc = {
    sum,
    minus
};

// export { sum };
// export { sum, minus };
export default calc; // exportanto o objeto calc por meio da exportação default