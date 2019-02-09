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
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear all tasks event
    clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e) {
    // cheak if value is present
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
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
    }

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        // Asks user for confirmation
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks() {
    // Option1
    // taskList.innerHTML = '';

    // Option 2, faster
    //while firstChild is present = while is still something in the list
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild); // removing the first child
    }
}