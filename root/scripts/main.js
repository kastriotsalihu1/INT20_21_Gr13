function msg(){  
    alert("Welcome to the main page");  
   }  
   


$(function() {
    $( '.side-nav ul li' ).on( 'click', function() {
          $( this ).parent().find( '.active' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
    });
});