function msg(){  
    alert("Welcome to the main page");  
   }  
   


$(function() {0
    $( '.sidebar' ).on( 'click', function() {
          $( this ).parent().find( '.active' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
    });
});