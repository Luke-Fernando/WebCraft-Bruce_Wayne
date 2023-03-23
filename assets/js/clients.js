$(document).ready(function () {
  console.log("clients ready");

  const firstClient = $(".client-1");
  const secondClient = $(".client-2");
  const thirdClient = $(".client-3");
  const firstSelector = $(".first-client-selector");
  const secondSelector = $(".second-client-selector");
  const thirdSelector = $(".third-client-selector");
  const selectors = $(".client-selector");

  // function selectClient(selector, firstMargin, secondMargin, thirdMargin) {
  //   selector.click(function () {
  //     firstClient.css("margin-left", firstMargin);
  //     secondClient.css("margin-left", secondMargin);
  //     thirdClient.css("margin-left", thirdMargin);
  //     $(this).children().addClass("active-client");
  //     selectors.not(this).each(function () {
  //       $(this).children().removeClass("active-client");
  //     });
  //   });
  //   console.log("selector");
  // }

  // selectClient(firstSelector, "0", "0", "0");
  // selectClient(secondSelector, "-100%", "0", "0");
  // selectClient(thirdSelector, "-100%", "-100%", "0");

  function selectClient(selector, firstMargin) {
    selector.click(function () {
      firstClient.css("margin-left", firstMargin);
      // secondClient.css("margin-left", secondMargin);
      // thirdClient.css("margin-left", thirdMargin);
      $(this).children().addClass("active-client");
      selectors.not(this).each(function () {
        $(this).children().removeClass("active-client");
      });
    });
    console.log("selector");
  }

  selectClient(firstSelector, "0");
  selectClient(secondSelector, "-100%");
  selectClient(thirdSelector, "-200%");
});
