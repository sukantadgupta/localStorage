const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents the form from submitting and refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Store the user details in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);

  // Optional: display a success message to the user
  alert('User details saved successfully!');
});