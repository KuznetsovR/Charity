const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
let notes = document.querySelectorAll(".note");
const adder = document.querySelector(".add-note");
const btn = document.querySelector(".submit-button");
const deleteBtn = document.querySelector(".delete-button");
let noteName = document.querySelector(".note-name-modal");
let textarea = document.querySelector(".textarea");
let notesId = 1;
const notesField = document.querySelector(".notes");

const fragment = new DocumentFragment();

let notesArr = [];
let noteViews = [];

class Note {
  constructor(id, heading, content) {
    this.id = id;
    this.heading = heading;
    this.content = content;
  }
}

class NoteView {
  constructor(note) {
    this.note = note;
    console.log(note)
  }
  renderTo(parent) {
    const newNote = document.createElement(`div`);
    newNote.classList.add("note");
    newNote.id = this.note.id;

    const newHeadingText = document.createElement(`div`);
    newHeadingText.classList.add("note-heading-text");
    newHeadingText.textContent = this.note.heading;

    const newHeading = document.createElement(`div`);
    newHeading.classList.add("note-heading");

    const newContentText = document.createElement(`div`);
    newContentText.classList.add("note-content-text");
    newContentText.textContent = this.note.content;

    const newContent = document.createElement(`div`);
    newContent.classList.add("note-content");

    newHeading.appendChild(newHeadingText);
    newContent.appendChild(newContentText);
    newNote.appendChild(newHeading);
    newNote.appendChild(newContent);
    parent.appendChild(newNote);
  }
}

function renderNotes() {
  for (let note of notesArr) {
    const view = new NoteView(note);
    view.renderTo(fragment);
    noteViews.push(view);
  }
  notesField.appendChild(fragment);

  addFunctional();
}

function localStorageLoad() {
  //вытаскивание из localstorage
  let localStorageNotes = localStorage.getItem("notes");
  if (localStorageNotes === null) {
    return;
  }
  notesArr = JSON.parse(localStorageNotes);
  notesId = notesArr.length + 1;
}

function opener() {                         //открытие
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
  modal.classList.add("opened");
  modalOverlay.classList.add("opened");
}

function insertTextInModal(noteElement){ 
  const note = findNoteByElement(noteElement)
  noteName.value = note.heading;
  textarea.value = note.content;
}

function findNoteByElement(element){
  const targetId = +findtargetId(element);
  return notesArr.find(note => note.id === targetId);
}

function clearInputs() {
  noteName.value = "";
  textarea.value = "";
}

adder.onclick = function () {  //добавление
  opener();
  btn.onclick = function () {
    if(noteName.value===''||textarea.value===''){
      return
    }
    adder.insertAdjacentHTML(
      "afterend",
      `<div class='note' id='${notesId}'>
        <div class='note-heading' id='${notesId}'>
            <div class='note-heading-text' id='${notesId}'>
            ${noteName.value}
            </div>
        </div>
        <div class='note-content' id='${notesId}'>
            <div class='note-content-text' id='${notesId}'>
            ${textarea.value}
            </div>
        </div>
    </div>`
    );
    const note = new Note(notesId, noteName.value, textarea.value);
    notesArr.push(note);
    localStorage.setItem("notes", JSON.stringify(notesArr)); //gtgrtfr
    notesId++;
  };
};
function close() {
  //закрытие
  modal.classList.remove("opened");
  modalOverlay.classList.remove("opened");
  modal.classList.add("closed");
  modalOverlay.classList.add("closed");
  clearInputs();
  addFunctional();
};

let targetId;

function change(noteElement){
  const noteHeading  = noteElement.querySelector(".note-heading-text");
  const noteContent  = noteElement.querySelector(".note-content-text");
  const note = findNoteByElement(noteElement)

  note.heading = noteName.value;
  note.content = textarea.value;
  noteHeading.textContent = noteName.value;
  noteContent.textContent = textarea.value;
  localStorage.setItem("notes", JSON.stringify(notesArr));
}

function addFunctional() {                    //изменение
  notes = document.querySelectorAll(".note");
  for (const note of notes) {
    
    note.onclick = function(){
      opener();
      insertTextInModal(note);
      btn.onclick = function () {
        change(note);
      }
      deleteBtn.onclick = function () {
        remove(note);
      }
    }

    modalOverlay.addEventListener("click", close)
  }
}
function remove(noteElement) {
  const targetId = +findtargetId(noteElement);
  const i = notesArr.findIndex(note => note.id === targetId);
  notesArr.splice(i,1);
  noteElement.remove();
  localStorage.setItem("notes", JSON.stringify(notesArr)); 
  close()
  //удаление. чтобы по нажатию находился id и уже по нему удалять и из localstorage и из дома
};

function findtargetId(noteElement){
    return noteElement.id;
//   document.addEventListener('click',e => targetId = e.target)
//   if(targetId.id===''){
//     return;
//   }
//   targetId = targetId.id;
}

document.addEventListener("DOMContentLoaded", function () {
  localStorageLoad();
  renderNotes();
});
addFunctional();

/*

noteHeading = notesArr.find(x => x.id === id).heading;
    noteContent = notesArr.find(x => x.id === id).content;
let textarea = document.querySelector('.ck-editor__editable_inline');
btn.onclick = function(){
    console.log(textarea)
};
for (area of textarea){
    btn.onclick = function(){
        console.log(textarea)
    };
}*/