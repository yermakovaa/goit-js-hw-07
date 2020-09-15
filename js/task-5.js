const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

const currentValueOutput = valueInput => {
  outputEl.textContent =
    valueInput.target.value === '' ? 'незнакомец' : valueInput.target.value;
};

inputEl.addEventListener('input', currentValueOutput);
