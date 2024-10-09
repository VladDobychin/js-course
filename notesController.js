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
                this.view.displayNotes(this.model.getNotes())
            }
        });
    }
}
