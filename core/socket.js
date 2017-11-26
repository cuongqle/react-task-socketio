const http = require('http');
const sio = require('socket.io');
const task = require('../services/task.service');
const connections = [];

module.exports = function (server) {
  var io = sio(server);

  io.sockets.on('connection', (socket) => {
    console.log("Connected to Socket!!"+ socket.id);

    connections.push(socket);

    task.getAllTasks().then((result) => {
      io.sockets.emit('allTasks', result);
    });

    socket.on('disconnect', function(){
      console.log('Disconnected - '+ socket.id);
    });

    socket.on('addTask',(newTask)=>{
      task.create(newTask).then(result => {
        io.sockets.emit('taskAdded', result);
      });
    });

    socket.on('completeTask',(completedTask)=>{
      task.update(completedTask).then(result => {
        io.sockets.emit('taskCompleted', result);
      });
    });
  });

  return io;
};