const ulRef = document.querySelector('#categories');

console.log(`Number of categories: ${ulRef.children.length}`);

const firstLiRef = ulRef.firstElementChild;

console.log(`Category: ${firstLiRef.children[0].textContent}`);
console.log(`Elements: ${firstLiRef.children[1].children.length}`);

const secondLiRef = firstLiRef.nextElementSibling;

console.log(`Category: ${secondLiRef.children[0].textContent}`);
console.log(`Elements: ${secondLiRef.children[1].children.length}`);

const lastLiRef = ulRef.lastElementChild;

console.log(`Category: ${lastLiRef.children[0].textContent}`);
console.log(`Elements: ${lastLiRef.children[1].children.length}`);
