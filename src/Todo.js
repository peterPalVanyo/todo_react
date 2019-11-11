import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component {
    render() {
        return (
            <div className='Todo'>
                <p>{this.props.text}</p>
                <button>X</button>
                <button>Y</button>
            </div>
        )
    }
}

export default Todo