const isDefined = (val) =>
  val !== undefined &&
  val !== null &&
  !(typeof value === "number" && isNaN(val));
class NotesInteractor {
  constructor(repository) {
    this.repository = repository;
  }
  getNotes() {
    return this.repository.readAll();
  }
  addNote({ heading, content }) {
    if (!heading || !isDefined(content)) {
      throw Error("incorrect data");
    }
    return this.repository.addNote({ heading, content });
  }
  deleteNote(id) {
    if (!isDefined(id)) {
      throw Error("incorrect id");
    }
    try {
      this.repository.deleteNote({ id });
    } catch (e) {
      throw e;
    }
  }
  editNote({ heading, content, id }) {
    if (!heading || !isDefined(content) || !isDefined(id)) {
      throw Error("incorrect data or id");
    }
    try{
        this.repository.editNote({ heading, content, id });
    }catch (e) {
      throw e;
    }
  }
}
module.exports = { NotesInteractor };
