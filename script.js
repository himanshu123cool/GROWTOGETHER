$(document).ready(function () {
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
});

$(document).ready(function () {
  $("#close").click(function () {
    $("#close").hide(300);
    $("#open").show(300);
    $("#sidebar").css({ width: "0%" });
    $(".side_menu_list").css({ visibility: "hidden" });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if (window.scrollY > 250) {
      $("#wrapper").css({ backgroundColor: "var(--navscroll-color)" });
    } else {
      $("#wrapper").css({ backgroundColor: "var(--dark-color)" });
    }
  });
});

window.addEventListener("scroll", () => {
  let _rightAbout = document.querySelector(".right_about");
  let _aboutload = _rightAbout.getBoundingClientRect().top;
  let screenPositon = window.innerHeight;
  if (_aboutload < screenPositon) {
    _rightAbout.classList.add("active");
  } else {
    _rightAbout.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let _chooseRight = document.querySelector(".why_choose_us_right");
  let _chooseLeft = document.querySelector(".why_choose_us_left");
  let _leftload = _chooseLeft.getBoundingClientRect().top;
  let _rightload = _chooseRight.getBoundingClientRect().top;
  let _screenposition = window.innerHeight;
  if (_rightload < _screenposition && _leftload < _screenposition) {
    _chooseRight.classList.add("active");
    _chooseLeft.classList.add("active");
  } else {
    _chooseRight.classList.remove("active");
    _chooseLeft.classList.remove("active");
  }
});
