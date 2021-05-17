const input = document.querySelector('.inputForList')
const list = document.querySelector('.list')
const btn = document.querySelector('.btn')

let todos = 0;

btn.addEventListener('click', add)
list.addEventListener('click', onClick)

function add(){
    if (input.value === '') {
        alert ('Enter an amount')
        return
    }
    if (todos === 0) list.textContent = ''
    const listItem = document.createElement(`li`)
    const deleter = document.createElement('span')
    deleter.textContent = '❌';
    deleter.classList.add('delete-btn')
    listItem.textContent = input.value
    listItem.appendChild(deleter)
    list.appendChild(listItem)
    todos++;
}
function deleteItem(listItem){
    list.removeChild(listItem)
    todos--;
    if(todos === 0) addNoTodos()
}
function addNoTodos(){
    const listItem = document.createElement(`li`)
    listItem.textContent = 'No todos yet'
    list.appendChild(listItem)
}
function onClick(event){
    let listItems = document.getElementsByTagName('li')
    for(const listItem of listItems){
        if(listItem.contains(event.target)){
            const deleteBtn = listItem.querySelector('.delete-btn')
            if(deleteBtn && deleteBtn.contains(event.target)){
                deleteItem(listItem)
            }
        }
    }
}
//drag and drop