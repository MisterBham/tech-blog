// Log in
const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/member/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
      document.location.replace('/');
    } else {
      alert(`Failed to register: ${response.message}`);
    }
  } else {
    alert('Please check your username and/or password!');
  }
};

// Sign up
const signupHandler = async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#signupEmail').value.trim();
  const username = document.querySelector('#signupUsername').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();
  const confirmPassword = document.querySelector('#confirmPassword').value.trim();

  if (password === confirmPassword) {
    if (email && username && password) {
      const response = await fetch('/api/member/', {
        method: 'POST',
        body: JSON.stringify({ email, username, password }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert(`Failed to create user: ${response.message}`);
        }
    }
  } else {
    alert('Please ensure your passwords match!')
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupHandler);
