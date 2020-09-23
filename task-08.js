const boxRefs = {
  div: document.getElementById('boxes'),
  input: document.querySelector('[type="number"]'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
}
const randomColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
let count;
boxRefs.input.addEventListener('change', () => {
  return count = boxRefs.input.value;
  
});

boxRefs.renderBtn.addEventListener('click', () => {
  createBoxes(count);
});

boxRefs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
    const colorBox = document.createElement('div');
    colorBox.style.width = size + 'px';
    colorBox.style.height = size + 'px';
    
    for(let i = 1; i <= amount; i++) {
      console.log(i);
      size += 10;
      const colorBox = document.createElement('div');
      colorBox.style.width = size + 'px';
      colorBox.style.height = size + 'px';
      
      let color = createRgb();
      colorBox.style.background = color;
  
      boxRefs.div.append(colorBox);
      
    }
}

function destroyBoxes() {
  boxRefs.div.innerHTML = '';
  boxRefs.input.value = '';
}

function createRgb() {
  const red = Math.round(Math.random() * (255));
  const green = Math.round(Math.random() * (255));
  const blue = Math.round(Math.random() * (255));
  return color = `rgb(${red}, ${green}, ${blue})`;
  
}



