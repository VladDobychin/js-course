export default class NoteItem {
    constructor(props) {
        this.note = props.note;
        this.index = props.index;
        this.handleNoteClick = props.handleNoteClick;
        this.handleNoteDelete = props.handleNoteDelete;
        this.noteItem = null;
        this.deleteButton = null;
    }

    init() {
        this.noteItem = document.createElement('li');
        this.noteItem.classList.add('note-item');

        const noteName = document.createElement('strong');
        noteName.textContent = this.note.name;

        this.deleteButton = document.createElement('button');
        this.deleteButton.textContent = 'X';
        this.deleteButton.classList.add('delete-button');

        this.noteItem.addEventListener('click', this.handleNoteClick);
        this.deleteButton.addEventListener('click', this.#handleDelete.bind(this));

        this.noteItem.appendChild(noteName);
        this.noteItem.appendChild(this.deleteButton);
    }

    #handleDelete(event) {
        event.stopPropagation();
        this.handleNoteDelete(this.index);
    }

    renderNoteInParent(parentElement) {
        parentElement.appendChild(this.noteItem);
    }

    destroy() {
        this.noteItem.removeEventListener('click', this.handleNoteClick);
        this.deleteButton.removeEventListener('click', this.#handleDelete);

        if (this.noteItem && this.noteItem.parentNode) {
            this.noteItem.parentNode.removeChild(this.noteItem);
        }
    }
}
