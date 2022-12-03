const refs = {
  decBtn: document.querySelector('[data-action="decrement"]'),
  incBtn: document.querySelector('[data-action="increment"]'),
  counterField: document.getElementById('value'),
}

let counterValue = 0;

const onDecrementClick = () => { 
  counterValue -= 1;
  refs.counterField.textContent = counterValue;
};

const onIncrementClick = () => {
  counterValue += 1;
  refs.counterField.textContent = counterValue;
}

refs.decBtn.addEventListener('click', onDecrementClick);
refs.incBtn.addEventListener('click', onIncrementClick);
