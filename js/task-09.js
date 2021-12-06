const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeClr() {
  const numColor = getRandomHexColor();
  spanRef.textContent = numColor;
  bodyRef.style.background = numColor;
}

btnRef.addEventListener('click', changeClr);
