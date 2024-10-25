export default class NoteItem {
    constructor(note, index, onNoteClick, onDeleteClick) {
        this.note = note;
        this.index = index;
        this.onNoteClick = onNoteClick;
        this.onDeleteClick = onDeleteClick;
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

        this.noteItem.addEventListener('click', this.onNoteClick);
        this.deleteButton.addEventListener('click', this.#handleDelete.bind(this));

        this.noteItem.appendChild(noteName);
        this.noteItem.appendChild(this.deleteButton);
    }

    #handleDelete(event) {
        event.stopPropagation();
        this.onDeleteClick(this.index);
    }

    render(parentElement) {
        parentElement.appendChild(this.noteItem);
    }

    destroy() {
        this.noteItem.removeEventListener('click', this.onNoteClick);
        this.deleteButton.removeEventListener('click', this.#handleDelete);

        if (this.noteItem && this.noteItem.parentNode) {
            this.noteItem.parentNode.removeChild(this.noteItem);
        }
    }
}
