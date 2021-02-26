export class NotesController {
    constructor(noteEditModel, notesModel, container) {
        this.noteEditModel = noteEditModel;
        this.notesModel = notesModel;
        container.addEventListener('click', this.onClick.bind(this))
        this.adder = document.querySelector('.add-note');
    }
    open(note) {
        this.noteEditModel.open(note)
    }
    onClick(event){
        console.log(event.target)
        if(this.adder.contains(event.target)){
            this.open()
        }else{
            const notes = document.querySelectorAll('.note')
            for(const note of notes){
                if (note.contains(event.target)){
                    this.open(this.notesModel.getNoteById(+note.id))
                    return
                }
            }
        }
    }
}