export default class NotesModel {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
        this.currentNoteIndex = null;
    }

    getNotes() {
        return this.notes;
    }

    addNote(note) {
        this.notes.push(note);
        this.saveNotes();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.saveNotes();
    }

    updateNote(note, index) {
        this.notes[index] = note;
        this.saveNotes();
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes))
    }
}
