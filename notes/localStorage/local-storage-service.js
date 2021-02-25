class LocalStorageService {
    constructor() {
        this.localStorageNotes = localStorage.getItem("notes");
    }
    loadNotes() {
        if (this.localStorageNotes === null) {
            return;
        }
        return this.localStorageNotes;
    }
    saveNotes(notes) {
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}