function calcularImc(altura, peso, sexo) {
    console.log(sexo);
    /* const altura = document.querySelector('#user-heigth').value;
    const peso = document.querySelector('#user-weigth').value; */
    
    // console.log(altura);
    
    // console.log(peso);
    const imc = peso / (altura ** 2);

    let resultado;
    if (sexo === 'F') {
        switch (true) {
            case (imc < 19.1): resultado = 'Abaixo do peso'; break;
            case (imc <= 25.8): resultado = 'Peso normal'; break;
            case (imc <= 27.3): resultado = 'Marginalmente acima do peso'; break;
            case (imc <= 32.3): resultado = 'Acima do peso ideal'; break;
            default: resultado = 'Obeso';
        }
    } else if (sexo === 'M') {
        switch (true) {
            case (imc < 20.7): resultado = 'Abaixo do peso'; break;
            case (imc <= 26.4): resultado = 'Peso normal'; break;
            case (imc <= 27.8): resultado = 'Marginalmente acima do peso'; break;
            case (imc <= 31.1): resultado = 'Acima do peso ideal'; break;
            case (imc > 31.1): resultado = 'Obeso';
        }
    }

    let backgroundColor = "";
    switch (resultado) {
        case 'Abaixo do peso': backgroundColor = 'green'; break;
        case 'Peso normal': backgroundColor = 'green'; break;
        case 'Marginalmente acima do peso': backgroundColor = 'yellow'; break;
        case 'Acima do peso ideal': backgroundColor = 'yellow'; break;
        case 'obeso': backgroundColor = 'red';
    }

    return {resultado, backgroundColor, imc};
    // condicao = document.querySelector('input[name="condicao"]');
    // condicao.value = resultado;
    // console.log(resultado);
}

function tratarEventoImc(event) {
    const form = document.querySelector('#imc-calculator');
    const formData = new FormData(form);

    const altura = formData.get('altura');
    const peso = formData.get('peso');
    
    const sexo = document.querySelector('input[name=sexo]:checked').value;
    const condicao = document.querySelector('#condicao');

    let resultadoImc = calcularImc(altura, peso, sexo);    
    
    condicao.value = resultadoImc.resultado;
    condicao.style.backgroundColor = resultadoImc.backgroundColor;
}

const button = document.querySelector('#calculate-button');
button.addEventListener('click', function(event) {
    tratarEventoImc(event);
});

const inputAltura = document.querySelector('#user-heigth');
inputAltura.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') tratarEventoImc(event);
});

const inputPeso = document.querySelector('#user-weigth');
inputPeso.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') tratarEventoImc(event);
});
