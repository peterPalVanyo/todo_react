import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.displayTodos = this.displayTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  displayTodos() {
    return this.state.todos.map(todo => (
      <li key={todo.id}>
        <Todo text={todo.text} key={todo.id} />
      </li>
    ));
  }
  render() {
    return (
      <div className="TodoList">
        <h2>from the TodoList</h2>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{this.displayTodos()}</ul>
      </div>
    );
  }
}

export default TodoList;
