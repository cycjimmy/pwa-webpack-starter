const
  path = require('path')
  , webpackMerge = require('webpack-merge')
  , webpackBase = require("./webpack.base.js")
  , browserSyncConfig = require('./browserSync.config')

  //webpack插件
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , DefinePlugin = require('webpack/lib/DefinePlugin')
  , CleanWebpackPlugin = require('clean-webpack-plugin')
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

    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false,
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./app', 'view', 'index.pug'),   // 模板位置
      //filename: '../index.html',
    }),

    new BrowserSyncPlugin(browserSyncConfig({
      server: {
        baseDir: 'dist',
        routes: {
          "/node_modules": "node_modules",
          "/images": "app/images",
        },
      },
    }), {
      reload: true,
    }),

  ],
});