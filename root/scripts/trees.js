const canvas = document.getElementById('canvas');
const image = document.getElementById('tree_img');
var addButton = document.getElementById('btn');


addButton.addEventListener('click', addTree);

function addTree(){
   canvas.appendChild(image);

}

