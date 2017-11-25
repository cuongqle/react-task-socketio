var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  var _config = {
    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'sinon'],

    reporters: ['mocha'],

    files: [
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      './tests.webpack.js'
    ],
    preprocessors: {
      './tests.webpack.js': ['webpack', 'sourcemap']
    },

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-chai"),
      require("karma-sinon"),
      require("karma-coverage")
    ],

    client: {
      mocha: {
        timeout: 5000
      }
    },

    mochaReporter: {
      showDiff: true
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    reporters: ["mocha", "coverage"],

    mochaReporter: {
      showDiff: true
    },

    autoWatch: false,

    colors: true,

    singleRun: true
  };

  config.set(_config);
};
