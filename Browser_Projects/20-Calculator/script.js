// ===============================
// SELECT ELEMENTS
// ===============================
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

const historyBtn = document.getElementById("historyBtn");
const historyBox = document.getElementById("historyBox");
const historyList = document.getElementById("historyList");

// ===============================
// BUTTON CLICK INPUT
// ===============================
buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// ===============================
// CLEAR BUTTON
// ===============================
clearBtn.addEventListener("click", () => {
    display.value = "";
});

// ===============================
// EQUALS BUTTON
// ===============================
equalsBtn.addEventListener("click", calculate);

// ===============================
// KEYBOARD SUPPORT
// ===============================
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        display.value += key;
    }

    if (key === "Enter") calculate();

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        display.value = "";
    }
});

// ===============================
// CALCULATE FUNCTION
// ===============================
function calculate() {
    try {
        const expression = display.value;
        if (expression.trim() === "") return;

        const result = eval(expression);
        display.value = result;

        const li = document.createElement("li");
        li.textContent = `${expression} = ${result}`;
        historyList.prepend(li);

    } catch {
        display.value = "Error";
    }
}

// ===============================
// HISTORY TOGGLE (FLOATING BOX)
// ===============================
historyBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    historyBox.style.display =
        historyBox.style.display === "block" ? "none" : "block";
});

// Close history when clicking outside
document.addEventListener("click", (e) => {
    if (!historyBox.contains(e.target)) {
        historyBox.style.display = "none";
    }
});
