const countText = document.getElementById("count");

let count = 0;
countText.textContent = count;

const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

incBtn.addEventListener("click", () => {
    count = count + 1;
    countText.textContent = count;
});
decBtn.addEventListener("click", () => {
    count = count - 1;
    countText.textContent = count;
});
resetBtn.addEventListener("click", () => {
    count = 0;
    countText.textContent = count;
});
