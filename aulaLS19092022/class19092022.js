document.querySelector("#apresentar").onclick = obterDadosFormulario;
// document.querySelector("#mudar-cor").onclick = mudarCorAzul;
document.querySelector("#mudar-cor").addEventListener('click', mudarCorAzul);
document.querySelector("#mudar-cor").addEventListener('click', function() {
    window.alert("Mudar cor para azul!");
});

document.querySelector("#mudar-cor").addEventListener("mouseover", function() {
    window.alert("Mouse passou em cima do evento!");
});

function mudarCorAzul() {
    document.querySelector("h1").style.color = "blue";
}

function obterDadosFormulario() {
    const inputNome = document.querySelector('input[name="nome"]');
    const inputIdade = document.querySelector('input[name="idade"]');
    const inputTecnologias = document.querySelectorAll('input[name="tecnologias"]')

    const vetorTecnologias = [];

    for (let i = 0; i < inputTecnologias.length; i++) {
        if (inputTecnologias[i].checked == true) {
            vetorTecnologias.push(inputTecnologias[i].value);
        }
    }

    console.log(`Dados digitados: `)
    console.log(inputNome.value);
    console.log(inputIdade.value);
    console.log(vetorTecnologias.join(", "));
}