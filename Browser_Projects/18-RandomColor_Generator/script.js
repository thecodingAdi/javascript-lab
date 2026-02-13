const button = document.getElementById("btn");
const colorText = document.getElementById("colorCode");
const rgbText = document.getElementById("rgbCode");
const copyBtn = document.getElementById("copyBtn");

button.addEventListener("click", function() {

    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    // Convert to HEX
    const hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();

    document.body.style.backgroundColor = rgbColor;

    colorText.textContent = hexColor;
    rgbText.textContent = rgbColor;

    // Smart text color (auto black/white)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    document.body.style.color = brightness > 125 ? "black" : "white";
});

copyBtn.addEventListener("click", function() {
    const textArea = document.createElement("textarea");
    textArea.value = colorText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Color Copied!");
});
