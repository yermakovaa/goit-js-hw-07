const counterValueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const counterValue = document.querySelector('#value');

// decrementBtn.addEventListener('click', function () {
//   counter.decrement();
//   counterValue.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//   counter.increment();
//   counterValue.textContent = counter.value;
// });
