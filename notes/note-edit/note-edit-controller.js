export class NoteEditController{
    constructor(notesModel, noteEditModel, note){
        this.notesModel = notesModel;
        this.noteEditModel = noteEditModel;
        this.note = note;
        const deleteBtn = document.querySelector(".delete-button");
        const btn = document.querySelector(".submit-button");
        btn.addEventListener('click', this.addNote.bind(this))
        deleteBtn.addEventListener('click', this.addNote.bind(this))
        this.noteName = document.querySelector(".note-name-modal");
        this.textarea = document.querySelector(".textarea"); 
    }
    addNote(){
        this.notesModel.addNote(this.noteName.value, this.textarea.value)
    }
    editNote(){
        this.notesModel.editNote(note)
    }
    setHeading(){
        this.noteEditModel.setHeading(note, this.noteName.value)
    }
    setContent(){
        this.noteEditModel.setContent(note, this.textarea.value)
    }
    close(){
        this.noteEditModel.close()
    }
    removeNote(){
        this.notesModel.removeNote(note)
    }
}