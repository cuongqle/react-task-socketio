require('babel-register');

const env = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const publicPath = process.env.PUBLIC_PATH || "/";

module.exports = {
  entry: ["./src/app/index"],
  output: {
    path: "/dist",
    filename: 'bundle.js',
    publicPath: publicPath
  },
  resolve: {
    modules: [
      './src',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.css', '.scss', '.svg', '.html', '.ico']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        PUBLIC_PATH: JSON.stringify(publicPath)
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    }),
    new ExtractTextPlugin('index.[contenthash].css')
  ]
}