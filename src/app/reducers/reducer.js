const initialState = { tasks:[] };

let addTask = (state, task) => {
  let tasks = [...state.tasks];
  tasks.push(task);
  return {
    ...state,
    tasks: tasks
  }
}

let completeTask = (state, id) => {
  let tasks = [...state.tasks];
  tasks.map((t, index) => {
    if (t.id === id) {
      t.completed = true;
    }
  });

  return {
    ...state,
    tasks: tasks
  }
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TASK_ADDED':
      return addTask(state, action.task);
    case 'TASK_COMPLETED':
      return completeTask(state, action.id);
    case 'TASKS_INITIAL':
      return {
        ...state,
        tasks: action.tasks
      }
    default:
      return state;
  }
}

export default reducer;