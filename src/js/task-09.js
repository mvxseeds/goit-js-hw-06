refs = {
  colorBtn: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
};

refs.colorBtn.addEventListener('click', onClick);


function onClick () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.colorSpan.textContent = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}