class NoteEditView{
    constructor(){
                                                            //observers

    }
    onOpen(stuffFromModel){
        modal.classList.add("opened");
        modalOverlay.classList.add("opened");
        noteName.value = heading;
        textarea.value = content;
    }
    onClose(){
        noteName.value = "";
        textarea.value = "";
        modal.classList.remove("opened");
        modalOverlay.classList.remove("opened");
    }
    onHeadingChange(){
        setHeading(heading)
    }
    onContentChange(){
        setContent(content)
    }
}