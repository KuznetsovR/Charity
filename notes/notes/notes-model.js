import { Note } from "../shared/note.js";
export class NotesModel {
  constructor(notes = [], apiService) {
    this.notes = notes;
    this.onAddObservers = [];
    this.onEditObservers = [];
    this.onRemoveObservers = [];
    this.onSetObservers = [];
    this.onLoadingStatusObservers = [];
    this.apiService = apiService;
    this.currentId =
      notes.reduce((max, note) => (note.id > max ? note.id : max), 0) + 1;
    this.loadingStatus = false;
    this.loadNotes();
  }
  loadNotes() {
    this.setLoadingStatus(true);
    this.apiService.getNotes().then((notes) => {
      this.setNotes(notes);
      this.setLoadingStatus(false);
    });
  }
  //////////////////////////////добавление функций(подписок)
  onLoadingStatus(observer) {
    this.onLoadingStatusObservers.push(observer);
  }
  onSet(observer) {
    this.onSetObservers.push(observer);
  }
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
  removeOnLoadingStatus(observer) {
    const index = this.onLoadingStatusObservers.indexOf(observer);
    if (index !== -1) {
      this.onLoadingStatusObservers.splice(index, 1);
    }
  }
  removeOnSet(observer) {
    const index = this.onSetObservers.indexOf(observer);
    if (index !== -1) {
      this.onSetObservers.splice(index, 1);
    }
  }
  removeOnAdd(observer) {
    const index = this.onAddObservers.indexOf(observer);
    if (index !== -1) {
      this.onAddObservers.splice(index, 1);
    }
  }
  removeOnEdit(observer) {
    const index = this.onEditObservers.indexOf(observer);
    if (index !== -1) {
      this.onEditObservers.splice(index, 1);
    }
  }
  removeOnRemove(observer) {
    const index = this.onRemoveObservers.indexOf(observer);
    if (index !== -1) {
      this.onRemoveObservers.splice(index, 1);
    }
  }
  //////////////////////////////изменение данных и вызов(оповещение) функций(подписок)
  setLoadingStatus(status) {
    this.loadingStatus = status;
    for (const observer of this.onLoadingStatusObservers) {
      observer(status);
    }
  }
  setNotes(notes) {
    this.notes = notes;
    this.currentId =
      notes.reduce((max, note) => (note.id > max ? note.id : max), 0) + 1;
    for (const observer of this.onSetObservers) {
      observer(notes);
    }
  }

  addNote(heading, content) {
    this.setLoadingStatus(true);
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        heading,
        content,
      }),
    })
      .then((res) => res.text())
      .then((id) => {
        const note = new Note(+id, heading, content);
        this.notes.push(note);
        for (const observer of this.onAddObservers) {
          observer(note);
        }
        this.setLoadingStatus(false);
      });
  }
  editNote(note) {
    const i = this.notes.findIndex((n) => note.id === n.id);
    const heading = note.heading
    const content = note.content
    if (i !== -1) {
        fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          ["Content-type"]: "application/json",
        },
        body: JSON.stringify({
          heading,
          content,
        }),
      })
        .then((res) => res.text())
        .then(() => {
          this.notes.splice(i, 1, note);
          for (const observer of this.onEditObservers) {
            observer(note, i);
          }
          this.setLoadingStatus(false);
        });
    }
  }
  removeNote(note) {
    let i;
    if (note.id === -1) {
      i = this.notes.findIndex((n) => note.id === n.id);
    } else {
      i = note.id - 1;
    }
    if (i !== -1) {
      this.setLoadingStatus(true);
      fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          ["Content-type"]: "application/json",
          // Access-Control-Allow-Origin: *
        },
        body: {},/*JSON.stringify({
          i,
        }),*/
      })
        .then((res) => res.text())
        .then(() => {
          this.notes.splice(i, 1);
          for (const observer of this.onRemoveObservers) {
            observer(note);
          }
          this.setLoadingStatus(false);
        });
    }
  }
  //////////////////////////////////
  getNoteById(id) {
    return this.notes.find((n) => n.id === id);
  }
}
