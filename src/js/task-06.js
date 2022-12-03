const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.value.length < event.currentTarget.dataset.length
    ? event.currentTarget.classList.add('invalid')
    : event.currentTarget.classList.add('valid');
}
  