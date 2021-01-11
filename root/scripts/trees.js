const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('tree_img');
var Button = document.getElementById('btn');



Button.addEventListener('click', function(){
   ctx.fillRect(Math.random()*100,Math.random()*100,20,20)
}
   
   );



