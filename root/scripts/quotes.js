$(document).ready(function () {
  $(".back h2").html(quotes[parseInt(Math.random() * quotes.length)]);
});

$("#quotes").on("click", function () {
  $("#quotescard").toggleClass("flipped");
});
