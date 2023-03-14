$(document).ready(function () {
  var preloader = $("#preloader");

  $(window).on("load", function () {
    preloader.css("display", "none");
  });
});
