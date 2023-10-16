const shoppingList = new Array();
const resultBox = document.querySelector('.alert');

let stop = false;
let i = 0;

while (!stop) {
  let question = prompt('Quali sono i prodotti da acquistare?')
  if (question === 'stop') {
    stop = true;
  } else {
    shoppingList.push(question);
  }
  i++;
}

for (let x = 0; x < shoppingList.length; x++) {
  let result = document.createElement('div');
  let product = shoppingList[x];
  result.innerHTML = `${product}`;
  resultBox.append(result);
}

