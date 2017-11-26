const TaskModel = require('../models/task.model');

exports.getAllTasks = (task) => {
  return new Promise((res, rej) => {
    return TaskModel.find({},(err,result) => {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    });
  });
};

exports.create = (task) => {
  var newTask = new TaskModel({
    name: task.name,
    description: task.description,
    completed: task.completed
  });

  return newTask.save();
};

exports.update = (task) => {
  return new Promise((res, rej) => {
    return TaskModel.update({id: task.id}, {completed: task.completed}, (err,result) => {
      if (err) {
        rej(err);
      } else {
        res({id: task.id});
      }
    });
  });
};