let notes = JSON.parse(localStorage.getItem("notes")) || [];

function getRandomColor() {
    const colors = [
        "#ffadad",
        "#ffd6a5",
        "#fdffb6",
        "#caffbf",
        "#9bf6ff",
        "#a0c4ff",
        "#bdb2ff",
        "#ffc6ff"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        const color = getRandomColor();

        container.innerHTML += `
            <div class="note" style="background:${color}">
                <button class="deleteBtn" onclick="deleteNote(${index})">✖</button>
                ${note}
            </div>
        `;
    });
}

function addNote() {
    const input = document.getElementById("noteInput");
    if (input.value.trim() === "") return;

    notes.push(input.value);
    saveNotes();
    displayNotes();
    input.value = "";
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

displayNotes();