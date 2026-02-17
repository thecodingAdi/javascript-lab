function updateClock() {

    // 1. Get current date & time
    let now = new Date();

    // 2. Extract hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 3. Add leading zero  
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // 4. Blinking colon logic
    let separator = (seconds % 2 === 0) ? ":" : " ";

    // 5. Combine into HH:MM:SS format
    let currentTime = hours + separator + minutes + separator + seconds;

    // 6. Display time
    document.getElementById("clock").innerText = currentTime;

    // 7. Live Date
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let today = now.toLocaleDateString(undefined, options);
    document.getElementById("date").innerText = today;
}

 
let body = document.body;
let toggleBtn = document.getElementById("toggleBtn");

body.classList.add("dark");

toggleBtn.innerText = "Switch to Light Mode";

toggleBtn.addEventListener("click", function () {

    body.classList.toggle("dark");
    body.classList.toggle("light");

    if (body.classList.contains("dark")) {
        toggleBtn.innerText = " Light Mode";
    } else {
        toggleBtn.innerText = "  Dark Mode";
    }

});



// Run every second
setInterval(updateClock, 1000);

// Run once immediately
updateClock();
