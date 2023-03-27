$(document).ready(function () {
  const filterBtn = $(".portfolio-filter-btn");
  const portfolioPic = $(".porfolio-bucket-pic-container");
  let clickedVal = "all";
  let classNames = [];

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

  filterPortfolio();
});
