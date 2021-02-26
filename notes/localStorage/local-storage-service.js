export class LocalStorageService {
    loadNotes() {
        const localStorageNotes = localStorage.getItem('notes');
        if (localStorageNotes === null) {
            return;
        }
        return JSON.parse(localStorageNotes);
    }
    saveNotes(notes) {
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}