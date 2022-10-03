const botaoCalcularIMC = document.querySelector('button');
const inputAltura = document.querySelector('input[name=altura]');

inputAltura.onkeyup = function(event){
  if(event.key === 'Enter') tratarEventoIMC(event);
  console.log(event.key);
}


botaoCalcularIMC.addEventListener('click', function(event) {
  tratarEventoIMC(event);
});

function tratarEventoIMC(event) {
  let altura = document.querySelector('input[name=altura]').value;

  let peso = document.querySelector('input[name=peso]').value;

  altura = Number(altura);
  peso = Number(peso);
  const sexo = document.querySelector('input[name=sexo]:checked').value;

  // console.log(`${altura} - ${peso} - ${sexo}`);

  const condicao = document.querySelector('input[name=condicao]');

  objetoIMC = calcularIMC(altura, peso, sexo);
  condicao.value = objetoIMC.status;
  condicao.style.backgroundColor = objetoIMC.backgroundColor;
}

function calcularIMC(altura, peso, sexo) {
  const imc = peso / (altura * altura);
  let status = "";

  if (sexo === 'F') {
    if (imc < 19.1) status = "Abaixo do peso";
    else if (imc < 25.8) status = "Peso normal";
    else if (imc < 27.3) status = "Marginalmente acima do peso";
    else if (imc < 32.3) status = "Acima do peso ideal";
    else status = "Obeso";
  } else if (sexo === 'M') {
    if (imc < 20.7) status = "Abaixo do peso";
    else if (imc < 26.4) status = "Peso normal";
    else if (imc < 27.8) status = "Marginalmente acima do peso";
    else if (imc < 31.1) status = "Acima do peso ideal";
    else status = "Obeso";
  }

  let backgroundColor = "";

  switch (status) {
    case "Abaixo do peso": backgroundColor = "green"; break;
    case "Peso normal": backgroundColor = "green"; break;
    case "Marginalmente acima do peso": backgroundColor = "yellow"; break;
    case "Acima do peso ideal": backgroundColor = "yellow"; break;
    case "Obeso": backgroundColor = "red"; break;
    default: backgroundColor = "gray"; status = "Não se Aplica!";
  }

  return { imc, status, backgroundColor };

  /*
  {imc, status}
  {
    imc: conteudo-do-imc,
    status: conteudo-do-status
  }
  */
}