let input = document.querySelector('input');
let addBtn = document.querySelector('.add-btn');
let todoList = document.querySelector('.todoList');
let clearAllBtn = document.querySelector('.clear-all__btn');

let tasks = []

if (localStorage.getItem('todoList')) {
    tasks = JSON.parse(localStorage.getItem('todoList'))
    showTasks();
}
if (input.value === "") {
    addBtn.classList.add('disabled')
}

input.onkeyup = () => {
    if (input.value !== "") {
        addBtn.classList.remove('disabled')
    } else {
        addBtn.classList.add('disabled')
    }
}
addBtn.addEventListener('click', () => {
    let inputValue = input.value
    if (inputValue) {
        if (inputValue.length > 25) {
            inputValue = inputValue.substr(0, 25) + '...'
        }
        let task = {
            id: null,
            text: inputValue,
            checked: false
        }
        tasks.push(task);
        input.value = "";
        showTasks();
        localStorage.setItem('todoList', JSON.stringify(tasks))
    }
})

function showTasks() {
    if (!tasks.length) {
        todoList.innerHTML = "";
        clearAllBtn.classList.add('disabled')
    }else{
        clearAllBtn.classList.remove('disabled')
    }
    let newTodoElement = '';
    tasks.map((item, index) => {
        newTodoElement +=
            `<li class="list">
                            <input class="checkbox" type="checkbox" id=${item.id = index} ${item.checked ? 'checked' : ''}>
                             ${item.text} 
                            <span id=${index} onclick="deleteTask(${index})" class="icon delete-btn"><i class="fas fa-trash"></i></span>
                </li>`
        todoList.innerHTML = newTodoElement
    })
    let pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = (tasks.length).toString();
}

todoList.addEventListener("change", (e) => {
    let currentId = e.target.getAttribute('id');
    tasks.filter(item => {
        if (item.id === +currentId) {
            item.checked = !item.checked
            localStorage.setItem('todoList', JSON.stringify(tasks))
        }
    })
})

function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("todoList");
    tasks = JSON.parse(getLocalStorageData);
    tasks.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(tasks));
    showTasks();
}

clearAllBtn.addEventListener('click', () => {
    tasks = [];
    localStorage.setItem('todoList', JSON.stringify(tasks));
    showTasks();
})
