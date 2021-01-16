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

for (let i = 0; i < treePaths.length; i++) {
  treeImages.push(getImage(treePaths[i]));
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
fitToContainer(canvas);

var xCoordinate = [];
var yCoordinate = [];
let canvasWidth = canvas.width,
  canvasHeight = canvas.height,
  imageH = 56,
  imageW = 40;

for (let i = 0; i < canvasWidth / imageW; i += 1) xCoordinate[i] = i * imageW;
for (let i = 0; i < canvasHeight / imageH; i += 1) yCoordinate[i] = i * imageH;

if (canvasHeight % imageH != 0) yCoordinate.pop();
if (canvasWidth % imageW != 0) xCoordinate.pop();

xCoordinate = shuffle(xCoordinate);
yCoordinate = shuffle(yCoordinate);

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

var positionIndex = 0;
function plantTree(number = 1) {
  for (let i = 0; i < number; i++) {
    if (positionIndex >= xCoordinate.length * yCoordinate.length) {
      console.log("You have planted the whole garden!");
      return;
    }
    let image = treeImages[parseInt(Math.random() * treeImages.length)];

    ctx.drawImage(
      image,
      xCoordinate[positionIndex % xCoordinate.length],
      yCoordinate[positionIndex % yCoordinate.length],
      image.width,
      image.height
    );
    positionIndex++;
  }
}
