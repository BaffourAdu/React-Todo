import React from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
    getStyle = () =>{
        return {
            padding: '10px',
            textDecoration: this.props.completed ? 'line-through' : 'none',
            listStyleType: 'none',
            borderBottom: '1px solid black'
        }
    }

    render() {
        return (
            <li style={this.getStyle()}>
                <input 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this, this.props.todoId)}/> 
                {' '}
                { this.props.title }
                <button 
                    style={btnStyle}
                    onClick={this.props.deleteTodo.bind(this, this.props.todoId)}
                    >X</button>
            </li>
        )
    }
}

// Checking PropTypes
TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    todoId: PropTypes.number.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '2px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
  

export default TodoItem
