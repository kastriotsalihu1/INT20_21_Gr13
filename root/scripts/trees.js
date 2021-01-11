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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var button = document.getElementById("btn");
const image = document.getElementById("tree_img");

var xCoordinate = [];
var yCoordinate = [];
let canvasWidth = 500,
  canvasHeight = 200,
  resizingFactor = 1,
  imageH = 40,
  imageW = 40;
for (let i = 0; i < canvasWidth / imageW; i += 1) xCoordinate[i] = i * imageW;
for (let i = 0; i < canvasHeight / imageW; i += 1) yCoordinate[i] = i * imageH;

xCoordinate = shuffle(xCoordinate);
yCoordinate = shuffle(yCoordinate);

console.log(xCoordinate, yCoordinate);

ctx.fillStyle = "rgb(29, 18, 16)";
var treeIndex = 0;
button.addEventListener("click", function () {

  let image = treeImages[treeIndex % treeImages.length];
  ctx.drawImage(
   image,
    xCoordinate[treeIndex % xCoordinate.length],
    yCoordinate[treeIndex % yCoordinate.length],
    image.width/resizingFactor,
    image.height/resizingFactor
  );
  treeIndex++;
  if (treeIndex > (canvasHeight / imageH) * (canvasWidth / imageW)) {
    console.log("ERROR you too good!");
  }
});

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

function scaleIt(source, scaleFactor) {
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  var w = source.width * scaleFactor;
  var h = source.height * scaleFactor;
  c.width = w;
  c.height = h;
  ctx.drawImage(source, 0, 0, w, h);
  return c;
}

function start() {}
