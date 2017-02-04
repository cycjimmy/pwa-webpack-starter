const
  path = require('path')
  , webpackMake = require("./webpack.make")
  ;

module.exports = webpackMake({
  devtool: 'eval-source-map',
  output: {
    path: path.resolve('./dist', 'scripts'),
  },
});