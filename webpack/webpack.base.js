/**
 * Created by cyc on 2017/2/4.
 */

const
  path = require('path')
  , webpack = require('webpack')

  // Webpack Plugin
  , CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
  ;

module.exports = {
  entry: {
    "vendor": [
      "iscroll",
      "fastclick",
    ],
    "main": path.resolve('./app', 'main.js'),
  },

  output: {
    filename: "scripts/[name].bundle.[hash:6].js",
    chunkFilename: 'scripts/[name].[chunkhash:6].chunk.js',
    //publicPath: '/'
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
      // Scripts
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // Pictures
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

      // Svg icons
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

      // Font
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

      // Pug template
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
  ],
};