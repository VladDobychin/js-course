import NoteItem from './NoteItem.js';

export default class NotesList {
    constructor(notes, handleNoteClick, handleNoteDelete) {
        this.notes = notes;
        this.handleNoteClick = handleNoteClick;
        this.handleNoteDelete = handleNoteDelete;
        this.noteItems = [];
    }

    init() {
        this.notesList = document.getElementById('notes-list');
        this.render()
    }

    render() {
        this.notesList.innerHTML = '';

        this.noteItems.forEach(noteItem => noteItem.destroy());
        this.noteItems = [];

        this.notes.forEach((note, index) => {
            const noteItem = new NoteItem(
                note,
                index,
                () => this.handleNoteClick(note, index),
                () => this.handleNoteDelete(index)
            );

            noteItem.init();
            noteItem.render(this.notesList);

            this.noteItems.push(noteItem);
        });
    }

    update(notes) {
        this.notes = notes;
        this.render();
    }
}
