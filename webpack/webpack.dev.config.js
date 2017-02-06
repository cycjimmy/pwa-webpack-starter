const
  path = require('path')
  , webpackMerge = require('webpack-merge')
  , webpackBase = require("./webpack.base.js")

  , getDataAjax = require('../mock/getData.ajax')

  //webpack插件
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , DefinePlugin = require('webpack/lib/DefinePlugin')
  ;

module.exports = webpackMerge(webpackBase, {
  devtool: 'eval-source-map',
  output: {
    path: path.resolve('./dist'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64:5]',
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./app', 'view', 'index.pug'),   // 模板位置
      //filename: '../index.html',
    }),

    new BrowserSyncPlugin({
      server: {
        baseDir: 'dist',                                   //目录
        routes: {
          "/node_modules": "node_modules",
          "/images": "app/images",
        },
        //https: true,
      },
      ghostMode: false,
      logLevel: "debug",
      middleware: [
        {
          route: "/getData",
          handle: getDataAjax(),
        },
      ],
    }),


  ],
});