const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: __dirname+ '/app/scripts/main.js',
  output: {
    path: __dirname + "/build/scripts",
    filename: "bundle.js"
  },

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
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),        // 为组件分配ID
    new webpack.optimize.UglifyJsPlugin()               // 压缩JS代码
  ],
};