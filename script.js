function valid() {
  var RE_NAME = /^[A-Za-z]+(\s[A-Za-z]+)+$/;
  var RE_EMAIL = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
  var RE_CONTACT = /^(\d{10,11})$/;
  var RE_MSG = /^[\w\s]+$/;

  var name = document.getElementById("nm").value;
  if (name === "") {
    alert("Name cannot be blank");
    return false;
  }
  if (!RE_NAME.test(name)) {
    alert("Name must be a combination of first and last name");
    return false;
  }

  var email = document.getElementById("em").value;
  if (email === "") {
    alert("Email cannot be blank");
    return false;
  }
  if (!RE_EMAIL.test(email)) {
    alert("Email should have proper validation");
    return false;
  }

  var contact = document.getElementById("ct").value;
  if (contact === "") {
    alert("Contact cannot be blank");
    return false;
  }
  if (!RE_CONTACT.test(contact)) {
    alert("Contact must be a 10 or 11 digit number");
    return false;
  }

  var msg = document.getElementById("msg").value;
  if (msg === "") {
    alert("Message cannot be blank");
    return false;
  }
  if (!RE_MSG.test(msg)) {
    alert("Message must be a combination of alphabets and numbers");
    return false;
  }

  return true;
}
