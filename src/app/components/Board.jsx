import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import io from "socket.io-client";

import {loadTasks, addTask, completeTask, taskAdded, taskCompleted} from '../actions/action';

export class Board extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.socket = io.connect("http://localhost:3000")
    if (this.props.loadTasks) {
      this.props.loadTasks(this.socket);
    }

    this.socket.on('taskAdded',(res)=>{
      this.props.taskAdded({task: res});
    })

    this.socket.on('taskCompleted',(res)=>{
      this.props.taskCompleted({task: res});
    })
  }

  addNewTask() {
    let newTask =  ReactDOM.findDOMNode(this.refs.newTask);
    let taskName = newTask.value;
    this.props.addTask(this.socket, {name: taskName, description: taskName});
    newTask.value = "";
  }

  completeTask(task) {
    task.completed = true;
    this.props.completeTask(this.socket, task);
  }

  render() {
    const {tasks} = this.props
    return (
        <div id="task-management">
          <header id="header">
            <h1>Tasks</h1>
            <input type="text" ref="newTask" className="new-task" placeholder="New task"></input>
            <div className="add-task-btn" onClick={()=>this.addNewTask()}>Add</div>
          </header>
          <div>
            <ul>
              {
                !!tasks && tasks.map((task, key)=>{
                  return (
                      <li className={`task ${task.completed?'task-completed':''}`} key={key}>
                        <label>{task.name}</label>
                        {
                          !task.completed && <div className="completed-btn" onClick={()=>this.completeTask(task)}>Done</div>
                        }
                      </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadTasks: (socket) => dispatch(loadTasks(socket)),
  addTask: (socket, task) => dispatch(addTask(socket, task)),
  completeTask: (socket, task) => dispatch(completeTask(socket, task)),
  taskAdded: (task) => dispatch(taskAdded(task)),
  taskCompleted: (task) => dispatch(taskCompleted(task))
})

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board)