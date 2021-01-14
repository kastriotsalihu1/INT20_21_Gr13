$('#location-button').click(function(){
        
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position);
          $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
            console.log(data);
          })
          var img = new Image();
          img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude 
          + "," + position.coords.longitude + "&zoom=14&size=400x300&sensor=false&key=AIzaSyCX8zzn0G2_b_aCEusEBbp7pYv9kbQKWhA";
          $('#output').html(img);
 
          


        });
        
    }
  });