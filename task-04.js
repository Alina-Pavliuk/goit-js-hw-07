const counterRefs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterSpan: document.getElementById('value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
}
// console.log(counterRefs);

let counterValue = 2;
counterRefs.counterSpan.textContent = counterValue;
counterRefs.decrementBtn.addEventListener('click', (e) => {
  if(counterValue >= 2){
    counterValue -= 1;
    // console.log(counterValue);
    counterRefs.counterSpan.textContent = counterValue;
  }
  
});
counterRefs.incrementBtn.addEventListener('click', (e) => {
  counterValue += 1;
  // console.log(counterValue);
  counterRefs.counterSpan.textContent = counterValue;
});

