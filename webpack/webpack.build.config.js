const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "vendor": ["jquery"],
    "bundle": path.resolve('./app', 'scripts', 'main.js')
  },

  output: {
    path: path.resolve('./build', 'scripts'),
    filename: "[name]-[hash].js"
  },

  resolve: {
    'root': [
      path.resolve('./app'),
      path.resolve('./node_modules'),
    ],
    'alias': {
      'src': path.resolve('./app', 'scripts')
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
        loader: 'pug-loader'
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
    }),

    new webpack.optimize.OccurenceOrderPlugin(),        // 为组件分配ID
    new webpack.optimize.UglifyJsPlugin()               // 压缩JS代码
  ],
};