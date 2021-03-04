import { Note } from "../shared/note.js";

export class NoteEditModel {
    constructor() {
        this.openStatusObservers = [];
        this.onSetHeadingObservers = [];
        this.onSetContentObservers = [];
        this.removeBtnStatusObservers = [];
    }
    onOpenChange(observer){
        this.openStatusObservers.push(observer)
    }
    onSetHeading (observer){
        this.onSetHeadingObservers.push(observer)
    }
    onSetContent(observer){
        this.onSetContentObservers.push(observer)
    }
    onDeleteBtnChange(observer){
        this.removeBtnStatusObservers.push(observer)
    }
    removeOnOpenChange(observer) {
        const index = this.openStatusObservers.indexOf(observer)
        if (index !== -1) {
            this.openStatusObservers.splice(index, 1)
        }
    }
    removeOnSetHeading(observer) {
        const index = this.onSetHeadingObservers.indexOf(observer)
        if (index !== -1) {
            this.onSetHeadingObservers.splice(index, 1)
        }
    }
    removeOnSetContent(observer) {
        const index = this.onSetContentObservers.indexOf(observer)
        if (index !== -1) {
            this.onSetContentObservers.splice(index, 1)
        }
    }
    removeOnDeleteBtnChange(observer){
        const index = this.removeBtnStatusObservers.indexOf(observer)
        if (index !== -1) {
            this.removeBtnStatusObservers.splice(index, 1)
        }
    }


    open(note) {
        for (const observer of this.openStatusObservers) {
            observer(true)
        }
        if (note !== undefined) {
            this.id = note.id;
            this.addRemoveBtn();
            this.setHeading(note.heading)
            this.setContent(note.content)
        }else{
            this.deleteRemoveBtn();
        }
    }
    close() {
        for (const observer of this.openStatusObservers) {
            observer(false)
        }
        this.id = undefined
        this.setHeading('')
        this.setContent('')
    }
    setHeading(heading) {
        for (const observer of this.onSetHeadingObservers) {
            observer(heading)
        }
        this.heading = heading;
    }
    setContent(content) {
        for (const observer of this.onSetContentObservers) {
            observer(content)
        }
        this.content = content;
    }
    addRemoveBtn(){
        for (const observer of this.removeBtnStatusObservers) {
            observer(true)
        }
    }
    deleteRemoveBtn(){
        for (const observer of this.removeBtnStatusObservers) {
            observer(false)
        }
    }
    getNote(){
        return new Note(this.id, this.heading, this.content);
    }
}