class NoteEditModel {
    constructor(note) {
        this.modal = document.querySelector(".modal");
        this.modalOverlay = document.querySelector(".modal-overlay");
    }
    open(note) {
        const markerOpened = true;
        if (note !== -1) {
            id = note.id
            heading = note.heading;
            content = note.content;
        }
    }
    close() {
        const markerOpened = false;
    }
    setHeading(note, noteNameValue) {
        if (noteNameValue !== -1) {
            note.heading = noteNameValue;
        }
        return note;
    }
    setContent(note, textareaValue) {
        if (textareaValue !== -1) {
            note.content = textareaValue;
        }
        return note;
    }
}