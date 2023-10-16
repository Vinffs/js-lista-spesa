const shoppingList = new Array();
const resultBox = document.querySelector('.alert');

let item = '';

while (item !== 'stop') {
  item = prompt('Quali sono i prodotti da acquistare?')
  item = item.trim();
  if (item !== 'stop' && item !== '') {
    shoppingList.push(item);
  }
}

for (let x = 0; x < shoppingList.length; x++) {
  let result = document.createElement('div');
  let product = shoppingList[x];
  result.innerHTML = `${product}`;
  resultBox.append(result);
}

