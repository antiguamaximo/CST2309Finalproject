"use strict";
/*
    Final Project
    CST2309
    Maximo Antigua
    validateForm.js
*/
let regButton = document.getElementById("regButton");

regButton.addEventListener("click", validatePassword());

// regButton.addEventListener("click", validateFName());

// regButton.addEventListener("click", validateEmail());

function validatePassword() {
  let password = document.getElementById("password");
  let cPassword = document.getElementById("cPassword");

  var hasUpperCase = /[A-Z]/.test(password);
  var hasLowerCase = /[a-z]/.test(password);
  var hasDigits = /\d/.test(password);
  var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.validity.valueMissing){
    password.setCustomValidity("Enter a password.");
  } else if (hasLowerCase) {
    password.setCustomValidity("Password must contain a lower case letter.");
  } else if (hasUpperCase) {
    password.setCustomValidity("Password must contain a upper case letter.");
  } else if (hasSpecialChars){
    password.setCustomValidity("Password must contain special characters");
  } else if (hasDigits) {
    password.setCustomValidity("Password must contain a digits.");
  } else if (password.validity.tooShort) {
    password.setCustomValidity("Password must contain at least 6 characters.");
  } else {
    password.setCustomValidity("");
  }

  if (password != cPassword) {
    cPassword.setCustomValidity("Passwords do not match!");
  }
}

// function validateName() {
//   var fname = document.getElementById('fname').value;
//   var fnameRegex = /^[a-zA-Z\s]+$/; 

//   if (fname === "") {
//       alert("Name cannot be empty.");
//       return false;
//   } else if (!fnameRegex.test(fname)) {
//       alert("Name can only contain letters and spaces.");
//       return false;
//   } else {return true;}
  
// }

// function validateEmail() {

//   var email = document.getElementById('email').value;
//   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//   if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return false;

//   } else {
//       return true;
//   }
  
// }


// function validateRegForm() {
//   if (!validatePassword() || validateName() ||  validateEmail()) {
//       return false;
//   }else {
//     alert("Registration complete!");
//     return true;
//   }

// }