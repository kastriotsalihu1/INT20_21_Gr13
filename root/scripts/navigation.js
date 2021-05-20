$("#mask").css({
  "background-color": "var(--primarycolor)",
  "z-index": "99",
  position: "absolute",
  top: "0px",
  width: "100%",
  height: "100%",
});

let notificationValue = 0; 
const currentPagePath = $(location).attr("pathname").split("/");
const currentPage = currentPagePath[currentPagePath.length - 1];

$(window).on("load", function () {
  $("#mask").fadeOut(600, "linear");

  waitForElementToDisplay(
    `a[href="${currentPage}"] i`,
    () => $(`a[href="${currentPage}"]`).children("i").addClass("activePage"),
    300,
    9000
  );

  // keep track of what page is open using the navbar (sidebar)
  $(".nav-icons a").on("click", function (event) {
    let destination = $(this).attr("href");
    if (destination === currentPage) {
      event.preventDefault();
    }
  });
  // $("#notification").on("click", function () {
  //   notificationCount--;
  //   $("#notification").attr("data-badge", notificationCount);
  // })
});

