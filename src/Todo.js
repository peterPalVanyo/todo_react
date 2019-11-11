import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, text:this.props.text };
    this.handleClick = this.handleClick.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleClick() {
    this.props.removeTodo(this.props.id);
  }
  handleChange(e) {
    this.setState({text: e.target.value})
  }
  handleUpdate(e) {
    e.preventDefault()
    this.props.updateTodo(this.props.id, this.state.text)
    this.toggleEditing()
  }
  toggleEditing() {
      this.setState({isEditing: !this.state.isEditing})
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" name='text' onChange={this.handleChange} value={this.state.text}></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <p>{this.props.text}</p>
          <button onClick={this.handleClick}>X</button>
          <button onClick={this.toggleEditing} >Y</button>
        </div>
      );
    }
    return result
  }
}

export default Todo;
