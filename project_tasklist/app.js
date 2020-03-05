// Define UI vars
const form      = document.querySelector('#task-form');
const taskList  = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter    = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listiners
loadAllEventListeners();

function loadAllEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add task event
    form.addEventListener('submit', addTask);

    //Remove single task
    taskList.addEventListener('click', removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTasks);

    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);

}

function getTasks() {
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
        tasks.forEach(function(task){
        // Create li element <li></li>
        const li = document.createElement('li');

        // Add class to li <li class="collection-item"></li>
        li.className = 'collection-item';

        //Create text node and append to li <li class="collection-item">{taskInput.value}</li>
        li.appendChild(document.createTextNode(task));

        //Create new link element <a></a>
        const link = document.createElement('a');

        //Add class to link <a class="delete-item secondary-content"></a>
        link.className = 'delete-item secondary-content';

        //Add icon to <i class="fa fa-remove"></i>
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //Append link to li
        //<li class="collection-item">{taskInput.value}
            // <a class="delete-item secondary-content">
                // <i class="fa fa-remove"></i>
            // </a>
        // </li>
        li.appendChild(link);

        //Append li to ul
        taskList.appendChild(li);
    })
}

function addTask (event) {
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element <li></li>
    const li = document.createElement('li');

    // Add class to li <li class="collection-item"></li>
    li.className = 'collection-item';

    //Create text node and append to li <li class="collection-item">{taskInput.value}</li>
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link element <a></a>
    const link = document.createElement('a');

    //Add class to link <a class="delete-item secondary-content"></a>
    link.className = 'delete-item secondary-content';

    //Add icon to <i class="fa fa-remove"></i>
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append link to li
    //<li class="collection-item">{taskInput.value}
        // <a class="delete-item secondary-content">
            // <i class="fa fa-remove"></i>
        // </a>
    // </li>
    li.appendChild(link);


    //Append li to ul
    taskList.appendChild(li);

    //Store Tasks in localStorage
    storeTasksInLocalStorage(taskInput.value);

    //Clear task
    taskInput.value = '';

    event.preventDefault();
}

function removeTask(event) {
    if(event.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            event.target.parentElement.parentElement.remove();

            //Remove from LS
            removeTaskFromLocalStorage(event.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function storeTasksInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
    // Slower
    // taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();

}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(event) {
    const text = event.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );

    console.log(text);
}