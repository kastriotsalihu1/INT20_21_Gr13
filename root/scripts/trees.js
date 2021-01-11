const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('tree_img');
var Button = document.getElementById('btn');

//onClick of btn add a rect

ctx.fillStyle = "rgb(29, 18, 16)";

Button.addEventListener('click', function(){
   ctx.fillRect(Math.random()*499,Math.random()*199,20,20)
}
   
   );



//Button.addEventListener('dblclick',function(){

//ctx.drawImage(image);

//});