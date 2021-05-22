let input = document.querySelector('input');
let addBtn = document.querySelector('.add-btn');
let todoList = document.querySelector('.todoList');
let clearAllBtn = document.querySelector('.clear-all__btn');

console.log(clearAllBtn)

let tasksList = document.querySelector('.todoList');

let tasks = []
if(localStorage.getItem('todoList')){
    tasks = JSON.parse(localStorage.getItem('todoList'))
    showTasks();
}

addBtn.addEventListener('click', () => {
    let task = {
        id: null,
        text: input.value,
        checked: false
    }
    tasks.push(task);
    input.value = "";
    showTasks();
    localStorage.setItem('todoList', JSON.stringify(tasks))
})
function showTasks() {
    let newTodoElement = '';
    tasks.map((item, index) => {
        newTodoElement += `<li> <input class="checkbox" type="checkbox" id=${item.id = index} ${item.checked ? 'checked' : ''}> ${item.text} <span id=${index} class="icon delete-btn"><i class="fas fa-trash"></i></span></li>`
        todoList.innerHTML = newTodoElement
    })
}
tasksList.addEventListener("change", (e) => {
   let currentId = e.target.getAttribute('id');
    console.log(currentId)
    tasks.filter(item => {
       if(item.id === +currentId){
           item.checked = !item.checked
           localStorage.setItem('todoList', JSON.stringify(tasks))
       }
   })
})
let deleteBtn = document.querySelectorAll('.icon');
console.log(deleteBtn)

deleteBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        let currentId = e.currentTarget.getAttribute('id')
        console.log(currentId)
        tasks.filter(item => {
          return item.id !== +currentId
        })
        showTasks();
    })
})