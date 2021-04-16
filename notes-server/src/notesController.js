class NotesExpressController {
    constructor(interactor) {
        this.interactor = interactor;
    }
    async getAll(req, res) {
        const notes = await this.interactor.getNotes();
        res.send(notes)
    }
    async addNote(req, res) {
        try {
            const note = await this.interactor.addNote(req.body);
            res.status(201).send(note.id.toString());
        } catch(e){
            if (e.message === 'incorrect data'){
                res.status(400).send();
            }else{
                throw e;
            }
        }
    }
}
module.exports = {NotesExpressController};