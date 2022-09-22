$("#open").click(function () {
  $("#close").show(300);
  $("#open").hide(300);
  var width = window.innerWidth > 0 ? window.innerWidth : window.screen;
  if (width >= 0 && width <= 319) {
    $("#sidebar").css({ width: "100%" });
    $(".side_menu_list").css({ visibility: "visible" });
  } else if (width >= 319 && width <= 480) {
    $("#sidebar").css({ width: "100%" });
    $(".side_menu_list").css({ visibility: "visible" });
  } else if (width >= 481 && width <= 768) {
    $("#sidebar").css({ width: "100%" });
    $(".side_menu_list").css({ visibility: "visible" });
  } else if (width >= 769 && width <= 1024) {
    $("#sidebar").css({ width: "50%" });
    $(".side_menu_list").css({ visibility: "visible" });
  } else {
    $("#sidebar").css({ width: "0" });
    $(".side_menu_list").css({ visibility: "hidden" });
  }
});

$("#close").click(function () {
  $("#close").hide(300);
  $("#open").show(300);
  $("#sidebar").css({ width: "0%" });
  $(".side_menu_list").css({ visibility: "hidden" });
});

$(window).scroll(function () {
  if (window.scrollY > 250) {
    $("#wrapper").css({ backgroundColor: "var(--navscroll-color)" });
  } else {
    $("#wrapper").css({ backgroundColor: "var(--dark-color)" });
  }
});

// form-validation

let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let subjectError = document.getElementById("subject-error");
let formError = document.getElementById("form-error");

function validateName() {
  let _name = document.getElementById("name").value;
  if (_name === "") {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (_name.length <= 3) {
    nameError.innerHTML = "Name is too short";
    return false;
  }
  if (_name.length > 30) {
    nameError.innerHTML = "Name is too long";
    return false;
  }
  if (!_name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<span class="success">Required Complete</span>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone.length === "") {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }
  phoneError.innerHTML = '<span class="success">Required Complete</span>';
  return true;
}

function validateEmail() {
  let _email = document.getElementById("email").value;

  if (_email.length === "") {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!_email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<span class="success">Required Complete</span>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("message").value;
  let required = 20;
  let left = required - message.length;

  if (left > 0) {
    subjectError.innerHTML = "more characters required";
    return false;
  }

  subjectError.innerHTML = '<span class="success">Required Complete</span>';
  return true;
}

function validateForm() {
  if (
    validateName() ||
    validateEmail() ||
    validatePhone() ||
    validateMessage()
  ) {
    formError.style.display = "block";
    formError.innerHTML = "Please fix error before submit";
    setTimeout(function () {
      formError.style.display = "none";
    }, 3000);
    return false;
  }
}
