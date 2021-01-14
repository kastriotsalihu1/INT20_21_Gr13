const treePaths = [
  "images/trees/TreeFlat_1.png",
  "images/trees/TreeFlat_2.png",
  "images/trees/TreeFlat_3.png",
  "images/trees/TreeFlat_4.png",
  "images/trees/TreeFlat_5.png",
  "images/trees/TreeFlat_6.png",
  "images/trees/TreeFlat_7.png",
  "images/trees/TreeFlat_8.png",
];
var treeImages = [];

for (let i = 0; i < 8; i++) {
  treeImages.push(getImage(treePaths[i]));
}
// console.log(treePaths);
// console.log(treeImages);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
fitToContainer(canvas);

var xCoordinate = [];
var yCoordinate = [];
let canvasWidth = canvas.width,
  canvasHeight = canvas.height,
  resizingFactor = 1,
  imageH = 56,
  imageW = 40;

scaleCanvas(ctx, 1.2);
for (let i = 0; i < canvasWidth / imageW; i += 1) xCoordinate[i] = i * imageW;
for (let i = 0; i < canvasHeight / imageH; i += 1) yCoordinate[i] = i * imageH;
console.log(canvasWidth);
if (canvasHeight % imageH != 0) yCoordinate.pop();

xCoordinate = shuffle(xCoordinate);
yCoordinate = shuffle(yCoordinate);

console.log(xCoordinate, yCoordinate);

var treeIndex = 0;

function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

function getImage(src) {
  let image = new Image();
  image.src = src;
  return image;
}
function fitToContainer(canvas) {
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
function scaleCanvas(sSize) {
  ctx.scale(sSize, sSize, canvas.width / 2, canvas.height / 2);
}
