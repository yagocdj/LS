let disciplinas = [

    {
        "nome": 'ED', // propriedades podem ser colocadas com ou sem aspas duplas
        ano: 2022
    },

    {
        nome: 'LS',
        ano: 2022
    }
];

disciplinas = {

    10: {
        "nome": 'ED', // propriedades podem ser colocadas com ou sem aspas duplas
        ano: 2022
    },

    20: {
        nome: 'LS',
        ano: 2022
    },

    TSI2010: {
        "nome": "WEB I",
        "ano": 2022
    },

    'propriedade composta': {
        "nome": "WEB II",
        "ano": 2022
    }

};

// console.log(disciplinas);
// disciplinas.curso = 'TSI';
// console.log(disciplinas);

/* console.log(disciplinas[10].nome);
console.log(disciplinas["10"].nome);
console.log(disciplinas.TSI2010);
console.log(disciplinas['propriedade composta'].nome); */

// ------------------------------------------------------------------------------------------- //
// JSON
// JavaScript Object Notation
let livro = {
    titulo: "JS na prática!",
    paginas: 530,
    ano: 2019
};

console.log(JSON.stringify(livro));

let ano = 2019;
let livroJSON = `
{
    "nome": "JS na prática!",
    "paginas": 530,
    "ano": ${ano},
    "esgota": true,
    "editora": { "nome": "IFPB", "cidade": "João Pessoa"},
    "data": "2022-01-01"
}`;

let objLivro = JSON.parse(livroJSON);

// console.log(objLivro.editora.nome);
// console.log(new Date(objLivro.data));

let livroNovo = { ...livro, editora: "IFPB", titulo: "Novo livro" };

console.log(livro);
console.log(livroNovo);

const titulo = "JS na prática!";
ano = 2019;
const paginas = 530;

const novoLivroJS = { titulo, ano, paginas };
// console.log(novoLivroJS);

// ------------------------------------------------------------------------------------------- //
const ips = [
    { address: '192.168.0.2', mask: '255.255.255.0' },
    { address: '192.168.0.10', mask: '255.255.255.0' },
    { address: '192.168.0.26', mask: '255.255.255.0' },
];

for (const ip of ips) {
    console.log(ip.address + '/' + ip.mask);
}

console.log(JSON.stringify(ips));

// ------------------------------------------------------------------------------------------- //

const ipsNovos = {
    database: { address: '192.168.0.2', mask: '255.255.255.0' },
    dns: { address: '192.168.0.10', mask: '255.255.255.0' },
    http: { address: '192.168.0.26', mask: '255.255.255.0' },
};

for (const host in ipsNovos) {
    console.log(ipsNovos[host].address + '/' + ipsNovos[host].mask);
}
