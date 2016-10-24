const
  path = require('path'),
  webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname+ '/app/scripts/main.js',
  output: {
    path: __dirname + "/dist/scripts",
    filename: "bundle.js"
  },
  debug: true,

  resolve: {
    'root': [path.resolve('./app')],
    'extensions': ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};