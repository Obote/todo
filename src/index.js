import './display.js';
import './todo.js';

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const listItem = document.getElementById('newTaskID').value;
  if (listItem.length > 0) {
    const item = new Todo(listItem);
    display.addToDisplay(item);
    display.resetForm();
  }
});