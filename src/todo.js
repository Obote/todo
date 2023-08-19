let todoIdCounter = 1;

function Todo(title) {
  this.id = todoIdCounter++;
  this.title = title;
  this.isComplete = false;
}

export default Todo;
