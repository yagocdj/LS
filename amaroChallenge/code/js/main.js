import dataset from './../data/products.json' assert {type: 'json'};

function loadProductData() {
    const datasetObject = dataset.products;
    for (const data of datasetObject) {
        createNewProduct(data.name, data.actual_price, data.installments, data.image);
    }
}

function createNewProduct(name, price, installments, image) {
    const newProduct = 
    `<li class="product-item">
        <div class="product-box-image">
            <img src="${image}" class="product-image">
        </div>
        <p class="product-name">${name}</p>
        <div class="product-price">
            <p class="product-cost">
                <span class="actual-price">${price}</span>
                <span class="installments">${installments}</span>
            </p>
        </div>
    </li>
  `;

    const catalogUl = document.querySelector('.catalog');
    catalogUl.insertAdjacentHTML('beforeend', newProduct);
}

loadProductData();
