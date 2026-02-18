// ===============================
// SELECT ELEMENTS
// ===============================
const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");
const timerDisplay = document.getElementById("timer");
const restartBtn = document.getElementById("restart");

// ===============================
// VARIABLES
// ===============================
const text = "JavaScript is powerful and versatile. Practice daily to improve your coding skills.";

let timeLeft = 60;
let timer = null;
let isTyping = false;

// ===============================
// SHOW PARAGRAPH
// ===============================
paragraph.textContent = text;

// ===============================
// START TIMER FUNCTION
// ===============================
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            input.disabled = true;
            alert("Time's up!");
        }
    }, 1000);
}

// ===============================
// INPUT EVENT
// ===============================
input.addEventListener("input", () => {

    // Start timer on first type
    if (!isTyping) {
        isTyping = true;
        startTimer();
    }

    let typedText = input.value;

    // If user completes text before time
    if (typedText === text) {
        clearInterval(timer);
        alert("You completed the test!");
        input.disabled = true;
    }
});

// ===============================
// RESTART BUTTON
// ===============================
restartBtn.addEventListener("click", () => {
    clearInterval(timer);

    timeLeft = 60;
    timerDisplay.textContent = timeLeft;

    input.value = "";
    input.disabled = false;

    isTyping = false;
});
