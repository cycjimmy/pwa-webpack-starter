const
  gulp = require('gulp'),
  webpack = require('webpack'),
  gutil = require('gulp-util'),
  webpackConf = require('../webpack.config'),
  webpackBuildConf = require('../webpack.build.config');


//引用webpack对js进行操作
gulp.task('pack', function (callback) {
  webpack(webpackConf, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
    callback()
  })
});


gulp.task('pack:build', function (callback) {
  webpack(webpackBuildConf, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
    callback()
  })
});
