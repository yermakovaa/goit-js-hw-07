const inputEl = document.getElementById('validation-input');

const makeCheckValidation = valueInput => {
  if (valueInput.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};

inputEl.addEventListener('blur', makeCheckValidation);
