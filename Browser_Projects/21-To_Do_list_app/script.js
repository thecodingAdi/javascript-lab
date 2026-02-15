// ===============================
// Load Saved Tasks or Empty Array
// ===============================
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===============================
// Select DOM Elements
// ===============================
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ===============================
// Save Tasks to localStorage
// ===============================
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===============================
// Update Category Counters
// ===============================
function updateCounters() {
    document.getElementById("healthCount").textContent =
        tasks.filter(t => t.category === "Health").length;

    document.getElementById("workCount").textContent =
        tasks.filter(t => t.category === "Work").length;

    document.getElementById("mentalCount").textContent =
        tasks.filter(t => t.category === "Mental").length;

    document.getElementById("othersCount").textContent =
        tasks.filter(t => t.category === "Others").length;
}

// ===============================
// Render Tasks to Screen
// ===============================
function renderTasks() {

    // Sort so incomplete tasks stay on top
    tasks.sort((a, b) => a.completed - b.completed);

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        // Left side (checkbox + text)
        const leftDiv = document.createElement("div");
        leftDiv.style.display = "flex";
        leftDiv.style.alignItems = "center";
        leftDiv.style.gap = "10px";

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        // Task Text
        const span = document.createElement("span");
        span.textContent = `${task.title} (${task.category})`;

        if (task.completed) {
            span.classList.add("completed");
            li.style.opacity = "0.6";
        }

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    updateCounters();
}

// ===============================
// Add Task
// ===============================
function addTask() {

    const title = taskInput.value.trim();
    const category = categorySelect.value;

    if (title === "") return;

    tasks.push({
        title: title,
        category: category,
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    renderTasks();
}

// ===============================
// Event Listeners
// ===============================
addBtn.addEventListener("click", addTask);

// Enter key support
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Initial render
renderTasks();

const viewBtn = document.getElementById("viewBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("taskPopup");
const overlay = document.getElementById("overlay");

viewBtn.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

function closePopup() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
}

