const { Note } = require('../note');

class NotesInMemoryRepository {
    constructor() {
        this.notes = [];
        this.counter = 0;
    }
    async readAll() {
        return this.notes;
    }
    async addNote({heading, content}) {
        const note = new Note(this.counter, heading, content);
        this.notes.push(note);
        this.counter++;
        return note;
    }
}
module.exports = {NotesInMemoryRepository};