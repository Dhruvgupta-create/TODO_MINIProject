import React, { Component } from "react";

export class Todo extends Component {
  handleRemoveClick = () => {
    this.props.handleRemove(this.props.index);
  };

  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={this.handleRemoveClick}>x</button>
      </div>
    );
  }
}
