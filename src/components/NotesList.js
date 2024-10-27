import NoteItem from './NoteItem.js';

export default class NotesList {
    constructor(props) {
        this.notes = props.notes;
        this.handleNoteClick = props.handleNoteClick;
        this.handleNoteDelete = props.handleNoteDelete;
    }

    init() {
        this.notesList = document.getElementById('notes-list');
        this.render()
    }

    render() {
        this.notesList.innerHTML = '';

        this.notes.forEach((note, index) => {
            const noteItem = new NoteItem({
                note: note,
                index: index,
                handleNoteClick: () => this.handleNoteClick(note, index),
                handleNoteDelete: () => this.handleNoteDelete(index)
            });

            noteItem.init();
            noteItem.renderNoteInParent(this.notesList);
        });
    }

    update(notes) {
        this.notes = notes;
        this.render();
    }
}
