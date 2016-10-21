/**
 * Created by cyc on 16/10/20.
 */

const
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',                     // 配置生成Source Maps，选择合适的选项
                                                  // 开发阶段非常好的选项，但是在生产阶段一定不要用这个选项
  entry: __dirname + "/app/main.js",              // 唯一入口文件
  output: {
    path: __dirname + "/dist",                    // 打包后的文件存放的地方
    filename: "bundle.js"                         // 打包后输出文件的文件名
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.json$/,                          // 匹配文件拓展名的正则表达式
        loader: "json"                            // loader的名称
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,                  // 忽略node_modules文件夹，不然会很慢
        loader: 'babel',                          // babel配置选项可以单独写到.babelrc文件中
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,                          // 编译sass
        loaders: 'style!css!sass?modules!postcss' // 添加对样式表的处理（感叹号的作用在于使同一文件能够使用不同类型的loader）
                                                  // ?modules表示对样式增加模块化
                                                  // !postcss 使用postcss
      },
      {
        test: /\.pug$/,                           //编译pug
        loader: 'pug-loader'
      }
    ]
  },

  postcss: [
    require('autoprefixer')                       // 调用autoprefixer插件
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"               // 模板位置
    })
  ],

  devServer: {
    contentBase: "./dist",                        // 本地服务器所加载的页面所在的目录
    colors: true,                                 // 终端中输出结果为彩色
    historyApiFallback: true,                     // 单页应用，不跳转页面
    inline: true                                  // 实时刷新
  }
};