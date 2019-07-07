import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo"
import About from "./components/Pages/About"
import axios from "axios";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => this.setState({ todos: response.data}))
  }

  // Toggle todo as Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(response => this.setState({todos: [...this.state.todos, response.data]}));
  };

  // Delete todo
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app" style={styles}>
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const styles = {
  backgroundColor: "#f4f4f4"
};

export default App;
