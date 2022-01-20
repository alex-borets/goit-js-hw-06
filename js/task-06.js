const textInput = document.querySelector('input');

const validation = event => {
  event.currentTarget.value.length === Number(textInput.dataset.length)
    ? textInput.setAttribute('class', 'valid')
    : textInput.setAttribute('class', 'invalid');
};

textInput.addEventListener('blur', validation);
