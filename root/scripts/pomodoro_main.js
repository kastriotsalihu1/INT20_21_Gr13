var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("work_minutes");
var ws = document.getElementById("work_seconds");

var bm = document.getElementById("break_minutes");
var bs = document.getElementById("break_seconds");

//store a reference to a timer variable
var startTimer;
var pomodoroDuration = 0;
var pomodoroBreaktime = 0;
var pomodoroCycles = 3;
var toggle = true;

window.onload = function () {
  configurePomodoro(pomodoroDuration, pomodoroBreaktime);
};

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer1, 1000);
  } else {
    console.log("Timer is already running");
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
      plantTree();
    }
  }
}

function stopInterval() {
  clearInterval(startTimer);
}

function configurePomodoro(tDuration, tBreak) {
  pomodoroDuration = tDuration;
  pomodoroBreaktime = tBreak;
  wm.innerText = tDuration;
  bm.innerText = tBreak;
}