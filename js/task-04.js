let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

const handleButtonDecrementClick = () => {
  counterValue = counterValue + parseInt(buttonDecrement.textContent);
  document.querySelector('#value').textContent = String(counterValue);
};

const handleButtonIncrementClick = () => {
  counterValue = counterValue + parseInt(buttonIncrement.textContent);
  document.querySelector('#value').textContent = String(counterValue);
};

buttonDecrement.addEventListener('click', handleButtonDecrementClick);
buttonIncrement.addEventListener('click', handleButtonIncrementClick);
