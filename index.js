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

function addTaskElement(task){              // adds a task to the list

    const listItem = document.createElement("li"); 
    const deleteBtn = document.createElement('button');
    
    listItem.textContent=(task);

    deleteBtn.textContent=(`Delete`);
    deleteBtn.className=(`deleteTask`);

    toDoItem.appendChild(listItem);
    toDoItem.appendChild(deleteBtn);

    deleteBtn.addEventListener(`click`, function(){
        // localStorage.removeItem()
        toDoItem.removeChild(listItem);
        toDoItem.removeChild(deleteBtn);
        saveTasks()
    })
}

function saveTasks () { 
    
    let tasks=[]
    toDoItem.querySelectorAll(`li`).forEach(function(item){
        tasks.push(item.textContent.trim());
    })

    localStorage.setItem(`tasks`, JSON.stringify(tasks));

}

function loadTasks (){

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(addTaskElement);
 
}