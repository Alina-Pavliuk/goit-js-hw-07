const list = document.querySelector('#categories');

const listItems = [...list.children]
console.log(`В списке ${listItems.length} категории`);

listItems.forEach((element) => {
  
  const findsHeading = element.firstElementChild.textContent;
  const sumItemsCategory = element.lastElementChild.children.length;
  
  console.log(`Категория: ${findsHeading}. Количество: ${sumItemsCategory}`);
});



