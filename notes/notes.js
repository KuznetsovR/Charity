const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
let notes = document.querySelectorAll(".note");

const deleteBtn = document.querySelector(".delete-button");
const btn = document.querySelector(".submit-button");
let noteName = document.querySelector(".note-name-modal");
let textarea = document.querySelector(".textarea");

let notesId = 1;              //obj for modal info

let notesArr = [];

class Note {
  constructor(id, heading, content) {
    this.id = id;
    this.heading = heading;
    this.content = content;
  }
}
////////////////////// view
class NoteView {
  constructor(note) {
    this.note = note;
    console.log(note);
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
/*
function getModalElement (noteElement, el){
const deleteBtn = noteElement.querySelector(".delete-button");
const btn = noteElement.querySelector(".submit-button");
const noteName = noteElement.querySelector(".note-name-modal");
const textarea = noteElement.querySelector(".textarea");
return ${el}
}
*/
function renderNotes() {                                //рендер из локалки
  const fragment = new DocumentFragment();
  const notesField = document.querySelector(".notes");
  let noteViews = [];
  for (let note of notesArr) {
    const view = new NoteView(note);
    view.renderTo(fragment);
    noteViews.push(view);
  }
  notesField.appendChild(fragment);

  addFunctional();
}

function localStorageLoad() {                           //вытаскивание из localstorage
  let localStorageNotes = localStorage.getItem("notes");
  if (localStorageNotes === null) {
    return;
  }
  notesArr = JSON.parse(localStorageNotes);
  notesId = notesArr.length + 1;
}

function opener() {                                   //открытие модального окна
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
  modal.classList.add("opened");
  modalOverlay.classList.add("opened");
}

function insertTextInModal(noteElement) {             //вставка текста из дома
  const note = findNoteByElement(noteElement);
  noteName.value = note.heading;
  textarea.value = note.content;
}

function clearInputs() {                              //очистка полей ввода
  noteName.value = "";
  textarea.value = "";
}

function close() {                                       //закрытие
  //закрытие
  modal.classList.remove("opened");
  modalOverlay.classList.remove("opened");
  modal.classList.add("closed");
  modalOverlay.classList.add("closed");
  clearInputs();
  addFunctional();
}

///////////////////////////////////////  controller

function findNoteByElement(element) {                 //поиск элемента по идентификатору   model
  const targetId = +findtargetId(element);
  return notesArr.find((note) => note.id === targetId);
}



function add() {                                              //добавление
  const adder = document.querySelector(".add-note");
  adder.onclick = function () {
    opener();
    btn.onclick = function () {
      if (noteName.value === "" || textarea.value === "") {
        return;
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
      localStorage.setItem("notes", JSON.stringify(notesArr));
      notesId++;
    };
  };
}

function change(noteElement) {                            //изменение
  let noteHeading = noteElement.querySelector(".note-heading-text");
  let noteContent = noteElement.querySelector(".note-content-text");
  let note = findNoteByElement(noteElement);

  note.heading = noteName.value;
  note.content = textarea.value;
  noteHeading.textContent = noteName.value;
  noteContent.textContent = textarea.value;
  localStorage.setItem("notes", JSON.stringify(notesArr));
}

function addFunctional() {                              //добавление элементам в доме функциональности    modal
  notes = document.querySelectorAll(".note");
  for (const note of notes) {
    note.onclick = function () {
      opener();
      insertTextInModal(note);
      btn.onclick = function () {
        change(note);
      };
      deleteBtn.onclick = function () {
        remove(note);
      };
    };

    modalOverlay.addEventListener("click", close);
  }
}
function remove(noteElement) {                    //удаление              model
  const targetId = +findtargetId(noteElement);
  const i = notesArr.findIndex((note) => note.id === targetId);
  notesArr.splice(i, 1);
  noteElement.remove();
  localStorage.setItem("notes", JSON.stringify(notesArr));
  close();
}

function findtargetId(noteElement) {                    //зачем это
  return noteElement.id;
}

document.addEventListener("DOMContentLoaded", function () {       //типа общее
  localStorageLoad();
  renderNotes();
  add();
  addFunctional();
});

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
