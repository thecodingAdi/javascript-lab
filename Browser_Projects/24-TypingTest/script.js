// ===============================
// Elements
// ===============================

const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

// ===============================
// Paragraph Text
// ===============================

const paragraphText = "JavaScript is a powerful language used to build interactive and dynamic websites. Practice daily to improve your logic and coding skills.";

// ===============================
// Variables
// ===============================

let timer = null;
let maxTime = 60;
let timeLeft = maxTime;
let correctChars = 0;
let isTyping = false;

// ===============================
// Initialize Paragraph
// ===============================

function loadParagraph() {
    paragraph.innerHTML = paragraphText
        .split("")
        .map(char => `<span>${char}</span>`)
        .join("");
}

loadParagraph();

// ===============================
// Start Timer
// ===============================

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.innerText = timeLeft;
            calculateResults();
        } else {
            clearInterval(timer);
            input.disabled = true;
        }
    }, 1000);
}

// ===============================
// Calculate WPM & Accuracy
// ===============================

function calculateResults() {
    let timeSpent = (maxTime - timeLeft) / 60;

    let wpm = timeSpent > 0 
        ? Math.round((correctChars / 5) / timeSpent) 
        : 0;

    let accuracy = input.value.length > 0
        ? Math.round((correctChars / input.value.length) * 100)
        : 0;

    wpmDisplay.innerText = wpm;
    accuracyDisplay.innerText = accuracy + "%";
}

// ===============================
// Typing Logic
// ===============================

input.addEventListener("input", () => {

    const characters = paragraph.querySelectorAll("span");
    const typedChars = input.value.split("");

    correctChars = 0;

    characters.forEach((char, index) => {
        if (typedChars[index] == null) {
            char.classList.remove("correct", "wrong");
        }
        else if (typedChars[index] === char.innerText) {
            char.classList.add("correct");
            char.classList.remove("wrong");
            correctChars++;
        }
        else {
            char.classList.add("wrong");
            char.classList.remove("correct");
        }
    });

    // Start timer on first key press
    if (!isTyping) {
        startTimer();
        isTyping = true;
    }

    calculateResults();
});

// ===============================
// Restart Function
// ===============================

function resetGame() {
    clearInterval(timer);
    timeLeft = maxTime;
    correctChars = 0;
    isTyping = false;

    input.value = "";
    input.disabled = false;

    timeDisplay.innerText = timeLeft;
    wpmDisplay.innerText = 0;
    accuracyDisplay.innerText = "0%";

    loadParagraph();
}

restartBtn.addEventListener("click", resetGame);
