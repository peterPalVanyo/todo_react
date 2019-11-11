import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
        <div>
            <h2>from the TodoList</h2>
            <Todo />
        </div>
    )
  }
}

export default TodoList;
