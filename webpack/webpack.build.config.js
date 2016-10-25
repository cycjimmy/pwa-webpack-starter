const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: path.resolve('./app', 'scripts', 'main.js'),
  output: {
    path: path.resolve('./build', 'scripts'),
    filename: "bundle-[hash].js"
  },

  resolve: {
    'root': [path.resolve('./app')],
    'alias':[path.resolve('./app')],
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
      },
      {
        test: /\.pug$/,                           //编译pug
        loader: 'pug-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/pug/index.pug',                  // 模板位置
      filename: '../index.html'
    }),

    new webpack.optimize.OccurenceOrderPlugin(),        // 为组件分配ID
    new webpack.optimize.UglifyJsPlugin()               // 压缩JS代码
  ],
};