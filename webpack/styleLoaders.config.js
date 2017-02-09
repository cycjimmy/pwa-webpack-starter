/**
 * Created by cyc on 2017/2/9.
 */

const
  autoprefixer = require('autoprefixer')
  ;


module.exports = options => {
  return Object.assign({
    cssLoader: {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: true,
        localIdentName: '[name]__[local]_[hash:base64:6]',
      }
    },
    sassLoader: {
      loader: 'sass-loader',
      options: {
        outputStyle: 'expanded',
        sourceMap: true,
        sourceMapContents: true
      }
    },

    postcssOptions: [
      autoprefixer({
        browsers: [
          'last 4 versions',
          'ie >= 10',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 40',
          'safari >= 8',
          'opera >= 23',
          'ios >= 8',
          'android >= 4.4',
          'bb >= 10',
        ],
      }),
    ],
  }, options);

};