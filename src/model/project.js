export default class Project {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}
