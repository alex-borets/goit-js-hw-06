const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfElem = document.querySelector('#ingredients');

const listOfIngr = ingredients.map(ingr => {
  const itemLi = document.createElement('li');
  itemLi.textContent = ingr;
  itemLi.classList.add('item');
  console.log(itemLi);
  return itemLi;
});

listOfElem.append(...listOfIngr);
console.log(listOfIngr);
