const toggle = document.getElementById("themeToggle");
const body = document.body;

//   Detect saved theme
let savedTheme = localStorage.getItem("theme");

//   Detect system theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
    body.classList.toggle("dark", savedTheme === "dark");
    toggle.checked = savedTheme === "dark";
} else if (prefersDark) {
    body.classList.add("dark");
    toggle.checked = true;
}

//  Toggle event
toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    let theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});