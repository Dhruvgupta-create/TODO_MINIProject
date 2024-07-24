import React, { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: newTodo }]
    }));
  };

  handleRemove = (index) => {
    this.setState((prevState) => {
      const newTodos = [...prevState.todos];
      newTodos.splice(index, 1);
      return { todos: newTodos };
    });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
