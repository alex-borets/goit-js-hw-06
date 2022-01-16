const categoriesElem = document.querySelectorAll('ul#categories li.item');
const countCategoriesElem = categoriesElem.length;

console.log(`Number of categories: ${countCategoriesElem}`);

categoriesElem.forEach(elem => {
  const textElem = elem.firstElementChild.textContent;
  console.log(`Category: ${textElem}`);

  const elementsElem = elem.lastElementChild;
  const countElements = elementsElem.querySelectorAll('li');
  console.log(`Elements: ${countElements.length}`);
});
