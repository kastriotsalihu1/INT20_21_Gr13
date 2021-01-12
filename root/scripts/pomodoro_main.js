var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('work_minutes');
var ws = document.getElementById('work_seconds');

var bm = document.getElementById('break_minutes');
var bs = document.getElementById('break_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer1, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer1(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
        
        if (document.getElementById('counter').innerText % 4 == 0) {
            console.log("nita");
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
function stopInterval(){
    clearInterval(startTimer);
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
  var button = document.getElementById("btn");
  
  
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
  