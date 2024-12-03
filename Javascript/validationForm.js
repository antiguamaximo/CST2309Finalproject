function validatePassword() {

  var password = document.regForm.password.value;
  var cpassword = document.getElementById("cpassword").value;

  var hasUpperCase = /[A-Z]/.test(password);
  var hasLowerCase = /[a-z]/.test(password);
  var hasDigits = /\d/.test(password);
  var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  var minLength = 10;

  if (password.length < minLength){
    alert("Password must be at least "+ minLength+" characters long.");
    return false;
  }

  if (!hasDigits || !hasLowerCase || !hasSpecialChars || !hasUpperCase) {
    alert("Password must have at least one digit, a lower and upper case letter, and a special character");
    return false;
  }

  if (password != confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;

}

function validateName() {
  var fname = document.getElementById('fname').value;
  var fnameRegex = /^[a-zA-Z\s]+$/; 

  if (fname === "") {
      alert("Name cannot be empty.");
      return false;
  }

  if (!fnameRegex.test(fname)) {
      alert("Name can only contain letters and spaces.");
      return false;
  }
  return true;
}

function validateEmail() {

  var email = document.getElementById('email').value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;

  }
  return true;
}


function validateRegForm() {
  if (!validatePassword() || validateName() ||  validateEmail()) {
      return false;
  }
  alert("Registration complete!");
  return true;
} 

function changeImage() {
    document.getElementById('myimage').src = "compman.gif";
}