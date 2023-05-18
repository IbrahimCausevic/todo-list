import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    taskName: "",
    todoList: [],
  };

  addNewTask = () => {
    const newToDoList = [...this.state.todoList];
    newToDoList.push(this.state.taskName);
    this.setState({ taskName: "", todoList: newToDoList });
  };

  clearAllTasks = () => {
    this.setState({ taskName: "", todoList: [] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="todo__box">
            <div className="title">
              <h2 className="h__todo">Todo App</h2>
            </div>
            <div className="form">
              <input
                id="taskName"
                placeholder="Add your new todo"
                value={this.state.taskName}
                onChange={(event) => {
                  const taskNameValue = event.target.value;
                  this.setState({ taskName: taskNameValue });
                }}
              />
              <button id="btnn1" className="btnn1" onClick={this.addNewTask}>
                +
              </button>
            </div>
            <div id="list" className="d-grid gap-2 col-6 button">
              {this.state.todoList.map((task) => (
                <p className="list-items">{task}</p>
              ))}
            </div>
            <div className="footerr">
              <p className="p">
                You have{" "}
                <span id="numberOfItems">{this.state.todoList.length}</span>{" "}
                pending tasks
              </p>
              <button id="btnn2" className="btnn2" onClick={this.clearAllTasks}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
