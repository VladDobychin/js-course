export default class Form {
    constructor(props) {
        this.handleFormSubmit = props.handleFormSubmit;
        this.noteModel = props.noteModel;
    }

    init() {
        document.getElementById('note-form').addEventListener('submit', this.handleFormSubmit);
        this.mainHeader = document.getElementById('main-content-header');
        this.submitBtn = document.getElementById('submit-button');
        this.cancelBtn = document.getElementById('cancel-button');
        this.noteName = document.getElementById('note-name-input');
        this.noteContent = document.getElementById('note-content-input');

        this.setFormMode('add');
    }

    resetForm() {
        this.noteName.value = '';
        this.noteContent.value = '';
        this.noteModel.setCurrentNoteIndex(null);
    }

    setFormMode(formMode) {
        if (formMode === 'edit') {
            this.mainHeader.textContent = 'Edit existing note';
            this.submitBtn.textContent = 'Save changes';
            this.cancelBtn.style.display = 'inline';
        }

        if (formMode === 'add') {
            this.mainHeader.textContent = 'Add a New Note';
            this.submitBtn.textContent = 'Add Note';
            this.cancelBtn.style.display = 'none';
            this.noteName.value = '';
            this.noteContent.value = '';
            this.noteModel.setCurrentNoteIndex(null);
        }
    }
}
