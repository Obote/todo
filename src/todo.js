let todoIdCounter = 1;

function Todo(title) {
  // eslint-disable-next-line no-plusplus
  this.id = todoIdCounter++;
  this.title = title;
  this.isComplete = false;
}

export default Todo;
