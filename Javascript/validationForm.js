function validatePassword() {

  var password = document.regForm.password.value;
  var cPassword = document.getElementById("cPassword").value;

  var hasUpperCase = /[A-Z]/.test(password);
  var hasLowerCase = /[a-z]/.test(password);
  var hasDigits = /\d/.test(password);
  var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  var minLength = 10;

  if (password.length < minLength){
    alert("Password must be at least "+ minLength+" characters long.");
    return false;
  } else if(!hasDigits || !hasLowerCase || !hasSpecialChars || !hasUpperCase) {
    alert("Password must have at least one digit, a lower and upper case letter, and a special character");
    return false;
  } else if (password != cPassword) {
    alert("Passwords do not match");
    return false;
  } else 
  {
    return true;
  }


}

function validateName() {
  var fname = document.getElementById('fname').value;
  var fnameRegex = /^[a-zA-Z\s]+$/; 

  if (fname === "") {
      alert("Name cannot be empty.");
      return false;
  } else if (!fnameRegex.test(fname)) {
      alert("Name can only contain letters and spaces.");
      return false;
  } else {return true;}
  
}

function validateEmail() {

  var email = document.getElementById('email').value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;

  } else {
      return true;
  }
  
}


function validateRegForm() {
  if (!validatePassword() || validateName() ||  validateEmail()) {
      return false;
  }else {
    alert("Registration complete!");
    return true;
  }

}