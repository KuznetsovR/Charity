export class NoteEditController{
    constructor(notesModel){
        this.notesModel = notesModel;
        const deleteBtn = document.querySelector(".delete-button");
        const btn = document.querySelector(".submit-button");
        btn.addEventListener('click', this.addNote.bind(this))
        this.noteName = document.querySelector(".note-name-modal");
        this.textarea = document.querySelector(".textarea"); 
    }
    addNote(){
        this.notesModel.addNote(this.noteName.value, this.textarea.value)
    }
}