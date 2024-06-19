const addButton = document.getElementById("toDoAdd");
const inputText = document.getElementById("toDoText");
const toDoItem = document.getElementById("toDoItem");
loadTasks();
addButton.addEventListener(`click`,addTask);

function addTask (){

    const task = inputText.value.trim();

    if (task) {

        addTaskElement(task);

        toDoText.value=""; 

        saveTasks ()
    } 
    else {
        alert(`Please enter a Task`)
    }
}

function addTaskElement(task) {
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement('button');

    listItem.className = 'listItem';
    listItem.textContent = task;

    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteTask';

    listItem.appendChild(deleteBtn);
    toDoItem.appendChild(listItem);

    listItem.addEventListener('click', function (e) {
        console.log(e)
        if (e.target !== deleteBtn) {
            // console.log(listItem)
            listItem.classList.toggle('strikethrough');
            // console.log('ACTION');
        }
    });

    deleteBtn.addEventListener('click', function () {
        toDoItem.removeChild(listItem);
        saveTasks();
    });
}


function saveTasks () { 
    
    let tasks=[]
    toDoItem.querySelectorAll(`li`).forEach(function(item){
        tasks.push(item.childNodes[0].textContent.trim()); //this now only pushes list content which is node 0 to task variable node 1 which is delete button is not touched 
    })

    localStorage.setItem(`tasks`, JSON.stringify(tasks));

}

function loadTasks (){

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(addTaskElement);
 
}