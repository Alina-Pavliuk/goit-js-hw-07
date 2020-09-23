const fontSizeControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

fontSizeControl.addEventListener('input', (e) => {
  spanText.style.fontSize = fontSizeControl.value + 'px';
});






