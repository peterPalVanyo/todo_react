import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.removeTodo(this.props.id)
    }
    render() {
        return (
            <div className='Todo'>
                <p>{this.props.text}</p>
                <button onClick={this.handleClick} >X</button>
                <button>Y</button>
            </div>
        )
    }
}

export default Todo