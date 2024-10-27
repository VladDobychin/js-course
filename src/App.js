import NotesList from './components/NotesList.js';
import NoteRepository from './repositories/NoteRepository.js';
import Form from './components/Form.js';

export default class App {
    constructor() {
        this.noteRepository = new NoteRepository();
        this.notesList = new NotesList({
                notes: this.noteRepository.getNotes(),
                handleNoteClick: this.handleNoteClick.bind(this),
                handleNoteDelete: this.handleNoteDelete.bind(this)
            })
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.form = new Form({
            noteRepository: this.noteRepository,
            handleFormSubmit: this.handleFormSubmit
        });
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.notesList.init();
            this.form.init();
            this.setupEventListeners();
        });
    }

    setupEventListeners() {
        document.getElementById('cancel-button').addEventListener('click', () => {
            this.form.setFormMode('add');
        })
        document.getElementById('add-note-btn').addEventListener('click', () => {
            this.form.setFormMode('add');
        })
        document.getElementById('search-bar').addEventListener('input', this.handleSearch.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const noteName = document.getElementById('note-name-input');
        const noteContent = document.getElementById('note-content-input');
        const note = {
            name: noteName.value,
            content: noteContent.value
        };

        if (note.name !== '' && note.content !== '') {
            if (this.noteRepository.getCurrentNoteIndex() === null) {
                this.noteRepository.addNote(note);
            } else {
                this.noteRepository.updateNote(note);
            }

            this.form.resetForm();
            this.form.setFormMode('add');
            this.notesList.update(this.noteRepository.getNotes());
        }
    }

    handleNoteClick(note, index) {
        this.noteRepository.setCurrentNoteIndex(index);

        const noteName = document.getElementById('note-name-input');
        const noteContent = document.getElementById('note-content-input');

        noteName.value = note.name;
        noteContent.value = note.content;
        this.form.setFormMode('edit');
    }

    handleNoteDelete(index) {
        this.noteRepository.deleteNote(index);
        this.form.setFormMode('add');
        this.notesList.update(this.noteRepository.getNotes());
    }

    handleSearch(event) {
        const query = event.target.value.toLowerCase();
        const filteredNotes = this.noteRepository.getNotes().filter(note => note.name.toLowerCase().includes(query));
        this.notesList.update(filteredNotes);
    }
}
