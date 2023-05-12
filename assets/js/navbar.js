$(document).ready(function () {
  var scrollHeight = 0;
  const navbar = $(".navbar");

  $(window).scroll(function () {
    scrollHeight = $(window).scrollTop();
    // console.log(scrollHeight);

    if (scrollHeight > 120) {
      navbar.css("background-color", "#13141a");
    } else {
      navbar.css("background-color", "transparent");
    }
  });
});
