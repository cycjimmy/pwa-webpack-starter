const
  path = require('path')
  , webpack = require('webpack')
  , webpackMake = require("./webpack.make")
  ;

module.exports = webpackMake({
  output: {
    path: path.resolve('./build', 'scripts'),
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({               // 压缩JS代码
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
  ],
});