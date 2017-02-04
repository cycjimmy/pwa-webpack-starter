/**
 * Created by cyc on 2017/2/4.
 */

const
  path = require('path')
  , webpack = require('webpack')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  ;

module.exports = function (options) {

  //默认参数
  options = Object.assign({
    output: {
      path: path.resolve('./dist', 'scripts'),
    },
    devtool: '',
    plugins: [],
  }, options);

  //基础配置
  let config = {
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
      'extensions': ['.js', '.pug']
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
      new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor"]
      }),

      new HtmlWebpackPlugin({
        template: path.resolve('./app', 'view', 'index.pug'),   // 模板位置
        filename: '../index.html'
      })
    ],

  };


  //赋值devtool
  if (options.devtool) {
    config.devtool = options.devtool;
  }

  //赋值output.path(必选)
  config.output.path = options.output.path;

  //赋值插件
  config.plugins.push(...options.plugins);

  return config;
};