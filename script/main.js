let input = document.querySelector('input');
let addBtn = document.querySelector('.add-btn');
let todoList = document.querySelector('.todoList');
let clearAllBtn = document.querySelector('.clear-all__btn');
let checkboxBtn = document.querySelector('.checkbox');

let tasks = []
if(localStorage.getItem('todoList')){
    tasks = JSON.parse(localStorage.getItem('todoList'))
    showTasks();
}
let num = 1
addBtn.addEventListener('click', () => {
    let task = {
        id: num++,
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
        newTodoElement += `<li id=${index}> <input class="checkbox" type="checkbox" ${item.checked ? 'checked' : ''}> ${item.text} <span class="icon"><i class="fas fa-trash"></i></span></li>`
        todoList.innerHTML = newTodoElement
    })
}

// checkboxBtn.addEventListener("click", () =>{
//     tasks.filter(item => item.id === )
// })