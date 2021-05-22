let input = document.querySelector('input');
let addBtn = document.querySelector('.add-btn');
let todoList = document.querySelector('.todoList');
let clearAllBtn = document.querySelector('.clear-all__btn');

let tasks = []
addBtn.addEventListener('click', () => {
    let task = {
        text: input.value,
        checked: false
    }
    tasks.push(task);
    input.value = "";
    showTasks();
})
const showTasks = () => {
    let newTodoElement = '';
    tasks.map((item, index) => {
        newTodoElement += `<li id=${index}> <input type="checkbox" id=${index}> ${item.text}<span class="icon"><i class="fas fa-trash"></i></span></li>`
        todoList.innerHTML = newTodoElement
    })
}
