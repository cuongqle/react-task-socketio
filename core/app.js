const express = require('./express');
const mongoose = require('./mongoose');
const socket = require('./socket');
const config = require('../config/default');

module.exports.init = function init(cb) {
  mongoose.connect((db) => {
    var app = express.init(db);
    if (cb) {
      cb(app, db);
    }
  });
};

module.exports.start = function () {
  this.init((app, db) => {
    var server = app.listen(config.port, function () {
      socket(server);
      console.log('Simple Task management Server started at:');
      console.log('Port:\t\t\t\t' + config.port);
      console.log('Database:\t\t\t\t' + config.db.uri);
    });
  });
}