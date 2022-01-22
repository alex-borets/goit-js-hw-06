const form = document.querySelector('.login-form');

form.addEventListener('submit', loginButtonClick);

function loginButtonClick(event) {
  event.preventDefault();

  const password = event.currentTarget.password.value;
  const email = event.currentTarget.email.value;

  const userCredentials = { email, password };

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
  // });

  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
  } else {
    return console.log(userCredentials);
  }

  event.currentTarget.reset();
}
