// HTML unordered list generator
/*
function createList(quantityOfItems, label='Text') {
    let listString = '';
    let listTag = '';
    for (let i = 0; i <= quantityOfItems; i++) {
        listTag = `  <li>${text} ${i}</li>`;
        if (i === 0) {
            listString += `<ul>\n`;
        } else if (i > 0 && i < quantityOfItems) {
            listString += `${listTag}\n`;
        } else {
            listString += `${listTag}\n</ul>`;
        }
    }
    return listString;
}

console.log(createList(10, 'Yago'));
console.log(createList(10));
*/
// Other way to solve this problem

const createListTwo = (quantityOfItems, label='Text') => {
    let result = '';
    for (let i = 0; i < quantityOfItems; i++) {
        result += `    <li>${label} ${i+1}</li>\n`;
    }
    return `<ul>\n${result}</ul>`;
}

console.log(createListTwo(10));
console.log(createListTwo(10, 'Yago'));
