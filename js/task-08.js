const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

const data = {};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  data.email = email.value;
  data.password = password.value;
  console.log(data);
  event.currentTarget.reset();
}
