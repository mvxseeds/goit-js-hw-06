const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
      event.currentTarget.classList.add('invalid')
    } else {
      if (event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.remove('invalid');
      }
      event.currentTarget.classList.add('valid');
    }
}
  