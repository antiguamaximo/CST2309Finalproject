function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 

  function changeImage() {
    document.getElementById('myimage').src = "compman.gif";
  }