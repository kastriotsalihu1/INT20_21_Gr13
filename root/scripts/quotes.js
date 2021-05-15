import { getMotivationalQuote } from "./services/motivationService.js";

$(document).ready(function () {

  getMotivationalQuote()
    .then(response => {
      $(".back h2").html(response);
    })
    .catch(err => console.log(err))
});

$("#quotes").on("click", function () {
  $("#quotescard").toggleClass("flipped");
  if ($("#quotescard").hasClass("flipped")) {
    getMotivationalQuote()
      .then(response => {
        $(".back h2").html(response)
      })
      .catch(err => console.log(err))
  }

});
