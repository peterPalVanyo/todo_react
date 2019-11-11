import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component {

    render() {
        const handleClick = function() {
            console.log()
        }
        return (
            <div className='Todo'>
                <p>{this.props.text}</p>
                <button onClick={handleClick} >X</button>
                <button>Y</button>
            </div>
        )
    }
}

export default Todo