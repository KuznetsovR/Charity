const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
let notes = document.querySelectorAll(".note");
const adder = document.querySelector(".add-note");
const btn = document.querySelector(".submit-button");
const deleteBtn = document.querySelector(".delete-button");
let noteName = document.querySelector(".note-name-modal");
let noteHeading = document.querySelector(".note-heading-text"); //not in modal
let noteContent = document.querySelector(".note-content-text"); //not in modal
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

  Changenotes();
  noteName = document.querySelector(".note-name-modal"); //сделать апдейт переменных;
  noteHeading = document.querySelector(".note-heading-text"); //not in modal
  noteContent = document.querySelector(".note-content-text"); //not in modal
  textarea = document.querySelector(".textarea");
}

function localStorageLoad() {
  //вытаскивание из localstorage
  let localStorageNotes = localStorage.getItem("notes");
  if (localStorageNotes === null) {
    return;
  }
  notesArr = JSON.parse(localStorageNotes);
  notesId = notesArr.length++;
}

function opener() {                         //открытие
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
  modal.classList.add("opened");
  modalOverlay.classList.add("opened");
}

function insertTextInModal(){ 
  findtargetId();
  noteName.value = notesArr[targetId-1].heading;
  textarea.value = notesArr[targetId-1].content;
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

modalOverlay.onclick = function () {
  //закрытие
  modal.classList.remove("opened");
  modalOverlay.classList.remove("opened");
  modal.classList.add("closed");
  modalOverlay.classList.add("closed");
  clearInputs();
  Changenotes();
};

let targetId;

function Changenotes() {                    //изменение
  notes = document.querySelectorAll(".note");
  for (note of notes) {
    
    note.onclick = function(){
      opener();
      insertTextInModal();
    }

    btn.onclick = function () {
      if (noteHeading === null) {
        return
      } else {
        noteHeading = noteName.value;
        noteContent = textarea.value;
      }
    };
  }
}
deleteBtn.onclick = function () {
  delete notesArr[targetId-1];
  document.getElementById(`${targetId}`).remove;
  localStorage.removeItem("notes");
  localStorage.setItem("notes", JSON.stringify(notesArr)); 
  //удаление. чтобы по нажатию находился id и уже по нему удалять и из localstorage и из дома
};

function findtargetId(){
  document.addEventListener('click',e => targetId = e.target)
  if(targetId.id===''){
    return;
  }
  targetId = targetId.id;
}

document.addEventListener("DOMContentLoaded", function () {
  localStorageLoad();
  renderNotes();
});
Changenotes();

/*

notesArr.find(Note => Note.name === targetId).heading;
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
