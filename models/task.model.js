const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);

// create a schema
var TaskSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  completed: Boolean
});

TaskSchema.plugin(autoIncrement.plugin, { model: 'Task', field: 'id' });

module.exports = mongoose.model('Task', TaskSchema);

