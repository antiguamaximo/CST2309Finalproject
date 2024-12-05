"use strict";
/*
    Final Project
    CST2309
    Maximo Antigua
    validateForm.js
*/
let regButton = document.getElementById("regButton");

regButton.addEventListener("click", validatePassword);

regButton.addEventListener("click", validateName);

regButton.addEventListener("click", validateEmail);

function validatePassword() {
  let password = document.getElementById("password");
  let cPassword = document.getElementById("cPassword");
  
  if (password.validity.valueMissing){
    password.setCustomValidity("Enter a password.");
  } else if (!(/[a-z]/.test(password.value))) {
    password.setCustomValidity("Password must contain a lower case letter.");
  } else if (!(/[A-Z]/.test(password.value))) {
    password.setCustomValidity("Password must contain a upper case letter.");
  } else if (!(/[!@#$%^&*(),.?":{}|<>]/.test(password.value))){
    password.setCustomValidity("Password must contain special characters");
  } else if (!(/\d/.test(password.value))) {
    password.setCustomValidity("Password must contain a digits.");
  } else if (password.validity.tooShort) {
    password.setCustomValidity("Password must contain at least 6 characters.");
  } else if (password.value !== cPassword.value) {
    password.setCustomValidity("Passwords do not match!");
  } else {
    password.setCustomValidity("");
  }

}

function validateName() {
  let fname = document.getElementById("fName");

  if (fname.validity.valueMissing){
    fname.setCustomValidity("Enter your name.");
  } else if (!(/^[a-zA-Z\s]+$/.test(fname.value))) {
    fname.setCustomValidity("Name can only contain letters and spaces.");
  } else if (fname.validity.tooShort) {
    fname.setCustomValidity("Name must contain at least 3 characters.");
  } else {
    fname.setCustomValidity("");
  }
  
}

function validateEmail() {
  let email = document.getElementById('email');
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(email.value)) {
      email.setCustomValidity("Please enter a valid email address");
  }else {
    email.setCustomValidity("");
  }
  
}


window.addEventListener("load", function() {
  let regForm = document.forms.regForm;
  let model = regForm.elements.model;

  model.focus()
});