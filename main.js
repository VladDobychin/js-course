import NotesModel from './notes.js';
import NotesView from './notesView.js';
import NotesController from './notesController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new NotesModel();
    const view = new NotesView();
    new NotesController(model, view);
});
