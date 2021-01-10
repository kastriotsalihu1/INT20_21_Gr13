const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');
const image = document.getElementById('tree_img');

const tree={
w:50,
h:70,
x:20,
y:20,
speed:5,
dx:0,
dy:0

};

function drawTree(){
ctx.drawTree(image,  tree.x, tree.y, tree.w, tree.h);

}

function clear(){
ctx.clearRect(0,0,canvas.width,canvas.height)
}

function update(){
    clear();
    drawTree();

    requestAnimationFrame(update);
}

update();