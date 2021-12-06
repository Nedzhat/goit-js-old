const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

function plusPoint() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}

function minusPoint() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}

plusBtn.addEventListener('click', plusPoint);
minusBtn.addEventListener('click', minusPoint);
