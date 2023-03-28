$(document).ready(function () {
  const filterBtn = $(".portfolio-filter-btn");
  const portfolioPic = $(".porfolio-bucket-pic-container");
  let clickedVal = "all";
  let classNames = [];

  const detailsContainer = $(".portfolio-bucket-details-container");

  function filterPortfolio() {
    filterBtn.click(function () {
      if ($(this).val() !== clickedVal) {
        clickedVal = $(this).val();
        console.log(clickedVal);
        portfolioPic.hide();
        $(this).addClass("active-portfolio");
        filterBtn.not(this).removeClass("active-portfolio");
        portfolioPic.each(function () {
          classNames = $(this).attr("class").split(" ");
          if ($.inArray(clickedVal, classNames) !== -1) {
            $(this).show(500);
          }
        });
      }
    });
  }

  function showDetails() {
    portfolioPic.hover(function () {
      $(this).children(":nth-child(2)").fadeToggle(100);
    });
  }

  filterPortfolio();
  // showDetails();
});
