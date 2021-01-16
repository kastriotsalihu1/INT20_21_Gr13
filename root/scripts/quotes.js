const quotes = ['"Knowing yourself is the beginning of all wisdom" - Aristotle',
 '“Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.” – Mark Twain',
 '“Success consists of going from failure to failure without loss of enthusiasm.” – Winston Churchill',
 ' “When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.” – Alexander Graham Bell',
 '“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” – Thomas A. Edison',
 '“If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.” – Nora Roberts',
 '“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.” – Christian D. Larson',
 '“There are far, far better things ahead than any we leave behind.” – C.S. Lewis'
];

$(document).ready(function () {
  $(".back h2").html(quotes[parseInt(Math.random() * quotes.length)]);
});

$("#quotes").on("click", function () {
  $("#quotescard").toggleClass("flipped");
});
