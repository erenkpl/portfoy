function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    if (name == "") {
      alert("Adınızı girin");
      return false;
    }
  }
  