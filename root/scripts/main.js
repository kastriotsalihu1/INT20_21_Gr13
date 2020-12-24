const pageNames = {
    home: "home-content",
    cursor: "cursor-content",
    heart: "heart-content",
    university: "university-content",
    envelope: "envelope-content",
    folder: "folder-content",
    laptop: "laptop-content",
    map: "map-content",
    chart: "chart-content",
    hourglass: "hourglass-content",
    id: "id-content",
    newspaper: "newspaper-content",
}
var toggleDuration = 800;
var activePageName;
const pages = document.getElementsByClassName("side-button");

$(function() {
    $('.side-button').on('click', function() {
        let previousButton = $(this).parent().find('.active');
        let previousPage;

        if (previousButton.attr("data-value") != $(this).attr("data-value")) {

            previousButton.removeClass('active');
            $(this).addClass('active');

            previousPage = previousButton.attr("data-value");
            activePageName = $(this).attr("data-value");

            $(`.${pageNames[previousPage]}`).toggle(toggleDuration);
            $(`.${pageNames[activePageName]}`).toggle(toggleDuration);

            $(`.${pageNames[activePageName]} .card-1`).css('background-color', `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`);
            console.log("Active page name:", pageNames[activePageName]);
        } else {
            console.log("already there");
        }
    });
});