export class NoteEditView{
    constructor(model){
        this.model = model;
        this.modal = document.querySelector(".modal");
        this.modalOverlay = document.querySelector(".modal-overlay");
        this.noteName = document.querySelector(".note-name-modal");
        this.textarea = document.querySelector(".textarea");
        this.deleteBtn = document.querySelector(".delete-button-modal");
        this.model.onOpenChange(this.onOpenChange.bind(this));
        this.model.onSetHeading(this.onHeadingChange.bind(this));
        this.model.onSetContent(this.onContentChange.bind(this));
        this.model.onDeleteBtnChange(this.onDeleteBtnChange.bind(this));
    }
    onOpenChange(open){
        if(open){
            this.modal.classList.add("opened");
            this.modalOverlay.classList.add("opened");
        }else{
            this.modal.classList.remove("opened");
            this.modalOverlay.classList.remove("opened");
            this.noteName.value = "";
            this.textarea.value = "";
        }
    }
    onHeadingChange(heading){
        this.noteName.value = heading;
    }
    onContentChange(content){
        this.textarea.value = content;
    }
    onDeleteBtnChange(btnExists){
        if (btnExists){
            this.deleteBtn.style.display = "block";
        } else{
            this.deleteBtn.style.display = "none";
        }
    }
}