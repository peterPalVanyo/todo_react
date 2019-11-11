import React, { Component } from "react";
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({...this.state, id: uuid(), iscompleted: false});
    this.setState({ text: ""});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='text'>New Todo: </label>
        <input
          type="text"
          id="text"
          placeholder="new todo"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        ></input>
        <button>Add New Todo</button>
      </form>
    );
  }
}
export default NewTodoForm;
