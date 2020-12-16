function msg() {
    alert("Welcome to the main page");
}



$(function() {
    $('.side-button').on('click', function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('.card-1').css('background-color', 'rgb(' + (Math.random() * 256) + ',' + (Math.random() * 256) + ',' + (Math.random() * 256) + ')');
    });
});