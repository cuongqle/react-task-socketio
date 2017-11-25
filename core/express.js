const express = require('express');
const bodyParser = require('body-parser');

module.exports.initMiddleware = function(app) {
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
}

module.exports.init = function (db) {
  // Initialize express app
  var app = express();

  // Initialize Express middleware
  this.initMiddleware(app);

  return app;
}