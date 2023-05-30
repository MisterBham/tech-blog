const loginHandler = async (event) => {
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/member/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(`Failed to register: ${response.message}`);
    }
  } else {
    alert('Please check your username and/or password!');
  }
};

document.querySelector('.login-form');
document.addEventListener('submit', loginHandler);
