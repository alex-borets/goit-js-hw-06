const bodyElem = document.querySelector('body');
const colorElem = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function changeColorButtonClick() {
//   bodyElem.style.backgroundColor = getRandomHexColor();
//   colorElem.textContent = bodyElem.style.backgroundColor;
// }

changeColorButton.addEventListener('click', () => {
  bodyElem.style.backgroundColor = getRandomHexColor();
  colorElem.textContent = bodyElem.style.backgroundColor;
});
