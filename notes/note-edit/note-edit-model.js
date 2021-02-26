import { Note } from "../shared/note.js";

export class NoteEditModel {
    constructor() {
        this.openStatusObservers = [];
        this.onSetHeadingObservers = [];
        this.onSetContentObservers = [];
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


    open(note) {
        for (const observer of this.openStatusObservers) {
            observer(true)
        }
        if (note !== undefined) {
            this.id = note.id
            this.setHeading(note.heading)
            this.setContent(note.content)
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
    getNote(){
        return new Note(this.id, this.heading, this.content);
    }
}