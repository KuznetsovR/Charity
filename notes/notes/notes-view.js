export class NotesView {
    constructor(model, container) {
        this.model = model;
        this.model.onAdd(this.onAddNote.bind(this));
        this.model.onEdit(this.onEditNote.bind(this));
        this.model.onRemove(this.onRemoveNote.bind(this));
        this.container = container;
    }
    onAddNote(note) {
        const view = new NoteView(note);
        view.renderTo(this.container)
    }
    onEditNote(note) {
        const i = this.notes.findIndex((n) => note.id === n.id);
        let element = document.getElementById(i);
        let heading = element.querySelector(".note-heading-text");
        let content = element.querySelector(".note-content-text");
        heading.textContent = note.heading;
        content.textContent = note.content;
    }
    onRemoveNote(note) {
        note.remove();
    }
}

class NoteView {
    constructor(note) {
        this.note = note;
        console.log(note);
    }
    renderTo(parent) {
        const newNote = document.createElement(`div`);
        newNote.classList.add("note");
        newNote.id = this.note.id;

        const newHeadingText = document.createElement(`div`);
        newHeadingText.classList.add("note-heading-text");
        newHeadingText.textContent = this.note.heading;

        const newHeading = document.createElement(`div`);
        newHeading.classList.add("note-heading");

        const newContentText = document.createElement(`div`);
        newContentText.classList.add("note-content-text");
        newContentText.textContent = this.note.content;

        const newContent = document.createElement(`div`);
        newContent.classList.add("note-content");

        newHeading.appendChild(newHeadingText);
        newContent.appendChild(newContentText);
        newNote.appendChild(newHeading);
        newNote.appendChild(newContent);
        parent.appendChild(newNote);
    }
}