const pwd = document.getElementById('pwd');
const email = document.getElementById('email');
const form = document.getElementById('loginForm');
const error = document.getElementById('err');
const modal = new bootstrap.Modal(document.getElementById('myModal'));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reset error message
  error.innerText = '';

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  if (!emailPattern.test(email.value)) {
    error.innerText = 'Please provide a valid email address';
    return;
  }

  // Validate password
  if (pwd.value.length < 8) {
    error.innerText = 'Please provide a password with at least 8 characters';
    return;
  }

  // If both email and password are valid, close modal and redirect to home page
  modal.hide(); // Close modal
  // Redirect to home page
  window.location.href = 'abc.html'; // Replace 'abc.html' with the actual URL of your home page
});
