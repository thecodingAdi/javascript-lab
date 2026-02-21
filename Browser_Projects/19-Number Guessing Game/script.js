let secretNumber;
let attempts;
let gameOver;

const guessInput = document.getElementById("guess");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const enterBtn = document.getElementById("enterBtn");
const resetBtn = document.getElementById("resetBtn");
const hintBtn = document.getElementById("hintBtn");

enterBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
hintBtn.addEventListener("click", giveHint);

initializeGame();

function initializeGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    gameOver = false;

    attemptsDisplay.textContent = attempts;
    message.textContent = "";
    guessInput.value = "";

    guessInput.disabled = false;
    enterBtn.disabled = false;
    hintBtn.disabled = false;
}

guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkGuess();
});


/* ===========================
   HINT SYSTEM
=========================== */

function generateHints() {
    const hints = [];

    // Even / Odd
    hints.push(secretNumber % 2 === 0 
        ? "Hint: The number is EVEN"
        : "Hint: The number is ODD"
    );

    // Range Hint
    if (secretNumber <= 25) hints.push("Hint: Between 1 - 25");
    else if (secretNumber <= 50) hints.push("Hint: Between 26 - 50");
    else if (secretNumber <= 75) hints.push("Hint: Between 51 - 75");
    else hints.push("Hint: Between 76 - 100");

    // Divisibility Hint
    if (secretNumber % 3 === 0)
        hints.push("Hint: Multiple of 3");

    if (secretNumber % 5 === 0)
        hints.push("Hint: Multiple of 5");

    // Close to 50 hint
    if (Math.abs(secretNumber - 50) <= 10)
        hints.push("Hint: Close to 50");

    return hints;
}

function giveHint() {
    if (gameOver) return;

    if (attempts <= 1) {
        message.textContent = "Not enough attempts left for hint!";
        return;
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    const hints = generateHints();
    const randomHint = hints[Math.floor(Math.random() * hints.length)];

    message.textContent = randomHint;

    hintBtn.disabled = true;
}

/* ===========================
   GUESS LOGIC
=========================== */

function checkGuess() {
    if (gameOver) return;

    const userGuess = Number(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Enter a valid number (1-100)";
        return;
    }

    if (userGuess === secretNumber) {
        message.innerHTML = "ACCESS GRANTED 🎉<br>Click RESET";
        endGame();
        return;
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    if (attempts === 0) {
        message.textContent = "SYSTEM LOCKED ❌ Number was " + secretNumber;
        endGame();
        return;
    }

    message.textContent =
        userGuess > secretNumber
            ? "Too High ⚠"
            : "Too Low ⚠";

    guessInput.value = "";
}

function endGame() {
    gameOver = true;
    guessInput.disabled = true;
    enterBtn.disabled = true;
    hintBtn.disabled = true;
}

function resetGame() {
    initializeGame();
}
