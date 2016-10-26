const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    "vendor": ["jquery"],
    "bundle": path.resolve('./app', 'scripts', 'main.js')
  },

  output: {
    path: path.resolve('./dist', 'scripts'),
    filename: "[name]-[hash].js"
  },

  debug: true,

  resolve: {
    'root': [
      path.resolve('./app'),
      path.resolve('./node_modules'),
    ],
    'alias': {
      'jquery': path.resolve('./node_modules', 'jquery','dist','jquery.min.js')
    },
    'extensions': ['', '.js', '.pug']
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
      },
      {
        test: /\.pug$/,                           //编译pug
        loader: 'pug'
      }
    ]

  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"]
    }),

    new HtmlWebpackPlugin({
      template: path.resolve('./app', 'pug', 'index.pug'), // 模板位置
      filename: '../index.html'
    })
  ]
};