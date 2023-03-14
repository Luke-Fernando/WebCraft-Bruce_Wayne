$(document).ready(function () {
  var heroImg = $(".hero-img");
  var windowHeight = $(window).height();

  //   console.log(windowHeight);

  $(window).scroll(function () {
    if ($(this).scrollTop() <= windowHeight) {
      heroImg.css("background-position-y", ($(this).scrollTop() / 2) * -1);
    }
    // console.log($(this).scrollTop());
    // console.log(($(this).scrollTop() / 2) * -1);
  });

  $(window).resize(function () {
    windowHeight = $(window).height();
    // console.log(windowHeight);
  });
});
