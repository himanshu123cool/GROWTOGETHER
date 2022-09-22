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

_portfolioImg = document.querySelectorAll(".portfolio-img");
_portfolioOverlay = document.querySelector(".portfolio-overlay");
_overlayImg = document.querySelector(".overlay-img");
_overlayClose = document.getElementById("overlay-close");

_portfolioImg.forEach((image) => {
  image.onclick = () => {
    _portfolioOverlay.style.visibility = "visible";
    _overlayImg.src = image.getAttribute("src");
    _overlayImg.alt = image.getAttribute("alt");
    _overlayImg.title = image.getAttribute("title");
  };
});

function overlay() {
  _portfolioOverlay.style.visibility = "hidden";
}
