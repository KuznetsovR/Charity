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
        const view = new NoteView(note)
        view.renderTo(fragment);
        noteViews.push(view);
    }
    notesField.appendChild(fragment);


    notesChanger();
    noteName = document.querySelector(".note-name-modal");              //сделать апдейт переменных;
    noteHeading = document.querySelector(".note-heading-text"); //not in modal
    noteContent = document.querySelector(".note-content-text"); //not in modal
    textarea = document.querySelector(".textarea");
}



function localStorageLoad() {                               //вытаскивание из localstorage
    let localStorageNotes = localStorage.getItem('notes');
    if(localStorageNotes===null){
        return
    };
    notesArr = JSON.parse(localStorageNotes);
}





function opener() {                                         //открытие
    modal.classList.remove("closed");
    modalOverlay.classList.remove("closed");
    modal.classList.add("opened");
    modalOverlay.classList.add("opened");
}

function modalContentChange() {
    if (noteName.value === null) {
        noteName.value = '';
        textarea.value = '';
    } else {
        noteName.value = noteHeading.textContent;
        textarea.value = noteContent.textContent;
    }
}

adder.onclick = function () {                             //добавление
    opener();
    noteName.value = '';
    textarea.value = '';
    btn.onclick = function () {
        adder.insertAdjacentHTML(
            "afterend",
            `<div class='note' id='note-${notesId}'>
        <div class='note-heading'>
            <div class='note-heading-text'>
            ${noteName.value}
            </div>
        </div>
        <div class='note-content'>
            <div class='note-content-text'>
            ${textarea.value}
            </div>
        </div>
    </div>`
        );
        let JSONnote = {
            id: notesId,
            heading: noteName.value,
            content: textarea.value,
        };
        notesArr.push(JSONnote)
        localStorage.setItem("notes", JSON.stringify(notesArr));                    //gtgrtfr
        notesId++;
        notesChanger()
    };
};

modalOverlay.onclick = function () {        //закрытие
    modal.classList.remove("opened");
    modalOverlay.classList.remove("opened");
    modal.classList.add("closed");
    modalOverlay.classList.add("closed");
};

function notesChanger() {
    notes = document.querySelectorAll(".note");       //изменение
    for (note of notes) {
        note.addEventListener("click", opener);
        btn.onclick = function () {
            if (noteHeading === null) {
                noteHeading.textContent = '';
                noteContent.textContent = '';
            } else {
                noteHeading.textContent = noteName.value;
                noteContent.textContent = textarea.value;
            }

        };
    }
}
deleteBtn.onclick = function () {                 //удаление. чтобы по нажатию находился id и уже по нему удалять и из localstorage и из дома

}




document.addEventListener("DOMContentLoaded", function(){
    localStorageLoad()
    renderNotes()
})
notesChanger();

/*
let textarea = document.querySelector('.ck-editor__editable_inline');
btn.onclick = function(){
    console.log(textarea)
};
for (area of textarea){
    btn.onclick = function(){
        console.log(textarea)
    };
}*/
