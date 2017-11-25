export const taskAdded = (data) => ({
  type: "TASK_ADDED",
  task: data.task
});

export const taskCompleted = (data) => ({
  type: "TASK_COMPLETED",
  id: data.id
})

export const initial = (res) => ({
  type: "TASKS_INITIAL",
  tasks: res
});

export const loadTasks = (socket) => {
  return (dispatch) => {
    socket.on('allTasks',(res)=>{
      dispatch(initial(res))
    })
  }
}

export const addTask = (socket, task) => {
  return (dispatch) => {
    socket.emit('addTask',task)
  }
}

export const completeTask = (socket, task) => {
  return (dispatch) => {
    socket.emit('completeTask',task)
  }
}



