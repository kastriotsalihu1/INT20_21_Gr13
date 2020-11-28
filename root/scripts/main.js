function msg(){  
    alert("Welcome to the main page");  
   }  
   


$(function() {
    $( 'nav .navigation-list li' ).on( 'click', function() {
          $( this ).parent().find( 'a.active' ).removeClass( 'active' );
          $( this ).children().addClass( 'active' );
    });
});