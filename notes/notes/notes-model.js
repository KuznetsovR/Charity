import {Note}from '../shared/note.js'
export class NotesModel {
    constructor(notes = []) {
        this.notes = notes;
        this.onAddObservers = [];
        this.onEditObservers = [];
        this.onRemoveObservers = [];
        this.currentId = notes.reduce((max, note) => note.id > max ? note.id : max, 0)+1;
    }
    //////////////////////////////добавление функций(подписок)
    onAdd(observer) {
        this.onAddObservers.push(observer);
    }
    onEdit(observer) {
        this.onEditObservers.push(observer);
    }
    onRemove(observer) {
        this.onRemoveObservers.push(observer);
    }       
    //////////////////////////////удаление функций(подписок)                                                        
    removeOnAdd(observer) {
        const index = this.onAddObservers.indexOf(observer)
        if (index !== -1) {
            this.onAddObservers.splice(index, 1)
        }
    }
    removeOnEdit(observer) {
        const index = this.onEditObservers.indexOf(observer)
        if (index !== -1) {
            this.onEditObservers.splice(index, 1)
        }
    }
    removeOnRemove(observer) {
        const index = this.onRemoveObservers.indexOf(observer)
        if (index !== -1) {
            this.onRemoveObservers.splice(index, 1)
        }
    }
    //////////////////////////////изменение данных и вызов(оповещение) функций(подписок)
    addNote(heading, content) {
        const note = new Note(this.currentId++, heading,content)
        this.notes.push(note);
        for (const observer of this.onAddObservers) {
            observer(note)
        }
    }
    editNote(note) {
        const i = this.notes.findIndex((n) => note.id === n.id);
        if (i !== -1) {
            this.notes.splice(i, 1, note)
            for (const observer of this.onEditObservers) {
                observer(note, i)
            }
        }
    }
    removeNote(note) {
        const i = this.notes.findIndex((n) => note.id === n.id);
        if (i !== -1) {
            this.notes.splice(i, 1)
            for (const observer of this.onRemoveObservers) {
                observer(note)
            }
        }
    }
    //////////////////////////////////
    getNoteById(id){
        return this.notes.find((n) => n.id === id);
    }
}
