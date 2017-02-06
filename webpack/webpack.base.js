/**
 * Created by cyc on 2017/2/4.
 */

const
  path = require('path')
  , webpack = require('webpack')
  , CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
  ;

module.exports = {

  entry: {
    "vendor": [
      "iscroll",
      "fastclick",
    ],
    "bundle": path.resolve('./app', 'scripts', 'main.js')
  },

  output: {
    filename: "[name]-[hash:6].js"
  },

  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules'),
    ],
    'alias': {
      'iscroll': path.resolve('./node_modules', 'iscroll', 'build', 'iscroll-lite.js'),
      'fastclick': path.resolve('./node_modules', 'fastclick', 'lib', 'fastclick.js'),
    },
    'extensions': ['.js', '.pug', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader'
      },
    ]
  },

  plugins: [
    new CommonsChunkPlugin({
      names: ["bundle", "vendor"],
      minChunks: Infinity,
    }),
  ],
};