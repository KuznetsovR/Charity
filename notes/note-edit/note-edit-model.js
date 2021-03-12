import { Note } from "../shared/note.js";
import { Observable } from '../shared/observable.js'


export class NoteEditModel {
    constructor() {
        this.openStatus = new Observable(false);
        this.heading = new Observable()
        this.content = new Observable()
        this.removeBtnStatus = new Observable(false)
    }
    

    open(note) {
        this.openStatus.next(true)
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
        this.openStatus.next(false)

        this.id = undefined
        this.setHeading('')
        this.setContent('')
    }
    setHeading(heading) {
        this.heading.next(heading)
    }
    setContent(content) {
        this.content.next(content)
    }
    addRemoveBtn(){
        this.removeBtnStatus.next(true)

    }
    deleteRemoveBtn(){
        this.removeBtnStatus.next(false)

    }
    getNote(){
        return new Note(this.id, this.heading.value, this.content.value);
    }
}