const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

const currentValueOutput = event => {
  outputEl.textContent =
    event.target.value === '' ? 'незнакомец' : event.target.value;
};

inputEl.addEventListener('input', currentValueOutput);
