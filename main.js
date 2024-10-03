let notes = [];

function loadNotesFromStorage() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        console.log('Notes found');
        notes = JSON.parse(savedNotes);
        renderNotes();
    }
}

function renderNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const noteItem = document.createElement('li');
        noteItem.textContent = note.name;
        notesList.appendChild(noteItem);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const noteName = document.getElementById('note-name-input');
    const noteContent = document.getElementById('note-content-input');
    const newNote = {
        name: noteName.value,
        content: noteContent.value
    };

    if (newNote.name !== '' && newNote.content !== '') {
        notes.push(newNote);

        localStorage.setItem('notes', JSON.stringify(notes));

        noteName.value = '';
        noteContent.value = '';
        renderNotes();
    }
}

document.getElementById('note-form').addEventListener('submit', handleFormSubmit);
document.addEventListener('DOMContentLoaded', loadNotesFromStorage);
