let notes = [];

function renderNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const noteItem = document.createElement('li');
        noteItem.textContent = note;
        notesList.appendChild(noteItem);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const noteInput = document.getElementById('note-input');
    const newNote = noteInput.value.trim();

    if (newNote !== '') {
        notes.push(newNote);
        noteInput.value = '';
        renderNotes();
    }
}

document.getElementById('note-form').addEventListener('submit', handleFormSubmit);
