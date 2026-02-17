let milliseconds = 0;   
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let isRunning = false;
let lapCounter = 1;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapList = document.getElementById("laps");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

     
    let ms = milliseconds < 100
        ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds)
        : milliseconds;

    display.textContent = `${h}:${m}:${s}:${ms}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {

        milliseconds += 10;    

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 10);    

    updateButtons();
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    updateButtons();
}

function resetTimer() {
    clearInterval(timer);

    milliseconds = 0;    
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;

    display.textContent = "00:00:00:000";
    lapList.innerHTML = "";

    isRunning = false;
    updateButtons();
}

document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {
        event.preventDefault();

        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    }

    else if (event.code === "KeyL") {
        addLap();
    }

    else if (event.code === "KeyR") {
        resetTimer();
    }

});

function addLap() {
    if (!isRunning) return;

    const li = document.createElement("li");
    li.textContent = `Lap ${lapCounter}: ${display.textContent}`;
    lapList.appendChild(li);
    lapCounter++;
}

function updateButtons() {
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;
    lapBtn.disabled = !isRunning;
    resetBtn.disabled = isRunning;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);
