const controls = document.querySelector('div#controls');

const refs = {
  // refactor to find using different instructions
  input: controls.querySelector('input[type="number"]'),
  btnCreate: controls.querySelector('button[data-create]'),
  btnDestroy: controls.querySelector('button[data-destroy]'),
  boxContainer: document.querySelector('div#boxes'),
};

refs.btnCreate.addEventListener('click', onClick);
refs.btnDestroy.addEventListener('click', onClick);


function onClick (e) {
  if (e.currentTarget === refs.btnCreate) {
    createBoxes(refs.input.value);
  }
  else if (e.currentTarget === refs.btnDestroy) {
    destroyBoxes();
  }
}


function createBoxes(amount) {
  amount = Number(amount);
  const boxSizes = Array.from({length: amount}, (v, k) => k * 10 + 30);

  const boxesMarkup = boxSizes.map(makeDivMarkup).join('');

  refs.boxContainer.insertAdjacentHTML('beforeend', boxesMarkup);
}


function makeDivMarkup (size) {
  return `<div style="width: ${size}px; height: ${size}px;
                      background-color: ${getRandomHexColor()};">
          </div>`;
}


function destroyBoxes() {
  refs.boxContainer.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
