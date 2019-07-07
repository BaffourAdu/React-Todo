import React from "react";
import PropTypes from 'prop-types';

export class AddTodo extends React.Component {
    state = {
        title: ''
    };

    updateStateValue = (event) => this.setState({
        [event.target.name] : event.target.value
    })

    storeTodo = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
        <form onSubmit={this.storeTodo} style={{ display: 'flex' }}>
            <input 
                type="text"
                name="title"
                placehodler="Add Todo .." 
                value={this.state.title}
                onChange={this.updateStateValue}
                style={{ flex: '10' }}/>
            <input
                type="submit"
                value="Add"
                className="btn"
                style={{ flex: '1' }}/>
        </form>
        );
    }
}

// Checking PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
