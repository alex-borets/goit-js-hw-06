const rangeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

rangeInput.addEventListener('input', event => {
  textOutput.style.fontSize = `${Number(event.currentTarget.value)}px`;
});
