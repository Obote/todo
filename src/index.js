import './style.css';

// Define an array of tasks
const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

// Function to populate the task list
function populateTaskList() {
  const taskList = document.getElementById('tasks');

  // Sort tasks by their index values
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const listDiv = document.createElement('div');
    listDiv.classList.add('list-div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    checkbox.checked = task.completed;

    const description = document.createElement('p');
    description.textContent = task.description;

    const ellipsisIcon = document.createElement('i');
    ellipsisIcon.classList.add('fas', 'fa-ellipsis-vertical');

    listDiv.appendChild(checkbox);
    listDiv.appendChild(description);
    listItem.appendChild(listDiv);
    listItem.appendChild(ellipsisIcon);

    taskList.appendChild(listItem);
  });
}

// Function to run when the page loads
function onPageLoad() {
  populateTaskList();
}

// Add an event listener to run onPageLoad when the DOM is ready
document.addEventListener('DOMContentLoaded', onPageLoad);
