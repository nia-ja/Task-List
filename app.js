//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector("#filter");
const taskInput = document.querySelector('#task');

//Load all event listeners (call)
loadEventListeners();

//Load al event listeners (function)

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
    // cheak if value is present
    if(taskInput.value === '') {
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //Add a class
    li.className = 'collection-item';
    //Create a text node
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element 
    const link = document.createElement('a');
    // Add a class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li as a child to ul
    taskList.appendChild(li);
    //Clear input
    taskInput.value = '';

    e.preventDefault();
}