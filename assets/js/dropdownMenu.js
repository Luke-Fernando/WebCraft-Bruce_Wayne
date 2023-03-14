$(document).ready(function () {
  var windowWidth = $(window).width();
  const hamburgerBtnContainer = $(".hamburger-btn-container");
  const ul = $(".nav-links-list");
  const dropdownMenu = $(".nav-links-container");
  const hamBtn = $("#hamburger-btn");
  var btnClicked = false;

  function resizeNav() {
    if (windowWidth <= 768) {
      ul.addClass("sub-container");
      setToDefaultSmallScreen();
    } else {
      ul.removeClass("sub-container");
      setToDefaultBigScreen();
    }
  }

  function setToDefaultBigScreen() {
    dropdownMenu.show();
    btnClicked = false;
  }

  function setToDefaultSmallScreen() {
    dropdownMenu.hide();
    hamBtn.removeClass("fa-xmark").addClass("fa-bars");
  }

  resizeNav();

  $(window).resize(function () {
    windowWidth = $(window).width();
    resizeNav();
  });

  hamBtn.click(function () {
    dropdownMenu.slideToggle();
  });

  hamburgerBtnContainer.click(function () {
    if (btnClicked == false) {
      btnClicked = true;
      hamBtn.removeClass("fa-bars").addClass("fa-xmark");
    } else {
      btnClicked = false;
      hamBtn.removeClass("fa-xmark").addClass("fa-bars");
    }
  });
});
