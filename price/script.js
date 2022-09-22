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

$(document).ready(function () {
  $(".price-content-box-annually").hide();

  $(".annual-btn").click(function () {
    $(".price-content-box-annually").show();
    $(".price-content-box-quarterly").hide();
    $(".annual-btn").addClass("tab-active");
    $(".quarter-btn").removeClass("tab-active");
  });

  $(".quarter-btn").click(function () {
    $(".price-content-box-annually").hide();
    $(".price-content-box-quarterly").show();
    $(".annual-btn").removeClass("tab-active");
    $(".quarter-btn").addClass("tab-active");
  });
});
