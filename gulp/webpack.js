const
  gulp = require('gulp'),
  webpack = require('webpack-stream'),
  browserSync = require('browser-sync'),
  webpackConf = require('../webpack/webpack.config'),
  webpackBuildConf = require('../webpack/webpack.build.config');


//引用webpack对js进行操作
gulp.task('pack', function () {
  return gulp.src(srcPaths.scripts)
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('pack:build', function () {
  return gulp.src(srcPaths.scripts)
    .pipe(webpack(webpackBuildConf))
    .pipe(gulp.dest('build/scripts'));
});



