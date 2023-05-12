$(document).ready(function () {
  const proOne = $(".profession-1");
  const proContainer = $(".profession-container");
  var marTop = 0;
  const prosCount = proContainer.children().length;

  // console.log(prosCount);
  // console.log(-45 * (prosCount - 2));

  setInterval(function () {
    if (marTop >= -45 * (prosCount - 2)) {
      marTop = marTop - 45;
    } else {
      marTop = 0;
    }
    proOne.css("margin-top", marTop + "px");
  }, 2000);
});
