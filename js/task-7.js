const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeTextFont = event => {
  textEl.style.fontSize = `${event.target.value}px`;
};

fontSizeControlEl.addEventListener('input', changeTextFont);