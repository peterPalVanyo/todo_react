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
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  }
  updateTodo(id, updatedText) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  }
  toggleComplete(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, iscompleted: !todo.iscompleted };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  }
  displayTodos() {
    return this.state.todos.map(todo => (
      <Todo
        text={todo.text}
        key={todo.id}
        removeTodo={this.removeTodo}
        id={todo.id}
        updateTodo={this.updateTodo}
        iscompleted={todo.iscompleted}
        toggleComplete={this.toggleComplete}
      />
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
