let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal-overlay');
let btn = document.getElementById('btn');
let notes = document.querySelectorAll('.note');
modalOverlay.onclick = function(){
    modal.classList.remove("opened");
    modalOverlay.classList.remove("opened");
    modal.classList.add("closed");
    modalOverlay.classList.add("closed");
};
for (note of notes){
    note.onclick = function(){
        modal.classList.remove("closed");
        modalOverlay.classList.remove("closed");
        modal.classList.add("opened");
        modalOverlay.classList.add("opened");
    };
}
