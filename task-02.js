const body = document.querySelector('body');
const list = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(elem => {
const ingredientItem = document.createElement('li');

ingredientItem.textContent = elem ;
list.append(ingredientItem);
  
});


