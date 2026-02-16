let seconds = 0;
let interval = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.textContent =
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

startBtn.addEventListener("click", () => {
    if (interval) return; // prevent multiple intervals

    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateDisplay();
});
