export default class NotesController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.displayNotes(this.model.getNotes());

        this.view.noteForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const note = {
                name: this.view.noteName.value,
                content: this.view.noteContent.value
            };

            if (note.name !== '' && note.content !== '') {
                if (this.model.currentNoteIndex === null) {
                    this.model.addNote(note);
                } else {
                    this.model.updateNote(note, this.model.currentNoteIndex);
                }

                this.view.clearForm();
                this.view.setFormMode('add');
                this.view.displayNotes(this.model.getNotes());
                this.attachNoteListeners();
            }
        });

        this.view.addNoteBtn.addEventListener('click', () => {
            this.view.clearForm();
            this.view.setFormMode('add');
            this.model.currentNoteIndex = null;
        });

        this.view.cancelBtn.addEventListener('click', () => {
            this.view.clearForm();
            this.view.setFormMode('add');
            this.model.currentNoteIndex = null;
        })

        this.attachNoteListeners();
    }

    attachNoteListeners() {
        const noteItems = document.querySelectorAll('.note-item');
        noteItems.forEach((noteItem, index) => {
            noteItem.addEventListener('click', () => {
                const note = this.model.getNotes()[index];
                this.model.currentNoteIndex = index;
                this.view.noteName.value = note.name;
                this.view.noteContent.value = note.content;
                this.view.setFormMode('edit');
            });

            noteItem.querySelector('.delete-button').addEventListener('click', (event) => {
                event.stopPropagation();
                this.model.deleteNote(index);
                this.view.clearForm();
                this.view.setFormMode('add');
                this.view.displayNotes(this.model.getNotes());
                this.attachNoteListeners();
            });
        })
    }
}
