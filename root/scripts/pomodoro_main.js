var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("work_minutes");
var ws = document.getElementById("work_seconds");

var bm = document.getElementById("break_minutes");
var bs = document.getElementById("break_seconds");

//store a reference to a timer variable
var startTimer;
var pomodoroDuration = 25;
var pomodoroBreaktime = 5;
var pomodoroCycles = 1;
var toggle = true;

window.onload = function () {
  configurePomodoro(pomodoroDuration, pomodoroBreaktime);
};

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer1, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wm.innerText = pomodoroDuration;
  ws.innerText = "00";

  bm.innerText = pomodoroBreaktime;
  bs.innerText = "00";

  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

//Start Timer Function
function timer1() {
  //Work Timer Countdown
  if (ws.innerText != 0) {
    if (!toggle) {
      $("#break").toggleClass("hidden");
      $("#timer").toggleClass("hidden");
      $("#pomodoro > .cardtitle").html("Pomodoro");
      console.log("asd");
      toggle = true;
    }
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }

  //Break Timer Countdown
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (toggle) {
      $("#break").toggleClass("hidden");
      $("#timer").toggleClass("hidden");
      $("#pomodoro > .cardtitle").html("Pomodoro - have a rest!");
      toggle = false;
    }


    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = pomodoroDuration;
    ws.innerText = "00";

    bm.innerText = pomodoroBreaktime;
    bs.innerText = "00";

    document.getElementById("cycle").innerText++;

    if (document.getElementById("cycle").innerText % pomodoroCycles == 0) {
      console.log(treeIndex % yCoordinate.length);
      let image = treeImages[treeIndex % treeImages.length];
      ctx.drawImage(
        image,
        xCoordinate[treeIndex % xCoordinate.length],
        yCoordinate[treeIndex % yCoordinate.length],
        image.width,
        image.height
      );
      treeIndex++;
    }
  }
}

//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}

function configurePomodoro(tDuration, tBreak) {
  pomodoroDuration = tDuration;
  pomodoroBreaktime = tBreak;
  wm.innerText = tDuration;
  bm.innerText = tBreak;
}

//JS FOR THE TREES' PART
//JS FOR THE TREES' PART
//JS FOR THE TREES' PART
//JS FOR THE TREES' PART
//JS FOR THE TREES' PART
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
var button = document.getElementById("btn");

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
