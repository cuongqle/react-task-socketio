const config = require('../config/default');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

module.exports.connect = function (cb) {
  mongoose.connect(config.db.uri, config.db.options)
  const db = mongoose.connection;

  db.on('error', ()=> {
    console.log( '-----Failed to connect to mongoose')
  });

  db.once('open', () => {
    console.log( '+++++Server connected to mongoose')
    if (cb) {
      cb(db);
    }
  });
}