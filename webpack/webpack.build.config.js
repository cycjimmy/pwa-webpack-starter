const
  path = require('path')
  , autoprefixer = require('autoprefixer')
  , webpack = require('webpack')
  , webpackMerge = require('webpack-merge')
  , webpackBase = require("./webpack.base.js")
  , browserSyncConfig = require('./browserSync.config')

  //webpack插件
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , DefinePlugin = require('webpack/lib/DefinePlugin')
  , UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  , CleanWebpackPlugin = require('clean-webpack-plugin')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin')
  ;


module.exports = webpackMerge(webpackBase, {
  bail: true,

  output: {
    path: path.resolve('./build'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: true,
                localIdentName: '[name]__[local]_[hash:base64:5]',
              }
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ],
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./app', 'view', 'index.pug'),   // 模板位置
      //filename: '../index.html',
      //favicon: path.resolve('./app', 'static', 'favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new CleanWebpackPlugin(['build'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false,
    }),

    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new ExtractTextPlugin({
      filename: 'style/[name]-[hash:6].css',
      disable: false,
      allChunks: true,
    }),

    // 压缩JS代码
    new UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false,
        drop_debugger: true,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true,
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true,
    }),

    new LoaderOptionsPlugin({
      options: {
        context: '/',
        postcss: [
          autoprefixer({
            browsers: [
              'last 4 versions',
              'ie >= 10',
              'ie_mob >= 10',
              'ff >= 30',
              'chrome >= 34',
              'safari >= 8',
              'opera >= 23',
              'ios >= 8',
              'android >= 4.4',
              'bb >= 10',
            ],
          }),
        ],
      },
    }),

    new BrowserSyncPlugin(browserSyncConfig({
      server: {
        baseDir: 'build',
      },
      port: 4000,
      ui: {
        port: 4001
      },
      logLevel: "warn",
    }), {
      reload: false,
    }),
  ],
});