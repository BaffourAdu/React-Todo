import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todoId={todo.id}
            title={todo.title} 
            completed={todo.completed}
            markComplete={this.props.markComplete}
            deleteTodo={this.props.deleteTodo}
            />
    ));
  }

}

// Checking PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
