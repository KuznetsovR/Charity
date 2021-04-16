const isDefined = (val) => val !== undefined && val !== null && !(typeof value === 'number' && isNaN(val));
class NotesInteractor {
    constructor(repository) {
        this.repository = repository;
    }
    getNotes() {
        return this.repository.readAll()
    }
    addNote({ heading, content }) {
        if (!heading || !isDefined(content)) {
            throw Error('incorrect data')
        }
        return this.repository.addNote({ heading, content });
    }
}
module.exports = {NotesInteractor};
