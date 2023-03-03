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
  
  const itemsList = document.getElementById('items');
  
  // Create a single list item for all the user details
  const detailsItem = document.createElement('li');
  detailsItem.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;
 

  const deleteItem = document.createElement('input');
  deleteItem.type = "button";
  deleteItem.value = "Delete";
 

  deleteItem.onclick =() => {

    localStorage.removeItem("userDetails");
    itemsList.removeChild(detailsItem);
  }

  detailsItem.appendChild(deleteItem);
  itemsList.appendChild(detailsItem);




});