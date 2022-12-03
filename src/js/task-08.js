const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();
  
  const formElements = event.currentTarget.elements;
  
  const email = formElements.email;
  const password = formElements.password;
  
  const formData = {
    email: email.value,
    password: password.value,
  };

  email.value.length === 0 || password.value.length === 0
  ? alert('There are empty fields! Please fill in all the necessary fields!')
  : console.log(formData);
  
  form.reset();
}