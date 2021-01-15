// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// // Create gradient
// var gradient = ctx.createLinearGradient(0, 0, 800, 0);
// gradient.addColorStop(0, "white");
// gradient.addColorStop(1, "grey");

// // Fill with gradient
// ctx.fillStyle = gradient;
// ctx.fillRect(10, 10, 1500, 100);

// ctx.beginPath();
// ctx.lineWidth = "1000";
// ctx.strokeStyle = "black"; 
// ctx.moveTo(0, 75);
// ctx.lineTo(250, 75);
// ctx.stroke(); 


var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "videos/vid1.mp4";
images[1] = "videos/vid2.mp4";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;