import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, text: this.props.text };
    this.handleClick = this.handleClick.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }
  handleClick() {
    this.props.removeTodo(this.props.id);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.text);
    this.toggleEditing();
  }
  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleCompleted() {
    this.props.toggleComplete(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate} className='Todo-edit-form'>
            <input
              type="text"
              name="text"
              onChange={this.handleChange}
              value={this.state.text}
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.iscompleted ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleCompleted}
          >
            {this.props.text}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleEditing}><i class='fas fa-pen'/></button>
            <button onClick={this.handleClick}><i class='fas fa-trash'/></button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
