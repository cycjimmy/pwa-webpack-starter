/**
 * Created by cyc on 2017/2/4.
 */

const
  path = require('path')
  , autoprefixer = require('autoprefixer')
  , webpack = require('webpack')
  , CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
  , LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  ;


let
  cssLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      modules: true,
      localIdentName: '[name]__[local]_[hash:base64:6]',
    }
  },
  sassLoader = {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true
    }
  };


module.exports = {

  entry: {
    "vendor": [
      "iscroll",
      "fastclick",
    ],
    "bundle": path.resolve('./app', 'scripts', 'main.js')
  },

  output: {
    //publicPath: '/assets/',
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
    'extensions': ['.js']
  },

  module: {
    rules: [
      //脚本
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      //样式
      //提取
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: path.resolve('app', 'sass'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            {
              loader: 'postcss-loader',
            },
            sassLoader,
          ],
        })
      },

      //模块化
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: path.resolve('app', 'scripts'),
        use: [
          {
            loader: 'style-loader'
          },
          cssLoader,
          {
            loader: 'postcss-loader',
          },
          sassLoader,
        ]
      },

      //图片
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [
          path.resolve('node_modules'),
          path.resolve('static', 'images', 'icons'),
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: 'images/[name]-[hash:6].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              mozjpeg: {
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              },
            }
          }
        ],
      },


      //svg图标
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        include: path.resolve('static', 'images', 'icons'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/icons/[name]-[hash:6].[ext]',
            }
          }
        ],
      },

      //字体
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name]-[hash:6].[ext]',
            }
          }
        ],
      },

      //模板
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader',
      },
    ]
  },

  plugins: [
    new CommonsChunkPlugin({
      names: ["bundle", "vendor"],
      minChunks: Infinity,
    }),

    new ExtractTextPlugin({
      filename: 'style/[name]-[hash:6].css',
      disable: false,
      allChunks: true,
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

  ],
};