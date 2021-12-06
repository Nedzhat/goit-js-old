const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const elements = [];

const elem = ingredients.map(option => {
  const liElem = document.createElement('li');
  liElem.textContent = option;
  liElem.classList.add('item');
  elements.push(liElem);
});

ulRef.append(...elements);
