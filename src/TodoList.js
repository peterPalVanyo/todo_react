import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import  NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "second todo", isCompleted: false },
        { text: "third todo", isCompleted: false }
      ]
    };
    this.displayTodos = this.displayTodos.bind(this);
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(todo) {
    console.log(todo)
  }
  displayTodos() {
    return this.state.todos.map(todo => (
      <li>
        <Todo text={todo.text} isCompleted={todo.isCompleted} />
      </li>
    ));
  }
  render() {
    return (
      <div className="TodoList">
        <h2>from the TodoList</h2>
        <NewTodoForm addTodo={this.addTodo}/>
        <ul>{this.displayTodos()}</ul>
      </div>
    );
  }
}

export default TodoList;
