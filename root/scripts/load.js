$.get("application_header.html", function(data){
    $("#header").replaceWith(data);
});

$.get("application_sidebar.html", function(data){
    $("#sidebar").replaceWith(data);
});
