import React, {Component} from 'react'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            text:'',
            isComplete:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({text: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({text:'', isComplete:false})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='text' value={this.state.text} onChange={this.handleChange} isComplete={false}></input>
                <button>Add New Todo</button>
            </form>
        )
    }
}
export default NewTodoForm