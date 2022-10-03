import dataset from './model/dataset.js';

function loadComidas(){
  const datasetObject = JSON.parse(dataset);
  
  for(const comida of datasetObject){
    criarNovoPrato(comida.id, comida.name, comida.image);
  }
  
}

function criarNovoPrato(id, nome, imagem) {
  const novoPrato = 
    `
    <div class='largura-30' id='food-${id}'>
      <h3>${nome}</h3>
      <img src='${imagem}' alt='${nome}'>
    <div>
    `;

  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', novoPrato);
}

loadComidas();