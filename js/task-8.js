const inputControlsEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

const getRandomColor = () => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = amount => {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let boxes = document.createElement('div');
    boxes.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomColor()}`;
    fragment.appendChild(boxes);
  }
  boxesEl.appendChild(fragment);
};

const getAmount = () => {
  const amount = inputControlsEl.value;
  createBoxes(amount);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
};

renderBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);