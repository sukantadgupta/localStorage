// const form = document.getElementById('myForm');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // prevents the form from submitting and refreshing the page

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;

//   const userDetails = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "555-1234"
//   };
  

//   // Store the user details in local storage
//   localStorage.setItem('name', name);
//   localStorage.setItem('email', email);
//   localStorage.setItem('phone', phone);

//   // Optional: display a success message to the user
//   alert('User details saved successfully!');
// });



const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents the form from submitting and refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const userDetails = {
    name: name,
    email: email,
    phone: phone,
  };
  

  // Store the user details in local storage
  localStorage.setItem('userDetails', JSON.stringify(userDetails));


  
});



const itemsList = document.getElementById('items');

myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  
  // Create a list item for each user detail and append it to the list
  const nameItem = document.createElement('li');
  nameItem.textContent = `Name: ${myForm.name.value}`;
  itemsList.appendChild(nameItem);

  const emailItem = document.createElement('li');
  emailItem.textContent = `Email: ${myForm.email.value}`;
  itemsList.appendChild(emailItem);

  const phoneItem = document.createElement('li');
  phoneItem.textContent = `Phone: ${myForm.phone.value}`;
  itemsList.appendChild(phoneItem);
  

});