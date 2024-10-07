export default class NotesView {
    constructor() {
        this.notesList = document.getElementById('notes-list');
        this.noteForm = document.getElementById('note-form');
        this.noteName = document.getElementById('note-name-input');
        this.noteContent = document.getElementById('note-content-input');
        this.mainHeader = document.getElementById('main-content-header');
        this.submitBtn = document.getElementById('submit-button');
        this.cancelBtn = document.getElementById('cancel-button');
        this.addNoteBtn = document.getElementById('add-note-btn');
    }

    displayNotes(notes) {
        this.notesList.innerHTML = '';

        notes.forEach((note, index) => {
            const noteItem = document.createElement('li');
            noteItem.classList.add('note-item');

            const noteName = document.createElement('strong');
            noteName.textContent = note.name;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('delete-button');

            noteItem.appendChild(noteName);
            noteItem.appendChild(deleteButton);
            this.notesList.appendChild(noteItem);
        });
    }

    clearForm() {
        this.noteName.value = '';
        this.noteContent.value = '';
    }
}
